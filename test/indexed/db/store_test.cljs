(ns indexed.db.store-test
  (:require [cljs.test :refer [deftest is async use-fixtures]]
            [indexed.db :as indexed.db]
            [indexed.db.test-util :as util]))

(defonce *db (atom nil))

(def database-name "indexed.db.store-test")

(def database-version 1)

(use-fixtures :once
  {:before
   #(async
     done
     (util/create-task-db *db done {:db/name database-name :db/version database-version}))})

(use-fixtures :each
  {:before
   #(async
     done
     (util/seed-tasks @*db done))
   :after
   #(async
     done
     (util/reset-tasks @*db done))})

(deftest test-index-names
  (let [todo-list   (util/store @*db "toDoList")
        index-names (set (indexed.db/index-names todo-list))]
    (is (= #{"hours" "minutes" "day" "month" "year" "notified" "deleteme"} index-names))))

(deftest test-key-path
  (let [todo-list (util/store @*db "toDoList")]
    (is (= "taskTitle" (indexed.db/key-path todo-list)))))

(deftest test-name
  (let [todo-list (util/store @*db "toDoList")]
    (is (= "toDoList" (name todo-list)))))

(deftest test-getting-transaction
  (let [todo-list (util/store @*db "toDoList")
        txn       (indexed.db/get-transaction todo-list)]
    (is (indexed.db/transaction? txn))))

(deftest test-auto-increment?
  (let [todo-list (util/store @*db "toDoList")]
    (is (false? (indexed.db/auto-increment? todo-list)))))

(deftest test-count-all
  (async
   done
   (-> (indexed.db/count (util/store @*db "toDoList"))
       (indexed.db/on "success" (fn [e]
                                  (is (= 3 (indexed.db/result
                                            (indexed.db/event->request e))))
                                  (done))))))

(deftest test-count-by-key
  (async
   done
   (-> (indexed.db/count (util/store @*db "toDoList") "Walk dog")
       (indexed.db/on "success" (fn [e]
                                  (is (= 1 (indexed.db/result
                                            (indexed.db/event->request e))))
                                  (done))))))

(deftest test-delete-by-key
  (async
   done
   (let [txn       (util/transaction @*db "readwrite")
         todo-list (indexed.db/object-store txn "toDoList")]
     (indexed.db/delete todo-list "Walk dog")
     (indexed.db/on txn "complete" (fn []
                                     (is (true? true))
                                     (done))))))

(deftest test-delete-index
  (indexed.db/close @*db) ;;; close to prevent blocking
  (async
   done
   (util/open
    database-name
    (inc database-version)
    {:success
     (fn [idb]
       (reset! *db (indexed.db/create-database idb))
       (let [todo-list (util/store @*db "toDoList")
             names (set (indexed.db/index-names todo-list))]
         (is (false? (contains? names "deleteme")))
         (done)))

     :upgradeneeded
     (fn [_ txn]
       (let [todo-list (indexed.db/object-store txn "toDoList")]
         (indexed.db/delete-index todo-list "deleteme")))})))

(deftest test-get
  (async
   done
   (-> (util/store @*db "toDoList")
       (indexed.db/get "Walk dog")
       (indexed.db/on "success" (fn [e]
                                  (is (= "Walk dog" (.-taskTitle (indexed.db/result
                                                                  (indexed.db/event->request e)))))
                                  (done))))))

(deftest test-get-key
  (async
   done
   (-> (util/store @*db "toDoList")
       (indexed.db/get-key "Walk dog")
       (indexed.db/on "success" (fn [e]
                                  (is (= "Walk dog" (indexed.db/result
                                                     (indexed.db/event->request e))))
                                  (done))))))

(deftest test-get-all-no-key
  (async
   done
   (-> (util/store @*db "toDoList")
       (indexed.db/get-all)
       (indexed.db/on "success" (fn [e]
                              (is (= 3 (count (indexed.db/result
                                               (indexed.db/event->request e)))))
                              (done))))))

(deftest test-get-all-with-key
  (async
   done
   (-> (util/store @*db "toDoList")
       (indexed.db/get-all (indexed.db/bound "Party hard" "Walk dog"))
       (indexed.db/on "success" (fn [e]
                              (is (= 3 (count (indexed.db/result
                                               (indexed.db/event->request e)))))
                              (done))))))

(deftest test-get-all-with-key-and-count
  (async
   done
   (-> (util/store @*db "toDoList")
       (indexed.db/get-all (indexed.db/bound "Party hard" "Walk dog") 2)
       (indexed.db/on "success" (fn [e]
                              (is (= 2 (count (indexed.db/result
                                               (indexed.db/event->request e)))))
                              (done))))))

(deftest test-get-all-keys-no-key
  (async
   done
   (-> (util/store @*db "toDoList")
       (indexed.db/get-all-keys)
       (indexed.db/on "success" (fn [e]
                              (is (= 3 (count (indexed.db/result
                                               (indexed.db/event->request e)))))
                              (done))))))

(deftest test-get-all-keys-with-key
  (async
   done
   (-> (util/store @*db "toDoList")
       (indexed.db/get-all-keys (indexed.db/bound "Party hard" "Walk dog"))
       (indexed.db/on "success" (fn [e]
                              (is (= 3 (count (indexed.db/result
                                               (indexed.db/event->request e)))))
                              (done))))))

(deftest test-get-all-keys-with-key-and-count
  (async
   done
   (-> (util/store @*db "toDoList")
       (indexed.db/get-all-keys (indexed.db/bound "Party hard" "Walk dog") 2)
       (indexed.db/on "success" (fn [e]
                              (is (= 2 (count (indexed.db/result
                                               (indexed.db/event->request e)))))
                              (done))))))

(deftest test-getting-an-index
  (let [todo-list (util/store @*db "toDoList")]
    (is (indexed.db/index? (indexed.db/index todo-list "hours")))))

(deftest test-open-cursor-no-args
  (async
   done
   (let [todo-list (util/store @*db "toDoList")]
     (-> (indexed.db/open-cursor todo-list)
         (indexed.db/on "success" (fn [e]
                                (let [value (-> (indexed.db/event->request e)
                                                (indexed.db/result)
                                                (indexed.db/create-cursor-with-value)
                                                (indexed.db/value))]
                                  (is (= "Party hard" (.-taskTitle value)))
                                  (done))))))))

(deftest test-open-cursor-with-query
  (async
   done
   (let [todo-list  (util/store @*db "toDoList")
         *iteration (atom 0)]
     (-> (indexed.db/open-cursor todo-list (indexed.db/bound "Read that book" "Walk dog"))
         (indexed.db/on "success" (fn [e]
                                (let [cursor    (some-> (indexed.db/event->request e)
                                                        (indexed.db/result)
                                                        (indexed.db/create-cursor-with-value))
                                      iteration (swap! *iteration inc)]
                                  (if-not (< iteration 3)
                                    (do
                                      (is (nil? cursor))
                                      (done))
                                    (do
                                      (cond
                                        (= iteration 1) (is (= "Read that book" (.-taskTitle (indexed.db/value cursor))))
                                        (= iteration 2) (is (= "Walk dog" (.-taskTitle (indexed.db/value cursor))))
                                        :else           (throw (ex-info "Unexpected cursor iteration" {})))
                                      (indexed.db/continue cursor))))))))))

(deftest test-open-cursor-with-query-and-direction
  (async
   done
   (let [todo-list  (util/store @*db "toDoList")
         *iteration (atom 0)]
     (-> (indexed.db/open-cursor todo-list (indexed.db/upper-bound "Read that book") "prev")
         (indexed.db/on "success" (fn [e]
                                (let [cursor    (some-> (indexed.db/event->request e)
                                                        (indexed.db/result)
                                                        (indexed.db/create-cursor-with-value))
                                      iteration (swap! *iteration inc)]
                                  (if-not (< iteration 3)
                                    (do
                                      (is (nil? cursor))
                                      (done))
                                    (do
                                      (cond
                                        (= iteration 1) (is (= "Read that book" (.-taskTitle (indexed.db/value cursor))))
                                        (= iteration 2) (is (= "Party hard" (.-taskTitle (indexed.db/value cursor))))
                                        :else           (throw (ex-info "Unexpected cursor iteration" {})))
                                      (indexed.db/continue cursor))))))))))

(deftest test-open-key-cursor-no-args
  (async
   done
   (let [todo-list (util/store @*db "toDoList")]
     (-> (indexed.db/open-key-cursor todo-list)
         (indexed.db/on "success" (fn [e]
                                (let [k (-> (indexed.db/event->request e)
                                            (indexed.db/result)
                                            (indexed.db/create-cursor)
                                            (indexed.db/key))]
                                  (is (= "Party hard" k))
                                  (done))))))))

(deftest test-open-key-cursor-with-query
  (async
   done
   (let [todo-list  (util/store @*db "toDoList")
         *iteration (atom 0)]
     (-> (indexed.db/open-key-cursor todo-list (indexed.db/bound "Read that book" "Walk dog"))
         (indexed.db/on "success" (fn [e]
                                (let [cursor    (some-> (indexed.db/event->request e)
                                                        (indexed.db/result)
                                                        (indexed.db/create-cursor))
                                      iteration (swap! *iteration inc)]
                                  (if-not (< iteration 3)
                                    (do
                                      (is (nil? cursor))
                                      (done))
                                    (do
                                      (cond
                                        (= iteration 1) (is (= "Read that book" (indexed.db/key cursor)))
                                        (= iteration 2) (is (= "Walk dog" (indexed.db/key cursor)))
                                        :else           (throw (ex-info "Unexpected cursor iteration" {})))
                                      (indexed.db/continue cursor))))))))))

(deftest test-open-key-cursor-with-query-and-direction
  (async
   done
   (let [todo-list  (util/store @*db "toDoList")
         *iteration (atom 0)]
     (-> (indexed.db/open-key-cursor todo-list (indexed.db/upper-bound "Read that book") "prev")
         (indexed.db/on "success" (fn [e]
                                (let [cursor    (some-> (indexed.db/event->request e)
                                                        (indexed.db/result)
                                                        (indexed.db/create-cursor))
                                      iteration (swap! *iteration inc)]
                                  (if-not (< iteration 3)
                                    (do
                                      (is (nil? cursor))
                                      (done))
                                    (do
                                      (cond
                                        (= iteration 1) (is (= "Read that book" (indexed.db/key cursor)))
                                        (= iteration 2) (is (= "Party hard" (indexed.db/key cursor)))
                                        :else           (throw (ex-info "Unexpected cursor iteration" {})))
                                      (indexed.db/continue cursor))))))))))

(deftest test-put
  (async
   done
   (let [todo-list (util/store @*db "toDoList" "readwrite")
         task-req  (indexed.db/get todo-list "Walk dog")]
     (indexed.db/on
      task-req
      "success"
      (fn [e]
        (let [request (indexed.db/event->request e)
              task    (indexed.db/result request)]
          (set! (.-notified task) "yes")
          (-> (indexed.db/put todo-list task)
              (indexed.db/on "success" done))))))))
