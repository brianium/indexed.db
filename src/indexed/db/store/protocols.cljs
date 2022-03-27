(ns indexed.db.store.protocols
  (:refer-clojure :exclude [-name -count]))

(defprotocol ReadableObjectStore
  (-name [self])
  (-key-path [self])
  (-count [self query])
  (-get [self key])
  (-get-key [self key])
  (-get-all [self query count])
  (-get-all-keys [self query count])
  (-open-cursor [self query direction])
  (-open-key-cursor [self query direction]))

(defprotocol IDBIndex
  (-auto-locale? [self])
  (-locale [self])
  (-object-store [self])
  (-multi-entry? [self])
  (-unique? [self]))

(defprotocol IDBObjectStore
  (-index-names [self])
  (-auto-increment? [self])
  (-add [self value key])
  (-clear [self])
  (-create-index [self index-name key-path object-parameters])
  (-delete [self k])
  (-delete-index [self index-name])
  (-index [self index-name]))
