(ns indexed.db.database
  (:require [indexed.db.database.protocols :as proto :refer [IDBDatabase]]
            [indexed.db.events :as events :refer [EventTarget]]
            [indexed.db.store :as store]
            [indexed.db.transaction :as transaction])
  (:refer-clojure :exclude [-name name]))

(defn clj->create-store-options
  [{:keys [key-path auto-increment]}]
  (let [options #js {}]
    (when key-path
      (set! (.-keyPath options) key-path))
    (when (some? auto-increment)
      (set! (.-autoIncrement options) auto-increment))
    options))

(defn clj->transaction-options
  [{:keys [durability] :or {durability "default"}}]
  (let [options #js {}]
    (set! (.-durability options) durability)
    options))

(deftype Database [db]
  EventTarget
  (-target [_] db)
  IDBDatabase
  (-close [_] (.close db))
  (-name [_] (.-name db))
  (-version [_] (.-version db))
  (-create-object-store
    [_ name options]
    (if (some? options)
      (store/create-object-store (.createObjectStore db name (clj->create-store-options options)))
      (store/create-object-store (.createObjectStore db name))))
  (-delete-object-store
    [_ name]
    (.deleteObjectStore db name))
  (-object-store-names
    [_]
    (array-seq (.-objectStoreNames db)))
  (-transaction
    [_ store-names mode options]
    (transaction/create-transaction (.transaction db (apply array store-names) mode (clj->transaction-options options)))))

(defn database?
  [x]
  (satisfies? IDBDatabase x))

(defn create-database
  [idb]
  (->Database idb))

(defn close
  [db]
  (proto/-close db))

(defn create-object-store
  ([db name options]
   (proto/-create-object-store db name options))
  ([db name]
   (create-object-store db name nil)))

(defn delete-object-store
  [db name]
  (proto/-delete-object-store db name))

(defn object-store-names
  [db]
  (proto/-object-store-names db))

(defn name
  [db]
  (proto/-name db))

(defn version
  [db]
  (proto/-version db))

(defn transaction
  ([db store-names mode options]
   (proto/-transaction db store-names mode options))
  ([db store-names mode]
   (transaction db store-names mode {}))
  ([db store-names]
   (transaction db store-names "readonly")))
