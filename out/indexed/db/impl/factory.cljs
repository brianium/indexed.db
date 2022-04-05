(ns indexed.db.impl.factory
  (:require [indexed.db.impl.request :as request]
            [indexed.db.impl.protocols :as impl]))

(defn dict->map
  [obj]
  {:name    (.-name obj)
   :version (.-version obj)})

(deftype Factory [factory]
  impl/IDBFactory
  (open
    [_ name version]
    (request/create-request
     (.open factory name version)))
  (delete-database
    [_ name]
    (request/create-request (.deleteDatabase factory name)))
  (cmp
    [_ a b]
    (.cmp factory a b))
  (databases
    [_ fn-1]
    (if (type (.-databases factory))
      (let [p (.databases factory)]
        (-> p
            (.then (fn [result]
                     (cond-> result
                       (array? result) (->> array-seq (map dict->map))
                       :always         (fn-1))))))
      (fn-1 '()))))

(type (.-databases js/indexedDB))

(defn factory?
  [x]
  (satisfies? impl/IDBFactory x))

(defn create-factory []
  (Factory. js/indexedDB))

(defn open
  ([factory name version]
   (impl/open factory name version))
  ([name version]
   (open (create-factory) name version))
  ([name]
   (open (create-factory) name)))

(defn delete-database
  ([factory name]
   (impl/delete-database factory name))
  ([name]
   (delete-database (create-factory) name)))

(defn cmp
  ([factory a b]
   (impl/cmp factory a b))
  ([a b]
   (cmp (create-factory) a b)))

(defn databases
  ([factory fn-1]
   (impl/databases factory fn-1)
   factory)
  ([fn-1]
   (databases (create-factory) fn-1)))
