(ns ^:no-doc indexed.db.impl.request
  (:require [indexed.db.impl.protocols :as impl]))

(deftype Request [request]
  impl/EventTarget
  (target [_] request)

  impl/HasErrors
  (error
    [_]
    (.-error request))

  impl/BelongsToSource
  (source
    [_]
    (.-source request))

  impl/IDBRequest
  (result
    [_]
    (.-result request))
  (ready-state
    [_]
    (.-readyState request))

  impl/BelongsToTransaction
  (idb-transaction
    [_]
    (.-transaction request)))

(defn request?
  [x]
  (satisfies? impl/IDBRequest x))

(defn create-request
  [request]
  (Request. request))

(defn result
  [db-request]
  (impl/result db-request))

(defn ready-state
  [db-request]
  (impl/ready-state db-request))
