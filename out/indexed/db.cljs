(ns indexed.db
  (:require [indexed.db.impl.cursor :as cursor]
            [indexed.db.impl.database :as database]
            [indexed.db.impl.events :as events]
            [indexed.db.impl.factory :as factory]
            [indexed.db.impl.key-range :as key-range]
            [indexed.db.impl.request :as request]
            [indexed.db.impl.store :as store]
            [indexed.db.impl.transaction :as transaction]
            [indexed.db.impl.protocols :as impl])
  (:refer-clojure :exclude [key update get count]))

;;; IDBFactory

(defn factory?
  "Returns true if the given value satisfies the IDBFactory protocol"
  [x]
  (factory/factory? x))

(defn create-factory
  "Return an implementation of the IDBFactory protocol backed by
   the global indexedDB object"
  []
  (factory/create-factory))

(defn open
  "Return an IDBRequest whose result is a native IDBDatabase object.
   
   The version value is optional.
   
   If the version is not provided and the database exists, then a connection
   to the database will be opened without changing its version.
   
   If the version is not provided and the database does not exist,
   then it will be created with version `1`
   
   The indexed.db library makes no assumptions about how consumers want to handle
   events. In order to use the indexed.db API with the result of an open reqest, it
   will need to be converted to an implementation of the IDBDatabase protocol:
   
   ```clojure
   (let [open-request (db/open \"my-db\")]
     (-> open-request
         (db/on \"upgradeneeded\" handle-upgrade)
         (db/on \"success\" #(db/create-database
                               (db/result open-request)))))
   ```"
  ([factory name version]
   (factory/open factory name version))
  ([name version]
   (factory/open name version))
  ([name]
   (factory/open name)))

(defn delete-database
  "Request the deletion of a database by name.
   
   Returns an IDBRequest"
  ([factory name]
   (factory/delete-database factory name))
  ([name]
   (factory/delete-database name)))

(defn cmp
  "Compares two values as keys to determine equality and ordering for IndexedDB operations,
   such as storing and iterating.
   
   | returned value | description                          |
   |:---------------|-------------------------------------:|
   | -1             | 1st key is less than the 2nd key     |
   | 0              | 1st key is equal to the 2nd key      |
   | 1              | 1st key is greater than the 2nd key  |"
  ([factory a b]
   (factory/cmp factory a b))
  ([a b]
   (factory/cmp a b)))

(defn databases
  "Calls the given function with an error or a sequence of all
   available databases, including their names and versions"
  ([factory fn-1]
   (factory/databases factory fn-1)
   factory)
  ([fn-1]
   (factory/databases fn-1)))

;;; IDBDatabase

(defn database?
  "Returns true if the given value satisfies the IDBDatabase protocol"
  [x]
  (database/database? x))

(defn db
  "Returns an implementation of the IDBDatabase protocol that is associated
   with `belongs-to-database` (presumably an IDBTransaction implementation)"
  [belongs-to-database]
  (database/db belongs-to-database))

(defn get-database
  "An alias for the [[indexed.db/db]] function"
  [belongs-to-database]
  (db belongs-to-database))

(defn create-database
  "A factory function for creating an implementation of the IDBDatabase protocol
   from a native js/IDBDatabase"
  [js-idb]
  (database/create-database js-idb))

(defn close
  "Returns immediately and closes the connection in a separate thread.
   
   The connection is not actually closed until all transactions created using this
   connection are complete. No new transactions can be created for this connection
   once this method is called. Methods that create transactions throw an exception
   if a closing operation is pending."
  [db]
  (database/close db))

(defn delete-object-store
  "Destroys the object store with the given name in the connected database, along with
   any indexes that reference it."
  [db name]
  (database/delete-object-store db name))

(defn object-store-names
  "Returns a sequence of object store names from the given database or transaction"
  [x]
  (cond-> x
    (satisfies? impl/IDBTransaction x) (db)
    :always (database/object-store-names)))

(defn version
  "Returns an integer version of the connected database"
  [db]
  (database/version db))

