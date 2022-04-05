// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('indexed.db.cursor_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('indexed.db');
goog.require('indexed.db.test_util');
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test._STAR_db !== 'undefined')){
} else {
indexed.db.cursor_test._STAR_db = cljs.core.atom.call(null,null);
}
indexed.db.cursor_test.database_name = "indexed.db.cursor-test";
indexed.db.cursor_test.database_version = (1);
indexed.db.cursor_test.cljs_test_once_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1102 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1102 = (function (meta1103){
this.meta1103 = meta1103;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1104,meta1103__$1){
var self__ = this;
var _1104__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1102(meta1103__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1104){
var self__ = this;
var _1104__$1 = this;
return self__.meta1103;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1102.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1102.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.test_util.create_task_db.call(null,indexed.db.cursor_test._STAR_db,done,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","name","db/name",1843678379),indexed.db.cursor_test.database_name,new cljs.core.Keyword("db","version","db/version",425264924),indexed.db.cursor_test.database_version], null));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1102.prototype.apply = (function (self__,args1105){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1105)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1102.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.test_util.create_task_db.call(null,indexed.db.cursor_test._STAR_db,done,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","name","db/name",1843678379),indexed.db.cursor_test.database_name,new cljs.core.Keyword("db","version","db/version",425264924),indexed.db.cursor_test.database_version], null));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1103","meta1103",1723678869,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1102.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1102.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1102");

(indexed.db.cursor_test.t_indexed$db$cursor_test1102.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1102");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1102.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1102 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1102(meta1103){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1102(meta1103));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1102(null));
})], null)], null);
indexed.db.cursor_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1106 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1106 = (function (meta1107){
this.meta1107 = meta1107;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1108,meta1107__$1){
var self__ = this;
var _1108__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1106(meta1107__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1108){
var self__ = this;
var _1108__$1 = this;
return self__.meta1107;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1106.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1106.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.test_util.seed_tasks.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),done,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"taskTitle","taskTitle",1607128068),"Zoop",new cljs.core.Keyword(null,"hours","hours",58380855),(24),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"day","day",-274800446),(23),new cljs.core.Keyword(null,"month","month",-1960248533),"March",new cljs.core.Keyword(null,"year","year",335913393),(2022),new cljs.core.Keyword(null,"notified","notified",-1434696295),"no"], null));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1106.prototype.apply = (function (self__,args1109){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1109)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1106.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.test_util.seed_tasks.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),done,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"taskTitle","taskTitle",1607128068),"Zoop",new cljs.core.Keyword(null,"hours","hours",58380855),(24),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"day","day",-274800446),(23),new cljs.core.Keyword(null,"month","month",-1960248533),"March",new cljs.core.Keyword(null,"year","year",335913393),(2022),new cljs.core.Keyword(null,"notified","notified",-1434696295),"no"], null));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1107","meta1107",1668089165,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1106.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1106.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1106");

(indexed.db.cursor_test.t_indexed$db$cursor_test1106.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1106");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1106.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1106 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1106(meta1107){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1106(meta1107));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1106(null));
}),new cljs.core.Keyword(null,"after","after",594996914),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1110 = (function (meta1111){
this.meta1111 = meta1111;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1112,meta1111__$1){
var self__ = this;
var _1112__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1110(meta1111__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1112){
var self__ = this;
var _1112__$1 = this;
return self__.meta1111;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1110.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1110.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.test_util.reset_tasks.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),done);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1110.prototype.apply = (function (self__,args1113){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1113)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1110.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.test_util.reset_tasks.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),done);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1111","meta1111",365783970,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1110.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1110.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1110");

