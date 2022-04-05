// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('indexed.db.impl.store');
goog.require('cljs.core');
goog.require('indexed.db.impl.key_range');
goog.require('indexed.db.impl.request');
goog.require('indexed.db.impl.protocols');
indexed.db.impl.store.key_STAR_ = (function indexed$db$impl$store$key_STAR_(x){
if(indexed.db.impl.key_range.key_range_QMARK_.call(null,x)){
return indexed.db.impl.key_range.idb_key_range.call(null,x);
} else {
return x;
}
});

/**
* @constructor
 * @implements {indexed.db.impl.protocols.ReadableObjectStore}
 * @implements {cljs.core.INamed}
*/
indexed.db.impl.store.BaseObjectStore = (function (store){
this.store = store;
this.cljs$lang$protocol_mask$partition1$ = 4096;
this.cljs$lang$protocol_mask$partition0$ = 0;
});
(indexed.db.impl.store.BaseObjectStore.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.store.name;
}));

(indexed.db.impl.store.BaseObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.store.BaseObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$key_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var kp = self__.store.keyPath;
if(cljs.core.array_QMARK_.call(null,kp)){
return cljs.core.array_seq.call(null,kp);
} else {
return kp;
}
}));

(indexed.db.impl.store.BaseObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$count$arity$2 = (function (_,query){
var self__ = this;
var ___$1 = this;
if((!((query == null)))){
return indexed.db.impl.request.create_request.call(null,self__.store.count(indexed.db.impl.store.key_STAR_.call(null,query)));
} else {
return indexed.db.impl.request.create_request.call(null,self__.store.count());
}
}));

(indexed.db.impl.store.BaseObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$get$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.request.create_request.call(null,self__.store.get(indexed.db.impl.store.key_STAR_.call(null,k)));
}));

(indexed.db.impl.store.BaseObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$get_key$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.request.create_request.call(null,self__.store.getKey(indexed.db.impl.store.key_STAR_.call(null,k)));
}));

(indexed.db.impl.store.BaseObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$get_all$arity$3 = (function (_,query,count){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = query;
if(cljs.core.truth_(and__4251__auto__)){
return count;
} else {
return and__4251__auto__;
}
})())){
return indexed.db.impl.request.create_request.call(null,self__.store.getAll(indexed.db.impl.store.key_STAR_.call(null,query),count));
} else {
if((!((query == null)))){
return indexed.db.impl.request.create_request.call(null,self__.store.getAll(indexed.db.impl.store.key_STAR_.call(null,query)));
} else {
return indexed.db.impl.request.create_request.call(null,self__.store.getAll());

}
}
}));

(indexed.db.impl.store.BaseObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$get_all_keys$arity$3 = (function (_,query,count){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = query;
if(cljs.core.truth_(and__4251__auto__)){
return count;
} else {
return and__4251__auto__;
}
})())){
return indexed.db.impl.request.create_request.call(null,self__.store.getAllKeys(indexed.db.impl.store.key_STAR_.call(null,query),count));
} else {
if((!((query == null)))){
return indexed.db.impl.request.create_request.call(null,self__.store.getAllKeys(indexed.db.impl.store.key_STAR_.call(null,query)));
} else {
return indexed.db.impl.request.create_request.call(null,self__.store.getAllKeys());

}
}
}));

(indexed.db.impl.store.BaseObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$open_cursor$arity$3 = (function (_,query,direction){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = query;
if(cljs.core.truth_(and__4251__auto__)){
return direction;
} else {
return and__4251__auto__;
}
})())){
return indexed.db.impl.request.create_request.call(null,self__.store.openCursor(indexed.db.impl.store.key_STAR_.call(null,query),direction));
} else {
if((!((query == null)))){
return indexed.db.impl.request.create_request.call(null,self__.store.openCursor(indexed.db.impl.store.key_STAR_.call(null,query)));
} else {
return indexed.db.impl.request.create_request.call(null,self__.store.openCursor());

}
}
}));

