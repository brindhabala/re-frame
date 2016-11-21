// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__28005__auto__,writer__28006__auto__,opt__28007__auto__){
return cljs.core._write.call(null,writer__28006__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34771 = arguments.length;
var i__28475__auto___34772 = (0);
while(true){
if((i__28475__auto___34772 < len__28474__auto___34771)){
args__28481__auto__.push((arguments[i__28475__auto___34772]));

var G__34773 = (i__28475__auto___34772 + (1));
i__28475__auto___34772 = G__34773;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq34770){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34770));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34775 = arguments.length;
var i__28475__auto___34776 = (0);
while(true){
if((i__28475__auto___34776 < len__28474__auto___34775)){
args__28481__auto__.push((arguments[i__28475__auto___34776]));

var G__34777 = (i__28475__auto___34776 + (1));
i__28475__auto___34776 = G__34777;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq34774){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34774));
});

var g_QMARK__34778 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_34779 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34778){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__34778))
,null));
var mkg_34780 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34778,g_34779){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__34778,g_34779))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__34778,g_34779,mkg_34780){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__34778).call(null,x);
});})(g_QMARK__34778,g_34779,mkg_34780))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__34778,g_34779,mkg_34780){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_34780).call(null,gfn);
});})(g_QMARK__34778,g_34779,mkg_34780))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__34778,g_34779,mkg_34780){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_34779).call(null,generator);
});})(g_QMARK__34778,g_34779,mkg_34780))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__34742__auto___34799 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__34742__auto___34799){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34800 = arguments.length;
var i__28475__auto___34801 = (0);
while(true){
if((i__28475__auto___34801 < len__28474__auto___34800)){
args__28481__auto__.push((arguments[i__28475__auto___34801]));

var G__34802 = (i__28475__auto___34801 + (1));
i__28475__auto___34801 = G__34802;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34799))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34799){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34799),args);
});})(g__34742__auto___34799))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__34742__auto___34799){
return (function (seq34781){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34781));
});})(g__34742__auto___34799))
;


var g__34742__auto___34803 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__34742__auto___34803){
return (function cljs$spec$impl$gen$list(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34804 = arguments.length;
var i__28475__auto___34805 = (0);
while(true){
if((i__28475__auto___34805 < len__28474__auto___34804)){
args__28481__auto__.push((arguments[i__28475__auto___34805]));

var G__34806 = (i__28475__auto___34805 + (1));
i__28475__auto___34805 = G__34806;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34803))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34803){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34803),args);
});})(g__34742__auto___34803))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__34742__auto___34803){
return (function (seq34782){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34782));
});})(g__34742__auto___34803))
;


var g__34742__auto___34807 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__34742__auto___34807){
return (function cljs$spec$impl$gen$map(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34808 = arguments.length;
var i__28475__auto___34809 = (0);
while(true){
if((i__28475__auto___34809 < len__28474__auto___34808)){
args__28481__auto__.push((arguments[i__28475__auto___34809]));

var G__34810 = (i__28475__auto___34809 + (1));
i__28475__auto___34809 = G__34810;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34807))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34807){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34807),args);
});})(g__34742__auto___34807))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__34742__auto___34807){
return (function (seq34783){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34783));
});})(g__34742__auto___34807))
;


var g__34742__auto___34811 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__34742__auto___34811){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34812 = arguments.length;
var i__28475__auto___34813 = (0);
while(true){
if((i__28475__auto___34813 < len__28474__auto___34812)){
args__28481__auto__.push((arguments[i__28475__auto___34813]));

var G__34814 = (i__28475__auto___34813 + (1));
i__28475__auto___34813 = G__34814;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34811))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34811){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34811),args);
});})(g__34742__auto___34811))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__34742__auto___34811){
return (function (seq34784){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34784));
});})(g__34742__auto___34811))
;


