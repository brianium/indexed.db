(ns indexed.db.database.protocols)

(defprotocol IDBDatabase
  (-close [self])
  (-name [self])
  (-version [self])
  (-create-object-store [self name options])
  (-delete-object-store [self name])
  (-object-store-names [self])
  (-transaction [self store-names mode options]))
