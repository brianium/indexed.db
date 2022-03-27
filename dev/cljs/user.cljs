(ns cljs.user
  (:require [cljs.pprint]
            [cljs.test :refer [run-tests]]
            [indexed.db.database-test]
            [indexed.db.factory-test]))

(run-tests
 'indexed.db.database-test
 'indexed.db.factory-test)
