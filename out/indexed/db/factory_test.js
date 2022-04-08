// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('indexed.db.factory_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('indexed.db');
goog.require('indexed.db.test_util');
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.factory_test !== 'undefined') && (typeof indexed.db.factory_test._STAR_idb !== 'undefined')){
} else {
indexed.db.factory_test._STAR_idb = cljs.core.atom.call(null,null);
}
indexed.db.factory_test.database_name = "indexed.db.factory-test";
indexed.db.factory_test.database_version = (1);
indexed.db.factory_test.cljs_test_once_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.factory_test !== 'undefined') && (typeof indexed.db.factory_test.t_indexed$db$factory_test1722 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.factory_test.t_indexed$db$factory_test1722 = (function (meta1723){
this.meta1723 = meta1723;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.factory_test.t_indexed$db$factory_test1722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1724,meta1723__$1){
var self__ = this;
var _1724__$1 = this;
return (new indexed.db.factory_test.t_indexed$db$factory_test1722(meta1723__$1));
}));

(indexed.db.factory_test.t_indexed$db$factory_test1722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1724){
var self__ = this;
var _1724__$1 = this;
return self__.meta1723;
}));

(indexed.db.factory_test.t_indexed$db$factory_test1722.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.factory_test.t_indexed$db$factory_test1722.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.test_util.test_connect.call(null,indexed.db.factory_test.database_name,indexed.db.factory_test.database_version,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
cljs.core.reset_BANG_.call(null,indexed.db.factory_test._STAR_idb,idb);

return done.call(null);
}),new cljs.core.Keyword(null,"blocked","blocked",181326681),(function (){
return cljs.core.deref.call(null,indexed.db.factory_test._STAR_idb).close();
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (){
cljs.core.println.call(null,"Failed test connected");

return done.call(null);
})], null));
}));

(indexed.db.factory_test.t_indexed$db$factory_test1722.prototype.apply = (function (self__,args1725){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1725)));
}));

(indexed.db.factory_test.t_indexed$db$factory_test1722.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.test_util.test_connect.call(null,indexed.db.factory_test.database_name,indexed.db.factory_test.database_version,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
cljs.core.reset_BANG_.call(null,indexed.db.factory_test._STAR_idb,idb);

return done.call(null);
}),new cljs.core.Keyword(null,"blocked","blocked",181326681),(function (){
return cljs.core.deref.call(null,indexed.db.factory_test._STAR_idb).close();
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (){
cljs.core.println.call(null,"Failed test connected");

return done.call(null);
})], null));
}));

(indexed.db.factory_test.t_indexed$db$factory_test1722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1723","meta1723",1607013682,null)], null);
}));

(indexed.db.factory_test.t_indexed$db$factory_test1722.cljs$lang$type = true);

(indexed.db.factory_test.t_indexed$db$factory_test1722.cljs$lang$ctorStr = "indexed.db.factory-test/t_indexed$db$factory_test1722");

(indexed.db.factory_test.t_indexed$db$factory_test1722.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.factory-test/t_indexed$db$factory_test1722");
}));

/**
 * Positional factory function for indexed.db.factory-test/t_indexed$db$factory_test1722.
 */
indexed.db.factory_test.__GT_t_indexed$db$factory_test1722 = (function indexed$db$factory_test$__GT_t_indexed$db$factory_test1722(meta1723){
return (new indexed.db.factory_test.t_indexed$db$factory_test1722(meta1723));
});

}

return (new indexed.db.factory_test.t_indexed$db$factory_test1722(null));
})], null)], null);
indexed.db.factory_test.test_open = (function indexed$db$factory_test$test_open(){
return cljs.test.test_var.call(null,indexed.db.factory_test.test_open.cljs$lang$var);
});
indexed.db.factory_test.test_open.cljs$lang$test = (function (){
try{var values__890__auto__ = (new cljs.core.List(null,cljs.core.deref.call(null,indexed.db.factory_test._STAR_idb),null,(1),null));
var result__891__auto__ = cljs.core.apply.call(null,cljs.core.some_QMARK_,values__890__auto__);
if(cljs.core.truth_(result__891__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",20,new cljs.core.Keyword(null,"pass","pass",1574159993),7,29,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*idb","*idb",184898206,null))),29,cljs.core.cons.call(null,new cljs.core.Symbol(null,"some?","some?",234752293,null),values__890__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",20,new cljs.core.Keyword(null,"fail","fail",1706214930),7,29,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*idb","*idb",184898206,null))),29,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"some?","some?",234752293,null),values__890__auto__),null,(1),null)),(2),null)),null]));
}

