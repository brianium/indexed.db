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
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1076 = (function (meta1077){
this.meta1077 = meta1077;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1078,meta1077__$1){
var self__ = this;
var _1078__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1076(meta1077__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1078){
var self__ = this;
var _1078__$1 = this;
return self__.meta1077;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1076.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1076.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.test_util.create_task_db.call(null,indexed.db.cursor_test._STAR_db,done,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","name","db/name",1843678379),indexed.db.cursor_test.database_name,new cljs.core.Keyword("db","version","db/version",425264924),indexed.db.cursor_test.database_version], null));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1076.prototype.apply = (function (self__,args1079){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1079)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1076.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.test_util.create_task_db.call(null,indexed.db.cursor_test._STAR_db,done,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","name","db/name",1843678379),indexed.db.cursor_test.database_name,new cljs.core.Keyword("db","version","db/version",425264924),indexed.db.cursor_test.database_version], null));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1077","meta1077",1800728085,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1076.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1076.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1076");

(indexed.db.cursor_test.t_indexed$db$cursor_test1076.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1076");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1076.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1076 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1076(meta1077){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1076(meta1077));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1076(null));
})], null)], null);
indexed.db.cursor_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1080 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1080 = (function (meta1081){
this.meta1081 = meta1081;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1082,meta1081__$1){
var self__ = this;
var _1082__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1080(meta1081__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1082){
var self__ = this;
var _1082__$1 = this;
return self__.meta1081;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1080.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1080.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.test_util.seed_tasks.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),done,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"taskTitle","taskTitle",1607128068),"Zoop",new cljs.core.Keyword(null,"hours","hours",58380855),(24),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"day","day",-274800446),(23),new cljs.core.Keyword(null,"month","month",-1960248533),"March",new cljs.core.Keyword(null,"year","year",335913393),(2022),new cljs.core.Keyword(null,"notified","notified",-1434696295),"no"], null));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1080.prototype.apply = (function (self__,args1083){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1083)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1080.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.test_util.seed_tasks.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),done,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"taskTitle","taskTitle",1607128068),"Zoop",new cljs.core.Keyword(null,"hours","hours",58380855),(24),new cljs.core.Keyword(null,"minutes","minutes",1319166394),(0),new cljs.core.Keyword(null,"day","day",-274800446),(23),new cljs.core.Keyword(null,"month","month",-1960248533),"March",new cljs.core.Keyword(null,"year","year",335913393),(2022),new cljs.core.Keyword(null,"notified","notified",-1434696295),"no"], null));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1081","meta1081",-634869369,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1080.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1080.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1080");

(indexed.db.cursor_test.t_indexed$db$cursor_test1080.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1080");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1080.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1080 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1080(meta1081){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1080(meta1081));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1080(null));
}),new cljs.core.Keyword(null,"after","after",594996914),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1084 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1084 = (function (meta1085){
this.meta1085 = meta1085;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1086,meta1085__$1){
var self__ = this;
var _1086__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1084(meta1085__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1086){
var self__ = this;
var _1086__$1 = this;
return self__.meta1085;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1084.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1084.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.test_util.reset_tasks.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),done);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1084.prototype.apply = (function (self__,args1087){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1087)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1084.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.test_util.reset_tasks.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),done);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1085","meta1085",67198353,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1084.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1084.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1084");

(indexed.db.cursor_test.t_indexed$db$cursor_test1084.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1084");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1084.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1084 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1084(meta1085){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1084(meta1085));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1084(null));
})()
], null)], null);
indexed.db.cursor_test.test_store_source = (function indexed$db$cursor_test$test_store_source(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_store_source.cljs$lang$var);
});
indexed.db.cursor_test.test_store_source.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1088 = (function (meta1089){
this.meta1089 = meta1089;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1090,meta1089__$1){
var self__ = this;
var _1090__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1088(meta1089__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1090){
var self__ = this;
var _1090__$1 = this;
return self__.meta1089;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1088.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1088.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var source = indexed.db.source.call(null,cursor);
try{var values__890__auto___1094 = (new cljs.core.List(null,source,null,(1),null));
var result__891__auto___1095 = cljs.core.apply.call(null,indexed.db.store_QMARK_,values__890__auto___1094);
if(cljs.core.truth_(result__891__auto___1095)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),17,44,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),44,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),values__890__auto___1094),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),17,44,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),44,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),values__890__auto___1094),null,(1),null)),(2),null)),null]));
}

}catch (e1092){var t__941__auto___1096 = e1092;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),17,44,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),44,t__941__auto___1096,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1088.prototype.apply = (function (self__,args1091){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1091)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1088.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var source = indexed.db.source.call(null,cursor);
try{var values__890__auto___1097 = (new cljs.core.List(null,source,null,(1),null));
var result__891__auto___1098 = cljs.core.apply.call(null,indexed.db.store_QMARK_,values__890__auto___1097);
if(cljs.core.truth_(result__891__auto___1098)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),17,44,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),44,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),values__890__auto___1097),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),17,44,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),44,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),values__890__auto___1097),null,(1),null)),(2),null)),null]));
}

}catch (e1093){var t__941__auto___1099 = e1093;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),17,44,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),44,t__941__auto___1099,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1089","meta1089",1596456060,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1088.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1088.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1088");

