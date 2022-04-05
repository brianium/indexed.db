// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('indexed.db.impl.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
indexed.db.impl.protocols.IDBFactory = function(){};

var indexed$db$impl$protocols$IDBFactory$open$dyn_530 = (function() {
var G__531 = null;
var G__531__2 = (function (self,name){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.open[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,name);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.open["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,name);
} else {
throw cljs.core.missing_protocol.call(null,"IDBFactory.open",self);
}
}
});
var G__531__3 = (function (self,name,version){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.open[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,name,version);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.open["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,name,version);
} else {
throw cljs.core.missing_protocol.call(null,"IDBFactory.open",self);
}
}
});
G__531 = function(self,name,version){
switch(arguments.length){
case 2:
return G__531__2.call(this,self,name);
case 3:
return G__531__3.call(this,self,name,version);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__531.cljs$core$IFn$_invoke$arity$2 = G__531__2;
G__531.cljs$core$IFn$_invoke$arity$3 = G__531__3;
return G__531;
})()
;
indexed.db.impl.protocols.open = (function indexed$db$impl$protocols$open(var_args){
var G__529 = arguments.length;
switch (G__529) {
case 3:
return indexed.db.impl.protocols.open.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.impl.protocols.open.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.impl.protocols.open.cljs$core$IFn$_invoke$arity$3 = (function (self,name,version){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBFactory$open$arity$3 == null)))))){
return self.indexed$db$impl$protocols$IDBFactory$open$arity$3(self,name,version);
} else {
return indexed$db$impl$protocols$IDBFactory$open$dyn_530.call(null,self,name,version);
}
}));

(indexed.db.impl.protocols.open.cljs$core$IFn$_invoke$arity$2 = (function (self,name){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBFactory$open$arity$2 == null)))))){
return self.indexed$db$impl$protocols$IDBFactory$open$arity$2(self,name);
} else {
return indexed$db$impl$protocols$IDBFactory$open$dyn_530.call(null,self,name);
}
}));

(indexed.db.impl.protocols.open.cljs$lang$maxFixedArity = 3);


var indexed$db$impl$protocols$IDBFactory$delete_database$dyn_533 = (function (self,name){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.delete_database[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,name);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.delete_database["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,name);
} else {
throw cljs.core.missing_protocol.call(null,"IDBFactory.delete-database",self);
}
}
});
indexed.db.impl.protocols.delete_database = (function indexed$db$impl$protocols$delete_database(self,name){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBFactory$delete_database$arity$2 == null)))))){
return self.indexed$db$impl$protocols$IDBFactory$delete_database$arity$2(self,name);
} else {
return indexed$db$impl$protocols$IDBFactory$delete_database$dyn_533.call(null,self,name);
}
});

var indexed$db$impl$protocols$IDBFactory$cmp$dyn_534 = (function (self,a,b){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.cmp[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,a,b);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.cmp["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,a,b);
} else {
throw cljs.core.missing_protocol.call(null,"IDBFactory.cmp",self);
}
}
});
indexed.db.impl.protocols.cmp = (function indexed$db$impl$protocols$cmp(self,a,b){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBFactory$cmp$arity$3 == null)))))){
return self.indexed$db$impl$protocols$IDBFactory$cmp$arity$3(self,a,b);
} else {
return indexed$db$impl$protocols$IDBFactory$cmp$dyn_534.call(null,self,a,b);
}
});

var indexed$db$impl$protocols$IDBFactory$databases$dyn_535 = (function (self,fn_1){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.databases[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,fn_1);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.databases["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,fn_1);
} else {
throw cljs.core.missing_protocol.call(null,"IDBFactory.databases",self);
}
}
});
indexed.db.impl.protocols.databases = (function indexed$db$impl$protocols$databases(self,fn_1){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBFactory$databases$arity$2 == null)))))){
return self.indexed$db$impl$protocols$IDBFactory$databases$arity$2(self,fn_1);
} else {
return indexed$db$impl$protocols$IDBFactory$databases$dyn_535.call(null,self,fn_1);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.IDBDatabase = function(){};

var indexed$db$impl$protocols$IDBDatabase$close$dyn_536 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.close[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.close["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBDatabase.close",self);
}
}
});
indexed.db.impl.protocols.close = (function indexed$db$impl$protocols$close(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBDatabase$close$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBDatabase$close$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBDatabase$close$dyn_536.call(null,self);
}
});

var indexed$db$impl$protocols$IDBDatabase$version$dyn_537 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.version[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.version["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBDatabase.version",self);
}
}
});
indexed.db.impl.protocols.version = (function indexed$db$impl$protocols$version(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBDatabase$version$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBDatabase$version$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBDatabase$version$dyn_537.call(null,self);
}
});

