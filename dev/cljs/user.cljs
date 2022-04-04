(ns cljs.user
  (:require [cljs.pprint]
            [cljs.test :refer [run-tests]]
            [indexed.db.cursor-test]
            [indexed.db.database-test]
            [indexed.db.factory-test]
            [indexed.db.key-range-test]
            [indexed.db.store-test]
            [indexed.db.txn-test]))

(run-tests
 'indexed.db.cursor-test
 'indexed.db.database-test
 'indexed.db.factory-test
 'indexed.db.key-range-test
 'indexed.db.store-test
 'indexed.db.txn-test)