var g__34742__auto___34815 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__34742__auto___34815){
return (function cljs$spec$impl$gen$set(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34816 = arguments.length;
var i__28475__auto___34817 = (0);
while(true){
if((i__28475__auto___34817 < len__28474__auto___34816)){
args__28481__auto__.push((arguments[i__28475__auto___34817]));

var G__34818 = (i__28475__auto___34817 + (1));
i__28475__auto___34817 = G__34818;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34815))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34815){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34815),args);
});})(g__34742__auto___34815))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__34742__auto___34815){
return (function (seq34785){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34785));
});})(g__34742__auto___34815))
;


var g__34742__auto___34819 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__34742__auto___34819){
return (function cljs$spec$impl$gen$vector(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34820 = arguments.length;
var i__28475__auto___34821 = (0);
while(true){
if((i__28475__auto___34821 < len__28474__auto___34820)){
args__28481__auto__.push((arguments[i__28475__auto___34821]));

var G__34822 = (i__28475__auto___34821 + (1));
i__28475__auto___34821 = G__34822;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34819))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34819){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34819),args);
});})(g__34742__auto___34819))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__34742__auto___34819){
return (function (seq34786){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34786));
});})(g__34742__auto___34819))
;


var g__34742__auto___34823 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__34742__auto___34823){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34824 = arguments.length;
var i__28475__auto___34825 = (0);
while(true){
if((i__28475__auto___34825 < len__28474__auto___34824)){
args__28481__auto__.push((arguments[i__28475__auto___34825]));

var G__34826 = (i__28475__auto___34825 + (1));
i__28475__auto___34825 = G__34826;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34823))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34823){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34823),args);
});})(g__34742__auto___34823))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__34742__auto___34823){
return (function (seq34787){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34787));
});})(g__34742__auto___34823))
;


var g__34742__auto___34827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__34742__auto___34827){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34828 = arguments.length;
var i__28475__auto___34829 = (0);
while(true){
if((i__28475__auto___34829 < len__28474__auto___34828)){
args__28481__auto__.push((arguments[i__28475__auto___34829]));

var G__34830 = (i__28475__auto___34829 + (1));
i__28475__auto___34829 = G__34830;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34827))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34827){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34827),args);
});})(g__34742__auto___34827))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__34742__auto___34827){
return (function (seq34788){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34788));
});})(g__34742__auto___34827))
;


var g__34742__auto___34831 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__34742__auto___34831){
return (function cljs$spec$impl$gen$elements(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34832 = arguments.length;
var i__28475__auto___34833 = (0);
while(true){
if((i__28475__auto___34833 < len__28474__auto___34832)){
args__28481__auto__.push((arguments[i__28475__auto___34833]));

var G__34834 = (i__28475__auto___34833 + (1));
i__28475__auto___34833 = G__34834;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34831))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34831){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34831),args);
});})(g__34742__auto___34831))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__34742__auto___34831){
return (function (seq34789){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34789));
});})(g__34742__auto___34831))
;


var g__34742__auto___34835 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__34742__auto___34835){
return (function cljs$spec$impl$gen$bind(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34836 = arguments.length;
var i__28475__auto___34837 = (0);
while(true){
if((i__28475__auto___34837 < len__28474__auto___34836)){
args__28481__auto__.push((arguments[i__28475__auto___34837]));

var G__34838 = (i__28475__auto___34837 + (1));
i__28475__auto___34837 = G__34838;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34835))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34835){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34835),args);
});})(g__34742__auto___34835))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__34742__auto___34835){
return (function (seq34790){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34790));
});})(g__34742__auto___34835))
;


var g__34742__auto___34839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__34742__auto___34839){
return (function cljs$spec$impl$gen$choose(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34840 = arguments.length;
var i__28475__auto___34841 = (0);
while(true){
if((i__28475__auto___34841 < len__28474__auto___34840)){
args__28481__auto__.push((arguments[i__28475__auto___34841]));

var G__34842 = (i__28475__auto___34841 + (1));
i__28475__auto___34841 = G__34842;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34839))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34839),args);
});})(g__34742__auto___34839))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__34742__auto___34839){
return (function (seq34791){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34791));
});})(g__34742__auto___34839))
;