var indexed$db$impl$protocols$IDBDatabase$create_object_store$dyn_538 = (function (self,name,options){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.create_object_store[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,name,options);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.create_object_store["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,name,options);
} else {
throw cljs.core.missing_protocol.call(null,"IDBDatabase.create-object-store",self);
}
}
});
indexed.db.impl.protocols.create_object_store = (function indexed$db$impl$protocols$create_object_store(self,name,options){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBDatabase$create_object_store$arity$3 == null)))))){
return self.indexed$db$impl$protocols$IDBDatabase$create_object_store$arity$3(self,name,options);
} else {
return indexed$db$impl$protocols$IDBDatabase$create_object_store$dyn_538.call(null,self,name,options);
}
});

var indexed$db$impl$protocols$IDBDatabase$delete_object_store$dyn_539 = (function (self,name){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.delete_object_store[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,name);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.delete_object_store["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,name);
} else {
throw cljs.core.missing_protocol.call(null,"IDBDatabase.delete-object-store",self);
}
}
});
indexed.db.impl.protocols.delete_object_store = (function indexed$db$impl$protocols$delete_object_store(self,name){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBDatabase$delete_object_store$arity$2 == null)))))){
return self.indexed$db$impl$protocols$IDBDatabase$delete_object_store$arity$2(self,name);
} else {
return indexed$db$impl$protocols$IDBDatabase$delete_object_store$dyn_539.call(null,self,name);
}
});

var indexed$db$impl$protocols$IDBDatabase$object_store_names$dyn_540 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.object_store_names[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.object_store_names["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBDatabase.object-store-names",self);
}
}
});
indexed.db.impl.protocols.object_store_names = (function indexed$db$impl$protocols$object_store_names(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBDatabase$object_store_names$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBDatabase$object_store_names$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBDatabase$object_store_names$dyn_540.call(null,self);
}
});

var indexed$db$impl$protocols$IDBDatabase$transaction$dyn_541 = (function (self,store_names,mode,options){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.transaction[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,store_names,mode,options);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.transaction["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,store_names,mode,options);
} else {
throw cljs.core.missing_protocol.call(null,"IDBDatabase.transaction",self);
}
}
});
indexed.db.impl.protocols.transaction = (function indexed$db$impl$protocols$transaction(self,store_names,mode,options){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBDatabase$transaction$arity$4 == null)))))){
return self.indexed$db$impl$protocols$IDBDatabase$transaction$arity$4(self,store_names,mode,options);
} else {
return indexed$db$impl$protocols$IDBDatabase$transaction$dyn_541.call(null,self,store_names,mode,options);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.HasErrors = function(){};

var indexed$db$impl$protocols$HasErrors$error$dyn_542 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.error[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.error["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"HasErrors.error",self);
}
}
});
indexed.db.impl.protocols.error = (function indexed$db$impl$protocols$error(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$HasErrors$error$arity$1 == null)))))){
return self.indexed$db$impl$protocols$HasErrors$error$arity$1(self);
} else {
return indexed$db$impl$protocols$HasErrors$error$dyn_542.call(null,self);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.BelongsToDatabase = function(){};

var indexed$db$impl$protocols$BelongsToDatabase$idb_database$dyn_543 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.idb_database[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.idb_database["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"BelongsToDatabase.idb-database",self);
}
}
});
indexed.db.impl.protocols.idb_database = (function indexed$db$impl$protocols$idb_database(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$BelongsToDatabase$idb_database$arity$1 == null)))))){
return self.indexed$db$impl$protocols$BelongsToDatabase$idb_database$arity$1(self);
} else {
return indexed$db$impl$protocols$BelongsToDatabase$idb_database$dyn_543.call(null,self);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.IDBKeyRange = function(){};

var indexed$db$impl$protocols$IDBKeyRange$includes$dyn_544 = (function (_,k){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (indexed.db.impl.protocols.includes[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,_,k);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.includes["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,_,k);
} else {
throw cljs.core.missing_protocol.call(null,"IDBKeyRange.includes",_);
}
}
});
indexed.db.impl.protocols.includes = (function indexed$db$impl$protocols$includes(_,k){
if((((!((_ == null)))) && ((!((_.indexed$db$impl$protocols$IDBKeyRange$includes$arity$2 == null)))))){
return _.indexed$db$impl$protocols$IDBKeyRange$includes$arity$2(_,k);
} else {
return indexed$db$impl$protocols$IDBKeyRange$includes$dyn_544.call(null,_,k);
}
});

var indexed$db$impl$protocols$IDBKeyRange$lower$dyn_545 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (indexed.db.impl.protocols.lower[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,_);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.lower["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IDBKeyRange.lower",_);
}
}
});
indexed.db.impl.protocols.lower = (function indexed$db$impl$protocols$lower(_){
if((((!((_ == null)))) && ((!((_.indexed$db$impl$protocols$IDBKeyRange$lower$arity$1 == null)))))){
return _.indexed$db$impl$protocols$IDBKeyRange$lower$arity$1(_);
} else {
return indexed$db$impl$protocols$IDBKeyRange$lower$dyn_545.call(null,_);
}
});

