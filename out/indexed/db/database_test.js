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
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.database_test !== 'undefined') && (typeof indexed.db.database_test.t_indexed$db$database_test1656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.database_test.t_indexed$db$database_test1656 = (function (meta1657){
this.meta1657 = meta1657;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.database_test.t_indexed$db$database_test1656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1658,meta1657__$1){
var self__ = this;
var _1658__$1 = this;
return (new indexed.db.database_test.t_indexed$db$database_test1656(meta1657__$1));
}));

(indexed.db.database_test.t_indexed$db$database_test1656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1658){
var self__ = this;
var _1658__$1 = this;
return self__.meta1657;
}));

(indexed.db.database_test.t_indexed$db$database_test1656.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.database_test.t_indexed$db$database_test1656.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
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

(indexed.db.database_test.t_indexed$db$database_test1656.prototype.apply = (function (self__,args1659){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1659)));
}));

(indexed.db.database_test.t_indexed$db$database_test1656.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
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

(indexed.db.database_test.t_indexed$db$database_test1656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1657","meta1657",-873562051,null)], null);
}));

(indexed.db.database_test.t_indexed$db$database_test1656.cljs$lang$type = true);

(indexed.db.database_test.t_indexed$db$database_test1656.cljs$lang$ctorStr = "indexed.db.database-test/t_indexed$db$database_test1656");

(indexed.db.database_test.t_indexed$db$database_test1656.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.database-test/t_indexed$db$database_test1656");
}));

/**
 * Positional factory function for indexed.db.database-test/t_indexed$db$database_test1656.
 */
indexed.db.database_test.__GT_t_indexed$db$database_test1656 = (function indexed$db$database_test$__GT_t_indexed$db$database_test1656(meta1657){
return (new indexed.db.database_test.t_indexed$db$database_test1656(meta1657));
});

}

return (new indexed.db.database_test.t_indexed$db$database_test1656(null));
})], null)], null);
indexed.db.database_test.test_create_database = (function indexed$db$database_test$test_create_database(){
return cljs.test.test_var.call(null,indexed.db.database_test.test_create_database.cljs$lang$var);
});
indexed.db.database_test.test_create_database.cljs$lang$test = (function (){
try{var values__890__auto__ = (new cljs.core.List(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db),null,(1),null));
var result__891__auto__ = cljs.core.apply.call(null,indexed.db.database_QMARK_,values__890__auto__);
if(cljs.core.truth_(result__891__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",26,new cljs.core.Keyword(null,"pass","pass",1574159993),7,40,cljs.core.list(new cljs.core.Symbol("db","database?","db/database?",-1886061105,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null))),40,cljs.core.cons.call(null,new cljs.core.Symbol("db","database?","db/database?",-1886061105,null),values__890__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",26,new cljs.core.Keyword(null,"fail","fail",1706214930),7,40,cljs.core.list(new cljs.core.Symbol("db","database?","db/database?",-1886061105,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null))),40,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("db","database?","db/database?",-1886061105,null),values__890__auto__),null,(1),null)),(2),null)),null]));
}

return result__891__auto__;
}catch (e1660){var t__941__auto__ = e1660;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",26,new cljs.core.Keyword(null,"error","error",-978969032),7,40,cljs.core.list(new cljs.core.Symbol("db","database?","db/database?",-1886061105,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null))),40,t__941__auto__,null]));
}});

