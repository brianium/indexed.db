(ns indexed.db.test-util
  (:require [indexed.db :as db]))

(defn handle-upgrade
  [fn-2]
  (fn [e]
    (let [event   (db/create-version-change-event e)
          request (db/get-request event)]
      (fn-2 (db/result request) (db/get-transaction request)))))

(defn open
  [db-name db-version {:keys [upgradeneeded success]}]
  (let [open-request (db/open db-name db-version)]
    (-> (db/on open-request "error" #(throw %))
        (db/on "upgradeneeded" (handle-upgrade upgradeneeded))
        (db/on "success" #(success (db/result open-request))))))

(defn test-connect
  [db-name db-version {:keys [success upgradeneeded blocked error] :or {upgradeneeded constantly error #(throw %) blocked #(throw "Blocked")}}]
  (-> (db/delete-database db-name)
      (db/on "error" error)
      (db/on "blocked" blocked)
      (db/on "success"
             (fn []
               (open db-name db-version {:success success :upgradeneeded upgradeneeded})))))

(defn transaction
  ([db mode]
   (db/transaction db (db/object-store-names db) mode))
  ([db]
   (transaction db "readonly")))

(defn store
  ([db store-name mode]
   (db/object-store (transaction db mode) store-name))
  ([db store-name]
   (store db store-name "readonly")))

(defn add-many
  [object-store done items]
  (let [*counter (atom 0)]
    (loop [item (first items)
           rest (next items)]
      (when (some? item)
        (db/on (db/add object-store (clj->js item)) "success"
               (fn []
                 (when (= (count items) (swap! *counter inc))
                   (done))))
        (recur (first rest) (next rest))))))

;;; Fixture helpers

(defn create-task-db
  "Create a task db used for testing. This schema matches
   the todo list store modeled at MDN. Result of connection will be stored in the *db atom"
  [*db done {:db/keys [name version]}]
  (test-connect
   name
   version
   {:success
    (fn [idb]
      (reset! *db (db/create-database idb))
      (done))

    :upgradeneeded
    (fn [idb]
      (let [db    (db/create-database idb)
            store (db/create-object-store db "toDoList" {:key-path "taskTitle"})]
        (db/create-index store "hours" "hours" {:unique? false})
        (db/create-index store "minutes" "minutes" {:unique? false})
        (db/create-index store "day" "day" {:unique? false})
        (db/create-index store "month" "month" {:unique? false})
        (db/create-index store "year" "year" {:unique? false})
        (db/create-index store "notified" "notified" {:unique? false})
        (db/create-index store "deleteme" "deleteme" {:unique? false})))

    :blocked
    (fn []
      (db/close @*db))

    :error
    (fn []
      (println "Failed test connection")
      (done))}))

(defn seed-tasks
  [db done & tasks]
  (-> (store db "toDoList" "readwrite")
      (add-many
       done
       (concat [{:taskTitle "Walk dog"
                 :hours     19
                 :minutes   30
                 :day       24
                 :month     "December"
                 :year      2013
                 :notified  "no"}
                {:taskTitle "Party hard"
                 :hours     24
                 :minutes   0
                 :day       23
                 :month     "March"
                 :year      2022
                 :notified  "no"}
                {:taskTitle "Read that book"
                 :hours     13
                 :minutes   0
                 :day       22
                 :month     "March"
                 :year      2022
                 :notified  "no"}] tasks))))

(defn reset-tasks
  [db done]
  (-> (store db "toDoList" "readwrite")
      (db/clear)
      (db/on "success" done)))

(defn event->request
  [e]
  (indexed.db/create-request (.-target e)))

(defn cursor-with-value
  "Create a cursor with value from an event"
  [e]
  (some-> (event->request e)
          (indexed.db/result)
          (indexed.db/create-cursor-with-value)))

(defn cursor
  "Create a cursor with value from an event"
  [e]
  (some-> (event->request e)
          (indexed.db/result)
          (indexed.db/create-cursor)))