var indexed$db$impl$protocols$IDBKeyRange$upper$dyn_546 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (indexed.db.impl.protocols.upper[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,_);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.upper["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IDBKeyRange.upper",_);
}
}
});
indexed.db.impl.protocols.upper = (function indexed$db$impl$protocols$upper(_){
if((((!((_ == null)))) && ((!((_.indexed$db$impl$protocols$IDBKeyRange$upper$arity$1 == null)))))){
return _.indexed$db$impl$protocols$IDBKeyRange$upper$arity$1(_);
} else {
return indexed$db$impl$protocols$IDBKeyRange$upper$dyn_546.call(null,_);
}
});

var indexed$db$impl$protocols$IDBKeyRange$lower_open_QMARK_$dyn_547 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (indexed.db.impl.protocols.lower_open_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,_);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.lower_open_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IDBKeyRange.lower-open?",_);
}
}
});
indexed.db.impl.protocols.lower_open_QMARK_ = (function indexed$db$impl$protocols$lower_open_QMARK_(_){
if((((!((_ == null)))) && ((!((_.indexed$db$impl$protocols$IDBKeyRange$lower_open_QMARK_$arity$1 == null)))))){
return _.indexed$db$impl$protocols$IDBKeyRange$lower_open_QMARK_$arity$1(_);
} else {
return indexed$db$impl$protocols$IDBKeyRange$lower_open_QMARK_$dyn_547.call(null,_);
}
});

var indexed$db$impl$protocols$IDBKeyRange$upper_open_QMARK_$dyn_548 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (indexed.db.impl.protocols.upper_open_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,_);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.upper_open_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IDBKeyRange.upper-open?",_);
}
}
});
indexed.db.impl.protocols.upper_open_QMARK_ = (function indexed$db$impl$protocols$upper_open_QMARK_(_){
if((((!((_ == null)))) && ((!((_.indexed$db$impl$protocols$IDBKeyRange$upper_open_QMARK_$arity$1 == null)))))){
return _.indexed$db$impl$protocols$IDBKeyRange$upper_open_QMARK_$arity$1(_);
} else {
return indexed$db$impl$protocols$IDBKeyRange$upper_open_QMARK_$dyn_548.call(null,_);
}
});

var indexed$db$impl$protocols$IDBKeyRange$idb_key_range$dyn_549 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (indexed.db.impl.protocols.idb_key_range[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,_);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.idb_key_range["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IDBKeyRange.idb-key-range",_);
}
}
});
indexed.db.impl.protocols.idb_key_range = (function indexed$db$impl$protocols$idb_key_range(_){
if((((!((_ == null)))) && ((!((_.indexed$db$impl$protocols$IDBKeyRange$idb_key_range$arity$1 == null)))))){
return _.indexed$db$impl$protocols$IDBKeyRange$idb_key_range$arity$1(_);
} else {
return indexed$db$impl$protocols$IDBKeyRange$idb_key_range$dyn_549.call(null,_);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.BelongsToSource = function(){};

var indexed$db$impl$protocols$BelongsToSource$source$dyn_550 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.source[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.source["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"BelongsToSource.source",self);
}
}
});
indexed.db.impl.protocols.source = (function indexed$db$impl$protocols$source(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$BelongsToSource$source$arity$1 == null)))))){
return self.indexed$db$impl$protocols$BelongsToSource$source$arity$1(self);
} else {
return indexed$db$impl$protocols$BelongsToSource$source$dyn_550.call(null,self);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.IDBRequest = function(){};

var indexed$db$impl$protocols$IDBRequest$result$dyn_551 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.result[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.result["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBRequest.result",self);
}
}
});
indexed.db.impl.protocols.result = (function indexed$db$impl$protocols$result(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBRequest$result$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBRequest$result$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBRequest$result$dyn_551.call(null,self);
}
});

