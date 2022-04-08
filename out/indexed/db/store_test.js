// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('indexed.db.store_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('indexed.db');
goog.require('indexed.db.test_util');
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test._STAR_db !== 'undefined')){
} else {
indexed.db.store_test._STAR_db = cljs.core.atom.call(null,null);
}
indexed.db.store_test.database_name = "indexed.db.store-test";
indexed.db.store_test.database_version = (1);
indexed.db.store_test.cljs_test_once_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1292 = (function (meta1293){
this.meta1293 = meta1293;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1294,meta1293__$1){
var self__ = this;
var _1294__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1292(meta1293__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1294){
var self__ = this;
var _1294__$1 = this;
return self__.meta1293;
}));

(indexed.db.store_test.t_indexed$db$store_test1292.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1292.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.test_util.create_task_db.call(null,indexed.db.store_test._STAR_db,done,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","name","db/name",1843678379),indexed.db.store_test.database_name,new cljs.core.Keyword("db","version","db/version",425264924),indexed.db.store_test.database_version], null));
}));

(indexed.db.store_test.t_indexed$db$store_test1292.prototype.apply = (function (self__,args1295){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1295)));
}));

(indexed.db.store_test.t_indexed$db$store_test1292.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.test_util.create_task_db.call(null,indexed.db.store_test._STAR_db,done,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","name","db/name",1843678379),indexed.db.store_test.database_name,new cljs.core.Keyword("db","version","db/version",425264924),indexed.db.store_test.database_version], null));
}));

(indexed.db.store_test.t_indexed$db$store_test1292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1293","meta1293",1221371847,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1292.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1292.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1292");

(indexed.db.store_test.t_indexed$db$store_test1292.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1292");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1292.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1292 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1292(meta1293){
return (new indexed.db.store_test.t_indexed$db$store_test1292(meta1293));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1292(null));
})], null)], null);
indexed.db.store_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1296 = (function (meta1297){
this.meta1297 = meta1297;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1298,meta1297__$1){
var self__ = this;
var _1298__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1296(meta1297__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1298){
var self__ = this;
var _1298__$1 = this;
return self__.meta1297;
}));

(indexed.db.store_test.t_indexed$db$store_test1296.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1296.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.test_util.seed_tasks.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),done);
}));

(indexed.db.store_test.t_indexed$db$store_test1296.prototype.apply = (function (self__,args1299){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1299)));
}));

(indexed.db.store_test.t_indexed$db$store_test1296.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.test_util.seed_tasks.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),done);
}));

(indexed.db.store_test.t_indexed$db$store_test1296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1297","meta1297",527379687,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1296.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1296.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1296");

(indexed.db.store_test.t_indexed$db$store_test1296.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1296");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1296.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1296 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1296(meta1297){
return (new indexed.db.store_test.t_indexed$db$store_test1296(meta1297));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1296(null));
}),new cljs.core.Keyword(null,"after","after",594996914),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1300 = (function (meta1301){
this.meta1301 = meta1301;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1302,meta1301__$1){
var self__ = this;
var _1302__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1300(meta1301__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1302){
var self__ = this;
var _1302__$1 = this;
return self__.meta1301;
}));

(indexed.db.store_test.t_indexed$db$store_test1300.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1300.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.test_util.reset_tasks.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),done);
}));

(indexed.db.store_test.t_indexed$db$store_test1300.prototype.apply = (function (self__,args1303){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1303)));
}));

(indexed.db.store_test.t_indexed$db$store_test1300.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.test_util.reset_tasks.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),done);
}));

(indexed.db.store_test.t_indexed$db$store_test1300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1301","meta1301",-1613062326,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1300.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1300.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1300");

(indexed.db.store_test.t_indexed$db$store_test1300.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1300");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1300.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1300 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1300(meta1301){
return (new indexed.db.store_test.t_indexed$db$store_test1300(meta1301));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1300(null));
})], null)], null);
indexed.db.store_test.test_index_names = (function indexed$db$store_test$test_index_names(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_index_names.cljs$lang$var);
});
indexed.db.store_test.test_index_names.cljs$lang$test = (function (){
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var index_names = cljs.core.set.call(null,indexed.db.index_names.call(null,todo_list));
try{var values__890__auto__ = (new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["hours",null,"deleteme",null,"notified",null,"minutes",null,"year",null,"month",null,"day",null], null), null),(new cljs.core.List(null,index_names,null,(1),null)),(2),null));
var result__891__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto__);
if(cljs.core.truth_(result__891__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",88,new cljs.core.Keyword(null,"pass","pass",1574159993),9,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["hours","null","deleteme","null","notified","null","minutes","null","year","null","month","null","day","null"], null), null),new cljs.core.Symbol(null,"index-names","index-names",888859443,null)),31,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",88,new cljs.core.Keyword(null,"fail","fail",1706214930),9,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["hours","null","deleteme","null","notified","null","minutes","null","year","null","month","null","day","null"], null), null),new cljs.core.Symbol(null,"index-names","index-names",888859443,null)),31,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto__),null,(1),null)),(2),null)),null]));
}

return result__891__auto__;
}catch (e1304){var t__941__auto__ = e1304;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",88,new cljs.core.Keyword(null,"error","error",-978969032),9,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["hours","null","deleteme","null","notified","null","minutes","null","year","null","month","null","day","null"], null), null),new cljs.core.Symbol(null,"index-names","index-names",888859443,null)),31,t__941__auto__,null]));
}});

(indexed.db.store_test.test_index_names.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_index_names;},new cljs.core.Symbol("indexed.db.store-test","test-index-names","indexed.db.store-test/test-index-names",-1511138740,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-index-names","test-index-names",-615813221,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",26,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_index_names)?indexed.db.store_test.test_index_names.cljs$lang$test:null)])));
indexed.db.store_test.test_key_path = (function indexed$db$store_test$test_key_path(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_key_path.cljs$lang$var);
});
indexed.db.store_test.test_key_path.cljs$lang$test = (function (){
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
try{var values__890__auto__ = (new cljs.core.List(null,"taskTitle",(new cljs.core.List(null,indexed.db.key_path.call(null,todo_list),null,(1),null)),(2),null));
var result__891__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto__);
if(cljs.core.truth_(result__891__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",56,new cljs.core.Keyword(null,"pass","pass",1574159993),9,35,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"taskTitle",cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),35,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",56,new cljs.core.Keyword(null,"fail","fail",1706214930),9,35,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"taskTitle",cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto__),null,(1),null)),(2),null)),null]));
}

return result__891__auto__;
}catch (e1305){var t__941__auto__ = e1305;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",56,new cljs.core.Keyword(null,"error","error",-978969032),9,35,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"taskTitle",cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),35,t__941__auto__,null]));
}});

(indexed.db.store_test.test_key_path.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_key_path;},new cljs.core.Symbol("indexed.db.store-test","test-key-path","indexed.db.store-test/test-key-path",-1489240533,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-key-path","test-key-path",-1648344328,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",23,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_key_path)?indexed.db.store_test.test_key_path.cljs$lang$test:null)])));
indexed.db.store_test.test_key_path_as_sequence = (function indexed$db$store_test$test_key_path_as_sequence(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_key_path_as_sequence.cljs$lang$var);
});
indexed.db.store_test.test_key_path_as_sequence.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1306 = (function (meta1307){
this.meta1307 = meta1307;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1308,meta1307__$1){
var self__ = this;
var _1308__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1306(meta1307__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1308){
var self__ = this;
var _1308__$1 = this;
return self__.meta1307;
}));

(indexed.db.store_test.t_indexed$db$store_test1306.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1306.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.test_util.test_connect.call(null,[indexed.db.store_test.database_name,"-key-test"].join(''),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
var db = indexed.db.create_database.call(null,idb);
var txn = indexed.db.transaction.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null));
var test_store = indexed.db.object_store.call(null,txn,"test-store");
try{var values__890__auto___1312 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),(new cljs.core.List(null,indexed.db.key_path.call(null,test_store),null,(1),null)),(2),null));
var result__891__auto___1313 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1312);
if(cljs.core.truth_(result__891__auto___1313)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),14,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"test-store","test-store",-422507518,null))),48,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1312),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),14,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"test-store","test-store",-422507518,null))),48,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1312),null,(1),null)),(2),null)),null]));
}

}catch (e1310){var t__941__auto___1314 = e1310;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),14,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"test-store","test-store",-422507518,null))),48,t__941__auto___1314,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
return indexed.db.create_object_store.call(null,db,"test-store",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-path","key-path",878473308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)], null));
})], null));
}));

(indexed.db.store_test.t_indexed$db$store_test1306.prototype.apply = (function (self__,args1309){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1309)));
}));

(indexed.db.store_test.t_indexed$db$store_test1306.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.test_util.test_connect.call(null,[indexed.db.store_test.database_name,"-key-test"].join(''),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
var db = indexed.db.create_database.call(null,idb);
var txn = indexed.db.transaction.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null));
var test_store = indexed.db.object_store.call(null,txn,"test-store");
try{var values__890__auto___1315 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),(new cljs.core.List(null,indexed.db.key_path.call(null,test_store),null,(1),null)),(2),null));
var result__891__auto___1316 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1315);
if(cljs.core.truth_(result__891__auto___1316)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),14,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"test-store","test-store",-422507518,null))),48,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1315),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),14,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"test-store","test-store",-422507518,null))),48,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1315),null,(1),null)),(2),null)),null]));
}

}catch (e1311){var t__941__auto___1317 = e1311;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),14,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"test-store","test-store",-422507518,null))),48,t__941__auto___1317,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
return indexed.db.create_object_store.call(null,db,"test-store",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-path","key-path",878473308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)], null));
})], null));
}));

