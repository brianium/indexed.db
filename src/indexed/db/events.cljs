(ns indexed.db.events)

(defprotocol IDBVersionChangeEvent
  (-new-version [self])
  (-old-version [self])
  (-request [self]))

(defrecord VersionChangeEvent [js-event create-request]
  IDBVersionChangeEvent
  (-new-version [_] (.-newVersion js-event))
  (-old-version [_] (.-oldVersion js-event))
  (-request [_] (create-request (.-target js-event))))

(defn create-version-change-event
  [js-event create-request]
  (->VersionChangeEvent js-event create-request))

(defn new-version
  [version-change-event]
  (-new-version version-change-event))

(defn old-version
  [version-change-event]
  (-old-version version-change-event))

(defn request
  [version-change-event]
  (-request version-change-event))

(defprotocol EventTarget
  (-target [self]))

(defn on
  ([event-target type listener]
   (.addEventListener (-target event-target) type listener)
   event-target)
  ([event-target type listener options]
   (.addEventListener (-target event-target) type listener (clj->js options))
   event-target))
