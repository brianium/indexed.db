// Compiled by ClojureScript 1.11.4 {:optimizations :none}
goog.provide('indexed.db.database_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('indexed.db');
goog.require('indexed.db.test_util');
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.database_test !== 'undefined') && (typeof indexed.db.database_test._STAR_db !== 'undefined')){
} else {
indexed.db.database_test._STAR_db = cljs.core.atom.call(null,null);
}
indexed.db.database_test.database_name = "indexed.db.database-test";
indexed.db.database_test.database_version = (1);
indexed.db.database_test.cljs_test_once_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.database_test !== 'undefined') && (typeof indexed.db.database_test.t_indexed$db$database_test1682 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.database_test.t_indexed$db$database_test1682 = (function (meta1683){
this.meta1683 = meta1683;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.database_test.t_indexed$db$database_test1682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1684,meta1683__$1){
var self__ = this;
var _1684__$1 = this;
return (new indexed.db.database_test.t_indexed$db$database_test1682(meta1683__$1));
}));

(indexed.db.database_test.t_indexed$db$database_test1682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1684){
var self__ = this;
var _1684__$1 = this;
return self__.meta1683;
}));

(indexed.db.database_test.t_indexed$db$database_test1682.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.database_test.t_indexed$db$database_test1682.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.test_util.test_connect.call(null,indexed.db.database_test.database_name,indexed.db.database_test.database_version,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
cljs.core.reset_BANG_.call(null,indexed.db.database_test._STAR_db,indexed.db.create_database.call(null,idb));

return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
indexed.db.create_object_store.call(null,db,"toDoList",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-path","key-path",878473308),"taskTitle"], null));

return indexed.db.create_object_store.call(null,db,"deleteMe");
}),new cljs.core.Keyword(null,"blocked","blocked",181326681),(function (){
return indexed.db.close.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db));
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (){
cljs.core.println.call(null,"Failed test connected");

return done.call(null);
})], null));
}));

(indexed.db.database_test.t_indexed$db$database_test1682.prototype.apply = (function (self__,args1685){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1685)));
}));

(indexed.db.database_test.t_indexed$db$database_test1682.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.test_util.test_connect.call(null,indexed.db.database_test.database_name,indexed.db.database_test.database_version,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
cljs.core.reset_BANG_.call(null,indexed.db.database_test._STAR_db,indexed.db.create_database.call(null,idb));

return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
indexed.db.create_object_store.call(null,db,"toDoList",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-path","key-path",878473308),"taskTitle"], null));

return indexed.db.create_object_store.call(null,db,"deleteMe");
}),new cljs.core.Keyword(null,"blocked","blocked",181326681),(function (){
return indexed.db.close.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db));
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (){
cljs.core.println.call(null,"Failed test connected");

return done.call(null);
})], null));
}));

(indexed.db.database_test.t_indexed$db$database_test1682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1683","meta1683",1753163336,null)], null);
}));

(indexed.db.database_test.t_indexed$db$database_test1682.cljs$lang$type = true);

(indexed.db.database_test.t_indexed$db$database_test1682.cljs$lang$ctorStr = "indexed.db.database-test/t_indexed$db$database_test1682");

(indexed.db.database_test.t_indexed$db$database_test1682.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.database-test/t_indexed$db$database_test1682");
}));

/**
 * Positional factory function for indexed.db.database-test/t_indexed$db$database_test1682.
 */
indexed.db.database_test.__GT_t_indexed$db$database_test1682 = (function indexed$db$database_test$__GT_t_indexed$db$database_test1682(meta1683){
return (new indexed.db.database_test.t_indexed$db$database_test1682(meta1683));
});

}

