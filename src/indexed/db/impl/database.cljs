(ns ^:no-doc indexed.db.impl.database
  (:require [indexed.db.impl.protocols :as impl]
            [indexed.db.impl.store :as store]
            [indexed.db.impl.transaction :as transaction])
  (:refer-clojure :exclude [name]))

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

(deftype Database [idb]
  impl/EventTarget
  (target [_] idb)

  INamed
  (-name [_] (.-name idb))

  impl/IDBDatabase
  (close [_] (.close idb))
  (version [_] (.-version idb))
  (create-object-store
    [_ name options]
    (if (some? options)
      (store/create-object-store (.createObjectStore idb name (clj->create-store-options options)))
      (store/create-object-store (.createObjectStore idb name))))
  (delete-object-store
    [_ name]
    (.deleteObjectStore idb name))
  (object-store-names
    [_]
    (array-seq (.-objectStoreNames idb)))
  (transaction
    [_ store-names mode options]
    (transaction/create-transaction (.transaction idb (apply array store-names) mode (clj->transaction-options options)))))

(defn database?
  [x]
  (satisfies? impl/IDBDatabase x))

(defn create-database
  [idb]
  (Database. idb))

(defn close
  [db]
  (impl/close db))

(defn create-object-store
  ([db name options]
   (impl/create-object-store db name options))
  ([db name]
   (create-object-store db name nil)))

(defn delete-object-store
  [db name]
  (impl/delete-object-store db name)
  db)

(defn object-store-names
  [db]
  (impl/object-store-names db))

(defn version
  [db]
  (impl/version db))

(defn transaction
  ([db store-names mode options]
   (impl/transaction db store-names mode options))
  ([db store-names mode]
   (transaction db store-names mode {}))
  ([db store-names]
   (transaction db store-names "readonly")))

(defn db
  [belongs-to-database]
  (create-database
   (impl/idb-database belongs-to-database)))