(indexed.db.store_test.t_indexed$db$store_test1306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1307","meta1307",-1271745501,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1306.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1306.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1306");

(indexed.db.store_test.t_indexed$db$store_test1306.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1306");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1306.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1306 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1306(meta1307){
return (new indexed.db.store_test.t_indexed$db$store_test1306(meta1307));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1306(null));
});

(indexed.db.store_test.test_key_path_as_sequence.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_key_path_as_sequence;},new cljs.core.Symbol("indexed.db.store-test","test-key-path-as-sequence","indexed.db.store-test/test-key-path-as-sequence",1154231998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-key-path-as-sequence","test-key-path-as-sequence",-1557530259,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",35,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_key_path_as_sequence)?indexed.db.store_test.test_key_path_as_sequence.cljs$lang$test:null)])));
indexed.db.store_test.test_name = (function indexed$db$store_test$test_name(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_name.cljs$lang$var);
});
indexed.db.store_test.test_name.cljs$lang$test = (function (){
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
try{var values__890__auto__ = (new cljs.core.List(null,"toDoList",(new cljs.core.List(null,cljs.core.name.call(null,todo_list),null,(1),null)),(2),null));
var result__891__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto__);
if(cljs.core.truth_(result__891__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),9,58,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),58,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),9,58,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),58,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto__),null,(1),null)),(2),null)),null]));
}

return result__891__auto__;
}catch (e1318){var t__941__auto__ = e1318;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),9,58,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),58,t__941__auto__,null]));
}});

(indexed.db.store_test.test_name.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_name;},new cljs.core.Symbol("indexed.db.store-test","test-name","indexed.db.store-test/test-name",-496382899,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-name","test-name",964935614,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",19,1,56,56,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_name)?indexed.db.store_test.test_name.cljs$lang$test:null)])));
indexed.db.store_test.test_getting_transaction = (function indexed$db$store_test$test_getting_transaction(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_getting_transaction.cljs$lang$var);
});
indexed.db.store_test.test_getting_transaction.cljs$lang$test = (function (){
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var txn = indexed.db.get_transaction.call(null,todo_list);
try{var values__890__auto__ = (new cljs.core.List(null,txn,null,(1),null));
var result__891__auto__ = cljs.core.apply.call(null,indexed.db.transaction_QMARK_,values__890__auto__);
if(cljs.core.truth_(result__891__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),9,63,cljs.core.list(new cljs.core.Symbol("indexed.db","transaction?","indexed.db/transaction?",487217423,null),new cljs.core.Symbol(null,"txn","txn",1171326738,null)),63,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","transaction?","indexed.db/transaction?",487217423,null),values__890__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),9,63,cljs.core.list(new cljs.core.Symbol("indexed.db","transaction?","indexed.db/transaction?",487217423,null),new cljs.core.Symbol(null,"txn","txn",1171326738,null)),63,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","transaction?","indexed.db/transaction?",487217423,null),values__890__auto__),null,(1),null)),(2),null)),null]));
}

return result__891__auto__;
}catch (e1319){var t__941__auto__ = e1319;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),9,63,cljs.core.list(new cljs.core.Symbol("indexed.db","transaction?","indexed.db/transaction?",487217423,null),new cljs.core.Symbol(null,"txn","txn",1171326738,null)),63,t__941__auto__,null]));
}});

(indexed.db.store_test.test_getting_transaction.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_getting_transaction;},new cljs.core.Symbol("indexed.db.store-test","test-getting-transaction","indexed.db.store-test/test-getting-transaction",-1511866215,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-getting-transaction","test-getting-transaction",1115469270,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",34,1,60,60,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_getting_transaction)?indexed.db.store_test.test_getting_transaction.cljs$lang$test:null)])));
indexed.db.store_test.test_auto_increment_QMARK_ = (function indexed$db$store_test$test_auto_increment_QMARK_(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_auto_increment_QMARK_.cljs$lang$var);
});
indexed.db.store_test.test_auto_increment_QMARK_.cljs$lang$test = (function (){
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
try{var values__890__auto__ = (new cljs.core.List(null,indexed.db.auto_increment_QMARK_.call(null,todo_list),null,(1),null));
var result__891__auto__ = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__890__auto__);
if(cljs.core.truth_(result__891__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",56,new cljs.core.Keyword(null,"pass","pass",1574159993),9,67,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","auto-increment?","indexed.db/auto-increment?",1969303482,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),67,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__890__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",56,new cljs.core.Keyword(null,"fail","fail",1706214930),9,67,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","auto-increment?","indexed.db/auto-increment?",1969303482,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),67,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__890__auto__),null,(1),null)),(2),null)),null]));
}

return result__891__auto__;
}catch (e1320){var t__941__auto__ = e1320;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",56,new cljs.core.Keyword(null,"error","error",-978969032),9,67,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","auto-increment?","indexed.db/auto-increment?",1969303482,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),67,t__941__auto__,null]));
}});

(indexed.db.store_test.test_auto_increment_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_auto_increment_QMARK_;},new cljs.core.Symbol("indexed.db.store-test","test-auto-increment?","indexed.db.store-test/test-auto-increment?",-1596843157,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-auto-increment?","test-auto-increment?",-29866054,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",30,1,65,65,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_auto_increment_QMARK_)?indexed.db.store_test.test_auto_increment_QMARK_.cljs$lang$test:null)])));
indexed.db.store_test.test_count_all = (function indexed$db$store_test$test_count_all(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_count_all.cljs$lang$var);
});
indexed.db.store_test.test_count_all.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1321 = (function (meta1322){
this.meta1322 = meta1322;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1323,meta1322__$1){
var self__ = this;
var _1323__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1321(meta1322__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1323){
var self__ = this;
var _1323__$1 = this;
return self__.meta1322;
}));

(indexed.db.store_test.t_indexed$db$store_test1321.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1321.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.count.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList")),"success",(function (e){
try{var values__890__auto___1327 = (new cljs.core.List(null,(3),(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)),null,(1),null)),(2),null));
var result__891__auto___1328 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1327);
if(cljs.core.truth_(result__891__auto___1328)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),39,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),75,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1327),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),39,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),75,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1327),null,(1),null)),(2),null)),null]));
}

}catch (e1325){var t__941__auto___1329 = e1325;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),39,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),75,t__941__auto___1329,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1321.prototype.apply = (function (self__,args1324){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1324)));
}));

(indexed.db.store_test.t_indexed$db$store_test1321.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.count.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList")),"success",(function (e){
try{var values__890__auto___1330 = (new cljs.core.List(null,(3),(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)),null,(1),null)),(2),null));
var result__891__auto___1331 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1330);
if(cljs.core.truth_(result__891__auto___1331)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),39,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),75,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1330),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),39,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),75,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1330),null,(1),null)),(2),null)),null]));
}

}catch (e1326){var t__941__auto___1332 = e1326;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),39,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),75,t__941__auto___1332,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1322","meta1322",1259898868,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1321.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1321.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1321");

(indexed.db.store_test.t_indexed$db$store_test1321.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1321");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1321.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1321 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1321(meta1322){
return (new indexed.db.store_test.t_indexed$db$store_test1321(meta1322));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1321(null));
});

(indexed.db.store_test.test_count_all.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_count_all;},new cljs.core.Symbol("indexed.db.store-test","test-count-all","indexed.db.store-test/test-count-all",1547176879,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-count-all","test-count-all",-1163739492,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",24,1,69,69,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_count_all)?indexed.db.store_test.test_count_all.cljs$lang$test:null)])));
indexed.db.store_test.test_count_by_key = (function indexed$db$store_test$test_count_by_key(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_count_by_key.cljs$lang$var);
});
indexed.db.store_test.test_count_by_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1333 = (function (meta1334){
this.meta1334 = meta1334;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1335,meta1334__$1){
var self__ = this;
var _1335__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1333(meta1334__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1335){
var self__ = this;
var _1335__$1 = this;
return self__.meta1334;
}));

(indexed.db.store_test.t_indexed$db$store_test1333.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1333.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.count.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),"Walk dog"),"success",(function (e){
try{var values__890__auto___1339 = (new cljs.core.List(null,(1),(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)),null,(1),null)),(2),null));
var result__891__auto___1340 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1339);
if(cljs.core.truth_(result__891__auto___1340)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),39,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),84,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1339),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),39,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),84,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1339),null,(1),null)),(2),null)),null]));
}

}catch (e1337){var t__941__auto___1341 = e1337;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),39,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),84,t__941__auto___1341,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1333.prototype.apply = (function (self__,args1336){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1336)));
}));

(indexed.db.store_test.t_indexed$db$store_test1333.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.count.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),"Walk dog"),"success",(function (e){
try{var values__890__auto___1342 = (new cljs.core.List(null,(1),(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)),null,(1),null)),(2),null));
var result__891__auto___1343 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1342);
if(cljs.core.truth_(result__891__auto___1343)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),39,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),84,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1342),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),39,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),84,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1342),null,(1),null)),(2),null)),null]));
}

}catch (e1338){var t__941__auto___1344 = e1338;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),39,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),84,t__941__auto___1344,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1334","meta1334",259977313,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1333.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1333.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1333");

(indexed.db.store_test.t_indexed$db$store_test1333.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1333");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1333.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1333 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1333(meta1334){
return (new indexed.db.store_test.t_indexed$db$store_test1333(meta1334));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1333(null));
});

