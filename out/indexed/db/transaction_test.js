// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('indexed.db.transaction_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('indexed.db');
goog.require('indexed.db.test_util');
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.transaction_test !== 'undefined') && (typeof indexed.db.transaction_test._STAR_db !== 'undefined')){
} else {
indexed.db.transaction_test._STAR_db = cljs.core.atom.call(null,null);
}
indexed.db.transaction_test.database_name = "indexed.db.txn-test";
indexed.db.transaction_test.database_version = (1);
indexed.db.transaction_test.cljs_test_once_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.transaction_test !== 'undefined') && (typeof indexed.db.transaction_test.t_indexed$db$transaction_test1646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.transaction_test.t_indexed$db$transaction_test1646 = (function (meta1647){
this.meta1647 = meta1647;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.transaction_test.t_indexed$db$transaction_test1646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1648,meta1647__$1){
var self__ = this;
var _1648__$1 = this;
return (new indexed.db.transaction_test.t_indexed$db$transaction_test1646(meta1647__$1));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1648){
var self__ = this;
var _1648__$1 = this;
return self__.meta1647;
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1646.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.transaction_test.t_indexed$db$transaction_test1646.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.test_util.create_task_db.call(null,indexed.db.transaction_test._STAR_db,done,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","name","db/name",1843678379),indexed.db.transaction_test.database_name,new cljs.core.Keyword("db","version","db/version",425264924),indexed.db.transaction_test.database_version], null));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1646.prototype.apply = (function (self__,args1649){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1649)));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1646.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.test_util.create_task_db.call(null,indexed.db.transaction_test._STAR_db,done,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","name","db/name",1843678379),indexed.db.transaction_test.database_name,new cljs.core.Keyword("db","version","db/version",425264924),indexed.db.transaction_test.database_version], null));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1647","meta1647",-963194111,null)], null);
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1646.cljs$lang$type = true);

(indexed.db.transaction_test.t_indexed$db$transaction_test1646.cljs$lang$ctorStr = "indexed.db.transaction-test/t_indexed$db$transaction_test1646");

(indexed.db.transaction_test.t_indexed$db$transaction_test1646.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.transaction-test/t_indexed$db$transaction_test1646");
}));

/**
 * Positional factory function for indexed.db.transaction-test/t_indexed$db$transaction_test1646.
 */
indexed.db.transaction_test.__GT_t_indexed$db$transaction_test1646 = (function indexed$db$transaction_test$__GT_t_indexed$db$transaction_test1646(meta1647){
return (new indexed.db.transaction_test.t_indexed$db$transaction_test1646(meta1647));
});

}

return (new indexed.db.transaction_test.t_indexed$db$transaction_test1646(null));
})], null)], null);
indexed.db.transaction_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.transaction_test !== 'undefined') && (typeof indexed.db.transaction_test.t_indexed$db$transaction_test1650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.transaction_test.t_indexed$db$transaction_test1650 = (function (meta1651){
this.meta1651 = meta1651;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.transaction_test.t_indexed$db$transaction_test1650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1652,meta1651__$1){
var self__ = this;
var _1652__$1 = this;
return (new indexed.db.transaction_test.t_indexed$db$transaction_test1650(meta1651__$1));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1652){
var self__ = this;
var _1652__$1 = this;
return self__.meta1651;
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1650.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.transaction_test.t_indexed$db$transaction_test1650.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.test_util.seed_tasks.call(null,cljs.core.deref.call(null,indexed.db.transaction_test._STAR_db),done);
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1650.prototype.apply = (function (self__,args1653){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1653)));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1650.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.test_util.seed_tasks.call(null,cljs.core.deref.call(null,indexed.db.transaction_test._STAR_db),done);
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1651","meta1651",-593608964,null)], null);
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1650.cljs$lang$type = true);

(indexed.db.transaction_test.t_indexed$db$transaction_test1650.cljs$lang$ctorStr = "indexed.db.transaction-test/t_indexed$db$transaction_test1650");

(indexed.db.transaction_test.t_indexed$db$transaction_test1650.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.transaction-test/t_indexed$db$transaction_test1650");
}));