return (new indexed.db.database_test.t_indexed$db$database_test1682(null));
})], null)], null);
indexed.db.database_test.test_create_database = (function indexed$db$database_test$test_create_database(){
return cljs.test.test_var.call(null,indexed.db.database_test.test_create_database.cljs$lang$var);
});
indexed.db.database_test.test_create_database.cljs$lang$test = (function (){
try{var values__916__auto__ = (new cljs.core.List(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db),null,(1),null));
var result__917__auto__ = cljs.core.apply.call(null,indexed.db.database_QMARK_,values__916__auto__);
if(cljs.core.truth_(result__917__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",26,new cljs.core.Keyword(null,"pass","pass",1574159993),7,40,cljs.core.list(new cljs.core.Symbol("db","database?","db/database?",-1886061105,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null))),40,cljs.core.cons.call(null,new cljs.core.Symbol("db","database?","db/database?",-1886061105,null),values__916__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",26,new cljs.core.Keyword(null,"fail","fail",1706214930),7,40,cljs.core.list(new cljs.core.Symbol("db","database?","db/database?",-1886061105,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null))),40,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("db","database?","db/database?",-1886061105,null),values__916__auto__),null,(1),null)),(2),null)),null]));
}

return result__917__auto__;
}catch (e1686){var t__967__auto__ = e1686;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",26,new cljs.core.Keyword(null,"error","error",-978969032),7,40,cljs.core.list(new cljs.core.Symbol("db","database?","db/database?",-1886061105,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null))),40,t__967__auto__,null]));
}});

(indexed.db.database_test.test_create_database.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.database_test.test_create_database;},new cljs.core.Symbol("indexed.db.database-test","test-create-database","indexed.db.database-test/test-create-database",1671628630,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.database-test","indexed.db.database-test",1303206777,null),new cljs.core.Symbol(null,"test-create-database","test-create-database",482680805,null),"/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",30,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.database_test.test_create_database)?indexed.db.database_test.test_create_database.cljs$lang$test:null)])));
indexed.db.database_test.test_getting_name = (function indexed$db$database_test$test_getting_name(){
return cljs.test.test_var.call(null,indexed.db.database_test.test_getting_name.cljs$lang$var);
});
indexed.db.database_test.test_getting_name.cljs$lang$test = (function (){
try{var values__916__auto__ = (new cljs.core.List(null,indexed.db.database_test.database_name,(new cljs.core.List(null,cljs.core.name.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db)),null,(1),null)),(2),null));
var result__917__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto__);
if(cljs.core.truth_(result__917__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),7,43,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-name","database-name",258301479,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)))),43,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),7,43,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-name","database-name",258301479,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)))),43,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null,(1),null)),(2),null)),null]));
}

return result__917__auto__;
}catch (e1687){var t__967__auto__ = e1687;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),7,43,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-name","database-name",258301479,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)))),43,t__967__auto__,null]));
}});

(indexed.db.database_test.test_getting_name.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.database_test.test_getting_name;},new cljs.core.Symbol("indexed.db.database-test","test-getting-name","indexed.db.database-test/test-getting-name",169371958,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.database-test","indexed.db.database-test",1303206777,null),new cljs.core.Symbol(null,"test-getting-name","test-getting-name",-2130292313,null),"/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",27,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.database_test.test_getting_name)?indexed.db.database_test.test_getting_name.cljs$lang$test:null)])));
indexed.db.database_test.test_getting_version = (function indexed$db$database_test$test_getting_version(){
return cljs.test.test_var.call(null,indexed.db.database_test.test_getting_version.cljs$lang$var);
});
indexed.db.database_test.test_getting_version.cljs$lang$test = (function (){
try{var values__916__auto__ = (new cljs.core.List(null,indexed.db.database_test.database_version,(new cljs.core.List(null,indexed.db.version.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db)),null,(1),null)),(2),null));
var result__917__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto__);
if(cljs.core.truth_(result__917__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),7,46,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-version","database-version",1804360765,null),cljs.core.list(new cljs.core.Symbol("db","version","db/version",2065796451,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)))),46,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),7,46,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-version","database-version",1804360765,null),cljs.core.list(new cljs.core.Symbol("db","version","db/version",2065796451,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)))),46,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto__),null,(1),null)),(2),null)),null]));
}