(indexed.db.store_test.test_count_by_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_count_by_key;},new cljs.core.Symbol("indexed.db.store-test","test-count-by-key","indexed.db.store-test/test-count-by-key",1129210284,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-count-by-key","test-count-by-key",-1109150469,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",27,1,78,78,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_count_by_key)?indexed.db.store_test.test_count_by_key.cljs$lang$test:null)])));
indexed.db.store_test.test_delete_by_key = (function indexed$db$store_test$test_delete_by_key(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_delete_by_key.cljs$lang$var);
});
indexed.db.store_test.test_delete_by_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1345 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1345 = (function (meta1346){
this.meta1346 = meta1346;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1347,meta1346__$1){
var self__ = this;
var _1347__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1345(meta1346__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1347){
var self__ = this;
var _1347__$1 = this;
return self__.meta1346;
}));

(indexed.db.store_test.t_indexed$db$store_test1345.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1345.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
var txn = indexed.db.test_util.transaction.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"readwrite");
var todo_list = indexed.db.object_store.call(null,txn,"toDoList");
indexed.db.delete$.call(null,todo_list,"Walk dog");

return indexed.db.on.call(null,txn,"complete",(function (){
try{var values__890__auto___1351 = (new cljs.core.List(null,true,null,(1),null));
var result__891__auto___1352 = cljs.core.apply.call(null,cljs.core.true_QMARK_,values__890__auto___1351);
if(cljs.core.truth_(result__891__auto___1352)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",54,new cljs.core.Keyword(null,"pass","pass",1574159993),42,94,cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),true),94,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__890__auto___1351),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",54,new cljs.core.Keyword(null,"fail","fail",1706214930),42,94,cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),true),94,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__890__auto___1351),null,(1),null)),(2),null)),null]));
}

}catch (e1349){var t__941__auto___1353 = e1349;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",54,new cljs.core.Keyword(null,"error","error",-978969032),42,94,cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),true),94,t__941__auto___1353,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1345.prototype.apply = (function (self__,args1348){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1348)));
}));

(indexed.db.store_test.t_indexed$db$store_test1345.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
var txn = indexed.db.test_util.transaction.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"readwrite");
var todo_list = indexed.db.object_store.call(null,txn,"toDoList");
indexed.db.delete$.call(null,todo_list,"Walk dog");

return indexed.db.on.call(null,txn,"complete",(function (){
try{var values__890__auto___1354 = (new cljs.core.List(null,true,null,(1),null));
var result__891__auto___1355 = cljs.core.apply.call(null,cljs.core.true_QMARK_,values__890__auto___1354);
if(cljs.core.truth_(result__891__auto___1355)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",54,new cljs.core.Keyword(null,"pass","pass",1574159993),42,94,cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),true),94,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__890__auto___1354),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",54,new cljs.core.Keyword(null,"fail","fail",1706214930),42,94,cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),true),94,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__890__auto___1354),null,(1),null)),(2),null)),null]));
}

}catch (e1350){var t__941__auto___1356 = e1350;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",54,new cljs.core.Keyword(null,"error","error",-978969032),42,94,cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),true),94,t__941__auto___1356,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1346","meta1346",1393145481,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1345.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1345.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1345");

(indexed.db.store_test.t_indexed$db$store_test1345.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1345");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1345.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1345 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1345(meta1346){
return (new indexed.db.store_test.t_indexed$db$store_test1345(meta1346));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1345(null));
});

(indexed.db.store_test.test_delete_by_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_delete_by_key;},new cljs.core.Symbol("indexed.db.store-test","test-delete-by-key","indexed.db.store-test/test-delete-by-key",867697009,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-delete-by-key","test-delete-by-key",-623481440,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",28,1,87,87,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_delete_by_key)?indexed.db.store_test.test_delete_by_key.cljs$lang$test:null)])));
indexed.db.store_test.test_delete_index = (function indexed$db$store_test$test_delete_index(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_delete_index.cljs$lang$var);
});
indexed.db.store_test.test_delete_index.cljs$lang$test = (function (){
indexed.db.close.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db));

if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1357 = (function (meta1358){
this.meta1358 = meta1358;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1359,meta1358__$1){
var self__ = this;
var _1359__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1357(meta1358__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1359){
var self__ = this;
var _1359__$1 = this;
return self__.meta1358;
}));

(indexed.db.store_test.t_indexed$db$store_test1357.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1357.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.test_util.open.call(null,indexed.db.store_test.database_name,(indexed.db.store_test.database_version + (1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
cljs.core.reset_BANG_.call(null,indexed.db.store_test._STAR_db,indexed.db.create_database.call(null,idb));

var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var names = cljs.core.set.call(null,indexed.db.index_names.call(null,todo_list));
try{var values__890__auto___1363 = (new cljs.core.List(null,cljs.core.contains_QMARK_.call(null,names,"deleteme"),null,(1),null));
var result__891__auto___1364 = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__890__auto___1363);
if(cljs.core.truth_(result__891__auto___1364)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",51,new cljs.core.Keyword(null,"pass","pass",1574159993),14,109,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"names","names",-302543131,null),"deleteme")),109,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__890__auto___1363),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",51,new cljs.core.Keyword(null,"fail","fail",1706214930),14,109,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"names","names",-302543131,null),"deleteme")),109,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__890__auto___1363),null,(1),null)),(2),null)),null]));
}

}catch (e1361){var t__941__auto___1365 = e1361;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",51,new cljs.core.Keyword(null,"error","error",-978969032),14,109,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"names","names",-302543131,null),"deleteme")),109,t__941__auto___1365,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (_,txn){
var todo_list = indexed.db.object_store.call(null,txn,"toDoList");
return indexed.db.delete_index.call(null,todo_list,"deleteme");
})], null));
}));

(indexed.db.store_test.t_indexed$db$store_test1357.prototype.apply = (function (self__,args1360){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1360)));
}));

(indexed.db.store_test.t_indexed$db$store_test1357.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.test_util.open.call(null,indexed.db.store_test.database_name,(indexed.db.store_test.database_version + (1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
cljs.core.reset_BANG_.call(null,indexed.db.store_test._STAR_db,indexed.db.create_database.call(null,idb));

var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var names = cljs.core.set.call(null,indexed.db.index_names.call(null,todo_list));
try{var values__890__auto___1366 = (new cljs.core.List(null,cljs.core.contains_QMARK_.call(null,names,"deleteme"),null,(1),null));
var result__891__auto___1367 = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__890__auto___1366);
if(cljs.core.truth_(result__891__auto___1367)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",51,new cljs.core.Keyword(null,"pass","pass",1574159993),14,109,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"names","names",-302543131,null),"deleteme")),109,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__890__auto___1366),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",51,new cljs.core.Keyword(null,"fail","fail",1706214930),14,109,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"names","names",-302543131,null),"deleteme")),109,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__890__auto___1366),null,(1),null)),(2),null)),null]));
}

}catch (e1362){var t__941__auto___1368 = e1362;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",51,new cljs.core.Keyword(null,"error","error",-978969032),14,109,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"names","names",-302543131,null),"deleteme")),109,t__941__auto___1368,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (_,txn){
var todo_list = indexed.db.object_store.call(null,txn,"toDoList");
return indexed.db.delete_index.call(null,todo_list,"deleteme");
})], null));
}));

(indexed.db.store_test.t_indexed$db$store_test1357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1358","meta1358",-1830568056,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1357.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1357.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1357");

(indexed.db.store_test.t_indexed$db$store_test1357.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1357");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1357.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1357 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1357(meta1358){
return (new indexed.db.store_test.t_indexed$db$store_test1357(meta1358));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1357(null));
});

(indexed.db.store_test.test_delete_index.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_delete_index;},new cljs.core.Symbol("indexed.db.store-test","test-delete-index","indexed.db.store-test/test-delete-index",772666210,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-delete-index","test-delete-index",128159665,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",27,1,97,97,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_delete_index)?indexed.db.store_test.test_delete_index.cljs$lang$test:null)])));
indexed.db.store_test.test_get = (function indexed$db$store_test$test_get(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get.cljs$lang$var);
});
indexed.db.store_test.test_get.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1369 = (function (meta1370){
this.meta1370 = meta1370;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1371,meta1370__$1){
var self__ = this;
var _1371__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1369(meta1370__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1371){
var self__ = this;
var _1371__$1 = this;
return self__.meta1370;
}));

(indexed.db.store_test.t_indexed$db$store_test1369.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1369.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),"Walk dog"),"success",(function (e){
try{var values__890__auto___1375 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)).taskTitle,null,(1),null)),(2),null));
var result__891__auto___1376 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1375);
if(cljs.core.truth_(result__891__auto___1376)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",93,new cljs.core.Keyword(null,"pass","pass",1574159993),39,123,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),124,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1375),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",93,new cljs.core.Keyword(null,"fail","fail",1706214930),39,123,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),124,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1375),null,(1),null)),(2),null)),null]));
}

}catch (e1373){var t__941__auto___1377 = e1373;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",93,new cljs.core.Keyword(null,"error","error",-978969032),39,123,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),124,t__941__auto___1377,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1369.prototype.apply = (function (self__,args1372){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1372)));
}));

