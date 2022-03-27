(ns indexed.db.key-range.protocols)

(defprotocol IDBKeyRange
  (-includes [_ k])
  (-idb-key-range [_]))