var g__34742__auto___34843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__34742__auto___34843){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34844 = arguments.length;
var i__28475__auto___34845 = (0);
while(true){
if((i__28475__auto___34845 < len__28474__auto___34844)){
args__28481__auto__.push((arguments[i__28475__auto___34845]));

var G__34846 = (i__28475__auto___34845 + (1));
i__28475__auto___34845 = G__34846;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34843))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34843),args);
});})(g__34742__auto___34843))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__34742__auto___34843){
return (function (seq34792){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34792));
});})(g__34742__auto___34843))
;


var g__34742__auto___34847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__34742__auto___34847){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34848 = arguments.length;
var i__28475__auto___34849 = (0);
while(true){
if((i__28475__auto___34849 < len__28474__auto___34848)){
args__28481__auto__.push((arguments[i__28475__auto___34849]));

var G__34850 = (i__28475__auto___34849 + (1));
i__28475__auto___34849 = G__34850;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34847))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34847),args);
});})(g__34742__auto___34847))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__34742__auto___34847){
return (function (seq34793){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34793));
});})(g__34742__auto___34847))
;


var g__34742__auto___34851 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__34742__auto___34851){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34852 = arguments.length;
var i__28475__auto___34853 = (0);
while(true){
if((i__28475__auto___34853 < len__28474__auto___34852)){
args__28481__auto__.push((arguments[i__28475__auto___34853]));

var G__34854 = (i__28475__auto___34853 + (1));
i__28475__auto___34853 = G__34854;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34851))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34851),args);
});})(g__34742__auto___34851))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__34742__auto___34851){
return (function (seq34794){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34794));
});})(g__34742__auto___34851))
;


var g__34742__auto___34855 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__34742__auto___34855){
return (function cljs$spec$impl$gen$sample(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34856 = arguments.length;
var i__28475__auto___34857 = (0);
while(true){
if((i__28475__auto___34857 < len__28474__auto___34856)){
args__28481__auto__.push((arguments[i__28475__auto___34857]));

var G__34858 = (i__28475__auto___34857 + (1));
i__28475__auto___34857 = G__34858;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34855))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34855){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34855),args);
});})(g__34742__auto___34855))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__34742__auto___34855){
return (function (seq34795){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34795));
});})(g__34742__auto___34855))
;


var g__34742__auto___34859 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__34742__auto___34859){
return (function cljs$spec$impl$gen$return(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34860 = arguments.length;
var i__28475__auto___34861 = (0);
while(true){
if((i__28475__auto___34861 < len__28474__auto___34860)){
args__28481__auto__.push((arguments[i__28475__auto___34861]));

var G__34862 = (i__28475__auto___34861 + (1));
i__28475__auto___34861 = G__34862;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34859))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34859),args);
});})(g__34742__auto___34859))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__34742__auto___34859){
return (function (seq34796){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34796));
});})(g__34742__auto___34859))
;


var g__34742__auto___34863 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__34742__auto___34863){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34864 = arguments.length;
var i__28475__auto___34865 = (0);
while(true){
if((i__28475__auto___34865 < len__28474__auto___34864)){
args__28481__auto__.push((arguments[i__28475__auto___34865]));

var G__34866 = (i__28475__auto___34865 + (1));
i__28475__auto___34865 = G__34866;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34863))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34863),args);
});})(g__34742__auto___34863))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__34742__auto___34863){
return (function (seq34797){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34797));
});})(g__34742__auto___34863))
;


var g__34742__auto___34867 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__34742__auto___34867){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34868 = arguments.length;
var i__28475__auto___34869 = (0);
while(true){
if((i__28475__auto___34869 < len__28474__auto___34868)){
args__28481__auto__.push((arguments[i__28475__auto___34869]));

var G__34870 = (i__28475__auto___34869 + (1));
i__28475__auto___34869 = G__34870;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34742__auto___34867))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34742__auto___34867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34742__auto___34867),args);
});})(g__34742__auto___34867))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__34742__auto___34867){
return (function (seq34798){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34798));
});})(g__34742__auto___34867))
;

