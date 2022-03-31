(ns indexed.db.request.protocols)

(defprotocol IDBRequest
  (-error [self])
  (-result [self])
  (-source [self])
  (-ready-state [self]))

(defprotocol BelongsToRequest
  (-idb-request [self]))
