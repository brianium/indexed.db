(ns indexed.db.cursor
  (:require  [indexed.db.request :as request]
             [indexed.db.request.protocols :refer [BelongsToRequest]])
  (:refer-clojure :exclude [-key key update]))

(defprotocol IDBCursor
  (-source [self])
  (-direction [self])
  (-key [self])
  (-primary-key [self])
  (-advance [self count])
  (-continue [self k])
  (-continue-primary-key [self k primary-key])
  (-delete [self])
  (-update [self value]))

(deftype Cursor [idb-cursor source]
  BelongsToRequest
  (-idb-request [_] (.-request idb-cursor))

  IDBCursor
  (-source [_] source)
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

(defn create-cursor
  [idb-cursor source]
  (->Cursor idb-cursor source))

(defn source
  [cursor]
  (-source cursor))

(defn direction
  [cursor]
  (-direction cursor))

(defn key
  [cursor]
  (-key cursor))

(defn primary-key
  [cursor]
  (-primary-key cursor))

(defn advance
  [cursor count]
  (-advance cursor count))

(defn continue
  ([cursor k]
   (-continue cursor k))
  ([cursor]
   (continue cursor nil)))

(defn continue-primary-key
  [cursor k primary-key]
  (-continue-primary-key cursor k primary-key))

(defn delete
  [cursor]
  (-delete cursor))

(defn update
  [cursor value]
  (-update cursor value))

(defprotocol IDBCursorWithValue
  (-value [self]))

(deftype CursorWithValue [cursor idb-cursor]
  BelongsToRequest
  (-idb-request [_] (.-request idb-cursor))
  
  IDBCursor
  (-source [_] (source cursor))
  (-direction [_] (direction cursor))
  (-key [_] (key cursor))
  (-primary-key [_] (primary-key cursor))
  (-advance [_ count] (advance cursor count))
  (-continue [_ k] (continue cursor k))
  (-continue-primary-key [_ k primary-key] (continue-primary-key cursor k primary-key))
  (-delete [_] (delete cursor))
  (-update [_ value] (update cursor value))
  
  IDBCursorWithValue
  (-value [_] (.-value idb-cursor)))

(defn create-cursor-with-value
  [idb-cursor source]
  (->CursorWithValue
   (create-cursor idb-cursor source)
   idb-cursor))

(defn value
  [cursor-with-value]
  (-value cursor-with-value))