(indexed.db.store_test.t_indexed$db$store_test1369.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.get.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),"Walk dog"),"success",(function (e){
try{var values__890__auto___1378 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)).taskTitle,null,(1),null)),(2),null));
var result__891__auto___1379 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1378);
if(cljs.core.truth_(result__891__auto___1379)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",93,new cljs.core.Keyword(null,"pass","pass",1574159993),39,123,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),124,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1378),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",93,new cljs.core.Keyword(null,"fail","fail",1706214930),39,123,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),124,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1378),null,(1),null)),(2),null)),null]));
}

}catch (e1374){var t__941__auto___1380 = e1374;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",93,new cljs.core.Keyword(null,"error","error",-978969032),39,123,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),124,t__941__auto___1380,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1370","meta1370",-210739514,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1369.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1369.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1369");

(indexed.db.store_test.t_indexed$db$store_test1369.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1369");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1369.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1369 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1369(meta1370){
return (new indexed.db.store_test.t_indexed$db$store_test1369(meta1370));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1369(null));
});

(indexed.db.store_test.test_get.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get;},new cljs.core.Symbol("indexed.db.store-test","test-get","indexed.db.store-test/test-get",-595112733,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get","test-get",939189138,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",18,1,117,117,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get)?indexed.db.store_test.test_get.cljs$lang$test:null)])));
indexed.db.store_test.test_get_key = (function indexed$db$store_test$test_get_key(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get_key.cljs$lang$var);
});
indexed.db.store_test.test_get_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1381 = (function (meta1382){
this.meta1382 = meta1382;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1383,meta1382__$1){
var self__ = this;
var _1383__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1381(meta1382__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1383){
var self__ = this;
var _1383__$1 = this;
return self__.meta1382;
}));

(indexed.db.store_test.t_indexed$db$store_test1381.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1381.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get_key.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),"Walk dog"),"success",(function (e){
try{var values__890__auto___1387 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)),null,(1),null)),(2),null));
var result__891__auto___1388 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1387);
if(cljs.core.truth_(result__891__auto___1388)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"pass","pass",1574159993),39,133,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),134,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1387),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"fail","fail",1706214930),39,133,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),134,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1387),null,(1),null)),(2),null)),null]));
}

}catch (e1385){var t__941__auto___1389 = e1385;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"error","error",-978969032),39,133,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),134,t__941__auto___1389,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1381.prototype.apply = (function (self__,args1384){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1384)));
}));

(indexed.db.store_test.t_indexed$db$store_test1381.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.get_key.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),"Walk dog"),"success",(function (e){
try{var values__890__auto___1390 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)),null,(1),null)),(2),null));
var result__891__auto___1391 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1390);
if(cljs.core.truth_(result__891__auto___1391)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"pass","pass",1574159993),39,133,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),134,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1390),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"fail","fail",1706214930),39,133,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),134,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1390),null,(1),null)),(2),null)),null]));
}

}catch (e1386){var t__941__auto___1392 = e1386;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"error","error",-978969032),39,133,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),134,t__941__auto___1392,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1382","meta1382",325479583,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1381.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1381.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1381");

(indexed.db.store_test.t_indexed$db$store_test1381.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1381");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1381.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1381 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1381(meta1382){
return (new indexed.db.store_test.t_indexed$db$store_test1381(meta1382));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1381(null));
});

(indexed.db.store_test.test_get_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get_key;},new cljs.core.Symbol("indexed.db.store-test","test-get-key","indexed.db.store-test/test-get-key",-1618669695,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get-key","test-get-key",1180883632,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",22,1,127,127,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get_key)?indexed.db.store_test.test_get_key.cljs$lang$test:null)])));
indexed.db.store_test.test_get_all_no_key = (function indexed$db$store_test$test_get_all_no_key(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get_all_no_key.cljs$lang$var);
});
indexed.db.store_test.test_get_all_no_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1393 = (function (meta1394){
this.meta1394 = meta1394;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1395,meta1394__$1){
var self__ = this;
var _1395__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1393(meta1394__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1395){
var self__ = this;
var _1395__$1 = this;
return self__.meta1394;
}));

(indexed.db.store_test.t_indexed$db$store_test1393.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1393.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get_all.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList")),"success",(function (e){
try{var values__890__auto___1399 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__891__auto___1400 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1399);
if(cljs.core.truth_(result__891__auto___1400)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),144,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1399),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),144,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1399),null,(1),null)),(2),null)),null]));
}

}catch (e1397){var t__941__auto___1401 = e1397;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),144,t__941__auto___1401,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1393.prototype.apply = (function (self__,args1396){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1396)));
}));

(indexed.db.store_test.t_indexed$db$store_test1393.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.get_all.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList")),"success",(function (e){
try{var values__890__auto___1402 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__891__auto___1403 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1402);
if(cljs.core.truth_(result__891__auto___1403)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),144,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1402),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),144,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1402),null,(1),null)),(2),null)),null]));
}

}catch (e1398){var t__941__auto___1404 = e1398;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),144,t__941__auto___1404,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1394","meta1394",765415277,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1393.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1393.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1393");

(indexed.db.store_test.t_indexed$db$store_test1393.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1393");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1393.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1393 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1393(meta1394){
return (new indexed.db.store_test.t_indexed$db$store_test1393(meta1394));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1393(null));
});

(indexed.db.store_test.test_get_all_no_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get_all_no_key;},new cljs.core.Symbol("indexed.db.store-test","test-get-all-no-key","indexed.db.store-test/test-get-all-no-key",1360171050,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get-all-no-key","test-get-all-no-key",1995753243,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",29,1,137,137,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get_all_no_key)?indexed.db.store_test.test_get_all_no_key.cljs$lang$test:null)])));
indexed.db.store_test.test_get_all_with_key = (function indexed$db$store_test$test_get_all_with_key(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get_all_with_key.cljs$lang$var);
});
indexed.db.store_test.test_get_all_with_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1405 = (function (meta1406){
this.meta1406 = meta1406;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1407,meta1406__$1){
var self__ = this;
var _1407__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1405(meta1406__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1407){
var self__ = this;
var _1407__$1 = this;
return self__.meta1406;
}));

(indexed.db.store_test.t_indexed$db$store_test1405.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1405.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get_all.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog")),"success",(function (e){
try{var values__890__auto___1411 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__891__auto___1412 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1411);
if(cljs.core.truth_(result__891__auto___1412)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),154,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1411),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),154,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1411),null,(1),null)),(2),null)),null]));
}

}catch (e1409){var t__941__auto___1413 = e1409;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),154,t__941__auto___1413,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1405.prototype.apply = (function (self__,args1408){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1408)));
}));

(indexed.db.store_test.t_indexed$db$store_test1405.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.get_all.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog")),"success",(function (e){
try{var values__890__auto___1414 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__891__auto___1415 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1414);
if(cljs.core.truth_(result__891__auto___1415)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),154,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1414),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),154,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1414),null,(1),null)),(2),null)),null]));
}

}catch (e1410){var t__941__auto___1416 = e1410;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),154,t__941__auto___1416,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1406","meta1406",1242892738,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1405.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1405.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1405");

(indexed.db.store_test.t_indexed$db$store_test1405.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1405");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1405.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1405 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1405(meta1406){
return (new indexed.db.store_test.t_indexed$db$store_test1405(meta1406));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1405(null));
});

(indexed.db.store_test.test_get_all_with_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get_all_with_key;},new cljs.core.Symbol("indexed.db.store-test","test-get-all-with-key","indexed.db.store-test/test-get-all-with-key",1081015886,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get-all-with-key","test-get-all-with-key",1763005373,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",31,1,147,147,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get_all_with_key)?indexed.db.store_test.test_get_all_with_key.cljs$lang$test:null)])));
indexed.db.store_test.test_get_all_with_key_and_count = (function indexed$db$store_test$test_get_all_with_key_and_count(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get_all_with_key_and_count.cljs$lang$var);
});
indexed.db.store_test.test_get_all_with_key_and_count.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1417 = (function (meta1418){
this.meta1418 = meta1418;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1419,meta1418__$1){
var self__ = this;
var _1419__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1417(meta1418__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1419){
var self__ = this;
var _1419__$1 = this;
return self__.meta1418;
}));

(indexed.db.store_test.t_indexed$db$store_test1417.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1417.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get_all.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog"),(2)),"success",(function (e){
try{var values__890__auto___1423 = (new cljs.core.List(null,(2),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__891__auto___1424 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1423);
if(cljs.core.truth_(result__891__auto___1424)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,163,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),164,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1423),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,163,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),164,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1423),null,(1),null)),(2),null)),null]));
}

}catch (e1421){var t__941__auto___1425 = e1421;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,163,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),164,t__941__auto___1425,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1417.prototype.apply = (function (self__,args1420){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1420)));
}));

(indexed.db.store_test.t_indexed$db$store_test1417.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.get_all.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog"),(2)),"success",(function (e){
try{var values__890__auto___1426 = (new cljs.core.List(null,(2),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__891__auto___1427 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1426);
if(cljs.core.truth_(result__891__auto___1427)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,163,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),164,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1426),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,163,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),164,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1426),null,(1),null)),(2),null)),null]));
}

}catch (e1422){var t__941__auto___1428 = e1422;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,163,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),164,t__941__auto___1428,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1418","meta1418",1258440308,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1417.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1417.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1417");

(indexed.db.store_test.t_indexed$db$store_test1417.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1417");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1417.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1417 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1417(meta1418){
return (new indexed.db.store_test.t_indexed$db$store_test1417(meta1418));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1417(null));
});

