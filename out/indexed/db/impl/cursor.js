// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('indexed.db.impl.cursor');
goog.require('cljs.core');
goog.require('indexed.db.impl.request');
goog.require('indexed.db.impl.protocols');

/**
* @constructor
 * @implements {indexed.db.impl.protocols.BelongsToRequest}
 * @implements {indexed.db.impl.protocols.BelongsToSource}
 * @implements {indexed.db.impl.protocols.IDBCursor}
*/
indexed.db.impl.cursor.Cursor = (function (idb_cursor){
this.idb_cursor = idb_cursor;
});
(indexed.db.impl.cursor.Cursor.prototype.indexed$db$impl$protocols$BelongsToRequest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.cursor.Cursor.prototype.indexed$db$impl$protocols$BelongsToRequest$idb_request$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_cursor.request;
}));

(indexed.db.impl.cursor.Cursor.prototype.indexed$db$impl$protocols$BelongsToSource$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.cursor.Cursor.prototype.indexed$db$impl$protocols$BelongsToSource$source$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_cursor.source;
}));

(indexed.db.impl.cursor.Cursor.prototype.indexed$db$impl$protocols$IDBCursor$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.cursor.Cursor.prototype.indexed$db$impl$protocols$IDBCursor$direction$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_cursor.direction;
}));

(indexed.db.impl.cursor.Cursor.prototype.indexed$db$impl$protocols$IDBCursor$key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_cursor.key;
}));

(indexed.db.impl.cursor.Cursor.prototype.indexed$db$impl$protocols$IDBCursor$primary_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_cursor.primaryKey;
}));

(indexed.db.impl.cursor.Cursor.prototype.indexed$db$impl$protocols$IDBCursor$advance$arity$2 = (function (_,count){
var self__ = this;
var ___$1 = this;
return self__.idb_cursor.advance(count);
}));

(indexed.db.impl.cursor.Cursor.prototype.indexed$db$impl$protocols$IDBCursor$continue$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((!((k == null)))){
return self__.idb_cursor.continue(k);
} else {
return self__.idb_cursor.continue();
}
}));

(indexed.db.impl.cursor.Cursor.prototype.indexed$db$impl$protocols$IDBCursor$continue_primary_key$arity$3 = (function (_,k,primary_key){
var self__ = this;
var ___$1 = this;
return self__.idb_cursor.continuePrimaryKey(k,primary_key);
}));

(indexed.db.impl.cursor.Cursor.prototype.indexed$db$impl$protocols$IDBCursor$delete$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.request.create_request.call(null,self__.idb_cursor.delete());
}));

(indexed.db.impl.cursor.Cursor.prototype.indexed$db$impl$protocols$IDBCursor$update$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.request.create_request.call(null,self__.idb_cursor.update(value));
}));

(indexed.db.impl.cursor.Cursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idb-cursor","idb-cursor",-1151359136,null)], null);
}));

(indexed.db.impl.cursor.Cursor.cljs$lang$type = true);

(indexed.db.impl.cursor.Cursor.cljs$lang$ctorStr = "indexed.db.impl.cursor/Cursor");

(indexed.db.impl.cursor.Cursor.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.impl.cursor/Cursor");
}));

/**
 * Positional factory function for indexed.db.impl.cursor/Cursor.
 */
indexed.db.impl.cursor.__GT_Cursor = (function indexed$db$impl$cursor$__GT_Cursor(idb_cursor){
return (new indexed.db.impl.cursor.Cursor(idb_cursor));
});

