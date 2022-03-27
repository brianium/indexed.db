(ns indexed.db.transaction.protocols)

(defprotocol IDBTransaction
  (-object-store [self name]))

(defprotocol BelongsToTransaction
  (-idb-transaction [self]))