(indexed.db.store_test.test_get_all_with_key_and_count.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get_all_with_key_and_count;},new cljs.core.Symbol("indexed.db.store-test","test-get-all-with-key-and-count","indexed.db.store-test/test-get-all-with-key-and-count",1378207299,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get-all-with-key-and-count","test-get-all-with-key-and-count",727610226,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",41,1,157,157,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get_all_with_key_and_count)?indexed.db.store_test.test_get_all_with_key_and_count.cljs$lang$test:null)])));
indexed.db.store_test.test_get_all_keys_no_key = (function indexed$db$store_test$test_get_all_keys_no_key(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get_all_keys_no_key.cljs$lang$var);
});
indexed.db.store_test.test_get_all_keys_no_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1429 = (function (meta1430){
this.meta1430 = meta1430;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1431,meta1430__$1){
var self__ = this;
var _1431__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1429(meta1430__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1431){
var self__ = this;
var _1431__$1 = this;
return self__.meta1430;
}));

(indexed.db.store_test.t_indexed$db$store_test1429.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1429.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get_all_keys.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList")),"success",(function (e){
try{var values__890__auto___1435 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__891__auto___1436 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1435);
if(cljs.core.truth_(result__891__auto___1436)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,173,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),174,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1435),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,173,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),174,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1435),null,(1),null)),(2),null)),null]));
}

}catch (e1433){var t__941__auto___1437 = e1433;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,173,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),174,t__941__auto___1437,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1429.prototype.apply = (function (self__,args1432){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1432)));
}));

(indexed.db.store_test.t_indexed$db$store_test1429.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.get_all_keys.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList")),"success",(function (e){
try{var values__890__auto___1438 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__891__auto___1439 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1438);
if(cljs.core.truth_(result__891__auto___1439)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,173,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),174,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1438),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,173,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),174,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1438),null,(1),null)),(2),null)),null]));
}

}catch (e1434){var t__941__auto___1440 = e1434;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,173,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),174,t__941__auto___1440,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1430","meta1430",-477540074,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1429.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1429.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1429");

(indexed.db.store_test.t_indexed$db$store_test1429.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1429");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1429.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1429 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1429(meta1430){
return (new indexed.db.store_test.t_indexed$db$store_test1429(meta1430));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1429(null));
});

(indexed.db.store_test.test_get_all_keys_no_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get_all_keys_no_key;},new cljs.core.Symbol("indexed.db.store-test","test-get-all-keys-no-key","indexed.db.store-test/test-get-all-keys-no-key",-1318691818,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get-all-keys-no-key","test-get-all-keys-no-key",-1677989023,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",34,1,167,167,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get_all_keys_no_key)?indexed.db.store_test.test_get_all_keys_no_key.cljs$lang$test:null)])));
indexed.db.store_test.test_get_all_keys_with_key = (function indexed$db$store_test$test_get_all_keys_with_key(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get_all_keys_with_key.cljs$lang$var);
});
indexed.db.store_test.test_get_all_keys_with_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1441 = (function (meta1442){
this.meta1442 = meta1442;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1443,meta1442__$1){
var self__ = this;
var _1443__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1441(meta1442__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1443){
var self__ = this;
var _1443__$1 = this;
return self__.meta1442;
}));

(indexed.db.store_test.t_indexed$db$store_test1441.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1441.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get_all_keys.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog")),"success",(function (e){
try{var values__890__auto___1447 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__891__auto___1448 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1447);
if(cljs.core.truth_(result__891__auto___1448)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,183,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),184,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1447),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,183,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),184,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1447),null,(1),null)),(2),null)),null]));
}

}catch (e1445){var t__941__auto___1449 = e1445;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,183,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),184,t__941__auto___1449,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1441.prototype.apply = (function (self__,args1444){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1444)));
}));

(indexed.db.store_test.t_indexed$db$store_test1441.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.get_all_keys.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog")),"success",(function (e){
try{var values__890__auto___1450 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__891__auto___1451 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1450);
if(cljs.core.truth_(result__891__auto___1451)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,183,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),184,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1450),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,183,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),184,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1450),null,(1),null)),(2),null)),null]));
}

}catch (e1446){var t__941__auto___1452 = e1446;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,183,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),184,t__941__auto___1452,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1442","meta1442",133609200,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1441.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1441.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1441");

(indexed.db.store_test.t_indexed$db$store_test1441.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1441");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1441.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1441 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1441(meta1442){
return (new indexed.db.store_test.t_indexed$db$store_test1441(meta1442));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1441(null));
});

(indexed.db.store_test.test_get_all_keys_with_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get_all_keys_with_key;},new cljs.core.Symbol("indexed.db.store-test","test-get-all-keys-with-key","indexed.db.store-test/test-get-all-keys-with-key",692430145,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get-all-keys-with-key","test-get-all-keys-with-key",44300912,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",36,1,177,177,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get_all_keys_with_key)?indexed.db.store_test.test_get_all_keys_with_key.cljs$lang$test:null)])));
indexed.db.store_test.test_get_all_keys_with_key_and_count = (function indexed$db$store_test$test_get_all_keys_with_key_and_count(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get_all_keys_with_key_and_count.cljs$lang$var);
});
indexed.db.store_test.test_get_all_keys_with_key_and_count.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1453 = (function (meta1454){
this.meta1454 = meta1454;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1455,meta1454__$1){
var self__ = this;
var _1455__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1453(meta1454__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1455){
var self__ = this;
var _1455__$1 = this;
return self__.meta1454;
}));

(indexed.db.store_test.t_indexed$db$store_test1453.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1453.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get_all_keys.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog"),(2)),"success",(function (e){
try{var values__890__auto___1459 = (new cljs.core.List(null,(2),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__891__auto___1460 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1459);
if(cljs.core.truth_(result__891__auto___1460)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,193,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),194,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1459),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,193,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),194,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1459),null,(1),null)),(2),null)),null]));
}

}catch (e1457){var t__941__auto___1461 = e1457;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,193,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),194,t__941__auto___1461,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1453.prototype.apply = (function (self__,args1456){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1456)));
}));

(indexed.db.store_test.t_indexed$db$store_test1453.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.on.call(null,indexed.db.get_all_keys.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog"),(2)),"success",(function (e){
try{var values__890__auto___1462 = (new cljs.core.List(null,(2),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__891__auto___1463 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1462);
if(cljs.core.truth_(result__891__auto___1463)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,193,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),194,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1462),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,193,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),194,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1462),null,(1),null)),(2),null)),null]));
}

}catch (e1458){var t__941__auto___1464 = e1458;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,193,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),194,t__941__auto___1464,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1454","meta1454",2139981289,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1453.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1453.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1453");

(indexed.db.store_test.t_indexed$db$store_test1453.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1453");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1453.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1453 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1453(meta1454){
return (new indexed.db.store_test.t_indexed$db$store_test1453(meta1454));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1453(null));
});

(indexed.db.store_test.test_get_all_keys_with_key_and_count.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get_all_keys_with_key_and_count;},new cljs.core.Symbol("indexed.db.store-test","test-get-all-keys-with-key-and-count","indexed.db.store-test/test-get-all-keys-with-key-and-count",817233037,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get-all-keys-with-key-and-count","test-get-all-keys-with-key-and-count",-634417060,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",46,1,187,187,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get_all_keys_with_key_and_count)?indexed.db.store_test.test_get_all_keys_with_key_and_count.cljs$lang$test:null)])));
indexed.db.store_test.test_getting_an_index = (function indexed$db$store_test$test_getting_an_index(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_getting_an_index.cljs$lang$var);
});
indexed.db.store_test.test_getting_an_index.cljs$lang$test = (function (){
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var index = indexed.db.index.call(null,todo_list,"hours");
try{var values__890__auto___1469 = (new cljs.core.List(null,index,null,(1),null));
var result__891__auto___1470 = cljs.core.apply.call(null,indexed.db.index_QMARK_,values__890__auto___1469);
if(cljs.core.truth_(result__891__auto___1470)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",34,new cljs.core.Keyword(null,"pass","pass",1574159993),9,200,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"index","index",108845612,null)),200,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),values__890__auto___1469),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",34,new cljs.core.Keyword(null,"fail","fail",1706214930),9,200,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"index","index",108845612,null)),200,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),values__890__auto___1469),null,(1),null)),(2),null)),null]));
}

}catch (e1465){var t__941__auto___1471 = e1465;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",34,new cljs.core.Keyword(null,"error","error",-978969032),9,200,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"index","index",108845612,null)),200,t__941__auto___1471,null]));
}
try{var values__890__auto___1472 = (new cljs.core.List(null,indexed.db.unique_QMARK_.call(null,index),null,(1),null));
var result__891__auto___1473 = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__890__auto___1472);
if(cljs.core.truth_(result__891__auto___1473)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),9,201,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","unique?","indexed.db/unique?",957342823,null),new cljs.core.Symbol(null,"index","index",108845612,null))),201,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__890__auto___1472),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),9,201,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","unique?","indexed.db/unique?",957342823,null),new cljs.core.Symbol(null,"index","index",108845612,null))),201,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__890__auto___1472),null,(1),null)),(2),null)),null]));
}

}catch (e1466){var t__941__auto___1474 = e1466;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),9,201,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","unique?","indexed.db/unique?",957342823,null),new cljs.core.Symbol(null,"index","index",108845612,null))),201,t__941__auto___1474,null]));
}
try{var values__890__auto___1475 = (new cljs.core.List(null,indexed.db.multi_entry_QMARK_.call(null,index),null,(1),null));
var result__891__auto___1476 = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__890__auto___1475);
if(cljs.core.truth_(result__891__auto___1476)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",49,new cljs.core.Keyword(null,"pass","pass",1574159993),9,202,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","multi-entry?","indexed.db/multi-entry?",392415938,null),new cljs.core.Symbol(null,"index","index",108845612,null))),202,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__890__auto___1475),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",49,new cljs.core.Keyword(null,"fail","fail",1706214930),9,202,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","multi-entry?","indexed.db/multi-entry?",392415938,null),new cljs.core.Symbol(null,"index","index",108845612,null))),202,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__890__auto___1475),null,(1),null)),(2),null)),null]));
}

}catch (e1467){var t__941__auto___1477 = e1467;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",49,new cljs.core.Keyword(null,"error","error",-978969032),9,202,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","multi-entry?","indexed.db/multi-entry?",392415938,null),new cljs.core.Symbol(null,"index","index",108845612,null))),202,t__941__auto___1477,null]));
}
try{var values__890__auto__ = (new cljs.core.List(null,indexed.db.get_object_store.call(null,index),null,(1),null));
var result__891__auto__ = cljs.core.apply.call(null,indexed.db.store_QMARK_,values__890__auto__);
if(cljs.core.truth_(result__891__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",64,new cljs.core.Keyword(null,"pass","pass",1574159993),9,203,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-object-store","indexed.db/get-object-store",-457399816,null),new cljs.core.Symbol(null,"index","index",108845612,null))),203,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),values__890__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",64,new cljs.core.Keyword(null,"fail","fail",1706214930),9,203,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-object-store","indexed.db/get-object-store",-457399816,null),new cljs.core.Symbol(null,"index","index",108845612,null))),203,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),values__890__auto__),null,(1),null)),(2),null)),null]));
}

