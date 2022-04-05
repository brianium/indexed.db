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
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1318 = (function (meta1319){
this.meta1319 = meta1319;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1320,meta1319__$1){
var self__ = this;
var _1320__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1318(meta1319__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1320){
var self__ = this;
var _1320__$1 = this;
return self__.meta1319;
}));

(indexed.db.store_test.t_indexed$db$store_test1318.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1318.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.test_util.create_task_db.call(null,indexed.db.store_test._STAR_db,done,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","name","db/name",1843678379),indexed.db.store_test.database_name,new cljs.core.Keyword("db","version","db/version",425264924),indexed.db.store_test.database_version], null));
}));

(indexed.db.store_test.t_indexed$db$store_test1318.prototype.apply = (function (self__,args1321){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1321)));
}));

(indexed.db.store_test.t_indexed$db$store_test1318.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.test_util.create_task_db.call(null,indexed.db.store_test._STAR_db,done,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","name","db/name",1843678379),indexed.db.store_test.database_name,new cljs.core.Keyword("db","version","db/version",425264924),indexed.db.store_test.database_version], null));
}));

(indexed.db.store_test.t_indexed$db$store_test1318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1319","meta1319",-1273520615,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1318.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1318.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1318");

(indexed.db.store_test.t_indexed$db$store_test1318.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1318");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1318.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1318 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1318(meta1319){
return (new indexed.db.store_test.t_indexed$db$store_test1318(meta1319));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1318(null));
})], null)], null);
indexed.db.store_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1322 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1322 = (function (meta1323){
this.meta1323 = meta1323;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1324,meta1323__$1){
var self__ = this;
var _1324__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1322(meta1323__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1324){
var self__ = this;
var _1324__$1 = this;
return self__.meta1323;
}));

(indexed.db.store_test.t_indexed$db$store_test1322.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1322.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.test_util.seed_tasks.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),done);
}));

(indexed.db.store_test.t_indexed$db$store_test1322.prototype.apply = (function (self__,args1325){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1325)));
}));

(indexed.db.store_test.t_indexed$db$store_test1322.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.test_util.seed_tasks.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),done);
}));

(indexed.db.store_test.t_indexed$db$store_test1322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1323","meta1323",-510629583,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1322.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1322.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1322");

(indexed.db.store_test.t_indexed$db$store_test1322.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1322");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1322.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1322 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1322(meta1323){
return (new indexed.db.store_test.t_indexed$db$store_test1322(meta1323));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1322(null));
}),new cljs.core.Keyword(null,"after","after",594996914),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1326 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1326 = (function (meta1327){
this.meta1327 = meta1327;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1328,meta1327__$1){
var self__ = this;
var _1328__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1326(meta1327__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1328){
var self__ = this;
var _1328__$1 = this;
return self__.meta1327;
}));

(indexed.db.store_test.t_indexed$db$store_test1326.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1326.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.test_util.reset_tasks.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),done);
}));

(indexed.db.store_test.t_indexed$db$store_test1326.prototype.apply = (function (self__,args1329){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1329)));
}));

(indexed.db.store_test.t_indexed$db$store_test1326.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.test_util.reset_tasks.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),done);
}));

(indexed.db.store_test.t_indexed$db$store_test1326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1327","meta1327",-675341425,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1326.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1326.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1326");

(indexed.db.store_test.t_indexed$db$store_test1326.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1326");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1326.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1326 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1326(meta1327){
return (new indexed.db.store_test.t_indexed$db$store_test1326(meta1327));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1326(null));
})], null)], null);
indexed.db.store_test.test_index_names = (function indexed$db$store_test$test_index_names(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_index_names.cljs$lang$var);
});
indexed.db.store_test.test_index_names.cljs$lang$test = (function (){
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var index_names = cljs.core.set.call(null,indexed.db.index_names.call(null,todo_list));
try{var values__916__auto__ = (new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["hours",null,"deleteme",null,"notified",null,"minutes",null,"year",null,"month",null,"day",null], null), null),(new cljs.core.List(null,index_names,null,(1),null)),(2),null));
var result__917__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto__);
if(cljs.core.truth_(result__917__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",88,new cljs.core.Keyword(null,"pass","pass",1574159993),9,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["hours","null","deleteme","null","notified","null","minutes","null","year","null","month","null","day","null"], null), null),new cljs.core.Symbol(null,"index-names","index-names",888859443,null)),31,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",88,new cljs.core.Keyword(null,"fail","fail",1706214930),9,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["hours","null","deleteme","null","notified","null","minutes","null","year","null","month","null","day","null"], null), null),new cljs.core.Symbol(null,"index-names","index-names",888859443,null)),31,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null,(1),null)),(2),null)),null]));
}

return result__917__auto__;
}catch (e1330){var t__967__auto__ = e1330;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",88,new cljs.core.Keyword(null,"error","error",-978969032),9,31,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["hours","null","deleteme","null","notified","null","minutes","null","year","null","month","null","day","null"], null), null),new cljs.core.Symbol(null,"index-names","index-names",888859443,null)),31,t__967__auto__,null]));
}});

(indexed.db.store_test.test_index_names.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_index_names;},new cljs.core.Symbol("indexed.db.store-test","test-index-names","indexed.db.store-test/test-index-names",-1511138740,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-index-names","test-index-names",-615813221,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",26,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_index_names)?indexed.db.store_test.test_index_names.cljs$lang$test:null)])));
indexed.db.store_test.test_key_path = (function indexed$db$store_test$test_key_path(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_key_path.cljs$lang$var);
});
indexed.db.store_test.test_key_path.cljs$lang$test = (function (){
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
try{var values__916__auto__ = (new cljs.core.List(null,"taskTitle",(new cljs.core.List(null,indexed.db.key_path.call(null,todo_list),null,(1),null)),(2),null));
var result__917__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto__);
if(cljs.core.truth_(result__917__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",56,new cljs.core.Keyword(null,"pass","pass",1574159993),9,35,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"taskTitle",cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),35,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",56,new cljs.core.Keyword(null,"fail","fail",1706214930),9,35,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"taskTitle",cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),35,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null,(1),null)),(2),null)),null]));
}

return result__917__auto__;
}catch (e1331){var t__967__auto__ = e1331;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",56,new cljs.core.Keyword(null,"error","error",-978969032),9,35,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"taskTitle",cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),35,t__967__auto__,null]));
}});

(indexed.db.store_test.test_key_path.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_key_path;},new cljs.core.Symbol("indexed.db.store-test","test-key-path","indexed.db.store-test/test-key-path",-1489240533,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-key-path","test-key-path",-1648344328,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",23,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_key_path)?indexed.db.store_test.test_key_path.cljs$lang$test:null)])));
indexed.db.store_test.test_key_path_as_sequence = (function indexed$db$store_test$test_key_path_as_sequence(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_key_path_as_sequence.cljs$lang$var);
});
indexed.db.store_test.test_key_path_as_sequence.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1332 = (function (meta1333){
this.meta1333 = meta1333;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1334,meta1333__$1){
var self__ = this;
var _1334__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1332(meta1333__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1334){
var self__ = this;
var _1334__$1 = this;
return self__.meta1333;
}));

(indexed.db.store_test.t_indexed$db$store_test1332.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1332.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.test_util.test_connect.call(null,[indexed.db.store_test.database_name,"-key-test"].join(''),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
var db = indexed.db.create_database.call(null,idb);
var txn = indexed.db.transaction.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null));
var test_store = indexed.db.object_store.call(null,txn,"test-store");
try{var values__916__auto___1338 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),(new cljs.core.List(null,indexed.db.key_path.call(null,test_store),null,(1),null)),(2),null));
var result__917__auto___1339 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1338);
if(cljs.core.truth_(result__917__auto___1339)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),14,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"test-store","test-store",-422507518,null))),48,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1338),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),14,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"test-store","test-store",-422507518,null))),48,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1338),null,(1),null)),(2),null)),null]));
}

}catch (e1336){var t__967__auto___1340 = e1336;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),14,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"test-store","test-store",-422507518,null))),48,t__967__auto___1340,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
return indexed.db.create_object_store.call(null,db,"test-store",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-path","key-path",878473308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)], null));
})], null));
}));

(indexed.db.store_test.t_indexed$db$store_test1332.prototype.apply = (function (self__,args1335){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1335)));
}));

(indexed.db.store_test.t_indexed$db$store_test1332.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.test_util.test_connect.call(null,[indexed.db.store_test.database_name,"-key-test"].join(''),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
var db = indexed.db.create_database.call(null,idb);
var txn = indexed.db.transaction.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null));
var test_store = indexed.db.object_store.call(null,txn,"test-store");
try{var values__916__auto___1341 = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),(new cljs.core.List(null,indexed.db.key_path.call(null,test_store),null,(1),null)),(2),null));
var result__917__auto___1342 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1341);
if(cljs.core.truth_(result__917__auto___1342)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),14,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"test-store","test-store",-422507518,null))),48,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1341),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),14,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"test-store","test-store",-422507518,null))),48,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1341),null,(1),null)),(2),null)),null]));
}

}catch (e1337){var t__967__auto___1343 = e1337;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),14,48,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","key-path","indexed.db/key-path",-1558580786,null),new cljs.core.Symbol(null,"test-store","test-store",-422507518,null))),48,t__967__auto___1343,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
return indexed.db.create_object_store.call(null,db,"test-store",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-path","key-path",878473308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)], null));
})], null));
}));

(indexed.db.store_test.t_indexed$db$store_test1332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1333","meta1333",690112277,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1332.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1332.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1332");

(indexed.db.store_test.t_indexed$db$store_test1332.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1332");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1332.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1332 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1332(meta1333){
return (new indexed.db.store_test.t_indexed$db$store_test1332(meta1333));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1332(null));
});