(defn transaction
  "Immediately returns an implementation of the IDBTransaction protocol.
   The IDBTransaction protocol provides functions that can be used to access
   object stores."
  ([db store-names mode options]
   (database/transaction db store-names mode options))
  ([db store-names mode]
   (database/transaction db store-names mode))
  ([db store-names]
   (database/transaction db store-names)))

;;; IDBCursor/IDBCursorWithValue

(defn cursor?
  "Returns true if the given value satisfies the IDBCursor protocol"
  [x]
  (cursor/cursor? x))

(defn create-cursor
  "A factory function for creating an implementation of the IDBCursor protocol
   from a native js/IDBCursor"
  [js-cursor]
  (cursor/create-cursor js-cursor))

(defn direction
  "Returns the direction of traversal of the cursor. See [[indexed.db/open-cursor]]
   for an explanation of possible direction values"
  [cursor]
  (cursor/direction cursor))

(defn key
  "Returns the key for the record at the cursor's position"
  [cursor]
  (cursor/key cursor))

(defn primary-key
  "Interface returns the cursor's current effective key. If the cursor is currently being iterated
   or has iterated outside its range, this is set to undefined. "
  [cursor]
  (cursor/primary-key cursor))

(defn advance
  "Sets the number of times a cursor should move its position forward"
  [cursor count]
  (cursor/advance cursor count))

(defn continue
  "Advances the cursor to the next position along its direction, to the item whose key matches
   the optional key parameter"
  ([cursor k]
   (cursor/continue cursor k))
  ([cursor]
   (continue cursor nil)))

(defn continue-primary-key
  "Advances the cursor to the item whose key matches the key parameter as well as whose primary key
   matches the primary key parameter.
   
   A typical use case, is to resume the iteration where a previous cursor has been closed, without having to compare the keys one by one."
  [cursor k primary-key]
  (cursor/continue-primary-key cursor k primary-key))

(defn update
  "Returns an implementation of the IDBRequest protocol, and, in a separate thread, updates the value
   at the current position of the cursor in the object store.
   
   If the cursor points to a record that has just been deleted, a new record is created.
   
   Be aware that you can't call update (or delete) on cursors obtained from open-key-cursor.
   For such needs, you have to use open-cursor instead"
  [cursor value]
  (cursor/update cursor value))

(defn cursor-with-value?
  "Returns true if the given value satisfies the IDBCursorWithValue protocol"
  [x]
  (cursor/cursor-with-value? x))

(defn create-cursor-with-value
  "A factory function for creating an implementation of the IDBCursorWithValue protocol
   from a native js/IDBCursorWithValue"
  [js-cursor-with-value]
  (cursor/create-cursor-with-value js-cursor-with-value))

(defn value
  "Returns the value of the current cursor, whatever that is"
  [cursor-with-value]
  (cursor/value cursor-with-value))

;;; IDBRequest

(defn request?
  "Returns true if the given value satisfies the IDBRequest protocol"
  [x]
  (request/request? x))

(defn create-request
  "A factory function for creating an implementation of the IDBRequest protocol
   from a native js/IDBRequest"
  [js-request]
  (request/create-request js-request))

(defn error
  "If a type stores an error for failed operations, this function
   will return it."
  [has-errors]
  (impl/error has-errors))

(defn result
  "Returns the result of the request"
  [db-request]
  (request/result db-request))

(defn ready-state
  "Returns the state of the request"
  [db-request]
  (request/ready-state db-request))

;;; Events

(defn version-change-event?
  "Returns true if the given value satisfies the IDBVersionChangeEvent protocol"
  [x]
  (events/version-change-event? x))

(defn create-version-change-event
  "A factory function for creating an implementation of the IDBVersionChangeEvent protocol
   from a native js/IDBVersionChangeEvent.
   
   Note: Since this library intends to avoid making assumptions on event handling, this
   type is not provided automatically. You must construct it manually when handling version
   change events. An example from the test suite:
   
   ```clojure
   (defn handle-upgrade
     [fn-2]
     (fn [e]
       (let [event   (db/create-version-change-event e)
             request (db/get-request event)]
               (fn-2 (db/result request) (db/get-transaction request)))))
   ```"
  [js-event]
  (events/create-version-change-event js-event))