var indexed$db$impl$protocols$IDBRequest$ready_state$dyn_552 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.ready_state[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.ready_state["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBRequest.ready-state",self);
}
}
});
indexed.db.impl.protocols.ready_state = (function indexed$db$impl$protocols$ready_state(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBRequest$ready_state$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBRequest$ready_state$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBRequest$ready_state$dyn_552.call(null,self);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.BelongsToRequest = function(){};

var indexed$db$impl$protocols$BelongsToRequest$idb_request$dyn_553 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.idb_request[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.idb_request["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"BelongsToRequest.idb-request",self);
}
}
});
indexed.db.impl.protocols.idb_request = (function indexed$db$impl$protocols$idb_request(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$BelongsToRequest$idb_request$arity$1 == null)))))){
return self.indexed$db$impl$protocols$BelongsToRequest$idb_request$arity$1(self);
} else {
return indexed$db$impl$protocols$BelongsToRequest$idb_request$dyn_553.call(null,self);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.IDBCursor = function(){};

var indexed$db$impl$protocols$IDBCursor$direction$dyn_554 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.direction[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.direction["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBCursor.direction",self);
}
}
});
indexed.db.impl.protocols.direction = (function indexed$db$impl$protocols$direction(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBCursor$direction$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBCursor$direction$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBCursor$direction$dyn_554.call(null,self);
}
});

var indexed$db$impl$protocols$IDBCursor$key$dyn_555 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.key[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.key["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBCursor.key",self);
}
}
});
indexed.db.impl.protocols.key = (function indexed$db$impl$protocols$key(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBCursor$key$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBCursor$key$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBCursor$key$dyn_555.call(null,self);
}
});

var indexed$db$impl$protocols$IDBCursor$primary_key$dyn_556 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.primary_key[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.primary_key["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBCursor.primary-key",self);
}
}
});
indexed.db.impl.protocols.primary_key = (function indexed$db$impl$protocols$primary_key(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBCursor$primary_key$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBCursor$primary_key$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBCursor$primary_key$dyn_556.call(null,self);
}
});

var indexed$db$impl$protocols$IDBCursor$advance$dyn_557 = (function (self,count){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.advance[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,count);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.advance["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,count);
} else {
throw cljs.core.missing_protocol.call(null,"IDBCursor.advance",self);
}
}
});
indexed.db.impl.protocols.advance = (function indexed$db$impl$protocols$advance(self,count){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBCursor$advance$arity$2 == null)))))){
return self.indexed$db$impl$protocols$IDBCursor$advance$arity$2(self,count);
} else {
return indexed$db$impl$protocols$IDBCursor$advance$dyn_557.call(null,self,count);
}
});

var indexed$db$impl$protocols$IDBCursor$continue$dyn_558 = (function (self,k){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.continue$[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,k);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.continue$["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,k);
} else {
throw cljs.core.missing_protocol.call(null,"IDBCursor.continue",self);
}
}
});
indexed.db.impl.protocols.continue$ = (function indexed$db$impl$protocols$continue(self,k){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBCursor$continue$arity$2 == null)))))){
return self.indexed$db$impl$protocols$IDBCursor$continue$arity$2(self,k);
} else {
return indexed$db$impl$protocols$IDBCursor$continue$dyn_558.call(null,self,k);
}
});

var indexed$db$impl$protocols$IDBCursor$continue_primary_key$dyn_559 = (function (self,k,primary_key){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.continue_primary_key[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,k,primary_key);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.continue_primary_key["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,k,primary_key);
} else {
throw cljs.core.missing_protocol.call(null,"IDBCursor.continue-primary-key",self);
}
}
});
indexed.db.impl.protocols.continue_primary_key = (function indexed$db$impl$protocols$continue_primary_key(self,k,primary_key){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBCursor$continue_primary_key$arity$3 == null)))))){
return self.indexed$db$impl$protocols$IDBCursor$continue_primary_key$arity$3(self,k,primary_key);
} else {
return indexed$db$impl$protocols$IDBCursor$continue_primary_key$dyn_559.call(null,self,k,primary_key);
}
});

var indexed$db$impl$protocols$IDBCursor$delete$dyn_560 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.delete$[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.delete$["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBCursor.delete",self);
}
}
});
indexed.db.impl.protocols.delete$ = (function indexed$db$impl$protocols$delete(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBCursor$delete$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBCursor$delete$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBCursor$delete$dyn_560.call(null,self);
}
});