return result__891__auto__;
}catch (e1726){var t__941__auto__ = e1726;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",20,new cljs.core.Keyword(null,"error","error",-978969032),7,29,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*idb","*idb",184898206,null))),29,t__941__auto__,null]));
}});

(indexed.db.factory_test.test_open.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.factory_test.test_open;},new cljs.core.Symbol("indexed.db.factory-test","test-open","indexed.db.factory-test/test-open",1633817892,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.factory-test","indexed.db.factory-test",-736160260,null),new cljs.core.Symbol(null,"test-open","test-open",-441826852,null),"/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",19,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.factory_test.test_open)?indexed.db.factory_test.test_open.cljs$lang$test:null)])));
indexed.db.factory_test.test_cmp = (function indexed$db$factory_test$test_cmp(){
return cljs.test.test_var.call(null,indexed.db.factory_test.test_cmp.cljs$lang$var);
});
indexed.db.factory_test.test_cmp.cljs$lang$test = (function (){
try{var values__890__auto___1730 = (new cljs.core.List(null,(-1),(new cljs.core.List(null,indexed.db.cmp.call(null,(1),(2)),null,(1),null)),(2),null));
var result__891__auto___1731 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1730);
if(cljs.core.truth_(result__891__auto___1731)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",31,new cljs.core.Keyword(null,"pass","pass",1574159993),7,32,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1),cljs.core.list(new cljs.core.Symbol("factory","cmp","factory/cmp",1207387668,null),(1),(2))),32,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1730),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",31,new cljs.core.Keyword(null,"fail","fail",1706214930),7,32,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1),cljs.core.list(new cljs.core.Symbol("factory","cmp","factory/cmp",1207387668,null),(1),(2))),32,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1730),null,(1),null)),(2),null)),null]));
}

}catch (e1727){var t__941__auto___1732 = e1727;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",31,new cljs.core.Keyword(null,"error","error",-978969032),7,32,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1),cljs.core.list(new cljs.core.Symbol("factory","cmp","factory/cmp",1207387668,null),(1),(2))),32,t__941__auto___1732,null]));
}
try{var values__890__auto___1733 = (new cljs.core.List(null,(0),(new cljs.core.List(null,indexed.db.cmp.call(null,(1),(1)),null,(1),null)),(2),null));
var result__891__auto___1734 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1733);
if(cljs.core.truth_(result__891__auto___1734)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),7,33,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("factory","cmp","factory/cmp",1207387668,null),(1),(1))),33,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1733),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),7,33,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("factory","cmp","factory/cmp",1207387668,null),(1),(1))),33,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1733),null,(1),null)),(2),null)),null]));
}

}catch (e1728){var t__941__auto___1735 = e1728;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),7,33,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol("factory","cmp","factory/cmp",1207387668,null),(1),(1))),33,t__941__auto___1735,null]));
}
try{var values__890__auto__ = (new cljs.core.List(null,(1),(new cljs.core.List(null,indexed.db.cmp.call(null,(1),(0)),null,(1),null)),(2),null));
var result__891__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto__);
if(cljs.core.truth_(result__891__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),7,34,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("factory","cmp","factory/cmp",1207387668,null),(1),(0))),34,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),7,34,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("factory","cmp","factory/cmp",1207387668,null),(1),(0))),34,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto__),null,(1),null)),(2),null)),null]));
}

return result__891__auto__;
}catch (e1729){var t__941__auto__ = e1729;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),7,34,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol("factory","cmp","factory/cmp",1207387668,null),(1),(0))),34,t__941__auto__,null]));
}});

