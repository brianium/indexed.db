(ns indexed.db.impl.protocols
  (:refer-clojure :exclude [-name -count -key]))

(defprotocol IDBFactory
  (-open [self name version] [self name])
  (-delete-database [self name])
  (-cmp [self a b])
  (-databases [self fn-1]))

(defprotocol IDBDatabase
  (-close [self])
  (-version [self])
  (-create-object-store [self name options])
  (-delete-object-store [self name])
  (-object-store-names [self])
  (-transaction [self store-names mode options]))

(defprotocol IDBKeyRange
  (-includes [_ k])
  (-idb-key-range [_]))

(defprotocol BelongsToSource
  (-source [self]))

(defprotocol IDBRequest
  (-error [self])
  (-result [self])
  (-ready-state [self]))

(defprotocol BelongsToRequest
  (-idb-request [self]))

(defprotocol IDBCursor
  (-direction [self])
  (-key [self])
  (-primary-key [self])
  (-advance [self count])
  (-continue [self k])
  (-continue-primary-key [self k primary-key])
  (-delete [self])
  (-update [self value]))

(defprotocol IDBCursorWithValue
  (-value [self]))

(defprotocol ReadableObjectStore
  (-count [self query])
  (-key-path [self])
  (-get [self key])
  (-get-key [self key])
  (-get-all [self query count])
  (-get-all-keys [self query count])
  (-open-cursor [self query direction])
  (-open-key-cursor [self query direction]))

(defprotocol IDBObjectStore
  (-index-names [self])
  (-auto-increment? [self])
  (-add [self value key])
  (-clear [self])
  (-create-index [self index-name key-path object-parameters])
  (-delete-item [self k]) ;;; under one polymorphic type?
  (-delete-index [self index-name])
  (-index [self index-name])
  (-put [self item key]))

(defprotocol IDBIndex
  (-auto-locale? [self])
  (-locale [self])
  (-object-store-name [self])
  (-multi-entry? [self])
  (-unique? [self]))

(defprotocol IDBTransaction
  (-object-store [self name]))

(defprotocol BelongsToTransaction
  (-idb-transaction [self]))

(defprotocol IDBVersionChangeEvent
  (-new-version [self])
  (-old-version [self])
  (-request [self]))

(defprotocol EventTarget
  (-target [self]))
