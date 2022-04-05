// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('indexed.db.test_util');
goog.require('cljs.core');
goog.require('indexed.db');
indexed.db.test_util.handle_upgrade = (function indexed$db$test_util$handle_upgrade(fn_2){
return (function (e){
var event = indexed.db.create_version_change_event.call(null,e);
var request = indexed.db.get_request.call(null,event);
return fn_2.call(null,indexed.db.result.call(null,request),indexed.db.get_transaction.call(null,request));
});
});
indexed.db.test_util.open = (function indexed$db$test_util$open(db_name,db_version,p__787){
var map__788 = p__787;
var map__788__$1 = cljs.core.__destructure_map.call(null,map__788);
var upgradeneeded = cljs.core.get.call(null,map__788__$1,new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472));
var success = cljs.core.get.call(null,map__788__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var open_request = indexed.db.open.call(null,db_name,db_version);
return indexed.db.on.call(null,indexed.db.on.call(null,indexed.db.on.call(null,open_request,"error",(function (p1__786_SHARP_){
throw p1__786_SHARP_;
})),"upgradeneeded",indexed.db.test_util.handle_upgrade.call(null,upgradeneeded)),"success",(function (){
return success.call(null,indexed.db.result.call(null,open_request));
}));
});
indexed.db.test_util.test_connect = (function indexed$db$test_util$test_connect(db_name,db_version,p__790){
var map__791 = p__790;
var map__791__$1 = cljs.core.__destructure_map.call(null,map__791);
var success = cljs.core.get.call(null,map__791__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var upgradeneeded = cljs.core.get.call(null,map__791__$1,new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),cljs.core.constantly);
var blocked = cljs.core.get.call(null,map__791__$1,new cljs.core.Keyword(null,"blocked","blocked",181326681),(function (){
throw "Blocked";
}));
var error = cljs.core.get.call(null,map__791__$1,new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__789_SHARP_){
throw p1__789_SHARP_;
}));
return indexed.db.on.call(null,indexed.db.on.call(null,indexed.db.on.call(null,indexed.db.delete_database.call(null,db_name),"error",error),"blocked",blocked),"success",(function (){
return indexed.db.test_util.open.call(null,db_name,db_version,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),success,new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),upgradeneeded], null));
}));
});
indexed.db.test_util.transaction = (function indexed$db$test_util$transaction(var_args){
var G__793 = arguments.length;
switch (G__793) {
case 2:
return indexed.db.test_util.transaction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return indexed.db.test_util.transaction.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.test_util.transaction.cljs$core$IFn$_invoke$arity$2 = (function (db,mode){
return indexed.db.transaction.call(null,db,indexed.db.object_store_names.call(null,db),mode);
}));

(indexed.db.test_util.transaction.cljs$core$IFn$_invoke$arity$1 = (function (db){
return indexed.db.test_util.transaction.call(null,db,"readonly");
}));

(indexed.db.test_util.transaction.cljs$lang$maxFixedArity = 2);

indexed.db.test_util.store = (function indexed$db$test_util$store(var_args){
var G__796 = arguments.length;
switch (G__796) {
case 3:
return indexed.db.test_util.store.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return indexed.db.test_util.store.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(indexed.db.test_util.store.cljs$core$IFn$_invoke$arity$3 = (function (db,store_name,mode){
return indexed.db.object_store.call(null,indexed.db.test_util.transaction.call(null,db,mode),store_name);
}));

(indexed.db.test_util.store.cljs$core$IFn$_invoke$arity$2 = (function (db,store_name){
return indexed.db.test_util.store.call(null,db,store_name,"readonly");
}));

(indexed.db.test_util.store.cljs$lang$maxFixedArity = 3);

indexed.db.test_util.add_many = (function indexed$db$test_util$add_many(object_store,done,items){
var _STAR_counter = cljs.core.atom.call(null,(0));
var item = cljs.core.first.call(null,items);
var rest = cljs.core.next.call(null,items);
while(true){
if((!((item == null)))){
indexed.db.on.call(null,indexed.db.add.call(null,object_store,cljs.core.clj__GT_js.call(null,item)),"success",((function (item,rest,_STAR_counter){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),cljs.core.swap_BANG_.call(null,_STAR_counter,cljs.core.inc))){
return done.call(null);
} else {
return null;
}
});})(item,rest,_STAR_counter))
);

var G__798 = cljs.core.first.call(null,rest);
var G__799 = cljs.core.next.call(null,rest);
item = G__798;
rest = G__799;
continue;
} else {
return null;
}
break;
}
});
/**
 * Create a task db used for testing. This schema matches
 * the todo list store modeled at MDN. Result of connection will be stored in the *db atom
 */