(indexed.db.factory_test.test_cmp.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.factory_test.test_cmp;},new cljs.core.Symbol("indexed.db.factory-test","test-cmp","indexed.db.factory-test/test-cmp",1271065143,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.factory-test","indexed.db.factory-test",-736160260,null),new cljs.core.Symbol(null,"test-cmp","test-cmp",-947210657,null),"/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",18,1,31,31,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.factory_test.test_cmp)?indexed.db.factory_test.test_cmp.cljs$lang$test:null)])));
indexed.db.factory_test.test_getting_databases = (function indexed$db$factory_test$test_getting_databases(){
return cljs.test.test_var.call(null,indexed.db.factory_test.test_getting_databases.cljs$lang$var);
});
indexed.db.factory_test.test_getting_databases.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.factory_test !== 'undefined') && (typeof indexed.db.factory_test.t_indexed$db$factory_test1737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.factory_test.t_indexed$db$factory_test1737 = (function (meta1738){
this.meta1738 = meta1738;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.factory_test.t_indexed$db$factory_test1737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1739,meta1738__$1){
var self__ = this;
var _1739__$1 = this;
return (new indexed.db.factory_test.t_indexed$db$factory_test1737(meta1738__$1));
}));

(indexed.db.factory_test.t_indexed$db$factory_test1737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1739){
var self__ = this;
var _1739__$1 = this;
return self__.meta1738;
}));

(indexed.db.factory_test.t_indexed$db$factory_test1737.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.factory_test.t_indexed$db$factory_test1737.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.databases.call(null,(function (databases){
try{var values__890__auto___1745 = (new cljs.core.List(null,databases,null,(1),null));
var result__891__auto___1746 = cljs.core.apply.call(null,cljs.core.seq_QMARK_,values__890__auto___1745);
if(cljs.core.truth_(result__891__auto___1746)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),29,40,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"databases","databases",-614301644,null)),40,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__890__auto___1745),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),29,40,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"databases","databases",-614301644,null)),40,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__890__auto___1745),null,(1),null)),(2),null)),null]));
}

}catch (e1741){var t__941__auto___1747 = e1741;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),29,40,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"databases","databases",-614301644,null)),40,t__941__auto___1747,null]));
}
try{var values__890__auto___1748 = (new cljs.core.List(null,cljs.core.filter.call(null,(function (p1__1736_SHARP_){
return ((cljs.core._EQ_.call(null,indexed.db.factory_test.database_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__1736_SHARP_))) && (cljs.core._EQ_.call(null,indexed.db.factory_test.database_version,new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(p1__1736_SHARP_))));
}),databases),null,(1),null));
var result__891__auto___1749 = cljs.core.apply.call(null,cljs.core.seq,values__890__auto___1748);
if(cljs.core.truth_(result__891__auto___1749)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",122,new cljs.core.Keyword(null,"pass","pass",1574159993),29,41,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-name","database-name",258301479,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-version","database-version",1804360765,null),cljs.core.list(new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null))))),new cljs.core.Symbol(null,"databases","databases",-614301644,null))),41,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__890__auto___1748),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",122,new cljs.core.Keyword(null,"fail","fail",1706214930),29,41,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-name","database-name",258301479,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-version","database-version",1804360765,null),cljs.core.list(new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null))))),new cljs.core.Symbol(null,"databases","databases",-614301644,null))),41,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__890__auto___1748),null,(1),null)),(2),null)),null]));
}

}catch (e1742){var t__941__auto___1750 = e1742;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",122,new cljs.core.Keyword(null,"error","error",-978969032),29,41,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-name","database-name",258301479,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-version","database-version",1804360765,null),cljs.core.list(new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null))))),new cljs.core.Symbol(null,"databases","databases",-614301644,null))),41,t__941__auto___1750,null]));
}
return done.call(null);
}));
}));

(indexed.db.factory_test.t_indexed$db$factory_test1737.prototype.apply = (function (self__,args1740){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1740)));
}));

