// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('indexed.db.impl.request');
goog.require('cljs.core');
goog.require('indexed.db.impl.protocols');

/**
* @constructor
 * @implements {indexed.db.impl.protocols.EventTarget}
 * @implements {indexed.db.impl.protocols.BelongsToTransaction}
 * @implements {indexed.db.impl.protocols.IDBRequest}
 * @implements {indexed.db.impl.protocols.HasErrors}
 * @implements {indexed.db.impl.protocols.BelongsToSource}
*/
indexed.db.impl.request.Request = (function (request){
this.request = request;
});
(indexed.db.impl.request.Request.prototype.indexed$db$impl$protocols$EventTarget$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.request.Request.prototype.indexed$db$impl$protocols$EventTarget$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.request;
}));

(indexed.db.impl.request.Request.prototype.indexed$db$impl$protocols$HasErrors$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.request.Request.prototype.indexed$db$impl$protocols$HasErrors$error$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.request.error;
}));

(indexed.db.impl.request.Request.prototype.indexed$db$impl$protocols$BelongsToSource$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.request.Request.prototype.indexed$db$impl$protocols$BelongsToSource$source$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.request.source;
}));

(indexed.db.impl.request.Request.prototype.indexed$db$impl$protocols$IDBRequest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.request.Request.prototype.indexed$db$impl$protocols$IDBRequest$result$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.request.result;
}));

(indexed.db.impl.request.Request.prototype.indexed$db$impl$protocols$IDBRequest$ready_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.request.readyState;
}));

(indexed.db.impl.request.Request.prototype.indexed$db$impl$protocols$BelongsToTransaction$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.request.Request.prototype.indexed$db$impl$protocols$BelongsToTransaction$idb_transaction$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.request.transaction;
}));

(indexed.db.impl.request.Request.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"request","request",-881481046,null)], null);
}));

(indexed.db.impl.request.Request.cljs$lang$type = true);

(indexed.db.impl.request.Request.cljs$lang$ctorStr = "indexed.db.impl.request/Request");

(indexed.db.impl.request.Request.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.impl.request/Request");
}));

/**
 * Positional factory function for indexed.db.impl.request/Request.
 */
indexed.db.impl.request.__GT_Request = (function indexed$db$impl$request$__GT_Request(request){
return (new indexed.db.impl.request.Request(request));
});

indexed.db.impl.request.request_QMARK_ = (function indexed$db$impl$request$request_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.indexed$db$impl$protocols$IDBRequest$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBRequest,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBRequest,x);
}
});
indexed.db.impl.request.create_request = (function indexed$db$impl$request$create_request(request){
return (new indexed.db.impl.request.Request(request));
});
indexed.db.impl.request.result = (function indexed$db$impl$request$result(db_request){
return indexed.db.impl.protocols.result.call(null,db_request);
});
indexed.db.impl.request.ready_state = (function indexed$db$impl$request$ready_state(db_request){
return indexed.db.impl.protocols.ready_state.call(null,db_request);
});

//# sourceMappingURL=request.js.map