(indexed.db.store_test.test_key_path_as_sequence.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_key_path_as_sequence;},new cljs.core.Symbol("indexed.db.store-test","test-key-path-as-sequence","indexed.db.store-test/test-key-path-as-sequence",1154231998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-key-path-as-sequence","test-key-path-as-sequence",-1557530259,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",35,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_key_path_as_sequence)?indexed.db.store_test.test_key_path_as_sequence.cljs$lang$test:null)])));
indexed.db.store_test.test_name = (function indexed$db$store_test$test_name(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_name.cljs$lang$var);
});
indexed.db.store_test.test_name.cljs$lang$test = (function (){
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
try{var values__916__auto__ = (new cljs.core.List(null,"toDoList",(new cljs.core.List(null,cljs.core.name.call(null,todo_list),null,(1),null)),(2),null));
var result__917__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto__);
if(cljs.core.truth_(result__917__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),9,58,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),58,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),9,58,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),58,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null,(1),null)),(2),null)),null]));
}

return result__917__auto__;
}catch (e1344){var t__967__auto__ = e1344;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),9,58,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),58,t__967__auto__,null]));
}});

(indexed.db.store_test.test_name.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_name;},new cljs.core.Symbol("indexed.db.store-test","test-name","indexed.db.store-test/test-name",-496382899,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-name","test-name",964935614,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",19,1,56,56,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_name)?indexed.db.store_test.test_name.cljs$lang$test:null)])));
indexed.db.store_test.test_getting_transaction = (function indexed$db$store_test$test_getting_transaction(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_getting_transaction.cljs$lang$var);
});
indexed.db.store_test.test_getting_transaction.cljs$lang$test = (function (){
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var txn = indexed.db.get_transaction.call(null,todo_list);
try{var values__916__auto__ = (new cljs.core.List(null,txn,null,(1),null));
var result__917__auto__ = cljs.core.apply.call(null,indexed.db.transaction_QMARK_,values__916__auto__);
if(cljs.core.truth_(result__917__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),9,63,cljs.core.list(new cljs.core.Symbol("indexed.db","transaction?","indexed.db/transaction?",487217423,null),new cljs.core.Symbol(null,"txn","txn",1171326738,null)),63,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","transaction?","indexed.db/transaction?",487217423,null),values__916__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),9,63,cljs.core.list(new cljs.core.Symbol("indexed.db","transaction?","indexed.db/transaction?",487217423,null),new cljs.core.Symbol(null,"txn","txn",1171326738,null)),63,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","transaction?","indexed.db/transaction?",487217423,null),values__916__auto__),null,(1),null)),(2),null)),null]));
}

return result__917__auto__;
}catch (e1345){var t__967__auto__ = e1345;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),9,63,cljs.core.list(new cljs.core.Symbol("indexed.db","transaction?","indexed.db/transaction?",487217423,null),new cljs.core.Symbol(null,"txn","txn",1171326738,null)),63,t__967__auto__,null]));
}});

(indexed.db.store_test.test_getting_transaction.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_getting_transaction;},new cljs.core.Symbol("indexed.db.store-test","test-getting-transaction","indexed.db.store-test/test-getting-transaction",-1511866215,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-getting-transaction","test-getting-transaction",1115469270,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",34,1,60,60,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_getting_transaction)?indexed.db.store_test.test_getting_transaction.cljs$lang$test:null)])));
indexed.db.store_test.test_auto_increment_QMARK_ = (function indexed$db$store_test$test_auto_increment_QMARK_(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_auto_increment_QMARK_.cljs$lang$var);
});
indexed.db.store_test.test_auto_increment_QMARK_.cljs$lang$test = (function (){
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
try{var values__916__auto__ = (new cljs.core.List(null,indexed.db.auto_increment_QMARK_.call(null,todo_list),null,(1),null));
var result__917__auto__ = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__916__auto__);
if(cljs.core.truth_(result__917__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",56,new cljs.core.Keyword(null,"pass","pass",1574159993),9,67,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","auto-increment?","indexed.db/auto-increment?",1969303482,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),67,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__916__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",56,new cljs.core.Keyword(null,"fail","fail",1706214930),9,67,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","auto-increment?","indexed.db/auto-increment?",1969303482,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),67,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__916__auto__),null,(1),null)),(2),null)),null]));
}

return result__917__auto__;
}catch (e1346){var t__967__auto__ = e1346;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",56,new cljs.core.Keyword(null,"error","error",-978969032),9,67,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","auto-increment?","indexed.db/auto-increment?",1969303482,null),new cljs.core.Symbol(null,"todo-list","todo-list",-2001230391,null))),67,t__967__auto__,null]));
}});

(indexed.db.store_test.test_auto_increment_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_auto_increment_QMARK_;},new cljs.core.Symbol("indexed.db.store-test","test-auto-increment?","indexed.db.store-test/test-auto-increment?",-1596843157,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-auto-increment?","test-auto-increment?",-29866054,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",30,1,65,65,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_auto_increment_QMARK_)?indexed.db.store_test.test_auto_increment_QMARK_.cljs$lang$test:null)])));
indexed.db.store_test.test_count_all = (function indexed$db$store_test$test_count_all(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_count_all.cljs$lang$var);
});
indexed.db.store_test.test_count_all.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1347 = (function (meta1348){
this.meta1348 = meta1348;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1349,meta1348__$1){
var self__ = this;
var _1349__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1347(meta1348__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1349){
var self__ = this;
var _1349__$1 = this;
return self__.meta1348;
}));

(indexed.db.store_test.t_indexed$db$store_test1347.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1347.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.count.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList")),"success",(function (e){
try{var values__916__auto___1353 = (new cljs.core.List(null,(3),(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)),null,(1),null)),(2),null));
var result__917__auto___1354 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1353);
if(cljs.core.truth_(result__917__auto___1354)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),39,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),75,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1353),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),39,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),75,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1353),null,(1),null)),(2),null)),null]));
}

}catch (e1351){var t__967__auto___1355 = e1351;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),39,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),75,t__967__auto___1355,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1347.prototype.apply = (function (self__,args1350){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1350)));
}));

(indexed.db.store_test.t_indexed$db$store_test1347.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.count.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList")),"success",(function (e){
try{var values__916__auto___1356 = (new cljs.core.List(null,(3),(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)),null,(1),null)),(2),null));
var result__917__auto___1357 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1356);
if(cljs.core.truth_(result__917__auto___1357)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),39,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),75,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1356),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),39,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),75,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1356),null,(1),null)),(2),null)),null]));
}

}catch (e1352){var t__967__auto___1358 = e1352;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),39,74,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),75,t__967__auto___1358,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1348","meta1348",-1652272262,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1347.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1347.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1347");

(indexed.db.store_test.t_indexed$db$store_test1347.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1347");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1347.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1347 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1347(meta1348){
return (new indexed.db.store_test.t_indexed$db$store_test1347(meta1348));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1347(null));
});

(indexed.db.store_test.test_count_all.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_count_all;},new cljs.core.Symbol("indexed.db.store-test","test-count-all","indexed.db.store-test/test-count-all",1547176879,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-count-all","test-count-all",-1163739492,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",24,1,69,69,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_count_all)?indexed.db.store_test.test_count_all.cljs$lang$test:null)])));
indexed.db.store_test.test_count_by_key = (function indexed$db$store_test$test_count_by_key(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_count_by_key.cljs$lang$var);
});
indexed.db.store_test.test_count_by_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1359 = (function (meta1360){
this.meta1360 = meta1360;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1361,meta1360__$1){
var self__ = this;
var _1361__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1359(meta1360__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1361){
var self__ = this;
var _1361__$1 = this;
return self__.meta1360;
}));

(indexed.db.store_test.t_indexed$db$store_test1359.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1359.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.count.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),"Walk dog"),"success",(function (e){
try{var values__916__auto___1365 = (new cljs.core.List(null,(1),(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)),null,(1),null)),(2),null));
var result__917__auto___1366 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1365);
if(cljs.core.truth_(result__917__auto___1366)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),39,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),84,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1365),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),39,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),84,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1365),null,(1),null)),(2),null)),null]));
}

}catch (e1363){var t__967__auto___1367 = e1363;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),39,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),84,t__967__auto___1367,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1359.prototype.apply = (function (self__,args1362){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1362)));
}));

(indexed.db.store_test.t_indexed$db$store_test1359.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.count.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),"Walk dog"),"success",(function (e){
try{var values__916__auto___1368 = (new cljs.core.List(null,(1),(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)),null,(1),null)),(2),null));
var result__917__auto___1369 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1368);
if(cljs.core.truth_(result__917__auto___1369)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"pass","pass",1574159993),39,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),84,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1368),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"fail","fail",1706214930),39,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),84,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1368),null,(1),null)),(2),null)),null]));
}

}catch (e1364){var t__967__auto___1370 = e1364;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",70,new cljs.core.Keyword(null,"error","error",-978969032),39,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),84,t__967__auto___1370,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1360","meta1360",116662097,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1359.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1359.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1359");

(indexed.db.store_test.t_indexed$db$store_test1359.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1359");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1359.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1359 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1359(meta1360){
return (new indexed.db.store_test.t_indexed$db$store_test1359(meta1360));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1359(null));
});

(indexed.db.store_test.test_count_by_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_count_by_key;},new cljs.core.Symbol("indexed.db.store-test","test-count-by-key","indexed.db.store-test/test-count-by-key",1129210284,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-count-by-key","test-count-by-key",-1109150469,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",27,1,78,78,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_count_by_key)?indexed.db.store_test.test_count_by_key.cljs$lang$test:null)])));
indexed.db.store_test.test_delete_by_key = (function indexed$db$store_test$test_delete_by_key(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_delete_by_key.cljs$lang$var);
});
indexed.db.store_test.test_delete_by_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1371 = (function (meta1372){
this.meta1372 = meta1372;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1373,meta1372__$1){
var self__ = this;
var _1373__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1371(meta1372__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1373){
var self__ = this;
var _1373__$1 = this;
return self__.meta1372;
}));

(indexed.db.store_test.t_indexed$db$store_test1371.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1371.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
var txn = indexed.db.test_util.transaction.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"readwrite");
var todo_list = indexed.db.object_store.call(null,txn,"toDoList");
indexed.db.delete$.call(null,todo_list,"Walk dog");