(indexed.db.database_test.test_create_database.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.database_test.test_create_database;},new cljs.core.Symbol("indexed.db.database-test","test-create-database","indexed.db.database-test/test-create-database",1671628630,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.database-test","indexed.db.database-test",1303206777,null),new cljs.core.Symbol(null,"test-create-database","test-create-database",482680805,null),"/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",30,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.database_test.test_create_database)?indexed.db.database_test.test_create_database.cljs$lang$test:null)])));
indexed.db.database_test.test_getting_name = (function indexed$db$database_test$test_getting_name(){
return cljs.test.test_var.call(null,indexed.db.database_test.test_getting_name.cljs$lang$var);
});
indexed.db.database_test.test_getting_name.cljs$lang$test = (function (){
try{var values__890__auto__ = (new cljs.core.List(null,indexed.db.database_test.database_name,(new cljs.core.List(null,cljs.core.name.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db)),null,(1),null)),(2),null));
var result__891__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto__);
if(cljs.core.truth_(result__891__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",36,new cljs.core.Keyword(null,"pass","pass",1574159993),7,43,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-name","database-name",258301479,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)))),43,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",36,new cljs.core.Keyword(null,"fail","fail",1706214930),7,43,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-name","database-name",258301479,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)))),43,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto__),null,(1),null)),(2),null)),null]));
}

return result__891__auto__;
}catch (e1661){var t__941__auto__ = e1661;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",36,new cljs.core.Keyword(null,"error","error",-978969032),7,43,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-name","database-name",258301479,null),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)))),43,t__941__auto__,null]));
}});

(indexed.db.database_test.test_getting_name.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.database_test.test_getting_name;},new cljs.core.Symbol("indexed.db.database-test","test-getting-name","indexed.db.database-test/test-getting-name",169371958,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.database-test","indexed.db.database-test",1303206777,null),new cljs.core.Symbol(null,"test-getting-name","test-getting-name",-2130292313,null),"/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",27,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.database_test.test_getting_name)?indexed.db.database_test.test_getting_name.cljs$lang$test:null)])));
indexed.db.database_test.test_getting_version = (function indexed$db$database_test$test_getting_version(){
return cljs.test.test_var.call(null,indexed.db.database_test.test_getting_version.cljs$lang$var);
});
indexed.db.database_test.test_getting_version.cljs$lang$test = (function (){
try{var values__890__auto__ = (new cljs.core.List(null,indexed.db.database_test.database_version,(new cljs.core.List(null,indexed.db.version.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db)),null,(1),null)),(2),null));
var result__891__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto__);
if(cljs.core.truth_(result__891__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),7,46,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-version","database-version",1804360765,null),cljs.core.list(new cljs.core.Symbol("db","version","db/version",2065796451,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)))),46,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),7,46,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-version","database-version",1804360765,null),cljs.core.list(new cljs.core.Symbol("db","version","db/version",2065796451,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)))),46,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto__),null,(1),null)),(2),null)),null]));
}

return result__891__auto__;
}catch (e1662){var t__941__auto__ = e1662;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),7,46,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"database-version","database-version",1804360765,null),cljs.core.list(new cljs.core.Symbol("db","version","db/version",2065796451,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)))),46,t__941__auto__,null]));
}});

