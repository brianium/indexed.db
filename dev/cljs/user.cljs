(ns cljs.user
  (:require [cljs.pprint]
            [cljs.test :refer [run-tests]]
            [indexed.db.database-test]
            [indexed.db.factory-test]
            [indexed.db.store-test]))

(run-tests
 'indexed.db.database-test
 'indexed.db.factory-test
 'indexed.db.store-test)
