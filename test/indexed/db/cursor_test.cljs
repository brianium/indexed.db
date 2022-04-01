(ns indexed.db.cursor-test
  (:require [cljs.test :refer [deftest is async use-fixtures]]
            [indexed.db :as indexed.db]
            [indexed.db.test-util :as util]))

(defonce *db (atom nil))

(def database-name "indexed.db.cursor-test")

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
     (util/seed-tasks @*db done {:taskTitle "Zoop"
                                 :hours     24
                                 :minutes   0
                                 :day       23
                                 :month     "March"
                                 :year      2022
                                 :notified  "no"}))
   :after
   (async
     done
     (util/reset-tasks @*db done))})

(defn cursor-with-value
  [e]
  (some-> (indexed.db/event->request e)
          (indexed.db/result)
          (indexed.db/create-cursor-with-value)))

(deftest test-store-source
  (async
   done
   (-> (util/store @*db "toDoList")
       (indexed.db/open-cursor)
       (indexed.db/on
        "success"
        (fn [e]
          (let [cursor (cursor-with-value e)
                source (indexed.db/source cursor)]
            (is (indexed.db/store? source))
            (done)))))))

(deftest test-index-source
  (async
   done
   (-> (util/store @*db "toDoList")
       (indexed.db/index "day")
       (indexed.db/open-cursor)
       (indexed.db/on
        "success"
        (fn [e]
          (let [cursor (cursor-with-value e)
                source (indexed.db/source cursor)]
            (is (indexed.db/index? source))
            (done)))))))

(deftest test-direction
  (async
   done
   (-> (util/store @*db "toDoList")
       (indexed.db/open-cursor)
       (indexed.db/on
        "success"
        (fn [e]
          (let [cursor (cursor-with-value e)]
            (is (= (indexed.db/direction cursor) "next"))
            (done)))))))

(deftest test-key
  (async
   done
   (-> (util/store @*db "toDoList")
       (indexed.db/open-cursor)
       (indexed.db/on
        "success"
        (fn [e]
          (let [cursor (cursor-with-value e)]
            (is (= (indexed.db/key cursor) "Party hard"))
            (done)))))))

(deftest test-primary-key
  (async
   done
   (-> (util/store @*db "toDoList")
       (indexed.db/open-cursor)
       (indexed.db/on
        "success"
        (fn [e]
          (let [cursor (cursor-with-value e)]
            (is (= (indexed.db/primary-key cursor) "Party hard"))
            (done)))))))

(deftest test-get-request
  (async
   done
   (-> (util/store @*db "toDoList")
       (indexed.db/open-cursor)
       (indexed.db/on
        "success"
        (fn [e]
          (let [cursor (cursor-with-value e)]
            (is (indexed.db/request? (indexed.db/get-request cursor)))
            (done)))))))

(deftest test-advance
  (async
   done
   (let [*iteration (atom 0)]
     (-> (util/store @*db "toDoList")
         (indexed.db/open-cursor)
         (indexed.db/on
          "success"
          (fn [e]
            (when-some [cursor (cursor-with-value e)]
              (indexed.db/advance cursor 1)
              (when (= 2 (swap! *iteration inc))
                (is (= (indexed.db/key cursor) "Read that book"))
                (done)))))))))

(deftest test-continue
  (async
   done
   (let [*iteration (atom 0)]
     (-> (util/store @*db "toDoList")
         (indexed.db/open-cursor)
         (indexed.db/on
          "success"
          (fn [e]
            (when-some [cursor (cursor-with-value e)]
              (indexed.db/continue cursor)
              (when (= 2 (swap! *iteration inc))
                (is (= (indexed.db/key cursor) "Read that book"))
                (done)))))))))

(deftest test-continue-with-key
  (async
   done
   (let [*iteration (atom 0)]
     (-> (util/store @*db "toDoList")
         (indexed.db/open-cursor)
         (indexed.db/on
          "success"
          (fn [e]
            (let [cursor           (cursor-with-value e)
                  iterated?        (< 0 @*iteration)]
              (when-not iterated?
                (indexed.db/continue cursor "Walk dog"))
              (when (= 2 (swap! *iteration inc))
                (is (= (indexed.db/key cursor) "Walk dog"))
                (done)))))))))

(deftest test-continue-primary-key
  (async
   done
   (let [*iteration        (atom 0)
         *last-primary-key (atom nil)
         k                 23] ;;; all records that happened on the 23rd day
     (-> (util/store @*db "toDoList")
         (indexed.db/index "day")
         (indexed.db/open-cursor)
         (indexed.db/on
          "success"
          (fn [e]
            (let [cursor           (cursor-with-value e)
                  iteration        (swap! *iteration inc)]
              (cond
                (= 1 iteration) (do
                                  (reset! *last-primary-key (indexed.db/primary-key cursor))
                                  (indexed.db/continue-primary-key cursor k @*last-primary-key))
                (= 2 iteration) (do
                                  (is (= (indexed.db/primary-key cursor) "Zoop"))
                                  (is (= (indexed.db/key cursor) k))
                                  (done))))))))))

(deftest test-delete
  (async
   done
   (-> (util/store @*db "toDoList" "readwrite")
       (indexed.db/open-cursor (indexed.db/only "Zoop"))
       (indexed.db/on
        "success"
        (fn [e]
          (-> (cursor-with-value e)
              (indexed.db/delete)
              (indexed.db/on "success" done)))))))

(deftest test-update
  (async
   done
   (-> (util/store @*db "toDoList" "readwrite")
       (indexed.db/open-cursor (indexed.db/only "Zoop"))
       (indexed.db/on
        "success"
        (fn [e]
          (let [cursor (cursor-with-value e)
                record (indexed.db/value cursor)]
            (set! (.-month record) "April")
            (-> cursor
                (indexed.db/update record)
                (indexed.db/on "success" done))))))))