(indexed.db.factory_test.t_indexed$db$factory_test1737.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.databases.call(null,(function (databases){
try{var values__890__auto___1751 = (new cljs.core.List(null,databases,null,(1),null));
var result__891__auto___1752 = cljs.core.apply.call(null,cljs.core.seq_QMARK_,values__890__auto___1751);
if(cljs.core.truth_(result__891__auto___1752)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),29,40,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"databases","databases",-614301644,null)),40,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__890__auto___1751),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),29,40,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"databases","databases",-614301644,null)),40,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__890__auto___1751),null,(1),null)),(2),null)),null]));
}

}catch (e1743){var t__941__auto___1753 = e1743;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),29,40,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"databases","databases",-614301644,null)),40,t__941__auto___1753,null]));
}
try{var values__890__auto___1754 = (new cljs.core.List(null,cljs.core.filter.call(null,(function (p1__1736_SHARP_){
return ((cljs.core._EQ_.call(null,indexed.db.factory_test.database_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__1736_SHARP_))) && (cljs.core._EQ_.call(null,indexed.db.factory_test.database_version,new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(p1__1736_SHARP_))));
}),databases),null,(1),null));
var result__891__auto___1755 = cljs.core.apply.call(null,cljs.core.seq,values__890__auto___1754);
if(cljs.core.truth_(result__891__auto___1755)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",122,new cljs.core.Keyword(null,"pass","pass",1574159993),29,41,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-name","database-name",258301479,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-version","database-version",1804360765,null),cljs.core.list(new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null))))),new cljs.core.Symbol(null,"databases","databases",-614301644,null))),41,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__890__auto___1754),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",122,new cljs.core.Keyword(null,"fail","fail",1706214930),29,41,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-name","database-name",258301479,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-version","database-version",1804360765,null),cljs.core.list(new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null))))),new cljs.core.Symbol(null,"databases","databases",-614301644,null))),41,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__890__auto___1754),null,(1),null)),(2),null)),null]));
}

}catch (e1744){var t__941__auto___1756 = e1744;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",122,new cljs.core.Keyword(null,"error","error",-978969032),29,41,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-name","database-name",258301479,null),cljs.core.list(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-version","database-version",1804360765,null),cljs.core.list(new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Symbol(null,"p1__1736#","p1__1736#",-1846472827,null))))),new cljs.core.Symbol(null,"databases","databases",-614301644,null))),41,t__941__auto___1756,null]));
}
return done.call(null);
}));
}));

(indexed.db.factory_test.t_indexed$db$factory_test1737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1738","meta1738",1039457389,null)], null);
}));

(indexed.db.factory_test.t_indexed$db$factory_test1737.cljs$lang$type = true);

(indexed.db.factory_test.t_indexed$db$factory_test1737.cljs$lang$ctorStr = "indexed.db.factory-test/t_indexed$db$factory_test1737");

(indexed.db.factory_test.t_indexed$db$factory_test1737.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.factory-test/t_indexed$db$factory_test1737");
}));

/**
 * Positional factory function for indexed.db.factory-test/t_indexed$db$factory_test1737.
 */
indexed.db.factory_test.__GT_t_indexed$db$factory_test1737 = (function indexed$db$factory_test$__GT_t_indexed$db$factory_test1737(meta1738){
return (new indexed.db.factory_test.t_indexed$db$factory_test1737(meta1738));
});

}

return (new indexed.db.factory_test.t_indexed$db$factory_test1737(null));
});

(indexed.db.factory_test.test_getting_databases.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.factory_test.test_getting_databases;},new cljs.core.Symbol("indexed.db.factory-test","test-getting-databases","indexed.db.factory-test/test-getting-databases",837673747,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.factory-test","indexed.db.factory-test",-736160260,null),new cljs.core.Symbol(null,"test-getting-databases","test-getting-databases",-836389109,null),"/Users/brian/projects/indexed.db/test/indexed/db/factory_test.cljs",32,1,36,36,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.factory_test.test_getting_databases)?indexed.db.factory_test.test_getting_databases.cljs$lang$test:null)])));

//# sourceMappingURL=factory_test.js.map
