// Compiled by ClojureScript 1.9.229 {}
goog.provide('brindha_peakdashboard.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('brindha_peakdashboard.routes');
goog.require('brindha_peakdashboard.views');
goog.require('brindha_peakdashboard.config');
goog.require('brindha_peakdashboard.events');
goog.require('brindha_peakdashboard.subs');
goog.require('re_frame.core');
brindha_peakdashboard.core.dev_setup = (function brindha_peakdashboard$core$dev_setup(){
if(cljs.core.truth_(brindha_peakdashboard.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
brindha_peakdashboard.core.mount_root = (function brindha_peakdashboard$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [brindha_peakdashboard.views.main_panel], null),document.getElementById("app"));
});
brindha_peakdashboard.core.init = (function brindha_peakdashboard$core$init(){
brindha_peakdashboard.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

brindha_peakdashboard.core.dev_setup.call(null);

return brindha_peakdashboard.core.mount_root.call(null);
});
goog.exportSymbol('brindha_peakdashboard.core.init', brindha_peakdashboard.core.init);

//# sourceMappingURL=core.js.map?rel=1479711999742