/**
 * Positional factory function for indexed.db.transaction-test/t_indexed$db$transaction_test1650.
 */
indexed.db.transaction_test.__GT_t_indexed$db$transaction_test1650 = (function indexed$db$transaction_test$__GT_t_indexed$db$transaction_test1650(meta1651){
return (new indexed.db.transaction_test.t_indexed$db$transaction_test1650(meta1651));
});

}

return (new indexed.db.transaction_test.t_indexed$db$transaction_test1650(null));
}),new cljs.core.Keyword(null,"after","after",594996914),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.transaction_test !== 'undefined') && (typeof indexed.db.transaction_test.t_indexed$db$transaction_test1654 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.transaction_test.t_indexed$db$transaction_test1654 = (function (meta1655){
this.meta1655 = meta1655;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.transaction_test.t_indexed$db$transaction_test1654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1656,meta1655__$1){
var self__ = this;
var _1656__$1 = this;
return (new indexed.db.transaction_test.t_indexed$db$transaction_test1654(meta1655__$1));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1656){
var self__ = this;
var _1656__$1 = this;
return self__.meta1655;
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1654.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.transaction_test.t_indexed$db$transaction_test1654.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.test_util.reset_tasks.call(null,cljs.core.deref.call(null,indexed.db.transaction_test._STAR_db),done);
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1654.prototype.apply = (function (self__,args1657){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1657)));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1654.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.test_util.reset_tasks.call(null,cljs.core.deref.call(null,indexed.db.transaction_test._STAR_db),done);
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1655","meta1655",-988079527,null)], null);
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1654.cljs$lang$type = true);

(indexed.db.transaction_test.t_indexed$db$transaction_test1654.cljs$lang$ctorStr = "indexed.db.transaction-test/t_indexed$db$transaction_test1654");

(indexed.db.transaction_test.t_indexed$db$transaction_test1654.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.transaction-test/t_indexed$db$transaction_test1654");
}));

/**
 * Positional factory function for indexed.db.transaction-test/t_indexed$db$transaction_test1654.
 */
indexed.db.transaction_test.__GT_t_indexed$db$transaction_test1654 = (function indexed$db$transaction_test$__GT_t_indexed$db$transaction_test1654(meta1655){
return (new indexed.db.transaction_test.t_indexed$db$transaction_test1654(meta1655));
});

}

return (new indexed.db.transaction_test.t_indexed$db$transaction_test1654(null));
})()
], null)], null);
indexed.db.transaction_test.test_db = (function indexed$db$transaction_test$test_db(){
return cljs.test.test_var.call(null,indexed.db.transaction_test.test_db.cljs$lang$var);
});
indexed.db.transaction_test.test_db.cljs$lang$test = (function (){
var transaction = indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.transaction_test._STAR_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null));
try{var values__916__auto__ = (new cljs.core.List(null,indexed.db.db.call(null,transaction),null,(1),null));
var result__917__auto__ = cljs.core.apply.call(null,indexed.db.database_QMARK_,values__916__auto__);
if(cljs.core.truth_(result__917__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),9,30,cljs.core.list(new cljs.core.Symbol("indexed.db","database?","indexed.db/database?",-1202720856,null),cljs.core.list(new cljs.core.Symbol("indexed.db","db","indexed.db/db",-1311286603,null),new cljs.core.Symbol(null,"transaction","transaction",-877113772,null))),30,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","database?","indexed.db/database?",-1202720856,null),values__916__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),9,30,cljs.core.list(new cljs.core.Symbol("indexed.db","database?","indexed.db/database?",-1202720856,null),cljs.core.list(new cljs.core.Symbol("indexed.db","db","indexed.db/db",-1311286603,null),new cljs.core.Symbol(null,"transaction","transaction",-877113772,null))),30,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("indexed.db","database?","indexed.db/database?",-1202720856,null),values__916__auto__),null,(1),null)),(2),null)),null]));
}

return result__917__auto__;
}catch (e1658){var t__967__auto__ = e1658;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),9,30,cljs.core.list(new cljs.core.Symbol("indexed.db","database?","indexed.db/database?",-1202720856,null),cljs.core.list(new cljs.core.Symbol("indexed.db","db","indexed.db/db",-1311286603,null),new cljs.core.Symbol(null,"transaction","transaction",-877113772,null))),30,t__967__auto__,null]));
}});

