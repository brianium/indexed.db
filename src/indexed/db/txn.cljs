(ns indexed.db.txn
  (:require [indexed.db.store :as store]
            [indexed.db.impl.protocols :as impl]))

(deftype Transaction [idb-transaction]
  impl/BelongsToDatabase
  (-idb-database [_] (.-db idb-transaction))

  impl/EventTarget
  (-target [_] idb-transaction)

  impl/HasErrors
  (-error [_] (.-error idb-transaction))

  impl/IDBTransaction
  (-durability [_] (.-durability idb-transaction))

  (-mode [_] (.-mode idb-transaction))

  (-object-store
    [_ name]
    (store/create-object-store
     (.objectStore idb-transaction name)))
  
  (-abort [_] (.abort idb-transaction))
  
  (-commit [_] (.commit idb-transaction)))

(defn transaction?
  [x]
  (satisfies? impl/IDBTransaction x))

(defn create-transaction
  [idb-transaction]
  (Transaction. idb-transaction))

(defn object-store
  [txn name]
  (impl/-object-store txn name))

(defn durability
  [txn]
  (impl/-durability txn))

(defn mode
  [txn]
  (impl/-mode txn))

(defn abort
  [txn]
  (impl/-abort txn))

(defn commit
  [txn]
  (impl/-commit txn))

(defn transaction
  [belongs-to-txn]
  (create-transaction (impl/-idb-transaction belongs-to-txn)))
