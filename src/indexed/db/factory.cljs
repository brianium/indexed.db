(ns indexed.db.factory
  (:require [indexed.db.request :as request]))

(defprotocol IDBFactory
  (-open [self name version] [self name])
  (-delete-database [self name])
  (-cmp [self a b])
  (-databases [self fn-1]))

(defn dict->map
  [obj]
  {:name    (.-name obj)
   :version (.-version obj)})

(deftype Factory [factory]
  IDBFactory
  (-open
    [_ name version]
    (request/create-request
     (.open factory name version)))
  (-delete-database
    [_ name]
    (request/create-request (.deleteDatabase factory name)))
  (-cmp
    [_ a b]
    (.cmp factory a b))
  (-databases
    [_ fn-1]
    (let [p (.databases factory)]
      (-> p
          (.then (fn [result]
                   (cond-> result
                     (array? result) (->> array-seq (map dict->map))
                     :always         (fn-1))))))))

(defn create-factory []
  (->Factory js/indexedDB))

(defn open
  ([factory name version]
   (-open factory name version))
  ([name version]
   (open (create-factory) name version))
  ([name]
   (open (create-factory) name)))

(defn delete-database
  ([factory name]
   (-delete-database factory name))
  ([name]
   (delete-database (create-factory) name)))

(defn cmp
  ([factory a b]
   (-cmp factory a b))
  ([a b]
   (cmp (create-factory) a b)))

(defn databases
  ([factory fn-1]
   (-databases factory fn-1)
   factory)
  ([fn-1]
   (databases (create-factory) fn-1)))