(indexed.db.transaction_test.test_db.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.transaction_test.test_db;},new cljs.core.Symbol("indexed.db.transaction-test","test-db","indexed.db.transaction-test/test-db",-1419872416,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.transaction-test","indexed.db.transaction-test",1315847992,null),new cljs.core.Symbol(null,"test-db","test-db",-1092012932,null),"/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",17,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.transaction_test.test_db)?indexed.db.transaction_test.test_db.cljs$lang$test:null)])));
indexed.db.transaction_test.test_durability = (function indexed$db$transaction_test$test_durability(){
return cljs.test.test_var.call(null,indexed.db.transaction_test.test_durability.cljs$lang$var);
});
indexed.db.transaction_test.test_durability.cljs$lang$test = (function (){
var transaction = indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.transaction_test._STAR_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null));
try{var values__916__auto__ = (new cljs.core.List(null,"default",(new cljs.core.List(null,indexed.db.durability.call(null,transaction),null,(1),null)),(2),null));
var result__917__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto__);
if(cljs.core.truth_(result__917__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",58,new cljs.core.Keyword(null,"pass","pass",1574159993),9,34,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"default",cljs.core.list(new cljs.core.Symbol("indexed.db","durability","indexed.db/durability",-660067276,null),new cljs.core.Symbol(null,"transaction","transaction",-877113772,null))),34,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",58,new cljs.core.Keyword(null,"fail","fail",1706214930),9,34,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"default",cljs.core.list(new cljs.core.Symbol("indexed.db","durability","indexed.db/durability",-660067276,null),new cljs.core.Symbol(null,"transaction","transaction",-877113772,null))),34,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null,(1),null)),(2),null)),null]));
}

return result__917__auto__;
}catch (e1659){var t__967__auto__ = e1659;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",58,new cljs.core.Keyword(null,"error","error",-978969032),9,34,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"default",cljs.core.list(new cljs.core.Symbol("indexed.db","durability","indexed.db/durability",-660067276,null),new cljs.core.Symbol(null,"transaction","transaction",-877113772,null))),34,t__967__auto__,null]));
}});

(indexed.db.transaction_test.test_durability.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.transaction_test.test_durability;},new cljs.core.Symbol("indexed.db.transaction-test","test-durability","indexed.db.transaction-test/test-durability",-161613419,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.transaction-test","indexed.db.transaction-test",1315847992,null),new cljs.core.Symbol(null,"test-durability","test-durability",79967369,null),"/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",25,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.transaction_test.test_durability)?indexed.db.transaction_test.test_durability.cljs$lang$test:null)])));
indexed.db.transaction_test.test_mode = (function indexed$db$transaction_test$test_mode(){
return cljs.test.test_var.call(null,indexed.db.transaction_test.test_mode.cljs$lang$var);
});
indexed.db.transaction_test.test_mode.cljs$lang$test = (function (){
var transaction = indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.transaction_test._STAR_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null));
try{var values__916__auto__ = (new cljs.core.List(null,"readonly",(new cljs.core.List(null,indexed.db.mode.call(null,transaction),null,(1),null)),(2),null));
var result__917__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto__);
if(cljs.core.truth_(result__917__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",53,new cljs.core.Keyword(null,"pass","pass",1574159993),9,38,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"readonly",cljs.core.list(new cljs.core.Symbol("indexed.db","mode","indexed.db/mode",1576333151,null),new cljs.core.Symbol(null,"transaction","transaction",-877113772,null))),38,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",53,new cljs.core.Keyword(null,"fail","fail",1706214930),9,38,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"readonly",cljs.core.list(new cljs.core.Symbol("indexed.db","mode","indexed.db/mode",1576333151,null),new cljs.core.Symbol(null,"transaction","transaction",-877113772,null))),38,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null,(1),null)),(2),null)),null]));
}