(indexed.db.cursor_test.t_indexed$db$cursor_test1088.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1088");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1088.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1088 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1088(meta1089){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1088(meta1089));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1088(null));
});

(indexed.db.cursor_test.test_store_source.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_store_source;},new cljs.core.Symbol("indexed.db.cursor-test","test-store-source","indexed.db.cursor-test/test-store-source",-243015282,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-store-source","test-store-source",-338407820,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",27,1,34,34,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_store_source)?indexed.db.cursor_test.test_store_source.cljs$lang$test:null)])));
indexed.db.cursor_test.test_index_source = (function indexed$db$cursor_test$test_index_source(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_index_source.cljs$lang$var);
});
indexed.db.cursor_test.test_index_source.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1100 = (function (meta1101){
this.meta1101 = meta1101;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1102,meta1101__$1){
var self__ = this;
var _1102__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1100(meta1101__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1102){
var self__ = this;
var _1102__$1 = this;
return self__.meta1101;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1100.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1100.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.index.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList"),"day")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var source = indexed.db.source.call(null,cursor);
try{var values__890__auto___1106 = (new cljs.core.List(null,source,null,(1),null));
var result__891__auto___1107 = cljs.core.apply.call(null,indexed.db.index_QMARK_,values__890__auto___1106);
if(cljs.core.truth_(result__891__auto___1107)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),17,58,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),58,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),values__890__auto___1106),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),17,58,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),58,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),values__890__auto___1106),null,(1),null)),(2),null)),null]));
}

}catch (e1104){var t__941__auto___1108 = e1104;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),17,58,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),58,t__941__auto___1108,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1100.prototype.apply = (function (self__,args1103){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1103)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1100.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.index.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList"),"day")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var source = indexed.db.source.call(null,cursor);
try{var values__890__auto___1109 = (new cljs.core.List(null,source,null,(1),null));
var result__891__auto___1110 = cljs.core.apply.call(null,indexed.db.index_QMARK_,values__890__auto___1109);
if(cljs.core.truth_(result__891__auto___1110)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),17,58,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),58,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),values__890__auto___1109),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),17,58,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),58,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),values__890__auto___1109),null,(1),null)),(2),null)),null]));
}

}catch (e1105){var t__941__auto___1111 = e1105;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),17,58,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),58,t__941__auto___1111,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1101","meta1101",1781352058,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1100.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1100.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1100");

(indexed.db.cursor_test.t_indexed$db$cursor_test1100.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1100");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1100.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1100 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1100(meta1101){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1100(meta1101));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1100(null));
});

