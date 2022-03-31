(ns indexed.db.cursor
  (:require  [indexed.db.request :as request]
             [indexed.db.impl.protocols :as impl])
  (:refer-clojure :exclude [key update]))

(deftype Cursor [idb-cursor]
  impl/BelongsToRequest
  (-idb-request [_] (.-request idb-cursor))

  impl/BelongsToSource
  (-source [_] (.-source idb-cursor))

  impl/IDBCursor
  (-direction [_] (.-direction idb-cursor))
  (-key [_] (.-key idb-cursor))
  (-primary-key [_] (.-primaryKey idb-cursor))
  (-advance [_ count] (.advance idb-cursor count))
  (-continue
    [_ k]
    (if (some? k)
      (.continue idb-cursor k)
      (.continue idb-cursor)))
  (-continue-primary-key [_ k primary-key] (.continuePrimaryKey idb-cursor k primary-key))
  (-delete [_] (request/create-request (.delete idb-cursor)))
  (-update [_ value] (request/create-request (.update idb-cursor value))))

(defn cursor?
  [x]
  (satisfies? impl/IDBCursor x))

(defn create-cursor
  [idb-cursor]
  (Cursor. idb-cursor))

(defn direction
  [cursor]
  (impl/-direction cursor))

(defn key
  [cursor]
  (impl/-key cursor))

(defn primary-key
  [cursor]
  (impl/-primary-key cursor))

(defn advance
  [cursor count]
  (impl/-advance cursor count))

(defn continue
  ([cursor k]
   (impl/-continue cursor k))
  ([cursor]
   (continue cursor nil)))

(defn continue-primary-key
  [cursor k primary-key]
  (impl/-continue-primary-key cursor k primary-key))

(defn delete
  [cursor]
  (impl/-delete cursor))

(defn update
  [cursor value]
  (impl/-update cursor value))

(deftype CursorWithValue [cursor idb-cursor]
  impl/BelongsToRequest
  (-idb-request [_] (.-request idb-cursor))

  impl/BelongsToSource
  (-source [_] (.-source idb-cursor))
  
  impl/IDBCursor
  (-direction [_] (direction cursor))
  (-key [_] (key cursor))
  (-primary-key [_] (primary-key cursor))
  (-advance [_ count] (advance cursor count))
  (-continue [_ k] (continue cursor k))
  (-continue-primary-key [_ k primary-key] (continue-primary-key cursor k primary-key))
  (-delete [_] (delete cursor))
  (-update [_ value] (update cursor value))
  
  impl/IDBCursorWithValue
  (-value [_] (.-value idb-cursor)))

(defn create-cursor-with-value
  [idb-cursor]
  (CursorWithValue.
   (create-cursor idb-cursor)
   idb-cursor))

(defn value
  [cursor-with-value]
  (impl/-value cursor-with-value))