return result__891__auto__;
}catch (e1468){var t__941__auto__ = e1468;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",64,new cljs.core.Keyword(null,"error","error",-978969032),9,203,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-object-store","indexed.db/get-object-store",-457399816,null),new cljs.core.Symbol(null,"index","index",108845612,null))),203,t__941__auto__,null]));
}});

(indexed.db.store_test.test_getting_an_index.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_getting_an_index;},new cljs.core.Symbol("indexed.db.store-test","test-getting-an-index","indexed.db.store-test/test-getting-an-index",346376032,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-getting-an-index","test-getting-an-index",-339154401,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",31,1,197,197,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_getting_an_index)?indexed.db.store_test.test_getting_an_index.cljs$lang$test:null)])));
indexed.db.store_test.test_open_cursor_no_args = (function indexed$db$store_test$test_open_cursor_no_args(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_open_cursor_no_args.cljs$lang$var);
});
indexed.db.store_test.test_open_cursor_no_args.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1478 = (function (meta1479){
this.meta1479 = meta1479;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1480,meta1479__$1){
var self__ = this;
var _1480__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1478(meta1479__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1480){
var self__ = this;
var _1480__$1 = this;
return self__.meta1479;
}));

(indexed.db.store_test.t_indexed$db$store_test1478.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1478.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,todo_list),"success",(function (e){
var value = indexed.db.value.call(null,indexed.db.create_cursor_with_value.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))));
try{var values__890__auto___1484 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,value.taskTitle,null,(1),null)),(2),null));
var result__891__auto___1485 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1484);
if(cljs.core.truth_(result__891__auto___1485)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"pass","pass",1574159993),43,217,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),217,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1484),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"fail","fail",1706214930),43,217,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),217,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1484),null,(1),null)),(2),null)),null]));
}

}catch (e1482){var t__941__auto___1486 = e1482;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"error","error",-978969032),43,217,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),217,t__941__auto___1486,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1478.prototype.apply = (function (self__,args1481){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1481)));
}));

(indexed.db.store_test.t_indexed$db$store_test1478.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,todo_list),"success",(function (e){
var value = indexed.db.value.call(null,indexed.db.create_cursor_with_value.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))));
try{var values__890__auto___1487 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,value.taskTitle,null,(1),null)),(2),null));
var result__891__auto___1488 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1487);
if(cljs.core.truth_(result__891__auto___1488)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"pass","pass",1574159993),43,217,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),217,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1487),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"fail","fail",1706214930),43,217,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),217,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1487),null,(1),null)),(2),null)),null]));
}

}catch (e1483){var t__941__auto___1489 = e1483;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"error","error",-978969032),43,217,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),217,t__941__auto___1489,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1479","meta1479",441971158,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1478.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1478.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1478");

(indexed.db.store_test.t_indexed$db$store_test1478.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1478");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1478.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1478 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1478(meta1479){
return (new indexed.db.store_test.t_indexed$db$store_test1478(meta1479));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1478(null));
});

(indexed.db.store_test.test_open_cursor_no_args.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_open_cursor_no_args;},new cljs.core.Symbol("indexed.db.store-test","test-open-cursor-no-args","indexed.db.store-test/test-open-cursor-no-args",-531216855,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-open-cursor-no-args","test-open-cursor-no-args",-945253608,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",34,1,207,207,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_open_cursor_no_args)?indexed.db.store_test.test_open_cursor_no_args.cljs$lang$test:null)])));
indexed.db.store_test.test_open_cursor_with_query = (function indexed$db$store_test$test_open_cursor_with_query(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_open_cursor_with_query.cljs$lang$var);
});
indexed.db.store_test.test_open_cursor_with_query.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1490 = (function (meta1491){
this.meta1491 = meta1491;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1492,meta1491__$1){
var self__ = this;
var _1492__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1490(meta1491__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1492){
var self__ = this;
var _1492__$1 = this;
return self__.meta1491;
}));

(indexed.db.store_test.t_indexed$db$store_test1490.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1490.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,todo_list,indexed.db.bound.call(null,"Read that book","Walk dog")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__890__auto___1500 = (new cljs.core.List(null,cursor,null,(1),null));
var result__891__auto___1501 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__890__auto___1500);
if(cljs.core.truth_(result__891__auto___1501)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,231,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),231,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1500),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,231,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),231,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1500),null,(1),null)),(2),null)),null]));
}

}catch (e1494){var t__941__auto___1502 = e1494;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,231,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),231,t__941__auto___1502,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__890__auto___1503 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__891__auto___1504 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1503);
if(cljs.core.truth_(result__891__auto___1504)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"pass","pass",1574159993),65,235,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),235,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1503),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"fail","fail",1706214930),65,235,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),235,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1503),null,(1),null)),(2),null)),null]));
}

}catch (e1495){var t__941__auto___1505 = e1495;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"error","error",-978969032),65,235,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),235,t__941__auto___1505,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__890__auto___1506 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__891__auto___1507 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1506);
if(cljs.core.truth_(result__891__auto___1507)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",119,new cljs.core.Keyword(null,"pass","pass",1574159993),65,236,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),236,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1506),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",119,new cljs.core.Keyword(null,"fail","fail",1706214930),65,236,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),236,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1506),null,(1),null)),(2),null)),null]));
}

}catch (e1496){var t__941__auto___1508 = e1496;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",119,new cljs.core.Keyword(null,"error","error",-978969032),65,236,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),236,t__941__auto___1508,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1490.prototype.apply = (function (self__,args1493){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1493)));
}));

(indexed.db.store_test.t_indexed$db$store_test1490.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,todo_list,indexed.db.bound.call(null,"Read that book","Walk dog")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__890__auto___1509 = (new cljs.core.List(null,cursor,null,(1),null));
var result__891__auto___1510 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__890__auto___1509);
if(cljs.core.truth_(result__891__auto___1510)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,231,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),231,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1509),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,231,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),231,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1509),null,(1),null)),(2),null)),null]));
}

}catch (e1497){var t__941__auto___1511 = e1497;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,231,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),231,t__941__auto___1511,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__890__auto___1512 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__891__auto___1513 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1512);
if(cljs.core.truth_(result__891__auto___1513)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"pass","pass",1574159993),65,235,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),235,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1512),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"fail","fail",1706214930),65,235,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),235,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1512),null,(1),null)),(2),null)),null]));
}

}catch (e1498){var t__941__auto___1514 = e1498;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"error","error",-978969032),65,235,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),235,t__941__auto___1514,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__890__auto___1515 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__891__auto___1516 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1515);
if(cljs.core.truth_(result__891__auto___1516)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",119,new cljs.core.Keyword(null,"pass","pass",1574159993),65,236,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),236,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1515),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",119,new cljs.core.Keyword(null,"fail","fail",1706214930),65,236,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),236,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1515),null,(1),null)),(2),null)),null]));
}

}catch (e1499){var t__941__auto___1517 = e1499;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",119,new cljs.core.Keyword(null,"error","error",-978969032),65,236,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),236,t__941__auto___1517,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1491","meta1491",568578715,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1490.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1490.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1490");

(indexed.db.store_test.t_indexed$db$store_test1490.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1490");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1490.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1490 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1490(meta1491){
return (new indexed.db.store_test.t_indexed$db$store_test1490(meta1491));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1490(null));
});

(indexed.db.store_test.test_open_cursor_with_query.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_open_cursor_with_query;},new cljs.core.Symbol("indexed.db.store-test","test-open-cursor-with-query","indexed.db.store-test/test-open-cursor-with-query",46031861,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-open-cursor-with-query","test-open-cursor-with-query",-116073278,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",37,1,220,220,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_open_cursor_with_query)?indexed.db.store_test.test_open_cursor_with_query.cljs$lang$test:null)])));
indexed.db.store_test.test_open_cursor_with_query_and_direction = (function indexed$db$store_test$test_open_cursor_with_query_and_direction(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_open_cursor_with_query_and_direction.cljs$lang$var);
});
indexed.db.store_test.test_open_cursor_with_query_and_direction.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1518 = (function (meta1519){
this.meta1519 = meta1519;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1520,meta1519__$1){
var self__ = this;
var _1520__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1518(meta1519__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1520){
var self__ = this;
var _1520__$1 = this;
return self__.meta1519;
}));