var indexed$db$impl$protocols$IDBCursor$update$dyn_561 = (function (self,value){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.update[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,value);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.update["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDBCursor.update",self);
}
}
});
indexed.db.impl.protocols.update = (function indexed$db$impl$protocols$update(self,value){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBCursor$update$arity$2 == null)))))){
return self.indexed$db$impl$protocols$IDBCursor$update$arity$2(self,value);
} else {
return indexed$db$impl$protocols$IDBCursor$update$dyn_561.call(null,self,value);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.IDBCursorWithValue = function(){};

var indexed$db$impl$protocols$IDBCursorWithValue$value$dyn_562 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.value[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.value["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBCursorWithValue.value",self);
}
}
});
indexed.db.impl.protocols.value = (function indexed$db$impl$protocols$value(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBCursorWithValue$value$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBCursorWithValue$value$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBCursorWithValue$value$dyn_562.call(null,self);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.ReadableObjectStore = function(){};

var indexed$db$impl$protocols$ReadableObjectStore$count$dyn_563 = (function (self,query){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.count[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,query);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.count["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,query);
} else {
throw cljs.core.missing_protocol.call(null,"ReadableObjectStore.count",self);
}
}
});
indexed.db.impl.protocols.count = (function indexed$db$impl$protocols$count(self,query){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$ReadableObjectStore$count$arity$2 == null)))))){
return self.indexed$db$impl$protocols$ReadableObjectStore$count$arity$2(self,query);
} else {
return indexed$db$impl$protocols$ReadableObjectStore$count$dyn_563.call(null,self,query);
}
});

var indexed$db$impl$protocols$ReadableObjectStore$key_path$dyn_564 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.key_path[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.key_path["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"ReadableObjectStore.key-path",self);
}
}
});
indexed.db.impl.protocols.key_path = (function indexed$db$impl$protocols$key_path(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$ReadableObjectStore$key_path$arity$1 == null)))))){
return self.indexed$db$impl$protocols$ReadableObjectStore$key_path$arity$1(self);
} else {
return indexed$db$impl$protocols$ReadableObjectStore$key_path$dyn_564.call(null,self);
}
});

var indexed$db$impl$protocols$ReadableObjectStore$get$dyn_565 = (function (self,key){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.get[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,key);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.get["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,key);
} else {
throw cljs.core.missing_protocol.call(null,"ReadableObjectStore.get",self);
}
}
});
indexed.db.impl.protocols.get = (function indexed$db$impl$protocols$get(self,key){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$ReadableObjectStore$get$arity$2 == null)))))){
return self.indexed$db$impl$protocols$ReadableObjectStore$get$arity$2(self,key);
} else {
return indexed$db$impl$protocols$ReadableObjectStore$get$dyn_565.call(null,self,key);
}
});

var indexed$db$impl$protocols$ReadableObjectStore$get_key$dyn_566 = (function (self,key){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.get_key[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,key);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.get_key["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,key);
} else {
throw cljs.core.missing_protocol.call(null,"ReadableObjectStore.get-key",self);
}
}
});
indexed.db.impl.protocols.get_key = (function indexed$db$impl$protocols$get_key(self,key){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$ReadableObjectStore$get_key$arity$2 == null)))))){
return self.indexed$db$impl$protocols$ReadableObjectStore$get_key$arity$2(self,key);
} else {
return indexed$db$impl$protocols$ReadableObjectStore$get_key$dyn_566.call(null,self,key);
}
});

var indexed$db$impl$protocols$ReadableObjectStore$get_all$dyn_567 = (function (self,query,count){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.get_all[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,query,count);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.get_all["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,query,count);
} else {
throw cljs.core.missing_protocol.call(null,"ReadableObjectStore.get-all",self);
}
}
});
indexed.db.impl.protocols.get_all = (function indexed$db$impl$protocols$get_all(self,query,count){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$ReadableObjectStore$get_all$arity$3 == null)))))){
return self.indexed$db$impl$protocols$ReadableObjectStore$get_all$arity$3(self,query,count);
} else {
return indexed$db$impl$protocols$ReadableObjectStore$get_all$dyn_567.call(null,self,query,count);
}
});

var indexed$db$impl$protocols$ReadableObjectStore$get_all_keys$dyn_568 = (function (self,query,count){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.get_all_keys[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,query,count);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.get_all_keys["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,query,count);
} else {
throw cljs.core.missing_protocol.call(null,"ReadableObjectStore.get-all-keys",self);
}
}
});
indexed.db.impl.protocols.get_all_keys = (function indexed$db$impl$protocols$get_all_keys(self,query,count){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$ReadableObjectStore$get_all_keys$arity$3 == null)))))){
return self.indexed$db$impl$protocols$ReadableObjectStore$get_all_keys$arity$3(self,query,count);
} else {
return indexed$db$impl$protocols$ReadableObjectStore$get_all_keys$dyn_568.call(null,self,query,count);
}
});

