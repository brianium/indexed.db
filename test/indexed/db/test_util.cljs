(ns indexed.db.test-util
  (:require [indexed.db.events :as events]
            [indexed.db.factory :as factory]
            [indexed.db.request :as request]
            [indexed.db.transaction :as txn]))

(defn handle-upgrade
  [fn-2]
  (fn [e]
    (let [event (events/create-version-change-event e request/create-request)
          request (events/request event)]
      (fn-2 (request/result request) (txn/transaction request)))))

(defn open
  [db-name db-version {:keys [upgradeneeded success]}]
  (let [open-request (factory/open db-name db-version)]
    (-> (events/on open-request "error" #(throw %))
        (events/on "upgradeneeded" (handle-upgrade upgradeneeded))
        (events/on "success" #(success (request/result open-request))))))

(defn test-connect
  [db-name db-version {:keys [success upgradeneeded blocked error] :or {upgradeneeded constantly error #(throw %) blocked #(throw "Blocked")}}]
  (-> (factory/delete-database db-name)
      (events/on "error" error)
      (events/on "blocked" blocked)
      (events/on "success"
       (fn []
         (open db-name db-version {:success success :upgradeneeded upgradeneeded})))))
