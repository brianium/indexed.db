// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('indexed.db.impl.transaction');
goog.require('cljs.core');
goog.require('indexed.db.impl.store');
goog.require('indexed.db.impl.protocols');

/**
* @constructor
 * @implements {indexed.db.impl.protocols.BelongsToDatabase}
 * @implements {indexed.db.impl.protocols.EventTarget}
 * @implements {indexed.db.impl.protocols.IDBTransaction}
 * @implements {indexed.db.impl.protocols.HasErrors}
*/
indexed.db.impl.transaction.Transaction = (function (idb_transaction){
this.idb_transaction = idb_transaction;
});
(indexed.db.impl.transaction.Transaction.prototype.indexed$db$impl$protocols$BelongsToDatabase$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.transaction.Transaction.prototype.indexed$db$impl$protocols$BelongsToDatabase$idb_database$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_transaction.db;
}));

(indexed.db.impl.transaction.Transaction.prototype.indexed$db$impl$protocols$EventTarget$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.transaction.Transaction.prototype.indexed$db$impl$protocols$EventTarget$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_transaction;
}));

(indexed.db.impl.transaction.Transaction.prototype.indexed$db$impl$protocols$HasErrors$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.transaction.Transaction.prototype.indexed$db$impl$protocols$HasErrors$error$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_transaction.error;
}));

(indexed.db.impl.transaction.Transaction.prototype.indexed$db$impl$protocols$IDBTransaction$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.transaction.Transaction.prototype.indexed$db$impl$protocols$IDBTransaction$durability$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_transaction.durability;
}));

(indexed.db.impl.transaction.Transaction.prototype.indexed$db$impl$protocols$IDBTransaction$mode$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_transaction.mode;
}));

(indexed.db.impl.transaction.Transaction.prototype.indexed$db$impl$protocols$IDBTransaction$object_store$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.create_object_store.call(null,self__.idb_transaction.objectStore(name));
}));

(indexed.db.impl.transaction.Transaction.prototype.indexed$db$impl$protocols$IDBTransaction$abort$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_transaction.abort();
}));

(indexed.db.impl.transaction.Transaction.prototype.indexed$db$impl$protocols$IDBTransaction$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_transaction.commit();
}));

(indexed.db.impl.transaction.Transaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idb-transaction","idb-transaction",-1355452966,null)], null);
}));

(indexed.db.impl.transaction.Transaction.cljs$lang$type = true);

(indexed.db.impl.transaction.Transaction.cljs$lang$ctorStr = "indexed.db.impl.transaction/Transaction");

(indexed.db.impl.transaction.Transaction.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.impl.transaction/Transaction");
}));

/**
 * Positional factory function for indexed.db.impl.transaction/Transaction.
 */
indexed.db.impl.transaction.__GT_Transaction = (function indexed$db$impl$transaction$__GT_Transaction(idb_transaction){
return (new indexed.db.impl.transaction.Transaction(idb_transaction));
});

indexed.db.impl.transaction.transaction_QMARK_ = (function indexed$db$impl$transaction$transaction_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.indexed$db$impl$protocols$IDBTransaction$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBTransaction,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBTransaction,x);
}
});
indexed.db.impl.transaction.create_transaction = (function indexed$db$impl$transaction$create_transaction(idb_transaction){
return (new indexed.db.impl.transaction.Transaction(idb_transaction));
});
indexed.db.impl.transaction.object_store = (function indexed$db$impl$transaction$object_store(txn,name){
return indexed.db.impl.protocols.object_store.call(null,txn,name);
});
indexed.db.impl.transaction.durability = (function indexed$db$impl$transaction$durability(txn){
return indexed.db.impl.protocols.durability.call(null,txn);
});
indexed.db.impl.transaction.mode = (function indexed$db$impl$transaction$mode(txn){
return indexed.db.impl.protocols.mode.call(null,txn);
});
indexed.db.impl.transaction.abort = (function indexed$db$impl$transaction$abort(txn){
return indexed.db.impl.protocols.abort.call(null,txn);
});
indexed.db.impl.transaction.commit = (function indexed$db$impl$transaction$commit(txn){
return indexed.db.impl.protocols.commit.call(null,txn);
});
indexed.db.impl.transaction.transaction = (function indexed$db$impl$transaction$transaction(belongs_to_txn){
return indexed.db.impl.transaction.create_transaction.call(null,indexed.db.impl.protocols.idb_transaction.call(null,belongs_to_txn));
});

//# sourceMappingURL=transaction.js.map
