(ns indexed.db.request
  (:require [indexed.db.events :as events :refer [EventTarget]]
            [indexed.db.transaction.protocols :refer [BelongsToTransaction]]))

(defprotocol IDBRequest
  (-error [self])
  (-result [self])
  (-source [self])
  (-ready-state [self]))

(deftype Request [request]
  EventTarget
  (-target [_] request)

  IDBRequest
  (-error
    [_]
    (.-error request))
  (-result
    [_]
    (.-result request))
  (-source
    [_]
    (.-source request))
  (-ready-state
    [_]
    (.-readyState request))
  
  BelongsToTransaction
  (-idb-transaction
    [_]
    (.-transaction request)))

(defn create-request
  "Create an IDBRequest"
  [request]
  (->Request request))

(defn error
  [db-request]
  (-error db-request))

(defn result
  [db-request]
  (-result db-request))

(defn source
  [db-request]
  (-source db-request))

(defn ready-state
  [db-request]
  (-ready-state db-request))

(defn from-event
  [e]
  (create-request (.-target e)))