var g__34755__auto___34892 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__34755__auto___34892){
return (function cljs$spec$impl$gen$any(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34893 = arguments.length;
var i__28475__auto___34894 = (0);
while(true){
if((i__28475__auto___34894 < len__28474__auto___34893)){
args__28481__auto__.push((arguments[i__28475__auto___34894]));

var G__34895 = (i__28475__auto___34894 + (1));
i__28475__auto___34894 = G__34895;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34892))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34892){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34892);
});})(g__34755__auto___34892))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__34755__auto___34892){
return (function (seq34871){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34871));
});})(g__34755__auto___34892))
;


var g__34755__auto___34896 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__34755__auto___34896){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34897 = arguments.length;
var i__28475__auto___34898 = (0);
while(true){
if((i__28475__auto___34898 < len__28474__auto___34897)){
args__28481__auto__.push((arguments[i__28475__auto___34898]));

var G__34899 = (i__28475__auto___34898 + (1));
i__28475__auto___34898 = G__34899;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34896))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34896){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34896);
});})(g__34755__auto___34896))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__34755__auto___34896){
return (function (seq34872){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34872));
});})(g__34755__auto___34896))
;


var g__34755__auto___34900 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__34755__auto___34900){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34901 = arguments.length;
var i__28475__auto___34902 = (0);
while(true){
if((i__28475__auto___34902 < len__28474__auto___34901)){
args__28481__auto__.push((arguments[i__28475__auto___34902]));

var G__34903 = (i__28475__auto___34902 + (1));
i__28475__auto___34902 = G__34903;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34900))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34900){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34900);
});})(g__34755__auto___34900))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__34755__auto___34900){
return (function (seq34873){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34873));
});})(g__34755__auto___34900))
;


var g__34755__auto___34904 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__34755__auto___34904){
return (function cljs$spec$impl$gen$char(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34905 = arguments.length;
var i__28475__auto___34906 = (0);
while(true){
if((i__28475__auto___34906 < len__28474__auto___34905)){
args__28481__auto__.push((arguments[i__28475__auto___34906]));

var G__34907 = (i__28475__auto___34906 + (1));
i__28475__auto___34906 = G__34907;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34904))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34904){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34904);
});})(g__34755__auto___34904))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__34755__auto___34904){
return (function (seq34874){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34874));
});})(g__34755__auto___34904))
;


var g__34755__auto___34908 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__34755__auto___34908){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34909 = arguments.length;
var i__28475__auto___34910 = (0);
while(true){
if((i__28475__auto___34910 < len__28474__auto___34909)){
args__28481__auto__.push((arguments[i__28475__auto___34910]));

var G__34911 = (i__28475__auto___34910 + (1));
i__28475__auto___34910 = G__34911;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34908))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34908){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34908);
});})(g__34755__auto___34908))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__34755__auto___34908){
return (function (seq34875){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34875));
});})(g__34755__auto___34908))
;


var g__34755__auto___34912 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__34755__auto___34912){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34913 = arguments.length;
var i__28475__auto___34914 = (0);
while(true){
if((i__28475__auto___34914 < len__28474__auto___34913)){
args__28481__auto__.push((arguments[i__28475__auto___34914]));

var G__34915 = (i__28475__auto___34914 + (1));
i__28475__auto___34914 = G__34915;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34912))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34912){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34912);
});})(g__34755__auto___34912))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__34755__auto___34912){
return (function (seq34876){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34876));
});})(g__34755__auto___34912))
;


var g__34755__auto___34916 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__34755__auto___34916){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34917 = arguments.length;
var i__28475__auto___34918 = (0);
while(true){
if((i__28475__auto___34918 < len__28474__auto___34917)){
args__28481__auto__.push((arguments[i__28475__auto___34918]));

var G__34919 = (i__28475__auto___34918 + (1));
i__28475__auto___34918 = G__34919;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34916))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34916){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34916);
});})(g__34755__auto___34916))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__34755__auto___34916){
return (function (seq34877){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34877));
});})(g__34755__auto___34916))
;


var g__34755__auto___34920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__34755__auto___34920){
return (function cljs$spec$impl$gen$double(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34921 = arguments.length;
var i__28475__auto___34922 = (0);
while(true){
if((i__28475__auto___34922 < len__28474__auto___34921)){
args__28481__auto__.push((arguments[i__28475__auto___34922]));

var G__34923 = (i__28475__auto___34922 + (1));
i__28475__auto___34922 = G__34923;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34920))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34920){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34920);
});})(g__34755__auto___34920))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__34755__auto___34920){
return (function (seq34878){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34878));
});})(g__34755__auto___34920))
;


