(ns indexed.db.request
  (:require [indexed.db.impl.protocols :as impl]))

(deftype Request [request]
  impl/EventTarget
  (-target [_] request)

  impl/BelongsToSource
  (-source
   [_]
   (.-source request))

  impl/IDBRequest
  (-error
    [_]
    (.-error request))
  (-result
    [_]
    (.-result request))
  (-ready-state
    [_]
    (.-readyState request))
  
  impl/BelongsToTransaction
  (-idb-transaction
    [_]
    (.-transaction request)))

(defn create-request
  "Create an IDBRequest"
  [request]
  (Request. request))

(defn error
  [db-request]
  (impl/-error db-request))

(defn result
  [db-request]
  (impl/-result db-request))

(defn ready-state
  [db-request]
  (impl/-ready-state db-request))

(defn from-event
  [e]
  (create-request (.-target e)))
