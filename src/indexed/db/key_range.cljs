(ns indexed.db.key-range
  (:require [indexed.db.key-range.protocols :as proto :refer [IDBKeyRange]]))

(deftype KeyRange [key-range]
  IDBKeyRange
  (-includes [_ k] (.includes key-range k))
  (-idb-key-range [_] key-range))

(defn key-range?
  [x]
  (satisfies? IDBKeyRange x))

(defn idb-key-range
  [key-range]
  (proto/-idb-key-range key-range))

(defn create-key-range
  [key-range]
  (->KeyRange key-range))

(defn includes
  [key-range k]
  (proto/-includes key-range k))

(defn bound
  ([lower upper lower-open? upper-open?]
   (create-key-range
    (.bound js/IDBKeyRange lower upper lower-open? upper-open?)))
  ([lower upper lower-open?]
   (bound lower upper lower-open? false))
  ([lower upper]
   (bound lower upper false)))

(defn only
  [value]
  (create-key-range
   (.only js/IDBKeyRange value)))

(defn lower-bound
  ([lower open]
   (create-key-range
    (.lowerBound js/IDBKeyRange lower open)))
  ([lower]
   (lower-bound lower false)))

(defn upper-bound
  ([upper open]
   (create-key-range
    (.upperBound js/IDBKeyRange upper open)))
  ([upper]
   (upper-bound upper false)))