(indexed.db.database_test.test_getting_version.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.database_test.test_getting_version;},new cljs.core.Symbol("indexed.db.database-test","test-getting-version","indexed.db.database-test/test-getting-version",-542700071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.database-test","indexed.db.database-test",1303206777,null),new cljs.core.Symbol(null,"test-getting-version","test-getting-version",1149572534,null),"/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",30,1,45,45,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.database_test.test_getting_version)?indexed.db.database_test.test_getting_version.cljs$lang$test:null)])));
indexed.db.database_test.test_getting_store_names = (function indexed$db$database_test$test_getting_store_names(){
return cljs.test.test_var.call(null,indexed.db.database_test.test_getting_store_names.cljs$lang$var);
});
indexed.db.database_test.test_getting_store_names.cljs$lang$test = (function (){
var names = indexed.db.object_store_names.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db));
try{var values__890__auto___1667 = (new cljs.core.List(null,names,null,(1),null));
var result__891__auto___1668 = cljs.core.apply.call(null,cljs.core.seq_QMARK_,values__890__auto___1667);
if(cljs.core.truth_(result__891__auto___1668)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",21,new cljs.core.Keyword(null,"pass","pass",1574159993),9,50,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"names","names",-302543131,null)),50,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__890__auto___1667),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",21,new cljs.core.Keyword(null,"fail","fail",1706214930),9,50,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"names","names",-302543131,null)),50,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),values__890__auto___1667),null,(1),null)),(2),null)),null]));
}

}catch (e1664){var t__941__auto___1669 = e1664;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",21,new cljs.core.Keyword(null,"error","error",-978969032),9,50,cljs.core.list(new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"names","names",-302543131,null)),50,t__941__auto___1669,null]));
}
try{var values__890__auto___1670 = (new cljs.core.List(null,(2),(new cljs.core.List(null,cljs.core.count.call(null,names),null,(1),null)),(2),null));
var result__891__auto___1671 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1670);
if(cljs.core.truth_(result__891__auto___1671)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",28,new cljs.core.Keyword(null,"pass","pass",1574159993),9,51,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),51,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1670),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",28,new cljs.core.Keyword(null,"fail","fail",1706214930),9,51,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),51,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1670),null,(1),null)),(2),null)),null]));
}

}catch (e1665){var t__941__auto___1672 = e1665;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",28,new cljs.core.Keyword(null,"error","error",-978969032),9,51,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(2),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),51,t__941__auto___1672,null]));
}
try{var values__890__auto__ = (new cljs.core.List(null,cljs.core.filter.call(null,(function (p1__1663_SHARP_){
return cljs.core._EQ_.call(null,"toDoList",p1__1663_SHARP_);
}),names),null,(1),null));
var result__891__auto__ = cljs.core.apply.call(null,cljs.core.seq,values__890__auto__);
if(cljs.core.truth_(result__891__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",47,new cljs.core.Keyword(null,"pass","pass",1574159993),9,52,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1663#","p1__1663#",2087809626,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1663#","p1__1663#",2087809626,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),52,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__890__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",47,new cljs.core.Keyword(null,"fail","fail",1706214930),9,52,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1663#","p1__1663#",2087809626,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1663#","p1__1663#",2087809626,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),52,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__890__auto__),null,(1),null)),(2),null)),null]));
}

return result__891__auto__;
}catch (e1666){var t__941__auto__ = e1666;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",47,new cljs.core.Keyword(null,"error","error",-978969032),9,52,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1663#","p1__1663#",2087809626,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1663#","p1__1663#",2087809626,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),52,t__941__auto__,null]));
}});

(indexed.db.database_test.test_getting_store_names.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.database_test.test_getting_store_names;},new cljs.core.Symbol("indexed.db.database-test","test-getting-store-names","indexed.db.database-test/test-getting-store-names",2088461728,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.database-test","indexed.db.database-test",1303206777,null),new cljs.core.Symbol(null,"test-getting-store-names","test-getting-store-names",-177910721,null),"/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",34,1,48,48,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.database_test.test_getting_store_names)?indexed.db.database_test.test_getting_store_names.cljs$lang$test:null)])));
indexed.db.database_test.test_delete_object_store = (function indexed$db$database_test$test_delete_object_store(){
return cljs.test.test_var.call(null,indexed.db.database_test.test_delete_object_store.cljs$lang$var);
});
indexed.db.database_test.test_delete_object_store.cljs$lang$test = (function (){
indexed.db.close.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db));

if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.database_test !== 'undefined') && (typeof indexed.db.database_test.t_indexed$db$database_test1674 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.database_test.t_indexed$db$database_test1674 = (function (meta1675){
this.meta1675 = meta1675;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.database_test.t_indexed$db$database_test1674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1676,meta1675__$1){
var self__ = this;
var _1676__$1 = this;
return (new indexed.db.database_test.t_indexed$db$database_test1674(meta1675__$1));
}));

(indexed.db.database_test.t_indexed$db$database_test1674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1676){
var self__ = this;
var _1676__$1 = this;
return self__.meta1675;
}));