(indexed.db.cursor_test.t_indexed$db$cursor_test1110.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1110");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1110.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1110 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1110(meta1111){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1110(meta1111));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1110(null));
})()
], null)], null);
indexed.db.cursor_test.test_store_source = (function indexed$db$cursor_test$test_store_source(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_store_source.cljs$lang$var);
});
indexed.db.cursor_test.test_store_source.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1114 = (function (meta1115){
this.meta1115 = meta1115;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1116,meta1115__$1){
var self__ = this;
var _1116__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1114(meta1115__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1116){
var self__ = this;
var _1116__$1 = this;
return self__.meta1115;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1114.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1114.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var source = indexed.db.source.call(null,cursor);
try{var values__916__auto___1120 = (new cljs.core.List(null,source,null,(1),null));
var result__917__auto___1121 = cljs.core.apply.call(null,indexed.db.store_QMARK_,values__916__auto___1120);
if(cljs.core.truth_(result__917__auto___1121)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),17,44,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),44,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),values__916__auto___1120),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),17,44,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),44,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),values__916__auto___1120),null,(1),null)),(2),null)),null]));
}

}catch (e1118){var t__967__auto___1122 = e1118;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),17,44,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),44,t__967__auto___1122,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1114.prototype.apply = (function (self__,args1117){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1117)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1114.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var source = indexed.db.source.call(null,cursor);
try{var values__916__auto___1123 = (new cljs.core.List(null,source,null,(1),null));
var result__917__auto___1124 = cljs.core.apply.call(null,indexed.db.store_QMARK_,values__916__auto___1123);
if(cljs.core.truth_(result__917__auto___1124)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),17,44,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),44,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),values__916__auto___1123),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),17,44,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),44,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),values__916__auto___1123),null,(1),null)),(2),null)),null]));
}

}catch (e1119){var t__967__auto___1125 = e1119;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),17,44,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),44,t__967__auto___1125,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1115","meta1115",1327899719,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1114.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1114.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1114");

(indexed.db.cursor_test.t_indexed$db$cursor_test1114.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1114");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1114.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1114 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1114(meta1115){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1114(meta1115));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1114(null));
});

(indexed.db.cursor_test.test_store_source.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_store_source;},new cljs.core.Symbol("indexed.db.cursor-test","test-store-source","indexed.db.cursor-test/test-store-source",-243015282,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-store-source","test-store-source",-338407820,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",27,1,34,34,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_store_source)?indexed.db.cursor_test.test_store_source.cljs$lang$test:null)])));
indexed.db.cursor_test.test_index_source = (function indexed$db$cursor_test$test_index_source(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_index_source.cljs$lang$var);
});
indexed.db.cursor_test.test_index_source.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1126 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1126 = (function (meta1127){
this.meta1127 = meta1127;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1128,meta1127__$1){
var self__ = this;
var _1128__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1126(meta1127__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1128){
var self__ = this;
var _1128__$1 = this;
return self__.meta1127;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1126.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1126.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.index.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList"),"day")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var source = indexed.db.source.call(null,cursor);
try{var values__916__auto___1132 = (new cljs.core.List(null,source,null,(1),null));
var result__917__auto___1133 = cljs.core.apply.call(null,indexed.db.index_QMARK_,values__916__auto___1132);
if(cljs.core.truth_(result__917__auto___1133)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),17,58,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),58,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),values__916__auto___1132),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),17,58,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),58,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),values__916__auto___1132),null,(1),null)),(2),null)),null]));
}

}catch (e1130){var t__967__auto___1134 = e1130;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),17,58,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),58,t__967__auto___1134,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1126.prototype.apply = (function (self__,args1129){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1129)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1126.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.index.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList"),"day")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var source = indexed.db.source.call(null,cursor);
try{var values__916__auto___1135 = (new cljs.core.List(null,source,null,(1),null));
var result__917__auto___1136 = cljs.core.apply.call(null,indexed.db.index_QMARK_,values__916__auto___1135);
if(cljs.core.truth_(result__917__auto___1136)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),17,58,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),58,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),values__916__auto___1135),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),17,58,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),58,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),values__916__auto___1135),null,(1),null)),(2),null)),null]));
}

}catch (e1131){var t__967__auto___1137 = e1131;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),17,58,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),58,t__967__auto___1137,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1127","meta1127",2111663210,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1126.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1126.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1126");

(indexed.db.cursor_test.t_indexed$db$cursor_test1126.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1126");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1126.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1126 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1126(meta1127){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1126(meta1127));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1126(null));
});

