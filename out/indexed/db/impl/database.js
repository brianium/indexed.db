// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('indexed.db.impl.database');
goog.require('cljs.core');
goog.require('indexed.db.impl.protocols');
goog.require('indexed.db.impl.store');
goog.require('indexed.db.impl.transaction');
indexed.db.impl.database.clj__GT_create_store_options = (function indexed$db$impl$database$clj__GT_create_store_options(p__654){
var map__655 = p__654;
var map__655__$1 = cljs.core.__destructure_map.call(null,map__655);
var key_path = cljs.core.get.call(null,map__655__$1,new cljs.core.Keyword(null,"key-path","key-path",878473308));
var auto_increment = cljs.core.get.call(null,map__655__$1,new cljs.core.Keyword(null,"auto-increment","auto-increment",2054074588));
var options = ({});
if(cljs.core.truth_(key_path)){
(options.keyPath = key_path);
} else {
}

if((!((auto_increment == null)))){
(options.autoIncrement = auto_increment);
} else {
}

return options;
});
indexed.db.impl.database.clj__GT_transaction_options = (function indexed$db$impl$database$clj__GT_transaction_options(p__656){
var map__657 = p__656;
var map__657__$1 = cljs.core.__destructure_map.call(null,map__657);
var durability = cljs.core.get.call(null,map__657__$1,new cljs.core.Keyword(null,"durability","durability",-1917933486),"default");
var options = ({});
(options.durability = durability);

return options;
});

/**
* @constructor
 * @implements {indexed.db.impl.protocols.IDBDatabase}
 * @implements {indexed.db.impl.protocols.EventTarget}
 * @implements {cljs.core.INamed}
*/
indexed.db.impl.database.Database = (function (idb){
this.idb = idb;
this.cljs$lang$protocol_mask$partition1$ = 4096;
this.cljs$lang$protocol_mask$partition0$ = 0;
});
(indexed.db.impl.database.Database.prototype.indexed$db$impl$protocols$EventTarget$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.database.Database.prototype.indexed$db$impl$protocols$EventTarget$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb;
}));

(indexed.db.impl.database.Database.prototype.cljs$core$INamed$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb.name;
}));

(indexed.db.impl.database.Database.prototype.indexed$db$impl$protocols$IDBDatabase$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.impl.database.Database.prototype.indexed$db$impl$protocols$IDBDatabase$close$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb.close();
}));

(indexed.db.impl.database.Database.prototype.indexed$db$impl$protocols$IDBDatabase$version$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idb.version;
}));

(indexed.db.impl.database.Database.prototype.indexed$db$impl$protocols$IDBDatabase$create_object_store$arity$3 = (function (_,name,options){
var self__ = this;
var ___$1 = this;
if((!((options == null)))){
return indexed.db.impl.store.create_object_store.call(null,self__.idb.createObjectStore(name,indexed.db.impl.database.clj__GT_create_store_options.call(null,options)));
} else {
return indexed.db.impl.store.create_object_store.call(null,self__.idb.createObjectStore(name));
}
}));

(indexed.db.impl.database.Database.prototype.indexed$db$impl$protocols$IDBDatabase$delete_object_store$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
return self__.idb.deleteObjectStore(name);
}));

(indexed.db.impl.database.Database.prototype.indexed$db$impl$protocols$IDBDatabase$object_store_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.array_seq.call(null,self__.idb.objectStoreNames);
}));

(indexed.db.impl.database.Database.prototype.indexed$db$impl$protocols$IDBDatabase$transaction$arity$4 = (function (_,store_names,mode,options){
var self__ = this;
var ___$1 = this;
return indexed.db.impl.transaction.create_transaction.call(null,self__.idb.transaction(cljs.core.apply.call(null,cljs.core.array,store_names),mode,indexed.db.impl.database.clj__GT_transaction_options.call(null,options)));
}));

(indexed.db.impl.database.Database.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idb","idb",604618954,null)], null);
}));

(indexed.db.impl.database.Database.cljs$lang$type = true);

(indexed.db.impl.database.Database.cljs$lang$ctorStr = "indexed.db.impl.database/Database");

(indexed.db.impl.database.Database.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.impl.database/Database");
}));

/**
 * Positional factory function for indexed.db.impl.database/Database.
 */
indexed.db.impl.database.__GT_Database = (function indexed$db$impl$database$__GT_Database(idb){
return (new indexed.db.impl.database.Database(idb));
});

indexed.db.impl.database.database_QMARK_ = (function indexed$db$impl$database$database_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.indexed$db$impl$protocols$IDBDatabase$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBDatabase,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,indexed.db.impl.protocols.IDBDatabase,x);
}
});
indexed.db.impl.database.create_database = (function indexed$db$impl$database$create_database(idb){
return (new indexed.db.impl.database.Database(idb));
});
indexed.db.impl.database.close = (function indexed$db$impl$database$close(db){
return indexed.db.impl.protocols.close.call(null,db);
});
indexed.db.impl.database.create_object_store = (function indexed$db$impl$database$create_object_store(var_args){
var G__660 = arguments.length;
switch (G__660) {
case 3:
return indexed.db.impl.database.create_object_store.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.impl.database.create_object_store.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.database.create_object_store.cljs$core$IFn$_invoke$arity$3 = (function (db,name,options){
return indexed.db.impl.protocols.create_object_store.call(null,db,name,options);
}));

(indexed.db.impl.database.create_object_store.cljs$core$IFn$_invoke$arity$2 = (function (db,name){
return indexed.db.impl.database.create_object_store.call(null,db,name,null);
}));

(indexed.db.impl.database.create_object_store.cljs$lang$maxFixedArity = 3);

indexed.db.impl.database.delete_object_store = (function indexed$db$impl$database$delete_object_store(db,name){
indexed.db.impl.protocols.delete_object_store.call(null,db,name);

return db;
});
indexed.db.impl.database.object_store_names = (function indexed$db$impl$database$object_store_names(db){
return indexed.db.impl.protocols.object_store_names.call(null,db);
});
indexed.db.impl.database.version = (function indexed$db$impl$database$version(db){
return indexed.db.impl.protocols.version.call(null,db);
});
indexed.db.impl.database.transaction = (function indexed$db$impl$database$transaction(var_args){
var G__663 = arguments.length;
switch (G__663) {
case 4:
return indexed.db.impl.database.transaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return indexed.db.impl.database.transaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.impl.database.transaction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.database.transaction.cljs$core$IFn$_invoke$arity$4 = (function (db,store_names,mode,options){
return indexed.db.impl.protocols.transaction.call(null,db,store_names,mode,options);
}));

(indexed.db.impl.database.transaction.cljs$core$IFn$_invoke$arity$3 = (function (db,store_names,mode){
return indexed.db.impl.database.transaction.call(null,db,store_names,mode,cljs.core.PersistentArrayMap.EMPTY);
}));

(indexed.db.impl.database.transaction.cljs$core$IFn$_invoke$arity$2 = (function (db,store_names){
return indexed.db.impl.database.transaction.call(null,db,store_names,"readonly");
}));

(indexed.db.impl.database.transaction.cljs$lang$maxFixedArity = 4);

indexed.db.impl.database.db = (function indexed$db$impl$database$db(belongs_to_database){
return indexed.db.impl.database.create_database.call(null,indexed.db.impl.protocols.idb_database.call(null,belongs_to_database));
});

//# sourceMappingURL=database.js.map