var g__34755__auto___34924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__34755__auto___34924){
return (function cljs$spec$impl$gen$int(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34925 = arguments.length;
var i__28475__auto___34926 = (0);
while(true){
if((i__28475__auto___34926 < len__28474__auto___34925)){
args__28481__auto__.push((arguments[i__28475__auto___34926]));

var G__34927 = (i__28475__auto___34926 + (1));
i__28475__auto___34926 = G__34927;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34924))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34924){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34924);
});})(g__34755__auto___34924))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__34755__auto___34924){
return (function (seq34879){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34879));
});})(g__34755__auto___34924))
;


var g__34755__auto___34928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__34755__auto___34928){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34929 = arguments.length;
var i__28475__auto___34930 = (0);
while(true){
if((i__28475__auto___34930 < len__28474__auto___34929)){
args__28481__auto__.push((arguments[i__28475__auto___34930]));

var G__34931 = (i__28475__auto___34930 + (1));
i__28475__auto___34930 = G__34931;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34928))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34928){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34928);
});})(g__34755__auto___34928))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__34755__auto___34928){
return (function (seq34880){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34880));
});})(g__34755__auto___34928))
;


var g__34755__auto___34932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__34755__auto___34932){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34933 = arguments.length;
var i__28475__auto___34934 = (0);
while(true){
if((i__28475__auto___34934 < len__28474__auto___34933)){
args__28481__auto__.push((arguments[i__28475__auto___34934]));

var G__34935 = (i__28475__auto___34934 + (1));
i__28475__auto___34934 = G__34935;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34932))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34932){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34932);
});})(g__34755__auto___34932))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__34755__auto___34932){
return (function (seq34881){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34881));
});})(g__34755__auto___34932))
;


var g__34755__auto___34936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__34755__auto___34936){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34937 = arguments.length;
var i__28475__auto___34938 = (0);
while(true){
if((i__28475__auto___34938 < len__28474__auto___34937)){
args__28481__auto__.push((arguments[i__28475__auto___34938]));

var G__34939 = (i__28475__auto___34938 + (1));
i__28475__auto___34938 = G__34939;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34936))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34936){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34936);
});})(g__34755__auto___34936))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__34755__auto___34936){
return (function (seq34882){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34882));
});})(g__34755__auto___34936))
;


var g__34755__auto___34940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__34755__auto___34940){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34941 = arguments.length;
var i__28475__auto___34942 = (0);
while(true){
if((i__28475__auto___34942 < len__28474__auto___34941)){
args__28481__auto__.push((arguments[i__28475__auto___34942]));

var G__34943 = (i__28475__auto___34942 + (1));
i__28475__auto___34942 = G__34943;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34940))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34940){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34940);
});})(g__34755__auto___34940))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__34755__auto___34940){
return (function (seq34883){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34883));
});})(g__34755__auto___34940))
;


var g__34755__auto___34944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__34755__auto___34944){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34945 = arguments.length;
var i__28475__auto___34946 = (0);
while(true){
if((i__28475__auto___34946 < len__28474__auto___34945)){
args__28481__auto__.push((arguments[i__28475__auto___34946]));

var G__34947 = (i__28475__auto___34946 + (1));
i__28475__auto___34946 = G__34947;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34944))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34944){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34944);
});})(g__34755__auto___34944))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__34755__auto___34944){
return (function (seq34884){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34884));
});})(g__34755__auto___34944))
;


var g__34755__auto___34948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__34755__auto___34948){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34949 = arguments.length;
var i__28475__auto___34950 = (0);
while(true){
if((i__28475__auto___34950 < len__28474__auto___34949)){
args__28481__auto__.push((arguments[i__28475__auto___34950]));

var G__34951 = (i__28475__auto___34950 + (1));
i__28475__auto___34950 = G__34951;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34948))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34948){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34948);
});})(g__34755__auto___34948))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__34755__auto___34948){
return (function (seq34885){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34885));
});})(g__34755__auto___34948))
;