return indexed.db.on.call(null,txn,"complete",(function (){
try{var values__916__auto___1377 = (new cljs.core.List(null,true,null,(1),null));
var result__917__auto___1378 = cljs.core.apply.call(null,cljs.core.true_QMARK_,values__916__auto___1377);
if(cljs.core.truth_(result__917__auto___1378)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",54,new cljs.core.Keyword(null,"pass","pass",1574159993),42,94,cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),true),94,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__916__auto___1377),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",54,new cljs.core.Keyword(null,"fail","fail",1706214930),42,94,cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),true),94,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__916__auto___1377),null,(1),null)),(2),null)),null]));
}

}catch (e1375){var t__967__auto___1379 = e1375;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",54,new cljs.core.Keyword(null,"error","error",-978969032),42,94,cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),true),94,t__967__auto___1379,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1371.prototype.apply = (function (self__,args1374){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1374)));
}));

(indexed.db.store_test.t_indexed$db$store_test1371.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
var txn = indexed.db.test_util.transaction.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"readwrite");
var todo_list = indexed.db.object_store.call(null,txn,"toDoList");
indexed.db.delete$.call(null,todo_list,"Walk dog");

return indexed.db.on.call(null,txn,"complete",(function (){
try{var values__916__auto___1380 = (new cljs.core.List(null,true,null,(1),null));
var result__917__auto___1381 = cljs.core.apply.call(null,cljs.core.true_QMARK_,values__916__auto___1380);
if(cljs.core.truth_(result__917__auto___1381)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",54,new cljs.core.Keyword(null,"pass","pass",1574159993),42,94,cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),true),94,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__916__auto___1380),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",54,new cljs.core.Keyword(null,"fail","fail",1706214930),42,94,cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),true),94,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__916__auto___1380),null,(1),null)),(2),null)),null]));
}

}catch (e1376){var t__967__auto___1382 = e1376;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",54,new cljs.core.Keyword(null,"error","error",-978969032),42,94,cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),true),94,t__967__auto___1382,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1372","meta1372",-1571726956,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1371.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1371.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1371");

(indexed.db.store_test.t_indexed$db$store_test1371.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1371");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1371.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1371 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1371(meta1372){
return (new indexed.db.store_test.t_indexed$db$store_test1371(meta1372));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1371(null));
});

(indexed.db.store_test.test_delete_by_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_delete_by_key;},new cljs.core.Symbol("indexed.db.store-test","test-delete-by-key","indexed.db.store-test/test-delete-by-key",867697009,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-delete-by-key","test-delete-by-key",-623481440,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",28,1,87,87,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_delete_by_key)?indexed.db.store_test.test_delete_by_key.cljs$lang$test:null)])));
indexed.db.store_test.test_delete_index = (function indexed$db$store_test$test_delete_index(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_delete_index.cljs$lang$var);
});
indexed.db.store_test.test_delete_index.cljs$lang$test = (function (){
indexed.db.close.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db));

if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1383 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1383 = (function (meta1384){
this.meta1384 = meta1384;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1385,meta1384__$1){
var self__ = this;
var _1385__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1383(meta1384__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1385){
var self__ = this;
var _1385__$1 = this;
return self__.meta1384;
}));

(indexed.db.store_test.t_indexed$db$store_test1383.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1383.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.test_util.open.call(null,indexed.db.store_test.database_name,(indexed.db.store_test.database_version + (1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
cljs.core.reset_BANG_.call(null,indexed.db.store_test._STAR_db,indexed.db.create_database.call(null,idb));

var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var names = cljs.core.set.call(null,indexed.db.index_names.call(null,todo_list));
try{var values__916__auto___1389 = (new cljs.core.List(null,cljs.core.contains_QMARK_.call(null,names,"deleteme"),null,(1),null));
var result__917__auto___1390 = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__916__auto___1389);
if(cljs.core.truth_(result__917__auto___1390)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",51,new cljs.core.Keyword(null,"pass","pass",1574159993),14,109,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"names","names",-302543131,null),"deleteme")),109,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__916__auto___1389),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",51,new cljs.core.Keyword(null,"fail","fail",1706214930),14,109,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"names","names",-302543131,null),"deleteme")),109,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__916__auto___1389),null,(1),null)),(2),null)),null]));
}

}catch (e1387){var t__967__auto___1391 = e1387;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",51,new cljs.core.Keyword(null,"error","error",-978969032),14,109,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"names","names",-302543131,null),"deleteme")),109,t__967__auto___1391,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (_,txn){
var todo_list = indexed.db.object_store.call(null,txn,"toDoList");
return indexed.db.delete_index.call(null,todo_list,"deleteme");
})], null));
}));

(indexed.db.store_test.t_indexed$db$store_test1383.prototype.apply = (function (self__,args1386){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1386)));
}));

(indexed.db.store_test.t_indexed$db$store_test1383.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.test_util.open.call(null,indexed.db.store_test.database_name,(indexed.db.store_test.database_version + (1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
cljs.core.reset_BANG_.call(null,indexed.db.store_test._STAR_db,indexed.db.create_database.call(null,idb));

var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var names = cljs.core.set.call(null,indexed.db.index_names.call(null,todo_list));
try{var values__916__auto___1392 = (new cljs.core.List(null,cljs.core.contains_QMARK_.call(null,names,"deleteme"),null,(1),null));
var result__917__auto___1393 = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__916__auto___1392);
if(cljs.core.truth_(result__917__auto___1393)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",51,new cljs.core.Keyword(null,"pass","pass",1574159993),14,109,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"names","names",-302543131,null),"deleteme")),109,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__916__auto___1392),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",51,new cljs.core.Keyword(null,"fail","fail",1706214930),14,109,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"names","names",-302543131,null),"deleteme")),109,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__916__auto___1392),null,(1),null)),(2),null)),null]));
}

}catch (e1388){var t__967__auto___1394 = e1388;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",51,new cljs.core.Keyword(null,"error","error",-978969032),14,109,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"names","names",-302543131,null),"deleteme")),109,t__967__auto___1394,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (_,txn){
var todo_list = indexed.db.object_store.call(null,txn,"toDoList");
return indexed.db.delete_index.call(null,todo_list,"deleteme");
})], null));
}));

(indexed.db.store_test.t_indexed$db$store_test1383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1384","meta1384",-1780059838,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1383.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1383.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1383");

(indexed.db.store_test.t_indexed$db$store_test1383.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1383");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1383.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1383 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1383(meta1384){
return (new indexed.db.store_test.t_indexed$db$store_test1383(meta1384));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1383(null));
});

(indexed.db.store_test.test_delete_index.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_delete_index;},new cljs.core.Symbol("indexed.db.store-test","test-delete-index","indexed.db.store-test/test-delete-index",772666210,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-delete-index","test-delete-index",128159665,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",27,1,97,97,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_delete_index)?indexed.db.store_test.test_delete_index.cljs$lang$test:null)])));
indexed.db.store_test.test_get = (function indexed$db$store_test$test_get(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get.cljs$lang$var);
});
indexed.db.store_test.test_get.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1395 = (function (meta1396){
this.meta1396 = meta1396;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1397,meta1396__$1){
var self__ = this;
var _1397__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1395(meta1396__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1397){
var self__ = this;
var _1397__$1 = this;
return self__.meta1396;
}));

(indexed.db.store_test.t_indexed$db$store_test1395.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1395.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),"Walk dog"),"success",(function (e){
try{var values__916__auto___1401 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)).taskTitle,null,(1),null)),(2),null));
var result__917__auto___1402 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1401);
if(cljs.core.truth_(result__917__auto___1402)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",93,new cljs.core.Keyword(null,"pass","pass",1574159993),39,123,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),124,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1401),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",93,new cljs.core.Keyword(null,"fail","fail",1706214930),39,123,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),124,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1401),null,(1),null)),(2),null)),null]));
}

}catch (e1399){var t__967__auto___1403 = e1399;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",93,new cljs.core.Keyword(null,"error","error",-978969032),39,123,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),124,t__967__auto___1403,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1395.prototype.apply = (function (self__,args1398){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1398)));
}));

(indexed.db.store_test.t_indexed$db$store_test1395.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.get.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),"Walk dog"),"success",(function (e){
try{var values__916__auto___1404 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)).taskTitle,null,(1),null)),(2),null));
var result__917__auto___1405 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1404);
if(cljs.core.truth_(result__917__auto___1405)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",93,new cljs.core.Keyword(null,"pass","pass",1574159993),39,123,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),124,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1404),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",93,new cljs.core.Keyword(null,"fail","fail",1706214930),39,123,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),124,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1404),null,(1),null)),(2),null)),null]));
}

}catch (e1400){var t__967__auto___1406 = e1400;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",93,new cljs.core.Keyword(null,"error","error",-978969032),39,123,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),124,t__967__auto___1406,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1396","meta1396",-2065956331,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1395.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1395.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1395");

(indexed.db.store_test.t_indexed$db$store_test1395.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1395");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1395.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1395 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1395(meta1396){
return (new indexed.db.store_test.t_indexed$db$store_test1395(meta1396));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1395(null));
});

(indexed.db.store_test.test_get.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get;},new cljs.core.Symbol("indexed.db.store-test","test-get","indexed.db.store-test/test-get",-595112733,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get","test-get",939189138,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",18,1,117,117,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get)?indexed.db.store_test.test_get.cljs$lang$test:null)])));
indexed.db.store_test.test_get_key = (function indexed$db$store_test$test_get_key(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get_key.cljs$lang$var);
});
indexed.db.store_test.test_get_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1407 = (function (meta1408){
this.meta1408 = meta1408;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1409,meta1408__$1){
var self__ = this;
var _1409__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1407(meta1408__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1409){
var self__ = this;
var _1409__$1 = this;
return self__.meta1408;
}));