(indexed.db.database_test.t_indexed$db$database_test1674.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.database_test.t_indexed$db$database_test1674.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.test_util.open.call(null,indexed.db.database_test.database_name,(indexed.db.database_test.database_version + (1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
cljs.core.reset_BANG_.call(null,indexed.db.database_test._STAR_db,indexed.db.create_database.call(null,idb));

var names = indexed.db.object_store_names.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db));
try{var values__890__auto___1682 = (new cljs.core.List(null,(1),(new cljs.core.List(null,cljs.core.count.call(null,names),null,(1),null)),(2),null));
var result__891__auto___1683 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1682);
if(cljs.core.truth_(result__891__auto___1683)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),14,65,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),65,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1682),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),14,65,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),65,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1682),null,(1),null)),(2),null)),null]));
}

}catch (e1678){var t__941__auto___1684 = e1678;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),14,65,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),65,t__941__auto___1684,null]));
}
try{var values__890__auto___1685 = (new cljs.core.List(null,cljs.core.filter.call(null,(function (p1__1673_SHARP_){
return cljs.core._EQ_.call(null,"toDoList",p1__1673_SHARP_);
}),names),null,(1),null));
var result__891__auto___1686 = cljs.core.apply.call(null,cljs.core.seq,values__890__auto___1685);
if(cljs.core.truth_(result__891__auto___1686)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",52,new cljs.core.Keyword(null,"pass","pass",1574159993),14,66,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1673#","p1__1673#",1095920408,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1673#","p1__1673#",1095920408,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),66,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__890__auto___1685),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",52,new cljs.core.Keyword(null,"fail","fail",1706214930),14,66,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1673#","p1__1673#",1095920408,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1673#","p1__1673#",1095920408,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),66,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__890__auto___1685),null,(1),null)),(2),null)),null]));
}

}catch (e1679){var t__941__auto___1687 = e1679;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",52,new cljs.core.Keyword(null,"error","error",-978969032),14,66,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1673#","p1__1673#",1095920408,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1673#","p1__1673#",1095920408,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),66,t__941__auto___1687,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
return indexed.db.delete_object_store.call(null,db,"deleteMe");
})], null));
}));

(indexed.db.database_test.t_indexed$db$database_test1674.prototype.apply = (function (self__,args1677){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1677)));
}));

(indexed.db.database_test.t_indexed$db$database_test1674.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.test_util.open.call(null,indexed.db.database_test.database_name,(indexed.db.database_test.database_version + (1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
cljs.core.reset_BANG_.call(null,indexed.db.database_test._STAR_db,indexed.db.create_database.call(null,idb));

var names = indexed.db.object_store_names.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db));
try{var values__890__auto___1688 = (new cljs.core.List(null,(1),(new cljs.core.List(null,cljs.core.count.call(null,names),null,(1),null)),(2),null));
var result__891__auto___1689 = cljs.core.apply.call(null,cljs.core._EQ_,values__890__auto___1688);
if(cljs.core.truth_(result__891__auto___1689)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),14,65,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),65,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1688),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),14,65,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),65,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__890__auto___1688),null,(1),null)),(2),null)),null]));
}

}catch (e1680){var t__941__auto___1690 = e1680;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),14,65,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"names","names",-302543131,null))),65,t__941__auto___1690,null]));
}
try{var values__890__auto___1691 = (new cljs.core.List(null,cljs.core.filter.call(null,(function (p1__1673_SHARP_){
return cljs.core._EQ_.call(null,"toDoList",p1__1673_SHARP_);
}),names),null,(1),null));
var result__891__auto___1692 = cljs.core.apply.call(null,cljs.core.seq,values__890__auto___1691);
if(cljs.core.truth_(result__891__auto___1692)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",52,new cljs.core.Keyword(null,"pass","pass",1574159993),14,66,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1673#","p1__1673#",1095920408,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1673#","p1__1673#",1095920408,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),66,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__890__auto___1691),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",52,new cljs.core.Keyword(null,"fail","fail",1706214930),14,66,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1673#","p1__1673#",1095920408,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1673#","p1__1673#",1095920408,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),66,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq","seq",-177272256,null),values__890__auto___1691),null,(1),null)),(2),null)),null]));
}

}catch (e1681){var t__941__auto___1693 = e1681;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",52,new cljs.core.Keyword(null,"error","error",-978969032),14,66,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__1673#","p1__1673#",1095920408,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"toDoList",new cljs.core.Symbol(null,"p1__1673#","p1__1673#",1095920408,null))),new cljs.core.Symbol(null,"names","names",-302543131,null))),66,t__941__auto___1693,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
return indexed.db.delete_object_store.call(null,db,"deleteMe");
})], null));
}));