(indexed.db.cursor_test.test_index_source.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_index_source;},new cljs.core.Symbol("indexed.db.cursor-test","test-index-source","indexed.db.cursor-test/test-index-source",-1215798916,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-index-source","test-index-source",-1376727130,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",27,1,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_index_source)?indexed.db.cursor_test.test_index_source.cljs$lang$test:null)])));
indexed.db.cursor_test.test_direction = (function indexed$db$cursor_test$test_direction(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_direction.cljs$lang$var);
});
indexed.db.cursor_test.test_direction.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1112 = (function (meta1113){
this.meta1113 = meta1113;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1114,meta1113__$1){
var self__ = this;
var _1114__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1112(meta1113__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1114){
var self__ = this;
var _1114__$1 = this;
return self__.meta1113;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1112.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1112.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__890__auto___1118 = (new cljs.core.List(null,indexed.db.direction.call(null,cursor),(new cljs.core.List(null,"next",null,(1),null)),(2),null));
var result__891__auto___1119 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1118);
if(cljs.core.truth_(result__891__auto___1119)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),17,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","direction","indexed.db/direction",324353167,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"next"),70,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1118),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),17,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","direction","indexed.db/direction",324353167,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"next"),70,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1118),null,(1),null)),(2),null)),null]));
}

}catch (e1116){var t__941__auto___1120 = e1116;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),17,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","direction","indexed.db/direction",324353167,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"next"),70,t__941__auto___1120,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1112.prototype.apply = (function (self__,args1115){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1115)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1112.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__890__auto___1121 = (new cljs.core.List(null,indexed.db.direction.call(null,cursor),(new cljs.core.List(null,"next",null,(1),null)),(2),null));
var result__891__auto___1122 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1121);
if(cljs.core.truth_(result__891__auto___1122)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),17,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","direction","indexed.db/direction",324353167,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"next"),70,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1121),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),17,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","direction","indexed.db/direction",324353167,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"next"),70,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1121),null,(1),null)),(2),null)),null]));
}

}catch (e1117){var t__941__auto___1123 = e1117;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),17,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","direction","indexed.db/direction",324353167,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"next"),70,t__941__auto___1123,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1113","meta1113",-1707764497,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1112.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1112.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1112");

(indexed.db.cursor_test.t_indexed$db$cursor_test1112.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1112");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1112.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1112 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1112(meta1113){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1112(meta1113));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1112(null));
});

(indexed.db.cursor_test.test_direction.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_direction;},new cljs.core.Symbol("indexed.db.cursor-test","test-direction","indexed.db.cursor-test/test-direction",-1685714793,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-direction","test-direction",-1781552439,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",24,1,61,61,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_direction)?indexed.db.cursor_test.test_direction.cljs$lang$test:null)])));
indexed.db.cursor_test.test_key = (function indexed$db$cursor_test$test_key(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_key.cljs$lang$var);
});
indexed.db.cursor_test.test_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1124 = (function (meta1125){
this.meta1125 = meta1125;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1126,meta1125__$1){
var self__ = this;
var _1126__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1124(meta1125__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1126){
var self__ = this;
var _1126__$1 = this;
return self__.meta1125;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1124.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1124.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__890__auto___1130 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Party hard",null,(1),null)),(2),null));
var result__891__auto___1131 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1130);
if(cljs.core.truth_(result__891__auto___1131)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),17,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),82,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1130),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),17,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),82,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1130),null,(1),null)),(2),null)),null]));
}

}catch (e1128){var t__941__auto___1132 = e1128;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),17,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),82,t__941__auto___1132,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1124.prototype.apply = (function (self__,args1127){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1127)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1124.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__890__auto___1133 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Party hard",null,(1),null)),(2),null));
var result__891__auto___1134 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1133);
if(cljs.core.truth_(result__891__auto___1134)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"pass","pass",1574159993),17,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),82,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1133),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"fail","fail",1706214930),17,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),82,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1133),null,(1),null)),(2),null)),null]));
}

}catch (e1129){var t__941__auto___1135 = e1129;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",57,new cljs.core.Keyword(null,"error","error",-978969032),17,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),82,t__941__auto___1135,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1125","meta1125",583924604,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1124.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1124.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1124");

(indexed.db.cursor_test.t_indexed$db$cursor_test1124.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1124");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1124.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1124 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1124(meta1125){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1124(meta1125));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1124(null));
});