indexed.db.test_util.create_task_db = (function indexed$db$test_util$create_task_db(_STAR_db,done,p__800){
var map__801 = p__800;
var map__801__$1 = cljs.core.__destructure_map.call(null,map__801);
var name = cljs.core.get.call(null,map__801__$1,new cljs.core.Keyword("db","name","db/name",1843678379));
var version = cljs.core.get.call(null,map__801__$1,new cljs.core.Keyword("db","version","db/version",425264924));
return indexed.db.test_util.test_connect.call(null,name,version,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
cljs.core.reset_BANG_.call(null,_STAR_db,indexed.db.create_database.call(null,idb));

return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
var store = indexed.db.create_object_store.call(null,db,"toDoList",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-path","key-path",878473308),"taskTitle"], null));
indexed.db.create_index.call(null,store,"hours","hours",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique?","unique?",-392536907),false], null));

indexed.db.create_index.call(null,store,"minutes","minutes",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique?","unique?",-392536907),false], null));

indexed.db.create_index.call(null,store,"day","day",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique?","unique?",-392536907),false], null));

indexed.db.create_index.call(null,store,"month","month",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique?","unique?",-392536907),false], null));

indexed.db.create_index.call(null,store,"year","year",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique?","unique?",-392536907),false], null));

indexed.db.create_index.call(null,store,"notified","notified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique?","unique?",-392536907),false], null));

return indexed.db.create_index.call(null,store,"deleteme","deleteme",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique?","unique?",-392536907),false], null));
}),new cljs.core.Keyword(null,"blocked","blocked",181326681),(function (){
return indexed.db.close.call(null,cljs.core.deref.call(null,_STAR_db));
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (){
cljs.core.println.call(null,"Failed test connection");

return done.call(null);
})], null));
});
indexed.db.test_util.seed_tasks = (function indexed$db$test_util$seed_tasks(var_args){
var args__4870__auto__ = [];
var len__4864__auto___805 = arguments.length;
var i__4865__auto___806 = (0);
while(true){
if((i__4865__auto___806 < len__4864__auto___805)){
args__4870__auto__.push((arguments[i__4865__auto___806]));

var G__807 = (i__4865__auto___806 + (1));
i__4865__auto___806 = G__807;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return indexed.db.test_util.seed_tasks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(indexed.db.test_util.seed_tasks.cljs$core$IFn$_invoke$arity$variadic = (function (db,done,tasks){
return indexed.db.test_util.add_many.call(null,indexed.db.test_util.store.call(null,db,"toDoList","readwrite"),done,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"taskTitle","taskTitle",1607128068),"Walk dog",new cljs.core.Keyword(null,"hours","hours",58380855),(19),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(30),new cljs.core.Keyword(null,"day","day",-274800446),(24),new cljs.core.Keyword(null,"month","month",-1960248533),"December",new cljs.core.Keyword(null,"year","year",335913393),(2013),new cljs.core.Keyword(null,"notified","notified",-1434696295),"no"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"taskTitle","taskTitle",1607128068),"Party hard",new cljs.core.Keyword(null,"hours","hours",58380855),(24),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"day","day",-274800446),(23),new cljs.core.Keyword(null,"month","month",-1960248533),"March",new cljs.core.Keyword(null,"year","year",335913393),(2022),new cljs.core.Keyword(null,"notified","notified",-1434696295),"no"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"taskTitle","taskTitle",1607128068),"Read that book",new cljs.core.Keyword(null,"hours","hours",58380855),(13),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"day","day",-274800446),(22),new cljs.core.Keyword(null,"month","month",-1960248533),"March",new cljs.core.Keyword(null,"year","year",335913393),(2022),new cljs.core.Keyword(null,"notified","notified",-1434696295),"no"], null)], null),tasks));
}));

(indexed.db.test_util.seed_tasks.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(indexed.db.test_util.seed_tasks.cljs$lang$applyTo = (function (seq802){
var G__803 = cljs.core.first.call(null,seq802);
var seq802__$1 = cljs.core.next.call(null,seq802);
var G__804 = cljs.core.first.call(null,seq802__$1);
var seq802__$2 = cljs.core.next.call(null,seq802__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__803,G__804,seq802__$2);
}));

indexed.db.test_util.reset_tasks = (function indexed$db$test_util$reset_tasks(db,done){
return indexed.db.on.call(null,indexed.db.clear.call(null,indexed.db.test_util.store.call(null,db,"toDoList","readwrite")),"success",done);
});
indexed.db.test_util.event__GT_request = (function indexed$db$test_util$event__GT_request(e){
return indexed.db.create_request.call(null,e.target);
});
/**
 * Create a cursor with value from an event
 */
indexed.db.test_util.cursor_with_value = (function indexed$db$test_util$cursor_with_value(e){
var G__808 = indexed.db.test_util.event__GT_request.call(null,e);
var G__808__$1 = (((G__808 == null))?null:indexed.db.result.call(null,G__808));
if((G__808__$1 == null)){
return null;
} else {
return indexed.db.create_cursor_with_value.call(null,G__808__$1);
}
});
/**
 * Create a cursor with value from an event
 */
indexed.db.test_util.cursor = (function indexed$db$test_util$cursor(e){
var G__809 = indexed.db.test_util.event__GT_request.call(null,e);
var G__809__$1 = (((G__809 == null))?null:indexed.db.result.call(null,G__809));
if((G__809__$1 == null)){
return null;
} else {
return indexed.db.create_cursor.call(null,G__809__$1);
}
});

//# sourceMappingURL=test_util.js.map