return result__917__auto__;
}catch (e1688){var t__967__auto__ = e1688;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),7,46,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-version","database-version",1804360765,null),cljs.core.list(new cljs.core.Symbol("db","version","db/version",2065796451,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)))),46,t__967__auto__,null]));
}});

(indexed.db.database_test.test_getting_version.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.database_test.test_getting_version;},new cljs.core.Symbol("indexed.db.database-test","test-getting-version","indexed.db.database-test/test-getting-version",-542700071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.database-test","indexed.db.database-test",1303206777,null),new cljs.core.Symbol(null,"test-getting-version","test-getting-version",1149572534,null),"/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",30,1,45,45,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.database_test.test_getting_version)?indexed.db.database_test.test_getting_version.cljs$lang$test:null)])));
indexed.db.database_test.test_getting_store_names = (function indexed$db$database_test$test_getting_store_names(){
return cljs.test.test_var.call(null,indexed.db.database_test.test_getting_store_names.cljs$lang$var);
});
indexed.db.database_test.test_getting_store_names.cljs$lang$test = (function (){
var names = indexed.db.object_store_names.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db));
try{var values__916__auto___1693 = (new cljs.core.List(null,names,null,(1),null));
var result__917__auto___1694 = cljs.core.apply.call(null,cljs.core.seq_QMARK_,values__916__auto___1693);
if(cljs.core.truth_(result__917__auto___1694)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",21,new cljs.core.Keyword(null,"pass","pass",1574159993),9,50,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"names","names",-302543131,null)),50,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__916__auto___1693),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",21,new cljs.core.Keyword(null,"fail","fail",1706214930),9,50,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"names","names",-302543131,null)),50,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__916__auto___1693),null,(1),null)),(2),null)),null]));
}

}catch (e1690){var t__967__auto___1695 = e1690;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",21,new cljs.core.Keyword(null,"error","error",-978969032),9,50,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"names","names",-302543131,null)),50,t__967__auto___1695,null]));
}
try{var values__916__auto___1696 = (new cljs.core.List(null,(2),(new cljs.core.List(null,cljs.core.count.call(null,names),null,(1),null)),(2),null));
var result__917__auto___1697 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1696);
if(cljs.core.truth_(result__917__auto___1697)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",28,new cljs.core.Keyword(null,"pass","pass",1574159993),9,51,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),51,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1696),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",28,new cljs.core.Keyword(null,"fail","fail",1706214930),9,51,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),51,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1696),null,(1),null)),(2),null)),null]));
}

}catch (e1691){var t__967__auto___1698 = e1691;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",28,new cljs.core.Keyword(null,"error","error",-978969032),9,51,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),51,t__967__auto___1698,null]));
}
try{var values__916__auto__ = (new cljs.core.List(null,cljs.core.filter.call(null,(function (p1__1689_SHARP_){
return cljs.core._EQ_.call(null,"toDoList",p1__1689_SHARP_);
}),names),null,(1),null));
var result__917__auto__ = cljs.core.apply.call(null,cljs.core.seq,values__916__auto__);
if(cljs.core.truth_(result__917__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",47,new cljs.core.Keyword(null,"pass","pass",1574159993),9,52,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1689#","p1__1689#",741816514,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1689#","p1__1689#",741816514,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),52,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__916__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",47,new cljs.core.Keyword(null,"fail","fail",1706214930),9,52,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1689#","p1__1689#",741816514,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1689#","p1__1689#",741816514,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),52,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__916__auto__),null,(1),null)),(2),null)),null]));
}

return result__917__auto__;
}catch (e1692){var t__967__auto__ = e1692;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",47,new cljs.core.Keyword(null,"error","error",-978969032),9,52,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1689#","p1__1689#",741816514,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1689#","p1__1689#",741816514,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),52,t__967__auto__,null]));
}});