return result__917__auto__;
}catch (e1660){var t__967__auto__ = e1660;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",53,new cljs.core.Keyword(null,"error","error",-978969032),9,38,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"readonly",cljs.core.list(new cljs.core.Symbol("indexed.db","mode","indexed.db/mode",1576333151,null),new cljs.core.Symbol(null,"transaction","transaction",-877113772,null))),38,t__967__auto__,null]));
}});

(indexed.db.transaction_test.test_mode.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.transaction_test.test_mode;},new cljs.core.Symbol("indexed.db.transaction-test","test-mode","indexed.db.transaction-test/test-mode",1423057746,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.transaction-test","indexed.db.transaction-test",1315847992,null),new cljs.core.Symbol(null,"test-mode","test-mode",1247503942,null),"/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",19,1,36,36,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.transaction_test.test_mode)?indexed.db.transaction_test.test_mode.cljs$lang$test:null)])));
indexed.db.transaction_test.test_object_store_names = (function indexed$db$transaction_test$test_object_store_names(){
return cljs.test.test_var.call(null,indexed.db.transaction_test.test_object_store_names.cljs$lang$var);
});
indexed.db.transaction_test.test_object_store_names.cljs$lang$test = (function (){
var transaction = indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.transaction_test._STAR_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null));
try{var values__916__auto__ = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),(new cljs.core.List(null,indexed.db.object_store_names.call(null,transaction),null,(1),null)),(2),null));
var result__917__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto__);
if(cljs.core.truth_(result__917__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",69,new cljs.core.Keyword(null,"pass","pass",1574159993),9,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","object-store-names","indexed.db/object-store-names",-1275305995,null),new cljs.core.Symbol(null,"transaction","transaction",-877113772,null))),42,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",69,new cljs.core.Keyword(null,"fail","fail",1706214930),9,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","object-store-names","indexed.db/object-store-names",-1275305995,null),new cljs.core.Symbol(null,"transaction","transaction",-877113772,null))),42,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null,(1),null)),(2),null)),null]));
}

return result__917__auto__;
}catch (e1661){var t__967__auto__ = e1661;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",69,new cljs.core.Keyword(null,"error","error",-978969032),9,42,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),cljs.core.list(new cljs.core.Symbol("indexed.db","object-store-names","indexed.db/object-store-names",-1275305995,null),new cljs.core.Symbol(null,"transaction","transaction",-877113772,null))),42,t__967__auto__,null]));
}});

