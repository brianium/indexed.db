(ns indexed.db.request
  (:require [indexed.db.events :as events :refer [EventTarget]]
            [indexed.db.request.protocols :as proto :refer [IDBRequest]]
            [indexed.db.transaction.protocols :refer [BelongsToTransaction]]))

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
  (proto/-error db-request))

(defn result
  [db-request]
  (proto/-result db-request))

(defn source
  [db-request]
  (proto/-source db-request))

(defn ready-state
  [db-request]
  (proto/-ready-state db-request))

(defn from-event
  [e]
  (create-request (.-target e)))

(defn request
  [belongs-to-request]
  (create-request
   (proto/-idb-request belongs-to-request)))