var g__34755__auto___34952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__34755__auto___34952){
return (function cljs$spec$impl$gen$string(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34953 = arguments.length;
var i__28475__auto___34954 = (0);
while(true){
if((i__28475__auto___34954 < len__28474__auto___34953)){
args__28481__auto__.push((arguments[i__28475__auto___34954]));

var G__34955 = (i__28475__auto___34954 + (1));
i__28475__auto___34954 = G__34955;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34952))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34952){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34952);
});})(g__34755__auto___34952))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__34755__auto___34952){
return (function (seq34886){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34886));
});})(g__34755__auto___34952))
;


var g__34755__auto___34956 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__34755__auto___34956){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34957 = arguments.length;
var i__28475__auto___34958 = (0);
while(true){
if((i__28475__auto___34958 < len__28474__auto___34957)){
args__28481__auto__.push((arguments[i__28475__auto___34958]));

var G__34959 = (i__28475__auto___34958 + (1));
i__28475__auto___34958 = G__34959;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34956))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34956){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34956);
});})(g__34755__auto___34956))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__34755__auto___34956){
return (function (seq34887){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34887));
});})(g__34755__auto___34956))
;


var g__34755__auto___34960 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__34755__auto___34960){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34961 = arguments.length;
var i__28475__auto___34962 = (0);
while(true){
if((i__28475__auto___34962 < len__28474__auto___34961)){
args__28481__auto__.push((arguments[i__28475__auto___34962]));

var G__34963 = (i__28475__auto___34962 + (1));
i__28475__auto___34962 = G__34963;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34960))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34960){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34960);
});})(g__34755__auto___34960))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__34755__auto___34960){
return (function (seq34888){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34888));
});})(g__34755__auto___34960))
;


var g__34755__auto___34964 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__34755__auto___34964){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34965 = arguments.length;
var i__28475__auto___34966 = (0);
while(true){
if((i__28475__auto___34966 < len__28474__auto___34965)){
args__28481__auto__.push((arguments[i__28475__auto___34966]));

var G__34967 = (i__28475__auto___34966 + (1));
i__28475__auto___34966 = G__34967;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34964))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34964){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34964);
});})(g__34755__auto___34964))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__34755__auto___34964){
return (function (seq34889){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34889));
});})(g__34755__auto___34964))
;


var g__34755__auto___34968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__34755__auto___34968){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34969 = arguments.length;
var i__28475__auto___34970 = (0);
while(true){
if((i__28475__auto___34970 < len__28474__auto___34969)){
args__28481__auto__.push((arguments[i__28475__auto___34970]));

var G__34971 = (i__28475__auto___34970 + (1));
i__28475__auto___34970 = G__34971;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34968))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34968){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34968);
});})(g__34755__auto___34968))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__34755__auto___34968){
return (function (seq34890){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34890));
});})(g__34755__auto___34968))
;


var g__34755__auto___34972 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__34755__auto___34972){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34973 = arguments.length;
var i__28475__auto___34974 = (0);
while(true){
if((i__28475__auto___34974 < len__28474__auto___34973)){
args__28481__auto__.push((arguments[i__28475__auto___34974]));

var G__34975 = (i__28475__auto___34974 + (1));
i__28475__auto___34974 = G__34975;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});})(g__34755__auto___34972))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34755__auto___34972){
return (function (args){
return cljs.core.deref.call(null,g__34755__auto___34972);
});})(g__34755__auto___34972))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__34755__auto___34972){
return (function (seq34891){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34891));
});})(g__34755__auto___34972))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__28481__auto__ = [];
var len__28474__auto___34978 = arguments.length;
var i__28475__auto___34979 = (0);
while(true){
if((i__28475__auto___34979 < len__28474__auto___34978)){
args__28481__auto__.push((arguments[i__28475__auto___34979]));

var G__34980 = (i__28475__auto___34979 + (1));
i__28475__auto___34979 = G__34980;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((0) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28482__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__34976_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__34976_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq34977){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34977));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__34981_SHARP_){
return (new Date(p1__34981_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1479712003757