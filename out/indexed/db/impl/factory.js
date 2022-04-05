// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('indexed.db.impl.factory');
goog.require('cljs.core');
goog.require('indexed.db.impl.request');
goog.require('indexed.db.impl.protocols');
indexed.db.impl.factory.dict__GT_map = (function indexed$db$impl$factory$dict__GT_map(obj){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),obj.name,new cljs.core.Keyword(null,"version","version",425292698),obj.version], null);
});

/**
* @constructor
 * @implements {indexed.db.impl.protocols.IDBFactory}
*/
indexed.db.impl.factory.Factory = (function (factory){
this.factory = factory;
});
(indexed.db.impl.factory.Factory.prototype.indexed$db$impl$protocols$IDBFactory$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.factory.Factory.prototype.indexed$db$impl$protocols$IDBFactory$open$arity$3 = (function (_,name,version){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.request.create_request.call(null,self__.factory.open(name,version));
}));

(indexed.db.impl.factory.Factory.prototype.indexed$db$impl$protocols$IDBFactory$delete_database$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.request.create_request.call(null,self__.factory.deleteDatabase(name));
}));

(indexed.db.impl.factory.Factory.prototype.indexed$db$impl$protocols$IDBFactory$cmp$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
return self__.factory.cmp(a,b);
}));

(indexed.db.impl.factory.Factory.prototype.indexed$db$impl$protocols$IDBFactory$databases$arity$2 = (function (_,fn_1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.type.call(null,self__.factory.databases))){
var p = self__.factory.databases();
return p.then((function (result){
var G__667 = result;
var G__667__$1 = ((cljs.core.array_QMARK_.call(null,result))?cljs.core.map.call(null,indexed.db.impl.factory.dict__GT_map,cljs.core.array_seq.call(null,G__667)):G__667);
return fn_1.call(null,G__667__$1);

}));
} else {
return fn_1.call(null,cljs.core.List.EMPTY);
}
}));

(indexed.db.impl.factory.Factory.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"factory","factory",1704465273,null)], null);
}));

(indexed.db.impl.factory.Factory.cljs$lang$type = true);

(indexed.db.impl.factory.Factory.cljs$lang$ctorStr = "indexed.db.impl.factory/Factory");

(indexed.db.impl.factory.Factory.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.impl.factory/Factory");
}));

/**
 * Positional factory function for indexed.db.impl.factory/Factory.
 */
indexed.db.impl.factory.__GT_Factory = (function indexed$db$impl$factory$__GT_Factory(factory){
return (new indexed.db.impl.factory.Factory(factory));
});

cljs.core.type.call(null,indexedDB.databases);
indexed.db.impl.factory.factory_QMARK_ = (function indexed$db$impl$factory$factory_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.indexed$db$impl$protocols$IDBFactory$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBFactory,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBFactory,x);
}
});
indexed.db.impl.factory.create_factory = (function indexed$db$impl$factory$create_factory(){
return (new indexed.db.impl.factory.Factory(indexedDB));
});
indexed.db.impl.factory.open = (function indexed$db$impl$factory$open(var_args){
var G__670 = arguments.length;
switch (G__670) {
case 3:
return indexed.db.impl.factory.open.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.impl.factory.open.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.impl.factory.open.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.factory.open.cljs$core$IFn$_invoke$arity$3 = (function (factory,name,version){
return indexed.db.impl.protocols.open.call(null,factory,name,version);
}));

(indexed.db.impl.factory.open.cljs$core$IFn$_invoke$arity$2 = (function (name,version){
return indexed.db.impl.factory.open.call(null,indexed.db.impl.factory.create_factory.call(null),name,version);
}));

(indexed.db.impl.factory.open.cljs$core$IFn$_invoke$arity$1 = (function (name){
return indexed.db.impl.factory.open.call(null,indexed.db.impl.factory.create_factory.call(null),name);
}));

(indexed.db.impl.factory.open.cljs$lang$maxFixedArity = 3);

indexed.db.impl.factory.delete_database = (function indexed$db$impl$factory$delete_database(var_args){
var G__673 = arguments.length;
switch (G__673) {
case 2:
return indexed.db.impl.factory.delete_database.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.impl.factory.delete_database.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.factory.delete_database.cljs$core$IFn$_invoke$arity$2 = (function (factory,name){
return indexed.db.impl.protocols.delete_database.call(null,factory,name);
}));

(indexed.db.impl.factory.delete_database.cljs$core$IFn$_invoke$arity$1 = (function (name){
return indexed.db.impl.factory.delete_database.call(null,indexed.db.impl.factory.create_factory.call(null),name);
}));

(indexed.db.impl.factory.delete_database.cljs$lang$maxFixedArity = 2);

indexed.db.impl.factory.cmp = (function indexed$db$impl$factory$cmp(var_args){
var G__676 = arguments.length;
switch (G__676) {
case 3:
return indexed.db.impl.factory.cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.impl.factory.cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.factory.cmp.cljs$core$IFn$_invoke$arity$3 = (function (factory,a,b){
return indexed.db.impl.protocols.cmp.call(null,factory,a,b);
}));

(indexed.db.impl.factory.cmp.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return indexed.db.impl.factory.cmp.call(null,indexed.db.impl.factory.create_factory.call(null),a,b);
}));

(indexed.db.impl.factory.cmp.cljs$lang$maxFixedArity = 3);

indexed.db.impl.factory.databases = (function indexed$db$impl$factory$databases(var_args){
var G__679 = arguments.length;
switch (G__679) {
case 2:
return indexed.db.impl.factory.databases.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.impl.factory.databases.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.factory.databases.cljs$core$IFn$_invoke$arity$2 = (function (factory,fn_1){
indexed.db.impl.protocols.databases.call(null,factory,fn_1);

return factory;
}));

(indexed.db.impl.factory.databases.cljs$core$IFn$_invoke$arity$1 = (function (fn_1){
return indexed.db.impl.factory.databases.call(null,indexed.db.impl.factory.create_factory.call(null),fn_1);
}));

(indexed.db.impl.factory.databases.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=factory.js.map
