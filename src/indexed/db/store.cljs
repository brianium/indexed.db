(ns indexed.db.store
  (:require [indexed.db.key-range :as key-range]
            [indexed.db.request :as request]
            [indexed.db.impl.protocols :as impl])
  (:refer-clojure :exclude [count get]))

(defn key*
  [x]
  (if (key-range/key-range? x)
    (key-range/idb-key-range x)
    x))

(deftype BaseObjectStore [store]
  INamed
  (-name [_] (.-name store))

  impl/ReadableObjectStore
  (-key-path [_] (.-keyPath store))
  (-count
    [_ query]
    (if (some? query)
      (request/create-request (.count store (key* query)))
      (request/create-request (.count store))))
  (-get
    [_ k]
    (request/create-request (.get store (key* k))))
  (-get-key
    [_ k]
    (request/create-request (.getKey store (key* k))))
  (-get-all
    [_ query count]
    (cond
      (and query count) (request/create-request (.getAll store (key* query) count))
      (some? query)     (request/create-request (.getAll store (key* query)))
      :else             (request/create-request (.getAll store))))
  (-get-all-keys
    [_ query count]
    (cond
      (and query count) (request/create-request (.getAllKeys store (key* query) count))
      (some? query)     (request/create-request (.getAllKeys store (key* query)))
      :else             (request/create-request (.getAllKeys store))))
  (-open-cursor
    [_ query direction]
    (cond
      (and query direction) (request/create-request (.openCursor store (key* query) direction))
      (some? query)         (request/create-request (.openCursor store (key* query)))
      :else                 (request/create-request (.openCursor store))))
  (-open-key-cursor
    [_ query direction]
    (cond
      (and query direction) (request/create-request (.openKeyCursor store (key* query) direction))
      (some? query)         (request/create-request (.openKeyCursor store (key* query)))
      :else                 (request/create-request (.openKeyCursor store)))))

(defn key-path
  [store]
  (impl/-key-path store))

(defn count
  ([store query]
   (impl/-count store query))
  ([store]
   (impl/-count store nil)))

(defn get
  [store key]
  (impl/-get store key))

(defn get-key
  [store key]
  (impl/-get-key store key))

(defn get-all
  ([store query count]
   (impl/-get-all store query count))
  ([store query]
   (get-all store query nil))
  ([store]
   (get-all store nil nil)))

(defn get-all-keys
  ([store query count]
   (impl/-get-all-keys store query count))
  ([store query]
   (get-all-keys store query nil))
  ([store]
   (get-all-keys store nil nil)))

(defn open-cursor
  ([store query direction]
   (impl/-open-cursor store query direction))
  ([store query]
   (open-cursor store query nil))
  ([store]
   (open-cursor store nil nil)))

(defn open-key-cursor
  ([store query direction]
   (impl/-open-key-cursor store query direction))
  ([store query]
   (open-key-cursor store query nil))
  ([store]
   (open-key-cursor store nil nil)))

(deftype Index [object-store idb-index]
  INamed
  (-name [_] (name object-store))

  impl/ReadableObjectStore
  (-key-path [_] (key-path object-store))
  (-count [_ query] (count object-store query))
  (-get [_ key] (get object-store key))
  (-get-key [_ key] (get-key object-store key))
  (-get-all [_ query count] (get-all object-store query count))
  (-get-all-keys [_ query count] (get-all-keys object-store query count))
  (-open-cursor [_ query direction] (open-cursor object-store query direction))
  (-open-key-cursor [_ query direction] (open-key-cursor object-store query direction))

  impl/IDBIndex
  (-auto-locale? [_] (.isAutoLocale idb-index))
  (-locale [_] (.locale idb-index))
  (-object-store-name [_] (.objectStore idb-index))
  (-multi-entry? [_] (.multiEntry idb-index))
  (-unique? [_] (.unique idb-index)))

(defn index?
  [x]
  (satisfies? impl/IDBIndex x))

(defn create-index*
  [idb-index]
  (-> idb-index
      (BaseObjectStore.)
      (Index. idb-index)))

(defn auto-locale?
  [index]
  (impl/-auto-locale? index))

(defn locale
  [index]
  (impl/-locale index))

(defn object-store-name
  [index]
  (impl/-object-store-name index))

(defn multi-entry?
  [index]
  (impl/-multi-entry? index))

(defn unique?
  [index]
  (impl/-unique? index))

(defn clj->index-parameters
  [{:keys [unique? multi-entry? locale]}]
  (let [params #js {}]
    (when (some? unique?)
      (set! (.-unique params) unique?))
    (when (some? multi-entry?)
      (set! (.-multiEntry params) multi-entry?))
    (when locale
      (set! (.-locale params) locale))
    params))

(deftype ObjectStore [object-store idb-store]
  INamed
  (-name [_] (name object-store))

  impl/BelongsToTransaction
  (-idb-transaction [_] (.-transaction idb-store))

  impl/ReadableObjectStore
  (-key-path [_] (key-path object-store))
  (-count [_ query] (count object-store query))
  (-get [_ key] (get object-store key))
  (-get-key [_ key] (get-key object-store key))
  (-get-all [_ query count] (get-all object-store query count))
  (-get-all-keys [_ query count] (get-all-keys object-store query count))
  (-open-cursor [_ query direction] (open-cursor object-store query direction))
  (-open-key-cursor [_ query direction] (open-key-cursor object-store query direction))

  impl/IDBObjectStore
  (-index-names [_] (array-seq (.-indexNames idb-store)))
  (-auto-increment? [_] (.-autoIncrement idb-store))
  (-add
    [_ value key]
    (if (some? key)
      (request/create-request (.add idb-store value key))
      (request/create-request (.add idb-store value))))
  (-clear
    [_]
    (request/create-request (.clear idb-store)))
  (-create-index
    [_ index-name key-path object-parameters]
    (let [key-path* (if (coll? key-path)
                      (apply array key-path)
                      key-path)
          idb-index (.createIndex idb-store index-name key-path* (clj->index-parameters object-parameters))]
      (create-index* idb-index)))
  (-delete-item
    [_ k]
    (request/create-request
     (.delete idb-store (key* k))))
  (-delete-index
    [_ index-name]
    (request/create-request
     (.deleteIndex idb-store index-name)))
  (-index
    [_ index-name]
    (create-index*
     (.index idb-store index-name)))
  (-put
    [_ item key]
    (request/create-request
     (if (some? key)
       (.put idb-store item key)
       (.put idb-store item)))))

(defn store?
  [x]
  (satisfies? impl/IDBObjectStore x))

(defn create-object-store
  [idb-store]
  (-> idb-store
      (BaseObjectStore.)
      (ObjectStore. idb-store)))

(defn index-names
  [store]
  (impl/-index-names store))

(defn auto-increment?
  [store]
  (impl/-auto-increment? store))

(defn add
  ([store value key]
   (impl/-add store value key))
  ([store value]
   (add store value nil)))

(defn clear
  [store]
  (impl/-clear store))

(defn create-index
  ([store index-name key-path object-parameters]
   (impl/-create-index store index-name key-path object-parameters))
  ([store index-name key-path]
   (create-index store index-name key-path {})))

(defn delete
  [store k]
  (impl/-delete-item store k))

(defn delete-index
  [store index-name]
  (impl/-delete-index store index-name))

(defn index
  [store index-name]
  (impl/-index store index-name))

(defn put
  ([store item]
   (impl/-put store item nil))
  ([store item key]
   (impl/-put store item key)))