(indexed.db.cursor_test.test_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_key;},new cljs.core.Symbol("indexed.db.cursor-test","test-key","indexed.db.cursor-test/test-key",33398364,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-key","test-key",255156338,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",18,1,73,73,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_key)?indexed.db.cursor_test.test_key.cljs$lang$test:null)])));
indexed.db.cursor_test.test_primary_key = (function indexed$db$cursor_test$test_primary_key(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_primary_key.cljs$lang$var);
});
indexed.db.cursor_test.test_primary_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1136 = (function (meta1137){
this.meta1137 = meta1137;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1138,meta1137__$1){
var self__ = this;
var _1138__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1136(meta1137__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1138){
var self__ = this;
var _1138__$1 = this;
return self__.meta1137;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1136.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1136.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__890__auto___1142 = (new cljs.core.List(null,indexed.db.primary_key.call(null,cursor),(new cljs.core.List(null,"Party hard",null,(1),null)),(2),null));
var result__891__auto___1143 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1142);
if(cljs.core.truth_(result__891__auto___1143)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),17,94,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),94,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1142),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),17,94,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),94,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1142),null,(1),null)),(2),null)),null]));
}

}catch (e1140){var t__941__auto___1144 = e1140;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),17,94,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),94,t__941__auto___1144,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1136.prototype.apply = (function (self__,args1139){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1139)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1136.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__890__auto___1145 = (new cljs.core.List(null,indexed.db.primary_key.call(null,cursor),(new cljs.core.List(null,"Party hard",null,(1),null)),(2),null));
var result__891__auto___1146 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1145);
if(cljs.core.truth_(result__891__auto___1146)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),17,94,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),94,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1145),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),17,94,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),94,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1145),null,(1),null)),(2),null)),null]));
}

}catch (e1141){var t__941__auto___1147 = e1141;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),17,94,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Party hard"),94,t__941__auto___1147,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1137","meta1137",844134889,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1136.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1136.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1136");

(indexed.db.cursor_test.t_indexed$db$cursor_test1136.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1136");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1136.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1136 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1136(meta1137){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1136(meta1137));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1136(null));
});

(indexed.db.cursor_test.test_primary_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_primary_key;},new cljs.core.Symbol("indexed.db.cursor-test","test-primary-key","indexed.db.cursor-test/test-primary-key",-2143768735,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-primary-key","test-primary-key",-2031038025,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",26,1,85,85,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_primary_key)?indexed.db.cursor_test.test_primary_key.cljs$lang$test:null)])));
indexed.db.cursor_test.test_get_request = (function indexed$db$cursor_test$test_get_request(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_get_request.cljs$lang$var);
});
indexed.db.cursor_test.test_get_request.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1148 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1148 = (function (meta1149){
this.meta1149 = meta1149;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1150,meta1149__$1){
var self__ = this;
var _1150__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1148(meta1149__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1150){
var self__ = this;
var _1150__$1 = this;
return self__.meta1149;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1148.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1148.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__890__auto___1154 = (new cljs.core.List(null,indexed.db.get_request.call(null,cursor),null,(1),null));
var result__891__auto___1155 = cljs.core.apply.call(null,indexed.db.request_QMARK_,values__890__auto___1154);
if(cljs.core.truth_(result__891__auto___1155)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),17,106,cljs.core.list(new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-request","indexed.db/get-request",66063416,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),106,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),values__890__auto___1154),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),17,106,cljs.core.list(new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-request","indexed.db/get-request",66063416,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),106,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),values__890__auto___1154),null,(1),null)),(2),null)),null]));
}

}catch (e1152){var t__941__auto___1156 = e1152;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),17,106,cljs.core.list(new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-request","indexed.db/get-request",66063416,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),106,t__941__auto___1156,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1148.prototype.apply = (function (self__,args1151){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1151)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1148.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
try{var values__890__auto___1157 = (new cljs.core.List(null,indexed.db.get_request.call(null,cursor),null,(1),null));
var result__891__auto___1158 = cljs.core.apply.call(null,indexed.db.request_QMARK_,values__890__auto___1157);
if(cljs.core.truth_(result__891__auto___1158)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),17,106,cljs.core.list(new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-request","indexed.db/get-request",66063416,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),106,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),values__890__auto___1157),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),17,106,cljs.core.list(new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-request","indexed.db/get-request",66063416,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),106,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),values__890__auto___1157),null,(1),null)),(2),null)),null]));
}

}catch (e1153){var t__941__auto___1159 = e1153;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),17,106,cljs.core.list(new cljs.core.Symbol("indexed.db","request?","indexed.db/request?",-1234332835,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-request","indexed.db/get-request",66063416,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),106,t__941__auto___1159,null]));
}
return done.call(null);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1149","meta1149",1766425759,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1148.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1148.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1148");

(indexed.db.cursor_test.t_indexed$db$cursor_test1148.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1148");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1148.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1148 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1148(meta1149){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1148(meta1149));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1148(null));
});

