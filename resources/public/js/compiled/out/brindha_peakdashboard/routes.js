// Compiled by ClojureScript 1.9.229 {}
goog.provide('brindha_peakdashboard.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
brindha_peakdashboard.routes.hook_browser_navigation_BANG_ = (function brindha_peakdashboard$routes$hook_browser_navigation_BANG_(){
var G__29777 = (new goog.History());
goog.events.listen(G__29777,goog.history.EventType.NAVIGATE,((function (G__29777){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__29777))
);

G__29777.setEnabled(true);

return G__29777;
});
brindha_peakdashboard.routes.app_routes = (function brindha_peakdashboard$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__29323__auto___29798 = (function (params__29324__auto__){
if(cljs.core.map_QMARK_.call(null,params__29324__auto__)){
var map__29788 = params__29324__auto__;
var map__29788__$1 = ((((!((map__29788 == null)))?((((map__29788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29788):map__29788);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29324__auto__)){
var vec__29790 = params__29324__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__29323__auto___29798);


var action__29323__auto___29799 = (function (params__29324__auto__){
if(cljs.core.map_QMARK_.call(null,params__29324__auto__)){
var map__29793 = params__29324__auto__;
var map__29793__$1 = ((((!((map__29793 == null)))?((((map__29793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29793):map__29793);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29324__auto__)){
var vec__29795 = params__29324__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__29323__auto___29799);


return brindha_peakdashboard.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1479711999571