(indexed.db.store_test.t_indexed$db$store_test1407.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1407.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get_key.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),"Walk dog"),"success",(function (e){
try{var values__916__auto___1413 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)),null,(1),null)),(2),null));
var result__917__auto___1414 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1413);
if(cljs.core.truth_(result__917__auto___1414)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"pass","pass",1574159993),39,133,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),134,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1413),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"fail","fail",1706214930),39,133,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),134,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1413),null,(1),null)),(2),null)),null]));
}

}catch (e1411){var t__967__auto___1415 = e1411;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"error","error",-978969032),39,133,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),134,t__967__auto___1415,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1407.prototype.apply = (function (self__,args1410){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1410)));
}));

(indexed.db.store_test.t_indexed$db$store_test1407.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.get_key.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),"Walk dog"),"success",(function (e){
try{var values__916__auto___1416 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e)),null,(1),null)),(2),null));
var result__917__auto___1417 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1416);
if(cljs.core.truth_(result__917__auto___1417)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"pass","pass",1574159993),39,133,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),134,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1416),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"fail","fail",1706214930),39,133,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),134,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1416),null,(1),null)),(2),null)),null]));
}

}catch (e1412){var t__967__auto___1418 = e1412;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"error","error",-978969032),39,133,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)))),134,t__967__auto___1418,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1408","meta1408",-317275020,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1407.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1407.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1407");

(indexed.db.store_test.t_indexed$db$store_test1407.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1407");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1407.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1407 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1407(meta1408){
return (new indexed.db.store_test.t_indexed$db$store_test1407(meta1408));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1407(null));
});

(indexed.db.store_test.test_get_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get_key;},new cljs.core.Symbol("indexed.db.store-test","test-get-key","indexed.db.store-test/test-get-key",-1618669695,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get-key","test-get-key",1180883632,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",22,1,127,127,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get_key)?indexed.db.store_test.test_get_key.cljs$lang$test:null)])));
indexed.db.store_test.test_get_all_no_key = (function indexed$db$store_test$test_get_all_no_key(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get_all_no_key.cljs$lang$var);
});
indexed.db.store_test.test_get_all_no_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1419 = (function (meta1420){
this.meta1420 = meta1420;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1421,meta1420__$1){
var self__ = this;
var _1421__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1419(meta1420__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1421){
var self__ = this;
var _1421__$1 = this;
return self__.meta1420;
}));

(indexed.db.store_test.t_indexed$db$store_test1419.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1419.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get_all.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList")),"success",(function (e){
try{var values__916__auto___1425 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__917__auto___1426 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1425);
if(cljs.core.truth_(result__917__auto___1426)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),144,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1425),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),144,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1425),null,(1),null)),(2),null)),null]));
}

}catch (e1423){var t__967__auto___1427 = e1423;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),144,t__967__auto___1427,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1419.prototype.apply = (function (self__,args1422){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1422)));
}));

(indexed.db.store_test.t_indexed$db$store_test1419.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.get_all.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList")),"success",(function (e){
try{var values__916__auto___1428 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__917__auto___1429 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1428);
if(cljs.core.truth_(result__917__auto___1429)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),144,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1428),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),144,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1428),null,(1),null)),(2),null)),null]));
}

}catch (e1424){var t__967__auto___1430 = e1424;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),144,t__967__auto___1430,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1420","meta1420",-329462790,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1419.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1419.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1419");

(indexed.db.store_test.t_indexed$db$store_test1419.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1419");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1419.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1419 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1419(meta1420){
return (new indexed.db.store_test.t_indexed$db$store_test1419(meta1420));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1419(null));
});

(indexed.db.store_test.test_get_all_no_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get_all_no_key;},new cljs.core.Symbol("indexed.db.store-test","test-get-all-no-key","indexed.db.store-test/test-get-all-no-key",1360171050,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get-all-no-key","test-get-all-no-key",1995753243,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",29,1,137,137,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get_all_no_key)?indexed.db.store_test.test_get_all_no_key.cljs$lang$test:null)])));
indexed.db.store_test.test_get_all_with_key = (function indexed$db$store_test$test_get_all_with_key(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get_all_with_key.cljs$lang$var);
});
indexed.db.store_test.test_get_all_with_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1431 = (function (meta1432){
this.meta1432 = meta1432;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1433,meta1432__$1){
var self__ = this;
var _1433__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1431(meta1432__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1433){
var self__ = this;
var _1433__$1 = this;
return self__.meta1432;
}));

(indexed.db.store_test.t_indexed$db$store_test1431.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1431.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get_all.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog")),"success",(function (e){
try{var values__916__auto___1437 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__917__auto___1438 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1437);
if(cljs.core.truth_(result__917__auto___1438)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),154,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1437),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),154,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1437),null,(1),null)),(2),null)),null]));
}

}catch (e1435){var t__967__auto___1439 = e1435;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),154,t__967__auto___1439,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1431.prototype.apply = (function (self__,args1434){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1434)));
}));

(indexed.db.store_test.t_indexed$db$store_test1431.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.get_all.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog")),"success",(function (e){
try{var values__916__auto___1440 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__917__auto___1441 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1440);
if(cljs.core.truth_(result__917__auto___1441)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),154,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1440),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),154,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1440),null,(1),null)),(2),null)),null]));
}

}catch (e1436){var t__967__auto___1442 = e1436;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,153,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),154,t__967__auto___1442,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1432","meta1432",-287800057,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1431.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1431.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1431");

(indexed.db.store_test.t_indexed$db$store_test1431.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1431");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1431.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1431 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1431(meta1432){
return (new indexed.db.store_test.t_indexed$db$store_test1431(meta1432));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1431(null));
});

(indexed.db.store_test.test_get_all_with_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get_all_with_key;},new cljs.core.Symbol("indexed.db.store-test","test-get-all-with-key","indexed.db.store-test/test-get-all-with-key",1081015886,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get-all-with-key","test-get-all-with-key",1763005373,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",31,1,147,147,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get_all_with_key)?indexed.db.store_test.test_get_all_with_key.cljs$lang$test:null)])));
indexed.db.store_test.test_get_all_with_key_and_count = (function indexed$db$store_test$test_get_all_with_key_and_count(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get_all_with_key_and_count.cljs$lang$var);
});
indexed.db.store_test.test_get_all_with_key_and_count.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1443 = (function (meta1444){
this.meta1444 = meta1444;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1445,meta1444__$1){
var self__ = this;
var _1445__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1443(meta1444__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1445){
var self__ = this;
var _1445__$1 = this;
return self__.meta1444;
}));

(indexed.db.store_test.t_indexed$db$store_test1443.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1443.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get_all.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog"),(2)),"success",(function (e){
try{var values__916__auto___1449 = (new cljs.core.List(null,(2),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__917__auto___1450 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1449);
if(cljs.core.truth_(result__917__auto___1450)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,163,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),164,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1449),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,163,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),164,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1449),null,(1),null)),(2),null)),null]));
}

}catch (e1447){var t__967__auto___1451 = e1447;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,163,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),164,t__967__auto___1451,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1443.prototype.apply = (function (self__,args1446){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1446)));
}));

(indexed.db.store_test.t_indexed$db$store_test1443.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.get_all.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog"),(2)),"success",(function (e){
try{var values__916__auto___1452 = (new cljs.core.List(null,(2),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__917__auto___1453 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1452);
if(cljs.core.truth_(result__917__auto___1453)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,163,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),164,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1452),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,163,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),164,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1452),null,(1),null)),(2),null)),null]));
}

}catch (e1448){var t__967__auto___1454 = e1448;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,163,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),164,t__967__auto___1454,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1444","meta1444",-2059539586,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1443.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1443.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1443");

(indexed.db.store_test.t_indexed$db$store_test1443.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1443");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1443.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1443 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1443(meta1444){
return (new indexed.db.store_test.t_indexed$db$store_test1443(meta1444));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1443(null));
});

(indexed.db.store_test.test_get_all_with_key_and_count.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get_all_with_key_and_count;},new cljs.core.Symbol("indexed.db.store-test","test-get-all-with-key-and-count","indexed.db.store-test/test-get-all-with-key-and-count",1378207299,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get-all-with-key-and-count","test-get-all-with-key-and-count",727610226,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",41,1,157,157,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get_all_with_key_and_count)?indexed.db.store_test.test_get_all_with_key_and_count.cljs$lang$test:null)])));
indexed.db.store_test.test_get_all_keys_no_key = (function indexed$db$store_test$test_get_all_keys_no_key(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get_all_keys_no_key.cljs$lang$var);
});
indexed.db.store_test.test_get_all_keys_no_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1455 = (function (meta1456){
this.meta1456 = meta1456;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1457,meta1456__$1){
var self__ = this;
var _1457__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1455(meta1456__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1457){
var self__ = this;
var _1457__$1 = this;
return self__.meta1456;
}));

(indexed.db.store_test.t_indexed$db$store_test1455.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1455.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get_all_keys.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList")),"success",(function (e){
try{var values__916__auto___1461 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__917__auto___1462 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1461);
if(cljs.core.truth_(result__917__auto___1462)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,173,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),174,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1461),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,173,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),174,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1461),null,(1),null)),(2),null)),null]));
}

}catch (e1459){var t__967__auto___1463 = e1459;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,173,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),174,t__967__auto___1463,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1455.prototype.apply = (function (self__,args1458){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1458)));
}));

(indexed.db.store_test.t_indexed$db$store_test1455.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.get_all_keys.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList")),"success",(function (e){
try{var values__916__auto___1464 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__917__auto___1465 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1464);
if(cljs.core.truth_(result__917__auto___1465)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,173,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),174,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1464),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,173,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),174,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1464),null,(1),null)),(2),null)),null]));
}

}catch (e1460){var t__967__auto___1466 = e1460;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,173,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),174,t__967__auto___1466,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1456","meta1456",-472002879,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1455.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1455.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1455");

(indexed.db.store_test.t_indexed$db$store_test1455.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1455");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1455.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1455 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1455(meta1456){
return (new indexed.db.store_test.t_indexed$db$store_test1455(meta1456));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1455(null));
});