(indexed.db.cursor_test.test_index_source.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_index_source;},new cljs.core.Symbol("indexed.db.cursor-test","test-index-source","indexed.db.cursor-test/test-index-source",-1215798916,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-index-source","test-index-source",-1376727130,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",27,1,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_index_source)?indexed.db.cursor_test.test_index_source.cljs$lang$test:null)])));
indexed.db.cursor_test.test_direction = (function indexed$db$cursor_test$test_direction(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_direction.cljs$lang$var);
});
indexed.db.cursor_test.test_direction.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1138 = (function (meta1139){
this.meta1139 = meta1139;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1140,meta1139__$1){
var self__ = this;
var _1140__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1138(meta1139__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1140){
var self__ = this;
var _1140__$1 = this;
return self__.meta1139;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1138.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1138.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__916__auto___1144 = (new cljs.core.List(null,indexed.db.direction.call(null,cursor),(new cljs.core.List(null,"next",null,(1),null)),(2),null));
var result__917__auto___1145 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1144);
if(cljs.core.truth_(result__917__auto___1145)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),17,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","direction","indexed.db/direction",324353167,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"next"),70,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1144),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),17,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","direction","indexed.db/direction",324353167,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"next"),70,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1144),null,(1),null)),(2),null)),null]));
}

}catch (e1142){var t__967__auto___1146 = e1142;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),17,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","direction","indexed.db/direction",324353167,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"next"),70,t__967__auto___1146,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1138.prototype.apply = (function (self__,args1141){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1141)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1138.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__916__auto___1147 = (new cljs.core.List(null,indexed.db.direction.call(null,cursor),(new cljs.core.List(null,"next",null,(1),null)),(2),null));
var result__917__auto___1148 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1147);
if(cljs.core.truth_(result__917__auto___1148)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),17,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","direction","indexed.db/direction",324353167,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"next"),70,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1147),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),17,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","direction","indexed.db/direction",324353167,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"next"),70,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1147),null,(1),null)),(2),null)),null]));
}

}catch (e1143){var t__967__auto___1149 = e1143;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),17,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","direction","indexed.db/direction",324353167,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"next"),70,t__967__auto___1149,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1139","meta1139",2015127955,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1138.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1138.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1138");

(indexed.db.cursor_test.t_indexed$db$cursor_test1138.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1138");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1138.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1138 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1138(meta1139){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1138(meta1139));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1138(null));
});

(indexed.db.cursor_test.test_direction.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_direction;},new cljs.core.Symbol("indexed.db.cursor-test","test-direction","indexed.db.cursor-test/test-direction",-1685714793,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-direction","test-direction",-1781552439,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",24,1,61,61,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_direction)?indexed.db.cursor_test.test_direction.cljs$lang$test:null)])));
indexed.db.cursor_test.test_key = (function indexed$db$cursor_test$test_key(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_key.cljs$lang$var);
});
indexed.db.cursor_test.test_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1150 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1150 = (function (meta1151){
this.meta1151 = meta1151;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1152,meta1151__$1){
var self__ = this;
var _1152__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1150(meta1151__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1152){
var self__ = this;
var _1152__$1 = this;
return self__.meta1151;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1150.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1150.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__916__auto___1156 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Party hard",null,(1),null)),(2),null));
var result__917__auto___1157 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1156);
if(cljs.core.truth_(result__917__auto___1157)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),17,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),82,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1156),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),17,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),82,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1156),null,(1),null)),(2),null)),null]));
}

}catch (e1154){var t__967__auto___1158 = e1154;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),17,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),82,t__967__auto___1158,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1150.prototype.apply = (function (self__,args1153){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1153)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1150.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__916__auto___1159 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Party hard",null,(1),null)),(2),null));
var result__917__auto___1160 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1159);
if(cljs.core.truth_(result__917__auto___1160)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),17,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),82,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1159),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),17,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),82,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1159),null,(1),null)),(2),null)),null]));
}

}catch (e1155){var t__967__auto___1161 = e1155;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),17,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),82,t__967__auto___1161,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1151","meta1151",698866513,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1150.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1150.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1150");

(indexed.db.cursor_test.t_indexed$db$cursor_test1150.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1150");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1150.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1150 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1150(meta1151){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1150(meta1151));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1150(null));
});