(defn new-version
  "Returns the new version number of the database"
  [version-change-event]
  (events/new-version version-change-event))

(defn old-version
  "Returns the old version number of the database"
  [version-change-event]
  (events/old-version version-change-event))

(defn get-request
  "Return the IDBRequest that `belongs-to-request` belongs to. This is presumably
   an IDBVersionChangeEvent or IDBVersionChangeEvent implementation"
  [belongs-to-request]
  (create-request
   (impl/idb-request belongs-to-request)))

(defn event-target?
  "Returns true if the given value satisfies the EventTarget protocol"
  [x]
  (events/event-target? x))

(defn on
  "A simple wrapper around the native addEventListener function.
   
   Adds the event listener and returns the given event target"
  ([event-target type listener]
   (events/on event-target type listener))
  ([event-target type listener options]
   (events/on event-target type listener options)))

(defn off
  "A simple wrapper around the native removeEventListener function.
   
   Removes the event listener and returns the given event target"
  ([event-target type listener]
   (events/off event-target type listener))
  ([event-target type listener options]
   (events/off event-target type listener options)))

;;; IDBKeyRange

(defn key-range?
  "Returns true if the given value satisfies the IDBKeyRange protocol"
  [x]
  (key-range/key-range? x))

(defn includes
  "Returns a boolean indicating whether a specified key is inside the key range"
  [key-range k]
  (key-range/includes key-range k))

(defn lower
  "Returns the lower bound of the key range"
  [key-range]
  (key-range/lower key-range))

(defn upper
  "Returns the upper bound of the key range"
  [key-range]
  (key-range/upper key-range))

(defn lower-open?
  "Returns false if the lower-bound value is included in the key range"
  [key-range]
  (key-range/lower-open? key-range))

(defn upper-open?
  "Returns false if the upper-bound value is included in the key range"
  [key-range]
  (key-range/upper-open? key-range))

(defn bound
  "Creates a new key range with the specified upper and lower bounds. The bounds can be open
   (that is, the bounds exclude the endpoint values) or closed (that is, the bounds include the endpoint values).
   
   By default, the bounds are closed."
  ([lower upper lower-open? upper-open?]
   (key-range/bound lower upper lower-open? upper-open?))
  ([lower upper lower-open?]
   (key-range/bound lower upper lower-open?))
  ([lower upper]
   (key-range/bound lower upper)))

(defn only
  "Creates a new key range containing a single value"
  [value]
  (key-range/only value))

(defn lower-bound
  "Creates a new key range with only a lower bound.
   
   By default, it includes the lower endpoint value and is closed"
  ([lower open?]
   (key-range/lower-bound lower open?))
  ([lower]
   (key-range/lower-bound lower)))

(defn upper-bound
  "Creates a new upper-bound key range.
   
   By default, it includes the upper endpoint value and is closed"
  ([upper open?]
   (key-range/upper-bound upper open?))
  ([upper]
   (key-range/upper-bound upper)))

;;; IDBTransaction

(defn transaction?
  "Returns true if the given value satisfies the IDBTransaction protocol"
  [x]
  (transaction/transaction? x))

(defn create-transaction
  "A factory function for creating an implementation of the IDBTransaction protocol
   from a native js/IDBTransaction"
  [js-idb-transaction]
  (transaction/create-transaction js-idb-transaction))

(defn get-transaction
  "Return the IDBTransaction that `belongs-to-txn` belongs to. This is presumably
   an IDBRequest or IDBObjectStore implementation"
  [belongs-to-txn]
  (transaction/transaction belongs-to-txn))

(defn durability
  "Returns the durability hint the transaction was created with"
  [txn]
  (transaction/durability txn))

(defn mode
  "Returns the current mode for accessing the data in the object stores in the scope of the transaction"
  [txn]
  (transaction/mode txn))

(defn abort
  "Rolls back all the changes to objects in the database associated with this transaction"
  [txn]
  (transaction/abort txn))