(indexed.db.impl.store.BaseObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$open_key_cursor$arity$3 = (function (_,query,direction){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__4251__auto__ = query;
if(cljs.core.truth_(and__4251__auto__)){
return direction;
} else {
return and__4251__auto__;
}
})())){
return indexed.db.impl.request.create_request.call(null,self__.store.openKeyCursor(indexed.db.impl.store.key_STAR_.call(null,query),direction));
} else {
if((!((query == null)))){
return indexed.db.impl.request.create_request.call(null,self__.store.openKeyCursor(indexed.db.impl.store.key_STAR_.call(null,query)));
} else {
return indexed.db.impl.request.create_request.call(null,self__.store.openKeyCursor());

}
}
}));

(indexed.db.impl.store.BaseObjectStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"store","store",-1142205747,null)], null);
}));

(indexed.db.impl.store.BaseObjectStore.cljs$lang$type = true);

(indexed.db.impl.store.BaseObjectStore.cljs$lang$ctorStr = "indexed.db.impl.store/BaseObjectStore");

(indexed.db.impl.store.BaseObjectStore.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.impl.store/BaseObjectStore");
}));

/**
 * Positional factory function for indexed.db.impl.store/BaseObjectStore.
 */
indexed.db.impl.store.__GT_BaseObjectStore = (function indexed$db$impl$store$__GT_BaseObjectStore(store){
return (new indexed.db.impl.store.BaseObjectStore(store));
});