(indexed.db.store_test.test_get_all_keys_no_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get_all_keys_no_key;},new cljs.core.Symbol("indexed.db.store-test","test-get-all-keys-no-key","indexed.db.store-test/test-get-all-keys-no-key",-1318691818,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get-all-keys-no-key","test-get-all-keys-no-key",-1677989023,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",34,1,167,167,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get_all_keys_no_key)?indexed.db.store_test.test_get_all_keys_no_key.cljs$lang$test:null)])));
indexed.db.store_test.test_get_all_keys_with_key = (function indexed$db$store_test$test_get_all_keys_with_key(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get_all_keys_with_key.cljs$lang$var);
});
indexed.db.store_test.test_get_all_keys_with_key.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1467 = (function (meta1468){
this.meta1468 = meta1468;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1469,meta1468__$1){
var self__ = this;
var _1469__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1467(meta1468__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1469){
var self__ = this;
var _1469__$1 = this;
return self__.meta1468;
}));

(indexed.db.store_test.t_indexed$db$store_test1467.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1467.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get_all_keys.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog")),"success",(function (e){
try{var values__916__auto___1473 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__917__auto___1474 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1473);
if(cljs.core.truth_(result__917__auto___1474)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,183,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),184,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1473),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,183,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),184,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1473),null,(1),null)),(2),null)),null]));
}

}catch (e1471){var t__967__auto___1475 = e1471;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,183,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),184,t__967__auto___1475,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1467.prototype.apply = (function (self__,args1470){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1470)));
}));

(indexed.db.store_test.t_indexed$db$store_test1467.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.get_all_keys.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog")),"success",(function (e){
try{var values__916__auto___1476 = (new cljs.core.List(null,(3),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__917__auto___1477 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1476);
if(cljs.core.truth_(result__917__auto___1477)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,183,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),184,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1476),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,183,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),184,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1476),null,(1),null)),(2),null)),null]));
}

}catch (e1472){var t__967__auto___1478 = e1472;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,183,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),184,t__967__auto___1478,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1468","meta1468",1348373500,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1467.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1467.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1467");

(indexed.db.store_test.t_indexed$db$store_test1467.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1467");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1467.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1467 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1467(meta1468){
return (new indexed.db.store_test.t_indexed$db$store_test1467(meta1468));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1467(null));
});

(indexed.db.store_test.test_get_all_keys_with_key.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get_all_keys_with_key;},new cljs.core.Symbol("indexed.db.store-test","test-get-all-keys-with-key","indexed.db.store-test/test-get-all-keys-with-key",692430145,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get-all-keys-with-key","test-get-all-keys-with-key",44300912,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",36,1,177,177,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get_all_keys_with_key)?indexed.db.store_test.test_get_all_keys_with_key.cljs$lang$test:null)])));
indexed.db.store_test.test_get_all_keys_with_key_and_count = (function indexed$db$store_test$test_get_all_keys_with_key_and_count(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_get_all_keys_with_key_and_count.cljs$lang$var);
});
indexed.db.store_test.test_get_all_keys_with_key_and_count.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1479 = (function (meta1480){
this.meta1480 = meta1480;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1481,meta1480__$1){
var self__ = this;
var _1481__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1479(meta1480__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1481){
var self__ = this;
var _1481__$1 = this;
return self__.meta1480;
}));

(indexed.db.store_test.t_indexed$db$store_test1479.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1479.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.on.call(null,indexed.db.get_all_keys.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog"),(2)),"success",(function (e){
try{var values__916__auto___1485 = (new cljs.core.List(null,(2),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__917__auto___1486 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1485);
if(cljs.core.truth_(result__917__auto___1486)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,193,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),194,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1485),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,193,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),194,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1485),null,(1),null)),(2),null)),null]));
}

}catch (e1483){var t__967__auto___1487 = e1483;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,193,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),194,t__967__auto___1487,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1479.prototype.apply = (function (self__,args1482){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1482)));
}));

(indexed.db.store_test.t_indexed$db$store_test1479.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.on.call(null,indexed.db.get_all_keys.call(null,indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList"),indexed.db.bound.call(null,"Party hard","Walk dog"),(2)),"success",(function (e){
try{var values__916__auto___1488 = (new cljs.core.List(null,(2),(new cljs.core.List(null,cljs.core.count.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))),null,(1),null)),(2),null));
var result__917__auto___1489 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1488);
if(cljs.core.truth_(result__917__auto___1489)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),39,193,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),194,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1488),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),39,193,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),194,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1488),null,(1),null)),(2),null)),null]));
}

}catch (e1484){var t__967__auto___1490 = e1484;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),39,193,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol("indexed.db","result","indexed.db/result",-488891257,null),cljs.core.list(new cljs.core.Symbol("util","event->request","util/event->request",637312648,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))),194,t__967__auto___1490,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1480","meta1480",2055206850,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1479.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1479.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1479");

(indexed.db.store_test.t_indexed$db$store_test1479.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1479");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1479.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1479 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1479(meta1480){
return (new indexed.db.store_test.t_indexed$db$store_test1479(meta1480));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1479(null));
});

(indexed.db.store_test.test_get_all_keys_with_key_and_count.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_get_all_keys_with_key_and_count;},new cljs.core.Symbol("indexed.db.store-test","test-get-all-keys-with-key-and-count","indexed.db.store-test/test-get-all-keys-with-key-and-count",817233037,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-get-all-keys-with-key-and-count","test-get-all-keys-with-key-and-count",-634417060,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",46,1,187,187,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_get_all_keys_with_key_and_count)?indexed.db.store_test.test_get_all_keys_with_key_and_count.cljs$lang$test:null)])));
indexed.db.store_test.test_getting_an_index = (function indexed$db$store_test$test_getting_an_index(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_getting_an_index.cljs$lang$var);
});
indexed.db.store_test.test_getting_an_index.cljs$lang$test = (function (){
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var index = indexed.db.index.call(null,todo_list,"hours");
try{var values__916__auto___1495 = (new cljs.core.List(null,index,null,(1),null));
var result__917__auto___1496 = cljs.core.apply.call(null,indexed.db.index_QMARK_,values__916__auto___1495);
if(cljs.core.truth_(result__917__auto___1496)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",34,new cljs.core.Keyword(null,"pass","pass",1574159993),9,200,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"index","index",108845612,null)),200,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),values__916__auto___1495),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",34,new cljs.core.Keyword(null,"fail","fail",1706214930),9,200,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"index","index",108845612,null)),200,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),values__916__auto___1495),null,(1),null)),(2),null)),null]));
}

}catch (e1491){var t__967__auto___1497 = e1491;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",34,new cljs.core.Keyword(null,"error","error",-978969032),9,200,cljs.core.list(new cljs.core.Symbol("indexed.db","index?","indexed.db/index?",2034205550,null),new cljs.core.Symbol(null,"index","index",108845612,null)),200,t__967__auto___1497,null]));
}
try{var values__916__auto___1498 = (new cljs.core.List(null,indexed.db.unique_QMARK_.call(null,index),null,(1),null));
var result__917__auto___1499 = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__916__auto___1498);
if(cljs.core.truth_(result__917__auto___1499)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),9,201,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","unique?","indexed.db/unique?",957342823,null),new cljs.core.Symbol(null,"index","index",108845612,null))),201,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__916__auto___1498),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),9,201,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","unique?","indexed.db/unique?",957342823,null),new cljs.core.Symbol(null,"index","index",108845612,null))),201,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__916__auto___1498),null,(1),null)),(2),null)),null]));
}

}catch (e1492){var t__967__auto___1500 = e1492;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),9,201,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","unique?","indexed.db/unique?",957342823,null),new cljs.core.Symbol(null,"index","index",108845612,null))),201,t__967__auto___1500,null]));
}
try{var values__916__auto___1501 = (new cljs.core.List(null,indexed.db.multi_entry_QMARK_.call(null,index),null,(1),null));
var result__917__auto___1502 = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__916__auto___1501);
if(cljs.core.truth_(result__917__auto___1502)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",49,new cljs.core.Keyword(null,"pass","pass",1574159993),9,202,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","multi-entry?","indexed.db/multi-entry?",392415938,null),new cljs.core.Symbol(null,"index","index",108845612,null))),202,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__916__auto___1501),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",49,new cljs.core.Keyword(null,"fail","fail",1706214930),9,202,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","multi-entry?","indexed.db/multi-entry?",392415938,null),new cljs.core.Symbol(null,"index","index",108845612,null))),202,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__916__auto___1501),null,(1),null)),(2),null)),null]));
}

}catch (e1493){var t__967__auto___1503 = e1493;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",49,new cljs.core.Keyword(null,"error","error",-978969032),9,202,cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol("indexed.db","multi-entry?","indexed.db/multi-entry?",392415938,null),new cljs.core.Symbol(null,"index","index",108845612,null))),202,t__967__auto___1503,null]));
}
try{var values__916__auto__ = (new cljs.core.List(null,indexed.db.get_object_store.call(null,index),null,(1),null));
var result__917__auto__ = cljs.core.apply.call(null,indexed.db.store_QMARK_,values__916__auto__);
if(cljs.core.truth_(result__917__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",64,new cljs.core.Keyword(null,"pass","pass",1574159993),9,203,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-object-store","indexed.db/get-object-store",-457399816,null),new cljs.core.Symbol(null,"index","index",108845612,null))),203,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),values__916__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",64,new cljs.core.Keyword(null,"fail","fail",1706214930),9,203,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-object-store","indexed.db/get-object-store",-457399816,null),new cljs.core.Symbol(null,"index","index",108845612,null))),203,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),values__916__auto__),null,(1),null)),(2),null)),null]));
}

return result__917__auto__;
}catch (e1494){var t__967__auto__ = e1494;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",64,new cljs.core.Keyword(null,"error","error",-978969032),9,203,cljs.core.list(new cljs.core.Symbol("indexed.db","store?","indexed.db/store?",1020588421,null),cljs.core.list(new cljs.core.Symbol("indexed.db","get-object-store","indexed.db/get-object-store",-457399816,null),new cljs.core.Symbol(null,"index","index",108845612,null))),203,t__967__auto__,null]));
}});