(defn commit
  "Commits the transaction if it is called on an active transaction.
   
   Note that commit doesn't normally have to be called — a transaction will automatically
   commit when all outstanding requests have been satisfied and no new requests have been made."
  [txn]
  (transaction/commit txn))

;;; IDBIndex/IDBObjectStore

(defn key-path
  "Returns the key path of this object store"
  [store-or-index]
  (store/key-path store-or-index))

(defn count
  "Returns an implementation of the IDBRequest protocol, and, in a separate thread,
   returns the total number of records that match the provided key or IDBKeyRange.
   
   If no arguments are provided, it returns the total number of records in the store."
  ([store-or-index query]
   (store/count store-or-index query))
  ([store-or-index]
   (store/count store-or-index)))

(defn get
  "Returns an implementation of the IDBRequest protocol, and, in a separate thread, finds either the value in the referenced
   object store or index that corresponds to the given key or the first corresponding value, if key is set to an IDBKeyRange.
   
   If a value is successfully found, then a structured clone of it is created and set as the result of the request"
  [store-or-index k]
  (store/get store-or-index k))

(defn get-key
  "Returns an implementation of the IDBRequest protocol, and, in a separate thread, finds either the primary key
   that corresponds to the given key in this index (or object store) or the first corresponding primary key, if key is set to an IDBKeyRange.
   
   If a primary key is found, it is set as the result of the request object. Note that this doesn't return the whole record as get does."
  [store-or-index k]
  (store/get-key store-or-index k))

(defn get-all
  "Retrieves all objects that are inside the index or store. Returns an IDBRequest containing
  the results"
  ([store-or-index query count]
   (store/get-all store-or-index query count))
  ([store-or-index query]
   (store/get-all store-or-index query))
  ([store-or-index]
   (store/get-all store-or-index)))

(defn get-all-keys
  "Asynchronously retrieves the primary keys of all objects inside the index or store,
   setting them as the result of the request"
  ([store-or-index query count]
   (store/get-all-keys store-or-index query count))
  ([store-or-index query]
   (store/get-all-keys store-or-index query))
  ([store-or-index]
   (store/get-all-keys store-or-index)))

(defn open-cursor
  "Returns an IDBRequest, and, in a separate thread, creates a cursor over the specified key range.
   
   The method sets the position of the cursor to the appropriate record, based on the specified direction.
   
   If the key range is not specified or is null, then the range includes all the records.
   
   The value of direction can be one of \"next\", \"nextunique\", \"prev\", or \"prevunique\".
   
   \"next\": The cursor shows all records, including duplicates. It starts at the lower bound of the key range and moves upwards
   (monotonically increasing in the order of keys).
   
   \"nextunique\": The cursor shows all records, excluding duplicates. If multiple records exist with the same key,
   only the first one iterated is retrieved. It starts at the lower bound of the key range and moves upwards.
   
   \"prev\": The cursor shows all records, including duplicates. It starts at the upper bound of the key range and moves
   downwards (monotonically decreasing in the order of keys).
   
   \"prevunique\": The cursor shows all records, excluding duplicates. If multiple records exist with the same key,
   only the first one iterated is retrieved. It starts at the upper bound of the key range and moves downwards."
  ([store-or-index query direction]
   (store/open-cursor store-or-index query direction))
  ([store-or-index query]
   (store/open-cursor store-or-index query))
  ([store-or-index]
   (store/open-cursor store-or-index)))

(defn open-key-cursor
  "Returns an IDBRequest, and, in a separate thread, creates a cursor over the specified key range, as arranged by this index.
   
   The method sets the position of the cursor to the appropriate key, based on the specified direction.
   
   If the key range is not specified or is null, then the range includes all the keys.
   
   See [[indexed.db/open-cursor]] for an explanation of direction."
  ([store-or-index query direction]
   (store/open-key-cursor store-or-index query direction))
  ([store-or-index query]
   (store/open-key-cursor store-or-index query))
  ([store-or-index]
   (store/open-key-cursor store-or-index)))

(defn index?
  "Returns true if the given value satisfies the IDBIndex protocol"
  [x]
  (store/index? x))

(defn auto-locale?
  "Returns a boolean value indicating whether the index had a locale value of auto specified upon its creation.
   
   This property is [experimental](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)"
  [index]
  (store/auto-locale? index))