(indexed.db.cursor_test.test_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_key;},new cljs.core.Symbol("indexed.db.cursor-test","test-key","indexed.db.cursor-test/test-key",33398364,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-key","test-key",255156338,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",18,1,73,73,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_key)?indexed.db.cursor_test.test_key.cljs$lang$test:null)])));
indexed.db.cursor_test.test_primary_key = (function indexed$db$cursor_test$test_primary_key(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_primary_key.cljs$lang$var);
});
indexed.db.cursor_test.test_primary_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1162 = (function (meta1163){
this.meta1163 = meta1163;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1164,meta1163__$1){
var self__ = this;
var _1164__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1162(meta1163__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1164){
var self__ = this;
var _1164__$1 = this;
return self__.meta1163;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1162.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1162.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__916__auto___1168 = (new cljs.core.List(null,indexed.db.primary_key.call(null,cursor),(new cljs.core.List(null,"Party hard",null,(1),null)),(2),null));
var result__917__auto___1169 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1168);
if(cljs.core.truth_(result__917__auto___1169)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),17,94,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),94,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1168),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),17,94,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),94,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1168),null,(1),null)),(2),null)),null]));
}

}catch (e1166){var t__967__auto___1170 = e1166;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),17,94,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),94,t__967__auto___1170,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1162.prototype.apply = (function (self__,args1165){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1165)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1162.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__916__auto___1171 = (new cljs.core.List(null,indexed.db.primary_key.call(null,cursor),(new cljs.core.List(null,"Party hard",null,(1),null)),(2),null));
var result__917__auto___1172 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1171);
if(cljs.core.truth_(result__917__auto___1172)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),17,94,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),94,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1171),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),17,94,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),94,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1171),null,(1),null)),(2),null)),null]));
}

}catch (e1167){var t__967__auto___1173 = e1167;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),17,94,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),94,t__967__auto___1173,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1163","meta1163",-1924800667,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1162.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1162.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1162");

(indexed.db.cursor_test.t_indexed$db$cursor_test1162.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1162");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1162.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1162 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1162(meta1163){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1162(meta1163));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1162(null));
});

(indexed.db.cursor_test.test_primary_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_primary_key;},new cljs.core.Symbol("indexed.db.cursor-test","test-primary-key","indexed.db.cursor-test/test-primary-key",-2143768735,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-primary-key","test-primary-key",-2031038025,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",26,1,85,85,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_primary_key)?indexed.db.cursor_test.test_primary_key.cljs$lang$test:null)])));
indexed.db.cursor_test.test_get_request = (function indexed$db$cursor_test$test_get_request(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_get_request.cljs$lang$var);
});
indexed.db.cursor_test.test_get_request.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1174 = (function (meta1175){
this.meta1175 = meta1175;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1176,meta1175__$1){
var self__ = this;
var _1176__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1174(meta1175__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1176){
var self__ = this;
var _1176__$1 = this;
return self__.meta1175;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1174.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1174.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__916__auto___1180 = (new cljs.core.List(null,indexed.db.get_request.call(null,cursor),null,(1),null));
var result__917__auto___1181 = cljs.core.apply.call(null,indexed.db.request_QMARK_,values__916__auto___1180);
if(cljs.core.truth_(result__917__auto___1181)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),17,106,cljs.core.list(new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-request","indexed.db/get-request",66063416,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),106,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),values__916__auto___1180),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),17,106,cljs.core.list(new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-request","indexed.db/get-request",66063416,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),106,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),values__916__auto___1180),null,(1),null)),(2),null)),null]));
}

}catch (e1178){var t__967__auto___1182 = e1178;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),17,106,cljs.core.list(new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-request","indexed.db/get-request",66063416,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),106,t__967__auto___1182,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1174.prototype.apply = (function (self__,args1177){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1177)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1174.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__916__auto___1183 = (new cljs.core.List(null,indexed.db.get_request.call(null,cursor),null,(1),null));
var result__917__auto___1184 = cljs.core.apply.call(null,indexed.db.request_QMARK_,values__916__auto___1183);
if(cljs.core.truth_(result__917__auto___1184)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),17,106,cljs.core.list(new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-request","indexed.db/get-request",66063416,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),106,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),values__916__auto___1183),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),17,106,cljs.core.list(new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-request","indexed.db/get-request",66063416,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),106,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),values__916__auto___1183),null,(1),null)),(2),null)),null]));
}

}catch (e1179){var t__967__auto___1185 = e1179;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),17,106,cljs.core.list(new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-request","indexed.db/get-request",66063416,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),106,t__967__auto___1185,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1175","meta1175",168544449,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1174.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1174.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1174");

(indexed.db.cursor_test.t_indexed$db$cursor_test1174.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1174");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1174.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1174 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1174(meta1175){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1174(meta1175));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1174(null));
});

