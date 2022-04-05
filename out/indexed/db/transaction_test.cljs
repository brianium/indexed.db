(ns indexed.db.transaction-test
  (:require [cljs.test :refer [deftest is async use-fixtures]]
            [indexed.db :as indexed.db]
            [indexed.db.test-util :as util]))

(defonce *db (atom nil))

(def database-name "indexed.db.txn-test")

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
   (async
    done
    (util/reset-tasks @*db done))})

(deftest test-db
  (let [transaction (indexed.db/transaction @*db ["toDoList"])]
    (is (indexed.db/database? (indexed.db/db transaction)))))

(deftest test-durability
  (let [transaction (indexed.db/transaction @*db ["toDoList"])]
    (is (= "default" (indexed.db/durability transaction)))))

(deftest test-mode
  (let [transaction (indexed.db/transaction @*db ["toDoList"])]
    (is (= "readonly" (indexed.db/mode transaction)))))

(deftest test-object-store-names
  (let [transaction (indexed.db/transaction @*db ["toDoList"])]
    (is (= ["toDoList"] (indexed.db/object-store-names transaction)))))

(deftest test-abort
  (async
   done
   (let [transaction (indexed.db/transaction @*db ["toDoList"] "readwrite")
         todo-list   (indexed.db/object-store transaction "toDoList")
         request     (indexed.db/add todo-list #js {:taskTitle "Testing"})]
     (-> transaction
         (indexed.db/on
          "abort"
          (fn []
            (is (instance? js/DOMException (indexed.db/error request)))
            (done)))
         (indexed.db/abort)))))

(deftest test-commit
  (async
   done
   (let [transaction (indexed.db/transaction @*db ["toDoList"] "readwrite")
         todo-list   (indexed.db/object-store transaction "toDoList")]
     (indexed.db/add todo-list #js {:taskTitle "Testing"})
     (indexed.db/commit
      (indexed.db/on transaction "complete" done)))))