(indexed.db.store_test.test_getting_an_index.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_getting_an_index;},new cljs.core.Symbol("indexed.db.store-test","test-getting-an-index","indexed.db.store-test/test-getting-an-index",346376032,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-getting-an-index","test-getting-an-index",-339154401,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",31,1,197,197,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_getting_an_index)?indexed.db.store_test.test_getting_an_index.cljs$lang$test:null)])));
indexed.db.store_test.test_open_cursor_no_args = (function indexed$db$store_test$test_open_cursor_no_args(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_open_cursor_no_args.cljs$lang$var);
});
indexed.db.store_test.test_open_cursor_no_args.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1504 = (function (meta1505){
this.meta1505 = meta1505;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1506,meta1505__$1){
var self__ = this;
var _1506__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1504(meta1505__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1506){
var self__ = this;
var _1506__$1 = this;
return self__.meta1505;
}));

(indexed.db.store_test.t_indexed$db$store_test1504.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1504.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,todo_list),"success",(function (e){
var value = indexed.db.value.call(null,indexed.db.create_cursor_with_value.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))));
try{var values__916__auto___1510 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,value.taskTitle,null,(1),null)),(2),null));
var result__917__auto___1511 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1510);
if(cljs.core.truth_(result__917__auto___1511)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"pass","pass",1574159993),43,217,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),217,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1510),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"fail","fail",1706214930),43,217,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),217,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1510),null,(1),null)),(2),null)),null]));
}

}catch (e1508){var t__967__auto___1512 = e1508;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"error","error",-978969032),43,217,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),217,t__967__auto___1512,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1504.prototype.apply = (function (self__,args1507){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1507)));
}));

(indexed.db.store_test.t_indexed$db$store_test1504.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,todo_list),"success",(function (e){
var value = indexed.db.value.call(null,indexed.db.create_cursor_with_value.call(null,indexed.db.result.call(null,indexed.db.test_util.event__GT_request.call(null,e))));
try{var values__916__auto___1513 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,value.taskTitle,null,(1),null)),(2),null));
var result__917__auto___1514 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1513);
if(cljs.core.truth_(result__917__auto___1514)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"pass","pass",1574159993),43,217,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),217,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1513),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"fail","fail",1706214930),43,217,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),217,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1513),null,(1),null)),(2),null)),null]));
}

}catch (e1509){var t__967__auto___1515 = e1509;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",79,new cljs.core.Keyword(null,"error","error",-978969032),43,217,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),new cljs.core.Symbol(null,"value","value",1946509744,null))),217,t__967__auto___1515,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1505","meta1505",-1767023378,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1504.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1504.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1504");

(indexed.db.store_test.t_indexed$db$store_test1504.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1504");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1504.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1504 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1504(meta1505){
return (new indexed.db.store_test.t_indexed$db$store_test1504(meta1505));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1504(null));
});

(indexed.db.store_test.test_open_cursor_no_args.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_open_cursor_no_args;},new cljs.core.Symbol("indexed.db.store-test","test-open-cursor-no-args","indexed.db.store-test/test-open-cursor-no-args",-531216855,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-open-cursor-no-args","test-open-cursor-no-args",-945253608,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",34,1,207,207,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_open_cursor_no_args)?indexed.db.store_test.test_open_cursor_no_args.cljs$lang$test:null)])));
indexed.db.store_test.test_open_cursor_with_query = (function indexed$db$store_test$test_open_cursor_with_query(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_open_cursor_with_query.cljs$lang$var);
});
indexed.db.store_test.test_open_cursor_with_query.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1516 = (function (meta1517){
this.meta1517 = meta1517;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1518,meta1517__$1){
var self__ = this;
var _1518__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1516(meta1517__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1518){
var self__ = this;
var _1518__$1 = this;
return self__.meta1517;
}));

(indexed.db.store_test.t_indexed$db$store_test1516.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1516.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,todo_list,indexed.db.bound.call(null,"Read that book","Walk dog")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__916__auto___1526 = (new cljs.core.List(null,cursor,null,(1),null));
var result__917__auto___1527 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__916__auto___1526);
if(cljs.core.truth_(result__917__auto___1527)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,231,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),231,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1526),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,231,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),231,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1526),null,(1),null)),(2),null)),null]));
}

}catch (e1520){var t__967__auto___1528 = e1520;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,231,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),231,t__967__auto___1528,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__916__auto___1529 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__917__auto___1530 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1529);
if(cljs.core.truth_(result__917__auto___1530)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"pass","pass",1574159993),65,235,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),235,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1529),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"fail","fail",1706214930),65,235,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),235,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1529),null,(1),null)),(2),null)),null]));
}

}catch (e1521){var t__967__auto___1531 = e1521;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"error","error",-978969032),65,235,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),235,t__967__auto___1531,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__916__auto___1532 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__917__auto___1533 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1532);
if(cljs.core.truth_(result__917__auto___1533)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",119,new cljs.core.Keyword(null,"pass","pass",1574159993),65,236,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),236,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1532),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",119,new cljs.core.Keyword(null,"fail","fail",1706214930),65,236,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),236,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1532),null,(1),null)),(2),null)),null]));
}

}catch (e1522){var t__967__auto___1534 = e1522;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",119,new cljs.core.Keyword(null,"error","error",-978969032),65,236,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),236,t__967__auto___1534,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1516.prototype.apply = (function (self__,args1519){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1519)));
}));

(indexed.db.store_test.t_indexed$db$store_test1516.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,todo_list,indexed.db.bound.call(null,"Read that book","Walk dog")),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__916__auto___1535 = (new cljs.core.List(null,cursor,null,(1),null));
var result__917__auto___1536 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__916__auto___1535);
if(cljs.core.truth_(result__917__auto___1536)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,231,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),231,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1535),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,231,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),231,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1535),null,(1),null)),(2),null)),null]));
}

}catch (e1523){var t__967__auto___1537 = e1523;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,231,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),231,t__967__auto___1537,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__916__auto___1538 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__917__auto___1539 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1538);
if(cljs.core.truth_(result__917__auto___1539)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"pass","pass",1574159993),65,235,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),235,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1538),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"fail","fail",1706214930),65,235,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),235,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1538),null,(1),null)),(2),null)),null]));
}

}catch (e1524){var t__967__auto___1540 = e1524;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"error","error",-978969032),65,235,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),235,t__967__auto___1540,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__916__auto___1541 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__917__auto___1542 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1541);
if(cljs.core.truth_(result__917__auto___1542)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",119,new cljs.core.Keyword(null,"pass","pass",1574159993),65,236,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),236,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1541),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",119,new cljs.core.Keyword(null,"fail","fail",1706214930),65,236,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),236,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1541),null,(1),null)),(2),null)),null]));
}

}catch (e1525){var t__967__auto___1543 = e1525;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",119,new cljs.core.Keyword(null,"error","error",-978969032),65,236,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),236,t__967__auto___1543,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1517","meta1517",1069518029,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1516.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1516.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1516");

(indexed.db.store_test.t_indexed$db$store_test1516.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1516");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1516.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1516 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1516(meta1517){
return (new indexed.db.store_test.t_indexed$db$store_test1516(meta1517));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1516(null));
});

(indexed.db.store_test.test_open_cursor_with_query.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_open_cursor_with_query;},new cljs.core.Symbol("indexed.db.store-test","test-open-cursor-with-query","indexed.db.store-test/test-open-cursor-with-query",46031861,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-open-cursor-with-query","test-open-cursor-with-query",-116073278,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",37,1,220,220,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_open_cursor_with_query)?indexed.db.store_test.test_open_cursor_with_query.cljs$lang$test:null)])));
indexed.db.store_test.test_open_cursor_with_query_and_direction = (function indexed$db$store_test$test_open_cursor_with_query_and_direction(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_open_cursor_with_query_and_direction.cljs$lang$var);
});
indexed.db.store_test.test_open_cursor_with_query_and_direction.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1544 = (function (meta1545){
this.meta1545 = meta1545;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1546,meta1545__$1){
var self__ = this;
var _1546__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1544(meta1545__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1546){
var self__ = this;
var _1546__$1 = this;
return self__.meta1545;
}));

(indexed.db.store_test.t_indexed$db$store_test1544.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1544.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,todo_list,indexed.db.upper_bound.call(null,"Read that book"),"prev"),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__916__auto___1554 = (new cljs.core.List(null,cursor,null,(1),null));
var result__917__auto___1555 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__916__auto___1554);
if(cljs.core.truth_(result__917__auto___1555)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,251,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),251,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1554),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,251,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),251,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1554),null,(1),null)),(2),null)),null]));
}

}catch (e1548){var t__967__auto___1556 = e1548;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,251,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),251,t__967__auto___1556,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__916__auto___1557 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__917__auto___1558 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1557);
if(cljs.core.truth_(result__917__auto___1558)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"pass","pass",1574159993),65,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),255,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1557),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"fail","fail",1706214930),65,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),255,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1557),null,(1),null)),(2),null)),null]));
}

}catch (e1549){var t__967__auto___1559 = e1549;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"error","error",-978969032),65,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),255,t__967__auto___1559,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__916__auto___1560 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__917__auto___1561 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1560);
if(cljs.core.truth_(result__917__auto___1561)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",121,new cljs.core.Keyword(null,"pass","pass",1574159993),65,256,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),256,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1560),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",121,new cljs.core.Keyword(null,"fail","fail",1706214930),65,256,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),256,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1560),null,(1),null)),(2),null)),null]));
}

}catch (e1550){var t__967__auto___1562 = e1550;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",121,new cljs.core.Keyword(null,"error","error",-978969032),65,256,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),256,t__967__auto___1562,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1544.prototype.apply = (function (self__,args1547){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1547)));
}));