(indexed.db.cursor_test.test_get_request.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_get_request;},new cljs.core.Symbol("indexed.db.cursor-test","test-get-request","indexed.db.cursor-test/test-get-request",-885471243,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-get-request","test-get-request",-855410133,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",26,1,97,97,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_get_request)?indexed.db.cursor_test.test_get_request.cljs$lang$test:null)])));
indexed.db.cursor_test.test_advance = (function indexed$db$cursor_test$test_advance(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_advance.cljs$lang$var);
});
indexed.db.cursor_test.test_advance.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1186 = (function (meta1187){
this.meta1187 = meta1187;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1188,meta1187__$1){
var self__ = this;
var _1188__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1186(meta1187__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1188){
var self__ = this;
var _1188__$1 = this;
return self__.meta1187;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1186.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1186.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var temp__5757__auto__ = indexed.db.test_util.cursor_with_value.call(null,e);
if((temp__5757__auto__ == null)){
return null;
} else {
var cursor = temp__5757__auto__;
indexed.db.advance.call(null,cursor,(1));

if(cljs.core._EQ_.call(null,(2),cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc))){
try{var values__916__auto___1192 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Read that book",null,(1),null)),(2),null));
var result__917__auto___1193 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1192);
if(cljs.core.truth_(result__917__auto___1193)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),21,121,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),121,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1192),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),21,121,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),121,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1192),null,(1),null)),(2),null)),null]));
}

}catch (e1190){var t__967__auto___1194 = e1190;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),21,121,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),121,t__967__auto___1194,null]));
}
return done.call(null);
} else {
return null;
}
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1186.prototype.apply = (function (self__,args1189){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1189)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1186.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var temp__5757__auto__ = indexed.db.test_util.cursor_with_value.call(null,e);
if((temp__5757__auto__ == null)){
return null;
} else {
var cursor = temp__5757__auto__;
indexed.db.advance.call(null,cursor,(1));

if(cljs.core._EQ_.call(null,(2),cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc))){
try{var values__916__auto___1195 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Read that book",null,(1),null)),(2),null));
var result__917__auto___1196 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1195);
if(cljs.core.truth_(result__917__auto___1196)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),21,121,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),121,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1195),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),21,121,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),121,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1195),null,(1),null)),(2),null)),null]));
}

}catch (e1191){var t__967__auto___1197 = e1191;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),21,121,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),121,t__967__auto___1197,null]));
}
return done.call(null);
} else {
return null;
}
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1187","meta1187",1503483492,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1186.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1186.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1186");

(indexed.db.cursor_test.t_indexed$db$cursor_test1186.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1186");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1186.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1186 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1186(meta1187){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1186(meta1187));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1186(null));
});

(indexed.db.cursor_test.test_advance.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_advance;},new cljs.core.Symbol("indexed.db.cursor-test","test-advance","indexed.db.cursor-test/test-advance",1184090541,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-advance","test-advance",1219177435,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",22,1,109,109,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_advance)?indexed.db.cursor_test.test_advance.cljs$lang$test:null)])));
indexed.db.cursor_test.test_continue = (function indexed$db$cursor_test$test_continue(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_continue.cljs$lang$var);
});
indexed.db.cursor_test.test_continue.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1198 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1198 = (function (meta1199){
this.meta1199 = meta1199;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1200,meta1199__$1){
var self__ = this;
var _1200__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1198(meta1199__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1200){
var self__ = this;
var _1200__$1 = this;
return self__.meta1199;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1198.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1198.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var temp__5757__auto__ = indexed.db.test_util.cursor_with_value.call(null,e);
if((temp__5757__auto__ == null)){
return null;
} else {
var cursor = temp__5757__auto__;
indexed.db.continue$.call(null,cursor);

if(cljs.core._EQ_.call(null,(2),cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc))){
try{var values__916__auto___1204 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Read that book",null,(1),null)),(2),null));
var result__917__auto___1205 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1204);
if(cljs.core.truth_(result__917__auto___1205)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),21,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),136,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1204),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),21,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),136,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1204),null,(1),null)),(2),null)),null]));
}

}catch (e1202){var t__967__auto___1206 = e1202;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),21,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),136,t__967__auto___1206,null]));
}
return done.call(null);
} else {
return null;
}
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1198.prototype.apply = (function (self__,args1201){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1201)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1198.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var temp__5757__auto__ = indexed.db.test_util.cursor_with_value.call(null,e);
if((temp__5757__auto__ == null)){
return null;
} else {
var cursor = temp__5757__auto__;
indexed.db.continue$.call(null,cursor);

if(cljs.core._EQ_.call(null,(2),cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc))){
try{var values__916__auto___1207 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Read that book",null,(1),null)),(2),null));
var result__917__auto___1208 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1207);
if(cljs.core.truth_(result__917__auto___1208)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),21,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),136,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1207),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),21,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),136,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1207),null,(1),null)),(2),null)),null]));
}

}catch (e1203){var t__967__auto___1209 = e1203;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),21,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),136,t__967__auto___1209,null]));
}
return done.call(null);
} else {
return null;
}
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1199","meta1199",-1681782076,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1198.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1198.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1198");

