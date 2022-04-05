(ns cljs.user
  (:require [cljs.pprint]
            [cljs.test :refer [run-tests]]
            [cljs-test-display.core :as test.display]
            [indexed.db.cursor-test]
            [indexed.db.database-test]
            [indexed.db.factory-test]
            [indexed.db.key-range-test]
            [indexed.db.store-test]
            [indexed.db.transaction-test]))

(run-tests
 (test.display/init! "app")
 'indexed.db.cursor-test
 'indexed.db.database-test
 'indexed.db.factory-test
 'indexed.db.key-range-test
 'indexed.db.store-test
 'indexed.db.transaction-test)
