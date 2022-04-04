(ns indexed.db.database-test
  (:require [cljs.test :refer [deftest is async testing use-fixtures]]
            [indexed.db :as db]
            [indexed.db.test-util :as util]))

(defonce *db (atom nil))

(def database-name "indexed.db.database-test")

(def database-version 1)

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
         (let [db (db/create-database idb)]
           (db/create-object-store db "toDoList" {:key-path "taskTitle"})
           (db/create-object-store db "deleteMe")))

       :blocked
       (fn []
         (db/close @*db))

       :error
       (fn []
         (println "Failed test connected")
         (done))}))})

(deftest test-create-database
  (is (db/database? @*db)))

(deftest test-getting-name
  (is (= database-name (name @*db))))

(deftest test-getting-version
  (is (= database-version (db/version @*db))))

(deftest test-getting-store-names
  (let [names (db/object-store-names @*db)]
    (is (seq? names))
    (is (= 2 (count names)))
    (is (seq (filter #(= "toDoList" %) names)))))

(deftest test-delete-object-store
  (db/close @*db) ;;; close to prevent blocking
  (async
   done
   (util/open
    database-name
    (inc database-version)
    {:success
     (fn [idb]
       (reset! *db (db/create-database idb))
       (let [names (db/object-store-names @*db)]
         (is (= 1 (count names)))
         (is (seq (filter #(= "toDoList" %) names)))
         (done)))

     :upgradeneeded
     (fn [idb]
       (let [db (db/create-database idb)]
         (db/delete-object-store db "deleteMe")))})))

(deftest test-transaction
  (testing "with a valid store name"
    (is (some? (db/transaction @*db ["toDoList"]))))
  (testing "with an invalid store name"
    (is (thrown? js/DOMException (db/transaction @*db ["foo"]))))
  (testing "with an invalid mode"
    (is (thrown? js/TypeError (db/transaction @*db ["toDoList"] "readbologna"))))
  (testing "with an invalid store name"
    (is (thrown? js/DOMException (db/transaction @*db [])))))

(deftest test-transaction-on-closed-db
  (async
   done
   (util/test-connect
    (str database-name "-transaction-test")
    1
    {:success
     (fn [idb]
       (let [db (db/create-database idb)]
         (db/close db)
         (is (thrown? js/DOMException (db/transaction db ["test-store"])))
         (done)))

     :upgradeneeded
     (fn [idb]
       (let [db (db/create-database idb)]
         (db/create-object-store db "test-store")))})))
