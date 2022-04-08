(ns indexed.db.impl.protocols
  "Most of the protocols in this namespace map directly to native JS types
   for the IndexedDB API. Where possible, JS properties and methods are mapped
   to conventional Clojure names (i.e kebab case vs camel case).
   
   This library adds a handful of protocols, such as HasErrors, EventTarget, and the BelongsToX
   protocols to address cross cutting concerns present in the native JS API."
  (:refer-clojure :exclude [count key get update]))

(defprotocol IDBFactory
  (open [self name version] [self name])
  (delete-database [self name])
  (cmp [self a b])
  (databases [self fn-1]))

(defprotocol IDBDatabase
  (close [self])
  (version [self])
  (create-object-store [self name options])
  (delete-object-store [self name])
  (object-store-names [self])
  (transaction [self store-names mode options]))

(defprotocol HasErrors
  (error [self]))

(defprotocol BelongsToDatabase
  (idb-database [self]))

(defprotocol IDBKeyRange
  (includes [_ k])
  (lower [_])
  (upper [_])
  (lower-open? [_])
  (upper-open? [_])
  (idb-key-range [_]))

(defprotocol BelongsToSource
  (source [self]))

(defprotocol IDBRequest
  (result [self])
  (ready-state [self]))

(defprotocol BelongsToRequest
  (idb-request [self]))

(defprotocol IDBCursor
  (direction [self])
  (key [self])
  (primary-key [self])
  (advance [self count])
  (continue [self k])
  (continue-primary-key [self k primary-key])
  (delete [self])
  (update [self value]))

(defprotocol IDBCursorWithValue
  (value [self]))

(defprotocol ReadableObjectStore
  (count [self query])
  (key-path [self])
  (get [self key])
  (get-key [self key])
  (get-all [self query count])
  (get-all-keys [self query count])
  (open-cursor [self query direction])
  (open-key-cursor [self query direction]))

(defprotocol IDBObjectStore
  (index-names [self])
  (auto-increment? [self])
  (add [self value key])
  (clear [self])
  (create-index [self index-name key-path object-parameters])
  (delete-item [self k]) ;;; under one polymorphic type?
  (delete-index [self index-name])
  (index [self index-name])
  (put [self item key]))

(defprotocol BelongsToObjectStore
  (idb-object-store [self]))

(defprotocol IDBIndex
  (auto-locale? [self])
  (locale [self])
  (multi-entry? [self])
  (unique? [self]))

(defprotocol IDBTransaction
  (durability [self])
  (mode [self])
  (object-store [self name])
  (abort [self])
  (commit [self]))

(defprotocol BelongsToTransaction
  (idb-transaction [self]))

(defprotocol IDBVersionChangeEvent
  (new-version [self])
  (old-version [self]))

(defprotocol EventTarget
  (target [self]))
