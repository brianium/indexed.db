(ns indexed.db.store-test
  (:require [cljs.test :refer [deftest is async use-fixtures]]
            [indexed.db.cursor :as cursor]
            [indexed.db.database :as db]
            [indexed.db.events :as events]
            [indexed.db.key-range :as key-range]
            [indexed.db.request :as request]
            [indexed.db.store :as store]
            [indexed.db.transaction :as txn]
            [indexed.db.test-util :as util]))

(defonce *db (atom nil))

(def database-name "indexed.db.store-test")

(def database-version 1)

(defn transaction
  ([db mode]
   (db/transaction db (db/object-store-names db) mode))
  ([mode]
   (let [db @*db]
     (transaction db mode)))
  ([]
   (transaction "readonly")))

(defn store
  ([db store-name mode]
   (txn/object-store (transaction db mode) store-name))
  ([store-name mode]
   (txn/object-store (transaction mode) store-name))
  ([store-name]
   (store store-name "readonly")))

(defn add-many
  [object-store done items]
  (let [*counter (atom 0)]
    (loop [item (first items)
           rest (next items)]
      (when (some? item)
        (events/on (store/add object-store (clj->js item)) "success"
          (fn []
            (when (= (count items) (swap! *counter inc))
              (done))))
        (recur (first rest) (next rest))))))

(use-fixtures :once
  {:before
   #(async
     done
     (util/test-connect
      database-name
      database-version
      {:success
       (fn [idb]
         (reset! *db (db/create-database idb))
         (done))

       :upgradeneeded
       (fn [idb]
         (let [db    (db/create-database idb)
               store (db/create-object-store db "toDoList" {:key-path "taskTitle"})]
           (store/create-index store "hours" "hours" {:unique? false})
           (store/create-index store "minutes" "minutes" {:unique? false})
           (store/create-index store "day" "day" {:unique? false})
           (store/create-index store "month" "month" {:unique? false})
           (store/create-index store "year" "year" {:unique? false})
           (store/create-index store "notified" "notified" {:unique? false})
           (store/create-index store "deleteme" "deleteme" {:unique? false})))

       :blocked
       (fn []
         (db/close @*db))

       :error
       (fn []
         (println "Failed test connected")
         (done))}))})

(use-fixtures :each
  {:before
   #(async
     done
     (-> (store "toDoList" "readwrite")
         (add-many
          done
          [{:taskTitle "Walk dog"
            :hours     19
            :minutes   30
            :day       24
            :month     "December"
            :year      2013
            :notified  "no"}
           {:taskTitle "Party hard"
            :hours     24
            :minutes   0
            :day       23
            :month     "March"
            :year      2022
            :notified  "no"}
           {:taskTitle "Read that book"
            :hours     13
            :minutes   0
            :day       22
            :month     "March"
            :year      2022
            :notified  "no"}])))
   :after
   #(async
     done
     (-> (store "toDoList" "readwrite")
         (store/clear)
         (events/on "success" done)))})