(indexed.db.cursor_test.test_get_request.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_get_request;},new cljs.core.Symbol("indexed.db.cursor-test","test-get-request","indexed.db.cursor-test/test-get-request",-885471243,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-get-request","test-get-request",-855410133,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",26,1,97,97,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_get_request)?indexed.db.cursor_test.test_get_request.cljs$lang$test:null)])));
indexed.db.cursor_test.test_advance = (function indexed$db$cursor_test$test_advance(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_advance.cljs$lang$var);
});
indexed.db.cursor_test.test_advance.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1160 = (function (meta1161){
this.meta1161 = meta1161;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1162,meta1161__$1){
var self__ = this;
var _1162__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1160(meta1161__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1162){
var self__ = this;
var _1162__$1 = this;
return self__.meta1161;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1160.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1160.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var temp__5757__auto__ = indexed.db.test_util.cursor_with_value.call(null,e);
if((temp__5757__auto__ == null)){
return null;
} else {
var cursor = temp__5757__auto__;
indexed.db.advance.call(null,cursor,(1));

if(cljs.core._EQ_.call(null,(2),cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc))){
try{var values__890__auto___1166 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Read that book",null,(1),null)),(2),null));
var result__891__auto___1167 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1166);
if(cljs.core.truth_(result__891__auto___1167)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),21,121,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),121,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1166),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),21,121,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),121,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1166),null,(1),null)),(2),null)),null]));
}

}catch (e1164){var t__941__auto___1168 = e1164;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),21,121,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),121,t__941__auto___1168,null]));
}
return done.call(null);
} else {
return null;
}
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1160.prototype.apply = (function (self__,args1163){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1163)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1160.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var temp__5757__auto__ = indexed.db.test_util.cursor_with_value.call(null,e);
if((temp__5757__auto__ == null)){
return null;
} else {
var cursor = temp__5757__auto__;
indexed.db.advance.call(null,cursor,(1));

if(cljs.core._EQ_.call(null,(2),cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc))){
try{var values__890__auto___1169 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Read that book",null,(1),null)),(2),null));
var result__891__auto___1170 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1169);
if(cljs.core.truth_(result__891__auto___1170)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),21,121,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),121,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1169),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),21,121,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),121,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1169),null,(1),null)),(2),null)),null]));
}

}catch (e1165){var t__941__auto___1171 = e1165;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),21,121,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),121,t__941__auto___1171,null]));
}
return done.call(null);
} else {
return null;
}
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1161","meta1161",-315008885,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1160.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1160.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1160");

(indexed.db.cursor_test.t_indexed$db$cursor_test1160.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1160");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1160.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1160 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1160(meta1161){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1160(meta1161));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1160(null));
});

(indexed.db.cursor_test.test_advance.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_advance;},new cljs.core.Symbol("indexed.db.cursor-test","test-advance","indexed.db.cursor-test/test-advance",1184090541,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-advance","test-advance",1219177435,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",22,1,109,109,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_advance)?indexed.db.cursor_test.test_advance.cljs$lang$test:null)])));
indexed.db.cursor_test.test_continue = (function indexed$db$cursor_test$test_continue(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_continue.cljs$lang$var);
});
indexed.db.cursor_test.test_continue.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1172 = (function (meta1173){
this.meta1173 = meta1173;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1174,meta1173__$1){
var self__ = this;
var _1174__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1172(meta1173__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1174){
var self__ = this;
var _1174__$1 = this;
return self__.meta1173;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1172.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1172.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var temp__5757__auto__ = indexed.db.test_util.cursor_with_value.call(null,e);
if((temp__5757__auto__ == null)){
return null;
} else {
var cursor = temp__5757__auto__;
indexed.db.continue$.call(null,cursor);

if(cljs.core._EQ_.call(null,(2),cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc))){
try{var values__890__auto___1178 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Read that book",null,(1),null)),(2),null));
var result__891__auto___1179 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1178);
if(cljs.core.truth_(result__891__auto___1179)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),21,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),136,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1178),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),21,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),136,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1178),null,(1),null)),(2),null)),null]));
}

}catch (e1176){var t__941__auto___1180 = e1176;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),21,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),136,t__941__auto___1180,null]));
}
return done.call(null);
} else {
return null;
}
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1172.prototype.apply = (function (self__,args1175){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1175)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1172.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var temp__5757__auto__ = indexed.db.test_util.cursor_with_value.call(null,e);
if((temp__5757__auto__ == null)){
return null;
} else {
var cursor = temp__5757__auto__;
indexed.db.continue$.call(null,cursor);

if(cljs.core._EQ_.call(null,(2),cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc))){
try{var values__890__auto___1181 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Read that book",null,(1),null)),(2),null));
var result__891__auto___1182 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1181);
if(cljs.core.truth_(result__891__auto___1182)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),21,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),136,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1181),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),21,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),136,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1181),null,(1),null)),(2),null)),null]));
}

}catch (e1177){var t__941__auto___1183 = e1177;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),21,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Read that book"),136,t__941__auto___1183,null]));
}
return done.call(null);
} else {
return null;
}
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1173","meta1173",-1023119341,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1172.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1172.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1172");