(indexed.db.database_test.t_indexed$db$database_test1674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1675","meta1675",-1101236195,null)], null);
}));

(indexed.db.database_test.t_indexed$db$database_test1674.cljs$lang$type = true);

(indexed.db.database_test.t_indexed$db$database_test1674.cljs$lang$ctorStr = "indexed.db.database-test/t_indexed$db$database_test1674");

(indexed.db.database_test.t_indexed$db$database_test1674.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.database-test/t_indexed$db$database_test1674");
}));

/**
 * Positional factory function for indexed.db.database-test/t_indexed$db$database_test1674.
 */
indexed.db.database_test.__GT_t_indexed$db$database_test1674 = (function indexed$db$database_test$__GT_t_indexed$db$database_test1674(meta1675){
return (new indexed.db.database_test.t_indexed$db$database_test1674(meta1675));
});

}

return (new indexed.db.database_test.t_indexed$db$database_test1674(null));
});

(indexed.db.database_test.test_delete_object_store.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.database_test.test_delete_object_store;},new cljs.core.Symbol("indexed.db.database-test","test-delete-object-store","indexed.db.database-test/test-delete-object-store",1900729852,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.database-test","indexed.db.database-test",1303206777,null),new cljs.core.Symbol(null,"test-delete-object-store","test-delete-object-store",-93794963,null),"/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",34,1,54,54,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.database_test.test_delete_object_store)?indexed.db.database_test.test_delete_object_store.cljs$lang$test:null)])));
indexed.db.database_test.test_transaction = (function indexed$db$database_test$test_transaction(){
return cljs.test.test_var.call(null,indexed.db.database_test.test_transaction.cljs$lang$var);
});
indexed.db.database_test.test_transaction.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"with a valid store name");