(indexed.db.cursor_test.t_indexed$db$cursor_test1198.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1198");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1198.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1198 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1198(meta1199){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1198(meta1199));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1198(null));
});

(indexed.db.cursor_test.test_continue.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_continue;},new cljs.core.Symbol("indexed.db.cursor-test","test-continue","indexed.db.cursor-test/test-continue",-374401409,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-continue","test-continue",-462098267,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",23,1,124,124,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_continue)?indexed.db.cursor_test.test_continue.cljs$lang$test:null)])));
indexed.db.cursor_test.test_continue_with_key = (function indexed$db$cursor_test$test_continue_with_key(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_continue_with_key.cljs$lang$var);
});
indexed.db.cursor_test.test_continue_with_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1210 = (function (meta1211){
this.meta1211 = meta1211;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1212,meta1211__$1){
var self__ = this;
var _1212__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1210(meta1211__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1212){
var self__ = this;
var _1212__$1 = this;
return self__.meta1211;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1210.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1210.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var iterated_QMARK_ = ((0) < cljs.core.deref.call(null,_STAR_iteration));
if(iterated_QMARK_){
} else {
indexed.db.continue$.call(null,cursor,"Walk dog");
}

if(cljs.core._EQ_.call(null,(2),cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc))){
try{var values__916__auto___1216 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Walk dog",null,(1),null)),(2),null));
var result__917__auto___1217 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1216);
if(cljs.core.truth_(result__917__auto___1217)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),21,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Walk dog"),153,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1216),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),21,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Walk dog"),153,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1216),null,(1),null)),(2),null)),null]));
}

}catch (e1214){var t__967__auto___1218 = e1214;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),21,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Walk dog"),153,t__967__auto___1218,null]));
}
return done.call(null);
} else {
return null;
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1210.prototype.apply = (function (self__,args1213){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1213)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1210.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var iterated_QMARK_ = ((0) < cljs.core.deref.call(null,_STAR_iteration));
if(iterated_QMARK_){
} else {
indexed.db.continue$.call(null,cursor,"Walk dog");
}

if(cljs.core._EQ_.call(null,(2),cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc))){
try{var values__916__auto___1219 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Walk dog",null,(1),null)),(2),null));
var result__917__auto___1220 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1219);
if(cljs.core.truth_(result__917__auto___1220)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),21,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Walk dog"),153,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1219),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),21,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Walk dog"),153,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1219),null,(1),null)),(2),null)),null]));
}

}catch (e1215){var t__967__auto___1221 = e1215;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),21,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Walk dog"),153,t__967__auto___1221,null]));
}
return done.call(null);
} else {
return null;
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1211","meta1211",-2071879411,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1210.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1210.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1210");

(indexed.db.cursor_test.t_indexed$db$cursor_test1210.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1210");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1210.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1210 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1210(meta1211){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1210(meta1211));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1210(null));
});