(indexed.db.cursor_test.t_indexed$db$cursor_test1172.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1172");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1172.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1172 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1172(meta1173){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1172(meta1173));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1172(null));
});

(indexed.db.cursor_test.test_continue.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_continue;},new cljs.core.Symbol("indexed.db.cursor-test","test-continue","indexed.db.cursor-test/test-continue",-374401409,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-continue","test-continue",-462098267,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",23,1,124,124,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_continue)?indexed.db.cursor_test.test_continue.cljs$lang$test:null)])));
indexed.db.cursor_test.test_continue_with_key = (function indexed$db$cursor_test$test_continue_with_key(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_continue_with_key.cljs$lang$var);
});
indexed.db.cursor_test.test_continue_with_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1184 = (function (meta1185){
this.meta1185 = meta1185;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1186,meta1185__$1){
var self__ = this;
var _1186__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1184(meta1185__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1186){
var self__ = this;
var _1186__$1 = this;
return self__.meta1185;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1184.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1184.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var iterated_QMARK_ = ((0) < cljs.core.deref.call(null,_STAR_iteration));
if(iterated_QMARK_){
} else {
indexed.db.continue$.call(null,cursor,"Walk dog");
}

if(cljs.core._EQ_.call(null,(2),cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc))){
try{var values__890__auto___1190 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Walk dog",null,(1),null)),(2),null));
var result__891__auto___1191 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1190);
if(cljs.core.truth_(result__891__auto___1191)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),21,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Walk dog"),153,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1190),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),21,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Walk dog"),153,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1190),null,(1),null)),(2),null)),null]));
}

}catch (e1188){var t__941__auto___1192 = e1188;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),21,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Walk dog"),153,t__941__auto___1192,null]));
}
return done.call(null);
} else {
return null;
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1184.prototype.apply = (function (self__,args1187){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1187)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1184.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var iterated_QMARK_ = ((0) < cljs.core.deref.call(null,_STAR_iteration));
if(iterated_QMARK_){
} else {
indexed.db.continue$.call(null,cursor,"Walk dog");
}

if(cljs.core._EQ_.call(null,(2),cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc))){
try{var values__890__auto___1193 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,"Walk dog",null,(1),null)),(2),null));
var result__891__auto___1194 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1193);
if(cljs.core.truth_(result__891__auto___1194)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),21,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Walk dog"),153,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1193),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),21,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Walk dog"),153,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1193),null,(1),null)),(2),null)),null]));
}

}catch (e1189){var t__941__auto___1195 = e1189;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),21,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Walk dog"),153,t__941__auto___1195,null]));
}
return done.call(null);
} else {
return null;
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1185","meta1185",-1363421636,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1184.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1184.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1184");

(indexed.db.cursor_test.t_indexed$db$cursor_test1184.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1184");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1184.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1184 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1184(meta1185){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1184(meta1185));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1184(null));
});