try{try{var values__890__auto___1701 = (new cljs.core.List(null,indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null)),null,(1),null));
var result__891__auto___1702 = cljs.core.apply.call(null,cljs.core.some_QMARK_,values__890__auto___1701);
if(cljs.core.truth_(result__891__auto___1702)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",51,new cljs.core.Keyword(null,"pass","pass",1574159993),9,76,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null))),76,cljs.core.cons.call(null,new cljs.core.Symbol(null,"some?","some?",234752293,null),values__890__auto___1701),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",51,new cljs.core.Keyword(null,"fail","fail",1706214930),9,76,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null))),76,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"some?","some?",234752293,null),values__890__auto___1701),null,(1),null)),(2),null)),null]));
}

}catch (e1694){var t__941__auto___1703 = e1694;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",51,new cljs.core.Keyword(null,"error","error",-978969032),9,76,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null))),76,t__941__auto___1703,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"with an invalid store name");

try{try{try{indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null));

cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",64,new cljs.core.Keyword(null,"fail","fail",1706214930),9,78,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null))),78,null,null]));
}catch (e1696){if((e1696 instanceof DOMException)){
var e__928__auto___1704 = e1696;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",64,new cljs.core.Keyword(null,"pass","pass",1574159993),9,78,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null))),78,e__928__auto___1704,null]));

} else {
throw e1696;

}
}}catch (e1695){var t__941__auto___1705 = e1695;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",64,new cljs.core.Keyword(null,"error","error",-978969032),9,78,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null))),78,t__941__auto___1705,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"with an invalid mode");

try{try{try{indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),"readbologna");

cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",80,new cljs.core.Keyword(null,"fail","fail",1706214930),9,80,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","TypeError","js/TypeError",-2012994461,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),"readbologna")),80,null,null]));
}catch (e1698){if((e1698 instanceof TypeError)){
var e__928__auto___1706 = e1698;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",80,new cljs.core.Keyword(null,"pass","pass",1574159993),9,80,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","TypeError","js/TypeError",-2012994461,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),"readbologna")),80,e__928__auto___1706,null]));

} else {
throw e1698;

}
}}catch (e1697){var t__941__auto___1707 = e1697;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",80,new cljs.core.Keyword(null,"error","error",-978969032),9,80,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","TypeError","js/TypeError",-2012994461,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toDoList"], null),"readbologna")),80,t__941__auto___1707,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"with an invalid store name");

try{try{try{indexed.db.transaction.call(null,cljs.core.deref.call(null,indexed.db.database_test._STAR_db),cljs.core.PersistentVector.EMPTY);

return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),9,82,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),cljs.core.PersistentVector.EMPTY)),82,null,null]));
}catch (e1700){if((e1700 instanceof DOMException)){
var e__928__auto__ = e1700;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),9,82,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),cljs.core.PersistentVector.EMPTY)),82,e__928__auto__,null]));

return e__928__auto__;
} else {
throw e1700;

}
}}catch (e1699){var t__941__auto__ = e1699;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),9,82,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"*db","*db",-1131462120,null)),cljs.core.PersistentVector.EMPTY)),82,t__941__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(indexed.db.database_test.test_transaction.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.database_test.test_transaction;},new cljs.core.Symbol("indexed.db.database-test","test-transaction","indexed.db.database-test/test-transaction",651770178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.database-test","indexed.db.database-test",1303206777,null),new cljs.core.Symbol(null,"test-transaction","test-transaction",-1446571299,null),"/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",26,1,74,74,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.database_test.test_transaction)?indexed.db.database_test.test_transaction.cljs$lang$test:null)])));
indexed.db.database_test.test_transaction_on_closed_db = (function indexed$db$database_test$test_transaction_on_closed_db(){
return cljs.test.test_var.call(null,indexed.db.database_test.test_transaction_on_closed_db.cljs$lang$var);
});
indexed.db.database_test.test_transaction_on_closed_db.cljs$lang$test = (function (){
if((typeof indexed !== 'undefined') && (typeof indexed.db !== 'undefined') && (typeof indexed.db.database_test !== 'undefined') && (typeof indexed.db.database_test.t_indexed$db$database_test1708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
indexed.db.database_test.t_indexed$db$database_test1708 = (function (meta1709){
this.meta1709 = meta1709;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(indexed.db.database_test.t_indexed$db$database_test1708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1710,meta1709__$1){
var self__ = this;
var _1710__$1 = this;
return (new indexed.db.database_test.t_indexed$db$database_test1708(meta1709__$1));
}));

(indexed.db.database_test.t_indexed$db$database_test1708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1710){
var self__ = this;
var _1710__$1 = this;
return self__.meta1709;
}));

(indexed.db.database_test.t_indexed$db$database_test1708.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(indexed.db.database_test.t_indexed$db$database_test1708.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___972__auto__ = self____$1;
return indexed.db.test_util.test_connect.call(null,[indexed.db.database_test.database_name,"-transaction-test"].join(''),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
var db = indexed.db.create_database.call(null,idb);
indexed.db.close.call(null,db);

try{try{indexed.db.transaction.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null));

cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",74,new cljs.core.Keyword(null,"fail","fail",1706214930),14,94,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null))),94,null,null]));
}catch (e1713){if((e1713 instanceof DOMException)){
var e__928__auto___1716 = e1713;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",74,new cljs.core.Keyword(null,"pass","pass",1574159993),14,94,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null))),94,e__928__auto___1716,null]));

} else {
throw e1713;

}
}}catch (e1712){var t__941__auto___1717 = e1712;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",74,new cljs.core.Keyword(null,"error","error",-978969032),14,94,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null))),94,t__941__auto___1717,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
return indexed.db.create_object_store.call(null,db,"test-store");
})], null));
}));