(indexed.db.transaction_test.test_object_store_names.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.transaction_test.test_object_store_names;},new cljs.core.Symbol("indexed.db.transaction-test","test-object-store-names","indexed.db.transaction-test/test-object-store-names",-1692239910,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.transaction-test","indexed.db.transaction-test",1315847992,null),new cljs.core.Symbol(null,"test-object-store-names","test-object-store-names",-307579594,null),"/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",33,1,40,40,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.transaction_test.test_object_store_names)?indexed.db.transaction_test.test_object_store_names.cljs$lang$test:null)])));
indexed.db.transaction_test.test_abort = (function indexed$db$transaction_test$test_abort(){
return cljs.test.test_var.call(null,indexed.db.transaction_test.test_abort.cljs$lang$var);
});
indexed.db.transaction_test.test_abort.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.transaction_test !== 'undefined') && (typeof indexed.db.transaction_test.t_indexed$db$transaction_test1662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.transaction_test.t_indexed$db$transaction_test1662 = (function (meta1663){
this.meta1663 = meta1663;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.transaction_test.t_indexed$db$transaction_test1662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1664,meta1663__$1){
var self__ = this;
var _1664__$1 = this;
return (new indexed.db.transaction_test.t_indexed$db$transaction_test1662(meta1663__$1));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1664){
var self__ = this;
var _1664__$1 = this;
return self__.meta1663;
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1662.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.transaction_test.t_indexed$db$transaction_test1662.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
var transaction = indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.transaction_test._STAR_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),"readwrite");
var todo_list = indexed.db.object_store.call(null,transaction,"toDoList");
var request = indexed.db.add.call(null,todo_list,({"taskTitle": "Testing"}));
return indexed.db.abort.call(null,indexed.db.on.call(null,transaction,"abort",(function (){
try{var klass__946__auto___1668 = DOMException;
var object__947__auto___1669 = indexed.db.error.call(null,request);
var result__948__auto___1670 = (object__947__auto___1669 instanceof klass__946__auto___1668);
if(result__948__auto___1670){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",71,new cljs.core.Keyword(null,"pass","pass",1574159993),17,54,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("indexed.db","error","indexed.db/error",1941022106,null),new cljs.core.Symbol(null,"request","request",-881481046,null))),54,cljs.core.type.call(null,object__947__auto___1669),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",71,new cljs.core.Keyword(null,"fail","fail",1706214930),17,54,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("indexed.db","error","indexed.db/error",1941022106,null),new cljs.core.Symbol(null,"request","request",-881481046,null))),54,cljs.core.type.call(null,object__947__auto___1669),null]));
}

}catch (e1666){var t__967__auto___1671 = e1666;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",71,new cljs.core.Keyword(null,"error","error",-978969032),17,54,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("indexed.db","error","indexed.db/error",1941022106,null),new cljs.core.Symbol(null,"request","request",-881481046,null))),54,t__967__auto___1671,null]));
}
return done.call(null);
})));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1662.prototype.apply = (function (self__,args1665){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1665)));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1662.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
var transaction = indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.transaction_test._STAR_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),"readwrite");
var todo_list = indexed.db.object_store.call(null,transaction,"toDoList");
var request = indexed.db.add.call(null,todo_list,({"taskTitle": "Testing"}));
return indexed.db.abort.call(null,indexed.db.on.call(null,transaction,"abort",(function (){
try{var klass__946__auto___1672 = DOMException;
var object__947__auto___1673 = indexed.db.error.call(null,request);
var result__948__auto___1674 = (object__947__auto___1673 instanceof klass__946__auto___1672);
if(result__948__auto___1674){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",71,new cljs.core.Keyword(null,"pass","pass",1574159993),17,54,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("indexed.db","error","indexed.db/error",1941022106,null),new cljs.core.Symbol(null,"request","request",-881481046,null))),54,cljs.core.type.call(null,object__947__auto___1673),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",71,new cljs.core.Keyword(null,"fail","fail",1706214930),17,54,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("indexed.db","error","indexed.db/error",1941022106,null),new cljs.core.Symbol(null,"request","request",-881481046,null))),54,cljs.core.type.call(null,object__947__auto___1673),null]));
}

}catch (e1667){var t__967__auto___1675 = e1667;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",71,new cljs.core.Keyword(null,"error","error",-978969032),17,54,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("indexed.db","error","indexed.db/error",1941022106,null),new cljs.core.Symbol(null,"request","request",-881481046,null))),54,t__967__auto___1675,null]));
}
return done.call(null);
})));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1663","meta1663",-358357144,null)], null);
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1662.cljs$lang$type = true);

(indexed.db.transaction_test.t_indexed$db$transaction_test1662.cljs$lang$ctorStr = "indexed.db.transaction-test/t_indexed$db$transaction_test1662");

(indexed.db.transaction_test.t_indexed$db$transaction_test1662.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.transaction-test/t_indexed$db$transaction_test1662");
}));

/**
 * Positional factory function for indexed.db.transaction-test/t_indexed$db$transaction_test1662.
 */
