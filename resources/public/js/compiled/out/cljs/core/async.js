// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30855 = [];
var len__28474__auto___30861 = arguments.length;
var i__28475__auto___30862 = (0);
while(true){
if((i__28475__auto___30862 < len__28474__auto___30861)){
args30855.push((arguments[i__28475__auto___30862]));

var G__30863 = (i__28475__auto___30862 + (1));
i__28475__auto___30862 = G__30863;
continue;
} else {
}
break;
}

var G__30857 = args30855.length;
switch (G__30857) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30855.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30858 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30858 = (function (f,blockable,meta30859){
this.f = f;
this.blockable = blockable;
this.meta30859 = meta30859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30860,meta30859__$1){
var self__ = this;
var _30860__$1 = this;
return (new cljs.core.async.t_cljs$core$async30858(self__.f,self__.blockable,meta30859__$1));
});

cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30860){
var self__ = this;
var _30860__$1 = this;
return self__.meta30859;
});

cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30858.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30859","meta30859",-1940151226,null)], null);
});

cljs.core.async.t_cljs$core$async30858.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30858";

cljs.core.async.t_cljs$core$async30858.cljs$lang$ctorPrWriter = (function (this__28005__auto__,writer__28006__auto__,opt__28007__auto__){
return cljs.core._write.call(null,writer__28006__auto__,"cljs.core.async/t_cljs$core$async30858");
});

cljs.core.async.__GT_t_cljs$core$async30858 = (function cljs$core$async$__GT_t_cljs$core$async30858(f__$1,blockable__$1,meta30859){
return (new cljs.core.async.t_cljs$core$async30858(f__$1,blockable__$1,meta30859));
});

}

return (new cljs.core.async.t_cljs$core$async30858(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args30867 = [];
var len__28474__auto___30870 = arguments.length;
var i__28475__auto___30871 = (0);
while(true){
if((i__28475__auto___30871 < len__28474__auto___30870)){
args30867.push((arguments[i__28475__auto___30871]));

var G__30872 = (i__28475__auto___30871 + (1));
i__28475__auto___30871 = G__30872;
continue;
} else {
}
break;
}

var G__30869 = args30867.length;
switch (G__30869) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30867.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args30874 = [];
var len__28474__auto___30877 = arguments.length;
var i__28475__auto___30878 = (0);
while(true){
if((i__28475__auto___30878 < len__28474__auto___30877)){
args30874.push((arguments[i__28475__auto___30878]));

var G__30879 = (i__28475__auto___30878 + (1));
i__28475__auto___30878 = G__30879;
continue;
} else {
}
break;
}

var G__30876 = args30874.length;
switch (G__30876) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30874.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args30881 = [];
var len__28474__auto___30884 = arguments.length;
var i__28475__auto___30885 = (0);
while(true){
if((i__28475__auto___30885 < len__28474__auto___30884)){
args30881.push((arguments[i__28475__auto___30885]));

var G__30886 = (i__28475__auto___30885 + (1));
i__28475__auto___30885 = G__30886;
continue;
} else {
}
break;
}

var G__30883 = args30881.length;
switch (G__30883) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30881.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30888 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30888);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30888,ret){
return (function (){
return fn1.call(null,val_30888);
});})(val_30888,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30889 = [];
var len__28474__auto___30892 = arguments.length;
var i__28475__auto___30893 = (0);
while(true){
if((i__28475__auto___30893 < len__28474__auto___30892)){
args30889.push((arguments[i__28475__auto___30893]));

var G__30894 = (i__28475__auto___30893 + (1));
i__28475__auto___30893 = G__30894;
continue;
} else {
}
break;
}

var G__30891 = args30889.length;
switch (G__30891) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30889.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28314__auto___30896 = n;
var x_30897 = (0);
while(true){
if((x_30897 < n__28314__auto___30896)){
(a[x_30897] = (0));

var G__30898 = (x_30897 + (1));
x_30897 = G__30898;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30899 = (i + (1));
i = G__30899;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30903 = (function (alt_flag,flag,meta30904){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30904 = meta30904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30905,meta30904__$1){
var self__ = this;
var _30905__$1 = this;
return (new cljs.core.async.t_cljs$core$async30903(self__.alt_flag,self__.flag,meta30904__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30905){
var self__ = this;
var _30905__$1 = this;
return self__.meta30904;
});})(flag))
;

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30903.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30904","meta30904",-406672184,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30903";

cljs.core.async.t_cljs$core$async30903.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28005__auto__,writer__28006__auto__,opt__28007__auto__){
return cljs.core._write.call(null,writer__28006__auto__,"cljs.core.async/t_cljs$core$async30903");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30903 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30903(alt_flag__$1,flag__$1,meta30904){
return (new cljs.core.async.t_cljs$core$async30903(alt_flag__$1,flag__$1,meta30904));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30903(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30909 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30909 = (function (alt_handler,flag,cb,meta30910){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30910 = meta30910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30911,meta30910__$1){
var self__ = this;
var _30911__$1 = this;
return (new cljs.core.async.t_cljs$core$async30909(self__.alt_handler,self__.flag,self__.cb,meta30910__$1));
});

cljs.core.async.t_cljs$core$async30909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30911){
var self__ = this;
var _30911__$1 = this;
return self__.meta30910;
});

cljs.core.async.t_cljs$core$async30909.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30909.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30909.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30909.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30910","meta30910",-854994746,null)], null);
});

cljs.core.async.t_cljs$core$async30909.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30909";

cljs.core.async.t_cljs$core$async30909.cljs$lang$ctorPrWriter = (function (this__28005__auto__,writer__28006__auto__,opt__28007__auto__){
return cljs.core._write.call(null,writer__28006__auto__,"cljs.core.async/t_cljs$core$async30909");
});

cljs.core.async.__GT_t_cljs$core$async30909 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30909(alt_handler__$1,flag__$1,cb__$1,meta30910){
return (new cljs.core.async.t_cljs$core$async30909(alt_handler__$1,flag__$1,cb__$1,meta30910));
});

}