(indexed.db.store_test.t_indexed$db$store_test1518.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1518.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,todo_list,indexed.db.upper_bound.call(null,"Read that book"),"prev"),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__890__auto___1528 = (new cljs.core.List(null,cursor,null,(1),null));
var result__891__auto___1529 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__890__auto___1528);
if(cljs.core.truth_(result__891__auto___1529)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,251,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),251,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1528),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,251,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),251,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1528),null,(1),null)),(2),null)),null]));
}

}catch (e1522){var t__941__auto___1530 = e1522;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,251,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),251,t__941__auto___1530,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__890__auto___1531 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__891__auto___1532 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1531);
if(cljs.core.truth_(result__891__auto___1532)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"pass","pass",1574159993),65,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),255,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1531),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"fail","fail",1706214930),65,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),255,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1531),null,(1),null)),(2),null)),null]));
}

}catch (e1523){var t__941__auto___1533 = e1523;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"error","error",-978969032),65,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),255,t__941__auto___1533,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__890__auto___1534 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__891__auto___1535 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1534);
if(cljs.core.truth_(result__891__auto___1535)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",121,new cljs.core.Keyword(null,"pass","pass",1574159993),65,256,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),256,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1534),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",121,new cljs.core.Keyword(null,"fail","fail",1706214930),65,256,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),256,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1534),null,(1),null)),(2),null)),null]));
}

}catch (e1524){var t__941__auto___1536 = e1524;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",121,new cljs.core.Keyword(null,"error","error",-978969032),65,256,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),256,t__941__auto___1536,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1518.prototype.apply = (function (self__,args1521){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1521)));
}));

(indexed.db.store_test.t_indexed$db$store_test1518.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,todo_list,indexed.db.upper_bound.call(null,"Read that book"),"prev"),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__890__auto___1537 = (new cljs.core.List(null,cursor,null,(1),null));
var result__891__auto___1538 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__890__auto___1537);
if(cljs.core.truth_(result__891__auto___1538)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,251,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),251,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1537),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,251,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),251,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1537),null,(1),null)),(2),null)),null]));
}

}catch (e1525){var t__941__auto___1539 = e1525;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,251,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),251,t__941__auto___1539,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__890__auto___1540 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__891__auto___1541 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1540);
if(cljs.core.truth_(result__891__auto___1541)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"pass","pass",1574159993),65,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),255,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1540),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"fail","fail",1706214930),65,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),255,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1540),null,(1),null)),(2),null)),null]));
}

}catch (e1526){var t__941__auto___1542 = e1526;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"error","error",-978969032),65,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),255,t__941__auto___1542,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__890__auto___1543 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__891__auto___1544 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1543);
if(cljs.core.truth_(result__891__auto___1544)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",121,new cljs.core.Keyword(null,"pass","pass",1574159993),65,256,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),256,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1543),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",121,new cljs.core.Keyword(null,"fail","fail",1706214930),65,256,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),256,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1543),null,(1),null)),(2),null)),null]));
}

}catch (e1527){var t__941__auto___1545 = e1527;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",121,new cljs.core.Keyword(null,"error","error",-978969032),65,256,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),256,t__941__auto___1545,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1519","meta1519",1712060794,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1518.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1518.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1518");

(indexed.db.store_test.t_indexed$db$store_test1518.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1518");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1518.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1518 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1518(meta1519){
return (new indexed.db.store_test.t_indexed$db$store_test1518(meta1519));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1518(null));
});

(indexed.db.store_test.test_open_cursor_with_query_and_direction.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_open_cursor_with_query_and_direction;},new cljs.core.Symbol("indexed.db.store-test","test-open-cursor-with-query-and-direction","indexed.db.store-test/test-open-cursor-with-query-and-direction",-483765787,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-open-cursor-with-query-and-direction","test-open-cursor-with-query-and-direction",-846404044,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",51,1,240,240,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_open_cursor_with_query_and_direction)?indexed.db.store_test.test_open_cursor_with_query_and_direction.cljs$lang$test:null)])));
indexed.db.store_test.test_open_key_cursor_no_args = (function indexed$db$store_test$test_open_key_cursor_no_args(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_open_key_cursor_no_args.cljs$lang$var);
});
indexed.db.store_test.test_open_key_cursor_no_args.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1546 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1546 = (function (meta1547){
this.meta1547 = meta1547;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1548,meta1547__$1){
var self__ = this;
var _1548__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1546(meta1547__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1548){
var self__ = this;
var _1548__$1 = this;
return self__.meta1547;
}));

(indexed.db.store_test.t_indexed$db$store_test1546.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1546.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
return indexed.db.on.call(null,indexed.db.open_key_cursor.call(null,todo_list),"success",(function (e){
var k = indexed.db.key.call(null,indexed.db.test_util.cursor.call(null,e));
try{var values__890__auto___1552 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,k,null,(1),null)),(2),null));
var result__891__auto___1553 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1552);
if(cljs.core.truth_(result__891__auto___1553)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",61,new cljs.core.Keyword(null,"pass","pass",1574159993),43,267,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",new cljs.core.Symbol(null,"k","k",-505765866,null)),267,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1552),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",61,new cljs.core.Keyword(null,"fail","fail",1706214930),43,267,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",new cljs.core.Symbol(null,"k","k",-505765866,null)),267,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1552),null,(1),null)),(2),null)),null]));
}

}catch (e1550){var t__941__auto___1554 = e1550;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",61,new cljs.core.Keyword(null,"error","error",-978969032),43,267,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",new cljs.core.Symbol(null,"k","k",-505765866,null)),267,t__941__auto___1554,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1546.prototype.apply = (function (self__,args1549){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1549)));
}));

(indexed.db.store_test.t_indexed$db$store_test1546.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
return indexed.db.on.call(null,indexed.db.open_key_cursor.call(null,todo_list),"success",(function (e){
var k = indexed.db.key.call(null,indexed.db.test_util.cursor.call(null,e));
try{var values__890__auto___1555 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,k,null,(1),null)),(2),null));
var result__891__auto___1556 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1555);
if(cljs.core.truth_(result__891__auto___1556)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",61,new cljs.core.Keyword(null,"pass","pass",1574159993),43,267,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",new cljs.core.Symbol(null,"k","k",-505765866,null)),267,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1555),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",61,new cljs.core.Keyword(null,"fail","fail",1706214930),43,267,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",new cljs.core.Symbol(null,"k","k",-505765866,null)),267,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1555),null,(1),null)),(2),null)),null]));
}

}catch (e1551){var t__941__auto___1557 = e1551;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",61,new cljs.core.Keyword(null,"error","error",-978969032),43,267,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",new cljs.core.Symbol(null,"k","k",-505765866,null)),267,t__941__auto___1557,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1547","meta1547",977052814,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1546.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1546.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1546");

(indexed.db.store_test.t_indexed$db$store_test1546.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1546");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1546.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1546 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1546(meta1547){
return (new indexed.db.store_test.t_indexed$db$store_test1546(meta1547));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1546(null));
});

(indexed.db.store_test.test_open_key_cursor_no_args.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_open_key_cursor_no_args;},new cljs.core.Symbol("indexed.db.store-test","test-open-key-cursor-no-args","indexed.db.store-test/test-open-key-cursor-no-args",982565330,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-open-key-cursor-no-args","test-open-key-cursor-no-args",1567520003,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",38,1,260,260,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_open_key_cursor_no_args)?indexed.db.store_test.test_open_key_cursor_no_args.cljs$lang$test:null)])));
indexed.db.store_test.test_open_key_cursor_with_query = (function indexed$db$store_test$test_open_key_cursor_with_query(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_open_key_cursor_with_query.cljs$lang$var);
});
indexed.db.store_test.test_open_key_cursor_with_query.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1558 = (function (meta1559){
this.meta1559 = meta1559;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1560,meta1559__$1){
var self__ = this;
var _1560__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1558(meta1559__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1560){
var self__ = this;
var _1560__$1 = this;
return self__.meta1559;
}));

(indexed.db.store_test.t_indexed$db$store_test1558.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1558.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_key_cursor.call(null,todo_list,indexed.db.bound.call(null,"Read that book","Walk dog")),"success",(function (e){
var cursor = indexed.db.test_util.cursor.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__890__auto___1568 = (new cljs.core.List(null,cursor,null,(1),null));
var result__891__auto___1569 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__890__auto___1568);
if(cljs.core.truth_(result__891__auto___1569)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,281,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),281,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1568),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,281,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),281,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1568),null,(1),null)),(2),null)),null]));
}

}catch (e1562){var t__941__auto___1570 = e1562;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,281,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),281,t__941__auto___1570,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__890__auto___1571 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__891__auto___1572 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1571);
if(cljs.core.truth_(result__891__auto___1572)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"pass","pass",1574159993),65,285,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),285,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1571),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"fail","fail",1706214930),65,285,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),285,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1571),null,(1),null)),(2),null)),null]));
}

}catch (e1563){var t__941__auto___1573 = e1563;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"error","error",-978969032),65,285,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),285,t__941__auto___1573,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__890__auto___1574 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__891__auto___1575 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1574);
if(cljs.core.truth_(result__891__auto___1575)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",103,new cljs.core.Keyword(null,"pass","pass",1574159993),65,286,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),286,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1574),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",103,new cljs.core.Keyword(null,"fail","fail",1706214930),65,286,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),286,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1574),null,(1),null)),(2),null)),null]));
}

}catch (e1564){var t__941__auto___1576 = e1564;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",103,new cljs.core.Keyword(null,"error","error",-978969032),65,286,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),286,t__941__auto___1576,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1558.prototype.apply = (function (self__,args1561){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1561)));
}));