(defn locale
  "Returns the locale of the index (for example en-US, or pl) if it had a locale value specified upon its creation.
   
   This property is [experimental](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)"
  [index]
  (store/locale index))

(defn get-object-store
  "Returns the object store the index belongs to"
  [index]
  (store/get-object-store index))

(defn multi-entry?
  "Returns a boolean value that affects how the index behaves when the result of evaluating the index's
   key path yields an array"
  [index]
  (store/multi-entry? index))

(defn unique?
  "Returns a boolean that states whether the index allows duplicate keys"
  [index]
  (store/unique? index))

(defn store?
  "Returns true if the given value satisfies the IDBObjectStore protocol"
  [x]
  (store/store? x))

(defn index-names
  "Returns a sequence of the names of indexes on objects in this object store"
  [store]
  (store/index-names store))

(defn auto-increment?
  "Returns the value of the auto increment flag for this object store.
   
   Note that every object store has its own separate auto increment counter"
  [store]
  (store/auto-increment? store))

(defn add
  "Returns an implementation of the IDBRequest protocol, and, in a separate thread, creates a
   structured clone of the value, and stores the cloned value in the object store.
   
   This is for adding new records to an object store.
   
   If k is unspecified, it results to null"
  ([store value k]
   (store/add store value k))
  ([store value]
   (store/add store value)))

(defn clear
  "Creates and immediately returns an IDBRequest, and clears this object store in a separate thread.
   
   This is for deleting all the current data out of an object store"
  [store]
  (store/clear store))

(defn create-index
  "Creates and returns an implementation of the IDBIndex protocol in the connected database.
   
   It creates a new field/column defining a new data point for each database record to contain.
   
   Note that this method must be called only from a VersionChange transaction mode callback"
  ([store index-name key-path object-parameters]
   (store/create-index store index-name key-path object-parameters))
  ([store index-name key-path]
   (store/create-index store index-name key-path)))

(defn delete-index
  "Destroys the index with the specified name in the connected database, used during a version upgrade
   
   Note that this method must be called only from a VersionChange transaction mode callback"
  [store index-name]
  (store/delete-index store index-name))

(defn index
  "Opens a named index in the current object store, after which it can be used to, for example,
   return a series of records sorted by that index using a cursor"
  [store index-name]
  (store/index store index-name))

(defn put
  "Updates a given record in a database, or inserts a new record if the given item does not already exist"
  ([store item]
   (store/put store item))
  ([store item k]
   (store/put store item k)))

(defn delete
  "When given an IDBObjectStore and a key, returns an IDBRequest,
   and, in a separate thread, deletes the specified record or records.
   
   When given a cursor, returns an IDBRequest, and, in a separate thread,
   deletes the record at the cursor's position, without changing the cursor's position.
   Once the record is deleted, the cursor's value is set to null"
  ([cursor]
   (cursor/delete cursor))
  ([store k]
   (store/delete store k)))

(defn create-object-store
  "When called with an IDBDatabase, creates and returns a new IDBObjectStore.
   
   When called with a single native js/IDBObjectStore, acts as a factory function for
   wrapping the js/IDBObjectStore in an implementation of the IDBObjectStore protocol"
  ([db name options]
   (database/create-object-store db name options))
  ([db name]
   (database/create-object-store db name))
  ([js-idb-store]
   (store/create-object-store js-idb-store)))

(defn object-store
  "When called with a transaction and object store name, returns an object store that
   has already been added to the scope of this transaction.
   
   When called with an index, returns the object store the index belongs to"
  ([txn name]
   (transaction/object-store txn name))
  ([index]
   (get-object-store index)))

(defn source
  "In the case of a cursor, returns the IDBObjectStore or IDBIndex that the cursor is iterating over.
  
   In the case of a request, returns the source of the request, such as an index or an object store."
  [x]
  (when-some [src (impl/source x)]
    (cond
      (instance? js/IDBObjectStore src) (create-object-store src)
      (instance? js/IDBIndex src) (store/create-index* src)
      :else nil)))