(indexed.db.database_test.test_getting_store_names.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.database_test.test_getting_store_names;},new cljs.core.Symbol("indexed.db.database-test","test-getting-store-names","indexed.db.database-test/test-getting-store-names",2088461728,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.database-test","indexed.db.database-test",1303206777,null),new cljs.core.Symbol(null,"test-getting-store-names","test-getting-store-names",-177910721,null),"/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",34,1,48,48,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.database_test.test_getting_store_names)?indexed.db.database_test.test_getting_store_names.cljs$lang$test:null)])));
indexed.db.database_test.test_delete_object_store = (function indexed$db$database_test$test_delete_object_store(){
return cljs.test.test_var.call(null,indexed.db.database_test.test_delete_object_store.cljs$lang$var);
});
indexed.db.database_test.test_delete_object_store.cljs$lang$test = (function (){
indexed.db.close.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db));

if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.database_test !== 'undefined') && (typeof indexed.db.database_test.t_indexed$db$database_test1700 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.database_test.t_indexed$db$database_test1700 = (function (meta1701){
this.meta1701 = meta1701;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.database_test.t_indexed$db$database_test1700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1702,meta1701__$1){
var self__ = this;
var _1702__$1 = this;
return (new indexed.db.database_test.t_indexed$db$database_test1700(meta1701__$1));
}));

(indexed.db.database_test.t_indexed$db$database_test1700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1702){
var self__ = this;
var _1702__$1 = this;
return self__.meta1701;
}));

(indexed.db.database_test.t_indexed$db$database_test1700.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.database_test.t_indexed$db$database_test1700.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.test_util.open.call(null,indexed.db.database_test.database_name,(indexed.db.database_test.database_version + (1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
cljs.core.reset_BANG_.call(null,indexed.db.database_test._STAR_db,indexed.db.create_database.call(null,idb));

var names = indexed.db.object_store_names.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db));
try{var values__916__auto___1708 = (new cljs.core.List(null,(1),(new cljs.core.List(null,cljs.core.count.call(null,names),null,(1),null)),(2),null));
var result__917__auto___1709 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1708);
if(cljs.core.truth_(result__917__auto___1709)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),14,65,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),65,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1708),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),14,65,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),65,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1708),null,(1),null)),(2),null)),null]));
}

}catch (e1704){var t__967__auto___1710 = e1704;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),14,65,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),65,t__967__auto___1710,null]));
}
try{var values__916__auto___1711 = (new cljs.core.List(null,cljs.core.filter.call(null,(function (p1__1699_SHARP_){
return cljs.core._EQ_.call(null,"toDoList",p1__1699_SHARP_);
}),names),null,(1),null));
var result__917__auto___1712 = cljs.core.apply.call(null,cljs.core.seq,values__916__auto___1711);
if(cljs.core.truth_(result__917__auto___1712)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",52,new cljs.core.Keyword(null,"pass","pass",1574159993),14,66,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1699#","p1__1699#",-1884132998,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1699#","p1__1699#",-1884132998,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),66,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__916__auto___1711),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",52,new cljs.core.Keyword(null,"fail","fail",1706214930),14,66,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1699#","p1__1699#",-1884132998,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1699#","p1__1699#",-1884132998,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),66,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__916__auto___1711),null,(1),null)),(2),null)),null]));
}

}catch (e1705){var t__967__auto___1713 = e1705;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",52,new cljs.core.Keyword(null,"error","error",-978969032),14,66,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1699#","p1__1699#",-1884132998,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1699#","p1__1699#",-1884132998,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),66,t__967__auto___1713,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
return indexed.db.delete_object_store.call(null,db,"deleteMe");
})], null));
}));

(indexed.db.database_test.t_indexed$db$database_test1700.prototype.apply = (function (self__,args1703){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1703)));
}));