indexed.db.impl.store.key_path = (function indexed$db$impl$store$key_path(store){
return indexed.db.impl.protocols.key_path.call(null,store);
});
indexed.db.impl.store.count = (function indexed$db$impl$store$count(var_args){
var G__612 = arguments.length;
switch (G__612) {
case 2:
return indexed.db.impl.store.count.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.impl.store.count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.store.count.cljs$core$IFn$_invoke$arity$2 = (function (store,query){
return indexed.db.impl.protocols.count.call(null,store,query);
}));

(indexed.db.impl.store.count.cljs$core$IFn$_invoke$arity$1 = (function (store){
return indexed.db.impl.protocols.count.call(null,store,null);
}));

(indexed.db.impl.store.count.cljs$lang$maxFixedArity = 2);

indexed.db.impl.store.get = (function indexed$db$impl$store$get(store,key){
return indexed.db.impl.protocols.get.call(null,store,key);
});
indexed.db.impl.store.get_key = (function indexed$db$impl$store$get_key(store,key){
return indexed.db.impl.protocols.get_key.call(null,store,key);
});
indexed.db.impl.store.get_all = (function indexed$db$impl$store$get_all(var_args){
var G__615 = arguments.length;
switch (G__615) {
case 3:
return indexed.db.impl.store.get_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.impl.store.get_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.impl.store.get_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.store.get_all.cljs$core$IFn$_invoke$arity$3 = (function (store,query,count){
return indexed.db.impl.protocols.get_all.call(null,store,query,count);
}));

(indexed.db.impl.store.get_all.cljs$core$IFn$_invoke$arity$2 = (function (store,query){
return indexed.db.impl.store.get_all.call(null,store,query,null);
}));

(indexed.db.impl.store.get_all.cljs$core$IFn$_invoke$arity$1 = (function (store){
return indexed.db.impl.store.get_all.call(null,store,null,null);
}));

(indexed.db.impl.store.get_all.cljs$lang$maxFixedArity = 3);

indexed.db.impl.store.get_all_keys = (function indexed$db$impl$store$get_all_keys(var_args){
var G__618 = arguments.length;
switch (G__618) {
case 3:
return indexed.db.impl.store.get_all_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.impl.store.get_all_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.impl.store.get_all_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.store.get_all_keys.cljs$core$IFn$_invoke$arity$3 = (function (store,query,count){
return indexed.db.impl.protocols.get_all_keys.call(null,store,query,count);
}));

(indexed.db.impl.store.get_all_keys.cljs$core$IFn$_invoke$arity$2 = (function (store,query){
return indexed.db.impl.store.get_all_keys.call(null,store,query,null);
}));

(indexed.db.impl.store.get_all_keys.cljs$core$IFn$_invoke$arity$1 = (function (store){
return indexed.db.impl.store.get_all_keys.call(null,store,null,null);
}));

(indexed.db.impl.store.get_all_keys.cljs$lang$maxFixedArity = 3);

indexed.db.impl.store.open_cursor = (function indexed$db$impl$store$open_cursor(var_args){
var G__621 = arguments.length;
switch (G__621) {
case 3:
return indexed.db.impl.store.open_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.impl.store.open_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.impl.store.open_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.store.open_cursor.cljs$core$IFn$_invoke$arity$3 = (function (store,query,direction){
return indexed.db.impl.protocols.open_cursor.call(null,store,query,direction);
}));

(indexed.db.impl.store.open_cursor.cljs$core$IFn$_invoke$arity$2 = (function (store,query){
return indexed.db.impl.store.open_cursor.call(null,store,query,null);
}));

(indexed.db.impl.store.open_cursor.cljs$core$IFn$_invoke$arity$1 = (function (store){
return indexed.db.impl.store.open_cursor.call(null,store,null,null);
}));

(indexed.db.impl.store.open_cursor.cljs$lang$maxFixedArity = 3);

indexed.db.impl.store.open_key_cursor = (function indexed$db$impl$store$open_key_cursor(var_args){
var G__624 = arguments.length;
switch (G__624) {
case 3:
return indexed.db.impl.store.open_key_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.impl.store.open_key_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.impl.store.open_key_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.store.open_key_cursor.cljs$core$IFn$_invoke$arity$3 = (function (store,query,direction){
return indexed.db.impl.protocols.open_key_cursor.call(null,store,query,direction);
}));

(indexed.db.impl.store.open_key_cursor.cljs$core$IFn$_invoke$arity$2 = (function (store,query){
return indexed.db.impl.store.open_key_cursor.call(null,store,query,null);
}));

(indexed.db.impl.store.open_key_cursor.cljs$core$IFn$_invoke$arity$1 = (function (store){
return indexed.db.impl.store.open_key_cursor.call(null,store,null,null);
}));

(indexed.db.impl.store.open_key_cursor.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {indexed.db.impl.protocols.ReadableObjectStore}
 * @implements {indexed.db.impl.protocols.BelongsToObjectStore}
 * @implements {cljs.core.INamed}
 * @implements {indexed.db.impl.protocols.IDBIndex}
*/
indexed.db.impl.store.Index = (function (object_store,idb_index){
this.object_store = object_store;
this.idb_index = idb_index;
this.cljs$lang$protocol_mask$partition1$ = 4096;
this.cljs$lang$protocol_mask$partition0$ = 0;
});
(indexed.db.impl.store.Index.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.name.call(null,self__.object_store);
}));

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$ReadableObjectStore$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$ReadableObjectStore$key_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.key_path.call(null,self__.object_store);
}));

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$ReadableObjectStore$count$arity$2 = (function (_,query){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.count.call(null,self__.object_store,query);
}));

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$ReadableObjectStore$get$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.get.call(null,self__.object_store,key);
}));

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$ReadableObjectStore$get_key$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.get_key.call(null,self__.object_store,key);
}));

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$ReadableObjectStore$get_all$arity$3 = (function (_,query,count){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.get_all.call(null,self__.object_store,query,count);
}));

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$ReadableObjectStore$get_all_keys$arity$3 = (function (_,query,count){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.get_all_keys.call(null,self__.object_store,query,count);
}));

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$ReadableObjectStore$open_cursor$arity$3 = (function (_,query,direction){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.open_cursor.call(null,self__.object_store,query,direction);
}));

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$ReadableObjectStore$open_key_cursor$arity$3 = (function (_,query,direction){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.open_key_cursor.call(null,self__.object_store,query,direction);
}));

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$IDBIndex$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$IDBIndex$auto_locale_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_index.isAutoLocale;
}));

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$IDBIndex$locale$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_index.locale;
}));

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$IDBIndex$multi_entry_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_index.multiEntry;
}));

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$IDBIndex$unique_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_index.unique;
}));

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$BelongsToObjectStore$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.store.Index.prototype.indexed$db$impl$protocols$BelongsToObjectStore$idb_object_store$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_index.objectStore;
}));