var indexed$db$impl$protocols$ReadableObjectStore$open_cursor$dyn_569 = (function (self,query,direction){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.open_cursor[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,query,direction);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.open_cursor["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,query,direction);
} else {
throw cljs.core.missing_protocol.call(null,"ReadableObjectStore.open-cursor",self);
}
}
});
indexed.db.impl.protocols.open_cursor = (function indexed$db$impl$protocols$open_cursor(self,query,direction){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$ReadableObjectStore$open_cursor$arity$3 == null)))))){
return self.indexed$db$impl$protocols$ReadableObjectStore$open_cursor$arity$3(self,query,direction);
} else {
return indexed$db$impl$protocols$ReadableObjectStore$open_cursor$dyn_569.call(null,self,query,direction);
}
});

var indexed$db$impl$protocols$ReadableObjectStore$open_key_cursor$dyn_570 = (function (self,query,direction){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.open_key_cursor[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,query,direction);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.open_key_cursor["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,query,direction);
} else {
throw cljs.core.missing_protocol.call(null,"ReadableObjectStore.open-key-cursor",self);
}
}
});
indexed.db.impl.protocols.open_key_cursor = (function indexed$db$impl$protocols$open_key_cursor(self,query,direction){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$ReadableObjectStore$open_key_cursor$arity$3 == null)))))){
return self.indexed$db$impl$protocols$ReadableObjectStore$open_key_cursor$arity$3(self,query,direction);
} else {
return indexed$db$impl$protocols$ReadableObjectStore$open_key_cursor$dyn_570.call(null,self,query,direction);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.IDBObjectStore = function(){};

var indexed$db$impl$protocols$IDBObjectStore$index_names$dyn_571 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.index_names[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.index_names["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBObjectStore.index-names",self);
}
}
});
indexed.db.impl.protocols.index_names = (function indexed$db$impl$protocols$index_names(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBObjectStore$index_names$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBObjectStore$index_names$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBObjectStore$index_names$dyn_571.call(null,self);
}
});

var indexed$db$impl$protocols$IDBObjectStore$auto_increment_QMARK_$dyn_572 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.auto_increment_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.auto_increment_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBObjectStore.auto-increment?",self);
}
}
});
indexed.db.impl.protocols.auto_increment_QMARK_ = (function indexed$db$impl$protocols$auto_increment_QMARK_(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBObjectStore$auto_increment_QMARK_$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBObjectStore$auto_increment_QMARK_$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBObjectStore$auto_increment_QMARK_$dyn_572.call(null,self);
}
});

var indexed$db$impl$protocols$IDBObjectStore$add$dyn_573 = (function (self,value,key){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.add[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,value,key);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.add["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,value,key);
} else {
throw cljs.core.missing_protocol.call(null,"IDBObjectStore.add",self);
}
}
});
indexed.db.impl.protocols.add = (function indexed$db$impl$protocols$add(self,value,key){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBObjectStore$add$arity$3 == null)))))){
return self.indexed$db$impl$protocols$IDBObjectStore$add$arity$3(self,value,key);
} else {
return indexed$db$impl$protocols$IDBObjectStore$add$dyn_573.call(null,self,value,key);
}
});

var indexed$db$impl$protocols$IDBObjectStore$clear$dyn_574 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.clear[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.clear["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBObjectStore.clear",self);
}
}
});
indexed.db.impl.protocols.clear = (function indexed$db$impl$protocols$clear(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBObjectStore$clear$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBObjectStore$clear$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBObjectStore$clear$dyn_574.call(null,self);
}
});

var indexed$db$impl$protocols$IDBObjectStore$create_index$dyn_575 = (function (self,index_name,key_path,object_parameters){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.create_index[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,index_name,key_path,object_parameters);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.create_index["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,index_name,key_path,object_parameters);
} else {
throw cljs.core.missing_protocol.call(null,"IDBObjectStore.create-index",self);
}
}
});
indexed.db.impl.protocols.create_index = (function indexed$db$impl$protocols$create_index(self,index_name,key_path,object_parameters){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBObjectStore$create_index$arity$4 == null)))))){
return self.indexed$db$impl$protocols$IDBObjectStore$create_index$arity$4(self,index_name,key_path,object_parameters);
} else {
return indexed$db$impl$protocols$IDBObjectStore$create_index$dyn_575.call(null,self,index_name,key_path,object_parameters);
}
});

var indexed$db$impl$protocols$IDBObjectStore$delete_item$dyn_576 = (function (self,k){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.delete_item[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,k);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.delete_item["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,k);
} else {
throw cljs.core.missing_protocol.call(null,"IDBObjectStore.delete-item",self);
}
}
});
indexed.db.impl.protocols.delete_item = (function indexed$db$impl$protocols$delete_item(self,k){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBObjectStore$delete_item$arity$2 == null)))))){
return self.indexed$db$impl$protocols$IDBObjectStore$delete_item$arity$2(self,k);
} else {
return indexed$db$impl$protocols$IDBObjectStore$delete_item$dyn_576.call(null,self,k);
}
});