(indexed.db.store_test.t_indexed$db$store_test1544.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_cursor.call(null,todo_list,indexed.db.upper_bound.call(null,"Read that book"),"prev"),"success",(function (e){
var cursor = indexed.db.test_util.cursor_with_value.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__916__auto___1563 = (new cljs.core.List(null,cursor,null,(1),null));
var result__917__auto___1564 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__916__auto___1563);
if(cljs.core.truth_(result__917__auto___1564)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,251,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),251,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1563),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,251,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),251,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1563),null,(1),null)),(2),null)),null]));
}

}catch (e1551){var t__967__auto___1565 = e1551;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,251,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),251,t__967__auto___1565,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__916__auto___1566 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__917__auto___1567 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1566);
if(cljs.core.truth_(result__917__auto___1567)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"pass","pass",1574159993),65,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),255,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1566),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"fail","fail",1706214930),65,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),255,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1566),null,(1),null)),(2),null)),null]));
}

}catch (e1552){var t__967__auto___1568 = e1552;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",125,new cljs.core.Keyword(null,"error","error",-978969032),65,255,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),255,t__967__auto___1568,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__916__auto___1569 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,indexed.db.value.call(null,cursor).taskTitle,null,(1),null)),(2),null));
var result__917__auto___1570 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1569);
if(cljs.core.truth_(result__917__auto___1570)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",121,new cljs.core.Keyword(null,"pass","pass",1574159993),65,256,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),256,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1569),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",121,new cljs.core.Keyword(null,"fail","fail",1706214930),65,256,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),256,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1569),null,(1),null)),(2),null)),null]));
}

}catch (e1553){var t__967__auto___1571 = e1553;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",121,new cljs.core.Keyword(null,"error","error",-978969032),65,256,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol(null,".-taskTitle",".-taskTitle",-900764330,null),cljs.core.list(new cljs.core.Symbol("indexed.db","value","indexed.db/value",-2081915299,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)))),256,t__967__auto___1571,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1545","meta1545",1989311324,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1544.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1544.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1544");

(indexed.db.store_test.t_indexed$db$store_test1544.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1544");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1544.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1544 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1544(meta1545){
return (new indexed.db.store_test.t_indexed$db$store_test1544(meta1545));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1544(null));
});

(indexed.db.store_test.test_open_cursor_with_query_and_direction.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_open_cursor_with_query_and_direction;},new cljs.core.Symbol("indexed.db.store-test","test-open-cursor-with-query-and-direction","indexed.db.store-test/test-open-cursor-with-query-and-direction",-483765787,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-open-cursor-with-query-and-direction","test-open-cursor-with-query-and-direction",-846404044,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",51,1,240,240,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_open_cursor_with_query_and_direction)?indexed.db.store_test.test_open_cursor_with_query_and_direction.cljs$lang$test:null)])));
indexed.db.store_test.test_open_key_cursor_no_args = (function indexed$db$store_test$test_open_key_cursor_no_args(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_open_key_cursor_no_args.cljs$lang$var);
});
indexed.db.store_test.test_open_key_cursor_no_args.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1572 = (function (meta1573){
this.meta1573 = meta1573;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1574,meta1573__$1){
var self__ = this;
var _1574__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1572(meta1573__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1574){
var self__ = this;
var _1574__$1 = this;
return self__.meta1573;
}));

(indexed.db.store_test.t_indexed$db$store_test1572.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1572.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
return indexed.db.on.call(null,indexed.db.open_key_cursor.call(null,todo_list),"success",(function (e){
var k = indexed.db.key.call(null,indexed.db.test_util.cursor.call(null,e));
try{var values__916__auto___1578 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,k,null,(1),null)),(2),null));
var result__917__auto___1579 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1578);
if(cljs.core.truth_(result__917__auto___1579)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",61,new cljs.core.Keyword(null,"pass","pass",1574159993),43,267,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",new cljs.core.Symbol(null,"k","k",-505765866,null)),267,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1578),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",61,new cljs.core.Keyword(null,"fail","fail",1706214930),43,267,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",new cljs.core.Symbol(null,"k","k",-505765866,null)),267,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1578),null,(1),null)),(2),null)),null]));
}

}catch (e1576){var t__967__auto___1580 = e1576;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",61,new cljs.core.Keyword(null,"error","error",-978969032),43,267,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",new cljs.core.Symbol(null,"k","k",-505765866,null)),267,t__967__auto___1580,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1572.prototype.apply = (function (self__,args1575){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1575)));
}));

(indexed.db.store_test.t_indexed$db$store_test1572.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
return indexed.db.on.call(null,indexed.db.open_key_cursor.call(null,todo_list),"success",(function (e){
var k = indexed.db.key.call(null,indexed.db.test_util.cursor.call(null,e));
try{var values__916__auto___1581 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,k,null,(1),null)),(2),null));
var result__917__auto___1582 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1581);
if(cljs.core.truth_(result__917__auto___1582)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",61,new cljs.core.Keyword(null,"pass","pass",1574159993),43,267,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",new cljs.core.Symbol(null,"k","k",-505765866,null)),267,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1581),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",61,new cljs.core.Keyword(null,"fail","fail",1706214930),43,267,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",new cljs.core.Symbol(null,"k","k",-505765866,null)),267,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1581),null,(1),null)),(2),null)),null]));
}

}catch (e1577){var t__967__auto___1583 = e1577;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",61,new cljs.core.Keyword(null,"error","error",-978969032),43,267,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",new cljs.core.Symbol(null,"k","k",-505765866,null)),267,t__967__auto___1583,null]));
}
return done.call(null);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1573","meta1573",766903515,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1572.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1572.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1572");

(indexed.db.store_test.t_indexed$db$store_test1572.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1572");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1572.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1572 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1572(meta1573){
return (new indexed.db.store_test.t_indexed$db$store_test1572(meta1573));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1572(null));
});

(indexed.db.store_test.test_open_key_cursor_no_args.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_open_key_cursor_no_args;},new cljs.core.Symbol("indexed.db.store-test","test-open-key-cursor-no-args","indexed.db.store-test/test-open-key-cursor-no-args",982565330,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-open-key-cursor-no-args","test-open-key-cursor-no-args",1567520003,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",38,1,260,260,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_open_key_cursor_no_args)?indexed.db.store_test.test_open_key_cursor_no_args.cljs$lang$test:null)])));
indexed.db.store_test.test_open_key_cursor_with_query = (function indexed$db$store_test$test_open_key_cursor_with_query(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_open_key_cursor_with_query.cljs$lang$var);
});
indexed.db.store_test.test_open_key_cursor_with_query.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1584 = (function (meta1585){
this.meta1585 = meta1585;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1586,meta1585__$1){
var self__ = this;
var _1586__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1584(meta1585__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1586){
var self__ = this;
var _1586__$1 = this;
return self__.meta1585;
}));

(indexed.db.store_test.t_indexed$db$store_test1584.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1584.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_key_cursor.call(null,todo_list,indexed.db.bound.call(null,"Read that book","Walk dog")),"success",(function (e){
var cursor = indexed.db.test_util.cursor.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__916__auto___1594 = (new cljs.core.List(null,cursor,null,(1),null));
var result__917__auto___1595 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__916__auto___1594);
if(cljs.core.truth_(result__917__auto___1595)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,281,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),281,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1594),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,281,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),281,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1594),null,(1),null)),(2),null)),null]));
}

}catch (e1588){var t__967__auto___1596 = e1588;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,281,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),281,t__967__auto___1596,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__916__auto___1597 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__917__auto___1598 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1597);
if(cljs.core.truth_(result__917__auto___1598)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"pass","pass",1574159993),65,285,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),285,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1597),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"fail","fail",1706214930),65,285,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),285,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1597),null,(1),null)),(2),null)),null]));
}

}catch (e1589){var t__967__auto___1599 = e1589;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"error","error",-978969032),65,285,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),285,t__967__auto___1599,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__916__auto___1600 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__917__auto___1601 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1600);
if(cljs.core.truth_(result__917__auto___1601)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",103,new cljs.core.Keyword(null,"pass","pass",1574159993),65,286,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),286,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1600),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",103,new cljs.core.Keyword(null,"fail","fail",1706214930),65,286,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),286,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1600),null,(1),null)),(2),null)),null]));
}

}catch (e1590){var t__967__auto___1602 = e1590;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",103,new cljs.core.Keyword(null,"error","error",-978969032),65,286,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),286,t__967__auto___1602,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1584.prototype.apply = (function (self__,args1587){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1587)));
}));

(indexed.db.store_test.t_indexed$db$store_test1584.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_key_cursor.call(null,todo_list,indexed.db.bound.call(null,"Read that book","Walk dog")),"success",(function (e){
var cursor = indexed.db.test_util.cursor.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__916__auto___1603 = (new cljs.core.List(null,cursor,null,(1),null));
var result__917__auto___1604 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__916__auto___1603);
if(cljs.core.truth_(result__917__auto___1604)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,281,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),281,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1603),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,281,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),281,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1603),null,(1),null)),(2),null)),null]));
}

}catch (e1591){var t__967__auto___1605 = e1591;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,281,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),281,t__967__auto___1605,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__916__auto___1606 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__917__auto___1607 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1606);
if(cljs.core.truth_(result__917__auto___1607)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"pass","pass",1574159993),65,285,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),285,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1606),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"fail","fail",1706214930),65,285,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),285,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1606),null,(1),null)),(2),null)),null]));
}

}catch (e1592){var t__967__auto___1608 = e1592;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"error","error",-978969032),65,285,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),285,t__967__auto___1608,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__916__auto___1609 = (new cljs.core.List(null,"Walk dog",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__917__auto___1610 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1609);
if(cljs.core.truth_(result__917__auto___1610)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",103,new cljs.core.Keyword(null,"pass","pass",1574159993),65,286,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),286,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1609),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",103,new cljs.core.Keyword(null,"fail","fail",1706214930),65,286,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),286,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1609),null,(1),null)),(2),null)),null]));
}

}catch (e1593){var t__967__auto___1611 = e1593;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",103,new cljs.core.Keyword(null,"error","error",-978969032),65,286,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Walk dog",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),286,t__967__auto___1611,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1585","meta1585",-884866335,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1584.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1584.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1584");