(indexed.db.cursor_test.test_continue_with_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_continue_with_key;},new cljs.core.Symbol("indexed.db.cursor-test","test-continue-with-key","indexed.db.cursor-test/test-continue-with-key",595114449,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-continue-with-key","test-continue-with-key",629155839,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",32,1,139,139,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_continue_with_key)?indexed.db.cursor_test.test_continue_with_key.cljs$lang$test:null)])));
indexed.db.cursor_test.test_continue_primary_key = (function indexed$db$cursor_test$test_continue_primary_key(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_continue_primary_key.cljs$lang$var);
});
indexed.db.cursor_test.test_continue_primary_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1222 = (function (meta1223){
this.meta1223 = meta1223;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1224,meta1223__$1){
var self__ = this;
var _1224__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1222(meta1223__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1224){
var self__ = this;
var _1224__$1 = this;
return self__.meta1223;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1222.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1222.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
var _STAR_iteration = cljs.core.atom.call(null,(0));
var _STAR_last_primary_key = cljs.core.atom.call(null,null);
var k = (23);
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.index.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList"),"day")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if(cljs.core._EQ_.call(null,(1),iteration)){
cljs.core.reset_BANG_.call(null,_STAR_last_primary_key,indexed.db.primary_key.call(null,cursor));

return indexed.db.continue_primary_key.call(null,cursor,k,cljs.core.deref.call(null,_STAR_last_primary_key));
} else {
if(cljs.core._EQ_.call(null,(2),iteration)){
try{var values__916__auto___1230 = (new cljs.core.List(null,indexed.db.primary_key.call(null,cursor),(new cljs.core.List(null,"Zoop",null,(1),null)),(2),null));
var result__917__auto___1231 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1230);
if(cljs.core.truth_(result__917__auto___1231)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",81,new cljs.core.Keyword(null,"pass","pass",1574159993),39,175,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Zoop"),175,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1230),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",81,new cljs.core.Keyword(null,"fail","fail",1706214930),39,175,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Zoop"),175,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1230),null,(1),null)),(2),null)),null]));
}

}catch (e1226){var t__967__auto___1232 = e1226;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",81,new cljs.core.Keyword(null,"error","error",-978969032),39,175,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Zoop"),175,t__967__auto___1232,null]));
}
try{var values__916__auto___1233 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,k,null,(1),null)),(2),null));
var result__917__auto___1234 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1233);
if(cljs.core.truth_(result__917__auto___1234)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",68,new cljs.core.Keyword(null,"pass","pass",1574159993),39,176,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),new cljs.core.Symbol(null,"k","k",-505765866,null)),176,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1233),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",68,new cljs.core.Keyword(null,"fail","fail",1706214930),39,176,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),new cljs.core.Symbol(null,"k","k",-505765866,null)),176,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1233),null,(1),null)),(2),null)),null]));
}

}catch (e1227){var t__967__auto___1235 = e1227;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",68,new cljs.core.Keyword(null,"error","error",-978969032),39,176,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),new cljs.core.Symbol(null,"k","k",-505765866,null)),176,t__967__auto___1235,null]));
}
return done.call(null);
} else {
return null;
}
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1222.prototype.apply = (function (self__,args1225){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1225)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1222.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
var _STAR_iteration = cljs.core.atom.call(null,(0));
var _STAR_last_primary_key = cljs.core.atom.call(null,null);
var k = (23);
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.index.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList"),"day")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if(cljs.core._EQ_.call(null,(1),iteration)){
cljs.core.reset_BANG_.call(null,_STAR_last_primary_key,indexed.db.primary_key.call(null,cursor));

return indexed.db.continue_primary_key.call(null,cursor,k,cljs.core.deref.call(null,_STAR_last_primary_key));
} else {
if(cljs.core._EQ_.call(null,(2),iteration)){
try{var values__916__auto___1236 = (new cljs.core.List(null,indexed.db.primary_key.call(null,cursor),(new cljs.core.List(null,"Zoop",null,(1),null)),(2),null));
var result__917__auto___1237 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1236);
if(cljs.core.truth_(result__917__auto___1237)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",81,new cljs.core.Keyword(null,"pass","pass",1574159993),39,175,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Zoop"),175,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1236),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",81,new cljs.core.Keyword(null,"fail","fail",1706214930),39,175,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Zoop"),175,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1236),null,(1),null)),(2),null)),null]));
}

}catch (e1228){var t__967__auto___1238 = e1228;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",81,new cljs.core.Keyword(null,"error","error",-978969032),39,175,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Zoop"),175,t__967__auto___1238,null]));
}
try{var values__916__auto___1239 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,k,null,(1),null)),(2),null));
var result__917__auto___1240 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1239);
if(cljs.core.truth_(result__917__auto___1240)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",68,new cljs.core.Keyword(null,"pass","pass",1574159993),39,176,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),new cljs.core.Symbol(null,"k","k",-505765866,null)),176,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1239),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",68,new cljs.core.Keyword(null,"fail","fail",1706214930),39,176,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),new cljs.core.Symbol(null,"k","k",-505765866,null)),176,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1239),null,(1),null)),(2),null)),null]));
}

}catch (e1229){var t__967__auto___1241 = e1229;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",68,new cljs.core.Keyword(null,"error","error",-978969032),39,176,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),new cljs.core.Symbol(null,"k","k",-505765866,null)),176,t__967__auto___1241,null]));
}
return done.call(null);
} else {
return null;
}
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1223","meta1223",-102580283,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1222.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1222.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1222");