return (new cljs.core.async.t_cljs$core$async30909(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30912_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30912_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30913_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30913_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27399__auto__ = wport;
if(cljs.core.truth_(or__27399__auto__)){
return or__27399__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30914 = (i + (1));
i = G__30914;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27399__auto__ = ret;
if(cljs.core.truth_(or__27399__auto__)){
return or__27399__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27387__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27387__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27387__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28481__auto__ = [];
var len__28474__auto___30920 = arguments.length;
var i__28475__auto___30921 = (0);
while(true){
if((i__28475__auto___30921 < len__28474__auto___30920)){
args__28481__auto__.push((arguments[i__28475__auto___30921]));

var G__30922 = (i__28475__auto___30921 + (1));
i__28475__auto___30921 = G__30922;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((1) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28482__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30917){
var map__30918 = p__30917;
var map__30918__$1 = ((((!((map__30918 == null)))?((((map__30918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30918):map__30918);
var opts = map__30918__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30915){
var G__30916 = cljs.core.first.call(null,seq30915);
var seq30915__$1 = cljs.core.next.call(null,seq30915);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30916,seq30915__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30923 = [];
var len__28474__auto___30973 = arguments.length;
var i__28475__auto___30974 = (0);
while(true){
if((i__28475__auto___30974 < len__28474__auto___30973)){
args30923.push((arguments[i__28475__auto___30974]));

var G__30975 = (i__28475__auto___30974 + (1));
i__28475__auto___30974 = G__30975;
continue;
} else {
}
break;
}

var G__30925 = args30923.length;
switch (G__30925) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30923.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30810__auto___30977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto___30977){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto___30977){
return (function (state_30949){
var state_val_30950 = (state_30949[(1)]);
if((state_val_30950 === (7))){
var inst_30945 = (state_30949[(2)]);
var state_30949__$1 = state_30949;
var statearr_30951_30978 = state_30949__$1;
(statearr_30951_30978[(2)] = inst_30945);

(statearr_30951_30978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (1))){
var state_30949__$1 = state_30949;
var statearr_30952_30979 = state_30949__$1;
(statearr_30952_30979[(2)] = null);

(statearr_30952_30979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (4))){
var inst_30928 = (state_30949[(7)]);
var inst_30928__$1 = (state_30949[(2)]);
var inst_30929 = (inst_30928__$1 == null);
var state_30949__$1 = (function (){var statearr_30953 = state_30949;
(statearr_30953[(7)] = inst_30928__$1);

return statearr_30953;
})();
if(cljs.core.truth_(inst_30929)){
var statearr_30954_30980 = state_30949__$1;
(statearr_30954_30980[(1)] = (5));

} else {
var statearr_30955_30981 = state_30949__$1;
(statearr_30955_30981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (13))){
var state_30949__$1 = state_30949;
var statearr_30956_30982 = state_30949__$1;
(statearr_30956_30982[(2)] = null);

(statearr_30956_30982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (6))){
var inst_30928 = (state_30949[(7)]);
var state_30949__$1 = state_30949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30949__$1,(11),to,inst_30928);
} else {
if((state_val_30950 === (3))){
var inst_30947 = (state_30949[(2)]);
var state_30949__$1 = state_30949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30949__$1,inst_30947);
} else {
if((state_val_30950 === (12))){
var state_30949__$1 = state_30949;
var statearr_30957_30983 = state_30949__$1;
(statearr_30957_30983[(2)] = null);

(statearr_30957_30983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (2))){
var state_30949__$1 = state_30949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30949__$1,(4),from);
} else {
if((state_val_30950 === (11))){
var inst_30938 = (state_30949[(2)]);
var state_30949__$1 = state_30949;
if(cljs.core.truth_(inst_30938)){
var statearr_30958_30984 = state_30949__$1;
(statearr_30958_30984[(1)] = (12));

} else {
var statearr_30959_30985 = state_30949__$1;
(statearr_30959_30985[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (9))){
var state_30949__$1 = state_30949;
var statearr_30960_30986 = state_30949__$1;
(statearr_30960_30986[(2)] = null);

(statearr_30960_30986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (5))){
var state_30949__$1 = state_30949;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30961_30987 = state_30949__$1;
(statearr_30961_30987[(1)] = (8));

} else {
var statearr_30962_30988 = state_30949__$1;
(statearr_30962_30988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (14))){
var inst_30943 = (state_30949[(2)]);
var state_30949__$1 = state_30949;
var statearr_30963_30989 = state_30949__$1;
(statearr_30963_30989[(2)] = inst_30943);

(statearr_30963_30989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (10))){
var inst_30935 = (state_30949[(2)]);
var state_30949__$1 = state_30949;
var statearr_30964_30990 = state_30949__$1;
(statearr_30964_30990[(2)] = inst_30935);

(statearr_30964_30990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (8))){
var inst_30932 = cljs.core.async.close_BANG_.call(null,to);
var state_30949__$1 = state_30949;
var statearr_30965_30991 = state_30949__$1;
(statearr_30965_30991[(2)] = inst_30932);

(statearr_30965_30991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto___30977))
;
return ((function (switch__30698__auto__,c__30810__auto___30977){
return (function() {
var cljs$core$async$state_machine__30699__auto__ = null;
var cljs$core$async$state_machine__30699__auto____0 = (function (){
var statearr_30969 = [null,null,null,null,null,null,null,null];
(statearr_30969[(0)] = cljs$core$async$state_machine__30699__auto__);

(statearr_30969[(1)] = (1));

return statearr_30969;
});
var cljs$core$async$state_machine__30699__auto____1 = (function (state_30949){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_30949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e30970){if((e30970 instanceof Object)){
var ex__30702__auto__ = e30970;
var statearr_30971_30992 = state_30949;
(statearr_30971_30992[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30993 = state_30949;
state_30949 = G__30993;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$state_machine__30699__auto__ = function(state_30949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30699__auto____1.call(this,state_30949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30699__auto____0;
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30699__auto____1;
return cljs$core$async$state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto___30977))
})();
var state__30812__auto__ = (function (){var statearr_30972 = f__30811__auto__.call(null);
(statearr_30972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___30977);

return statearr_30972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto___30977))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31181){
var vec__31182 = p__31181;
var v = cljs.core.nth.call(null,vec__31182,(0),null);
var p = cljs.core.nth.call(null,vec__31182,(1),null);
var job = vec__31182;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30810__auto___31368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto___31368,res,vec__31182,v,p,job,jobs,results){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto___31368,res,vec__31182,v,p,job,jobs,results){
return (function (state_31189){
var state_val_31190 = (state_31189[(1)]);
if((state_val_31190 === (1))){
var state_31189__$1 = state_31189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31189__$1,(2),res,v);
} else {
if((state_val_31190 === (2))){
var inst_31186 = (state_31189[(2)]);
var inst_31187 = cljs.core.async.close_BANG_.call(null,res);
var state_31189__$1 = (function (){var statearr_31191 = state_31189;
(statearr_31191[(7)] = inst_31186);

return statearr_31191;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31189__$1,inst_31187);
} else {
return null;
}
}
});})(c__30810__auto___31368,res,vec__31182,v,p,job,jobs,results))
;
return ((function (switch__30698__auto__,c__30810__auto___31368,res,vec__31182,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0 = (function (){
var statearr_31195 = [null,null,null,null,null,null,null,null];
(statearr_31195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__);

(statearr_31195[(1)] = (1));

return statearr_31195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1 = (function (state_31189){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_31189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e31196){if((e31196 instanceof Object)){
var ex__30702__auto__ = e31196;
var statearr_31197_31369 = state_31189;
(statearr_31197_31369[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31370 = state_31189;
state_31189 = G__31370;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__ = function(state_31189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1.call(this,state_31189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto___31368,res,vec__31182,v,p,job,jobs,results))
})();
var state__30812__auto__ = (function (){var statearr_31198 = f__30811__auto__.call(null);
(statearr_31198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___31368);

return statearr_31198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto___31368,res,vec__31182,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31199){
var vec__31200 = p__31199;
var v = cljs.core.nth.call(null,vec__31200,(0),null);
var p = cljs.core.nth.call(null,vec__31200,(1),null);
var job = vec__31200;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28314__auto___31371 = n;
var __31372 = (0);
while(true){
if((__31372 < n__28314__auto___31371)){
var G__31203_31373 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31203_31373) {
case "compute":
var c__30810__auto___31375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31372,c__30810__auto___31375,G__31203_31373,n__28314__auto___31371,jobs,results,process,async){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (__31372,c__30810__auto___31375,G__31203_31373,n__28314__auto___31371,jobs,results,process,async){
return (function (state_31216){
var state_val_31217 = (state_31216[(1)]);
if((state_val_31217 === (1))){
var state_31216__$1 = state_31216;
var statearr_31218_31376 = state_31216__$1;
(statearr_31218_31376[(2)] = null);

(statearr_31218_31376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (2))){
var state_31216__$1 = state_31216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31216__$1,(4),jobs);
} else {
if((state_val_31217 === (3))){
var inst_31214 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31216__$1,inst_31214);
} else {
if((state_val_31217 === (4))){
var inst_31206 = (state_31216[(2)]);
var inst_31207 = process.call(null,inst_31206);
var state_31216__$1 = state_31216;
if(cljs.core.truth_(inst_31207)){
var statearr_31219_31377 = state_31216__$1;
(statearr_31219_31377[(1)] = (5));

} else {
var statearr_31220_31378 = state_31216__$1;
(statearr_31220_31378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (5))){
var state_31216__$1 = state_31216;
var statearr_31221_31379 = state_31216__$1;
(statearr_31221_31379[(2)] = null);

(statearr_31221_31379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (6))){
var state_31216__$1 = state_31216;
var statearr_31222_31380 = state_31216__$1;
(statearr_31222_31380[(2)] = null);

(statearr_31222_31380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (7))){
var inst_31212 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
var statearr_31223_31381 = state_31216__$1;
(statearr_31223_31381[(2)] = inst_31212);

(statearr_31223_31381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31372,c__30810__auto___31375,G__31203_31373,n__28314__auto___31371,jobs,results,process,async))
;
return ((function (__31372,switch__30698__auto__,c__30810__auto___31375,G__31203_31373,n__28314__auto___31371,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0 = (function (){
var statearr_31227 = [null,null,null,null,null,null,null];
(statearr_31227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__);

(statearr_31227[(1)] = (1));

return statearr_31227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1 = (function (state_31216){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_31216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e31228){if((e31228 instanceof Object)){
var ex__30702__auto__ = e31228;
var statearr_31229_31382 = state_31216;
(statearr_31229_31382[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31383 = state_31216;
state_31216 = G__31383;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__ = function(state_31216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1.call(this,state_31216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__;
})()
;})(__31372,switch__30698__auto__,c__30810__auto___31375,G__31203_31373,n__28314__auto___31371,jobs,results,process,async))
})();
var state__30812__auto__ = (function (){var statearr_31230 = f__30811__auto__.call(null);
(statearr_31230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___31375);

return statearr_31230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(__31372,c__30810__auto___31375,G__31203_31373,n__28314__auto___31371,jobs,results,process,async))
);


break;
case "async":
var c__30810__auto___31384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31372,c__30810__auto___31384,G__31203_31373,n__28314__auto___31371,jobs,results,process,async){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (__31372,c__30810__auto___31384,G__31203_31373,n__28314__auto___31371,jobs,results,process,async){
return (function (state_31243){
var state_val_31244 = (state_31243[(1)]);
if((state_val_31244 === (1))){
var state_31243__$1 = state_31243;
var statearr_31245_31385 = state_31243__$1;
(statearr_31245_31385[(2)] = null);

(statearr_31245_31385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (2))){
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31243__$1,(4),jobs);
} else {
if((state_val_31244 === (3))){
var inst_31241 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31243__$1,inst_31241);
} else {
if((state_val_31244 === (4))){
var inst_31233 = (state_31243[(2)]);
var inst_31234 = async.call(null,inst_31233);
var state_31243__$1 = state_31243;
if(cljs.core.truth_(inst_31234)){
var statearr_31246_31386 = state_31243__$1;
(statearr_31246_31386[(1)] = (5));

} else {
var statearr_31247_31387 = state_31243__$1;
(statearr_31247_31387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (5))){
var state_31243__$1 = state_31243;
var statearr_31248_31388 = state_31243__$1;
(statearr_31248_31388[(2)] = null);

(statearr_31248_31388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (6))){
var state_31243__$1 = state_31243;
var statearr_31249_31389 = state_31243__$1;
(statearr_31249_31389[(2)] = null);

(statearr_31249_31389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (7))){
var inst_31239 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31250_31390 = state_31243__$1;
(statearr_31250_31390[(2)] = inst_31239);

(statearr_31250_31390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31372,c__30810__auto___31384,G__31203_31373,n__28314__auto___31371,jobs,results,process,async))
;
return ((function (__31372,switch__30698__auto__,c__30810__auto___31384,G__31203_31373,n__28314__auto___31371,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0 = (function (){
var statearr_31254 = [null,null,null,null,null,null,null];
(statearr_31254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__);

(statearr_31254[(1)] = (1));

return statearr_31254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1 = (function (state_31243){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_31243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e31255){if((e31255 instanceof Object)){
var ex__30702__auto__ = e31255;
var statearr_31256_31391 = state_31243;
(statearr_31256_31391[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31392 = state_31243;
state_31243 = G__31392;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__ = function(state_31243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1.call(this,state_31243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__;
})()
;})(__31372,switch__30698__auto__,c__30810__auto___31384,G__31203_31373,n__28314__auto___31371,jobs,results,process,async))
})();
var state__30812__auto__ = (function (){var statearr_31257 = f__30811__auto__.call(null);
(statearr_31257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___31384);

return statearr_31257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(__31372,c__30810__auto___31384,G__31203_31373,n__28314__auto___31371,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31393 = (__31372 + (1));
__31372 = G__31393;
continue;
} else {
}
break;
}

var c__30810__auto___31394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto___31394,jobs,results,process,async){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto___31394,jobs,results,process,async){
return (function (state_31279){
var state_val_31280 = (state_31279[(1)]);
if((state_val_31280 === (1))){
var state_31279__$1 = state_31279;
var statearr_31281_31395 = state_31279__$1;
(statearr_31281_31395[(2)] = null);

(statearr_31281_31395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (2))){
var state_31279__$1 = state_31279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31279__$1,(4),from);
} else {
if((state_val_31280 === (3))){
var inst_31277 = (state_31279[(2)]);
var state_31279__$1 = state_31279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31279__$1,inst_31277);
} else {
if((state_val_31280 === (4))){
var inst_31260 = (state_31279[(7)]);
var inst_31260__$1 = (state_31279[(2)]);
var inst_31261 = (inst_31260__$1 == null);
var state_31279__$1 = (function (){var statearr_31282 = state_31279;
(statearr_31282[(7)] = inst_31260__$1);

return statearr_31282;
})();
if(cljs.core.truth_(inst_31261)){
var statearr_31283_31396 = state_31279__$1;
(statearr_31283_31396[(1)] = (5));

} else {
var statearr_31284_31397 = state_31279__$1;
(statearr_31284_31397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (5))){
var inst_31263 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31279__$1 = state_31279;
var statearr_31285_31398 = state_31279__$1;
(statearr_31285_31398[(2)] = inst_31263);

(statearr_31285_31398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (6))){
var inst_31265 = (state_31279[(8)]);
var inst_31260 = (state_31279[(7)]);
var inst_31265__$1 = cljs.core.async.chan.call(null,(1));
var inst_31266 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31267 = [inst_31260,inst_31265__$1];
var inst_31268 = (new cljs.core.PersistentVector(null,2,(5),inst_31266,inst_31267,null));
var state_31279__$1 = (function (){var statearr_31286 = state_31279;
(statearr_31286[(8)] = inst_31265__$1);

return statearr_31286;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31279__$1,(8),jobs,inst_31268);
} else {
if((state_val_31280 === (7))){
var inst_31275 = (state_31279[(2)]);
var state_31279__$1 = state_31279;
var statearr_31287_31399 = state_31279__$1;
(statearr_31287_31399[(2)] = inst_31275);

(statearr_31287_31399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31280 === (8))){
var inst_31265 = (state_31279[(8)]);
var inst_31270 = (state_31279[(2)]);
var state_31279__$1 = (function (){var statearr_31288 = state_31279;
(statearr_31288[(9)] = inst_31270);

return statearr_31288;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31279__$1,(9),results,inst_31265);
} else {
if((state_val_31280 === (9))){
var inst_31272 = (state_31279[(2)]);
var state_31279__$1 = (function (){var statearr_31289 = state_31279;
(statearr_31289[(10)] = inst_31272);

return statearr_31289;
})();
var statearr_31290_31400 = state_31279__$1;
(statearr_31290_31400[(2)] = null);

(statearr_31290_31400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30810__auto___31394,jobs,results,process,async))
;
return ((function (switch__30698__auto__,c__30810__auto___31394,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0 = (function (){
var statearr_31294 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__);

(statearr_31294[(1)] = (1));

return statearr_31294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1 = (function (state_31279){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_31279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e31295){if((e31295 instanceof Object)){
var ex__30702__auto__ = e31295;
var statearr_31296_31401 = state_31279;
(statearr_31296_31401[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31402 = state_31279;
state_31279 = G__31402;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__ = function(state_31279){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1.call(this,state_31279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto___31394,jobs,results,process,async))
})();
var state__30812__auto__ = (function (){var statearr_31297 = f__30811__auto__.call(null);
(statearr_31297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___31394);

return statearr_31297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto___31394,jobs,results,process,async))
);


var c__30810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto__,jobs,results,process,async){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto__,jobs,results,process,async){
return (function (state_31335){
var state_val_31336 = (state_31335[(1)]);
if((state_val_31336 === (7))){
var inst_31331 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31337_31403 = state_31335__$1;
(statearr_31337_31403[(2)] = inst_31331);

(statearr_31337_31403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (20))){
var state_31335__$1 = state_31335;
var statearr_31338_31404 = state_31335__$1;
(statearr_31338_31404[(2)] = null);

(statearr_31338_31404[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (1))){
var state_31335__$1 = state_31335;
var statearr_31339_31405 = state_31335__$1;
(statearr_31339_31405[(2)] = null);

(statearr_31339_31405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (4))){
var inst_31300 = (state_31335[(7)]);
var inst_31300__$1 = (state_31335[(2)]);
var inst_31301 = (inst_31300__$1 == null);
var state_31335__$1 = (function (){var statearr_31340 = state_31335;
(statearr_31340[(7)] = inst_31300__$1);

return statearr_31340;
})();
if(cljs.core.truth_(inst_31301)){
var statearr_31341_31406 = state_31335__$1;
(statearr_31341_31406[(1)] = (5));

} else {
var statearr_31342_31407 = state_31335__$1;
(statearr_31342_31407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (15))){
var inst_31313 = (state_31335[(8)]);
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31335__$1,(18),to,inst_31313);
} else {
if((state_val_31336 === (21))){
var inst_31326 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31343_31408 = state_31335__$1;
(statearr_31343_31408[(2)] = inst_31326);

(statearr_31343_31408[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (13))){
var inst_31328 = (state_31335[(2)]);
var state_31335__$1 = (function (){var statearr_31344 = state_31335;
(statearr_31344[(9)] = inst_31328);

return statearr_31344;
})();
var statearr_31345_31409 = state_31335__$1;
(statearr_31345_31409[(2)] = null);

(statearr_31345_31409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (6))){
var inst_31300 = (state_31335[(7)]);
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31335__$1,(11),inst_31300);
} else {
if((state_val_31336 === (17))){
var inst_31321 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
if(cljs.core.truth_(inst_31321)){
var statearr_31346_31410 = state_31335__$1;
(statearr_31346_31410[(1)] = (19));

} else {
var statearr_31347_31411 = state_31335__$1;
(statearr_31347_31411[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (3))){
var inst_31333 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31335__$1,inst_31333);
} else {
if((state_val_31336 === (12))){
var inst_31310 = (state_31335[(10)]);
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31335__$1,(14),inst_31310);
} else {
if((state_val_31336 === (2))){
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31335__$1,(4),results);
} else {
if((state_val_31336 === (19))){
var state_31335__$1 = state_31335;
var statearr_31348_31412 = state_31335__$1;
(statearr_31348_31412[(2)] = null);

(statearr_31348_31412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (11))){
var inst_31310 = (state_31335[(2)]);
var state_31335__$1 = (function (){var statearr_31349 = state_31335;
(statearr_31349[(10)] = inst_31310);

return statearr_31349;
})();
var statearr_31350_31413 = state_31335__$1;
(statearr_31350_31413[(2)] = null);

(statearr_31350_31413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (9))){
var state_31335__$1 = state_31335;
var statearr_31351_31414 = state_31335__$1;
(statearr_31351_31414[(2)] = null);

(statearr_31351_31414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (5))){
var state_31335__$1 = state_31335;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31352_31415 = state_31335__$1;
(statearr_31352_31415[(1)] = (8));

} else {
var statearr_31353_31416 = state_31335__$1;
(statearr_31353_31416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (14))){
var inst_31315 = (state_31335[(11)]);
var inst_31313 = (state_31335[(8)]);
var inst_31313__$1 = (state_31335[(2)]);
var inst_31314 = (inst_31313__$1 == null);
var inst_31315__$1 = cljs.core.not.call(null,inst_31314);
var state_31335__$1 = (function (){var statearr_31354 = state_31335;
(statearr_31354[(11)] = inst_31315__$1);

(statearr_31354[(8)] = inst_31313__$1);

return statearr_31354;
})();
if(inst_31315__$1){
var statearr_31355_31417 = state_31335__$1;
(statearr_31355_31417[(1)] = (15));

} else {
var statearr_31356_31418 = state_31335__$1;
(statearr_31356_31418[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (16))){
var inst_31315 = (state_31335[(11)]);
var state_31335__$1 = state_31335;
var statearr_31357_31419 = state_31335__$1;
(statearr_31357_31419[(2)] = inst_31315);

(statearr_31357_31419[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (10))){
var inst_31307 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31358_31420 = state_31335__$1;
(statearr_31358_31420[(2)] = inst_31307);

(statearr_31358_31420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (18))){
var inst_31318 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31359_31421 = state_31335__$1;
(statearr_31359_31421[(2)] = inst_31318);

(statearr_31359_31421[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (8))){
var inst_31304 = cljs.core.async.close_BANG_.call(null,to);
var state_31335__$1 = state_31335;
var statearr_31360_31422 = state_31335__$1;
(statearr_31360_31422[(2)] = inst_31304);

(statearr_31360_31422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto__,jobs,results,process,async))
;
return ((function (switch__30698__auto__,c__30810__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0 = (function (){
var statearr_31364 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31364[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__);

(statearr_31364[(1)] = (1));

return statearr_31364;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1 = (function (state_31335){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_31335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e31365){if((e31365 instanceof Object)){
var ex__30702__auto__ = e31365;
var statearr_31366_31423 = state_31335;
(statearr_31366_31423[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31424 = state_31335;
state_31335 = G__31424;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__ = function(state_31335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1.call(this,state_31335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30699__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto__,jobs,results,process,async))
})();
var state__30812__auto__ = (function (){var statearr_31367 = f__30811__auto__.call(null);
(statearr_31367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto__);

return statearr_31367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto__,jobs,results,process,async))
);

return c__30810__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args31425 = [];
var len__28474__auto___31428 = arguments.length;
var i__28475__auto___31429 = (0);
while(true){
if((i__28475__auto___31429 < len__28474__auto___31428)){
args31425.push((arguments[i__28475__auto___31429]));

var G__31430 = (i__28475__auto___31429 + (1));
i__28475__auto___31429 = G__31430;
continue;
} else {
}
break;
}

var G__31427 = args31425.length;
switch (G__31427) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31425.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args31432 = [];
var len__28474__auto___31435 = arguments.length;
var i__28475__auto___31436 = (0);
while(true){
if((i__28475__auto___31436 < len__28474__auto___31435)){
args31432.push((arguments[i__28475__auto___31436]));

var G__31437 = (i__28475__auto___31436 + (1));
i__28475__auto___31436 = G__31437;
continue;
} else {
}
break;
}

var G__31434 = args31432.length;
switch (G__31434) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31432.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args31439 = [];
var len__28474__auto___31492 = arguments.length;
var i__28475__auto___31493 = (0);
while(true){
if((i__28475__auto___31493 < len__28474__auto___31492)){
args31439.push((arguments[i__28475__auto___31493]));

var G__31494 = (i__28475__auto___31493 + (1));
i__28475__auto___31493 = G__31494;
continue;
} else {
}
break;
}

var G__31441 = args31439.length;
switch (G__31441) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31439.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30810__auto___31496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto___31496,tc,fc){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto___31496,tc,fc){
return (function (state_31467){
var state_val_31468 = (state_31467[(1)]);
if((state_val_31468 === (7))){
var inst_31463 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31469_31497 = state_31467__$1;
(statearr_31469_31497[(2)] = inst_31463);

(statearr_31469_31497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (1))){
var state_31467__$1 = state_31467;
var statearr_31470_31498 = state_31467__$1;
(statearr_31470_31498[(2)] = null);

(statearr_31470_31498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (4))){
var inst_31444 = (state_31467[(7)]);
var inst_31444__$1 = (state_31467[(2)]);
var inst_31445 = (inst_31444__$1 == null);
var state_31467__$1 = (function (){var statearr_31471 = state_31467;
(statearr_31471[(7)] = inst_31444__$1);

return statearr_31471;
})();
if(cljs.core.truth_(inst_31445)){
var statearr_31472_31499 = state_31467__$1;
(statearr_31472_31499[(1)] = (5));

} else {
var statearr_31473_31500 = state_31467__$1;
(statearr_31473_31500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (13))){
var state_31467__$1 = state_31467;
var statearr_31474_31501 = state_31467__$1;
(statearr_31474_31501[(2)] = null);

(statearr_31474_31501[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (6))){
var inst_31444 = (state_31467[(7)]);
var inst_31450 = p.call(null,inst_31444);
var state_31467__$1 = state_31467;
if(cljs.core.truth_(inst_31450)){
var statearr_31475_31502 = state_31467__$1;
(statearr_31475_31502[(1)] = (9));

} else {
var statearr_31476_31503 = state_31467__$1;
(statearr_31476_31503[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (3))){
var inst_31465 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31467__$1,inst_31465);
} else {
if((state_val_31468 === (12))){
var state_31467__$1 = state_31467;
var statearr_31477_31504 = state_31467__$1;
(statearr_31477_31504[(2)] = null);

(statearr_31477_31504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (2))){
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31467__$1,(4),ch);
} else {
if((state_val_31468 === (11))){
var inst_31444 = (state_31467[(7)]);
var inst_31454 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31467__$1,(8),inst_31454,inst_31444);
} else {
if((state_val_31468 === (9))){
var state_31467__$1 = state_31467;
var statearr_31478_31505 = state_31467__$1;
(statearr_31478_31505[(2)] = tc);

(statearr_31478_31505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (5))){
var inst_31447 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31448 = cljs.core.async.close_BANG_.call(null,fc);
var state_31467__$1 = (function (){var statearr_31479 = state_31467;
(statearr_31479[(8)] = inst_31447);

return statearr_31479;
})();
var statearr_31480_31506 = state_31467__$1;
(statearr_31480_31506[(2)] = inst_31448);

(statearr_31480_31506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (14))){
var inst_31461 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31481_31507 = state_31467__$1;
(statearr_31481_31507[(2)] = inst_31461);

(statearr_31481_31507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (10))){
var state_31467__$1 = state_31467;
var statearr_31482_31508 = state_31467__$1;
(statearr_31482_31508[(2)] = fc);

(statearr_31482_31508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (8))){
var inst_31456 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
if(cljs.core.truth_(inst_31456)){
var statearr_31483_31509 = state_31467__$1;
(statearr_31483_31509[(1)] = (12));

} else {
var statearr_31484_31510 = state_31467__$1;
(statearr_31484_31510[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto___31496,tc,fc))
;
return ((function (switch__30698__auto__,c__30810__auto___31496,tc,fc){
return (function() {
var cljs$core$async$state_machine__30699__auto__ = null;
var cljs$core$async$state_machine__30699__auto____0 = (function (){
var statearr_31488 = [null,null,null,null,null,null,null,null,null];
(statearr_31488[(0)] = cljs$core$async$state_machine__30699__auto__);

(statearr_31488[(1)] = (1));

return statearr_31488;
});
var cljs$core$async$state_machine__30699__auto____1 = (function (state_31467){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_31467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e31489){if((e31489 instanceof Object)){
var ex__30702__auto__ = e31489;
var statearr_31490_31511 = state_31467;
(statearr_31490_31511[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31512 = state_31467;
state_31467 = G__31512;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$state_machine__30699__auto__ = function(state_31467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30699__auto____1.call(this,state_31467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30699__auto____0;
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30699__auto____1;
return cljs$core$async$state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto___31496,tc,fc))
})();
var state__30812__auto__ = (function (){var statearr_31491 = f__30811__auto__.call(null);
(statearr_31491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___31496);

return statearr_31491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto___31496,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto__){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto__){
return (function (state_31576){
var state_val_31577 = (state_31576[(1)]);
if((state_val_31577 === (7))){
var inst_31572 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31578_31599 = state_31576__$1;
(statearr_31578_31599[(2)] = inst_31572);

(statearr_31578_31599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (1))){
var inst_31556 = init;
var state_31576__$1 = (function (){var statearr_31579 = state_31576;
(statearr_31579[(7)] = inst_31556);

return statearr_31579;
})();
var statearr_31580_31600 = state_31576__$1;
(statearr_31580_31600[(2)] = null);

(statearr_31580_31600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (4))){
var inst_31559 = (state_31576[(8)]);
var inst_31559__$1 = (state_31576[(2)]);
var inst_31560 = (inst_31559__$1 == null);
var state_31576__$1 = (function (){var statearr_31581 = state_31576;
(statearr_31581[(8)] = inst_31559__$1);

return statearr_31581;
})();
if(cljs.core.truth_(inst_31560)){
var statearr_31582_31601 = state_31576__$1;
(statearr_31582_31601[(1)] = (5));

} else {
var statearr_31583_31602 = state_31576__$1;
(statearr_31583_31602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (6))){
var inst_31563 = (state_31576[(9)]);
var inst_31559 = (state_31576[(8)]);
var inst_31556 = (state_31576[(7)]);
var inst_31563__$1 = f.call(null,inst_31556,inst_31559);
var inst_31564 = cljs.core.reduced_QMARK_.call(null,inst_31563__$1);
var state_31576__$1 = (function (){var statearr_31584 = state_31576;
(statearr_31584[(9)] = inst_31563__$1);

return statearr_31584;
})();
if(inst_31564){
var statearr_31585_31603 = state_31576__$1;
(statearr_31585_31603[(1)] = (8));

} else {
var statearr_31586_31604 = state_31576__$1;
(statearr_31586_31604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (3))){
var inst_31574 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31576__$1,inst_31574);
} else {
if((state_val_31577 === (2))){
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31576__$1,(4),ch);
} else {
if((state_val_31577 === (9))){
var inst_31563 = (state_31576[(9)]);
var inst_31556 = inst_31563;
var state_31576__$1 = (function (){var statearr_31587 = state_31576;
(statearr_31587[(7)] = inst_31556);

return statearr_31587;
})();
var statearr_31588_31605 = state_31576__$1;
(statearr_31588_31605[(2)] = null);

(statearr_31588_31605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (5))){
var inst_31556 = (state_31576[(7)]);
var state_31576__$1 = state_31576;
var statearr_31589_31606 = state_31576__$1;
(statearr_31589_31606[(2)] = inst_31556);

(statearr_31589_31606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (10))){
var inst_31570 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31590_31607 = state_31576__$1;
(statearr_31590_31607[(2)] = inst_31570);

(statearr_31590_31607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (8))){
var inst_31563 = (state_31576[(9)]);
var inst_31566 = cljs.core.deref.call(null,inst_31563);
var state_31576__$1 = state_31576;
var statearr_31591_31608 = state_31576__$1;
(statearr_31591_31608[(2)] = inst_31566);

(statearr_31591_31608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto__))
;
return ((function (switch__30698__auto__,c__30810__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30699__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30699__auto____0 = (function (){
var statearr_31595 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31595[(0)] = cljs$core$async$reduce_$_state_machine__30699__auto__);

(statearr_31595[(1)] = (1));

return statearr_31595;
});
var cljs$core$async$reduce_$_state_machine__30699__auto____1 = (function (state_31576){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_31576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e31596){if((e31596 instanceof Object)){
var ex__30702__auto__ = e31596;
var statearr_31597_31609 = state_31576;
(statearr_31597_31609[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31610 = state_31576;
state_31576 = G__31610;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30699__auto__ = function(state_31576){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30699__auto____1.call(this,state_31576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30699__auto____0;
cljs$core$async$reduce_$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30699__auto____1;
return cljs$core$async$reduce_$_state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto__))
})();
var state__30812__auto__ = (function (){var statearr_31598 = f__30811__auto__.call(null);
(statearr_31598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto__);

return statearr_31598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto__))
);

return c__30810__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args31611 = [];
var len__28474__auto___31663 = arguments.length;
var i__28475__auto___31664 = (0);
while(true){
if((i__28475__auto___31664 < len__28474__auto___31663)){
args31611.push((arguments[i__28475__auto___31664]));

var G__31665 = (i__28475__auto___31664 + (1));
i__28475__auto___31664 = G__31665;
continue;
} else {
}
break;
}

var G__31613 = args31611.length;
switch (G__31613) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31611.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto__){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto__){
return (function (state_31638){
var state_val_31639 = (state_31638[(1)]);
if((state_val_31639 === (7))){
var inst_31620 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31640_31667 = state_31638__$1;
(statearr_31640_31667[(2)] = inst_31620);

(statearr_31640_31667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (1))){
var inst_31614 = cljs.core.seq.call(null,coll);
var inst_31615 = inst_31614;
var state_31638__$1 = (function (){var statearr_31641 = state_31638;
(statearr_31641[(7)] = inst_31615);

return statearr_31641;
})();
var statearr_31642_31668 = state_31638__$1;
(statearr_31642_31668[(2)] = null);

(statearr_31642_31668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (4))){
var inst_31615 = (state_31638[(7)]);
var inst_31618 = cljs.core.first.call(null,inst_31615);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31638__$1,(7),ch,inst_31618);
} else {
if((state_val_31639 === (13))){
var inst_31632 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31643_31669 = state_31638__$1;
(statearr_31643_31669[(2)] = inst_31632);

(statearr_31643_31669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (6))){
var inst_31623 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
if(cljs.core.truth_(inst_31623)){
var statearr_31644_31670 = state_31638__$1;
(statearr_31644_31670[(1)] = (8));

} else {
var statearr_31645_31671 = state_31638__$1;
(statearr_31645_31671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (3))){
var inst_31636 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31638__$1,inst_31636);
} else {
if((state_val_31639 === (12))){
var state_31638__$1 = state_31638;
var statearr_31646_31672 = state_31638__$1;
(statearr_31646_31672[(2)] = null);

(statearr_31646_31672[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (2))){
var inst_31615 = (state_31638[(7)]);
var state_31638__$1 = state_31638;
if(cljs.core.truth_(inst_31615)){
var statearr_31647_31673 = state_31638__$1;
(statearr_31647_31673[(1)] = (4));

} else {
var statearr_31648_31674 = state_31638__$1;
(statearr_31648_31674[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (11))){
var inst_31629 = cljs.core.async.close_BANG_.call(null,ch);
var state_31638__$1 = state_31638;
var statearr_31649_31675 = state_31638__$1;
(statearr_31649_31675[(2)] = inst_31629);

(statearr_31649_31675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (9))){
var state_31638__$1 = state_31638;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31650_31676 = state_31638__$1;
(statearr_31650_31676[(1)] = (11));

} else {
var statearr_31651_31677 = state_31638__$1;
(statearr_31651_31677[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (5))){
var inst_31615 = (state_31638[(7)]);
var state_31638__$1 = state_31638;
var statearr_31652_31678 = state_31638__$1;
(statearr_31652_31678[(2)] = inst_31615);

(statearr_31652_31678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (10))){
var inst_31634 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31653_31679 = state_31638__$1;
(statearr_31653_31679[(2)] = inst_31634);

(statearr_31653_31679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (8))){
var inst_31615 = (state_31638[(7)]);
var inst_31625 = cljs.core.next.call(null,inst_31615);
var inst_31615__$1 = inst_31625;
var state_31638__$1 = (function (){var statearr_31654 = state_31638;
(statearr_31654[(7)] = inst_31615__$1);

return statearr_31654;
})();
var statearr_31655_31680 = state_31638__$1;
(statearr_31655_31680[(2)] = null);

(statearr_31655_31680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto__))
;
return ((function (switch__30698__auto__,c__30810__auto__){
return (function() {
var cljs$core$async$state_machine__30699__auto__ = null;
var cljs$core$async$state_machine__30699__auto____0 = (function (){
var statearr_31659 = [null,null,null,null,null,null,null,null];
(statearr_31659[(0)] = cljs$core$async$state_machine__30699__auto__);

(statearr_31659[(1)] = (1));

return statearr_31659;
});
var cljs$core$async$state_machine__30699__auto____1 = (function (state_31638){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_31638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e31660){if((e31660 instanceof Object)){
var ex__30702__auto__ = e31660;
var statearr_31661_31681 = state_31638;
(statearr_31661_31681[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31682 = state_31638;
state_31638 = G__31682;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$state_machine__30699__auto__ = function(state_31638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30699__auto____1.call(this,state_31638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30699__auto____0;
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30699__auto____1;
return cljs$core$async$state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto__))
})();
var state__30812__auto__ = (function (){var statearr_31662 = f__30811__auto__.call(null);
(statearr_31662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto__);

return statearr_31662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto__))
);

return c__30810__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28062__auto__ = (((_ == null))?null:_);
var m__28063__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28062__auto__)]);
if(!((m__28063__auto__ == null))){
return m__28063__auto__.call(null,_);
} else {
var m__28063__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28063__auto____$1 == null))){
return m__28063__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28062__auto__ = (((m == null))?null:m);
var m__28063__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28062__auto__)]);
if(!((m__28063__auto__ == null))){
return m__28063__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28063__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28063__auto____$1 == null))){
return m__28063__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28062__auto__ = (((m == null))?null:m);
var m__28063__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28062__auto__)]);
if(!((m__28063__auto__ == null))){
return m__28063__auto__.call(null,m,ch);
} else {
var m__28063__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28063__auto____$1 == null))){
return m__28063__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28062__auto__ = (((m == null))?null:m);
var m__28063__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28062__auto__)]);
if(!((m__28063__auto__ == null))){
return m__28063__auto__.call(null,m);
} else {
var m__28063__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28063__auto____$1 == null))){
return m__28063__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31908 = (function (mult,ch,cs,meta31909){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31909 = meta31909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31910,meta31909__$1){
var self__ = this;
var _31910__$1 = this;
return (new cljs.core.async.t_cljs$core$async31908(self__.mult,self__.ch,self__.cs,meta31909__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31910){
var self__ = this;
var _31910__$1 = this;
return self__.meta31909;
});})(cs))
;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31908.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31908.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31909","meta31909",-1359203051,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31908";

cljs.core.async.t_cljs$core$async31908.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28005__auto__,writer__28006__auto__,opt__28007__auto__){
return cljs.core._write.call(null,writer__28006__auto__,"cljs.core.async/t_cljs$core$async31908");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31908 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31908(mult__$1,ch__$1,cs__$1,meta31909){
return (new cljs.core.async.t_cljs$core$async31908(mult__$1,ch__$1,cs__$1,meta31909));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31908(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30810__auto___32133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto___32133,cs,m,dchan,dctr,done){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto___32133,cs,m,dchan,dctr,done){
return (function (state_32045){
var state_val_32046 = (state_32045[(1)]);
if((state_val_32046 === (7))){
var inst_32041 = (state_32045[(2)]);
var state_32045__$1 = state_32045;
var statearr_32047_32134 = state_32045__$1;
(statearr_32047_32134[(2)] = inst_32041);

(statearr_32047_32134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (20))){
var inst_31944 = (state_32045[(7)]);
var inst_31956 = cljs.core.first.call(null,inst_31944);
var inst_31957 = cljs.core.nth.call(null,inst_31956,(0),null);
var inst_31958 = cljs.core.nth.call(null,inst_31956,(1),null);
var state_32045__$1 = (function (){var statearr_32048 = state_32045;
(statearr_32048[(8)] = inst_31957);

return statearr_32048;
})();
if(cljs.core.truth_(inst_31958)){
var statearr_32049_32135 = state_32045__$1;
(statearr_32049_32135[(1)] = (22));

} else {
var statearr_32050_32136 = state_32045__$1;
(statearr_32050_32136[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (27))){
var inst_31986 = (state_32045[(9)]);
var inst_31988 = (state_32045[(10)]);
var inst_31993 = (state_32045[(11)]);
var inst_31913 = (state_32045[(12)]);
var inst_31993__$1 = cljs.core._nth.call(null,inst_31986,inst_31988);
var inst_31994 = cljs.core.async.put_BANG_.call(null,inst_31993__$1,inst_31913,done);
var state_32045__$1 = (function (){var statearr_32051 = state_32045;
(statearr_32051[(11)] = inst_31993__$1);

return statearr_32051;
})();
if(cljs.core.truth_(inst_31994)){
var statearr_32052_32137 = state_32045__$1;
(statearr_32052_32137[(1)] = (30));

} else {
var statearr_32053_32138 = state_32045__$1;
(statearr_32053_32138[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (1))){
var state_32045__$1 = state_32045;
var statearr_32054_32139 = state_32045__$1;
(statearr_32054_32139[(2)] = null);

(statearr_32054_32139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (24))){
var inst_31944 = (state_32045[(7)]);
var inst_31963 = (state_32045[(2)]);
var inst_31964 = cljs.core.next.call(null,inst_31944);
var inst_31922 = inst_31964;
var inst_31923 = null;
var inst_31924 = (0);
var inst_31925 = (0);
var state_32045__$1 = (function (){var statearr_32055 = state_32045;
(statearr_32055[(13)] = inst_31923);

(statearr_32055[(14)] = inst_31963);

(statearr_32055[(15)] = inst_31922);

(statearr_32055[(16)] = inst_31924);

(statearr_32055[(17)] = inst_31925);

return statearr_32055;
})();
var statearr_32056_32140 = state_32045__$1;
(statearr_32056_32140[(2)] = null);

(statearr_32056_32140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (39))){
var state_32045__$1 = state_32045;
var statearr_32060_32141 = state_32045__$1;
(statearr_32060_32141[(2)] = null);

(statearr_32060_32141[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (4))){
var inst_31913 = (state_32045[(12)]);
var inst_31913__$1 = (state_32045[(2)]);
var inst_31914 = (inst_31913__$1 == null);
var state_32045__$1 = (function (){var statearr_32061 = state_32045;
(statearr_32061[(12)] = inst_31913__$1);

return statearr_32061;
})();
if(cljs.core.truth_(inst_31914)){
var statearr_32062_32142 = state_32045__$1;
(statearr_32062_32142[(1)] = (5));

} else {
var statearr_32063_32143 = state_32045__$1;
(statearr_32063_32143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (15))){
var inst_31923 = (state_32045[(13)]);
var inst_31922 = (state_32045[(15)]);
var inst_31924 = (state_32045[(16)]);
var inst_31925 = (state_32045[(17)]);
var inst_31940 = (state_32045[(2)]);
var inst_31941 = (inst_31925 + (1));
var tmp32057 = inst_31923;
var tmp32058 = inst_31922;
var tmp32059 = inst_31924;
var inst_31922__$1 = tmp32058;
var inst_31923__$1 = tmp32057;
var inst_31924__$1 = tmp32059;
var inst_31925__$1 = inst_31941;
var state_32045__$1 = (function (){var statearr_32064 = state_32045;
(statearr_32064[(13)] = inst_31923__$1);

(statearr_32064[(18)] = inst_31940);

(statearr_32064[(15)] = inst_31922__$1);

(statearr_32064[(16)] = inst_31924__$1);

(statearr_32064[(17)] = inst_31925__$1);

return statearr_32064;
})();
var statearr_32065_32144 = state_32045__$1;
(statearr_32065_32144[(2)] = null);

(statearr_32065_32144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (21))){
var inst_31967 = (state_32045[(2)]);
var state_32045__$1 = state_32045;
var statearr_32069_32145 = state_32045__$1;
(statearr_32069_32145[(2)] = inst_31967);

(statearr_32069_32145[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (31))){
var inst_31993 = (state_32045[(11)]);
var inst_31997 = done.call(null,null);
var inst_31998 = cljs.core.async.untap_STAR_.call(null,m,inst_31993);
var state_32045__$1 = (function (){var statearr_32070 = state_32045;
(statearr_32070[(19)] = inst_31997);

return statearr_32070;
})();
var statearr_32071_32146 = state_32045__$1;
(statearr_32071_32146[(2)] = inst_31998);

(statearr_32071_32146[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (32))){
var inst_31986 = (state_32045[(9)]);
var inst_31988 = (state_32045[(10)]);
var inst_31987 = (state_32045[(20)]);
var inst_31985 = (state_32045[(21)]);
var inst_32000 = (state_32045[(2)]);
var inst_32001 = (inst_31988 + (1));
var tmp32066 = inst_31986;
var tmp32067 = inst_31987;
var tmp32068 = inst_31985;
var inst_31985__$1 = tmp32068;
var inst_31986__$1 = tmp32066;
var inst_31987__$1 = tmp32067;
var inst_31988__$1 = inst_32001;
var state_32045__$1 = (function (){var statearr_32072 = state_32045;
(statearr_32072[(22)] = inst_32000);

(statearr_32072[(9)] = inst_31986__$1);

(statearr_32072[(10)] = inst_31988__$1);

(statearr_32072[(20)] = inst_31987__$1);

(statearr_32072[(21)] = inst_31985__$1);

return statearr_32072;
})();
var statearr_32073_32147 = state_32045__$1;
(statearr_32073_32147[(2)] = null);

(statearr_32073_32147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (40))){
var inst_32013 = (state_32045[(23)]);
var inst_32017 = done.call(null,null);
var inst_32018 = cljs.core.async.untap_STAR_.call(null,m,inst_32013);
var state_32045__$1 = (function (){var statearr_32074 = state_32045;
(statearr_32074[(24)] = inst_32017);

return statearr_32074;
})();
var statearr_32075_32148 = state_32045__$1;
(statearr_32075_32148[(2)] = inst_32018);

(statearr_32075_32148[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (33))){
var inst_32004 = (state_32045[(25)]);
var inst_32006 = cljs.core.chunked_seq_QMARK_.call(null,inst_32004);
var state_32045__$1 = state_32045;
if(inst_32006){
var statearr_32076_32149 = state_32045__$1;
(statearr_32076_32149[(1)] = (36));

} else {
var statearr_32077_32150 = state_32045__$1;
(statearr_32077_32150[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (13))){
var inst_31934 = (state_32045[(26)]);
var inst_31937 = cljs.core.async.close_BANG_.call(null,inst_31934);
var state_32045__$1 = state_32045;
var statearr_32078_32151 = state_32045__$1;
(statearr_32078_32151[(2)] = inst_31937);

(statearr_32078_32151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (22))){
var inst_31957 = (state_32045[(8)]);
var inst_31960 = cljs.core.async.close_BANG_.call(null,inst_31957);
var state_32045__$1 = state_32045;
var statearr_32079_32152 = state_32045__$1;
(statearr_32079_32152[(2)] = inst_31960);

(statearr_32079_32152[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (36))){
var inst_32004 = (state_32045[(25)]);
var inst_32008 = cljs.core.chunk_first.call(null,inst_32004);
var inst_32009 = cljs.core.chunk_rest.call(null,inst_32004);
var inst_32010 = cljs.core.count.call(null,inst_32008);
var inst_31985 = inst_32009;
var inst_31986 = inst_32008;
var inst_31987 = inst_32010;
var inst_31988 = (0);
var state_32045__$1 = (function (){var statearr_32080 = state_32045;
(statearr_32080[(9)] = inst_31986);

(statearr_32080[(10)] = inst_31988);

(statearr_32080[(20)] = inst_31987);

(statearr_32080[(21)] = inst_31985);

return statearr_32080;
})();
var statearr_32081_32153 = state_32045__$1;
(statearr_32081_32153[(2)] = null);

(statearr_32081_32153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (41))){
var inst_32004 = (state_32045[(25)]);
var inst_32020 = (state_32045[(2)]);
var inst_32021 = cljs.core.next.call(null,inst_32004);
var inst_31985 = inst_32021;
var inst_31986 = null;
var inst_31987 = (0);
var inst_31988 = (0);
var state_32045__$1 = (function (){var statearr_32082 = state_32045;
(statearr_32082[(9)] = inst_31986);

(statearr_32082[(27)] = inst_32020);

(statearr_32082[(10)] = inst_31988);

(statearr_32082[(20)] = inst_31987);

(statearr_32082[(21)] = inst_31985);

return statearr_32082;
})();
var statearr_32083_32154 = state_32045__$1;
(statearr_32083_32154[(2)] = null);

(statearr_32083_32154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (43))){
var state_32045__$1 = state_32045;
var statearr_32084_32155 = state_32045__$1;
(statearr_32084_32155[(2)] = null);

(statearr_32084_32155[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (29))){
var inst_32029 = (state_32045[(2)]);
var state_32045__$1 = state_32045;
var statearr_32085_32156 = state_32045__$1;
(statearr_32085_32156[(2)] = inst_32029);

(statearr_32085_32156[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (44))){
var inst_32038 = (state_32045[(2)]);
var state_32045__$1 = (function (){var statearr_32086 = state_32045;
(statearr_32086[(28)] = inst_32038);

return statearr_32086;
})();
var statearr_32087_32157 = state_32045__$1;
(statearr_32087_32157[(2)] = null);

(statearr_32087_32157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (6))){
var inst_31977 = (state_32045[(29)]);
var inst_31976 = cljs.core.deref.call(null,cs);
var inst_31977__$1 = cljs.core.keys.call(null,inst_31976);
var inst_31978 = cljs.core.count.call(null,inst_31977__$1);
var inst_31979 = cljs.core.reset_BANG_.call(null,dctr,inst_31978);
var inst_31984 = cljs.core.seq.call(null,inst_31977__$1);
var inst_31985 = inst_31984;
var inst_31986 = null;
var inst_31987 = (0);
var inst_31988 = (0);
var state_32045__$1 = (function (){var statearr_32088 = state_32045;
(statearr_32088[(9)] = inst_31986);

(statearr_32088[(29)] = inst_31977__$1);

(statearr_32088[(30)] = inst_31979);

(statearr_32088[(10)] = inst_31988);

(statearr_32088[(20)] = inst_31987);

(statearr_32088[(21)] = inst_31985);

return statearr_32088;
})();
var statearr_32089_32158 = state_32045__$1;
(statearr_32089_32158[(2)] = null);

(statearr_32089_32158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (28))){
var inst_32004 = (state_32045[(25)]);
var inst_31985 = (state_32045[(21)]);
var inst_32004__$1 = cljs.core.seq.call(null,inst_31985);
var state_32045__$1 = (function (){var statearr_32090 = state_32045;
(statearr_32090[(25)] = inst_32004__$1);

return statearr_32090;
})();
if(inst_32004__$1){
var statearr_32091_32159 = state_32045__$1;
(statearr_32091_32159[(1)] = (33));

} else {
var statearr_32092_32160 = state_32045__$1;
(statearr_32092_32160[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (25))){
var inst_31988 = (state_32045[(10)]);
var inst_31987 = (state_32045[(20)]);
var inst_31990 = (inst_31988 < inst_31987);
var inst_31991 = inst_31990;
var state_32045__$1 = state_32045;
if(cljs.core.truth_(inst_31991)){
var statearr_32093_32161 = state_32045__$1;
(statearr_32093_32161[(1)] = (27));

} else {
var statearr_32094_32162 = state_32045__$1;
(statearr_32094_32162[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (34))){
var state_32045__$1 = state_32045;
var statearr_32095_32163 = state_32045__$1;
(statearr_32095_32163[(2)] = null);

(statearr_32095_32163[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (17))){
var state_32045__$1 = state_32045;
var statearr_32096_32164 = state_32045__$1;
(statearr_32096_32164[(2)] = null);

(statearr_32096_32164[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (3))){
var inst_32043 = (state_32045[(2)]);
var state_32045__$1 = state_32045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32045__$1,inst_32043);
} else {
if((state_val_32046 === (12))){
var inst_31972 = (state_32045[(2)]);
var state_32045__$1 = state_32045;
var statearr_32097_32165 = state_32045__$1;
(statearr_32097_32165[(2)] = inst_31972);

(statearr_32097_32165[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (2))){
var state_32045__$1 = state_32045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32045__$1,(4),ch);
} else {
if((state_val_32046 === (23))){
var state_32045__$1 = state_32045;
var statearr_32098_32166 = state_32045__$1;
(statearr_32098_32166[(2)] = null);

(statearr_32098_32166[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (35))){
var inst_32027 = (state_32045[(2)]);
var state_32045__$1 = state_32045;
var statearr_32099_32167 = state_32045__$1;
(statearr_32099_32167[(2)] = inst_32027);

(statearr_32099_32167[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (19))){
var inst_31944 = (state_32045[(7)]);
var inst_31948 = cljs.core.chunk_first.call(null,inst_31944);
var inst_31949 = cljs.core.chunk_rest.call(null,inst_31944);
var inst_31950 = cljs.core.count.call(null,inst_31948);
var inst_31922 = inst_31949;
var inst_31923 = inst_31948;
var inst_31924 = inst_31950;
var inst_31925 = (0);
var state_32045__$1 = (function (){var statearr_32100 = state_32045;
(statearr_32100[(13)] = inst_31923);

(statearr_32100[(15)] = inst_31922);

(statearr_32100[(16)] = inst_31924);

(statearr_32100[(17)] = inst_31925);

return statearr_32100;
})();
var statearr_32101_32168 = state_32045__$1;
(statearr_32101_32168[(2)] = null);

(statearr_32101_32168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (11))){
var inst_31944 = (state_32045[(7)]);
var inst_31922 = (state_32045[(15)]);
var inst_31944__$1 = cljs.core.seq.call(null,inst_31922);
var state_32045__$1 = (function (){var statearr_32102 = state_32045;
(statearr_32102[(7)] = inst_31944__$1);

return statearr_32102;
})();
if(inst_31944__$1){
var statearr_32103_32169 = state_32045__$1;
(statearr_32103_32169[(1)] = (16));

} else {
var statearr_32104_32170 = state_32045__$1;
(statearr_32104_32170[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (9))){
var inst_31974 = (state_32045[(2)]);
var state_32045__$1 = state_32045;
var statearr_32105_32171 = state_32045__$1;
(statearr_32105_32171[(2)] = inst_31974);

(statearr_32105_32171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (5))){
var inst_31920 = cljs.core.deref.call(null,cs);
var inst_31921 = cljs.core.seq.call(null,inst_31920);
var inst_31922 = inst_31921;
var inst_31923 = null;
var inst_31924 = (0);
var inst_31925 = (0);
var state_32045__$1 = (function (){var statearr_32106 = state_32045;
(statearr_32106[(13)] = inst_31923);

(statearr_32106[(15)] = inst_31922);

(statearr_32106[(16)] = inst_31924);

(statearr_32106[(17)] = inst_31925);

return statearr_32106;
})();
var statearr_32107_32172 = state_32045__$1;
(statearr_32107_32172[(2)] = null);

(statearr_32107_32172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (14))){
var state_32045__$1 = state_32045;
var statearr_32108_32173 = state_32045__$1;
(statearr_32108_32173[(2)] = null);

(statearr_32108_32173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (45))){
var inst_32035 = (state_32045[(2)]);
var state_32045__$1 = state_32045;
var statearr_32109_32174 = state_32045__$1;
(statearr_32109_32174[(2)] = inst_32035);

(statearr_32109_32174[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (26))){
var inst_31977 = (state_32045[(29)]);
var inst_32031 = (state_32045[(2)]);
var inst_32032 = cljs.core.seq.call(null,inst_31977);
var state_32045__$1 = (function (){var statearr_32110 = state_32045;
(statearr_32110[(31)] = inst_32031);

return statearr_32110;
})();
if(inst_32032){
var statearr_32111_32175 = state_32045__$1;
(statearr_32111_32175[(1)] = (42));

} else {
var statearr_32112_32176 = state_32045__$1;
(statearr_32112_32176[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (16))){
var inst_31944 = (state_32045[(7)]);
var inst_31946 = cljs.core.chunked_seq_QMARK_.call(null,inst_31944);
var state_32045__$1 = state_32045;
if(inst_31946){
var statearr_32113_32177 = state_32045__$1;
(statearr_32113_32177[(1)] = (19));

} else {
var statearr_32114_32178 = state_32045__$1;
(statearr_32114_32178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (38))){
var inst_32024 = (state_32045[(2)]);
var state_32045__$1 = state_32045;
var statearr_32115_32179 = state_32045__$1;
(statearr_32115_32179[(2)] = inst_32024);

(statearr_32115_32179[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (30))){
var state_32045__$1 = state_32045;
var statearr_32116_32180 = state_32045__$1;
(statearr_32116_32180[(2)] = null);

(statearr_32116_32180[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (10))){
var inst_31923 = (state_32045[(13)]);
var inst_31925 = (state_32045[(17)]);
var inst_31933 = cljs.core._nth.call(null,inst_31923,inst_31925);
var inst_31934 = cljs.core.nth.call(null,inst_31933,(0),null);
var inst_31935 = cljs.core.nth.call(null,inst_31933,(1),null);
var state_32045__$1 = (function (){var statearr_32117 = state_32045;
(statearr_32117[(26)] = inst_31934);

return statearr_32117;
})();
if(cljs.core.truth_(inst_31935)){
var statearr_32118_32181 = state_32045__$1;
(statearr_32118_32181[(1)] = (13));

} else {
var statearr_32119_32182 = state_32045__$1;
(statearr_32119_32182[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (18))){
var inst_31970 = (state_32045[(2)]);
var state_32045__$1 = state_32045;
var statearr_32120_32183 = state_32045__$1;
(statearr_32120_32183[(2)] = inst_31970);

(statearr_32120_32183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (42))){
var state_32045__$1 = state_32045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32045__$1,(45),dchan);
} else {
if((state_val_32046 === (37))){
var inst_32004 = (state_32045[(25)]);
var inst_32013 = (state_32045[(23)]);
var inst_31913 = (state_32045[(12)]);
var inst_32013__$1 = cljs.core.first.call(null,inst_32004);
var inst_32014 = cljs.core.async.put_BANG_.call(null,inst_32013__$1,inst_31913,done);
var state_32045__$1 = (function (){var statearr_32121 = state_32045;
(statearr_32121[(23)] = inst_32013__$1);

return statearr_32121;
})();
if(cljs.core.truth_(inst_32014)){
var statearr_32122_32184 = state_32045__$1;
(statearr_32122_32184[(1)] = (39));

} else {
var statearr_32123_32185 = state_32045__$1;
(statearr_32123_32185[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (8))){
var inst_31924 = (state_32045[(16)]);
var inst_31925 = (state_32045[(17)]);
var inst_31927 = (inst_31925 < inst_31924);
var inst_31928 = inst_31927;
var state_32045__$1 = state_32045;
if(cljs.core.truth_(inst_31928)){
var statearr_32124_32186 = state_32045__$1;
(statearr_32124_32186[(1)] = (10));

} else {
var statearr_32125_32187 = state_32045__$1;
(statearr_32125_32187[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto___32133,cs,m,dchan,dctr,done))
;
return ((function (switch__30698__auto__,c__30810__auto___32133,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30699__auto__ = null;
var cljs$core$async$mult_$_state_machine__30699__auto____0 = (function (){
var statearr_32129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32129[(0)] = cljs$core$async$mult_$_state_machine__30699__auto__);

(statearr_32129[(1)] = (1));

return statearr_32129;
});
var cljs$core$async$mult_$_state_machine__30699__auto____1 = (function (state_32045){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_32045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e32130){if((e32130 instanceof Object)){
var ex__30702__auto__ = e32130;
var statearr_32131_32188 = state_32045;
(statearr_32131_32188[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32189 = state_32045;
state_32045 = G__32189;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30699__auto__ = function(state_32045){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30699__auto____1.call(this,state_32045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30699__auto____0;
cljs$core$async$mult_$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30699__auto____1;
return cljs$core$async$mult_$_state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto___32133,cs,m,dchan,dctr,done))
})();
var state__30812__auto__ = (function (){var statearr_32132 = f__30811__auto__.call(null);
(statearr_32132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___32133);

return statearr_32132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto___32133,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args32190 = [];
var len__28474__auto___32193 = arguments.length;
var i__28475__auto___32194 = (0);
while(true){
if((i__28475__auto___32194 < len__28474__auto___32193)){
args32190.push((arguments[i__28475__auto___32194]));

var G__32195 = (i__28475__auto___32194 + (1));
i__28475__auto___32194 = G__32195;
continue;
} else {
}
break;
}

var G__32192 = args32190.length;
switch (G__32192) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32190.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28062__auto__ = (((m == null))?null:m);
var m__28063__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28062__auto__)]);
if(!((m__28063__auto__ == null))){
return m__28063__auto__.call(null,m,ch);
} else {
var m__28063__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28063__auto____$1 == null))){
return m__28063__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28062__auto__ = (((m == null))?null:m);
var m__28063__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28062__auto__)]);
if(!((m__28063__auto__ == null))){
return m__28063__auto__.call(null,m,ch);
} else {
var m__28063__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28063__auto____$1 == null))){
return m__28063__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28062__auto__ = (((m == null))?null:m);
var m__28063__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28062__auto__)]);
if(!((m__28063__auto__ == null))){
return m__28063__auto__.call(null,m);
} else {
var m__28063__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28063__auto____$1 == null))){
return m__28063__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28062__auto__ = (((m == null))?null:m);
var m__28063__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28062__auto__)]);
if(!((m__28063__auto__ == null))){
return m__28063__auto__.call(null,m,state_map);
} else {
var m__28063__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28063__auto____$1 == null))){
return m__28063__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28062__auto__ = (((m == null))?null:m);
var m__28063__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28062__auto__)]);
if(!((m__28063__auto__ == null))){
return m__28063__auto__.call(null,m,mode);
} else {
var m__28063__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28063__auto____$1 == null))){
return m__28063__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28481__auto__ = [];
var len__28474__auto___32207 = arguments.length;
var i__28475__auto___32208 = (0);
while(true){
if((i__28475__auto___32208 < len__28474__auto___32207)){
args__28481__auto__.push((arguments[i__28475__auto___32208]));

var G__32209 = (i__28475__auto___32208 + (1));
i__28475__auto___32208 = G__32209;
continue;
} else {
}
break;
}

var argseq__28482__auto__ = ((((3) < args__28481__auto__.length))?(new cljs.core.IndexedSeq(args__28481__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28482__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32201){
var map__32202 = p__32201;
var map__32202__$1 = ((((!((map__32202 == null)))?((((map__32202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32202):map__32202);
var opts = map__32202__$1;
var statearr_32204_32210 = state;
(statearr_32204_32210[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32202,map__32202__$1,opts){
return (function (val){
var statearr_32205_32211 = state;
(statearr_32205_32211[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32202,map__32202__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32206_32212 = state;
(statearr_32206_32212[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32197){
var G__32198 = cljs.core.first.call(null,seq32197);
var seq32197__$1 = cljs.core.next.call(null,seq32197);
var G__32199 = cljs.core.first.call(null,seq32197__$1);
var seq32197__$2 = cljs.core.next.call(null,seq32197__$1);
var G__32200 = cljs.core.first.call(null,seq32197__$2);
var seq32197__$3 = cljs.core.next.call(null,seq32197__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32198,G__32199,G__32200,seq32197__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32378 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32379){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32379 = meta32379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32380,meta32379__$1){
var self__ = this;
var _32380__$1 = this;
return (new cljs.core.async.t_cljs$core$async32378(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32379__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32380){
var self__ = this;
var _32380__$1 = this;
return self__.meta32379;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32378.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32379","meta32379",-1327121573,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32378";

cljs.core.async.t_cljs$core$async32378.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28005__auto__,writer__28006__auto__,opt__28007__auto__){
return cljs.core._write.call(null,writer__28006__auto__,"cljs.core.async/t_cljs$core$async32378");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32378 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32378(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32379){
return (new cljs.core.async.t_cljs$core$async32378(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32379));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32378(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30810__auto___32543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto___32543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto___32543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32480){
var state_val_32481 = (state_32480[(1)]);
if((state_val_32481 === (7))){
var inst_32396 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32482_32544 = state_32480__$1;
(statearr_32482_32544[(2)] = inst_32396);

(statearr_32482_32544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (20))){
var inst_32408 = (state_32480[(7)]);
var state_32480__$1 = state_32480;
var statearr_32483_32545 = state_32480__$1;
(statearr_32483_32545[(2)] = inst_32408);

(statearr_32483_32545[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (27))){
var state_32480__$1 = state_32480;
var statearr_32484_32546 = state_32480__$1;
(statearr_32484_32546[(2)] = null);

(statearr_32484_32546[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (1))){
var inst_32384 = (state_32480[(8)]);
var inst_32384__$1 = calc_state.call(null);
var inst_32386 = (inst_32384__$1 == null);
var inst_32387 = cljs.core.not.call(null,inst_32386);
var state_32480__$1 = (function (){var statearr_32485 = state_32480;
(statearr_32485[(8)] = inst_32384__$1);

return statearr_32485;
})();
if(inst_32387){
var statearr_32486_32547 = state_32480__$1;
(statearr_32486_32547[(1)] = (2));

} else {
var statearr_32487_32548 = state_32480__$1;
(statearr_32487_32548[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (24))){
var inst_32454 = (state_32480[(9)]);
var inst_32440 = (state_32480[(10)]);
var inst_32431 = (state_32480[(11)]);
var inst_32454__$1 = inst_32431.call(null,inst_32440);
var state_32480__$1 = (function (){var statearr_32488 = state_32480;
(statearr_32488[(9)] = inst_32454__$1);

return statearr_32488;
})();
if(cljs.core.truth_(inst_32454__$1)){
var statearr_32489_32549 = state_32480__$1;
(statearr_32489_32549[(1)] = (29));

} else {
var statearr_32490_32550 = state_32480__$1;
(statearr_32490_32550[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (4))){
var inst_32399 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
if(cljs.core.truth_(inst_32399)){
var statearr_32491_32551 = state_32480__$1;
(statearr_32491_32551[(1)] = (8));

} else {
var statearr_32492_32552 = state_32480__$1;
(statearr_32492_32552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (15))){
var inst_32425 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
if(cljs.core.truth_(inst_32425)){
var statearr_32493_32553 = state_32480__$1;
(statearr_32493_32553[(1)] = (19));

} else {
var statearr_32494_32554 = state_32480__$1;
(statearr_32494_32554[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (21))){
var inst_32430 = (state_32480[(12)]);
var inst_32430__$1 = (state_32480[(2)]);
var inst_32431 = cljs.core.get.call(null,inst_32430__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32432 = cljs.core.get.call(null,inst_32430__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32433 = cljs.core.get.call(null,inst_32430__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32480__$1 = (function (){var statearr_32495 = state_32480;
(statearr_32495[(12)] = inst_32430__$1);

(statearr_32495[(13)] = inst_32432);

(statearr_32495[(11)] = inst_32431);

return statearr_32495;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32480__$1,(22),inst_32433);
} else {
if((state_val_32481 === (31))){
var inst_32462 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
if(cljs.core.truth_(inst_32462)){
var statearr_32496_32555 = state_32480__$1;
(statearr_32496_32555[(1)] = (32));

} else {
var statearr_32497_32556 = state_32480__$1;
(statearr_32497_32556[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (32))){
var inst_32439 = (state_32480[(14)]);
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32480__$1,(35),out,inst_32439);
} else {
if((state_val_32481 === (33))){
var inst_32430 = (state_32480[(12)]);
var inst_32408 = inst_32430;
var state_32480__$1 = (function (){var statearr_32498 = state_32480;
(statearr_32498[(7)] = inst_32408);

return statearr_32498;
})();
var statearr_32499_32557 = state_32480__$1;
(statearr_32499_32557[(2)] = null);

(statearr_32499_32557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (13))){
var inst_32408 = (state_32480[(7)]);
var inst_32415 = inst_32408.cljs$lang$protocol_mask$partition0$;
var inst_32416 = (inst_32415 & (64));
var inst_32417 = inst_32408.cljs$core$ISeq$;
var inst_32418 = (inst_32416) || (inst_32417);
var state_32480__$1 = state_32480;
if(cljs.core.truth_(inst_32418)){
var statearr_32500_32558 = state_32480__$1;
(statearr_32500_32558[(1)] = (16));

} else {
var statearr_32501_32559 = state_32480__$1;
(statearr_32501_32559[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (22))){
var inst_32440 = (state_32480[(10)]);
var inst_32439 = (state_32480[(14)]);
var inst_32438 = (state_32480[(2)]);
var inst_32439__$1 = cljs.core.nth.call(null,inst_32438,(0),null);
var inst_32440__$1 = cljs.core.nth.call(null,inst_32438,(1),null);
var inst_32441 = (inst_32439__$1 == null);
var inst_32442 = cljs.core._EQ_.call(null,inst_32440__$1,change);
var inst_32443 = (inst_32441) || (inst_32442);
var state_32480__$1 = (function (){var statearr_32502 = state_32480;
(statearr_32502[(10)] = inst_32440__$1);

(statearr_32502[(14)] = inst_32439__$1);

return statearr_32502;
})();
if(cljs.core.truth_(inst_32443)){
var statearr_32503_32560 = state_32480__$1;
(statearr_32503_32560[(1)] = (23));

} else {
var statearr_32504_32561 = state_32480__$1;
(statearr_32504_32561[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (36))){
var inst_32430 = (state_32480[(12)]);
var inst_32408 = inst_32430;
var state_32480__$1 = (function (){var statearr_32505 = state_32480;
(statearr_32505[(7)] = inst_32408);

return statearr_32505;
})();
var statearr_32506_32562 = state_32480__$1;
(statearr_32506_32562[(2)] = null);

(statearr_32506_32562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (29))){
var inst_32454 = (state_32480[(9)]);
var state_32480__$1 = state_32480;
var statearr_32507_32563 = state_32480__$1;
(statearr_32507_32563[(2)] = inst_32454);

(statearr_32507_32563[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (6))){
var state_32480__$1 = state_32480;
var statearr_32508_32564 = state_32480__$1;
(statearr_32508_32564[(2)] = false);

(statearr_32508_32564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (28))){
var inst_32450 = (state_32480[(2)]);
var inst_32451 = calc_state.call(null);
var inst_32408 = inst_32451;
var state_32480__$1 = (function (){var statearr_32509 = state_32480;
(statearr_32509[(15)] = inst_32450);

(statearr_32509[(7)] = inst_32408);

return statearr_32509;
})();
var statearr_32510_32565 = state_32480__$1;
(statearr_32510_32565[(2)] = null);

(statearr_32510_32565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (25))){
var inst_32476 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32511_32566 = state_32480__$1;
(statearr_32511_32566[(2)] = inst_32476);

(statearr_32511_32566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (34))){
var inst_32474 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32512_32567 = state_32480__$1;
(statearr_32512_32567[(2)] = inst_32474);

(statearr_32512_32567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (17))){
var state_32480__$1 = state_32480;
var statearr_32513_32568 = state_32480__$1;
(statearr_32513_32568[(2)] = false);

(statearr_32513_32568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (3))){
var state_32480__$1 = state_32480;
var statearr_32514_32569 = state_32480__$1;
(statearr_32514_32569[(2)] = false);

(statearr_32514_32569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (12))){
var inst_32478 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32480__$1,inst_32478);
} else {
if((state_val_32481 === (2))){
var inst_32384 = (state_32480[(8)]);
var inst_32389 = inst_32384.cljs$lang$protocol_mask$partition0$;
var inst_32390 = (inst_32389 & (64));
var inst_32391 = inst_32384.cljs$core$ISeq$;
var inst_32392 = (inst_32390) || (inst_32391);
var state_32480__$1 = state_32480;
if(cljs.core.truth_(inst_32392)){
var statearr_32515_32570 = state_32480__$1;
(statearr_32515_32570[(1)] = (5));

} else {
var statearr_32516_32571 = state_32480__$1;
(statearr_32516_32571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (23))){
var inst_32439 = (state_32480[(14)]);
var inst_32445 = (inst_32439 == null);
var state_32480__$1 = state_32480;
if(cljs.core.truth_(inst_32445)){
var statearr_32517_32572 = state_32480__$1;
(statearr_32517_32572[(1)] = (26));

} else {
var statearr_32518_32573 = state_32480__$1;
(statearr_32518_32573[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (35))){
var inst_32465 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
if(cljs.core.truth_(inst_32465)){
var statearr_32519_32574 = state_32480__$1;
(statearr_32519_32574[(1)] = (36));

} else {
var statearr_32520_32575 = state_32480__$1;
(statearr_32520_32575[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (19))){
var inst_32408 = (state_32480[(7)]);
var inst_32427 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32408);
var state_32480__$1 = state_32480;
var statearr_32521_32576 = state_32480__$1;
(statearr_32521_32576[(2)] = inst_32427);

(statearr_32521_32576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (11))){
var inst_32408 = (state_32480[(7)]);
var inst_32412 = (inst_32408 == null);
var inst_32413 = cljs.core.not.call(null,inst_32412);
var state_32480__$1 = state_32480;
if(inst_32413){
var statearr_32522_32577 = state_32480__$1;
(statearr_32522_32577[(1)] = (13));

} else {
var statearr_32523_32578 = state_32480__$1;
(statearr_32523_32578[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (9))){
var inst_32384 = (state_32480[(8)]);
var state_32480__$1 = state_32480;
var statearr_32524_32579 = state_32480__$1;
(statearr_32524_32579[(2)] = inst_32384);

(statearr_32524_32579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (5))){
var state_32480__$1 = state_32480;
var statearr_32525_32580 = state_32480__$1;
(statearr_32525_32580[(2)] = true);

(statearr_32525_32580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (14))){
var state_32480__$1 = state_32480;
var statearr_32526_32581 = state_32480__$1;
(statearr_32526_32581[(2)] = false);

(statearr_32526_32581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (26))){
var inst_32440 = (state_32480[(10)]);
var inst_32447 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32440);
var state_32480__$1 = state_32480;
var statearr_32527_32582 = state_32480__$1;
(statearr_32527_32582[(2)] = inst_32447);

(statearr_32527_32582[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (16))){
var state_32480__$1 = state_32480;
var statearr_32528_32583 = state_32480__$1;
(statearr_32528_32583[(2)] = true);

(statearr_32528_32583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (38))){
var inst_32470 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32529_32584 = state_32480__$1;
(statearr_32529_32584[(2)] = inst_32470);

(statearr_32529_32584[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (30))){
var inst_32432 = (state_32480[(13)]);
var inst_32440 = (state_32480[(10)]);
var inst_32431 = (state_32480[(11)]);
var inst_32457 = cljs.core.empty_QMARK_.call(null,inst_32431);
var inst_32458 = inst_32432.call(null,inst_32440);
var inst_32459 = cljs.core.not.call(null,inst_32458);
var inst_32460 = (inst_32457) && (inst_32459);
var state_32480__$1 = state_32480;
var statearr_32530_32585 = state_32480__$1;
(statearr_32530_32585[(2)] = inst_32460);

(statearr_32530_32585[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (10))){
var inst_32384 = (state_32480[(8)]);
var inst_32404 = (state_32480[(2)]);
var inst_32405 = cljs.core.get.call(null,inst_32404,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32406 = cljs.core.get.call(null,inst_32404,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32407 = cljs.core.get.call(null,inst_32404,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32408 = inst_32384;
var state_32480__$1 = (function (){var statearr_32531 = state_32480;
(statearr_32531[(16)] = inst_32406);

(statearr_32531[(17)] = inst_32405);

(statearr_32531[(18)] = inst_32407);

(statearr_32531[(7)] = inst_32408);

return statearr_32531;
})();
var statearr_32532_32586 = state_32480__$1;
(statearr_32532_32586[(2)] = null);

(statearr_32532_32586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (18))){
var inst_32422 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32533_32587 = state_32480__$1;
(statearr_32533_32587[(2)] = inst_32422);

(statearr_32533_32587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (37))){
var state_32480__$1 = state_32480;
var statearr_32534_32588 = state_32480__$1;
(statearr_32534_32588[(2)] = null);

(statearr_32534_32588[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (8))){
var inst_32384 = (state_32480[(8)]);
var inst_32401 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32384);
var state_32480__$1 = state_32480;
var statearr_32535_32589 = state_32480__$1;
(statearr_32535_32589[(2)] = inst_32401);

(statearr_32535_32589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto___32543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30698__auto__,c__30810__auto___32543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30699__auto__ = null;
var cljs$core$async$mix_$_state_machine__30699__auto____0 = (function (){
var statearr_32539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32539[(0)] = cljs$core$async$mix_$_state_machine__30699__auto__);

(statearr_32539[(1)] = (1));

return statearr_32539;
});
var cljs$core$async$mix_$_state_machine__30699__auto____1 = (function (state_32480){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_32480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e32540){if((e32540 instanceof Object)){
var ex__30702__auto__ = e32540;
var statearr_32541_32590 = state_32480;
(statearr_32541_32590[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32591 = state_32480;
state_32480 = G__32591;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30699__auto__ = function(state_32480){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30699__auto____1.call(this,state_32480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30699__auto____0;
cljs$core$async$mix_$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30699__auto____1;
return cljs$core$async$mix_$_state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto___32543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30812__auto__ = (function (){var statearr_32542 = f__30811__auto__.call(null);
(statearr_32542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___32543);

return statearr_32542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto___32543,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28062__auto__ = (((p == null))?null:p);
var m__28063__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28062__auto__)]);
if(!((m__28063__auto__ == null))){
return m__28063__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28063__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28063__auto____$1 == null))){
return m__28063__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28062__auto__ = (((p == null))?null:p);
var m__28063__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28062__auto__)]);
if(!((m__28063__auto__ == null))){
return m__28063__auto__.call(null,p,v,ch);
} else {
var m__28063__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28063__auto____$1 == null))){
return m__28063__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32592 = [];
var len__28474__auto___32595 = arguments.length;
var i__28475__auto___32596 = (0);
while(true){
if((i__28475__auto___32596 < len__28474__auto___32595)){
args32592.push((arguments[i__28475__auto___32596]));

var G__32597 = (i__28475__auto___32596 + (1));
i__28475__auto___32596 = G__32597;
continue;
} else {
}
break;
}

var G__32594 = args32592.length;
switch (G__32594) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32592.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28062__auto__ = (((p == null))?null:p);
var m__28063__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28062__auto__)]);
if(!((m__28063__auto__ == null))){
return m__28063__auto__.call(null,p);
} else {
var m__28063__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28063__auto____$1 == null))){
return m__28063__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28062__auto__ = (((p == null))?null:p);
var m__28063__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28062__auto__)]);
if(!((m__28063__auto__ == null))){
return m__28063__auto__.call(null,p,v);
} else {
var m__28063__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28063__auto____$1 == null))){
return m__28063__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args32600 = [];
var len__28474__auto___32725 = arguments.length;
var i__28475__auto___32726 = (0);
while(true){
if((i__28475__auto___32726 < len__28474__auto___32725)){
args32600.push((arguments[i__28475__auto___32726]));

var G__32727 = (i__28475__auto___32726 + (1));
i__28475__auto___32726 = G__32727;
continue;
} else {
}
break;
}

var G__32602 = args32600.length;
switch (G__32602) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32600.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27399__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27399__auto__)){
return or__27399__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27399__auto__,mults){
return (function (p1__32599_SHARP_){
if(cljs.core.truth_(p1__32599_SHARP_.call(null,topic))){
return p1__32599_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32599_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27399__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32603 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32604){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32604 = meta32604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32605,meta32604__$1){
var self__ = this;
var _32605__$1 = this;
return (new cljs.core.async.t_cljs$core$async32603(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32604__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32605){
var self__ = this;
var _32605__$1 = this;
return self__.meta32604;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32603.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32603.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32603.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32603.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32603.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32603.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32603.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32603.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32604","meta32604",-195855169,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32603";

cljs.core.async.t_cljs$core$async32603.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28005__auto__,writer__28006__auto__,opt__28007__auto__){
return cljs.core._write.call(null,writer__28006__auto__,"cljs.core.async/t_cljs$core$async32603");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32603 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32603(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32604){
return (new cljs.core.async.t_cljs$core$async32603(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32604));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32603(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30810__auto___32729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto___32729,mults,ensure_mult,p){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto___32729,mults,ensure_mult,p){
return (function (state_32677){
var state_val_32678 = (state_32677[(1)]);
if((state_val_32678 === (7))){
var inst_32673 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
var statearr_32679_32730 = state_32677__$1;
(statearr_32679_32730[(2)] = inst_32673);

(statearr_32679_32730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (20))){
var state_32677__$1 = state_32677;
var statearr_32680_32731 = state_32677__$1;
(statearr_32680_32731[(2)] = null);

(statearr_32680_32731[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (1))){
var state_32677__$1 = state_32677;
var statearr_32681_32732 = state_32677__$1;
(statearr_32681_32732[(2)] = null);

(statearr_32681_32732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (24))){
var inst_32656 = (state_32677[(7)]);
var inst_32665 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32656);
var state_32677__$1 = state_32677;
var statearr_32682_32733 = state_32677__$1;
(statearr_32682_32733[(2)] = inst_32665);

(statearr_32682_32733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (4))){
var inst_32608 = (state_32677[(8)]);
var inst_32608__$1 = (state_32677[(2)]);
var inst_32609 = (inst_32608__$1 == null);
var state_32677__$1 = (function (){var statearr_32683 = state_32677;
(statearr_32683[(8)] = inst_32608__$1);

return statearr_32683;
})();
if(cljs.core.truth_(inst_32609)){
var statearr_32684_32734 = state_32677__$1;
(statearr_32684_32734[(1)] = (5));

} else {
var statearr_32685_32735 = state_32677__$1;
(statearr_32685_32735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (15))){
var inst_32650 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
var statearr_32686_32736 = state_32677__$1;
(statearr_32686_32736[(2)] = inst_32650);

(statearr_32686_32736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (21))){
var inst_32670 = (state_32677[(2)]);
var state_32677__$1 = (function (){var statearr_32687 = state_32677;
(statearr_32687[(9)] = inst_32670);

return statearr_32687;
})();
var statearr_32688_32737 = state_32677__$1;
(statearr_32688_32737[(2)] = null);

(statearr_32688_32737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (13))){
var inst_32632 = (state_32677[(10)]);
var inst_32634 = cljs.core.chunked_seq_QMARK_.call(null,inst_32632);
var state_32677__$1 = state_32677;
if(inst_32634){
var statearr_32689_32738 = state_32677__$1;
(statearr_32689_32738[(1)] = (16));

} else {
var statearr_32690_32739 = state_32677__$1;
(statearr_32690_32739[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (22))){
var inst_32662 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
if(cljs.core.truth_(inst_32662)){
var statearr_32691_32740 = state_32677__$1;
(statearr_32691_32740[(1)] = (23));

} else {
var statearr_32692_32741 = state_32677__$1;
(statearr_32692_32741[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (6))){
var inst_32608 = (state_32677[(8)]);
var inst_32656 = (state_32677[(7)]);
var inst_32658 = (state_32677[(11)]);
var inst_32656__$1 = topic_fn.call(null,inst_32608);
var inst_32657 = cljs.core.deref.call(null,mults);
var inst_32658__$1 = cljs.core.get.call(null,inst_32657,inst_32656__$1);
var state_32677__$1 = (function (){var statearr_32693 = state_32677;
(statearr_32693[(7)] = inst_32656__$1);

(statearr_32693[(11)] = inst_32658__$1);

return statearr_32693;
})();
if(cljs.core.truth_(inst_32658__$1)){
var statearr_32694_32742 = state_32677__$1;
(statearr_32694_32742[(1)] = (19));

} else {
var statearr_32695_32743 = state_32677__$1;
(statearr_32695_32743[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (25))){
var inst_32667 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
var statearr_32696_32744 = state_32677__$1;
(statearr_32696_32744[(2)] = inst_32667);

(statearr_32696_32744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (17))){
var inst_32632 = (state_32677[(10)]);
var inst_32641 = cljs.core.first.call(null,inst_32632);
var inst_32642 = cljs.core.async.muxch_STAR_.call(null,inst_32641);
var inst_32643 = cljs.core.async.close_BANG_.call(null,inst_32642);
var inst_32644 = cljs.core.next.call(null,inst_32632);
var inst_32618 = inst_32644;
var inst_32619 = null;
var inst_32620 = (0);
var inst_32621 = (0);
var state_32677__$1 = (function (){var statearr_32697 = state_32677;
(statearr_32697[(12)] = inst_32621);

(statearr_32697[(13)] = inst_32620);

(statearr_32697[(14)] = inst_32619);

(statearr_32697[(15)] = inst_32618);

(statearr_32697[(16)] = inst_32643);

return statearr_32697;
})();
var statearr_32698_32745 = state_32677__$1;
(statearr_32698_32745[(2)] = null);

(statearr_32698_32745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (3))){
var inst_32675 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32677__$1,inst_32675);
} else {
if((state_val_32678 === (12))){
var inst_32652 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
var statearr_32699_32746 = state_32677__$1;
(statearr_32699_32746[(2)] = inst_32652);

(statearr_32699_32746[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (2))){
var state_32677__$1 = state_32677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32677__$1,(4),ch);
} else {
if((state_val_32678 === (23))){
var state_32677__$1 = state_32677;
var statearr_32700_32747 = state_32677__$1;
(statearr_32700_32747[(2)] = null);

(statearr_32700_32747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (19))){
var inst_32608 = (state_32677[(8)]);
var inst_32658 = (state_32677[(11)]);
var inst_32660 = cljs.core.async.muxch_STAR_.call(null,inst_32658);
var state_32677__$1 = state_32677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32677__$1,(22),inst_32660,inst_32608);
} else {
if((state_val_32678 === (11))){
var inst_32632 = (state_32677[(10)]);
var inst_32618 = (state_32677[(15)]);
var inst_32632__$1 = cljs.core.seq.call(null,inst_32618);
var state_32677__$1 = (function (){var statearr_32701 = state_32677;
(statearr_32701[(10)] = inst_32632__$1);

return statearr_32701;
})();
if(inst_32632__$1){
var statearr_32702_32748 = state_32677__$1;
(statearr_32702_32748[(1)] = (13));

} else {
var statearr_32703_32749 = state_32677__$1;
(statearr_32703_32749[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (9))){
var inst_32654 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
var statearr_32704_32750 = state_32677__$1;
(statearr_32704_32750[(2)] = inst_32654);

(statearr_32704_32750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (5))){
var inst_32615 = cljs.core.deref.call(null,mults);
var inst_32616 = cljs.core.vals.call(null,inst_32615);
var inst_32617 = cljs.core.seq.call(null,inst_32616);
var inst_32618 = inst_32617;
var inst_32619 = null;
var inst_32620 = (0);
var inst_32621 = (0);
var state_32677__$1 = (function (){var statearr_32705 = state_32677;
(statearr_32705[(12)] = inst_32621);

(statearr_32705[(13)] = inst_32620);

(statearr_32705[(14)] = inst_32619);

(statearr_32705[(15)] = inst_32618);

return statearr_32705;
})();
var statearr_32706_32751 = state_32677__$1;
(statearr_32706_32751[(2)] = null);

(statearr_32706_32751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (14))){
var state_32677__$1 = state_32677;
var statearr_32710_32752 = state_32677__$1;
(statearr_32710_32752[(2)] = null);

(statearr_32710_32752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (16))){
var inst_32632 = (state_32677[(10)]);
var inst_32636 = cljs.core.chunk_first.call(null,inst_32632);
var inst_32637 = cljs.core.chunk_rest.call(null,inst_32632);
var inst_32638 = cljs.core.count.call(null,inst_32636);
var inst_32618 = inst_32637;
var inst_32619 = inst_32636;
var inst_32620 = inst_32638;
var inst_32621 = (0);
var state_32677__$1 = (function (){var statearr_32711 = state_32677;
(statearr_32711[(12)] = inst_32621);

(statearr_32711[(13)] = inst_32620);

(statearr_32711[(14)] = inst_32619);

(statearr_32711[(15)] = inst_32618);

return statearr_32711;
})();
var statearr_32712_32753 = state_32677__$1;
(statearr_32712_32753[(2)] = null);

(statearr_32712_32753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (10))){
var inst_32621 = (state_32677[(12)]);
var inst_32620 = (state_32677[(13)]);
var inst_32619 = (state_32677[(14)]);
var inst_32618 = (state_32677[(15)]);
var inst_32626 = cljs.core._nth.call(null,inst_32619,inst_32621);
var inst_32627 = cljs.core.async.muxch_STAR_.call(null,inst_32626);
var inst_32628 = cljs.core.async.close_BANG_.call(null,inst_32627);
var inst_32629 = (inst_32621 + (1));
var tmp32707 = inst_32620;
var tmp32708 = inst_32619;
var tmp32709 = inst_32618;
var inst_32618__$1 = tmp32709;
var inst_32619__$1 = tmp32708;
var inst_32620__$1 = tmp32707;
var inst_32621__$1 = inst_32629;
var state_32677__$1 = (function (){var statearr_32713 = state_32677;
(statearr_32713[(12)] = inst_32621__$1);

(statearr_32713[(13)] = inst_32620__$1);

(statearr_32713[(14)] = inst_32619__$1);

(statearr_32713[(15)] = inst_32618__$1);

(statearr_32713[(17)] = inst_32628);

return statearr_32713;
})();
var statearr_32714_32754 = state_32677__$1;
(statearr_32714_32754[(2)] = null);

(statearr_32714_32754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (18))){
var inst_32647 = (state_32677[(2)]);
var state_32677__$1 = state_32677;
var statearr_32715_32755 = state_32677__$1;
(statearr_32715_32755[(2)] = inst_32647);

(statearr_32715_32755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32678 === (8))){
var inst_32621 = (state_32677[(12)]);
var inst_32620 = (state_32677[(13)]);
var inst_32623 = (inst_32621 < inst_32620);
var inst_32624 = inst_32623;
var state_32677__$1 = state_32677;
if(cljs.core.truth_(inst_32624)){
var statearr_32716_32756 = state_32677__$1;
(statearr_32716_32756[(1)] = (10));

} else {
var statearr_32717_32757 = state_32677__$1;
(statearr_32717_32757[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto___32729,mults,ensure_mult,p))
;
return ((function (switch__30698__auto__,c__30810__auto___32729,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30699__auto__ = null;
var cljs$core$async$state_machine__30699__auto____0 = (function (){
var statearr_32721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32721[(0)] = cljs$core$async$state_machine__30699__auto__);

(statearr_32721[(1)] = (1));

return statearr_32721;
});
var cljs$core$async$state_machine__30699__auto____1 = (function (state_32677){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_32677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e32722){if((e32722 instanceof Object)){
var ex__30702__auto__ = e32722;
var statearr_32723_32758 = state_32677;
(statearr_32723_32758[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32759 = state_32677;
state_32677 = G__32759;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$state_machine__30699__auto__ = function(state_32677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30699__auto____1.call(this,state_32677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30699__auto____0;
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30699__auto____1;
return cljs$core$async$state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto___32729,mults,ensure_mult,p))
})();
var state__30812__auto__ = (function (){var statearr_32724 = f__30811__auto__.call(null);
(statearr_32724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___32729);

return statearr_32724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto___32729,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args32760 = [];
var len__28474__auto___32763 = arguments.length;
var i__28475__auto___32764 = (0);
while(true){
if((i__28475__auto___32764 < len__28474__auto___32763)){
args32760.push((arguments[i__28475__auto___32764]));

var G__32765 = (i__28475__auto___32764 + (1));
i__28475__auto___32764 = G__32765;
continue;
} else {
}
break;
}

var G__32762 = args32760.length;
switch (G__32762) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32760.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32767 = [];
var len__28474__auto___32770 = arguments.length;
var i__28475__auto___32771 = (0);
while(true){
if((i__28475__auto___32771 < len__28474__auto___32770)){
args32767.push((arguments[i__28475__auto___32771]));

var G__32772 = (i__28475__auto___32771 + (1));
i__28475__auto___32771 = G__32772;
continue;
} else {
}
break;
}

var G__32769 = args32767.length;
switch (G__32769) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32767.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args32774 = [];
var len__28474__auto___32845 = arguments.length;
var i__28475__auto___32846 = (0);
while(true){
if((i__28475__auto___32846 < len__28474__auto___32845)){
args32774.push((arguments[i__28475__auto___32846]));

var G__32847 = (i__28475__auto___32846 + (1));
i__28475__auto___32846 = G__32847;
continue;
} else {
}
break;
}

var G__32776 = args32774.length;
switch (G__32776) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32774.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30810__auto___32849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto___32849,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto___32849,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32815){
var state_val_32816 = (state_32815[(1)]);
if((state_val_32816 === (7))){
var state_32815__$1 = state_32815;
var statearr_32817_32850 = state_32815__$1;
(statearr_32817_32850[(2)] = null);

(statearr_32817_32850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (1))){
var state_32815__$1 = state_32815;
var statearr_32818_32851 = state_32815__$1;
(statearr_32818_32851[(2)] = null);

(statearr_32818_32851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (4))){
var inst_32779 = (state_32815[(7)]);
var inst_32781 = (inst_32779 < cnt);
var state_32815__$1 = state_32815;
if(cljs.core.truth_(inst_32781)){
var statearr_32819_32852 = state_32815__$1;
(statearr_32819_32852[(1)] = (6));

} else {
var statearr_32820_32853 = state_32815__$1;
(statearr_32820_32853[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (15))){
var inst_32811 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32821_32854 = state_32815__$1;
(statearr_32821_32854[(2)] = inst_32811);

(statearr_32821_32854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (13))){
var inst_32804 = cljs.core.async.close_BANG_.call(null,out);
var state_32815__$1 = state_32815;
var statearr_32822_32855 = state_32815__$1;
(statearr_32822_32855[(2)] = inst_32804);

(statearr_32822_32855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (6))){
var state_32815__$1 = state_32815;
var statearr_32823_32856 = state_32815__$1;
(statearr_32823_32856[(2)] = null);

(statearr_32823_32856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (3))){
var inst_32813 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32815__$1,inst_32813);
} else {
if((state_val_32816 === (12))){
var inst_32801 = (state_32815[(8)]);
var inst_32801__$1 = (state_32815[(2)]);
var inst_32802 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32801__$1);
var state_32815__$1 = (function (){var statearr_32824 = state_32815;
(statearr_32824[(8)] = inst_32801__$1);

return statearr_32824;
})();
if(cljs.core.truth_(inst_32802)){
var statearr_32825_32857 = state_32815__$1;
(statearr_32825_32857[(1)] = (13));

} else {
var statearr_32826_32858 = state_32815__$1;
(statearr_32826_32858[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (2))){
var inst_32778 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32779 = (0);
var state_32815__$1 = (function (){var statearr_32827 = state_32815;
(statearr_32827[(9)] = inst_32778);

(statearr_32827[(7)] = inst_32779);

return statearr_32827;
})();
var statearr_32828_32859 = state_32815__$1;
(statearr_32828_32859[(2)] = null);

(statearr_32828_32859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (11))){
var inst_32779 = (state_32815[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32815,(10),Object,null,(9));
var inst_32788 = chs__$1.call(null,inst_32779);
var inst_32789 = done.call(null,inst_32779);
var inst_32790 = cljs.core.async.take_BANG_.call(null,inst_32788,inst_32789);
var state_32815__$1 = state_32815;
var statearr_32829_32860 = state_32815__$1;
(statearr_32829_32860[(2)] = inst_32790);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32815__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (9))){
var inst_32779 = (state_32815[(7)]);
var inst_32792 = (state_32815[(2)]);
var inst_32793 = (inst_32779 + (1));
var inst_32779__$1 = inst_32793;
var state_32815__$1 = (function (){var statearr_32830 = state_32815;
(statearr_32830[(7)] = inst_32779__$1);

(statearr_32830[(10)] = inst_32792);

return statearr_32830;
})();
var statearr_32831_32861 = state_32815__$1;
(statearr_32831_32861[(2)] = null);

(statearr_32831_32861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (5))){
var inst_32799 = (state_32815[(2)]);
var state_32815__$1 = (function (){var statearr_32832 = state_32815;
(statearr_32832[(11)] = inst_32799);

return statearr_32832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32815__$1,(12),dchan);
} else {
if((state_val_32816 === (14))){
var inst_32801 = (state_32815[(8)]);
var inst_32806 = cljs.core.apply.call(null,f,inst_32801);
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32815__$1,(16),out,inst_32806);
} else {
if((state_val_32816 === (16))){
var inst_32808 = (state_32815[(2)]);
var state_32815__$1 = (function (){var statearr_32833 = state_32815;
(statearr_32833[(12)] = inst_32808);

return statearr_32833;
})();
var statearr_32834_32862 = state_32815__$1;
(statearr_32834_32862[(2)] = null);

(statearr_32834_32862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (10))){
var inst_32783 = (state_32815[(2)]);
var inst_32784 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32815__$1 = (function (){var statearr_32835 = state_32815;
(statearr_32835[(13)] = inst_32783);

return statearr_32835;
})();
var statearr_32836_32863 = state_32815__$1;
(statearr_32836_32863[(2)] = inst_32784);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32815__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (8))){
var inst_32797 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32837_32864 = state_32815__$1;
(statearr_32837_32864[(2)] = inst_32797);

(statearr_32837_32864[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto___32849,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30698__auto__,c__30810__auto___32849,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30699__auto__ = null;
var cljs$core$async$state_machine__30699__auto____0 = (function (){
var statearr_32841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32841[(0)] = cljs$core$async$state_machine__30699__auto__);

(statearr_32841[(1)] = (1));

return statearr_32841;
});
var cljs$core$async$state_machine__30699__auto____1 = (function (state_32815){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_32815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e32842){if((e32842 instanceof Object)){
var ex__30702__auto__ = e32842;
var statearr_32843_32865 = state_32815;
(statearr_32843_32865[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32866 = state_32815;
state_32815 = G__32866;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$state_machine__30699__auto__ = function(state_32815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30699__auto____1.call(this,state_32815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30699__auto____0;
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30699__auto____1;
return cljs$core$async$state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto___32849,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30812__auto__ = (function (){var statearr_32844 = f__30811__auto__.call(null);
(statearr_32844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___32849);

return statearr_32844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto___32849,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32868 = [];
var len__28474__auto___32926 = arguments.length;
var i__28475__auto___32927 = (0);
while(true){
if((i__28475__auto___32927 < len__28474__auto___32926)){
args32868.push((arguments[i__28475__auto___32927]));

var G__32928 = (i__28475__auto___32927 + (1));
i__28475__auto___32927 = G__32928;
continue;
} else {
}
break;
}

var G__32870 = args32868.length;
switch (G__32870) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32868.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30810__auto___32930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto___32930,out){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto___32930,out){
return (function (state_32902){
var state_val_32903 = (state_32902[(1)]);
if((state_val_32903 === (7))){
var inst_32882 = (state_32902[(7)]);
var inst_32881 = (state_32902[(8)]);
var inst_32881__$1 = (state_32902[(2)]);
var inst_32882__$1 = cljs.core.nth.call(null,inst_32881__$1,(0),null);
var inst_32883 = cljs.core.nth.call(null,inst_32881__$1,(1),null);
var inst_32884 = (inst_32882__$1 == null);
var state_32902__$1 = (function (){var statearr_32904 = state_32902;
(statearr_32904[(7)] = inst_32882__$1);

(statearr_32904[(8)] = inst_32881__$1);

(statearr_32904[(9)] = inst_32883);

return statearr_32904;
})();
if(cljs.core.truth_(inst_32884)){
var statearr_32905_32931 = state_32902__$1;
(statearr_32905_32931[(1)] = (8));

} else {
var statearr_32906_32932 = state_32902__$1;
(statearr_32906_32932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32903 === (1))){
var inst_32871 = cljs.core.vec.call(null,chs);
var inst_32872 = inst_32871;
var state_32902__$1 = (function (){var statearr_32907 = state_32902;
(statearr_32907[(10)] = inst_32872);

return statearr_32907;
})();
var statearr_32908_32933 = state_32902__$1;
(statearr_32908_32933[(2)] = null);

(statearr_32908_32933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32903 === (4))){
var inst_32872 = (state_32902[(10)]);
var state_32902__$1 = state_32902;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32902__$1,(7),inst_32872);
} else {
if((state_val_32903 === (6))){
var inst_32898 = (state_32902[(2)]);
var state_32902__$1 = state_32902;
var statearr_32909_32934 = state_32902__$1;
(statearr_32909_32934[(2)] = inst_32898);

(statearr_32909_32934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32903 === (3))){
var inst_32900 = (state_32902[(2)]);
var state_32902__$1 = state_32902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32902__$1,inst_32900);
} else {
if((state_val_32903 === (2))){
var inst_32872 = (state_32902[(10)]);
var inst_32874 = cljs.core.count.call(null,inst_32872);
var inst_32875 = (inst_32874 > (0));
var state_32902__$1 = state_32902;
if(cljs.core.truth_(inst_32875)){
var statearr_32911_32935 = state_32902__$1;
(statearr_32911_32935[(1)] = (4));

} else {
var statearr_32912_32936 = state_32902__$1;
(statearr_32912_32936[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32903 === (11))){
var inst_32872 = (state_32902[(10)]);
var inst_32891 = (state_32902[(2)]);
var tmp32910 = inst_32872;
var inst_32872__$1 = tmp32910;
var state_32902__$1 = (function (){var statearr_32913 = state_32902;
(statearr_32913[(10)] = inst_32872__$1);

(statearr_32913[(11)] = inst_32891);

return statearr_32913;
})();
var statearr_32914_32937 = state_32902__$1;
(statearr_32914_32937[(2)] = null);

(statearr_32914_32937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32903 === (9))){
var inst_32882 = (state_32902[(7)]);
var state_32902__$1 = state_32902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32902__$1,(11),out,inst_32882);
} else {
if((state_val_32903 === (5))){
var inst_32896 = cljs.core.async.close_BANG_.call(null,out);
var state_32902__$1 = state_32902;
var statearr_32915_32938 = state_32902__$1;
(statearr_32915_32938[(2)] = inst_32896);

(statearr_32915_32938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32903 === (10))){
var inst_32894 = (state_32902[(2)]);
var state_32902__$1 = state_32902;
var statearr_32916_32939 = state_32902__$1;
(statearr_32916_32939[(2)] = inst_32894);

(statearr_32916_32939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32903 === (8))){
var inst_32882 = (state_32902[(7)]);
var inst_32881 = (state_32902[(8)]);
var inst_32883 = (state_32902[(9)]);
var inst_32872 = (state_32902[(10)]);
var inst_32886 = (function (){var cs = inst_32872;
var vec__32877 = inst_32881;
var v = inst_32882;
var c = inst_32883;
return ((function (cs,vec__32877,v,c,inst_32882,inst_32881,inst_32883,inst_32872,state_val_32903,c__30810__auto___32930,out){
return (function (p1__32867_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32867_SHARP_);
});
;})(cs,vec__32877,v,c,inst_32882,inst_32881,inst_32883,inst_32872,state_val_32903,c__30810__auto___32930,out))
})();
var inst_32887 = cljs.core.filterv.call(null,inst_32886,inst_32872);
var inst_32872__$1 = inst_32887;
var state_32902__$1 = (function (){var statearr_32917 = state_32902;
(statearr_32917[(10)] = inst_32872__$1);

return statearr_32917;
})();
var statearr_32918_32940 = state_32902__$1;
(statearr_32918_32940[(2)] = null);

(statearr_32918_32940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto___32930,out))
;
return ((function (switch__30698__auto__,c__30810__auto___32930,out){
return (function() {
var cljs$core$async$state_machine__30699__auto__ = null;
var cljs$core$async$state_machine__30699__auto____0 = (function (){
var statearr_32922 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32922[(0)] = cljs$core$async$state_machine__30699__auto__);

(statearr_32922[(1)] = (1));

return statearr_32922;
});
var cljs$core$async$state_machine__30699__auto____1 = (function (state_32902){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_32902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e32923){if((e32923 instanceof Object)){
var ex__30702__auto__ = e32923;
var statearr_32924_32941 = state_32902;
(statearr_32924_32941[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32942 = state_32902;
state_32902 = G__32942;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$state_machine__30699__auto__ = function(state_32902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30699__auto____1.call(this,state_32902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30699__auto____0;
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30699__auto____1;
return cljs$core$async$state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto___32930,out))
})();
var state__30812__auto__ = (function (){var statearr_32925 = f__30811__auto__.call(null);
(statearr_32925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___32930);

return statearr_32925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto___32930,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32943 = [];
var len__28474__auto___32992 = arguments.length;
var i__28475__auto___32993 = (0);
while(true){
if((i__28475__auto___32993 < len__28474__auto___32992)){
args32943.push((arguments[i__28475__auto___32993]));

var G__32994 = (i__28475__auto___32993 + (1));
i__28475__auto___32993 = G__32994;
continue;
} else {
}
break;
}

var G__32945 = args32943.length;
switch (G__32945) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32943.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30810__auto___32996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto___32996,out){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto___32996,out){
return (function (state_32969){
var state_val_32970 = (state_32969[(1)]);
if((state_val_32970 === (7))){
var inst_32951 = (state_32969[(7)]);
var inst_32951__$1 = (state_32969[(2)]);
var inst_32952 = (inst_32951__$1 == null);
var inst_32953 = cljs.core.not.call(null,inst_32952);
var state_32969__$1 = (function (){var statearr_32971 = state_32969;
(statearr_32971[(7)] = inst_32951__$1);

return statearr_32971;
})();
if(inst_32953){
var statearr_32972_32997 = state_32969__$1;
(statearr_32972_32997[(1)] = (8));

} else {
var statearr_32973_32998 = state_32969__$1;
(statearr_32973_32998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (1))){
var inst_32946 = (0);
var state_32969__$1 = (function (){var statearr_32974 = state_32969;
(statearr_32974[(8)] = inst_32946);

return statearr_32974;
})();
var statearr_32975_32999 = state_32969__$1;
(statearr_32975_32999[(2)] = null);

(statearr_32975_32999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (4))){
var state_32969__$1 = state_32969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32969__$1,(7),ch);
} else {
if((state_val_32970 === (6))){
var inst_32964 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
var statearr_32976_33000 = state_32969__$1;
(statearr_32976_33000[(2)] = inst_32964);

(statearr_32976_33000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (3))){
var inst_32966 = (state_32969[(2)]);
var inst_32967 = cljs.core.async.close_BANG_.call(null,out);
var state_32969__$1 = (function (){var statearr_32977 = state_32969;
(statearr_32977[(9)] = inst_32966);

return statearr_32977;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32969__$1,inst_32967);
} else {
if((state_val_32970 === (2))){
var inst_32946 = (state_32969[(8)]);
var inst_32948 = (inst_32946 < n);
var state_32969__$1 = state_32969;
if(cljs.core.truth_(inst_32948)){
var statearr_32978_33001 = state_32969__$1;
(statearr_32978_33001[(1)] = (4));

} else {
var statearr_32979_33002 = state_32969__$1;
(statearr_32979_33002[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (11))){
var inst_32946 = (state_32969[(8)]);
var inst_32956 = (state_32969[(2)]);
var inst_32957 = (inst_32946 + (1));
var inst_32946__$1 = inst_32957;
var state_32969__$1 = (function (){var statearr_32980 = state_32969;
(statearr_32980[(8)] = inst_32946__$1);

(statearr_32980[(10)] = inst_32956);

return statearr_32980;
})();
var statearr_32981_33003 = state_32969__$1;
(statearr_32981_33003[(2)] = null);

(statearr_32981_33003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (9))){
var state_32969__$1 = state_32969;
var statearr_32982_33004 = state_32969__$1;
(statearr_32982_33004[(2)] = null);

(statearr_32982_33004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (5))){
var state_32969__$1 = state_32969;
var statearr_32983_33005 = state_32969__$1;
(statearr_32983_33005[(2)] = null);

(statearr_32983_33005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (10))){
var inst_32961 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
var statearr_32984_33006 = state_32969__$1;
(statearr_32984_33006[(2)] = inst_32961);

(statearr_32984_33006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (8))){
var inst_32951 = (state_32969[(7)]);
var state_32969__$1 = state_32969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32969__$1,(11),out,inst_32951);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto___32996,out))
;
return ((function (switch__30698__auto__,c__30810__auto___32996,out){
return (function() {
var cljs$core$async$state_machine__30699__auto__ = null;
var cljs$core$async$state_machine__30699__auto____0 = (function (){
var statearr_32988 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32988[(0)] = cljs$core$async$state_machine__30699__auto__);

(statearr_32988[(1)] = (1));

return statearr_32988;
});
var cljs$core$async$state_machine__30699__auto____1 = (function (state_32969){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_32969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e32989){if((e32989 instanceof Object)){
var ex__30702__auto__ = e32989;
var statearr_32990_33007 = state_32969;
(statearr_32990_33007[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33008 = state_32969;
state_32969 = G__33008;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$state_machine__30699__auto__ = function(state_32969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30699__auto____1.call(this,state_32969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30699__auto____0;
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30699__auto____1;
return cljs$core$async$state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto___32996,out))
})();
var state__30812__auto__ = (function (){var statearr_32991 = f__30811__auto__.call(null);
(statearr_32991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___32996);

return statearr_32991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto___32996,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33016 = (function (map_LT_,f,ch,meta33017){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33017 = meta33017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33018,meta33017__$1){
var self__ = this;
var _33018__$1 = this;
return (new cljs.core.async.t_cljs$core$async33016(self__.map_LT_,self__.f,self__.ch,meta33017__$1));
});

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33018){
var self__ = this;
var _33018__$1 = this;
return self__.meta33017;
});

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33019 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33019 = (function (map_LT_,f,ch,meta33017,_,fn1,meta33020){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33017 = meta33017;
this._ = _;
this.fn1 = fn1;
this.meta33020 = meta33020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33021,meta33020__$1){
var self__ = this;
var _33021__$1 = this;
return (new cljs.core.async.t_cljs$core$async33019(self__.map_LT_,self__.f,self__.ch,self__.meta33017,self__._,self__.fn1,meta33020__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33021){
var self__ = this;
var _33021__$1 = this;
return self__.meta33020;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33009_SHARP_){
return f1.call(null,(((p1__33009_SHARP_ == null))?null:self__.f.call(null,p1__33009_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33019.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33017","meta33017",-347894169,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33016","cljs.core.async/t_cljs$core$async33016",2086165546,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33020","meta33020",971271479,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33019";

cljs.core.async.t_cljs$core$async33019.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28005__auto__,writer__28006__auto__,opt__28007__auto__){
return cljs.core._write.call(null,writer__28006__auto__,"cljs.core.async/t_cljs$core$async33019");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33019 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33019(map_LT___$1,f__$1,ch__$1,meta33017__$1,___$2,fn1__$1,meta33020){
return (new cljs.core.async.t_cljs$core$async33019(map_LT___$1,f__$1,ch__$1,meta33017__$1,___$2,fn1__$1,meta33020));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33019(self__.map_LT_,self__.f,self__.ch,self__.meta33017,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27387__auto__ = ret;
if(cljs.core.truth_(and__27387__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27387__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33017","meta33017",-347894169,null)], null);
});

cljs.core.async.t_cljs$core$async33016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33016";

cljs.core.async.t_cljs$core$async33016.cljs$lang$ctorPrWriter = (function (this__28005__auto__,writer__28006__auto__,opt__28007__auto__){
return cljs.core._write.call(null,writer__28006__auto__,"cljs.core.async/t_cljs$core$async33016");
});

cljs.core.async.__GT_t_cljs$core$async33016 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33016(map_LT___$1,f__$1,ch__$1,meta33017){
return (new cljs.core.async.t_cljs$core$async33016(map_LT___$1,f__$1,ch__$1,meta33017));
});

}

return (new cljs.core.async.t_cljs$core$async33016(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33025 = (function (map_GT_,f,ch,meta33026){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33026 = meta33026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33027,meta33026__$1){
var self__ = this;
var _33027__$1 = this;
return (new cljs.core.async.t_cljs$core$async33025(self__.map_GT_,self__.f,self__.ch,meta33026__$1));
});

cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33027){
var self__ = this;
var _33027__$1 = this;
return self__.meta33026;
});

cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33025.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33026","meta33026",-1324167313,null)], null);
});

cljs.core.async.t_cljs$core$async33025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33025";

cljs.core.async.t_cljs$core$async33025.cljs$lang$ctorPrWriter = (function (this__28005__auto__,writer__28006__auto__,opt__28007__auto__){
return cljs.core._write.call(null,writer__28006__auto__,"cljs.core.async/t_cljs$core$async33025");
});

cljs.core.async.__GT_t_cljs$core$async33025 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33025(map_GT___$1,f__$1,ch__$1,meta33026){
return (new cljs.core.async.t_cljs$core$async33025(map_GT___$1,f__$1,ch__$1,meta33026));
});

}

return (new cljs.core.async.t_cljs$core$async33025(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33031 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33031 = (function (filter_GT_,p,ch,meta33032){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33032 = meta33032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33033,meta33032__$1){
var self__ = this;
var _33033__$1 = this;
return (new cljs.core.async.t_cljs$core$async33031(self__.filter_GT_,self__.p,self__.ch,meta33032__$1));
});

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33033){
var self__ = this;
var _33033__$1 = this;
return self__.meta33032;
});

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33032","meta33032",188783255,null)], null);
});

cljs.core.async.t_cljs$core$async33031.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33031";

cljs.core.async.t_cljs$core$async33031.cljs$lang$ctorPrWriter = (function (this__28005__auto__,writer__28006__auto__,opt__28007__auto__){
return cljs.core._write.call(null,writer__28006__auto__,"cljs.core.async/t_cljs$core$async33031");
});

cljs.core.async.__GT_t_cljs$core$async33031 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33031(filter_GT___$1,p__$1,ch__$1,meta33032){
return (new cljs.core.async.t_cljs$core$async33031(filter_GT___$1,p__$1,ch__$1,meta33032));
});

}

return (new cljs.core.async.t_cljs$core$async33031(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args33034 = [];
var len__28474__auto___33078 = arguments.length;
var i__28475__auto___33079 = (0);
while(true){
if((i__28475__auto___33079 < len__28474__auto___33078)){
args33034.push((arguments[i__28475__auto___33079]));

var G__33080 = (i__28475__auto___33079 + (1));
i__28475__auto___33079 = G__33080;
continue;
} else {
}
break;
}

var G__33036 = args33034.length;
switch (G__33036) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33034.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30810__auto___33082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto___33082,out){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto___33082,out){
return (function (state_33057){
var state_val_33058 = (state_33057[(1)]);
if((state_val_33058 === (7))){
var inst_33053 = (state_33057[(2)]);
var state_33057__$1 = state_33057;
var statearr_33059_33083 = state_33057__$1;
(statearr_33059_33083[(2)] = inst_33053);

(statearr_33059_33083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (1))){
var state_33057__$1 = state_33057;
var statearr_33060_33084 = state_33057__$1;
(statearr_33060_33084[(2)] = null);

(statearr_33060_33084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (4))){
var inst_33039 = (state_33057[(7)]);
var inst_33039__$1 = (state_33057[(2)]);
var inst_33040 = (inst_33039__$1 == null);
var state_33057__$1 = (function (){var statearr_33061 = state_33057;
(statearr_33061[(7)] = inst_33039__$1);

return statearr_33061;
})();
if(cljs.core.truth_(inst_33040)){
var statearr_33062_33085 = state_33057__$1;
(statearr_33062_33085[(1)] = (5));

} else {
var statearr_33063_33086 = state_33057__$1;
(statearr_33063_33086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (6))){
var inst_33039 = (state_33057[(7)]);
var inst_33044 = p.call(null,inst_33039);
var state_33057__$1 = state_33057;
if(cljs.core.truth_(inst_33044)){
var statearr_33064_33087 = state_33057__$1;
(statearr_33064_33087[(1)] = (8));

} else {
var statearr_33065_33088 = state_33057__$1;
(statearr_33065_33088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (3))){
var inst_33055 = (state_33057[(2)]);
var state_33057__$1 = state_33057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33057__$1,inst_33055);
} else {
if((state_val_33058 === (2))){
var state_33057__$1 = state_33057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33057__$1,(4),ch);
} else {
if((state_val_33058 === (11))){
var inst_33047 = (state_33057[(2)]);
var state_33057__$1 = state_33057;
var statearr_33066_33089 = state_33057__$1;
(statearr_33066_33089[(2)] = inst_33047);

(statearr_33066_33089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (9))){
var state_33057__$1 = state_33057;
var statearr_33067_33090 = state_33057__$1;
(statearr_33067_33090[(2)] = null);

(statearr_33067_33090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (5))){
var inst_33042 = cljs.core.async.close_BANG_.call(null,out);
var state_33057__$1 = state_33057;
var statearr_33068_33091 = state_33057__$1;
(statearr_33068_33091[(2)] = inst_33042);

(statearr_33068_33091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (10))){
var inst_33050 = (state_33057[(2)]);
var state_33057__$1 = (function (){var statearr_33069 = state_33057;
(statearr_33069[(8)] = inst_33050);

return statearr_33069;
})();
var statearr_33070_33092 = state_33057__$1;
(statearr_33070_33092[(2)] = null);

(statearr_33070_33092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (8))){
var inst_33039 = (state_33057[(7)]);
var state_33057__$1 = state_33057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33057__$1,(11),out,inst_33039);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto___33082,out))
;
return ((function (switch__30698__auto__,c__30810__auto___33082,out){
return (function() {
var cljs$core$async$state_machine__30699__auto__ = null;
var cljs$core$async$state_machine__30699__auto____0 = (function (){
var statearr_33074 = [null,null,null,null,null,null,null,null,null];
(statearr_33074[(0)] = cljs$core$async$state_machine__30699__auto__);

(statearr_33074[(1)] = (1));

return statearr_33074;
});
var cljs$core$async$state_machine__30699__auto____1 = (function (state_33057){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_33057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e33075){if((e33075 instanceof Object)){
var ex__30702__auto__ = e33075;
var statearr_33076_33093 = state_33057;
(statearr_33076_33093[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33094 = state_33057;
state_33057 = G__33094;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$state_machine__30699__auto__ = function(state_33057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30699__auto____1.call(this,state_33057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30699__auto____0;
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30699__auto____1;
return cljs$core$async$state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto___33082,out))
})();
var state__30812__auto__ = (function (){var statearr_33077 = f__30811__auto__.call(null);
(statearr_33077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___33082);

return statearr_33077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto___33082,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33095 = [];
var len__28474__auto___33098 = arguments.length;
var i__28475__auto___33099 = (0);
while(true){
if((i__28475__auto___33099 < len__28474__auto___33098)){
args33095.push((arguments[i__28475__auto___33099]));

var G__33100 = (i__28475__auto___33099 + (1));
i__28475__auto___33099 = G__33100;
continue;
} else {
}
break;
}

var G__33097 = args33095.length;
switch (G__33097) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33095.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30810__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto__){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto__){
return (function (state_33267){
var state_val_33268 = (state_33267[(1)]);
if((state_val_33268 === (7))){
var inst_33263 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
var statearr_33269_33310 = state_33267__$1;
(statearr_33269_33310[(2)] = inst_33263);

(statearr_33269_33310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (20))){
var inst_33233 = (state_33267[(7)]);
var inst_33244 = (state_33267[(2)]);
var inst_33245 = cljs.core.next.call(null,inst_33233);
var inst_33219 = inst_33245;
var inst_33220 = null;
var inst_33221 = (0);
var inst_33222 = (0);
var state_33267__$1 = (function (){var statearr_33270 = state_33267;
(statearr_33270[(8)] = inst_33221);

(statearr_33270[(9)] = inst_33222);

(statearr_33270[(10)] = inst_33219);

(statearr_33270[(11)] = inst_33220);

(statearr_33270[(12)] = inst_33244);

return statearr_33270;
})();
var statearr_33271_33311 = state_33267__$1;
(statearr_33271_33311[(2)] = null);

(statearr_33271_33311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (1))){
var state_33267__$1 = state_33267;
var statearr_33272_33312 = state_33267__$1;
(statearr_33272_33312[(2)] = null);

(statearr_33272_33312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (4))){
var inst_33208 = (state_33267[(13)]);
var inst_33208__$1 = (state_33267[(2)]);
var inst_33209 = (inst_33208__$1 == null);
var state_33267__$1 = (function (){var statearr_33273 = state_33267;
(statearr_33273[(13)] = inst_33208__$1);

return statearr_33273;
})();
if(cljs.core.truth_(inst_33209)){
var statearr_33274_33313 = state_33267__$1;
(statearr_33274_33313[(1)] = (5));

} else {
var statearr_33275_33314 = state_33267__$1;
(statearr_33275_33314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (15))){
var state_33267__$1 = state_33267;
var statearr_33279_33315 = state_33267__$1;
(statearr_33279_33315[(2)] = null);

(statearr_33279_33315[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (21))){
var state_33267__$1 = state_33267;
var statearr_33280_33316 = state_33267__$1;
(statearr_33280_33316[(2)] = null);

(statearr_33280_33316[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (13))){
var inst_33221 = (state_33267[(8)]);
var inst_33222 = (state_33267[(9)]);
var inst_33219 = (state_33267[(10)]);
var inst_33220 = (state_33267[(11)]);
var inst_33229 = (state_33267[(2)]);
var inst_33230 = (inst_33222 + (1));
var tmp33276 = inst_33221;
var tmp33277 = inst_33219;
var tmp33278 = inst_33220;
var inst_33219__$1 = tmp33277;
var inst_33220__$1 = tmp33278;
var inst_33221__$1 = tmp33276;
var inst_33222__$1 = inst_33230;
var state_33267__$1 = (function (){var statearr_33281 = state_33267;
(statearr_33281[(14)] = inst_33229);

(statearr_33281[(8)] = inst_33221__$1);

(statearr_33281[(9)] = inst_33222__$1);

(statearr_33281[(10)] = inst_33219__$1);

(statearr_33281[(11)] = inst_33220__$1);

return statearr_33281;
})();
var statearr_33282_33317 = state_33267__$1;
(statearr_33282_33317[(2)] = null);

(statearr_33282_33317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (22))){
var state_33267__$1 = state_33267;
var statearr_33283_33318 = state_33267__$1;
(statearr_33283_33318[(2)] = null);

(statearr_33283_33318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (6))){
var inst_33208 = (state_33267[(13)]);
var inst_33217 = f.call(null,inst_33208);
var inst_33218 = cljs.core.seq.call(null,inst_33217);
var inst_33219 = inst_33218;
var inst_33220 = null;
var inst_33221 = (0);
var inst_33222 = (0);
var state_33267__$1 = (function (){var statearr_33284 = state_33267;
(statearr_33284[(8)] = inst_33221);

(statearr_33284[(9)] = inst_33222);

(statearr_33284[(10)] = inst_33219);

(statearr_33284[(11)] = inst_33220);

return statearr_33284;
})();
var statearr_33285_33319 = state_33267__$1;
(statearr_33285_33319[(2)] = null);

(statearr_33285_33319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (17))){
var inst_33233 = (state_33267[(7)]);
var inst_33237 = cljs.core.chunk_first.call(null,inst_33233);
var inst_33238 = cljs.core.chunk_rest.call(null,inst_33233);
var inst_33239 = cljs.core.count.call(null,inst_33237);
var inst_33219 = inst_33238;
var inst_33220 = inst_33237;
var inst_33221 = inst_33239;
var inst_33222 = (0);
var state_33267__$1 = (function (){var statearr_33286 = state_33267;
(statearr_33286[(8)] = inst_33221);

(statearr_33286[(9)] = inst_33222);

(statearr_33286[(10)] = inst_33219);

(statearr_33286[(11)] = inst_33220);

return statearr_33286;
})();
var statearr_33287_33320 = state_33267__$1;
(statearr_33287_33320[(2)] = null);

(statearr_33287_33320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (3))){
var inst_33265 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33267__$1,inst_33265);
} else {
if((state_val_33268 === (12))){
var inst_33253 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
var statearr_33288_33321 = state_33267__$1;
(statearr_33288_33321[(2)] = inst_33253);

(statearr_33288_33321[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (2))){
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33267__$1,(4),in$);
} else {
if((state_val_33268 === (23))){
var inst_33261 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
var statearr_33289_33322 = state_33267__$1;
(statearr_33289_33322[(2)] = inst_33261);

(statearr_33289_33322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (19))){
var inst_33248 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
var statearr_33290_33323 = state_33267__$1;
(statearr_33290_33323[(2)] = inst_33248);

(statearr_33290_33323[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (11))){
var inst_33219 = (state_33267[(10)]);
var inst_33233 = (state_33267[(7)]);
var inst_33233__$1 = cljs.core.seq.call(null,inst_33219);
var state_33267__$1 = (function (){var statearr_33291 = state_33267;
(statearr_33291[(7)] = inst_33233__$1);

return statearr_33291;
})();
if(inst_33233__$1){
var statearr_33292_33324 = state_33267__$1;
(statearr_33292_33324[(1)] = (14));

} else {
var statearr_33293_33325 = state_33267__$1;
(statearr_33293_33325[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (9))){
var inst_33255 = (state_33267[(2)]);
var inst_33256 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33267__$1 = (function (){var statearr_33294 = state_33267;
(statearr_33294[(15)] = inst_33255);

return statearr_33294;
})();
if(cljs.core.truth_(inst_33256)){
var statearr_33295_33326 = state_33267__$1;
(statearr_33295_33326[(1)] = (21));

} else {
var statearr_33296_33327 = state_33267__$1;
(statearr_33296_33327[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (5))){
var inst_33211 = cljs.core.async.close_BANG_.call(null,out);
var state_33267__$1 = state_33267;
var statearr_33297_33328 = state_33267__$1;
(statearr_33297_33328[(2)] = inst_33211);

(statearr_33297_33328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (14))){
var inst_33233 = (state_33267[(7)]);
var inst_33235 = cljs.core.chunked_seq_QMARK_.call(null,inst_33233);
var state_33267__$1 = state_33267;
if(inst_33235){
var statearr_33298_33329 = state_33267__$1;
(statearr_33298_33329[(1)] = (17));

} else {
var statearr_33299_33330 = state_33267__$1;
(statearr_33299_33330[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (16))){
var inst_33251 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
var statearr_33300_33331 = state_33267__$1;
(statearr_33300_33331[(2)] = inst_33251);

(statearr_33300_33331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (10))){
var inst_33222 = (state_33267[(9)]);
var inst_33220 = (state_33267[(11)]);
var inst_33227 = cljs.core._nth.call(null,inst_33220,inst_33222);
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33267__$1,(13),out,inst_33227);
} else {
if((state_val_33268 === (18))){
var inst_33233 = (state_33267[(7)]);
var inst_33242 = cljs.core.first.call(null,inst_33233);
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33267__$1,(20),out,inst_33242);
} else {
if((state_val_33268 === (8))){
var inst_33221 = (state_33267[(8)]);
var inst_33222 = (state_33267[(9)]);
var inst_33224 = (inst_33222 < inst_33221);
var inst_33225 = inst_33224;
var state_33267__$1 = state_33267;
if(cljs.core.truth_(inst_33225)){
var statearr_33301_33332 = state_33267__$1;
(statearr_33301_33332[(1)] = (10));

} else {
var statearr_33302_33333 = state_33267__$1;
(statearr_33302_33333[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto__))
;
return ((function (switch__30698__auto__,c__30810__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30699__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30699__auto____0 = (function (){
var statearr_33306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33306[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30699__auto__);

(statearr_33306[(1)] = (1));

return statearr_33306;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30699__auto____1 = (function (state_33267){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_33267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e33307){if((e33307 instanceof Object)){
var ex__30702__auto__ = e33307;
var statearr_33308_33334 = state_33267;
(statearr_33308_33334[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33335 = state_33267;
state_33267 = G__33335;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30699__auto__ = function(state_33267){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30699__auto____1.call(this,state_33267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30699__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30699__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto__))
})();
var state__30812__auto__ = (function (){var statearr_33309 = f__30811__auto__.call(null);
(statearr_33309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto__);

return statearr_33309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto__))
);

return c__30810__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33336 = [];
var len__28474__auto___33339 = arguments.length;
var i__28475__auto___33340 = (0);
while(true){
if((i__28475__auto___33340 < len__28474__auto___33339)){
args33336.push((arguments[i__28475__auto___33340]));

var G__33341 = (i__28475__auto___33340 + (1));
i__28475__auto___33340 = G__33341;
continue;
} else {
}
break;
}

var G__33338 = args33336.length;
switch (G__33338) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33336.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args33343 = [];
var len__28474__auto___33346 = arguments.length;
var i__28475__auto___33347 = (0);
while(true){
if((i__28475__auto___33347 < len__28474__auto___33346)){
args33343.push((arguments[i__28475__auto___33347]));

var G__33348 = (i__28475__auto___33347 + (1));
i__28475__auto___33347 = G__33348;
continue;
} else {
}
break;
}

var G__33345 = args33343.length;
switch (G__33345) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33343.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args33350 = [];
var len__28474__auto___33401 = arguments.length;
var i__28475__auto___33402 = (0);
while(true){
if((i__28475__auto___33402 < len__28474__auto___33401)){
args33350.push((arguments[i__28475__auto___33402]));

var G__33403 = (i__28475__auto___33402 + (1));
i__28475__auto___33402 = G__33403;
continue;
} else {
}
break;
}

var G__33352 = args33350.length;
switch (G__33352) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33350.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30810__auto___33405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto___33405,out){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto___33405,out){
return (function (state_33376){
var state_val_33377 = (state_33376[(1)]);
if((state_val_33377 === (7))){
var inst_33371 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
var statearr_33378_33406 = state_33376__$1;
(statearr_33378_33406[(2)] = inst_33371);

(statearr_33378_33406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (1))){
var inst_33353 = null;
var state_33376__$1 = (function (){var statearr_33379 = state_33376;
(statearr_33379[(7)] = inst_33353);

return statearr_33379;
})();
var statearr_33380_33407 = state_33376__$1;
(statearr_33380_33407[(2)] = null);

(statearr_33380_33407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (4))){
var inst_33356 = (state_33376[(8)]);
var inst_33356__$1 = (state_33376[(2)]);
var inst_33357 = (inst_33356__$1 == null);
var inst_33358 = cljs.core.not.call(null,inst_33357);
var state_33376__$1 = (function (){var statearr_33381 = state_33376;
(statearr_33381[(8)] = inst_33356__$1);

return statearr_33381;
})();
if(inst_33358){
var statearr_33382_33408 = state_33376__$1;
(statearr_33382_33408[(1)] = (5));

} else {
var statearr_33383_33409 = state_33376__$1;
(statearr_33383_33409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (6))){
var state_33376__$1 = state_33376;
var statearr_33384_33410 = state_33376__$1;
(statearr_33384_33410[(2)] = null);

(statearr_33384_33410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (3))){
var inst_33373 = (state_33376[(2)]);
var inst_33374 = cljs.core.async.close_BANG_.call(null,out);
var state_33376__$1 = (function (){var statearr_33385 = state_33376;
(statearr_33385[(9)] = inst_33373);

return statearr_33385;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33376__$1,inst_33374);
} else {
if((state_val_33377 === (2))){
var state_33376__$1 = state_33376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33376__$1,(4),ch);
} else {
if((state_val_33377 === (11))){
var inst_33356 = (state_33376[(8)]);
var inst_33365 = (state_33376[(2)]);
var inst_33353 = inst_33356;
var state_33376__$1 = (function (){var statearr_33386 = state_33376;
(statearr_33386[(7)] = inst_33353);

(statearr_33386[(10)] = inst_33365);

return statearr_33386;
})();
var statearr_33387_33411 = state_33376__$1;
(statearr_33387_33411[(2)] = null);

(statearr_33387_33411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (9))){
var inst_33356 = (state_33376[(8)]);
var state_33376__$1 = state_33376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33376__$1,(11),out,inst_33356);
} else {
if((state_val_33377 === (5))){
var inst_33356 = (state_33376[(8)]);
var inst_33353 = (state_33376[(7)]);
var inst_33360 = cljs.core._EQ_.call(null,inst_33356,inst_33353);
var state_33376__$1 = state_33376;
if(inst_33360){
var statearr_33389_33412 = state_33376__$1;
(statearr_33389_33412[(1)] = (8));

} else {
var statearr_33390_33413 = state_33376__$1;
(statearr_33390_33413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (10))){
var inst_33368 = (state_33376[(2)]);
var state_33376__$1 = state_33376;
var statearr_33391_33414 = state_33376__$1;
(statearr_33391_33414[(2)] = inst_33368);

(statearr_33391_33414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33377 === (8))){
var inst_33353 = (state_33376[(7)]);
var tmp33388 = inst_33353;
var inst_33353__$1 = tmp33388;
var state_33376__$1 = (function (){var statearr_33392 = state_33376;
(statearr_33392[(7)] = inst_33353__$1);

return statearr_33392;
})();
var statearr_33393_33415 = state_33376__$1;
(statearr_33393_33415[(2)] = null);

(statearr_33393_33415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto___33405,out))
;
return ((function (switch__30698__auto__,c__30810__auto___33405,out){
return (function() {
var cljs$core$async$state_machine__30699__auto__ = null;
var cljs$core$async$state_machine__30699__auto____0 = (function (){
var statearr_33397 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33397[(0)] = cljs$core$async$state_machine__30699__auto__);

(statearr_33397[(1)] = (1));

return statearr_33397;
});
var cljs$core$async$state_machine__30699__auto____1 = (function (state_33376){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_33376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e33398){if((e33398 instanceof Object)){
var ex__30702__auto__ = e33398;
var statearr_33399_33416 = state_33376;
(statearr_33399_33416[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33417 = state_33376;
state_33376 = G__33417;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$state_machine__30699__auto__ = function(state_33376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30699__auto____1.call(this,state_33376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30699__auto____0;
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30699__auto____1;
return cljs$core$async$state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto___33405,out))
})();
var state__30812__auto__ = (function (){var statearr_33400 = f__30811__auto__.call(null);
(statearr_33400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___33405);

return statearr_33400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto___33405,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33418 = [];
var len__28474__auto___33488 = arguments.length;
var i__28475__auto___33489 = (0);
while(true){
if((i__28475__auto___33489 < len__28474__auto___33488)){
args33418.push((arguments[i__28475__auto___33489]));

var G__33490 = (i__28475__auto___33489 + (1));
i__28475__auto___33489 = G__33490;
continue;
} else {
}
break;
}

var G__33420 = args33418.length;
switch (G__33420) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33418.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30810__auto___33492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto___33492,out){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto___33492,out){
return (function (state_33458){
var state_val_33459 = (state_33458[(1)]);
if((state_val_33459 === (7))){
var inst_33454 = (state_33458[(2)]);
var state_33458__$1 = state_33458;
var statearr_33460_33493 = state_33458__$1;
(statearr_33460_33493[(2)] = inst_33454);

(statearr_33460_33493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (1))){
var inst_33421 = (new Array(n));
var inst_33422 = inst_33421;
var inst_33423 = (0);
var state_33458__$1 = (function (){var statearr_33461 = state_33458;
(statearr_33461[(7)] = inst_33422);

(statearr_33461[(8)] = inst_33423);

return statearr_33461;
})();
var statearr_33462_33494 = state_33458__$1;
(statearr_33462_33494[(2)] = null);

(statearr_33462_33494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (4))){
var inst_33426 = (state_33458[(9)]);
var inst_33426__$1 = (state_33458[(2)]);
var inst_33427 = (inst_33426__$1 == null);
var inst_33428 = cljs.core.not.call(null,inst_33427);
var state_33458__$1 = (function (){var statearr_33463 = state_33458;
(statearr_33463[(9)] = inst_33426__$1);

return statearr_33463;
})();
if(inst_33428){
var statearr_33464_33495 = state_33458__$1;
(statearr_33464_33495[(1)] = (5));

} else {
var statearr_33465_33496 = state_33458__$1;
(statearr_33465_33496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (15))){
var inst_33448 = (state_33458[(2)]);
var state_33458__$1 = state_33458;
var statearr_33466_33497 = state_33458__$1;
(statearr_33466_33497[(2)] = inst_33448);

(statearr_33466_33497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (13))){
var state_33458__$1 = state_33458;
var statearr_33467_33498 = state_33458__$1;
(statearr_33467_33498[(2)] = null);

(statearr_33467_33498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (6))){
var inst_33423 = (state_33458[(8)]);
var inst_33444 = (inst_33423 > (0));
var state_33458__$1 = state_33458;
if(cljs.core.truth_(inst_33444)){
var statearr_33468_33499 = state_33458__$1;
(statearr_33468_33499[(1)] = (12));

} else {
var statearr_33469_33500 = state_33458__$1;
(statearr_33469_33500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (3))){
var inst_33456 = (state_33458[(2)]);
var state_33458__$1 = state_33458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33458__$1,inst_33456);
} else {
if((state_val_33459 === (12))){
var inst_33422 = (state_33458[(7)]);
var inst_33446 = cljs.core.vec.call(null,inst_33422);
var state_33458__$1 = state_33458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33458__$1,(15),out,inst_33446);
} else {
if((state_val_33459 === (2))){
var state_33458__$1 = state_33458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33458__$1,(4),ch);
} else {
if((state_val_33459 === (11))){
var inst_33438 = (state_33458[(2)]);
var inst_33439 = (new Array(n));
var inst_33422 = inst_33439;
var inst_33423 = (0);
var state_33458__$1 = (function (){var statearr_33470 = state_33458;
(statearr_33470[(7)] = inst_33422);

(statearr_33470[(10)] = inst_33438);

(statearr_33470[(8)] = inst_33423);

return statearr_33470;
})();
var statearr_33471_33501 = state_33458__$1;
(statearr_33471_33501[(2)] = null);

(statearr_33471_33501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (9))){
var inst_33422 = (state_33458[(7)]);
var inst_33436 = cljs.core.vec.call(null,inst_33422);
var state_33458__$1 = state_33458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33458__$1,(11),out,inst_33436);
} else {
if((state_val_33459 === (5))){
var inst_33426 = (state_33458[(9)]);
var inst_33422 = (state_33458[(7)]);
var inst_33431 = (state_33458[(11)]);
var inst_33423 = (state_33458[(8)]);
var inst_33430 = (inst_33422[inst_33423] = inst_33426);
var inst_33431__$1 = (inst_33423 + (1));
var inst_33432 = (inst_33431__$1 < n);
var state_33458__$1 = (function (){var statearr_33472 = state_33458;
(statearr_33472[(12)] = inst_33430);

(statearr_33472[(11)] = inst_33431__$1);

return statearr_33472;
})();
if(cljs.core.truth_(inst_33432)){
var statearr_33473_33502 = state_33458__$1;
(statearr_33473_33502[(1)] = (8));

} else {
var statearr_33474_33503 = state_33458__$1;
(statearr_33474_33503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (14))){
var inst_33451 = (state_33458[(2)]);
var inst_33452 = cljs.core.async.close_BANG_.call(null,out);
var state_33458__$1 = (function (){var statearr_33476 = state_33458;
(statearr_33476[(13)] = inst_33451);

return statearr_33476;
})();
var statearr_33477_33504 = state_33458__$1;
(statearr_33477_33504[(2)] = inst_33452);

(statearr_33477_33504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (10))){
var inst_33442 = (state_33458[(2)]);
var state_33458__$1 = state_33458;
var statearr_33478_33505 = state_33458__$1;
(statearr_33478_33505[(2)] = inst_33442);

(statearr_33478_33505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33459 === (8))){
var inst_33422 = (state_33458[(7)]);
var inst_33431 = (state_33458[(11)]);
var tmp33475 = inst_33422;
var inst_33422__$1 = tmp33475;
var inst_33423 = inst_33431;
var state_33458__$1 = (function (){var statearr_33479 = state_33458;
(statearr_33479[(7)] = inst_33422__$1);

(statearr_33479[(8)] = inst_33423);

return statearr_33479;
})();
var statearr_33480_33506 = state_33458__$1;
(statearr_33480_33506[(2)] = null);

(statearr_33480_33506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto___33492,out))
;
return ((function (switch__30698__auto__,c__30810__auto___33492,out){
return (function() {
var cljs$core$async$state_machine__30699__auto__ = null;
var cljs$core$async$state_machine__30699__auto____0 = (function (){
var statearr_33484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33484[(0)] = cljs$core$async$state_machine__30699__auto__);

(statearr_33484[(1)] = (1));

return statearr_33484;
});
var cljs$core$async$state_machine__30699__auto____1 = (function (state_33458){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_33458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e33485){if((e33485 instanceof Object)){
var ex__30702__auto__ = e33485;
var statearr_33486_33507 = state_33458;
(statearr_33486_33507[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33508 = state_33458;
state_33458 = G__33508;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$state_machine__30699__auto__ = function(state_33458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30699__auto____1.call(this,state_33458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30699__auto____0;
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30699__auto____1;
return cljs$core$async$state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto___33492,out))
})();
var state__30812__auto__ = (function (){var statearr_33487 = f__30811__auto__.call(null);
(statearr_33487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___33492);

return statearr_33487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto___33492,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33509 = [];
var len__28474__auto___33583 = arguments.length;
var i__28475__auto___33584 = (0);
while(true){
if((i__28475__auto___33584 < len__28474__auto___33583)){
args33509.push((arguments[i__28475__auto___33584]));

var G__33585 = (i__28475__auto___33584 + (1));
i__28475__auto___33584 = G__33585;
continue;
} else {
}
break;
}

var G__33511 = args33509.length;
switch (G__33511) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33509.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30810__auto___33587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30810__auto___33587,out){
return (function (){
var f__30811__auto__ = (function (){var switch__30698__auto__ = ((function (c__30810__auto___33587,out){
return (function (state_33553){
var state_val_33554 = (state_33553[(1)]);
if((state_val_33554 === (7))){
var inst_33549 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33555_33588 = state_33553__$1;
(statearr_33555_33588[(2)] = inst_33549);

(statearr_33555_33588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (1))){
var inst_33512 = [];
var inst_33513 = inst_33512;
var inst_33514 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33553__$1 = (function (){var statearr_33556 = state_33553;
(statearr_33556[(7)] = inst_33514);

(statearr_33556[(8)] = inst_33513);

return statearr_33556;
})();
var statearr_33557_33589 = state_33553__$1;
(statearr_33557_33589[(2)] = null);

(statearr_33557_33589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (4))){
var inst_33517 = (state_33553[(9)]);
var inst_33517__$1 = (state_33553[(2)]);
var inst_33518 = (inst_33517__$1 == null);
var inst_33519 = cljs.core.not.call(null,inst_33518);
var state_33553__$1 = (function (){var statearr_33558 = state_33553;
(statearr_33558[(9)] = inst_33517__$1);

return statearr_33558;
})();
if(inst_33519){
var statearr_33559_33590 = state_33553__$1;
(statearr_33559_33590[(1)] = (5));

} else {
var statearr_33560_33591 = state_33553__$1;
(statearr_33560_33591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (15))){
var inst_33543 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33561_33592 = state_33553__$1;
(statearr_33561_33592[(2)] = inst_33543);

(statearr_33561_33592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (13))){
var state_33553__$1 = state_33553;
var statearr_33562_33593 = state_33553__$1;
(statearr_33562_33593[(2)] = null);

(statearr_33562_33593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (6))){
var inst_33513 = (state_33553[(8)]);
var inst_33538 = inst_33513.length;
var inst_33539 = (inst_33538 > (0));
var state_33553__$1 = state_33553;
if(cljs.core.truth_(inst_33539)){
var statearr_33563_33594 = state_33553__$1;
(statearr_33563_33594[(1)] = (12));

} else {
var statearr_33564_33595 = state_33553__$1;
(statearr_33564_33595[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (3))){
var inst_33551 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33553__$1,inst_33551);
} else {
if((state_val_33554 === (12))){
var inst_33513 = (state_33553[(8)]);
var inst_33541 = cljs.core.vec.call(null,inst_33513);
var state_33553__$1 = state_33553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33553__$1,(15),out,inst_33541);
} else {
if((state_val_33554 === (2))){
var state_33553__$1 = state_33553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33553__$1,(4),ch);
} else {
if((state_val_33554 === (11))){
var inst_33517 = (state_33553[(9)]);
var inst_33521 = (state_33553[(10)]);
var inst_33531 = (state_33553[(2)]);
var inst_33532 = [];
var inst_33533 = inst_33532.push(inst_33517);
var inst_33513 = inst_33532;
var inst_33514 = inst_33521;
var state_33553__$1 = (function (){var statearr_33565 = state_33553;
(statearr_33565[(7)] = inst_33514);

(statearr_33565[(11)] = inst_33531);

(statearr_33565[(8)] = inst_33513);

(statearr_33565[(12)] = inst_33533);

return statearr_33565;
})();
var statearr_33566_33596 = state_33553__$1;
(statearr_33566_33596[(2)] = null);

(statearr_33566_33596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (9))){
var inst_33513 = (state_33553[(8)]);
var inst_33529 = cljs.core.vec.call(null,inst_33513);
var state_33553__$1 = state_33553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33553__$1,(11),out,inst_33529);
} else {
if((state_val_33554 === (5))){
var inst_33514 = (state_33553[(7)]);
var inst_33517 = (state_33553[(9)]);
var inst_33521 = (state_33553[(10)]);
var inst_33521__$1 = f.call(null,inst_33517);
var inst_33522 = cljs.core._EQ_.call(null,inst_33521__$1,inst_33514);
var inst_33523 = cljs.core.keyword_identical_QMARK_.call(null,inst_33514,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33524 = (inst_33522) || (inst_33523);
var state_33553__$1 = (function (){var statearr_33567 = state_33553;
(statearr_33567[(10)] = inst_33521__$1);

return statearr_33567;
})();
if(cljs.core.truth_(inst_33524)){
var statearr_33568_33597 = state_33553__$1;
(statearr_33568_33597[(1)] = (8));

} else {
var statearr_33569_33598 = state_33553__$1;
(statearr_33569_33598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (14))){
var inst_33546 = (state_33553[(2)]);
var inst_33547 = cljs.core.async.close_BANG_.call(null,out);
var state_33553__$1 = (function (){var statearr_33571 = state_33553;
(statearr_33571[(13)] = inst_33546);

return statearr_33571;
})();
var statearr_33572_33599 = state_33553__$1;
(statearr_33572_33599[(2)] = inst_33547);

(statearr_33572_33599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (10))){
var inst_33536 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33573_33600 = state_33553__$1;
(statearr_33573_33600[(2)] = inst_33536);

(statearr_33573_33600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (8))){
var inst_33513 = (state_33553[(8)]);
var inst_33517 = (state_33553[(9)]);
var inst_33521 = (state_33553[(10)]);
var inst_33526 = inst_33513.push(inst_33517);
var tmp33570 = inst_33513;
var inst_33513__$1 = tmp33570;
var inst_33514 = inst_33521;
var state_33553__$1 = (function (){var statearr_33574 = state_33553;
(statearr_33574[(7)] = inst_33514);

(statearr_33574[(8)] = inst_33513__$1);

(statearr_33574[(14)] = inst_33526);

return statearr_33574;
})();
var statearr_33575_33601 = state_33553__$1;
(statearr_33575_33601[(2)] = null);

(statearr_33575_33601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30810__auto___33587,out))
;
return ((function (switch__30698__auto__,c__30810__auto___33587,out){
return (function() {
var cljs$core$async$state_machine__30699__auto__ = null;
var cljs$core$async$state_machine__30699__auto____0 = (function (){
var statearr_33579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33579[(0)] = cljs$core$async$state_machine__30699__auto__);

(statearr_33579[(1)] = (1));

return statearr_33579;
});
var cljs$core$async$state_machine__30699__auto____1 = (function (state_33553){
while(true){
var ret_value__30700__auto__ = (function (){try{while(true){
var result__30701__auto__ = switch__30698__auto__.call(null,state_33553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30701__auto__;
}
break;
}
}catch (e33580){if((e33580 instanceof Object)){
var ex__30702__auto__ = e33580;
var statearr_33581_33602 = state_33553;
(statearr_33581_33602[(5)] = ex__30702__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30700__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33603 = state_33553;
state_33553 = G__33603;
continue;
} else {
return ret_value__30700__auto__;
}
break;
}
});
cljs$core$async$state_machine__30699__auto__ = function(state_33553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30699__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30699__auto____1.call(this,state_33553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30699__auto____0;
cljs$core$async$state_machine__30699__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30699__auto____1;
return cljs$core$async$state_machine__30699__auto__;
})()
;})(switch__30698__auto__,c__30810__auto___33587,out))
})();
var state__30812__auto__ = (function (){var statearr_33582 = f__30811__auto__.call(null);
(statearr_33582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30810__auto___33587);

return statearr_33582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30812__auto__);
});})(c__30810__auto___33587,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1479712002388