(deftest test-index-names
  (let [todo-list   (store "toDoList")
        index-names (set (store/index-names todo-list))]
    (is (= #{"hours" "minutes" "day" "month" "year" "notified" "deleteme"} index-names))))

(deftest test-key-path
  (let [todo-list (store "toDoList")]
    (is (= "taskTitle" (store/key-path todo-list)))))

(deftest test-name
  (let [todo-list (store "toDoList")]
    (is (= "toDoList" (store/name todo-list)))))

(deftest test-getting-transaction
  (let [todo-list (store "toDoList")
        txn       (txn/transaction todo-list)]
    (is (txn/transaction? txn))))

(deftest test-auto-increment?
  (let [todo-list (store "toDoList")]
    (is (false? (store/auto-increment? todo-list)))))

(deftest test-count-all
  (async
   done
   (-> (store/count (store "toDoList"))
       (events/on "success" (fn [e]
                              (is (= 3 (request/result
                                        (request/from-event e))))
                              (done))))))

(deftest test-count-by-key
  (async
   done
   (-> (store/count (store "toDoList") "Walk dog")
       (events/on "success" (fn [e]
                              (is (= 1 (request/result
                                        (request/from-event e))))
                              (done))))))

(deftest test-delete-by-key
  (async
   done
   (let [txn       (transaction "readwrite")
         todo-list (txn/object-store txn "toDoList")]
     (store/delete todo-list "Walk dog")
     (events/on txn "complete" (fn []
                                 (is (true? true))
                                 (done))))))

(deftest test-delete-index
  (db/close @*db) ;;; close to prevent blocking
  (async
   done
   (util/open
    database-name
    (inc database-version)
    {:success
     (fn [idb]
       (reset! *db (db/create-database idb))
       (let [todo-list (store "toDoList")
             names (set (store/index-names todo-list))]
         (is (false? (contains? names "deleteme")))
         (done)))

     :upgradeneeded
     (fn [_ txn]
       (let [todo-list (txn/object-store txn "toDoList")]
         (store/delete-index todo-list "deleteme")))})))

(deftest test-get
  (async
   done
   (-> (store "toDoList")
       (store/get "Walk dog")
       (events/on "success" (fn [e]
                              (is (= "Walk dog" (.-taskTitle (request/result
                                                              (request/from-event e)))))
                              (done))))))

(deftest test-get-key
  (async
   done
   (-> (store "toDoList")
       (store/get-key "Walk dog")
       (events/on "success" (fn [e]
                              (is (= "Walk dog" (request/result
                                                 (request/from-event e))))
                              (done))))))

(deftest test-get-all-no-key
  (async
   done
   (-> (store "toDoList")
       (store/get-all)
       (events/on "success" (fn [e]
                              (is (= 3 (count (request/result
                                               (request/from-event e)))))
                              (done))))))

(deftest test-get-all-with-key
  (async
   done
   (-> (store "toDoList")
       (store/get-all (key-range/bound "Party hard" "Walk dog"))
       (events/on "success" (fn [e]
                              (is (= 3 (count (request/result
                                               (request/from-event e)))))
                              (done))))))

(deftest test-get-all-with-key-and-count
  (async
   done
   (-> (store "toDoList")
       (store/get-all (key-range/bound "Party hard" "Walk dog") 2)
       (events/on "success" (fn [e]
                              (is (= 2 (count (request/result
                                               (request/from-event e)))))
                              (done))))))

(deftest test-get-all-keys-no-key
  (async
   done
   (-> (store "toDoList")
       (store/get-all-keys)
       (events/on "success" (fn [e]
                              (is (= 3 (count (request/result
                                               (request/from-event e)))))
                              (done))))))

(deftest test-get-all-keys-with-key
  (async
   done
   (-> (store "toDoList")
       (store/get-all-keys (key-range/bound "Party hard" "Walk dog"))
       (events/on "success" (fn [e]
                              (is (= 3 (count (request/result
                                               (request/from-event e)))))
                              (done))))))

(deftest test-get-all-keys-with-key-and-count
  (async
   done
   (-> (store "toDoList")
       (store/get-all-keys (key-range/bound "Party hard" "Walk dog") 2)
       (events/on "success" (fn [e]
                              (is (= 2 (count (request/result
                                               (request/from-event e)))))
                              (done))))))

(deftest test-getting-an-index
  (let [todo-list (store "toDoList")]
    (is (store/index? (store/index todo-list "hours")))))

(deftest test-open-cursor-no-args
  (async
   done
   (let [todo-list (store "toDoList")]
     (-> (store/open-cursor todo-list)
         (events/on "success" (fn [e]
                                (let [value (-> (request/from-event e)
                                                (request/result)
                                                (cursor/create-cursor-with-value todo-list)
                                                (cursor/value))]
                                  (is (= "Party hard" (.-taskTitle value)))
                                  (done))))))))

(deftest test-open-cursor-with-query
  (async
   done
   (let [todo-list  (store "toDoList")
         *iteration (atom 0)]
     (-> (store/open-cursor todo-list (key-range/bound "Read that book" "Walk dog"))
         (events/on "success" (fn [e]
                                (let [cursor    (some-> (request/from-event e)
                                                        (request/result)
                                                        (cursor/create-cursor-with-value todo-list))
                                      iteration (swap! *iteration inc)]
                                  (if-not (< iteration 3)
                                    (do
                                      (is (nil? cursor))
                                      (done))
                                    (do
                                      (cond
                                        (= iteration 1) (is (= "Read that book" (.-taskTitle (cursor/value cursor))))
                                        (= iteration 2) (is (= "Walk dog" (.-taskTitle (cursor/value cursor))))
                                        :else           (throw (ex-info "Unexpected cursor iteration" {})))
                                      (cursor/continue cursor))))))))))

(deftest test-open-cursor-with-query-and-direction
  (async
   done
   (let [todo-list  (store "toDoList")
         *iteration (atom 0)]
     (-> (store/open-cursor todo-list (key-range/upper-bound "Read that book") "prev")
         (events/on "success" (fn [e]
                                (let [cursor    (some-> (request/from-event e)
                                                        (request/result)
                                                        (cursor/create-cursor-with-value todo-list))
                                      iteration (swap! *iteration inc)]
                                  (if-not (< iteration 3)
                                    (do
                                      (is (nil? cursor))
                                      (done))
                                    (do
                                      (cond
                                        (= iteration 1) (is (= "Read that book" (.-taskTitle (cursor/value cursor))))
                                        (= iteration 2) (is (= "Party hard" (.-taskTitle (cursor/value cursor))))
                                        :else           (throw (ex-info "Unexpected cursor iteration" {})))
                                      (cursor/continue cursor))))))))))

(deftest test-open-key-cursor-no-args
  (async
   done
   (let [todo-list (store "toDoList")]
     (-> (store/open-key-cursor todo-list)
         (events/on "success" (fn [e]
                                (let [k (-> (request/from-event e)
                                            (request/result)
                                            (cursor/create-cursor todo-list)
                                            (cursor/key))]
                                  (is (= "Party hard" k))
                                  (done))))))))

(deftest test-open-key-cursor-with-query
  (async
   done
   (let [todo-list  (store "toDoList")
         *iteration (atom 0)]
     (-> (store/open-key-cursor todo-list (key-range/bound "Read that book" "Walk dog"))
         (events/on "success" (fn [e]
                                (let [cursor    (some-> (request/from-event e)
                                                        (request/result)
                                                        (cursor/create-cursor todo-list))
                                      iteration (swap! *iteration inc)]
                                  (if-not (< iteration 3)
                                    (do
                                      (is (nil? cursor))
                                      (done))
                                    (do
                                      (cond
                                        (= iteration 1) (is (= "Read that book" (cursor/key cursor)))
                                        (= iteration 2) (is (= "Walk dog" (cursor/key cursor)))
                                        :else           (throw (ex-info "Unexpected cursor iteration" {})))
                                      (cursor/continue cursor))))))))))

(deftest test-open-key-cursor-with-query-and-direction
  (async
   done
   (let [todo-list  (store "toDoList")
         *iteration (atom 0)]
     (-> (store/open-key-cursor todo-list (key-range/upper-bound "Read that book") "prev")
         (events/on "success" (fn [e]
                                (let [cursor    (some-> (request/from-event e)
                                                        (request/result)
                                                        (cursor/create-cursor todo-list))
                                      iteration (swap! *iteration inc)]
                                  (if-not (< iteration 3)
                                    (do
                                      (is (nil? cursor))
                                      (done))
                                    (do
                                      (cond
                                        (= iteration 1) (is (= "Read that book" (cursor/key cursor)))
                                        (= iteration 2) (is (= "Party hard" (cursor/key cursor)))
                                        :else           (throw (ex-info "Unexpected cursor iteration" {})))
                                      (cursor/continue cursor))))))))))

(deftest test-put
  (async
   done
   (let [todo-list (store "toDoList" "readwrite")
         task-req  (store/get todo-list "Walk dog")]
     (events/on
      task-req
      "success"
      (fn [e]
        (let [request (request/from-event e)
              task    (request/result request)]
          (set! (.-notified task) "yes")
          (-> (store/put todo-list task)
              (events/on "success" done))))))))