(indexed.db.impl.store.Index.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object-store","object-store",1938319357,null),new cljs.core.Symbol(null,"idb-index","idb-index",-1385652893,null)], null);
}));

(indexed.db.impl.store.Index.cljs$lang$type = true);

(indexed.db.impl.store.Index.cljs$lang$ctorStr = "indexed.db.impl.store/Index");

(indexed.db.impl.store.Index.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.impl.store/Index");
}));

/**
 * Positional factory function for indexed.db.impl.store/Index.
 */
indexed.db.impl.store.__GT_Index = (function indexed$db$impl$store$__GT_Index(object_store,idb_index){
return (new indexed.db.impl.store.Index(object_store,idb_index));
});

indexed.db.impl.store.index_QMARK_ = (function indexed$db$impl$store$index_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.indexed$db$impl$protocols$IDBIndex$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBIndex,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBIndex,x);
}
});
indexed.db.impl.store.create_index_STAR_ = (function indexed$db$impl$store$create_index_STAR_(idb_index){
return (new indexed.db.impl.store.Index((new indexed.db.impl.store.BaseObjectStore(idb_index)),idb_index));
});
indexed.db.impl.store.auto_locale_QMARK_ = (function indexed$db$impl$store$auto_locale_QMARK_(index){
return indexed.db.impl.protocols.auto_locale_QMARK_.call(null,index);
});
indexed.db.impl.store.locale = (function indexed$db$impl$store$locale(index){
return indexed.db.impl.protocols.locale.call(null,index);
});
indexed.db.impl.store.multi_entry_QMARK_ = (function indexed$db$impl$store$multi_entry_QMARK_(index){
return indexed.db.impl.protocols.multi_entry_QMARK_.call(null,index);
});
indexed.db.impl.store.unique_QMARK_ = (function indexed$db$impl$store$unique_QMARK_(index){
return indexed.db.impl.protocols.unique_QMARK_.call(null,index);
});
indexed.db.impl.store.clj__GT_index_parameters = (function indexed$db$impl$store$clj__GT_index_parameters(p__627){
var map__628 = p__627;
var map__628__$1 = cljs.core.__destructure_map.call(null,map__628);
var unique_QMARK_ = cljs.core.get.call(null,map__628__$1,new cljs.core.Keyword(null,"unique?","unique?",-392536907));
var multi_entry_QMARK_ = cljs.core.get.call(null,map__628__$1,new cljs.core.Keyword(null,"multi-entry?","multi-entry?",8405862));
var locale = cljs.core.get.call(null,map__628__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
var params = ({});
if((!((unique_QMARK_ == null)))){
(params.unique = unique_QMARK_);
} else {
}

if((!((multi_entry_QMARK_ == null)))){
(params.multiEntry = multi_entry_QMARK_);
} else {
}

if(cljs.core.truth_(locale)){
(params.locale = locale);
} else {
}

return params;
});

/**
* @constructor
 * @implements {indexed.db.impl.protocols.ReadableObjectStore}
 * @implements {indexed.db.impl.protocols.BelongsToTransaction}
 * @implements {cljs.core.INamed}
 * @implements {indexed.db.impl.protocols.IDBObjectStore}
*/
indexed.db.impl.store.ObjectStore = (function (object_store,idb_store){
this.object_store = object_store;
this.idb_store = idb_store;
this.cljs$lang$protocol_mask$partition1$ = 4096;
this.cljs$lang$protocol_mask$partition0$ = 0;
});
(indexed.db.impl.store.ObjectStore.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.name.call(null,self__.object_store);
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$BelongsToTransaction$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$BelongsToTransaction$idb_transaction$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_store.transaction;
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$key_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.key_path.call(null,self__.object_store);
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$count$arity$2 = (function (_,query){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.count.call(null,self__.object_store,query);
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$get$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.get.call(null,self__.object_store,key);
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$get_key$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.get_key.call(null,self__.object_store,key);
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$get_all$arity$3 = (function (_,query,count){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.get_all.call(null,self__.object_store,query,count);
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$get_all_keys$arity$3 = (function (_,query,count){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.get_all_keys.call(null,self__.object_store,query,count);
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$open_cursor$arity$3 = (function (_,query,direction){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.open_cursor.call(null,self__.object_store,query,direction);
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$ReadableObjectStore$open_key_cursor$arity$3 = (function (_,query,direction){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.open_key_cursor.call(null,self__.object_store,query,direction);
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$IDBObjectStore$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$IDBObjectStore$put$arity$3 = (function (_,item,key){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.request.create_request.call(null,(((!((key == null))))?self__.idb_store.put(item,key):self__.idb_store.put(item)));
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$IDBObjectStore$add$arity$3 = (function (_,value,key){
var self__ = this;
var ___$1 = this;
if((!((key == null)))){
return indexed.db.impl.request.create_request.call(null,self__.idb_store.add(value,key));
} else {
return indexed.db.impl.request.create_request.call(null,self__.idb_store.add(value));
}
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$IDBObjectStore$clear$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.request.create_request.call(null,self__.idb_store.clear());
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$IDBObjectStore$index$arity$2 = (function (_,index_name){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.store.create_index_STAR_.call(null,self__.idb_store.index(index_name));
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$IDBObjectStore$delete_item$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.request.create_request.call(null,self__.idb_store.delete(indexed.db.impl.store.key_STAR_.call(null,k)));
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$IDBObjectStore$index_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.array_seq.call(null,self__.idb_store.indexNames);
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$IDBObjectStore$delete_index$arity$2 = (function (_,index_name){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.request.create_request.call(null,self__.idb_store.deleteIndex(index_name));
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$IDBObjectStore$create_index$arity$4 = (function (_,index_name,key_path,object_parameters){
var self__ = this;
var ___$1 = this;
var key_path_STAR_ = ((cljs.core.coll_QMARK_.call(null,key_path))?cljs.core.apply.call(null,cljs.core.array,key_path):key_path);
var idb_index = self__.idb_store.createIndex(index_name,key_path_STAR_,indexed.db.impl.store.clj__GT_index_parameters.call(null,object_parameters));
return indexed.db.impl.store.create_index_STAR_.call(null,idb_index);
}));

(indexed.db.impl.store.ObjectStore.prototype.indexed$db$impl$protocols$IDBObjectStore$auto_increment_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb_store.autoIncrement;
}));

(indexed.db.impl.store.ObjectStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object-store","object-store",1938319357,null),new cljs.core.Symbol(null,"idb-store","idb-store",1454644791,null)], null);
}));

(indexed.db.impl.store.ObjectStore.cljs$lang$type = true);

(indexed.db.impl.store.ObjectStore.cljs$lang$ctorStr = "indexed.db.impl.store/ObjectStore");

(indexed.db.impl.store.ObjectStore.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.impl.store/ObjectStore");
}));

/**
 * Positional factory function for indexed.db.impl.store/ObjectStore.
 */
indexed.db.impl.store.__GT_ObjectStore = (function indexed$db$impl$store$__GT_ObjectStore(object_store,idb_store){
return (new indexed.db.impl.store.ObjectStore(object_store,idb_store));
});

indexed.db.impl.store.store_QMARK_ = (function indexed$db$impl$store$store_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.indexed$db$impl$protocols$IDBObjectStore$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBObjectStore,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBObjectStore,x);
}
});
indexed.db.impl.store.create_object_store = (function indexed$db$impl$store$create_object_store(idb_store){
return (new indexed.db.impl.store.ObjectStore((new indexed.db.impl.store.BaseObjectStore(idb_store)),idb_store));
});
indexed.db.impl.store.index_names = (function indexed$db$impl$store$index_names(store){
return indexed.db.impl.protocols.index_names.call(null,store);
});
indexed.db.impl.store.auto_increment_QMARK_ = (function indexed$db$impl$store$auto_increment_QMARK_(store){
return indexed.db.impl.protocols.auto_increment_QMARK_.call(null,store);
});
indexed.db.impl.store.add = (function indexed$db$impl$store$add(var_args){
var G__631 = arguments.length;
switch (G__631) {
case 3:
return indexed.db.impl.store.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.impl.store.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.store.add.cljs$core$IFn$_invoke$arity$3 = (function (store,value,key){
return indexed.db.impl.protocols.add.call(null,store,value,key);
}));

(indexed.db.impl.store.add.cljs$core$IFn$_invoke$arity$2 = (function (store,value){
return indexed.db.impl.store.add.call(null,store,value,null);
}));

(indexed.db.impl.store.add.cljs$lang$maxFixedArity = 3);

indexed.db.impl.store.clear = (function indexed$db$impl$store$clear(store){
return indexed.db.impl.protocols.clear.call(null,store);
});
indexed.db.impl.store.create_index = (function indexed$db$impl$store$create_index(var_args){
var G__634 = arguments.length;
switch (G__634) {
case 4:
return indexed.db.impl.store.create_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return indexed.db.impl.store.create_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.store.create_index.cljs$core$IFn$_invoke$arity$4 = (function (store,index_name,key_path,object_parameters){
return indexed.db.impl.protocols.create_index.call(null,store,index_name,key_path,object_parameters);
}));

(indexed.db.impl.store.create_index.cljs$core$IFn$_invoke$arity$3 = (function (store,index_name,key_path){
return indexed.db.impl.store.create_index.call(null,store,index_name,key_path,cljs.core.PersistentArrayMap.EMPTY);
}));

(indexed.db.impl.store.create_index.cljs$lang$maxFixedArity = 4);

indexed.db.impl.store.delete$ = (function indexed$db$impl$store$delete(store,k){
return indexed.db.impl.protocols.delete_item.call(null,store,k);
});
indexed.db.impl.store.delete_index = (function indexed$db$impl$store$delete_index(store,index_name){
return indexed.db.impl.protocols.delete_index.call(null,store,index_name);
});
indexed.db.impl.store.index = (function indexed$db$impl$store$index(store,index_name){
return indexed.db.impl.protocols.index.call(null,store,index_name);
});
indexed.db.impl.store.put = (function indexed$db$impl$store$put(var_args){
var G__637 = arguments.length;
switch (G__637) {
case 2:
return indexed.db.impl.store.put.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return indexed.db.impl.store.put.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.store.put.cljs$core$IFn$_invoke$arity$2 = (function (store,item){
return indexed.db.impl.protocols.put.call(null,store,item,null);
}));

(indexed.db.impl.store.put.cljs$core$IFn$_invoke$arity$3 = (function (store,item,key){
return indexed.db.impl.protocols.put.call(null,store,item,key);
}));

(indexed.db.impl.store.put.cljs$lang$maxFixedArity = 3);

indexed.db.impl.store.get_object_store = (function indexed$db$impl$store$get_object_store(index){
return indexed.db.impl.store.create_object_store.call(null,indexed.db.impl.protocols.idb_object_store.call(null,index));
});

//# sourceMappingURL=store.js.map
