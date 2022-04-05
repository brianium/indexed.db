(ns indexed.db.factory-test
  (:require [cljs.test :refer [deftest is async use-fixtures]]
            [indexed.db :as factory]
            [indexed.db.test-util :as util]))

(defonce *idb (atom nil))

(def database-name "indexed.db.factory-test")

(def database-version 1)

(use-fixtures :once
  {:before
   #(async
     done
     (util/test-connect
      database-name
      database-version
      {:success (fn [idb]
                  (reset! *idb idb)
                  (done))
       :blocked (fn []
                  (.close @*idb))
       :error   (fn []
                  (println "Failed test connected")
                  (done))}))})

(deftest test-open
  (is (some? @*idb)))

(deftest test-cmp
  (is (= -1 (factory/cmp 1 2)))
  (is (= 0 (factory/cmp 1 1)))
  (is (= 1 (factory/cmp 1 0))))

(deftest test-getting-databases
  (async
   done
   (factory/databases (fn [databases]
                        (is (seq? databases))
                        (is (seq (filter #(and (= database-name (:name %)) (= database-version (:version %))) databases)))
                        (done)))))
