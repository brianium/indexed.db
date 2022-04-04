(ns indexed.db.spec
  (:require [cljs.spec.alpha :as s]
            [indexed.db.impl.cursor :as cursor]
            [indexed.db.impl.database :as database]
            [indexed.db.impl.events :as events]
            [indexed.db.impl.factory :as factory]
            [indexed.db.impl.key-range :as key-range]
            [indexed.db.impl.request :as request]
            [indexed.db.impl.store :as store]
            [indexed.db.impl.transaction :as txn]
            [indexed.db.impl.protocols :as impl]))

(s/def ::factory factory/factory?)

(s/def ::request request/request?)

(s/def ::open-db-request ::request)

(s/def ::name string?)

(s/def ::version nat-int?)

(s/def ::dom-exception #(instance? js/DOMException %))

(s/def ::database-record (s/keys :req-un [::name ::version]))

(s/def ::databases-callback
  (s/fspec
   :args (s/cat :result (s/or :error ::dom-exception :databases (s/coll-of ::database-record)))
   :ret  any?))

(s/def ::database database/database?)

(s/def ::belongs-to-database #(satisfies? impl/BelongsToDatabase %))

(s/def ::js-idb #(instance? js/IDBDatabase %))

(s/def ::transaction txn/transaction?)

(s/def ::object-store-names (s/coll-of ::name))

(s/def ::mode #{"readonly" "readwrite" "readwriteflush"})

(s/def ::durability #{"default" "strict" "relaxed"})

(s/def ::transaction-options (s/keys :req-un [::durability]))

(s/def ::js-cursor #(instance? js/IDBCursor %))

(s/def ::cursor cursor/cursor?)

(s/def ::js-cursor-with-value #(instance? js/IDBCursorWithValue %))

(s/def ::cursor-with-value cursor/cursor-with-value?)

(s/def ::direction #{"next" "nextunique" "prev" "prevunique"})

(s/def ::js-request #(instance? js/IDBRequest %))

(s/def ::has-errors #(satisfies? impl/HasErrors %))

(s/def ::ready-state #{"pending" "done"})

(s/def ::js-version-change-event #(instance? js/IDBVersionChangeEvent %))

(s/def ::version-change-event events/version-change-event?)

(s/def ::belongs-to-request #(satisfies? impl/BelongsToRequest %))

(s/def ::event-target events/event-target?)

(s/def ::key-range key-range/key-range?)

(s/def ::js-transaction #(instance? js/IDBTransaction %))

(s/def ::belongs-to-transaction #(satisfies? impl/BelongsToTransaction %))

(s/def ::key-path (s/or :seq (s/coll-of string?) :single string?))

(s/def ::store store/store?)

(s/def ::index store/index?)

(s/def ::readable-store (s/or :store ::store :index ::index))

(s/def ::key any?)

(s/def ::query (s/or :key ::key :key-range ::key-range))

(s/def ::unique? boolean?)

(s/def ::multi-entry? boolean?)

(s/def ::locale string?)

(s/def ::index-options (s/keys :opt-un [::unique? ::multi-entry? ::locale]))

(s/def ::auto-increment? boolean?)

(s/def ::store-options (s/keys :opt-un [::key-path ::auto-increment?]))

(s/def ::js-store #(instance? js/IDBObjectStore %))