indexed.db.transaction_test.__GT_t_indexed$db$transaction_test1662 = (function indexed$db$transaction_test$__GT_t_indexed$db$transaction_test1662(meta1663){
return (new indexed.db.transaction_test.t_indexed$db$transaction_test1662(meta1663));
});

}

return (new indexed.db.transaction_test.t_indexed$db$transaction_test1662(null));
});

(indexed.db.transaction_test.test_abort.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.transaction_test.test_abort;},new cljs.core.Symbol("indexed.db.transaction-test","test-abort","indexed.db.transaction-test/test-abort",-1099931646,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.transaction-test","indexed.db.transaction-test",1315847992,null),new cljs.core.Symbol(null,"test-abort","test-abort",-1443287266,null),"/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",20,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.transaction_test.test_abort)?indexed.db.transaction_test.test_abort.cljs$lang$test:null)])));
indexed.db.transaction_test.test_commit = (function indexed$db$transaction_test$test_commit(){
return cljs.test.test_var.call(null,indexed.db.transaction_test.test_commit.cljs$lang$var);
});
indexed.db.transaction_test.test_commit.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.transaction_test !== 'undefined') && (typeof indexed.db.transaction_test.t_indexed$db$transaction_test1676 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.transaction_test.t_indexed$db$transaction_test1676 = (function (meta1677){
this.meta1677 = meta1677;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.transaction_test.t_indexed$db$transaction_test1676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1678,meta1677__$1){
var self__ = this;
var _1678__$1 = this;
return (new indexed.db.transaction_test.t_indexed$db$transaction_test1676(meta1677__$1));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1678){
var self__ = this;
var _1678__$1 = this;
return self__.meta1677;
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1676.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.transaction_test.t_indexed$db$transaction_test1676.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
var transaction = indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.transaction_test._STAR_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),"readwrite");
var todo_list = indexed.db.object_store.call(null,transaction,"toDoList");
indexed.db.add.call(null,todo_list,({"taskTitle": "Testing"}));

return indexed.db.commit.call(null,indexed.db.on.call(null,transaction,"complete",done));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1676.prototype.apply = (function (self__,args1679){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1679)));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1676.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
var transaction = indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.transaction_test._STAR_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),"readwrite");
var todo_list = indexed.db.object_store.call(null,transaction,"toDoList");
indexed.db.add.call(null,todo_list,({"taskTitle": "Testing"}));

return indexed.db.commit.call(null,indexed.db.on.call(null,transaction,"complete",done));
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1677","meta1677",-55565281,null)], null);
}));

(indexed.db.transaction_test.t_indexed$db$transaction_test1676.cljs$lang$type = true);

(indexed.db.transaction_test.t_indexed$db$transaction_test1676.cljs$lang$ctorStr = "indexed.db.transaction-test/t_indexed$db$transaction_test1676");

(indexed.db.transaction_test.t_indexed$db$transaction_test1676.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.transaction-test/t_indexed$db$transaction_test1676");
}));

/**
 * Positional factory function for indexed.db.transaction-test/t_indexed$db$transaction_test1676.
 */
indexed.db.transaction_test.__GT_t_indexed$db$transaction_test1676 = (function indexed$db$transaction_test$__GT_t_indexed$db$transaction_test1676(meta1677){
return (new indexed.db.transaction_test.t_indexed$db$transaction_test1676(meta1677));
});

}

return (new indexed.db.transaction_test.t_indexed$db$transaction_test1676(null));
});

(indexed.db.transaction_test.test_commit.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.transaction_test.test_commit;},new cljs.core.Symbol("indexed.db.transaction-test","test-commit","indexed.db.transaction-test/test-commit",1608293450,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.transaction-test","indexed.db.transaction-test",1315847992,null),new cljs.core.Symbol(null,"test-commit","test-commit",-1435803810,null),"/Users/brian/projects/indexed.db/test/indexed/db/transaction_test.cljs",21,1,58,58,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.transaction_test.test_commit)?indexed.db.transaction_test.test_commit.cljs$lang$test:null)])));

//# sourceMappingURL=transaction_test.js.map