(indexed.db.store_test.t_indexed$db$store_test1558.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_key_cursor.call(null,todo_list,indexed.db.bound.call(null,"Read that book","Walk dog")),"success",(function (e){
var cursor = indexed.db.test_util.cursor.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__890__auto___1577 = (new cljs.core.List(null,cursor,null,(1),null));
var result__891__auto___1578 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__890__auto___1577);
if(cljs.core.truth_(result__891__auto___1578)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,281,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),281,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1577),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,281,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),281,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1577),null,(1),null)),(2),null)),null]));
}

}catch (e1565){var t__941__auto___1579 = e1565;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,281,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),281,t__941__auto___1579,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__890__auto___1580 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__891__auto___1581 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1580);
if(cljs.core.truth_(result__891__auto___1581)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"pass","pass",1574159993),65,285,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),285,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1580),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"fail","fail",1706214930),65,285,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),285,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1580),null,(1),null)),(2),null)),null]));
}

}catch (e1566){var t__941__auto___1582 = e1566;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"error","error",-978969032),65,285,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),285,t__941__auto___1582,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__890__auto___1583 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__891__auto___1584 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1583);
if(cljs.core.truth_(result__891__auto___1584)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",103,new cljs.core.Keyword(null,"pass","pass",1574159993),65,286,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),286,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1583),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",103,new cljs.core.Keyword(null,"fail","fail",1706214930),65,286,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),286,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1583),null,(1),null)),(2),null)),null]));
}

}catch (e1567){var t__941__auto___1585 = e1567;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",103,new cljs.core.Keyword(null,"error","error",-978969032),65,286,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),286,t__941__auto___1585,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1559","meta1559",1227924719,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1558.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1558.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1558");

(indexed.db.store_test.t_indexed$db$store_test1558.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1558");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1558.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1558 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1558(meta1559){
return (new indexed.db.store_test.t_indexed$db$store_test1558(meta1559));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1558(null));
});

(indexed.db.store_test.test_open_key_cursor_with_query.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_open_key_cursor_with_query;},new cljs.core.Symbol("indexed.db.store-test","test-open-key-cursor-with-query","indexed.db.store-test/test-open-key-cursor-with-query",-1141903328,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-open-key-cursor-with-query","test-open-key-cursor-with-query",-1668702991,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",41,1,270,270,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_open_key_cursor_with_query)?indexed.db.store_test.test_open_key_cursor_with_query.cljs$lang$test:null)])));
indexed.db.store_test.test_open_key_cursor_with_query_and_direction = (function indexed$db$store_test$test_open_key_cursor_with_query_and_direction(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_open_key_cursor_with_query_and_direction.cljs$lang$var);
});
indexed.db.store_test.test_open_key_cursor_with_query_and_direction.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1586 = (function (meta1587){
this.meta1587 = meta1587;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1588,meta1587__$1){
var self__ = this;
var _1588__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1586(meta1587__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1588){
var self__ = this;
var _1588__$1 = this;
return self__.meta1587;
}));

(indexed.db.store_test.t_indexed$db$store_test1586.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1586.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_key_cursor.call(null,todo_list,indexed.db.upper_bound.call(null,"Read that book"),"prev"),"success",(function (e){
var cursor = indexed.db.test_util.cursor.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__890__auto___1596 = (new cljs.core.List(null,cursor,null,(1),null));
var result__891__auto___1597 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__890__auto___1596);
if(cljs.core.truth_(result__891__auto___1597)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,301,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),301,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1596),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,301,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),301,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1596),null,(1),null)),(2),null)),null]));
}

}catch (e1590){var t__941__auto___1598 = e1590;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,301,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),301,t__941__auto___1598,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__890__auto___1599 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__891__auto___1600 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1599);
if(cljs.core.truth_(result__891__auto___1600)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"pass","pass",1574159993),65,305,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),305,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1599),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"fail","fail",1706214930),65,305,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),305,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1599),null,(1),null)),(2),null)),null]));
}

}catch (e1591){var t__941__auto___1601 = e1591;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"error","error",-978969032),65,305,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),305,t__941__auto___1601,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__890__auto___1602 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__891__auto___1603 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1602);
if(cljs.core.truth_(result__891__auto___1603)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",105,new cljs.core.Keyword(null,"pass","pass",1574159993),65,306,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),306,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1602),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",105,new cljs.core.Keyword(null,"fail","fail",1706214930),65,306,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),306,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1602),null,(1),null)),(2),null)),null]));
}

}catch (e1592){var t__941__auto___1604 = e1592;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",105,new cljs.core.Keyword(null,"error","error",-978969032),65,306,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),306,t__941__auto___1604,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1586.prototype.apply = (function (self__,args1589){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1589)));
}));

(indexed.db.store_test.t_indexed$db$store_test1586.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_key_cursor.call(null,todo_list,indexed.db.upper_bound.call(null,"Read that book"),"prev"),"success",(function (e){
var cursor = indexed.db.test_util.cursor.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__890__auto___1605 = (new cljs.core.List(null,cursor,null,(1),null));
var result__891__auto___1606 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__890__auto___1605);
if(cljs.core.truth_(result__891__auto___1606)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,301,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),301,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1605),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,301,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),301,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__890__auto___1605),null,(1),null)),(2),null)),null]));
}

}catch (e1593){var t__941__auto___1607 = e1593;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,301,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),301,t__941__auto___1607,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__890__auto___1608 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__891__auto___1609 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1608);
if(cljs.core.truth_(result__891__auto___1609)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"pass","pass",1574159993),65,305,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),305,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1608),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"fail","fail",1706214930),65,305,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),305,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1608),null,(1),null)),(2),null)),null]));
}

}catch (e1594){var t__941__auto___1610 = e1594;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"error","error",-978969032),65,305,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),305,t__941__auto___1610,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__890__auto___1611 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__891__auto___1612 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1611);
if(cljs.core.truth_(result__891__auto___1612)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",105,new cljs.core.Keyword(null,"pass","pass",1574159993),65,306,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),306,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1611),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",105,new cljs.core.Keyword(null,"fail","fail",1706214930),65,306,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),306,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1611),null,(1),null)),(2),null)),null]));
}

}catch (e1595){var t__941__auto___1613 = e1595;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",105,new cljs.core.Keyword(null,"error","error",-978969032),65,306,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),306,t__941__auto___1613,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1587","meta1587",1964573171,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1586.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1586.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1586");

(indexed.db.store_test.t_indexed$db$store_test1586.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1586");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1586.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1586 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1586(meta1587){
return (new indexed.db.store_test.t_indexed$db$store_test1586(meta1587));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1586(null));
});

(indexed.db.store_test.test_open_key_cursor_with_query_and_direction.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_open_key_cursor_with_query_and_direction;},new cljs.core.Symbol("indexed.db.store-test","test-open-key-cursor-with-query-and-direction","indexed.db.store-test/test-open-key-cursor-with-query-and-direction",-1399044699,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-open-key-cursor-with-query-and-direction","test-open-key-cursor-with-query-and-direction",-897937164,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",55,1,290,290,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_open_key_cursor_with_query_and_direction)?indexed.db.store_test.test_open_key_cursor_with_query_and_direction.cljs$lang$test:null)])));
indexed.db.store_test.test_put = (function indexed$db$store_test$test_put(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_put.cljs$lang$var);
});
indexed.db.store_test.test_put.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1614 = (function (meta1615){
this.meta1615 = meta1615;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1616,meta1615__$1){
var self__ = this;
var _1616__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1614(meta1615__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1616){
var self__ = this;
var _1616__$1 = this;
return self__.meta1615;
}));

(indexed.db.store_test.t_indexed$db$store_test1614.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1614.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList","readwrite");
var task_req = indexed.db.get.call(null,todo_list,"Walk dog");
return indexed.db.on.call(null,task_req,"success",(function (e){
var request = indexed.db.test_util.event__GT_request.call(null,e);
var task = indexed.db.result.call(null,request);
(task.notified = "yes");

return indexed.db.on.call(null,indexed.db.put.call(null,todo_list,task),"success",done);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1614.prototype.apply = (function (self__,args1617){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1617)));
}));

(indexed.db.store_test.t_indexed$db$store_test1614.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList","readwrite");
var task_req = indexed.db.get.call(null,todo_list,"Walk dog");
return indexed.db.on.call(null,task_req,"success",(function (e){
var request = indexed.db.test_util.event__GT_request.call(null,e);
var task = indexed.db.result.call(null,request);
(task.notified = "yes");

return indexed.db.on.call(null,indexed.db.put.call(null,todo_list,task),"success",done);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1615","meta1615",766711718,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1614.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1614.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1614");

(indexed.db.store_test.t_indexed$db$store_test1614.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1614");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1614.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1614 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1614(meta1615){
return (new indexed.db.store_test.t_indexed$db$store_test1614(meta1615));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1614(null));
});

(indexed.db.store_test.test_put.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_put;},new cljs.core.Symbol("indexed.db.store-test","test-put","indexed.db.store-test/test-put",-2102015323,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-put","test-put",1842330100,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",18,1,310,310,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_put)?indexed.db.store_test.test_put.cljs$lang$test:null)])));

//# sourceMappingURL=store_test.js.map
