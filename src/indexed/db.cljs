(ns indexed.db
  (:require [indexed.db.cursor :as cursor]
            [indexed.db.database :as database]
            [indexed.db.events :as events]
            [indexed.db.factory :as factory]
            [indexed.db.key-range :as key-range]
            [indexed.db.request :as request]
            [indexed.db.store :as store]
            [indexed.db.txn :as transaction]
            [indexed.db.impl.protocols :as impl])
  (:refer-clojure :exclude [key update get count]))

;;; IDBFactory

(defn factory?
  [x]
  (factory/factory? x))

(defn create-factory []
  (factory/create-factory))

(defn open
  ([factory name version]
   (factory/open factory name version))
  ([name version]
   (factory/open name version))
  ([name]
   (factory/open name)))

(defn delete-database
  ([factory name]
   (factory/delete-database factory name))
  ([name]
   (factory/delete-database name)))

(defn cmp
  ([factory a b]
   (factory/cmp factory a b))
  ([a b]
   (factory/cmp a b)))

(defn databases
  ([factory fn-1]
   (factory/databases factory fn-1)
   factory)
  ([fn-1]
   (factory/databases fn-1)))

;;; IDBDatabase

(defn database?
  [x]
  (database/database? x))

(defn create-database
  [js-idb]
  (database/create-database js-idb))

(defn close
  [db]
  (database/close db))

(defn delete-object-store
  [db name]
  (database/delete-object-store db name))

(defn object-store-names
  [db]
  (database/object-store-names db))

(defn version
  [db]
  (database/version db))

(defn transaction
  ([db store-names mode options]
   (database/transaction db store-names mode options))
  ([db store-names mode]
   (database/transaction db store-names mode))
  ([db store-names]
   (database/transaction db store-names)))

;;; IDBCursor/IDBCursorWithValue

(defn cursor?
  [x]
  (cursor/cursor? x))

(defn create-cursor
  [js-cursor]
  (cursor/create-cursor js-cursor))

(defn direction
  [cursor]
  (cursor/direction cursor))

(defn key
  [cursor]
  (cursor/key cursor))

(defn primary-key
  [cursor]
  (cursor/primary-key cursor))

(defn advance
  [cursor count]
  (cursor/advance cursor count))

(defn continue
  ([cursor k]
   (cursor/continue cursor k))
  ([cursor]
   (continue cursor nil)))

(defn continue-primary-key
  [cursor k primary-key]
  (cursor/continue-primary-key cursor k primary-key))

(defn update
  [cursor value]
  (cursor/update cursor value))

(defn create-cursor-with-value
  [idb-cursor]
  (cursor/create-cursor-with-value idb-cursor))

(defn value
  [cursor-with-value]
  (cursor/value cursor-with-value))

;;; IDBRequest

(defn request?
  [x]
  (request/request? x))

(defn create-request
  [js-request]
  (request/create-request js-request))

(defn event->request
  [e]
  (request/from-event e))

(defn error
  [db-request]
  (request/error db-request))

(defn result
  [db-request]
  (request/result db-request))

(defn ready-state
  [db-request]
  (request/ready-state db-request))

;;; Events

(defn create-version-change-event
  [js-event]
  (events/create-version-change-event js-event))

(defn new-version
  [version-change-event]
  (events/new-version version-change-event))

(defn old-version
  [version-change-event]
  (events/old-version version-change-event))

(defn get-request
  [belongs-to-request]
  (some->
   belongs-to-request
   (impl/-idb-request)
   (create-request)))

(defn event-target?
  [x]
  (events/event-target? x))

(defn on
  ([event-target type listener]
   (events/on event-target type listener))
  ([event-target type listener options]
   (events/on event-target type listener options)))

;;; IDBKeyRange

(defn key-range?
  [x]
  (key-range/key-range? x))

(defn includes
  [key-range k]
  (key-range/includes key-range k))