var indexed$db$impl$protocols$IDBObjectStore$delete_index$dyn_577 = (function (self,index_name){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.delete_index[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,index_name);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.delete_index["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,index_name);
} else {
throw cljs.core.missing_protocol.call(null,"IDBObjectStore.delete-index",self);
}
}
});
indexed.db.impl.protocols.delete_index = (function indexed$db$impl$protocols$delete_index(self,index_name){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBObjectStore$delete_index$arity$2 == null)))))){
return self.indexed$db$impl$protocols$IDBObjectStore$delete_index$arity$2(self,index_name);
} else {
return indexed$db$impl$protocols$IDBObjectStore$delete_index$dyn_577.call(null,self,index_name);
}
});

var indexed$db$impl$protocols$IDBObjectStore$index$dyn_578 = (function (self,index_name){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.index[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,index_name);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.index["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,index_name);
} else {
throw cljs.core.missing_protocol.call(null,"IDBObjectStore.index",self);
}
}
});
indexed.db.impl.protocols.index = (function indexed$db$impl$protocols$index(self,index_name){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBObjectStore$index$arity$2 == null)))))){
return self.indexed$db$impl$protocols$IDBObjectStore$index$arity$2(self,index_name);
} else {
return indexed$db$impl$protocols$IDBObjectStore$index$dyn_578.call(null,self,index_name);
}
});

var indexed$db$impl$protocols$IDBObjectStore$put$dyn_579 = (function (self,item,key){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.put[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,item,key);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.put["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,item,key);
} else {
throw cljs.core.missing_protocol.call(null,"IDBObjectStore.put",self);
}
}
});
indexed.db.impl.protocols.put = (function indexed$db$impl$protocols$put(self,item,key){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBObjectStore$put$arity$3 == null)))))){
return self.indexed$db$impl$protocols$IDBObjectStore$put$arity$3(self,item,key);
} else {
return indexed$db$impl$protocols$IDBObjectStore$put$dyn_579.call(null,self,item,key);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.BelongsToObjectStore = function(){};

var indexed$db$impl$protocols$BelongsToObjectStore$idb_object_store$dyn_580 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.idb_object_store[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.idb_object_store["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"BelongsToObjectStore.idb-object-store",self);
}
}
});
indexed.db.impl.protocols.idb_object_store = (function indexed$db$impl$protocols$idb_object_store(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$BelongsToObjectStore$idb_object_store$arity$1 == null)))))){
return self.indexed$db$impl$protocols$BelongsToObjectStore$idb_object_store$arity$1(self);
} else {
return indexed$db$impl$protocols$BelongsToObjectStore$idb_object_store$dyn_580.call(null,self);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.IDBIndex = function(){};

var indexed$db$impl$protocols$IDBIndex$auto_locale_QMARK_$dyn_581 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.auto_locale_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.auto_locale_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBIndex.auto-locale?",self);
}
}
});
indexed.db.impl.protocols.auto_locale_QMARK_ = (function indexed$db$impl$protocols$auto_locale_QMARK_(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBIndex$auto_locale_QMARK_$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBIndex$auto_locale_QMARK_$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBIndex$auto_locale_QMARK_$dyn_581.call(null,self);
}
});

var indexed$db$impl$protocols$IDBIndex$locale$dyn_582 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.locale[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.locale["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBIndex.locale",self);
}
}
});
indexed.db.impl.protocols.locale = (function indexed$db$impl$protocols$locale(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBIndex$locale$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBIndex$locale$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBIndex$locale$dyn_582.call(null,self);
}
});

var indexed$db$impl$protocols$IDBIndex$multi_entry_QMARK_$dyn_583 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.multi_entry_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.multi_entry_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBIndex.multi-entry?",self);
}
}
});
indexed.db.impl.protocols.multi_entry_QMARK_ = (function indexed$db$impl$protocols$multi_entry_QMARK_(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBIndex$multi_entry_QMARK_$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBIndex$multi_entry_QMARK_$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBIndex$multi_entry_QMARK_$dyn_583.call(null,self);
}
});

var indexed$db$impl$protocols$IDBIndex$unique_QMARK_$dyn_584 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.unique_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.unique_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBIndex.unique?",self);
}
}
});
indexed.db.impl.protocols.unique_QMARK_ = (function indexed$db$impl$protocols$unique_QMARK_(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBIndex$unique_QMARK_$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBIndex$unique_QMARK_$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBIndex$unique_QMARK_$dyn_584.call(null,self);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.IDBTransaction = function(){};

var indexed$db$impl$protocols$IDBTransaction$durability$dyn_585 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.durability[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.durability["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBTransaction.durability",self);
}
}
});
indexed.db.impl.protocols.durability = (function indexed$db$impl$protocols$durability(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBTransaction$durability$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBTransaction$durability$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBTransaction$durability$dyn_585.call(null,self);
}
});

