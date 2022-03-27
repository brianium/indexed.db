(ns indexed.db.transaction
  (:require [indexed.db.events :as events :refer [EventTarget]]
            [indexed.db.store :as store]
            [indexed.db.transaction.protocols :as proto]))

(deftype Transaction [transaction]
  proto/IDBTransaction
  (-object-store
    [_ name]
    (store/create-object-store
     (.objectStore transaction name)))
  
  EventTarget
  (-target [_] transaction))

(defn transaction?
  [x]
  (satisfies? proto/IDBTransaction x))

(defn create-transaction
  [idb-transaction]
  (->Transaction idb-transaction))

(defn object-store
  [txn name]
  (proto/-object-store txn name))

(defn transaction
  [belongs-to-txn]
  (create-transaction (proto/-idb-transaction belongs-to-txn)))