(indexed.db.database_test.t_indexed$db$database_test1708.prototype.apply = (function (self__,args1711){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args1711)));
}));

(indexed.db.database_test.t_indexed$db$database_test1708.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___972__auto__ = this;
return indexed.db.test_util.test_connect.call(null,[indexed.db.database_test.database_name,"-transaction-test"].join(''),(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),(function (idb){
var db = indexed.db.create_database.call(null,idb);
indexed.db.close.call(null,db);

try{try{indexed.db.transaction.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null));

cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",74,new cljs.core.Keyword(null,"fail","fail",1706214930),14,94,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null))),94,null,null]));
}catch (e1715){if((e1715 instanceof DOMException)){
var e__928__auto___1718 = e1715;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",74,new cljs.core.Keyword(null,"pass","pass",1574159993),14,94,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null))),94,e__928__auto___1718,null]));

} else {
throw e1715;

}
}}catch (e1714){var t__941__auto___1719 = e1714;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",74,new cljs.core.Keyword(null,"error","error",-978969032),14,94,cljs.core.list(new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),new cljs.core.Symbol("js","DOMException","js/DOMException",624128105,null),cljs.core.list(new cljs.core.Symbol("db","transaction","db/transaction",-877085226,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test-store"], null))),94,t__941__auto___1719,null]));
}
return done.call(null);
}),new cljs.core.Keyword(null,"upgradeneeded","upgradeneeded",1003500472),(function (idb){
var db = indexed.db.create_database.call(null,idb);
return indexed.db.create_object_store.call(null,db,"test-store");
})], null));
}));

(indexed.db.database_test.t_indexed$db$database_test1708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta1709","meta1709",-1995488687,null)], null);
}));

(indexed.db.database_test.t_indexed$db$database_test1708.cljs$lang$type = true);

(indexed.db.database_test.t_indexed$db$database_test1708.cljs$lang$ctorStr = "indexed.db.database-test/t_indexed$db$database_test1708");

(indexed.db.database_test.t_indexed$db$database_test1708.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write.call(null,writer__4492__auto__,"indexed.db.database-test/t_indexed$db$database_test1708");
}));

/**
 * Positional factory function for indexed.db.database-test/t_indexed$db$database_test1708.
 */
indexed.db.database_test.__GT_t_indexed$db$database_test1708 = (function indexed$db$database_test$__GT_t_indexed$db$database_test1708(meta1709){
return (new indexed.db.database_test.t_indexed$db$database_test1708(meta1709));
});

}

return (new indexed.db.database_test.t_indexed$db$database_test1708(null));
});

(indexed.db.database_test.test_transaction_on_closed_db.cljs$lang$var = new cljs.core.Var(function(){return indexed.db.database_test.test_transaction_on_closed_db;},new cljs.core.Symbol("indexed.db.database-test","test-transaction-on-closed-db","indexed.db.database-test/test-transaction-on-closed-db",-519348815,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"indexed.db.database-test","indexed.db.database-test",1303206777,null),new cljs.core.Symbol(null,"test-transaction-on-closed-db","test-transaction-on-closed-db",-1709890272,null),"/Users/brian/projects/indexed.db/test/indexed/db/database_test.cljs",39,1,84,84,cljs.core.List.EMPTY,null,(cljs.core.truth_(indexed.db.database_test.test_transaction_on_closed_db)?indexed.db.database_test.test_transaction_on_closed_db.cljs$lang$test:null)])));

//# sourceMappingURL=database_test.js.map