(indexed.db.store_test.t_indexed$db$store_test1584.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1584");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1584.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1584 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1584(meta1585){
return (new indexed.db.store_test.t_indexed$db$store_test1584(meta1585));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1584(null));
});

(indexed.db.store_test.test_open_key_cursor_with_query.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_open_key_cursor_with_query;},new cljs.core.Symbol("indexed.db.store-test","test-open-key-cursor-with-query","indexed.db.store-test/test-open-key-cursor-with-query",-1141903328,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-open-key-cursor-with-query","test-open-key-cursor-with-query",-1668702991,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",41,1,270,270,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_open_key_cursor_with_query)?indexed.db.store_test.test_open_key_cursor_with_query.cljs$lang$test:null)])));
indexed.db.store_test.test_open_key_cursor_with_query_and_direction = (function indexed$db$store_test$test_open_key_cursor_with_query_and_direction(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_open_key_cursor_with_query_and_direction.cljs$lang$var);
});
indexed.db.store_test.test_open_key_cursor_with_query_and_direction.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1612 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1612 = (function (meta1613){
this.meta1613 = meta1613;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1614,meta1613__$1){
var self__ = this;
var _1614__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1612(meta1613__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1614){
var self__ = this;
var _1614__$1 = this;
return self__.meta1613;
}));

(indexed.db.store_test.t_indexed$db$store_test1612.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1612.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_key_cursor.call(null,todo_list,indexed.db.upper_bound.call(null,"Read that book"),"prev"),"success",(function (e){
var cursor = indexed.db.test_util.cursor.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__916__auto___1622 = (new cljs.core.List(null,cursor,null,(1),null));
var result__917__auto___1623 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__916__auto___1622);
if(cljs.core.truth_(result__917__auto___1623)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,301,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),301,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1622),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,301,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),301,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1622),null,(1),null)),(2),null)),null]));
}

}catch (e1616){var t__967__auto___1624 = e1616;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,301,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),301,t__967__auto___1624,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__916__auto___1625 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__917__auto___1626 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1625);
if(cljs.core.truth_(result__917__auto___1626)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"pass","pass",1574159993),65,305,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),305,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1625),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"fail","fail",1706214930),65,305,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),305,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1625),null,(1),null)),(2),null)),null]));
}

}catch (e1617){var t__967__auto___1627 = e1617;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"error","error",-978969032),65,305,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),305,t__967__auto___1627,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__916__auto___1628 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__917__auto___1629 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1628);
if(cljs.core.truth_(result__917__auto___1629)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",105,new cljs.core.Keyword(null,"pass","pass",1574159993),65,306,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),306,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1628),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",105,new cljs.core.Keyword(null,"fail","fail",1706214930),65,306,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),306,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1628),null,(1),null)),(2),null)),null]));
}

}catch (e1618){var t__967__auto___1630 = e1618;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",105,new cljs.core.Keyword(null,"error","error",-978969032),65,306,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),306,t__967__auto___1630,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1612.prototype.apply = (function (self__,args1615){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1615)));
}));

(indexed.db.store_test.t_indexed$db$store_test1612.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList");
var _STAR_iteration = cljs.core.atom.call(null,(0));
return indexed.db.on.call(null,indexed.db.open_key_cursor.call(null,todo_list,indexed.db.upper_bound.call(null,"Read that book"),"prev"),"success",(function (e){
var cursor = indexed.db.test_util.cursor.call(null,e);
var iteration = cljs.core.swap_BANG_.call(null,_STAR_iteration,cljs.core.inc);
if((!((iteration < (3))))){
try{var values__916__auto___1631 = (new cljs.core.List(null,cursor,null,(1),null));
var result__917__auto___1632 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__916__auto___1631);
if(cljs.core.truth_(result__917__auto___1632)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),47,301,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),301,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1631),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),47,301,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),301,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__916__auto___1631),null,(1),null)),(2),null)),null]));
}

}catch (e1619){var t__967__auto___1633 = e1619;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),47,301,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null)),301,t__967__auto___1633,null]));
}
return done.call(null);
} else {
if(cljs.core._EQ_.call(null,iteration,(1))){
try{var values__916__auto___1634 = (new cljs.core.List(null,"Read that book",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__917__auto___1635 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1634);
if(cljs.core.truth_(result__917__auto___1635)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"pass","pass",1574159993),65,305,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),305,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1634),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"fail","fail",1706214930),65,305,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),305,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1634),null,(1),null)),(2),null)),null]));
}

}catch (e1620){var t__967__auto___1636 = e1620;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",109,new cljs.core.Keyword(null,"error","error",-978969032),65,305,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Read that book",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),305,t__967__auto___1636,null]));
}} else {
if(cljs.core._EQ_.call(null,iteration,(2))){
try{var values__916__auto___1637 = (new cljs.core.List(null,"Party hard",(new cljs.core.List(null,indexed.db.key.call(null,cursor),null,(1),null)),(2),null));
var result__917__auto___1638 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1637);
if(cljs.core.truth_(result__917__auto___1638)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",105,new cljs.core.Keyword(null,"pass","pass",1574159993),65,306,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),306,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1637),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",105,new cljs.core.Keyword(null,"fail","fail",1706214930),65,306,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),306,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1637),null,(1),null)),(2),null)),null]));
}

}catch (e1621){var t__967__auto___1639 = e1621;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",105,new cljs.core.Keyword(null,"error","error",-978969032),65,306,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Party hard",cljs.core.list(new cljs.core.Symbol("indexed.db","key","indexed.db/key",-262239721,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))),306,t__967__auto___1639,null]));
}} else {
throw cljs.core.ex_info.call(null,"Unexpected cursor iteration",cljs.core.PersistentArrayMap.EMPTY);

}
}

return indexed.db.continue$.call(null,cursor);
}
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1613","meta1613",-877388094,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1612.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1612.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1612");

(indexed.db.store_test.t_indexed$db$store_test1612.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1612");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1612.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1612 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1612(meta1613){
return (new indexed.db.store_test.t_indexed$db$store_test1612(meta1613));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1612(null));
});

(indexed.db.store_test.test_open_key_cursor_with_query_and_direction.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_open_key_cursor_with_query_and_direction;},new cljs.core.Symbol("indexed.db.store-test","test-open-key-cursor-with-query-and-direction","indexed.db.store-test/test-open-key-cursor-with-query-and-direction",-1399044699,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-open-key-cursor-with-query-and-direction","test-open-key-cursor-with-query-and-direction",-897937164,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",55,1,290,290,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_open_key_cursor_with_query_and_direction)?indexed.db.store_test.test_open_key_cursor_with_query_and_direction.cljs$lang$test:null)])));
indexed.db.store_test.test_put = (function indexed$db$store_test$test_put(){
return cljs.test.test_var.call(null,indexed.db.store_test.test_put.cljs$lang$var);
});
indexed.db.store_test.test_put.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.store_test !== 'undefined') && (typeof indexed.db.store_test.t_indexed$db$store_test1640 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.store_test.t_indexed$db$store_test1640 = (function (meta1641){
this.meta1641 = meta1641;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.store_test.t_indexed$db$store_test1640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1642,meta1641__$1){
var self__ = this;
var _1642__$1 = this;
return (new indexed.db.store_test.t_indexed$db$store_test1640(meta1641__$1));
}));

(indexed.db.store_test.t_indexed$db$store_test1640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1642){
var self__ = this;
var _1642__$1 = this;
return self__.meta1641;
}));

(indexed.db.store_test.t_indexed$db$store_test1640.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.store_test.t_indexed$db$store_test1640.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList","readwrite");
var task_req = indexed.db.get.call(null,todo_list,"Walk dog");
return indexed.db.on.call(null,task_req,"success",(function (e){
var request = indexed.db.test_util.event__GT_request.call(null,e);
var task = indexed.db.result.call(null,request);
(task.notified = "yes");

return indexed.db.on.call(null,indexed.db.put.call(null,todo_list,task),"success",done);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1640.prototype.apply = (function (self__,args1643){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1643)));
}));

(indexed.db.store_test.t_indexed$db$store_test1640.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
var todo_list = indexed.db.test_util.store.call(null,cljs.core.deref.call(null,indexed.db.store_test._STAR_db),"toDoList","readwrite");
var task_req = indexed.db.get.call(null,todo_list,"Walk dog");
return indexed.db.on.call(null,task_req,"success",(function (e){
var request = indexed.db.test_util.event__GT_request.call(null,e);
var task = indexed.db.result.call(null,request);
(task.notified = "yes");

return indexed.db.on.call(null,indexed.db.put.call(null,todo_list,task),"success",done);
}));
}));

(indexed.db.store_test.t_indexed$db$store_test1640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1641","meta1641",1511911214,null)], null);
}));

(indexed.db.store_test.t_indexed$db$store_test1640.cljs$lang$type = true);

(indexed.db.store_test.t_indexed$db$store_test1640.cljs$lang$ctorStr = "indexed.db.store-test/t_indexed$db$store_test1640");

(indexed.db.store_test.t_indexed$db$store_test1640.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.store-test/t_indexed$db$store_test1640");
}));

/**
 * Positional factory function for indexed.db.store-test/t_indexed$db$store_test1640.
 */
indexed.db.store_test.__GT_t_indexed$db$store_test1640 = (function indexed$db$store_test$__GT_t_indexed$db$store_test1640(meta1641){
return (new indexed.db.store_test.t_indexed$db$store_test1640(meta1641));
});

}

return (new indexed.db.store_test.t_indexed$db$store_test1640(null));
});

(indexed.db.store_test.test_put.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.store_test.test_put;},new cljs.core.Symbol("indexed.db.store-test","test-put","indexed.db.store-test/test-put",-2102015323,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.store-test","indexed.db.store-test",-566970013,null),new cljs.core.Symbol(null,"test-put","test-put",1842330100,null),"/Users/brian/projects/indexed.db/test/indexed/db/store_test.cljs",18,1,310,310,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.store_test.test_put)?indexed.db.store_test.test_put.cljs$lang$test:null)])));

//# sourceMappingURL=store_test.js.map
