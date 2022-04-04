(ns indexed.db.key-range
  "@TODO add property accessors and tests"
  (:require [indexed.db.impl.protocols :as impl]))

(deftype KeyRange [key-range]
  impl/IDBKeyRange
  (-includes [_ k] (.includes key-range k))
  (-lower [_] (.-lower key-range))
  (-upper [_] (.-upper key-range))
  (-lower-open? [_] (.-lowerOpen key-range))
  (-upper-open? [_] (.-upperOpen key-range))
  (-idb-key-range [_] key-range))

(defn key-range?
  [x]
  (satisfies? impl/IDBKeyRange x))

(defn idb-key-range
  [key-range]
  (impl/-idb-key-range key-range))

(defn create-key-range
  [key-range]
  (KeyRange. key-range))

(defn includes
  [key-range k]
  (impl/-includes key-range k))

(defn lower
  [key-range]
  (impl/-lower key-range))

(defn upper
  [key-range]
  (impl/-upper key-range))

(defn lower-open?
  [key-range]
  (impl/-lower-open? key-range))

(defn upper-open?
  [key-range]
  (impl/-upper-open? key-range))

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