(indexed.db.cursor_test.test_continue_with_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_continue_with_key;},new cljs.core.Symbol("indexed.db.cursor-test","test-continue-with-key","indexed.db.cursor-test/test-continue-with-key",595114449,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-continue-with-key","test-continue-with-key",629155839,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",32,1,139,139,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_continue_with_key)?indexed.db.cursor_test.test_continue_with_key.cljs$lang$test:null)])));
indexed.db.cursor_test.test_continue_primary_key = (function indexed$db$cursor_test$test_continue_primary_key(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_continue_primary_key.cljs$lang$var);
});
indexed.db.cursor_test.test_continue_primary_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1196 = (function (meta1197){
this.meta1197 = meta1197;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1198,meta1197__$1){
var self__ = this;
var _1198__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1196(meta1197__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1198){
var self__ = this;
var _1198__$1 = this;
return self__.meta1197;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1196.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1196.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
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
try{var values__890__auto___1204 = (new cljs.core.List(null,indexed.db.primary_key.call(null,cursor),(new cljs.core.List(null,"Zoop",null,(1),null)),(2),null));
var result__891__auto___1205 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1204);
if(cljs.core.truth_(result__891__auto___1205)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",81,new cljs.core.Keyword(null,"pass","pass",1574159993),39,175,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Zoop"),175,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1204),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",81,new cljs.core.Keyword(null,"fail","fail",1706214930),39,175,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Zoop"),175,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1204),null,(1),null)),(2),null)),null]));
}

}catch (e1200){var t__941__auto___1206 = e1200;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",81,new cljs.core.Keyword(null,"error","error",-978969032),39,175,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Zoop"),175,t__941__auto___1206,null]));
}
try{var values__890__auto___1207 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,k,null,(1),null)),(2),null));
var result__891__auto___1208 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1207);
if(cljs.core.truth_(result__891__auto___1208)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",68,new cljs.core.Keyword(null,"pass","pass",1574159993),39,176,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),new cljs.core.Symbol(null,"k","k",-505765866,null)),176,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1207),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",68,new cljs.core.Keyword(null,"fail","fail",1706214930),39,176,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),new cljs.core.Symbol(null,"k","k",-505765866,null)),176,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1207),null,(1),null)),(2),null)),null]));
}

}catch (e1201){var t__941__auto___1209 = e1201;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",68,new cljs.core.Keyword(null,"error","error",-978969032),39,176,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),new cljs.core.Symbol(null,"k","k",-505765866,null)),176,t__941__auto___1209,null]));
}
return done.call(null);
} else {
return null;
}
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1196.prototype.apply = (function (self__,args1199){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1199)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1196.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
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
try{var values__890__auto___1210 = (new cljs.core.List(null,indexed.db.primary_key.call(null,cursor),(new cljs.core.List(null,"Zoop",null,(1),null)),(2),null));
var result__891__auto___1211 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1210);
if(cljs.core.truth_(result__891__auto___1211)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",81,new cljs.core.Keyword(null,"pass","pass",1574159993),39,175,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Zoop"),175,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1210),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",81,new cljs.core.Keyword(null,"fail","fail",1706214930),39,175,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Zoop"),175,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1210),null,(1),null)),(2),null)),null]));
}

}catch (e1202){var t__941__auto___1212 = e1202;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",81,new cljs.core.Keyword(null,"error","error",-978969032),39,175,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","primary-key","indexed.db/primary-key",1807309455,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),"Zoop"),175,t__941__auto___1212,null]));
}
try{var values__890__auto___1213 = (new cljs.core.List(null,indexed.db.key.call(null,cursor),(new cljs.core.List(null,k,null,(1),null)),(2),null));
var result__891__auto___1214 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1213);
if(cljs.core.truth_(result__891__auto___1214)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",68,new cljs.core.Keyword(null,"pass","pass",1574159993),39,176,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),new cljs.core.Symbol(null,"k","k",-505765866,null)),176,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1213),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",68,new cljs.core.Keyword(null,"fail","fail",1706214930),39,176,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),new cljs.core.Symbol(null,"k","k",-505765866,null)),176,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1213),null,(1),null)),(2),null)),null]));
}

}catch (e1203){var t__941__auto___1215 = e1203;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",68,new cljs.core.Keyword(null,"error","error",-978969032),39,176,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),new cljs.core.Symbol(null,"k","k",-505765866,null)),176,t__941__auto___1215,null]));
}
return done.call(null);
} else {
return null;
}
}
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1197","meta1197",-1667694608,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1196.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1196.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1196");

(indexed.db.cursor_test.t_indexed$db$cursor_test1196.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1196");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1196.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1196 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1196(meta1197){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1196(meta1197));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1196(null));
});

