// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36018){
var map__36043 = p__36018;
var map__36043__$1 = ((((!((map__36043 == null)))?((((map__36043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36043):map__36043);
var m = map__36043__$1;
var n = cljs.core.get.call(null,map__36043__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36043__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36045_36067 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36046_36068 = null;
var count__36047_36069 = (0);
var i__36048_36070 = (0);
while(true){
if((i__36048_36070 < count__36047_36069)){
var f_36071 = cljs.core._nth.call(null,chunk__36046_36068,i__36048_36070);
cljs.core.println.call(null,"  ",f_36071);

var G__36072 = seq__36045_36067;
var G__36073 = chunk__36046_36068;
var G__36074 = count__36047_36069;
var G__36075 = (i__36048_36070 + (1));
seq__36045_36067 = G__36072;
chunk__36046_36068 = G__36073;
count__36047_36069 = G__36074;
i__36048_36070 = G__36075;
continue;
} else {
var temp__4657__auto___36076 = cljs.core.seq.call(null,seq__36045_36067);
if(temp__4657__auto___36076){
var seq__36045_36077__$1 = temp__4657__auto___36076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36045_36077__$1)){
var c__28210__auto___36078 = cljs.core.chunk_first.call(null,seq__36045_36077__$1);
var G__36079 = cljs.core.chunk_rest.call(null,seq__36045_36077__$1);
var G__36080 = c__28210__auto___36078;
var G__36081 = cljs.core.count.call(null,c__28210__auto___36078);
var G__36082 = (0);
seq__36045_36067 = G__36079;
chunk__36046_36068 = G__36080;
count__36047_36069 = G__36081;
i__36048_36070 = G__36082;
continue;
} else {
var f_36083 = cljs.core.first.call(null,seq__36045_36077__$1);
cljs.core.println.call(null,"  ",f_36083);

var G__36084 = cljs.core.next.call(null,seq__36045_36077__$1);
var G__36085 = null;
var G__36086 = (0);
var G__36087 = (0);
seq__36045_36067 = G__36084;
chunk__36046_36068 = G__36085;
count__36047_36069 = G__36086;
i__36048_36070 = G__36087;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36088 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27399__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27399__auto__)){
return or__27399__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36088);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36088)))?cljs.core.second.call(null,arglists_36088):arglists_36088));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36049_36089 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36050_36090 = null;
var count__36051_36091 = (0);
var i__36052_36092 = (0);
while(true){
if((i__36052_36092 < count__36051_36091)){
var vec__36053_36093 = cljs.core._nth.call(null,chunk__36050_36090,i__36052_36092);
var name_36094 = cljs.core.nth.call(null,vec__36053_36093,(0),null);
var map__36056_36095 = cljs.core.nth.call(null,vec__36053_36093,(1),null);
var map__36056_36096__$1 = ((((!((map__36056_36095 == null)))?((((map__36056_36095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36056_36095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36056_36095):map__36056_36095);
var doc_36097 = cljs.core.get.call(null,map__36056_36096__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36098 = cljs.core.get.call(null,map__36056_36096__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36094);

cljs.core.println.call(null," ",arglists_36098);

if(cljs.core.truth_(doc_36097)){
cljs.core.println.call(null," ",doc_36097);
} else {
}

var G__36099 = seq__36049_36089;
var G__36100 = chunk__36050_36090;
var G__36101 = count__36051_36091;
var G__36102 = (i__36052_36092 + (1));
seq__36049_36089 = G__36099;
chunk__36050_36090 = G__36100;
count__36051_36091 = G__36101;
i__36052_36092 = G__36102;
continue;
} else {
var temp__4657__auto___36103 = cljs.core.seq.call(null,seq__36049_36089);
if(temp__4657__auto___36103){
var seq__36049_36104__$1 = temp__4657__auto___36103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36049_36104__$1)){
var c__28210__auto___36105 = cljs.core.chunk_first.call(null,seq__36049_36104__$1);
var G__36106 = cljs.core.chunk_rest.call(null,seq__36049_36104__$1);
var G__36107 = c__28210__auto___36105;
var G__36108 = cljs.core.count.call(null,c__28210__auto___36105);
var G__36109 = (0);
seq__36049_36089 = G__36106;
chunk__36050_36090 = G__36107;
count__36051_36091 = G__36108;
i__36052_36092 = G__36109;
continue;
} else {
var vec__36058_36110 = cljs.core.first.call(null,seq__36049_36104__$1);
var name_36111 = cljs.core.nth.call(null,vec__36058_36110,(0),null);
var map__36061_36112 = cljs.core.nth.call(null,vec__36058_36110,(1),null);
var map__36061_36113__$1 = ((((!((map__36061_36112 == null)))?((((map__36061_36112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36061_36112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36061_36112):map__36061_36112);
var doc_36114 = cljs.core.get.call(null,map__36061_36113__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36115 = cljs.core.get.call(null,map__36061_36113__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36111);

cljs.core.println.call(null," ",arglists_36115);

if(cljs.core.truth_(doc_36114)){
cljs.core.println.call(null," ",doc_36114);
} else {
}

var G__36116 = cljs.core.next.call(null,seq__36049_36104__$1);
var G__36117 = null;
var G__36118 = (0);
var G__36119 = (0);
seq__36049_36089 = G__36116;
chunk__36050_36090 = G__36117;
count__36051_36091 = G__36118;
i__36052_36092 = G__36119;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36063 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36064 = null;
var count__36065 = (0);
var i__36066 = (0);
while(true){
if((i__36066 < count__36065)){
var role = cljs.core._nth.call(null,chunk__36064,i__36066);
var temp__4657__auto___36120__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36120__$1)){
var spec_36121 = temp__4657__auto___36120__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36121));
} else {
}

var G__36122 = seq__36063;
var G__36123 = chunk__36064;
var G__36124 = count__36065;
var G__36125 = (i__36066 + (1));
seq__36063 = G__36122;
chunk__36064 = G__36123;
count__36065 = G__36124;
i__36066 = G__36125;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36063);
if(temp__4657__auto____$1){
var seq__36063__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36063__$1)){
var c__28210__auto__ = cljs.core.chunk_first.call(null,seq__36063__$1);
var G__36126 = cljs.core.chunk_rest.call(null,seq__36063__$1);
var G__36127 = c__28210__auto__;
var G__36128 = cljs.core.count.call(null,c__28210__auto__);
var G__36129 = (0);
seq__36063 = G__36126;
chunk__36064 = G__36127;
count__36065 = G__36128;
i__36066 = G__36129;
continue;
} else {
var role = cljs.core.first.call(null,seq__36063__$1);
var temp__4657__auto___36130__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36130__$2)){
var spec_36131 = temp__4657__auto___36130__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36131));
} else {
}

var G__36132 = cljs.core.next.call(null,seq__36063__$1);
var G__36133 = null;
var G__36134 = (0);
var G__36135 = (0);
seq__36063 = G__36132;
chunk__36064 = G__36133;
count__36065 = G__36134;
i__36066 = G__36135;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1479712005505