indexed.db.impl.cursor.cursor_QMARK_ = (function indexed$db$impl$cursor$cursor_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.indexed$db$impl$protocols$IDBCursor$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBCursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBCursor,x);
}
});
indexed.db.impl.cursor.create_cursor = (function indexed$db$impl$cursor$create_cursor(idb_cursor){
return (new indexed.db.impl.cursor.Cursor(idb_cursor));
});
indexed.db.impl.cursor.direction = (function indexed$db$impl$cursor$direction(cursor){
return indexed.db.impl.protocols.direction.call(null,cursor);
});
indexed.db.impl.cursor.key = (function indexed$db$impl$cursor$key(cursor){
return indexed.db.impl.protocols.key.call(null,cursor);
});
indexed.db.impl.cursor.primary_key = (function indexed$db$impl$cursor$primary_key(cursor){
return indexed.db.impl.protocols.primary_key.call(null,cursor);
});
indexed.db.impl.cursor.advance = (function indexed$db$impl$cursor$advance(cursor,count){
return indexed.db.impl.protocols.advance.call(null,cursor,count);
});
indexed.db.impl.cursor.continue$ = (function indexed$db$impl$cursor$continue(var_args){
var G__685 = arguments.length;
switch (G__685) {
case 2:
return indexed.db.impl.cursor.continue$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.impl.cursor.continue$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.cursor.continue$.cljs$core$IFn$_invoke$arity$2 = (function (cursor,k){
return indexed.db.impl.protocols.continue$.call(null,cursor,k);
}));

(indexed.db.impl.cursor.continue$.cljs$core$IFn$_invoke$arity$1 = (function (cursor){
return indexed.db.impl.cursor.continue$.call(null,cursor,null);
}));

(indexed.db.impl.cursor.continue$.cljs$lang$maxFixedArity = 2);

indexed.db.impl.cursor.continue_primary_key = (function indexed$db$impl$cursor$continue_primary_key(cursor,k,primary_key){
return indexed.db.impl.protocols.continue_primary_key.call(null,cursor,k,primary_key);
});
indexed.db.impl.cursor.delete$ = (function indexed$db$impl$cursor$delete(cursor){
return indexed.db.impl.protocols.delete$.call(null,cursor);
});
indexed.db.impl.cursor.update = (function indexed$db$impl$cursor$update(cursor,value){
return indexed.db.impl.protocols.update.call(null,cursor,value);
});

/**
* @constructor
 * @implements {indexed.db.impl.protocols.IDBCursorWithValue}
 * @implements {indexed.db.impl.protocols.BelongsToRequest}
 * @implements {indexed.db.impl.protocols.BelongsToSource}
 * @implements {indexed.db.impl.protocols.IDBCursor}
*/
indexed.db.impl.cursor.CursorWithValue = (function (cursor,idb_cursor){
this.cursor = cursor;
this.idb_cursor = idb_cursor;
});
(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$BelongsToRequest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$BelongsToRequest$idb_request$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_cursor.request;
}));

(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$BelongsToSource$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$BelongsToSource$source$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_cursor.source;
}));

(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$IDBCursor$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$IDBCursor$direction$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.cursor.direction.call(null,self__.cursor);
}));

(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$IDBCursor$key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.cursor.key.call(null,self__.cursor);
}));

(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$IDBCursor$primary_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.cursor.primary_key.call(null,self__.cursor);
}));

(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$IDBCursor$advance$arity$2 = (function (_,count){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.cursor.advance.call(null,self__.cursor,count);
}));

(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$IDBCursor$continue$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.cursor.continue$.call(null,self__.cursor,k);
}));

(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$IDBCursor$continue_primary_key$arity$3 = (function (_,k,primary_key){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.cursor.continue_primary_key.call(null,self__.cursor,k,primary_key);
}));

(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$IDBCursor$delete$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.cursor.delete$.call(null,self__.cursor);
}));

(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$IDBCursor$update$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.cursor.update.call(null,self__.cursor,value);
}));

(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$IDBCursorWithValue$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.cursor.CursorWithValue.prototype.indexed$db$impl$protocols$IDBCursorWithValue$value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_cursor.value;
}));

(indexed.db.impl.cursor.CursorWithValue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"idb-cursor","idb-cursor",-1151359136,null)], null);
}));

(indexed.db.impl.cursor.CursorWithValue.cljs$lang$type = true);

(indexed.db.impl.cursor.CursorWithValue.cljs$lang$ctorStr = "indexed.db.impl.cursor/CursorWithValue");

(indexed.db.impl.cursor.CursorWithValue.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.impl.cursor/CursorWithValue");
}));

/**
 * Positional factory function for indexed.db.impl.cursor/CursorWithValue.
 */
indexed.db.impl.cursor.__GT_CursorWithValue = (function indexed$db$impl$cursor$__GT_CursorWithValue(cursor,idb_cursor){
return (new indexed.db.impl.cursor.CursorWithValue(cursor,idb_cursor));
});

indexed.db.impl.cursor.cursor_with_value_QMARK_ = (function indexed$db$impl$cursor$cursor_with_value_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.indexed$db$impl$protocols$IDBCursorWithValue$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBCursorWithValue,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBCursorWithValue,x);
}
});
indexed.db.impl.cursor.create_cursor_with_value = (function indexed$db$impl$cursor$create_cursor_with_value(idb_cursor){
return (new indexed.db.impl.cursor.CursorWithValue(indexed.db.impl.cursor.create_cursor.call(null,idb_cursor),idb_cursor));
});
indexed.db.impl.cursor.value = (function indexed$db$impl$cursor$value(cursor_with_value){
return indexed.db.impl.protocols.value.call(null,cursor_with_value);
});

//# sourceMappingURL=cursor.js.map