(indexed.db.cursor_test.t_indexed$db$cursor_test1222.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1222");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1222.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1222 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1222(meta1223){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1222(meta1223));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1222(null));
});

(indexed.db.cursor_test.test_continue_primary_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_continue_primary_key;},new cljs.core.Symbol("indexed.db.cursor-test","test-continue-primary-key","indexed.db.cursor-test/test-continue-primary-key",-1420434936,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-continue-primary-key","test-continue-primary-key",-1586660258,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",35,1,156,156,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_continue_primary_key)?indexed.db.cursor_test.test_continue_primary_key.cljs$lang$test:null)])));
indexed.db.cursor_test.test_delete = (function indexed$db$cursor_test$test_delete(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_delete.cljs$lang$var);
});
indexed.db.cursor_test.test_delete.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1242 = (function (meta1243){
this.meta1243 = meta1243;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1244,meta1243__$1){
var self__ = this;
var _1244__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1242(meta1243__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1244){
var self__ = this;
var _1244__$1 = this;
return self__.meta1243;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1242.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1242.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList","readwrite"),indexed.db.only.call(null,"Zoop")),"success",(function (e){
return indexed.db.on.call(null,indexed.db.delete$.call(null,indexed.db.test_util.cursor_with_value.call(null,e)),"success",done);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1242.prototype.apply = (function (self__,args1245){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1245)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1242.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList","readwrite"),indexed.db.only.call(null,"Zoop")),"success",(function (e){
return indexed.db.on.call(null,indexed.db.delete$.call(null,indexed.db.test_util.cursor_with_value.call(null,e)),"success",done);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1243","meta1243",530310014,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1242.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1242.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1242");

(indexed.db.cursor_test.t_indexed$db$cursor_test1242.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1242");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1242.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1242 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1242(meta1243){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1242(meta1243));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1242(null));
});

(indexed.db.cursor_test.test_delete.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_delete;},new cljs.core.Symbol("indexed.db.cursor-test","test-delete","indexed.db.cursor-test/test-delete",-1033862191,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-delete","test-delete",-945282561,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",21,1,179,179,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_delete)?indexed.db.cursor_test.test_delete.cljs$lang$test:null)])));
indexed.db.cursor_test.test_update = (function indexed$db$cursor_test$test_update(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_update.cljs$lang$var);
});
indexed.db.cursor_test.test_update.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1246 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1246 = (function (meta1247){
this.meta1247 = meta1247;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1248,meta1247__$1){
var self__ = this;
var _1248__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1246(meta1247__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1248){
var self__ = this;
var _1248__$1 = this;
return self__.meta1247;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1246.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1246.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList","readwrite"),indexed.db.only.call(null,"Zoop")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var record = indexed.db.value.call(null,cursor);
(record.month = "April");

return indexed.db.on.call(null,indexed.db.update.call(null,cursor,record),"success",done);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1246.prototype.apply = (function (self__,args1249){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1249)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1246.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList","readwrite"),indexed.db.only.call(null,"Zoop")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var record = indexed.db.value.call(null,cursor);
(record.month = "April");

return indexed.db.on.call(null,indexed.db.update.call(null,cursor,record),"success",done);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1247","meta1247",-2109084592,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1246.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1246.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1246");

(indexed.db.cursor_test.t_indexed$db$cursor_test1246.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1246");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1246.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1246 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1246(meta1247){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1246(meta1247));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1246(null));
});

(indexed.db.cursor_test.test_update.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_update;},new cljs.core.Symbol("indexed.db.cursor-test","test-update","indexed.db.cursor-test/test-update",-971315878,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-update","test-update",1008879396,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",21,1,191,191,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_update)?indexed.db.cursor_test.test_update.cljs$lang$test:null)])));

//# sourceMappingURL=cursor_test.js.map