(indexed.db.database_test.t_indexed$db$database_test1700.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.test_util.open.call(null,indexed.db.database_test.database_name,(indexed.db.database_test.database_version + (1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
cljs.core.reset_BANG_.call(null,indexed.db.database_test._STAR_db,indexed.db.create_database.call(null,idb));

var names = indexed.db.object_store_names.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db));
try{var values__916__auto___1714 = (new cljs.core.List(null,(1),(new cljs.core.List(null,cljs.core.count.call(null,names),null,(1),null)),(2),null));
var result__917__auto___1715 = cljs.core.apply.call(null,cljs.core._EQ_,values__916__auto___1714);
if(cljs.core.truth_(result__917__auto___1715)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),14,65,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),65,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1714),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),14,65,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),65,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__916__auto___1714),null,(1),null)),(2),null)),null]));
}

}catch (e1706){var t__967__auto___1716 = e1706;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),14,65,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),65,t__967__auto___1716,null]));
}
try{var values__916__auto___1717 = (new cljs.core.List(null,cljs.core.filter.call(null,(function (p1__1699_SHARP_){
return cljs.core._EQ_.call(null,"toDoList",p1__1699_SHARP_);
}),names),null,(1),null));
var result__917__auto___1718 = cljs.core.apply.call(null,cljs.core.seq,values__916__auto___1717);
if(cljs.core.truth_(result__917__auto___1718)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",52,new cljs.core.Keyword(null,"pass","pass",1574159993),14,66,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1699#","p1__1699#",-1884132998,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1699#","p1__1699#",-1884132998,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),66,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__916__auto___1717),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",52,new cljs.core.Keyword(null,"fail","fail",1706214930),14,66,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1699#","p1__1699#",-1884132998,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1699#","p1__1699#",-1884132998,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),66,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__916__auto___1717),null,(1),null)),(2),null)),null]));
}

}catch (e1707){var t__967__auto___1719 = e1707;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",52,new cljs.core.Keyword(null,"error","error",-978969032),14,66,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1699#","p1__1699#",-1884132998,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1699#","p1__1699#",-1884132998,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),66,t__967__auto___1719,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
return indexed.db.delete_object_store.call(null,db,"deleteMe");
})], null));
}));

(indexed.db.database_test.t_indexed$db$database_test1700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1701","meta1701",431751388,null)], null);
}));

(indexed.db.database_test.t_indexed$db$database_test1700.cljs$lang$type = true);

(indexed.db.database_test.t_indexed$db$database_test1700.cljs$lang$ctorStr = "indexed.db.database-test/t_indexed$db$database_test1700");

(indexed.db.database_test.t_indexed$db$database_test1700.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.database-test/t_indexed$db$database_test1700");
}));

/**
 * Positional factory function for indexed.db.database-test/t_indexed$db$database_test1700.
 */
indexed.db.database_test.__GT_t_indexed$db$database_test1700 = (function indexed$db$database_test$__GT_t_indexed$db$database_test1700(meta1701){
return (new indexed.db.database_test.t_indexed$db$database_test1700(meta1701));
});

}

return (new indexed.db.database_test.t_indexed$db$database_test1700(null));
});

(indexed.db.database_test.test_delete_object_store.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.database_test.test_delete_object_store;},new cljs.core.Symbol("indexed.db.database-test","test-delete-object-store","indexed.db.database-test/test-delete-object-store",1900729852,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.database-test","indexed.db.database-test",1303206777,null),new cljs.core.Symbol(null,"test-delete-object-store","test-delete-object-store",-93794963,null),"/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",34,1,54,54,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.database_test.test_delete_object_store)?indexed.db.database_test.test_delete_object_store.cljs$lang$test:null)])));
indexed.db.database_test.test_transaction = (function indexed$db$database_test$test_transaction(){
return cljs.test.test_var.call(null,indexed.db.database_test.test_transaction.cljs$lang$var);
});
indexed.db.database_test.test_transaction.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"with a valid store name");