(indexed.db.cursor_test.test_continue_primary_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_continue_primary_key;},new cljs.core.Symbol("indexed.db.cursor-test","test-continue-primary-key","indexed.db.cursor-test/test-continue-primary-key",-1420434936,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-continue-primary-key","test-continue-primary-key",-1586660258,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",35,1,156,156,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_continue_primary_key)?indexed.db.cursor_test.test_continue_primary_key.cljs$lang$test:null)])));
indexed.db.cursor_test.test_delete = (function indexed$db$cursor_test$test_delete(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_delete.cljs$lang$var);
});
indexed.db.cursor_test.test_delete.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1216 = (function (meta1217){
this.meta1217 = meta1217;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1218,meta1217__$1){
var self__ = this;
var _1218__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1216(meta1217__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1218){
var self__ = this;
var _1218__$1 = this;
return self__.meta1217;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1216.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1216.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList","readwrite"),indexed.db.only.call(null,"Zoop")),"success",(function (e){
return indexed.db.on.call(null,indexed.db.delete$.call(null,indexed.db.test_util.cursor_with_value.call(null,e)),"success",done);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1216.prototype.apply = (function (self__,args1219){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1219)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1216.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList","readwrite"),indexed.db.only.call(null,"Zoop")),"success",(function (e){
return indexed.db.on.call(null,indexed.db.delete$.call(null,indexed.db.test_util.cursor_with_value.call(null,e)),"success",done);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1217","meta1217",935054635,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1216.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1216.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1216");

(indexed.db.cursor_test.t_indexed$db$cursor_test1216.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1216");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1216.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1216 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1216(meta1217){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1216(meta1217));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1216(null));
});

(indexed.db.cursor_test.test_delete.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_delete;},new cljs.core.Symbol("indexed.db.cursor-test","test-delete","indexed.db.cursor-test/test-delete",-1033862191,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-delete","test-delete",-945282561,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",21,1,179,179,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_delete)?indexed.db.cursor_test.test_delete.cljs$lang$test:null)])));
indexed.db.cursor_test.test_update = (function indexed$db$cursor_test$test_update(){
return cljs.test.test_var.call(null,indexed.db.cursor_test.test_update.cljs$lang$var);
});
indexed.db.cursor_test.test_update.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.cursor_test !== 'undefined') && (typeof indexed.db.cursor_test.t_indexed$db$cursor_test1220 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.cursor_test.t_indexed$db$cursor_test1220 = (function (meta1221){
this.meta1221 = meta1221;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.cursor_test.t_indexed$db$cursor_test1220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1222,meta1221__$1){
var self__ = this;
var _1222__$1 = this;
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1220(meta1221__$1));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1222){
var self__ = this;
var _1222__$1 = this;
return self__.meta1221;
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1220.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.cursor_test.t_indexed$db$cursor_test1220.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList","readwrite"),indexed.db.only.call(null,"Zoop")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var record = indexed.db.value.call(null,cursor);
(record.month = "April");

return indexed.db.on.call(null,indexed.db.update.call(null,cursor,record),"success",done);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1220.prototype.apply = (function (self__,args1223){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1223)));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1220.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.cursor_test._STAR_db),"toDoList","readwrite"),indexed.db.only.call(null,"Zoop")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var record = indexed.db.value.call(null,cursor);
(record.month = "April");

return indexed.db.on.call(null,indexed.db.update.call(null,cursor,record),"success",done);
}));
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1221","meta1221",1558280793,null)], null);
}));

(indexed.db.cursor_test.t_indexed$db$cursor_test1220.cljs$lang$type = true);

(indexed.db.cursor_test.t_indexed$db$cursor_test1220.cljs$lang$ctorStr = "indexed.db.cursor-test/t_indexed$db$cursor_test1220");

(indexed.db.cursor_test.t_indexed$db$cursor_test1220.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.cursor-test/t_indexed$db$cursor_test1220");
}));

/**
 * Positional factory function for indexed.db.cursor-test/t_indexed$db$cursor_test1220.
 */
indexed.db.cursor_test.__GT_t_indexed$db$cursor_test1220 = (function indexed$db$cursor_test$__GT_t_indexed$db$cursor_test1220(meta1221){
return (new indexed.db.cursor_test.t_indexed$db$cursor_test1220(meta1221));
});

}

return (new indexed.db.cursor_test.t_indexed$db$cursor_test1220(null));
});

(indexed.db.cursor_test.test_update.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.cursor_test.test_update;},new cljs.core.Symbol("indexed.db.cursor-test","test-update","indexed.db.cursor-test/test-update",-971315878,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.cursor-test","indexed.db.cursor-test",802784125,null),new cljs.core.Symbol(null,"test-update","test-update",1008879396,null),"/Users/brian/projects/indexed.db/test/indexed/db/cursor_test.cljs",21,1,191,191,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.cursor_test.test_update)?indexed.db.cursor_test.test_update.cljs$lang$test:null)])));

//# sourceMappingURL=cursor_test.js.map
