(ns indexed.db.txn
  (:require [indexed.db.store :as store]
            [indexed.db.impl.protocols :as impl]))

(deftype Transaction [transaction]
  impl/IDBTransaction
  (-object-store
    [_ name]
    (store/create-object-store
     (.objectStore transaction name)))
  
  impl/EventTarget
  (-target [_] transaction))

(defn transaction?
  [x]
  (satisfies? impl/IDBTransaction x))

(defn create-transaction
  [idb-transaction]
  (Transaction. idb-transaction))

(defn object-store
  [txn name]
  (impl/-object-store txn name))

(defn transaction
  [belongs-to-txn]
  (create-transaction (impl/-idb-transaction belongs-to-txn)))