try{try{var values__916__auto___1727 = (new cljs.core.List(null,indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null)),null,(1),null));
var result__917__auto___1728 = cljs.core.apply.call(null,cljs.core.some_QMARK_,values__916__auto___1727);
if(cljs.core.truth_(result__917__auto___1728)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",51,new cljs.core.Keyword(null,"pass","pass",1574159993),9,76,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null))),76,cljs.core.cons.call(null,new cljs.core.Symbol(null,"some?","some?",234752293,null),values__916__auto___1727),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",51,new cljs.core.Keyword(null,"fail","fail",1706214930),9,76,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null))),76,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"some?","some?",234752293,null),values__916__auto___1727),null,(1),null)),(2),null)),null]));
}

}catch (e1720){var t__967__auto___1729 = e1720;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",51,new cljs.core.Keyword(null,"error","error",-978969032),9,76,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null))),76,t__967__auto___1729,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"with an invalid store name");

try{try{try{indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null));

cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",64,new cljs.core.Keyword(null,"fail","fail",1706214930),9,78,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null))),78,null,null]));
}catch (e1722){if((e1722 instanceof DOMException)){
var e__954__auto___1730 = e1722;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",64,new cljs.core.Keyword(null,"pass","pass",1574159993),9,78,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null))),78,e__954__auto___1730,null]));

} else {
throw e1722;

}
}}catch (e1721){var t__967__auto___1731 = e1721;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",64,new cljs.core.Keyword(null,"error","error",-978969032),9,78,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null))),78,t__967__auto___1731,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"with an invalid mode");

try{try{try{indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),"readbologna");

cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",80,new cljs.core.Keyword(null,"fail","fail",1706214930),9,80,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","TypeError","js/TypeError",-2012994461,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),"readbologna")),80,null,null]));
}catch (e1724){if((e1724 instanceof TypeError)){
var e__954__auto___1732 = e1724;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",80,new cljs.core.Keyword(null,"pass","pass",1574159993),9,80,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","TypeError","js/TypeError",-2012994461,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),"readbologna")),80,e__954__auto___1732,null]));

} else {
throw e1724;

}
}}catch (e1723){var t__967__auto___1733 = e1723;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",80,new cljs.core.Keyword(null,"error","error",-978969032),9,80,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","TypeError","js/TypeError",-2012994461,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),"readbologna")),80,t__967__auto___1733,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"with an invalid store name");

try{try{try{indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db),cljs.core.PersistentVector.EMPTY);

return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),9,82,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),cljs.core.PersistentVector.EMPTY)),82,null,null]));
}catch (e1726){if((e1726 instanceof DOMException)){
var e__954__auto__ = e1726;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),9,82,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),cljs.core.PersistentVector.EMPTY)),82,e__954__auto__,null]));

return e__954__auto__;
} else {
throw e1726;

}
}}catch (e1725){var t__967__auto__ = e1725;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),9,82,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),cljs.core.PersistentVector.EMPTY)),82,t__967__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(indexed.db.database_test.test_transaction.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.database_test.test_transaction;},new cljs.core.Symbol("indexed.db.database-test","test-transaction","indexed.db.database-test/test-transaction",651770178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.database-test","indexed.db.database-test",1303206777,null),new cljs.core.Symbol(null,"test-transaction","test-transaction",-1446571299,null),"/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",26,1,74,74,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.database_test.test_transaction)?indexed.db.database_test.test_transaction.cljs$lang$test:null)])));
indexed.db.database_test.test_transaction_on_closed_db = (function indexed$db$database_test$test_transaction_on_closed_db(){
return cljs.test.test_var.call(null,indexed.db.database_test.test_transaction_on_closed_db.cljs$lang$var);
});
indexed.db.database_test.test_transaction_on_closed_db.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.database_test !== 'undefined') && (typeof indexed.db.database_test.t_indexed$db$database_test1734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.database_test.t_indexed$db$database_test1734 = (function (meta1735){
this.meta1735 = meta1735;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.database_test.t_indexed$db$database_test1734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1736,meta1735__$1){
var self__ = this;
var _1736__$1 = this;
return (new indexed.db.database_test.t_indexed$db$database_test1734(meta1735__$1));
}));