(defn bound
  ([lower upper lower-open? upper-open?]
   (key-range/bound lower upper lower-open? upper-open?))
  ([lower upper lower-open?]
   (key-range/bound lower upper lower-open?))
  ([lower upper]
   (key-range/bound lower upper)))

(defn only
  [value]
  (key-range/only value))

(defn lower-bound
  ([lower open?]
   (key-range/lower-bound lower open?))
  ([lower]
   (key-range/lower-bound lower)))

(defn upper-bound
  ([upper open?]
   (key-range/upper-bound upper open?))
  ([upper]
   (key-range/upper-bound upper)))

;;; IDBTransaction

(defn transaction?
  [x]
  (transaction/transaction? x))

(defn create-transaction
  [js-idb-transaction]
  (transaction/create-transaction js-idb-transaction))

(defn object-store
  [txn name]
  (transaction/object-store txn name))

(defn get-transaction
  [belongs-to-txn]
  (transaction/transaction belongs-to-txn))

;;; IDBIndex/IDBObjectStore

(defn key-path
  [store-or-index]
  (store/key-path store-or-index))

(defn count
  ([store-or-index query]
   (store/count store-or-index query))
  ([store-or-index]
   (store/count store-or-index)))

(defn get
  [store-or-index key]
  (store/get store-or-index key))

(defn get-key
  [store-or-index key]
  (store/get-key store-or-index key))

(defn get-all
  ([store-or-index query count]
   (store/get-all store-or-index query count))
  ([store-or-index query]
   (store/get-all store-or-index query))
  ([store-or-index]
   (store/get-all store-or-index)))

(defn get-all-keys
  ([store-or-index query count]
   (store/get-all-keys store-or-index query count))
  ([store-or-index query]
   (store/get-all-keys store-or-index query))
  ([store-or-index]
   (store/get-all-keys store-or-index)))

(defn open-cursor
  ([store-or-index query direction]
   (store/open-cursor store-or-index query direction))
  ([store-or-index query]
   (store/open-cursor store-or-index query))
  ([store-or-index]
   (store/open-cursor store-or-index)))

(defn open-key-cursor
  ([store-or-index query direction]
   (store/open-key-cursor store-or-index query direction))
  ([store-or-index query]
   (store/open-key-cursor store-or-index query))
  ([store-or-index]
   (store/open-key-cursor store-or-index)))

(defn index?
  [x]
  (store/index? x))

(defn auto-locale?
  [index]
  (store/auto-locale? index))

(defn locale
  [index]
  (store/locale index))

(defn object-store-name
  [index]
  (store/object-store-name index))

(defn multi-entry?
  [index]
  (store/multi-entry? index))

(defn unique?
  [index]
  (store/unique? index))

(defn store?
  [x]
  (store/store? x))

(defn index-names
  [store]
  (store/index-names store))

(defn auto-increment?
  [store]
  (store/auto-increment? store))

(defn add
  ([store value key]
   (store/add store value key))
  ([store value]
   (store/add store value)))

(defn clear
  [store]
  (store/clear store))

(defn create-index
  ([store index-name key-path object-parameters]
   (store/create-index store index-name key-path object-parameters))
  ([store index-name key-path]
   (store/create-index store index-name key-path)))

(defn delete-index
  [store index-name]
  (store/delete-index store index-name))

(defn index
  [store index-name]
  (store/index store index-name))

(defn put
  ([store item]
   (store/put store item))
  ([store item key]
   (store/put store item key)))

;;; Special cases

(defn delete
  ([cursor]
   (cursor/delete cursor))
  ([store k]
   (store/delete store k)))

(defn create-object-store
  ([db name options]
   (database/create-object-store db name options))
  ([db name]
   (database/create-object-store db name))
  ([js-idb-store]
   (store/create-object-store js-idb-store)))

(defn source
  [x]
  (when-some [src (impl/-source x)]
    (cond
      (instance? js/IDBObjectStore src) (create-object-store src)
      (instance? js/IDBIndex src) (store/create-index* src)
      :else nil)))
