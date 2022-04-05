// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('indexed.db.impl.key_range');
goog.require('cljs.core');
goog.require('indexed.db.impl.protocols');

/**
* @constructor
 * @implements {indexed.db.impl.protocols.IDBKeyRange}
*/
indexed.db.impl.key_range.KeyRange = (function (key_range){
this.key_range = key_range;
});
(indexed.db.impl.key_range.KeyRange.prototype.indexed$db$impl$protocols$IDBKeyRange$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.key_range.KeyRange.prototype.indexed$db$impl$protocols$IDBKeyRange$includes$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return self__.key_range.includes(k);
}));

(indexed.db.impl.key_range.KeyRange.prototype.indexed$db$impl$protocols$IDBKeyRange$lower$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.key_range.lower;
}));

(indexed.db.impl.key_range.KeyRange.prototype.indexed$db$impl$protocols$IDBKeyRange$upper$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.key_range.upper;
}));

(indexed.db.impl.key_range.KeyRange.prototype.indexed$db$impl$protocols$IDBKeyRange$lower_open_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.key_range.lowerOpen;
}));

(indexed.db.impl.key_range.KeyRange.prototype.indexed$db$impl$protocols$IDBKeyRange$upper_open_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.key_range.upperOpen;
}));

(indexed.db.impl.key_range.KeyRange.prototype.indexed$db$impl$protocols$IDBKeyRange$idb_key_range$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.key_range;
}));

(indexed.db.impl.key_range.KeyRange.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-range","key-range",-159612215,null)], null);
}));

(indexed.db.impl.key_range.KeyRange.cljs$lang$type = true);

(indexed.db.impl.key_range.KeyRange.cljs$lang$ctorStr = "indexed.db.impl.key-range/KeyRange");

(indexed.db.impl.key_range.KeyRange.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.impl.key-range/KeyRange");
}));

/**
 * Positional factory function for indexed.db.impl.key-range/KeyRange.
 */
indexed.db.impl.key_range.__GT_KeyRange = (function indexed$db$impl$key_range$__GT_KeyRange(key_range){
return (new indexed.db.impl.key_range.KeyRange(key_range));
});

indexed.db.impl.key_range.key_range_QMARK_ = (function indexed$db$impl$key_range$key_range_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.indexed$db$impl$protocols$IDBKeyRange$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBKeyRange,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBKeyRange,x);
}
});
indexed.db.impl.key_range.idb_key_range = (function indexed$db$impl$key_range$idb_key_range(key_range){
return indexed.db.impl.protocols.idb_key_range.call(null,key_range);
});
indexed.db.impl.key_range.create_key_range = (function indexed$db$impl$key_range$create_key_range(key_range){
return (new indexed.db.impl.key_range.KeyRange(key_range));
});
indexed.db.impl.key_range.includes = (function indexed$db$impl$key_range$includes(key_range,k){
return indexed.db.impl.protocols.includes.call(null,key_range,k);
});
indexed.db.impl.key_range.lower = (function indexed$db$impl$key_range$lower(key_range){
return indexed.db.impl.protocols.lower.call(null,key_range);
});
indexed.db.impl.key_range.upper = (function indexed$db$impl$key_range$upper(key_range){
return indexed.db.impl.protocols.upper.call(null,key_range);
});
indexed.db.impl.key_range.lower_open_QMARK_ = (function indexed$db$impl$key_range$lower_open_QMARK_(key_range){
return indexed.db.impl.protocols.lower_open_QMARK_.call(null,key_range);
});
indexed.db.impl.key_range.upper_open_QMARK_ = (function indexed$db$impl$key_range$upper_open_QMARK_(key_range){
return indexed.db.impl.protocols.upper_open_QMARK_.call(null,key_range);
});
indexed.db.impl.key_range.bound = (function indexed$db$impl$key_range$bound(var_args){
var G__601 = arguments.length;
switch (G__601) {
case 4:
return indexed.db.impl.key_range.bound.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return indexed.db.impl.key_range.bound.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.impl.key_range.bound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.key_range.bound.cljs$core$IFn$_invoke$arity$4 = (function (lower,upper,lower_open_QMARK_,upper_open_QMARK_){
return indexed.db.impl.key_range.create_key_range.call(null,IDBKeyRange.bound(lower,upper,lower_open_QMARK_,upper_open_QMARK_));
}));

(indexed.db.impl.key_range.bound.cljs$core$IFn$_invoke$arity$3 = (function (lower,upper,lower_open_QMARK_){
return indexed.db.impl.key_range.bound.call(null,lower,upper,lower_open_QMARK_,false);
}));

(indexed.db.impl.key_range.bound.cljs$core$IFn$_invoke$arity$2 = (function (lower,upper){
return indexed.db.impl.key_range.bound.call(null,lower,upper,false);
}));

(indexed.db.impl.key_range.bound.cljs$lang$maxFixedArity = 4);

indexed.db.impl.key_range.only = (function indexed$db$impl$key_range$only(value){
return indexed.db.impl.key_range.create_key_range.call(null,IDBKeyRange.only(value));
});
indexed.db.impl.key_range.lower_bound = (function indexed$db$impl$key_range$lower_bound(var_args){
var G__604 = arguments.length;
switch (G__604) {
case 2:
return indexed.db.impl.key_range.lower_bound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.impl.key_range.lower_bound.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.key_range.lower_bound.cljs$core$IFn$_invoke$arity$2 = (function (lower,open){
return indexed.db.impl.key_range.create_key_range.call(null,IDBKeyRange.lowerBound(lower,open));
}));

(indexed.db.impl.key_range.lower_bound.cljs$core$IFn$_invoke$arity$1 = (function (lower){
return indexed.db.impl.key_range.lower_bound.call(null,lower,false);
}));

(indexed.db.impl.key_range.lower_bound.cljs$lang$maxFixedArity = 2);

indexed.db.impl.key_range.upper_bound = (function indexed$db$impl$key_range$upper_bound(var_args){
var G__607 = arguments.length;
switch (G__607) {
case 2:
return indexed.db.impl.key_range.upper_bound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.impl.key_range.upper_bound.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.key_range.upper_bound.cljs$core$IFn$_invoke$arity$2 = (function (upper,open){
return indexed.db.impl.key_range.create_key_range.call(null,IDBKeyRange.upperBound(upper,open));
}));

(indexed.db.impl.key_range.upper_bound.cljs$core$IFn$_invoke$arity$1 = (function (upper){
return indexed.db.impl.key_range.upper_bound.call(null,upper,false);
}));

(indexed.db.impl.key_range.upper_bound.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=key_range.js.map
