// Compiled by ClojureScript 1.9.229 {}
goog.provide('brindha_peakdashboard.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('brindha_peakdashboard.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return brindha_peakdashboard.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__29806){
var vec__29807 = p__29806;
var _ = cljs.core.nth.call(null,vec__29807,(0),null);
var active_panel = cljs.core.nth.call(null,vec__29807,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));

//# sourceMappingURL=events.js.map?rel=1479711999617