(indexed.db.database_test.t_indexed$db$database_test1734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1736){
var self__ = this;
var _1736__$1 = this;
return self__.meta1735;
}));

(indexed.db.database_test.t_indexed$db$database_test1734.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.database_test.t_indexed$db$database_test1734.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___998__auto__ = self____$1;
return indexed.db.test_util.test_connect.call(null,[indexed.db.database_test.database_name,"-transaction-test"].join(''),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
var db = indexed.db.create_database.call(null,idb);
indexed.db.close.call(null,db);

try{try{indexed.db.transaction.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null));

cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",74,new cljs.core.Keyword(null,"fail","fail",1706214930),14,94,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null))),94,null,null]));
}catch (e1739){if((e1739 instanceof DOMException)){
var e__954__auto___1742 = e1739;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",74,new cljs.core.Keyword(null,"pass","pass",1574159993),14,94,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null))),94,e__954__auto___1742,null]));

} else {
throw e1739;

}
}}catch (e1738){var t__967__auto___1743 = e1738;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",74,new cljs.core.Keyword(null,"error","error",-978969032),14,94,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null))),94,t__967__auto___1743,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
return indexed.db.create_object_store.call(null,db,"test-store");
})], null));
}));

(indexed.db.database_test.t_indexed$db$database_test1734.prototype.apply = (function (self__,args1737){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1737)));
}));

(indexed.db.database_test.t_indexed$db$database_test1734.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___998__auto__ = this;
return indexed.db.test_util.test_connect.call(null,[indexed.db.database_test.database_name,"-transaction-test"].join(''),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
var db = indexed.db.create_database.call(null,idb);
indexed.db.close.call(null,db);

try{try{indexed.db.transaction.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null));

cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",74,new cljs.core.Keyword(null,"fail","fail",1706214930),14,94,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null))),94,null,null]));
}catch (e1741){if((e1741 instanceof DOMException)){
var e__954__auto___1744 = e1741;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",74,new cljs.core.Keyword(null,"pass","pass",1574159993),14,94,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null))),94,e__954__auto___1744,null]));

} else {
throw e1741;

}
}}catch (e1740){var t__967__auto___1745 = e1740;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",74,new cljs.core.Keyword(null,"error","error",-978969032),14,94,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null))),94,t__967__auto___1745,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
return indexed.db.create_object_store.call(null,db,"test-store");
})], null));
}));

(indexed.db.database_test.t_indexed$db$database_test1734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1735","meta1735",1423632175,null)], null);
}));

(indexed.db.database_test.t_indexed$db$database_test1734.cljs$lang$type = true);

(indexed.db.database_test.t_indexed$db$database_test1734.cljs$lang$ctorStr = "indexed.db.database-test/t_indexed$db$database_test1734");

(indexed.db.database_test.t_indexed$db$database_test1734.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.database-test/t_indexed$db$database_test1734");
}));

/**
 * Positional factory function for indexed.db.database-test/t_indexed$db$database_test1734.
 */
indexed.db.database_test.__GT_t_indexed$db$database_test1734 = (function indexed$db$database_test$__GT_t_indexed$db$database_test1734(meta1735){
return (new indexed.db.database_test.t_indexed$db$database_test1734(meta1735));
});

}

return (new indexed.db.database_test.t_indexed$db$database_test1734(null));
});

(indexed.db.database_test.test_transaction_on_closed_db.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.database_test.test_transaction_on_closed_db;},new cljs.core.Symbol("indexed.db.database-test","test-transaction-on-closed-db","indexed.db.database-test/test-transaction-on-closed-db",-519348815,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.database-test","indexed.db.database-test",1303206777,null),new cljs.core.Symbol(null,"test-transaction-on-closed-db","test-transaction-on-closed-db",-1709890272,null),"/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",39,1,84,84,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.database_test.test_transaction_on_closed_db)?indexed.db.database_test.test_transaction_on_closed_db.cljs$lang$test:null)])));

//# sourceMappingURL=database_test.js.map