var indexed$db$impl$protocols$IDBTransaction$mode$dyn_586 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.mode[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.mode["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBTransaction.mode",self);
}
}
});
indexed.db.impl.protocols.mode = (function indexed$db$impl$protocols$mode(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBTransaction$mode$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBTransaction$mode$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBTransaction$mode$dyn_586.call(null,self);
}
});

var indexed$db$impl$protocols$IDBTransaction$object_store$dyn_587 = (function (self,name){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.object_store[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self,name);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.object_store["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self,name);
} else {
throw cljs.core.missing_protocol.call(null,"IDBTransaction.object-store",self);
}
}
});
indexed.db.impl.protocols.object_store = (function indexed$db$impl$protocols$object_store(self,name){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBTransaction$object_store$arity$2 == null)))))){
return self.indexed$db$impl$protocols$IDBTransaction$object_store$arity$2(self,name);
} else {
return indexed$db$impl$protocols$IDBTransaction$object_store$dyn_587.call(null,self,name);
}
});

var indexed$db$impl$protocols$IDBTransaction$abort$dyn_588 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.abort[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.abort["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBTransaction.abort",self);
}
}
});
indexed.db.impl.protocols.abort = (function indexed$db$impl$protocols$abort(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBTransaction$abort$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBTransaction$abort$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBTransaction$abort$dyn_588.call(null,self);
}
});

var indexed$db$impl$protocols$IDBTransaction$commit$dyn_589 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.commit[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.commit["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBTransaction.commit",self);
}
}
});
indexed.db.impl.protocols.commit = (function indexed$db$impl$protocols$commit(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBTransaction$commit$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBTransaction$commit$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBTransaction$commit$dyn_589.call(null,self);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.BelongsToTransaction = function(){};

var indexed$db$impl$protocols$BelongsToTransaction$idb_transaction$dyn_590 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.idb_transaction[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.idb_transaction["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"BelongsToTransaction.idb-transaction",self);
}
}
});
indexed.db.impl.protocols.idb_transaction = (function indexed$db$impl$protocols$idb_transaction(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$BelongsToTransaction$idb_transaction$arity$1 == null)))))){
return self.indexed$db$impl$protocols$BelongsToTransaction$idb_transaction$arity$1(self);
} else {
return indexed$db$impl$protocols$BelongsToTransaction$idb_transaction$dyn_590.call(null,self);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.IDBVersionChangeEvent = function(){};

var indexed$db$impl$protocols$IDBVersionChangeEvent$new_version$dyn_591 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.new_version[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.new_version["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBVersionChangeEvent.new-version",self);
}
}
});
indexed.db.impl.protocols.new_version = (function indexed$db$impl$protocols$new_version(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBVersionChangeEvent$new_version$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBVersionChangeEvent$new_version$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBVersionChangeEvent$new_version$dyn_591.call(null,self);
}
});

var indexed$db$impl$protocols$IDBVersionChangeEvent$old_version$dyn_592 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.old_version[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.old_version["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IDBVersionChangeEvent.old-version",self);
}
}
});
indexed.db.impl.protocols.old_version = (function indexed$db$impl$protocols$old_version(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$IDBVersionChangeEvent$old_version$arity$1 == null)))))){
return self.indexed$db$impl$protocols$IDBVersionChangeEvent$old_version$arity$1(self);
} else {
return indexed$db$impl$protocols$IDBVersionChangeEvent$old_version$dyn_592.call(null,self);
}
});


/**
 * @interface
 */
indexed.db.impl.protocols.EventTarget = function(){};

var indexed$db$impl$protocols$EventTarget$target$dyn_593 = (function (self){
var x__4550__auto__ = (((self == null))?null:self);
var m__4551__auto__ = (indexed.db.impl.protocols.target[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return m__4551__auto__.call(null,self);
} else {
var m__4549__auto__ = (indexed.db.impl.protocols.target["_"]);
if((!((m__4549__auto__ == null)))){
return m__4549__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"EventTarget.target",self);
}
}
});
indexed.db.impl.protocols.target = (function indexed$db$impl$protocols$target(self){
if((((!((self == null)))) && ((!((self.indexed$db$impl$protocols$EventTarget$target$arity$1 == null)))))){
return self.indexed$db$impl$protocols$EventTarget$target$arity$1(self);
} else {
return indexed$db$impl$protocols$EventTarget$target$dyn_593.call(null,self);
}
});


//# sourceMappingURL=protocols.js.map
