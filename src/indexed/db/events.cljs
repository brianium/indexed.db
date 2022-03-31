(ns indexed.db.events
  (:require [indexed.db.impl.protocols :as impl]))

(defrecord VersionChangeEvent [js-event create-request]
  impl/IDBVersionChangeEvent
  (-new-version [_] (.-newVersion js-event))
  (-old-version [_] (.-oldVersion js-event))
  (-request [_] (create-request (.-target js-event))))

(defn create-version-change-event
  [js-event create-request]
  (->VersionChangeEvent js-event create-request))

(defn new-version
  [version-change-event]
  (impl/-new-version version-change-event))

(defn old-version
  [version-change-event]
  (impl/-old-version version-change-event))

(defn request
  [version-change-event]
  (impl/-request version-change-event))

(defn on
  ([event-target type listener]
   (.addEventListener (impl/-target event-target) type listener)
   event-target)
  ([event-target type listener options]
   (.addEventListener (impl/-target event-target) type listener (clj->js options))
   event-target))
