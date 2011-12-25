goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2422 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2422))
{return or__3548__auto____2422;
} else
{var or__3548__auto____2423 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2423))
{return or__3548__auto____2423;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2424 = coll;

if(cljs.core.truth_(and__3546__auto____2424))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2424;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2425 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2425))
{return or__3548__auto____2425;
} else
{var or__3548__auto____2426 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2426))
{return or__3548__auto____2426;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2427 = coll;

if(cljs.core.truth_(and__3546__auto____2427))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2427;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2428 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2428))
{return or__3548__auto____2428;
} else
{var or__3548__auto____2429 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2429))
{return or__3548__auto____2429;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2430 = coll;

if(cljs.core.truth_(and__3546__auto____2430))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2430;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2431 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2431))
{return or__3548__auto____2431;
} else
{var or__3548__auto____2432 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2432))
{return or__3548__auto____2432;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2439 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2433 = coll;

if(cljs.core.truth_(and__3546__auto____2433))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2433;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2434 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2434))
{return or__3548__auto____2434;
} else
{var or__3548__auto____2435 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2435))
{return or__3548__auto____2435;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2440 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2436 = coll;

if(cljs.core.truth_(and__3546__auto____2436))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2436;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2437 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2437))
{return or__3548__auto____2437;
} else
{var or__3548__auto____2438 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2438))
{return or__3548__auto____2438;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2439.call(this,coll,n);
case  3 :
return _nth__2440.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2442 = coll;

if(cljs.core.truth_(and__3546__auto____2442))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2442;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2443 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2443))
{return or__3548__auto____2443;
} else
{var or__3548__auto____2444 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2444))
{return or__3548__auto____2444;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2445 = coll;

if(cljs.core.truth_(and__3546__auto____2445))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2445;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2446 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2446))
{return or__3548__auto____2446;
} else
{var or__3548__auto____2447 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2447))
{return or__3548__auto____2447;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2454 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2448 = o;

if(cljs.core.truth_(and__3546__auto____2448))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2448;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2449 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2449))
{return or__3548__auto____2449;
} else
{var or__3548__auto____2450 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2450))
{return or__3548__auto____2450;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2455 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2451 = o;

if(cljs.core.truth_(and__3546__auto____2451))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2451;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2452 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2452))
{return or__3548__auto____2452;
} else
{var or__3548__auto____2453 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2453))
{return or__3548__auto____2453;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2454.call(this,o,k);
case  3 :
return _lookup__2455.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2457 = coll;

if(cljs.core.truth_(and__3546__auto____2457))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2457;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2458 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2458))
{return or__3548__auto____2458;
} else
{var or__3548__auto____2459 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2459))
{return or__3548__auto____2459;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2460 = coll;

if(cljs.core.truth_(and__3546__auto____2460))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2460;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2461 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2461))
{return or__3548__auto____2461;
} else
{var or__3548__auto____2462 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2462))
{return or__3548__auto____2462;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2463 = coll;

if(cljs.core.truth_(and__3546__auto____2463))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2463;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2464 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2464))
{return or__3548__auto____2464;
} else
{var or__3548__auto____2465 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2465))
{return or__3548__auto____2465;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2466 = coll;

if(cljs.core.truth_(and__3546__auto____2466))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2466;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2467 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2467))
{return or__3548__auto____2467;
} else
{var or__3548__auto____2468 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2468))
{return or__3548__auto____2468;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2469 = coll;

if(cljs.core.truth_(and__3546__auto____2469))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2469;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2470 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2470))
{return or__3548__auto____2470;
} else
{var or__3548__auto____2471 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2471))
{return or__3548__auto____2471;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2472 = coll;

if(cljs.core.truth_(and__3546__auto____2472))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2472;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2473 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2473))
{return or__3548__auto____2473;
} else
{var or__3548__auto____2474 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2474))
{return or__3548__auto____2474;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2475 = coll;

if(cljs.core.truth_(and__3546__auto____2475))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2475;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2476 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2476))
{return or__3548__auto____2476;
} else
{var or__3548__auto____2477 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2477))
{return or__3548__auto____2477;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2478 = o;

if(cljs.core.truth_(and__3546__auto____2478))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2478;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2479 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2479))
{return or__3548__auto____2479;
} else
{var or__3548__auto____2480 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2480))
{return or__3548__auto____2480;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2481 = o;

if(cljs.core.truth_(and__3546__auto____2481))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2481;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2482 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2482))
{return or__3548__auto____2482;
} else
{var or__3548__auto____2483 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2483))
{return or__3548__auto____2483;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2484 = o;

if(cljs.core.truth_(and__3546__auto____2484))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2484;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2485 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2485))
{return or__3548__auto____2485;
} else
{var or__3548__auto____2486 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2486))
{return or__3548__auto____2486;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2487 = o;

if(cljs.core.truth_(and__3546__auto____2487))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2487;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2488 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2488))
{return or__3548__auto____2488;
} else
{var or__3548__auto____2489 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2489))
{return or__3548__auto____2489;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2496 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2490 = coll;

if(cljs.core.truth_(and__3546__auto____2490))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2490;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2491 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2491))
{return or__3548__auto____2491;
} else
{var or__3548__auto____2492 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2492))
{return or__3548__auto____2492;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2497 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2493 = coll;

if(cljs.core.truth_(and__3546__auto____2493))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2493;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2494 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2494))
{return or__3548__auto____2494;
} else
{var or__3548__auto____2495 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2495))
{return or__3548__auto____2495;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2496.call(this,coll,f);
case  3 :
return _reduce__2497.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2499 = o;

if(cljs.core.truth_(and__3546__auto____2499))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2499;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2500 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2500))
{return or__3548__auto____2500;
} else
{var or__3548__auto____2501 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2501))
{return or__3548__auto____2501;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2502 = o;

if(cljs.core.truth_(and__3546__auto____2502))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2502;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2503 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2503))
{return or__3548__auto____2503;
} else
{var or__3548__auto____2504 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2504))
{return or__3548__auto____2504;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2505 = o;

if(cljs.core.truth_(and__3546__auto____2505))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2505;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2506 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2506))
{return or__3548__auto____2506;
} else
{var or__3548__auto____2507 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2507))
{return or__3548__auto____2507;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2508 = o;

if(cljs.core.truth_(and__3546__auto____2508))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2508;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2509 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2509))
{return or__3548__auto____2509;
} else
{var or__3548__auto____2510 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2510))
{return or__3548__auto____2510;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2511 = d;

if(cljs.core.truth_(and__3546__auto____2511))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2511;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2512 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2512))
{return or__3548__auto____2512;
} else
{var or__3548__auto____2513 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2513))
{return or__3548__auto____2513;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2514 = this$;

if(cljs.core.truth_(and__3546__auto____2514))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2514;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2515 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2515))
{return or__3548__auto____2515;
} else
{var or__3548__auto____2516 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2516))
{return or__3548__auto____2516;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2517 = this$;

if(cljs.core.truth_(and__3546__auto____2517))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2517;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2518 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2518))
{return or__3548__auto____2518;
} else
{var or__3548__auto____2519 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2519))
{return or__3548__auto____2519;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2520 = this$;

if(cljs.core.truth_(and__3546__auto____2520))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2520;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2521 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2521))
{return or__3548__auto____2521;
} else
{var or__3548__auto____2522 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2522))
{return or__3548__auto____2522;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2523 = null;
var G__2523__2524 = (function (o,k){
return null;
});
var G__2523__2525 = (function (o,k,not_found){
return not_found;
});
G__2523 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2523__2524.call(this,o,k);
case  3 :
return G__2523__2525.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2523;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2527 = null;
var G__2527__2528 = (function (_,f){
return f.call(null);
});
var G__2527__2529 = (function (_,f,start){
return start;
});
G__2527 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2527__2528.call(this,_,f);
case  3 :
return G__2527__2529.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2527;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2531 = null;
var G__2531__2532 = (function (_,n){
return null;
});
var G__2531__2533 = (function (_,n,not_found){
return not_found;
});
G__2531 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2531__2532.call(this,_,n);
case  3 :
return G__2531__2533.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2531;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2541 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2535 = cljs.core._nth.call(null,cicoll,0);
var n__2536 = 1;

while(true){
if(cljs.core.truth_((n__2536 < cljs.core._count.call(null,cicoll))))
{{
var G__2545 = f.call(null,val__2535,cljs.core._nth.call(null,cicoll,n__2536));
var G__2546 = (n__2536 + 1);
val__2535 = G__2545;
n__2536 = G__2546;
continue;
}
} else
{return val__2535;
}
break;
}
}
});
var ci_reduce__2542 = (function (cicoll,f,val){
var val__2537 = val;
var n__2538 = 0;

while(true){
if(cljs.core.truth_((n__2538 < cljs.core._count.call(null,cicoll))))
{{
var G__2547 = f.call(null,val__2537,cljs.core._nth.call(null,cicoll,n__2538));
var G__2548 = (n__2538 + 1);
val__2537 = G__2547;
n__2538 = G__2548;
continue;
}
} else
{return val__2537;
}
break;
}
});
var ci_reduce__2543 = (function (cicoll,f,val,idx){
var val__2539 = val;
var n__2540 = idx;

while(true){
if(cljs.core.truth_((n__2540 < cljs.core._count.call(null,cicoll))))
{{
var G__2549 = f.call(null,val__2539,cljs.core._nth.call(null,cicoll,n__2540));
var G__2550 = (n__2540 + 1);
val__2539 = G__2549;
n__2540 = G__2550;
continue;
}
} else
{return val__2539;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2541.call(this,cicoll,f);
case  3 :
return ci_reduce__2542.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2543.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2551 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2564 = null;
var G__2564__2565 = (function (coll,f){
var this__2552 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2552.a[this__2552.i]),(this__2552.i + 1));
});
var G__2564__2566 = (function (coll,f,start){
var this__2553 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2553.i);
});
G__2564 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2564__2565.call(this,coll,f);
case  3 :
return G__2564__2566.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2564;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2554 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2555 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2568 = null;
var G__2568__2569 = (function (coll,n){
var this__2556 = this;
var i__2557 = (n + this__2556.i);

if(cljs.core.truth_((i__2557 < this__2556.a.length)))
{return (this__2556.a[i__2557]);
} else
{return null;
}
});
var G__2568__2570 = (function (coll,n,not_found){
var this__2558 = this;
var i__2559 = (n + this__2558.i);

if(cljs.core.truth_((i__2559 < this__2558.a.length)))
{return (this__2558.a[i__2559]);
} else
{return not_found;
}
});
G__2568 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2568__2569.call(this,coll,n);
case  3 :
return G__2568__2570.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2568;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2560 = this;
return (this__2560.a.length - this__2560.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2561 = this;
return (this__2561.a[this__2561.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2562 = this;
if(cljs.core.truth_(((this__2562.i + 1) < this__2562.a.length)))
{return (new cljs.core.IndexedSeq(this__2562.a,(this__2562.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2563 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2572 = null;
var G__2572__2573 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2572__2574 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2572 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2572__2573.call(this,array,f);
case  3 :
return G__2572__2574.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2572;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2576 = null;
var G__2576__2577 = (function (array,k){
return (array[k]);
});
var G__2576__2578 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2576 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2576__2577.call(this,array,k);
case  3 :
return G__2576__2578.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2576;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2580 = null;
var G__2580__2581 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2580__2582 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2580 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2580__2581.call(this,array,n);
case  3 :
return G__2580__2582.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2580;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____2584 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2584))
{var s__2585 = temp__3698__auto____2584;

return cljs.core._first.call(null,s__2585);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2586 = cljs.core.next.call(null,s);
s = G__2586;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2587 = cljs.core.seq.call(null,x);
var n__2588 = 0;

while(true){
if(cljs.core.truth_(s__2587))
{{
var G__2589 = cljs.core.next.call(null,s__2587);
var G__2590 = (n__2588 + 1);
s__2587 = G__2589;
n__2588 = G__2590;
continue;
}
} else
{return n__2588;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2591 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2592 = (function() { 
var G__2594__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2595 = conj.call(null,coll,x);
var G__2596 = cljs.core.first.call(null,xs);
var G__2597 = cljs.core.next.call(null,xs);
coll = G__2595;
x = G__2596;
xs = G__2597;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2594 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2594__delegate.call(this, coll, x, xs);
};
G__2594.cljs$lang$maxFixedArity = 2;
G__2594.cljs$lang$applyTo = (function (arglist__2598){
var coll = cljs.core.first(arglist__2598);
var x = cljs.core.first(cljs.core.next(arglist__2598));
var xs = cljs.core.rest(cljs.core.next(arglist__2598));
return G__2594__delegate.call(this, coll, x, xs);
});
return G__2594;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2591.call(this,coll,x);
default:
return conj__2592.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2592.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2599 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__2600 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2599.call(this,coll,n);
case  3 :
return nth__2600.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2602 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2603 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2602.call(this,o,k);
case  3 :
return get__2603.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2606 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2607 = (function() { 
var G__2609__delegate = function (coll,k,v,kvs){
while(true){
var ret__2605 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2610 = ret__2605;
var G__2611 = cljs.core.first.call(null,kvs);
var G__2612 = cljs.core.second.call(null,kvs);
var G__2613 = cljs.core.nnext.call(null,kvs);
coll = G__2610;
k = G__2611;
v = G__2612;
kvs = G__2613;
continue;
}
} else
{return ret__2605;
}
break;
}
};
var G__2609 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2609__delegate.call(this, coll, k, v, kvs);
};
G__2609.cljs$lang$maxFixedArity = 3;
G__2609.cljs$lang$applyTo = (function (arglist__2614){
var coll = cljs.core.first(arglist__2614);
var k = cljs.core.first(cljs.core.next(arglist__2614));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2614)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2614)));
return G__2609__delegate.call(this, coll, k, v, kvs);
});
return G__2609;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2606.call(this,coll,k,v);
default:
return assoc__2607.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2607.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2616 = (function (coll){
return coll;
});
var dissoc__2617 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2618 = (function() { 
var G__2620__delegate = function (coll,k,ks){
while(true){
var ret__2615 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2621 = ret__2615;
var G__2622 = cljs.core.first.call(null,ks);
var G__2623 = cljs.core.next.call(null,ks);
coll = G__2621;
k = G__2622;
ks = G__2623;
continue;
}
} else
{return ret__2615;
}
break;
}
};
var G__2620 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2620__delegate.call(this, coll, k, ks);
};
G__2620.cljs$lang$maxFixedArity = 2;
G__2620.cljs$lang$applyTo = (function (arglist__2624){
var coll = cljs.core.first(arglist__2624);
var k = cljs.core.first(cljs.core.next(arglist__2624));
var ks = cljs.core.rest(cljs.core.next(arglist__2624));
return G__2620__delegate.call(this, coll, k, ks);
});
return G__2620;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2616.call(this,coll);
case  2 :
return dissoc__2617.call(this,coll,k);
default:
return dissoc__2618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2618.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__319__auto____2625 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2626 = x__319__auto____2625;

if(cljs.core.truth_(and__3546__auto____2626))
{var and__3546__auto____2627 = x__319__auto____2625.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2627))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2625));
} else
{return and__3546__auto____2627;
}
} else
{return and__3546__auto____2626;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__319__auto____2625);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2629 = (function (coll){
return coll;
});
var disj__2630 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2631 = (function() { 
var G__2633__delegate = function (coll,k,ks){
while(true){
var ret__2628 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2634 = ret__2628;
var G__2635 = cljs.core.first.call(null,ks);
var G__2636 = cljs.core.next.call(null,ks);
coll = G__2634;
k = G__2635;
ks = G__2636;
continue;
}
} else
{return ret__2628;
}
break;
}
};
var G__2633 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2633__delegate.call(this, coll, k, ks);
};
G__2633.cljs$lang$maxFixedArity = 2;
G__2633.cljs$lang$applyTo = (function (arglist__2637){
var coll = cljs.core.first(arglist__2637);
var k = cljs.core.first(cljs.core.next(arglist__2637));
var ks = cljs.core.rest(cljs.core.next(arglist__2637));
return G__2633__delegate.call(this, coll, k, ks);
});
return G__2633;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2629.call(this,coll);
case  2 :
return disj__2630.call(this,coll,k);
default:
return disj__2631.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2631.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__319__auto____2638 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2639 = x__319__auto____2638;

if(cljs.core.truth_(and__3546__auto____2639))
{var and__3546__auto____2640 = x__319__auto____2638.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2640))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2638));
} else
{return and__3546__auto____2640;
}
} else
{return and__3546__auto____2639;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__319__auto____2638);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__319__auto____2641 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2642 = x__319__auto____2641;

if(cljs.core.truth_(and__3546__auto____2642))
{var and__3546__auto____2643 = x__319__auto____2641.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2643))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2641));
} else
{return and__3546__auto____2643;
}
} else
{return and__3546__auto____2642;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__319__auto____2641);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__319__auto____2644 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2645 = x__319__auto____2644;

if(cljs.core.truth_(and__3546__auto____2645))
{var and__3546__auto____2646 = x__319__auto____2644.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2646))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2644));
} else
{return and__3546__auto____2646;
}
} else
{return and__3546__auto____2645;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__319__auto____2644);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__319__auto____2647 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2648 = x__319__auto____2647;

if(cljs.core.truth_(and__3546__auto____2648))
{var and__3546__auto____2649 = x__319__auto____2647.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2649))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2647));
} else
{return and__3546__auto____2649;
}
} else
{return and__3546__auto____2648;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__319__auto____2647);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__319__auto____2650 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2651 = x__319__auto____2650;

if(cljs.core.truth_(and__3546__auto____2651))
{var and__3546__auto____2652 = x__319__auto____2650.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2652))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2650));
} else
{return and__3546__auto____2652;
}
} else
{return and__3546__auto____2651;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__319__auto____2650);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__319__auto____2653 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2654 = x__319__auto____2653;

if(cljs.core.truth_(and__3546__auto____2654))
{var and__3546__auto____2655 = x__319__auto____2653.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2655))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2653));
} else
{return and__3546__auto____2655;
}
} else
{return and__3546__auto____2654;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__319__auto____2653);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__319__auto____2656 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2657 = x__319__auto____2656;

if(cljs.core.truth_(and__3546__auto____2657))
{var and__3546__auto____2658 = x__319__auto____2656.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2658))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2656));
} else
{return and__3546__auto____2658;
}
} else
{return and__3546__auto____2657;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__319__auto____2656);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2659 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2659.push(key);
}));
return keys__2659;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__319__auto____2660 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2661 = x__319__auto____2660;

if(cljs.core.truth_(and__3546__auto____2661))
{var and__3546__auto____2662 = x__319__auto____2660.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2662))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2660));
} else
{return and__3546__auto____2662;
}
} else
{return and__3546__auto____2661;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__319__auto____2660);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____2663 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2663))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2664 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2664))
{return or__3548__auto____2664;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2663;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2665 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2665))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2665;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2666 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2666))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2666;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____2667 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2667))
{return (n == n.toFixed());
} else
{return and__3546__auto____2667;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2668 = coll;

if(cljs.core.truth_(and__3546__auto____2668))
{var and__3546__auto____2669 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2669))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2669;
}
} else
{return and__3546__auto____2668;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2674 = (function (x){
return true;
});
var distinct_QMARK___2675 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2676 = (function() { 
var G__2678__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2670 = cljs.core.set([y,x]);
var xs__2671 = more;

while(true){
var x__2672 = cljs.core.first.call(null,xs__2671);
var etc__2673 = cljs.core.next.call(null,xs__2671);

if(cljs.core.truth_(xs__2671))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2670,x__2672)))
{return false;
} else
{{
var G__2679 = cljs.core.conj.call(null,s__2670,x__2672);
var G__2680 = etc__2673;
s__2670 = G__2679;
xs__2671 = G__2680;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2678 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2678__delegate.call(this, x, y, more);
};
G__2678.cljs$lang$maxFixedArity = 2;
G__2678.cljs$lang$applyTo = (function (arglist__2681){
var x = cljs.core.first(arglist__2681);
var y = cljs.core.first(cljs.core.next(arglist__2681));
var more = cljs.core.rest(cljs.core.next(arglist__2681));
return G__2678__delegate.call(this, x, y, more);
});
return G__2678;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2674.call(this,x);
case  2 :
return distinct_QMARK___2675.call(this,x,y);
default:
return distinct_QMARK___2676.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2676.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2682 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2682)))
{return r__2682;
} else
{if(cljs.core.truth_(r__2682))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2684 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2685 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2683 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2683,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2683);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2684.call(this,comp);
case  2 :
return sort__2685.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2687 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2688 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2687.call(this,keyfn,comp);
case  3 :
return sort_by__2688.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2690 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2691 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2690.call(this,f,val);
case  3 :
return reduce__2691.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2697 = (function (f,coll){
var temp__3695__auto____2693 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2693))
{var s__2694 = temp__3695__auto____2693;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2694),cljs.core.next.call(null,s__2694));
} else
{return f.call(null);
}
});
var seq_reduce__2698 = (function (f,val,coll){
var val__2695 = val;
var coll__2696 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2696))
{{
var G__2700 = f.call(null,val__2695,cljs.core.first.call(null,coll__2696));
var G__2701 = cljs.core.next.call(null,coll__2696);
val__2695 = G__2700;
coll__2696 = G__2701;
continue;
}
} else
{return val__2695;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2697.call(this,f,val);
case  3 :
return seq_reduce__2698.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2702 = null;
var G__2702__2703 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2702__2704 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2702 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2702__2703.call(this,coll,f);
case  3 :
return G__2702__2704.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2702;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2706 = (function (){
return 0;
});
var _PLUS___2707 = (function (x){
return x;
});
var _PLUS___2708 = (function (x,y){
return (x + y);
});
var _PLUS___2709 = (function() { 
var G__2711__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2711 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2711__delegate.call(this, x, y, more);
};
G__2711.cljs$lang$maxFixedArity = 2;
G__2711.cljs$lang$applyTo = (function (arglist__2712){
var x = cljs.core.first(arglist__2712);
var y = cljs.core.first(cljs.core.next(arglist__2712));
var more = cljs.core.rest(cljs.core.next(arglist__2712));
return G__2711__delegate.call(this, x, y, more);
});
return G__2711;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2706.call(this);
case  1 :
return _PLUS___2707.call(this,x);
case  2 :
return _PLUS___2708.call(this,x,y);
default:
return _PLUS___2709.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2709.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2713 = (function (x){
return (- x);
});
var ___2714 = (function (x,y){
return (x - y);
});
var ___2715 = (function() { 
var G__2717__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2717 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2717__delegate.call(this, x, y, more);
};
G__2717.cljs$lang$maxFixedArity = 2;
G__2717.cljs$lang$applyTo = (function (arglist__2718){
var x = cljs.core.first(arglist__2718);
var y = cljs.core.first(cljs.core.next(arglist__2718));
var more = cljs.core.rest(cljs.core.next(arglist__2718));
return G__2717__delegate.call(this, x, y, more);
});
return G__2717;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2713.call(this,x);
case  2 :
return ___2714.call(this,x,y);
default:
return ___2715.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2715.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2719 = (function (){
return 1;
});
var _STAR___2720 = (function (x){
return x;
});
var _STAR___2721 = (function (x,y){
return (x * y);
});
var _STAR___2722 = (function() { 
var G__2724__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2724 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2724__delegate.call(this, x, y, more);
};
G__2724.cljs$lang$maxFixedArity = 2;
G__2724.cljs$lang$applyTo = (function (arglist__2725){
var x = cljs.core.first(arglist__2725);
var y = cljs.core.first(cljs.core.next(arglist__2725));
var more = cljs.core.rest(cljs.core.next(arglist__2725));
return G__2724__delegate.call(this, x, y, more);
});
return G__2724;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2719.call(this);
case  1 :
return _STAR___2720.call(this,x);
case  2 :
return _STAR___2721.call(this,x,y);
default:
return _STAR___2722.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2722.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2726 = (function (x){
return (1 / x);
});
var _SLASH___2727 = (function (x,y){
return (x / y);
});
var _SLASH___2728 = (function() { 
var G__2730__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2730 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2730__delegate.call(this, x, y, more);
};
G__2730.cljs$lang$maxFixedArity = 2;
G__2730.cljs$lang$applyTo = (function (arglist__2731){
var x = cljs.core.first(arglist__2731);
var y = cljs.core.first(cljs.core.next(arglist__2731));
var more = cljs.core.rest(cljs.core.next(arglist__2731));
return G__2730__delegate.call(this, x, y, more);
});
return G__2730;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2726.call(this,x);
case  2 :
return _SLASH___2727.call(this,x,y);
default:
return _SLASH___2728.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2728.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2732 = (function (x){
return true;
});
var _LT___2733 = (function (x,y){
return (x < y);
});
var _LT___2734 = (function() { 
var G__2736__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2737 = y;
var G__2738 = cljs.core.first.call(null,more);
var G__2739 = cljs.core.next.call(null,more);
x = G__2737;
y = G__2738;
more = G__2739;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2736 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2736__delegate.call(this, x, y, more);
};
G__2736.cljs$lang$maxFixedArity = 2;
G__2736.cljs$lang$applyTo = (function (arglist__2740){
var x = cljs.core.first(arglist__2740);
var y = cljs.core.first(cljs.core.next(arglist__2740));
var more = cljs.core.rest(cljs.core.next(arglist__2740));
return G__2736__delegate.call(this, x, y, more);
});
return G__2736;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2732.call(this,x);
case  2 :
return _LT___2733.call(this,x,y);
default:
return _LT___2734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2734.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2741 = (function (x){
return true;
});
var _LT__EQ___2742 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2743 = (function() { 
var G__2745__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2746 = y;
var G__2747 = cljs.core.first.call(null,more);
var G__2748 = cljs.core.next.call(null,more);
x = G__2746;
y = G__2747;
more = G__2748;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2745 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2745__delegate.call(this, x, y, more);
};
G__2745.cljs$lang$maxFixedArity = 2;
G__2745.cljs$lang$applyTo = (function (arglist__2749){
var x = cljs.core.first(arglist__2749);
var y = cljs.core.first(cljs.core.next(arglist__2749));
var more = cljs.core.rest(cljs.core.next(arglist__2749));
return G__2745__delegate.call(this, x, y, more);
});
return G__2745;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2741.call(this,x);
case  2 :
return _LT__EQ___2742.call(this,x,y);
default:
return _LT__EQ___2743.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2743.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2750 = (function (x){
return true;
});
var _GT___2751 = (function (x,y){
return (x > y);
});
var _GT___2752 = (function() { 
var G__2754__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2755 = y;
var G__2756 = cljs.core.first.call(null,more);
var G__2757 = cljs.core.next.call(null,more);
x = G__2755;
y = G__2756;
more = G__2757;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2754 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2754__delegate.call(this, x, y, more);
};
G__2754.cljs$lang$maxFixedArity = 2;
G__2754.cljs$lang$applyTo = (function (arglist__2758){
var x = cljs.core.first(arglist__2758);
var y = cljs.core.first(cljs.core.next(arglist__2758));
var more = cljs.core.rest(cljs.core.next(arglist__2758));
return G__2754__delegate.call(this, x, y, more);
});
return G__2754;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2750.call(this,x);
case  2 :
return _GT___2751.call(this,x,y);
default:
return _GT___2752.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2752.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2759 = (function (x){
return true;
});
var _GT__EQ___2760 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2761 = (function() { 
var G__2763__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2764 = y;
var G__2765 = cljs.core.first.call(null,more);
var G__2766 = cljs.core.next.call(null,more);
x = G__2764;
y = G__2765;
more = G__2766;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2763 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2763__delegate.call(this, x, y, more);
};
G__2763.cljs$lang$maxFixedArity = 2;
G__2763.cljs$lang$applyTo = (function (arglist__2767){
var x = cljs.core.first(arglist__2767);
var y = cljs.core.first(cljs.core.next(arglist__2767));
var more = cljs.core.rest(cljs.core.next(arglist__2767));
return G__2763__delegate.call(this, x, y, more);
});
return G__2763;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2759.call(this,x);
case  2 :
return _GT__EQ___2760.call(this,x,y);
default:
return _GT__EQ___2761.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2761.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2768 = (function (x){
return x;
});
var max__2769 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2770 = (function() { 
var G__2772__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2772 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2772__delegate.call(this, x, y, more);
};
G__2772.cljs$lang$maxFixedArity = 2;
G__2772.cljs$lang$applyTo = (function (arglist__2773){
var x = cljs.core.first(arglist__2773);
var y = cljs.core.first(cljs.core.next(arglist__2773));
var more = cljs.core.rest(cljs.core.next(arglist__2773));
return G__2772__delegate.call(this, x, y, more);
});
return G__2772;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2768.call(this,x);
case  2 :
return max__2769.call(this,x,y);
default:
return max__2770.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2770.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2774 = (function (x){
return x;
});
var min__2775 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2776 = (function() { 
var G__2778__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2778 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2778__delegate.call(this, x, y, more);
};
G__2778.cljs$lang$maxFixedArity = 2;
G__2778.cljs$lang$applyTo = (function (arglist__2779){
var x = cljs.core.first(arglist__2779);
var y = cljs.core.first(cljs.core.next(arglist__2779));
var more = cljs.core.rest(cljs.core.next(arglist__2779));
return G__2778__delegate.call(this, x, y, more);
});
return G__2778;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2774.call(this,x);
case  2 :
return min__2775.call(this,x,y);
default:
return min__2776.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2776.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2780 = (n % d);

return cljs.core.fix.call(null,((n - rem__2780) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2781 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2781));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2782 = (function (){
return Math.random.call(null);
});
var rand__2783 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2782.call(this);
case  1 :
return rand__2783.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2785 = (function (x){
return true;
});
var _EQ__EQ___2786 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2787 = (function() { 
var G__2789__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2790 = y;
var G__2791 = cljs.core.first.call(null,more);
var G__2792 = cljs.core.next.call(null,more);
x = G__2790;
y = G__2791;
more = G__2792;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2789 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2789__delegate.call(this, x, y, more);
};
G__2789.cljs$lang$maxFixedArity = 2;
G__2789.cljs$lang$applyTo = (function (arglist__2793){
var x = cljs.core.first(arglist__2793);
var y = cljs.core.first(cljs.core.next(arglist__2793));
var more = cljs.core.rest(cljs.core.next(arglist__2793));
return G__2789__delegate.call(this, x, y, more);
});
return G__2789;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2785.call(this,x);
case  2 :
return _EQ__EQ___2786.call(this,x,y);
default:
return _EQ__EQ___2787.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2787.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2794 = n;
var xs__2795 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2796 = xs__2795;

if(cljs.core.truth_(and__3546__auto____2796))
{return (n__2794 > 0);
} else
{return and__3546__auto____2796;
}
})()))
{{
var G__2797 = (n__2794 - 1);
var G__2798 = cljs.core.next.call(null,xs__2795);
n__2794 = G__2797;
xs__2795 = G__2798;
continue;
}
} else
{return xs__2795;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2803 = null;
var G__2803__2804 = (function (coll,n){
var temp__3695__auto____2799 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2799))
{var xs__2800 = temp__3695__auto____2799;

return cljs.core.first.call(null,xs__2800);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2803__2805 = (function (coll,n,not_found){
var temp__3695__auto____2801 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2801))
{var xs__2802 = temp__3695__auto____2801;

return cljs.core.first.call(null,xs__2802);
} else
{return not_found;
}
});
G__2803 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2803__2804.call(this,coll,n);
case  3 :
return G__2803__2805.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2803;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___2807 = (function (){
return "";
});
var str_STAR___2808 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2809 = (function() { 
var G__2811__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2812 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__2813 = cljs.core.next.call(null,more);
sb = G__2812;
more = G__2813;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__2811 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2811__delegate.call(this, x, ys);
};
G__2811.cljs$lang$maxFixedArity = 1;
G__2811.cljs$lang$applyTo = (function (arglist__2814){
var x = cljs.core.first(arglist__2814);
var ys = cljs.core.rest(arglist__2814);
return G__2811__delegate.call(this, x, ys);
});
return G__2811;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___2807.call(this);
case  1 :
return str_STAR___2808.call(this,x);
default:
return str_STAR___2809.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2809.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2815 = (function (){
return "";
});
var str__2816 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2817 = (function() { 
var G__2819__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__2819 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2819__delegate.call(this, x, ys);
};
G__2819.cljs$lang$maxFixedArity = 1;
G__2819.cljs$lang$applyTo = (function (arglist__2820){
var x = cljs.core.first(arglist__2820);
var ys = cljs.core.rest(arglist__2820);
return G__2819__delegate.call(this, x, ys);
});
return G__2819;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2815.call(this);
case  1 :
return str__2816.call(this,x);
default:
return str__2817.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2817.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2821 = (function (s,start){
return s.substring(start);
});
var subs__2822 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2821.call(this,s,start);
case  3 :
return subs__2822.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2824 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__2825 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2824.call(this,ns);
case  2 :
return symbol__2825.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2827 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2828 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2827.call(this,ns);
case  2 :
return keyword__2828.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2830 = cljs.core.seq.call(null,x);
var ys__2831 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2830)))
{return cljs.core.nil_QMARK_.call(null,ys__2831);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2831)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2830),cljs.core.first.call(null,ys__2831))))
{{
var G__2832 = cljs.core.next.call(null,xs__2830);
var G__2833 = cljs.core.next.call(null,ys__2831);
xs__2830 = G__2832;
ys__2831 = G__2833;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2834_SHARP_,p2__2835_SHARP_){
return cljs.core.hash_combine.call(null,p1__2834_SHARP_,cljs.core.hash.call(null,p2__2835_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__2836__2837 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__2836__2837))
{var G__2839__2841 = cljs.core.first.call(null,G__2836__2837);
var vec__2840__2842 = G__2839__2841;
var key_name__2843 = cljs.core.nth.call(null,vec__2840__2842,0,null);
var f__2844 = cljs.core.nth.call(null,vec__2840__2842,1,null);
var G__2836__2845 = G__2836__2837;

var G__2839__2846 = G__2839__2841;
var G__2836__2847 = G__2836__2845;

while(true){
var vec__2848__2849 = G__2839__2846;
var key_name__2850 = cljs.core.nth.call(null,vec__2848__2849,0,null);
var f__2851 = cljs.core.nth.call(null,vec__2848__2849,1,null);
var G__2836__2852 = G__2836__2847;

var str_name__2853 = cljs.core.name.call(null,key_name__2850);

obj[str_name__2853] = f__2851;
var temp__3698__auto____2854 = cljs.core.next.call(null,G__2836__2852);

if(cljs.core.truth_(temp__3698__auto____2854))
{var G__2836__2855 = temp__3698__auto____2854;

{
var G__2856 = cljs.core.first.call(null,G__2836__2855);
var G__2857 = G__2836__2855;
G__2839__2846 = G__2856;
G__2836__2847 = G__2857;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2858 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2859 = this;
return (new cljs.core.List(this__2859.meta,o,coll,(this__2859.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2860 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2861 = this;
return this__2861.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2862 = this;
return this__2862.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2863 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2864 = this;
return this__2864.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2865 = this;
return this__2865.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2866 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2867 = this;
return (new cljs.core.List(meta,this__2867.first,this__2867.rest,this__2867.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2868 = this;
return this__2868.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2869 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2870 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2871 = this;
return (new cljs.core.List(this__2871.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2872 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2873 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2874 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2875 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2876 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2877 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2878 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2879 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2880 = this;
return this__2880.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2881 = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2882){
var items = cljs.core.seq( arglist__2882 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2883 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2884 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2885 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2886 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2886.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2887 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2888 = this;
return this__2888.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2889 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2889.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2889.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2890 = this;
return this__2890.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2891 = this;
return (new cljs.core.Cons(meta,this__2891.first,this__2891.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2892 = null;
var G__2892__2893 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2892__2894 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2892 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2892__2893.call(this,string,f);
case  3 :
return G__2892__2894.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2892;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2896 = null;
var G__2896__2897 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2896__2898 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2896 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2896__2897.call(this,string,k);
case  3 :
return G__2896__2898.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2896;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2900 = null;
var G__2900__2901 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2900__2902 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2900 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2900__2901.call(this,string,n);
case  3 :
return G__2900__2902.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2900;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__2904 = null;
var G__2904__2905 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2904__2906 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2904 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2904__2905.call(this,_,coll);
case  3 :
return G__2904__2906.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2904;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2908 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2908;
} else
{lazy_seq.x = x__2908.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2909 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2910 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2911 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2912 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2912.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2913 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2914 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2915 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2916 = this;
return this__2916.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2917 = this;
return (new cljs.core.LazySeq(meta,this__2917.realized,this__2917.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2918 = cljs.core.array.call(null);

var s__2919 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2919)))
{ary__2918.push(cljs.core.first.call(null,s__2919));
{
var G__2920 = cljs.core.next.call(null,s__2919);
s__2919 = G__2920;
continue;
}
} else
{return ary__2918;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2921 = s;
var i__2922 = n;
var sum__2923 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2924 = (i__2922 > 0);

if(cljs.core.truth_(and__3546__auto____2924))
{return cljs.core.seq.call(null,s__2921);
} else
{return and__3546__auto____2924;
}
})()))
{{
var G__2925 = cljs.core.next.call(null,s__2921);
var G__2926 = (i__2922 - 1);
var G__2927 = (sum__2923 + 1);
s__2921 = G__2925;
i__2922 = G__2926;
sum__2923 = G__2927;
continue;
}
} else
{return sum__2923;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2931 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2932 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2933 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2928 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2928))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2928),concat.call(null,cljs.core.rest.call(null,s__2928),y));
} else
{return y;
}
})));
});
var concat__2934 = (function() { 
var G__2936__delegate = function (x,y,zs){
var cat__2930 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2929 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2929))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2929),cat.call(null,cljs.core.rest.call(null,xys__2929),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2930.call(null,concat.call(null,x,y),zs);
};
var G__2936 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2936__delegate.call(this, x, y, zs);
};
G__2936.cljs$lang$maxFixedArity = 2;
G__2936.cljs$lang$applyTo = (function (arglist__2937){
var x = cljs.core.first(arglist__2937);
var y = cljs.core.first(cljs.core.next(arglist__2937));
var zs = cljs.core.rest(cljs.core.next(arglist__2937));
return G__2936__delegate.call(this, x, y, zs);
});
return G__2936;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2931.call(this);
case  1 :
return concat__2932.call(this,x);
case  2 :
return concat__2933.call(this,x,y);
default:
return concat__2934.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2934.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2938 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2939 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2940 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2941 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2942 = (function() { 
var G__2944__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2944 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2944__delegate.call(this, a, b, c, d, more);
};
G__2944.cljs$lang$maxFixedArity = 4;
G__2944.cljs$lang$applyTo = (function (arglist__2945){
var a = cljs.core.first(arglist__2945);
var b = cljs.core.first(cljs.core.next(arglist__2945));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2945)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2945))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2945))));
return G__2944__delegate.call(this, a, b, c, d, more);
});
return G__2944;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2938.call(this,a);
case  2 :
return list_STAR___2939.call(this,a,b);
case  3 :
return list_STAR___2940.call(this,a,b,c);
case  4 :
return list_STAR___2941.call(this,a,b,c,d);
default:
return list_STAR___2942.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2942.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2955 = (function (f,args){
var fixed_arity__2946 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2946 + 1)) <= fixed_arity__2946)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2956 = (function (f,x,args){
var arglist__2947 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2948 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2947,fixed_arity__2948) <= fixed_arity__2948)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2947));
} else
{return f.cljs$lang$applyTo(arglist__2947);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2947));
}
});
var apply__2957 = (function (f,x,y,args){
var arglist__2949 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2950 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2949,fixed_arity__2950) <= fixed_arity__2950)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2949));
} else
{return f.cljs$lang$applyTo(arglist__2949);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2949));
}
});
var apply__2958 = (function (f,x,y,z,args){
var arglist__2951 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2952 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2951,fixed_arity__2952) <= fixed_arity__2952)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2951));
} else
{return f.cljs$lang$applyTo(arglist__2951);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2951));
}
});
var apply__2959 = (function() { 
var G__2961__delegate = function (f,a,b,c,d,args){
var arglist__2953 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2954 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2953,fixed_arity__2954) <= fixed_arity__2954)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2953));
} else
{return f.cljs$lang$applyTo(arglist__2953);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2953));
}
};
var G__2961 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2961__delegate.call(this, f, a, b, c, d, args);
};
G__2961.cljs$lang$maxFixedArity = 5;
G__2961.cljs$lang$applyTo = (function (arglist__2962){
var f = cljs.core.first(arglist__2962);
var a = cljs.core.first(cljs.core.next(arglist__2962));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2962)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2962))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2962)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2962)))));
return G__2961__delegate.call(this, f, a, b, c, d, args);
});
return G__2961;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2955.call(this,f,a);
case  3 :
return apply__2956.call(this,f,a,b);
case  4 :
return apply__2957.call(this,f,a,b,c);
case  5 :
return apply__2958.call(this,f,a,b,c,d);
default:
return apply__2959.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2959.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2963){
var obj = cljs.core.first(arglist__2963);
var f = cljs.core.first(cljs.core.next(arglist__2963));
var args = cljs.core.rest(cljs.core.next(arglist__2963));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2964 = (function (x){
return false;
});
var not_EQ___2965 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2966 = (function() { 
var G__2968__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2968 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2968__delegate.call(this, x, y, more);
};
G__2968.cljs$lang$maxFixedArity = 2;
G__2968.cljs$lang$applyTo = (function (arglist__2969){
var x = cljs.core.first(arglist__2969);
var y = cljs.core.first(cljs.core.next(arglist__2969));
var more = cljs.core.rest(cljs.core.next(arglist__2969));
return G__2968__delegate.call(this, x, y, more);
});
return G__2968;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2964.call(this,x);
case  2 :
return not_EQ___2965.call(this,x,y);
default:
return not_EQ___2966.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2966.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2970 = pred;
var G__2971 = cljs.core.next.call(null,coll);
pred = G__2970;
coll = G__2971;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____2972 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____2972))
{return or__3548__auto____2972;
} else
{{
var G__2973 = pred;
var G__2974 = cljs.core.next.call(null,coll);
pred = G__2973;
coll = G__2974;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2975 = null;
var G__2975__2976 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2975__2977 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2975__2978 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2975__2979 = (function() { 
var G__2981__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2981 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2981__delegate.call(this, x, y, zs);
};
G__2981.cljs$lang$maxFixedArity = 2;
G__2981.cljs$lang$applyTo = (function (arglist__2982){
var x = cljs.core.first(arglist__2982);
var y = cljs.core.first(cljs.core.next(arglist__2982));
var zs = cljs.core.rest(cljs.core.next(arglist__2982));
return G__2981__delegate.call(this, x, y, zs);
});
return G__2981;
})()
;
G__2975 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2975__2976.call(this);
case  1 :
return G__2975__2977.call(this,x);
case  2 :
return G__2975__2978.call(this,x,y);
default:
return G__2975__2979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2975.cljs$lang$maxFixedArity = 2;
G__2975.cljs$lang$applyTo = G__2975__2979.cljs$lang$applyTo;
return G__2975;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2983__delegate = function (args){
return x;
};
var G__2983 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2983__delegate.call(this, args);
};
G__2983.cljs$lang$maxFixedArity = 0;
G__2983.cljs$lang$applyTo = (function (arglist__2984){
var args = cljs.core.seq( arglist__2984 );;
return G__2983__delegate.call(this, args);
});
return G__2983;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2988 = (function (){
return cljs.core.identity;
});
var comp__2989 = (function (f){
return f;
});
var comp__2990 = (function (f,g){
return (function() {
var G__2994 = null;
var G__2994__2995 = (function (){
return f.call(null,g.call(null));
});
var G__2994__2996 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2994__2997 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2994__2998 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2994__2999 = (function() { 
var G__3001__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3001 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3001__delegate.call(this, x, y, z, args);
};
G__3001.cljs$lang$maxFixedArity = 3;
G__3001.cljs$lang$applyTo = (function (arglist__3002){
var x = cljs.core.first(arglist__3002);
var y = cljs.core.first(cljs.core.next(arglist__3002));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3002)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3002)));
return G__3001__delegate.call(this, x, y, z, args);
});
return G__3001;
})()
;
G__2994 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2994__2995.call(this);
case  1 :
return G__2994__2996.call(this,x);
case  2 :
return G__2994__2997.call(this,x,y);
case  3 :
return G__2994__2998.call(this,x,y,z);
default:
return G__2994__2999.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2994.cljs$lang$maxFixedArity = 3;
G__2994.cljs$lang$applyTo = G__2994__2999.cljs$lang$applyTo;
return G__2994;
})()
});
var comp__2991 = (function (f,g,h){
return (function() {
var G__3003 = null;
var G__3003__3004 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3003__3005 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3003__3006 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3003__3007 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3003__3008 = (function() { 
var G__3010__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3010 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3010__delegate.call(this, x, y, z, args);
};
G__3010.cljs$lang$maxFixedArity = 3;
G__3010.cljs$lang$applyTo = (function (arglist__3011){
var x = cljs.core.first(arglist__3011);
var y = cljs.core.first(cljs.core.next(arglist__3011));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3011)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3011)));
return G__3010__delegate.call(this, x, y, z, args);
});
return G__3010;
})()
;
G__3003 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3003__3004.call(this);
case  1 :
return G__3003__3005.call(this,x);
case  2 :
return G__3003__3006.call(this,x,y);
case  3 :
return G__3003__3007.call(this,x,y,z);
default:
return G__3003__3008.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3003.cljs$lang$maxFixedArity = 3;
G__3003.cljs$lang$applyTo = G__3003__3008.cljs$lang$applyTo;
return G__3003;
})()
});
var comp__2992 = (function() { 
var G__3012__delegate = function (f1,f2,f3,fs){
var fs__2985 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3013__delegate = function (args){
var ret__2986 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2985),args);
var fs__2987 = cljs.core.next.call(null,fs__2985);

while(true){
if(cljs.core.truth_(fs__2987))
{{
var G__3014 = cljs.core.first.call(null,fs__2987).call(null,ret__2986);
var G__3015 = cljs.core.next.call(null,fs__2987);
ret__2986 = G__3014;
fs__2987 = G__3015;
continue;
}
} else
{return ret__2986;
}
break;
}
};
var G__3013 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3013__delegate.call(this, args);
};
G__3013.cljs$lang$maxFixedArity = 0;
G__3013.cljs$lang$applyTo = (function (arglist__3016){
var args = cljs.core.seq( arglist__3016 );;
return G__3013__delegate.call(this, args);
});
return G__3013;
})()
;
};
var G__3012 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3012__delegate.call(this, f1, f2, f3, fs);
};
G__3012.cljs$lang$maxFixedArity = 3;
G__3012.cljs$lang$applyTo = (function (arglist__3017){
var f1 = cljs.core.first(arglist__3017);
var f2 = cljs.core.first(cljs.core.next(arglist__3017));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3017)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3017)));
return G__3012__delegate.call(this, f1, f2, f3, fs);
});
return G__3012;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2988.call(this);
case  1 :
return comp__2989.call(this,f1);
case  2 :
return comp__2990.call(this,f1,f2);
case  3 :
return comp__2991.call(this,f1,f2,f3);
default:
return comp__2992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2992.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3018 = (function (f,arg1){
return (function() { 
var G__3023__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3023 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3023__delegate.call(this, args);
};
G__3023.cljs$lang$maxFixedArity = 0;
G__3023.cljs$lang$applyTo = (function (arglist__3024){
var args = cljs.core.seq( arglist__3024 );;
return G__3023__delegate.call(this, args);
});
return G__3023;
})()
;
});
var partial__3019 = (function (f,arg1,arg2){
return (function() { 
var G__3025__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3025 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3025__delegate.call(this, args);
};
G__3025.cljs$lang$maxFixedArity = 0;
G__3025.cljs$lang$applyTo = (function (arglist__3026){
var args = cljs.core.seq( arglist__3026 );;
return G__3025__delegate.call(this, args);
});
return G__3025;
})()
;
});
var partial__3020 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3027__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3027 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3027__delegate.call(this, args);
};
G__3027.cljs$lang$maxFixedArity = 0;
G__3027.cljs$lang$applyTo = (function (arglist__3028){
var args = cljs.core.seq( arglist__3028 );;
return G__3027__delegate.call(this, args);
});
return G__3027;
})()
;
});
var partial__3021 = (function() { 
var G__3029__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3030__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3030 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3030__delegate.call(this, args);
};
G__3030.cljs$lang$maxFixedArity = 0;
G__3030.cljs$lang$applyTo = (function (arglist__3031){
var args = cljs.core.seq( arglist__3031 );;
return G__3030__delegate.call(this, args);
});
return G__3030;
})()
;
};
var G__3029 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3029__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3029.cljs$lang$maxFixedArity = 4;
G__3029.cljs$lang$applyTo = (function (arglist__3032){
var f = cljs.core.first(arglist__3032);
var arg1 = cljs.core.first(cljs.core.next(arglist__3032));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3032)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3032))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3032))));
return G__3029__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3029;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3018.call(this,f,arg1);
case  3 :
return partial__3019.call(this,f,arg1,arg2);
case  4 :
return partial__3020.call(this,f,arg1,arg2,arg3);
default:
return partial__3021.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3021.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3033 = (function (f,x){
return (function() {
var G__3037 = null;
var G__3037__3038 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3037__3039 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3037__3040 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3037__3041 = (function() { 
var G__3043__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3043 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3043__delegate.call(this, a, b, c, ds);
};
G__3043.cljs$lang$maxFixedArity = 3;
G__3043.cljs$lang$applyTo = (function (arglist__3044){
var a = cljs.core.first(arglist__3044);
var b = cljs.core.first(cljs.core.next(arglist__3044));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3044)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3044)));
return G__3043__delegate.call(this, a, b, c, ds);
});
return G__3043;
})()
;
G__3037 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3037__3038.call(this,a);
case  2 :
return G__3037__3039.call(this,a,b);
case  3 :
return G__3037__3040.call(this,a,b,c);
default:
return G__3037__3041.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3037.cljs$lang$maxFixedArity = 3;
G__3037.cljs$lang$applyTo = G__3037__3041.cljs$lang$applyTo;
return G__3037;
})()
});
var fnil__3034 = (function (f,x,y){
return (function() {
var G__3045 = null;
var G__3045__3046 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3045__3047 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3045__3048 = (function() { 
var G__3050__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3050 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3050__delegate.call(this, a, b, c, ds);
};
G__3050.cljs$lang$maxFixedArity = 3;
G__3050.cljs$lang$applyTo = (function (arglist__3051){
var a = cljs.core.first(arglist__3051);
var b = cljs.core.first(cljs.core.next(arglist__3051));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3051)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3051)));
return G__3050__delegate.call(this, a, b, c, ds);
});
return G__3050;
})()
;
G__3045 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3045__3046.call(this,a,b);
case  3 :
return G__3045__3047.call(this,a,b,c);
default:
return G__3045__3048.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3045.cljs$lang$maxFixedArity = 3;
G__3045.cljs$lang$applyTo = G__3045__3048.cljs$lang$applyTo;
return G__3045;
})()
});
var fnil__3035 = (function (f,x,y,z){
return (function() {
var G__3052 = null;
var G__3052__3053 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3052__3054 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3052__3055 = (function() { 
var G__3057__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3057 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3057__delegate.call(this, a, b, c, ds);
};
G__3057.cljs$lang$maxFixedArity = 3;
G__3057.cljs$lang$applyTo = (function (arglist__3058){
var a = cljs.core.first(arglist__3058);
var b = cljs.core.first(cljs.core.next(arglist__3058));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3058)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3058)));
return G__3057__delegate.call(this, a, b, c, ds);
});
return G__3057;
})()
;
G__3052 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3052__3053.call(this,a,b);
case  3 :
return G__3052__3054.call(this,a,b,c);
default:
return G__3052__3055.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3052.cljs$lang$maxFixedArity = 3;
G__3052.cljs$lang$applyTo = G__3052__3055.cljs$lang$applyTo;
return G__3052;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3033.call(this,f,x);
case  3 :
return fnil__3034.call(this,f,x,y);
case  4 :
return fnil__3035.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3061 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3059 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3059))
{var s__3060 = temp__3698__auto____3059;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3060)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3060)));
} else
{return null;
}
})));
});

return mapi__3061.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3062 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3062))
{var s__3063 = temp__3698__auto____3062;

var x__3064 = f.call(null,cljs.core.first.call(null,s__3063));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3064)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3063));
} else
{return cljs.core.cons.call(null,x__3064,keep.call(null,f,cljs.core.rest.call(null,s__3063)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3074 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3071 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3071))
{var s__3072 = temp__3698__auto____3071;

var x__3073 = f.call(null,idx,cljs.core.first.call(null,s__3072));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3073)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3072));
} else
{return cljs.core.cons.call(null,x__3073,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3072)));
}
} else
{return null;
}
})));
});

return keepi__3074.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3119 = (function (p){
return (function() {
var ep1 = null;
var ep1__3124 = (function (){
return true;
});
var ep1__3125 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3126 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3081 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3081))
{return p.call(null,y);
} else
{return and__3546__auto____3081;
}
})());
});
var ep1__3127 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3082 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3082))
{var and__3546__auto____3083 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3083))
{return p.call(null,z);
} else
{return and__3546__auto____3083;
}
} else
{return and__3546__auto____3082;
}
})());
});
var ep1__3128 = (function() { 
var G__3130__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3084 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3084))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3084;
}
})());
};
var G__3130 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3130__delegate.call(this, x, y, z, args);
};
G__3130.cljs$lang$maxFixedArity = 3;
G__3130.cljs$lang$applyTo = (function (arglist__3131){
var x = cljs.core.first(arglist__3131);
var y = cljs.core.first(cljs.core.next(arglist__3131));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3131)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3131)));
return G__3130__delegate.call(this, x, y, z, args);
});
return G__3130;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3124.call(this);
case  1 :
return ep1__3125.call(this,x);
case  2 :
return ep1__3126.call(this,x,y);
case  3 :
return ep1__3127.call(this,x,y,z);
default:
return ep1__3128.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3128.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3120 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3132 = (function (){
return true;
});
var ep2__3133 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3085 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3085))
{return p2.call(null,x);
} else
{return and__3546__auto____3085;
}
})());
});
var ep2__3134 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3086 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3086))
{var and__3546__auto____3087 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3087))
{var and__3546__auto____3088 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3088))
{return p2.call(null,y);
} else
{return and__3546__auto____3088;
}
} else
{return and__3546__auto____3087;
}
} else
{return and__3546__auto____3086;
}
})());
});
var ep2__3135 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3089 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3089))
{var and__3546__auto____3090 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3090))
{var and__3546__auto____3091 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3091))
{var and__3546__auto____3092 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3092))
{var and__3546__auto____3093 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3093))
{return p2.call(null,z);
} else
{return and__3546__auto____3093;
}
} else
{return and__3546__auto____3092;
}
} else
{return and__3546__auto____3091;
}
} else
{return and__3546__auto____3090;
}
} else
{return and__3546__auto____3089;
}
})());
});
var ep2__3136 = (function() { 
var G__3138__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3094 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3094))
{return cljs.core.every_QMARK_.call(null,(function (p1__3065_SHARP_){
var and__3546__auto____3095 = p1.call(null,p1__3065_SHARP_);

if(cljs.core.truth_(and__3546__auto____3095))
{return p2.call(null,p1__3065_SHARP_);
} else
{return and__3546__auto____3095;
}
}),args);
} else
{return and__3546__auto____3094;
}
})());
};
var G__3138 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3138__delegate.call(this, x, y, z, args);
};
G__3138.cljs$lang$maxFixedArity = 3;
G__3138.cljs$lang$applyTo = (function (arglist__3139){
var x = cljs.core.first(arglist__3139);
var y = cljs.core.first(cljs.core.next(arglist__3139));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3139)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3139)));
return G__3138__delegate.call(this, x, y, z, args);
});
return G__3138;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3132.call(this);
case  1 :
return ep2__3133.call(this,x);
case  2 :
return ep2__3134.call(this,x,y);
case  3 :
return ep2__3135.call(this,x,y,z);
default:
return ep2__3136.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3136.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3121 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3140 = (function (){
return true;
});
var ep3__3141 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3096 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3096))
{var and__3546__auto____3097 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3097))
{return p3.call(null,x);
} else
{return and__3546__auto____3097;
}
} else
{return and__3546__auto____3096;
}
})());
});
var ep3__3142 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3098 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3098))
{var and__3546__auto____3099 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3099))
{var and__3546__auto____3100 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3100))
{var and__3546__auto____3101 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3101))
{var and__3546__auto____3102 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3102))
{return p3.call(null,y);
} else
{return and__3546__auto____3102;
}
} else
{return and__3546__auto____3101;
}
} else
{return and__3546__auto____3100;
}
} else
{return and__3546__auto____3099;
}
} else
{return and__3546__auto____3098;
}
})());
});
var ep3__3143 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3103 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3103))
{var and__3546__auto____3104 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3104))
{var and__3546__auto____3105 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3105))
{var and__3546__auto____3106 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3106))
{var and__3546__auto____3107 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3107))
{var and__3546__auto____3108 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3108))
{var and__3546__auto____3109 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3109))
{var and__3546__auto____3110 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3110))
{return p3.call(null,z);
} else
{return and__3546__auto____3110;
}
} else
{return and__3546__auto____3109;
}
} else
{return and__3546__auto____3108;
}
} else
{return and__3546__auto____3107;
}
} else
{return and__3546__auto____3106;
}
} else
{return and__3546__auto____3105;
}
} else
{return and__3546__auto____3104;
}
} else
{return and__3546__auto____3103;
}
})());
});
var ep3__3144 = (function() { 
var G__3146__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3111 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3111))
{return cljs.core.every_QMARK_.call(null,(function (p1__3066_SHARP_){
var and__3546__auto____3112 = p1.call(null,p1__3066_SHARP_);

if(cljs.core.truth_(and__3546__auto____3112))
{var and__3546__auto____3113 = p2.call(null,p1__3066_SHARP_);

if(cljs.core.truth_(and__3546__auto____3113))
{return p3.call(null,p1__3066_SHARP_);
} else
{return and__3546__auto____3113;
}
} else
{return and__3546__auto____3112;
}
}),args);
} else
{return and__3546__auto____3111;
}
})());
};
var G__3146 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3146__delegate.call(this, x, y, z, args);
};
G__3146.cljs$lang$maxFixedArity = 3;
G__3146.cljs$lang$applyTo = (function (arglist__3147){
var x = cljs.core.first(arglist__3147);
var y = cljs.core.first(cljs.core.next(arglist__3147));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3147)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3147)));
return G__3146__delegate.call(this, x, y, z, args);
});
return G__3146;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3140.call(this);
case  1 :
return ep3__3141.call(this,x);
case  2 :
return ep3__3142.call(this,x,y);
case  3 :
return ep3__3143.call(this,x,y,z);
default:
return ep3__3144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3144.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3122 = (function() { 
var G__3148__delegate = function (p1,p2,p3,ps){
var ps__3114 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3149 = (function (){
return true;
});
var epn__3150 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3067_SHARP_){
return p1__3067_SHARP_.call(null,x);
}),ps__3114);
});
var epn__3151 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3068_SHARP_){
var and__3546__auto____3115 = p1__3068_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3115))
{return p1__3068_SHARP_.call(null,y);
} else
{return and__3546__auto____3115;
}
}),ps__3114);
});
var epn__3152 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3069_SHARP_){
var and__3546__auto____3116 = p1__3069_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3116))
{var and__3546__auto____3117 = p1__3069_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3117))
{return p1__3069_SHARP_.call(null,z);
} else
{return and__3546__auto____3117;
}
} else
{return and__3546__auto____3116;
}
}),ps__3114);
});
var epn__3153 = (function() { 
var G__3155__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3118 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3118))
{return cljs.core.every_QMARK_.call(null,(function (p1__3070_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3070_SHARP_,args);
}),ps__3114);
} else
{return and__3546__auto____3118;
}
})());
};
var G__3155 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3155__delegate.call(this, x, y, z, args);
};
G__3155.cljs$lang$maxFixedArity = 3;
G__3155.cljs$lang$applyTo = (function (arglist__3156){
var x = cljs.core.first(arglist__3156);
var y = cljs.core.first(cljs.core.next(arglist__3156));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3156)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3156)));
return G__3155__delegate.call(this, x, y, z, args);
});
return G__3155;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3149.call(this);
case  1 :
return epn__3150.call(this,x);
case  2 :
return epn__3151.call(this,x,y);
case  3 :
return epn__3152.call(this,x,y,z);
default:
return epn__3153.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3153.cljs$lang$applyTo;
return epn;
})()
};
var G__3148 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3148__delegate.call(this, p1, p2, p3, ps);
};
G__3148.cljs$lang$maxFixedArity = 3;
G__3148.cljs$lang$applyTo = (function (arglist__3157){
var p1 = cljs.core.first(arglist__3157);
var p2 = cljs.core.first(cljs.core.next(arglist__3157));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3157)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3157)));
return G__3148__delegate.call(this, p1, p2, p3, ps);
});
return G__3148;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3119.call(this,p1);
case  2 :
return every_pred__3120.call(this,p1,p2);
case  3 :
return every_pred__3121.call(this,p1,p2,p3);
default:
return every_pred__3122.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3122.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3197 = (function (p){
return (function() {
var sp1 = null;
var sp1__3202 = (function (){
return null;
});
var sp1__3203 = (function (x){
return p.call(null,x);
});
var sp1__3204 = (function (x,y){
var or__3548__auto____3159 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3159))
{return or__3548__auto____3159;
} else
{return p.call(null,y);
}
});
var sp1__3205 = (function (x,y,z){
var or__3548__auto____3160 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3160))
{return or__3548__auto____3160;
} else
{var or__3548__auto____3161 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3161))
{return or__3548__auto____3161;
} else
{return p.call(null,z);
}
}
});
var sp1__3206 = (function() { 
var G__3208__delegate = function (x,y,z,args){
var or__3548__auto____3162 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3162))
{return or__3548__auto____3162;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3208 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3208__delegate.call(this, x, y, z, args);
};
G__3208.cljs$lang$maxFixedArity = 3;
G__3208.cljs$lang$applyTo = (function (arglist__3209){
var x = cljs.core.first(arglist__3209);
var y = cljs.core.first(cljs.core.next(arglist__3209));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3209)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3209)));
return G__3208__delegate.call(this, x, y, z, args);
});
return G__3208;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3202.call(this);
case  1 :
return sp1__3203.call(this,x);
case  2 :
return sp1__3204.call(this,x,y);
case  3 :
return sp1__3205.call(this,x,y,z);
default:
return sp1__3206.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3206.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3198 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3210 = (function (){
return null;
});
var sp2__3211 = (function (x){
var or__3548__auto____3163 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3163))
{return or__3548__auto____3163;
} else
{return p2.call(null,x);
}
});
var sp2__3212 = (function (x,y){
var or__3548__auto____3164 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3164))
{return or__3548__auto____3164;
} else
{var or__3548__auto____3165 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3165))
{return or__3548__auto____3165;
} else
{var or__3548__auto____3166 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3166))
{return or__3548__auto____3166;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3213 = (function (x,y,z){
var or__3548__auto____3167 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3167))
{return or__3548__auto____3167;
} else
{var or__3548__auto____3168 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3168))
{return or__3548__auto____3168;
} else
{var or__3548__auto____3169 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3169))
{return or__3548__auto____3169;
} else
{var or__3548__auto____3170 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3170))
{return or__3548__auto____3170;
} else
{var or__3548__auto____3171 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3171))
{return or__3548__auto____3171;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3214 = (function() { 
var G__3216__delegate = function (x,y,z,args){
var or__3548__auto____3172 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3172))
{return or__3548__auto____3172;
} else
{return cljs.core.some.call(null,(function (p1__3075_SHARP_){
var or__3548__auto____3173 = p1.call(null,p1__3075_SHARP_);

if(cljs.core.truth_(or__3548__auto____3173))
{return or__3548__auto____3173;
} else
{return p2.call(null,p1__3075_SHARP_);
}
}),args);
}
};
var G__3216 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3216__delegate.call(this, x, y, z, args);
};
G__3216.cljs$lang$maxFixedArity = 3;
G__3216.cljs$lang$applyTo = (function (arglist__3217){
var x = cljs.core.first(arglist__3217);
var y = cljs.core.first(cljs.core.next(arglist__3217));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3217)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3217)));
return G__3216__delegate.call(this, x, y, z, args);
});
return G__3216;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3210.call(this);
case  1 :
return sp2__3211.call(this,x);
case  2 :
return sp2__3212.call(this,x,y);
case  3 :
return sp2__3213.call(this,x,y,z);
default:
return sp2__3214.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3214.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3199 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3218 = (function (){
return null;
});
var sp3__3219 = (function (x){
var or__3548__auto____3174 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3174))
{return or__3548__auto____3174;
} else
{var or__3548__auto____3175 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3175))
{return or__3548__auto____3175;
} else
{return p3.call(null,x);
}
}
});
var sp3__3220 = (function (x,y){
var or__3548__auto____3176 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3176))
{return or__3548__auto____3176;
} else
{var or__3548__auto____3177 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3177))
{return or__3548__auto____3177;
} else
{var or__3548__auto____3178 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3178))
{return or__3548__auto____3178;
} else
{var or__3548__auto____3179 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3179))
{return or__3548__auto____3179;
} else
{var or__3548__auto____3180 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3180))
{return or__3548__auto____3180;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3221 = (function (x,y,z){
var or__3548__auto____3181 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3181))
{return or__3548__auto____3181;
} else
{var or__3548__auto____3182 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3182))
{return or__3548__auto____3182;
} else
{var or__3548__auto____3183 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3183))
{return or__3548__auto____3183;
} else
{var or__3548__auto____3184 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3184))
{return or__3548__auto____3184;
} else
{var or__3548__auto____3185 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3185))
{return or__3548__auto____3185;
} else
{var or__3548__auto____3186 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3186))
{return or__3548__auto____3186;
} else
{var or__3548__auto____3187 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3187))
{return or__3548__auto____3187;
} else
{var or__3548__auto____3188 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3188))
{return or__3548__auto____3188;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3222 = (function() { 
var G__3224__delegate = function (x,y,z,args){
var or__3548__auto____3189 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3189))
{return or__3548__auto____3189;
} else
{return cljs.core.some.call(null,(function (p1__3076_SHARP_){
var or__3548__auto____3190 = p1.call(null,p1__3076_SHARP_);

if(cljs.core.truth_(or__3548__auto____3190))
{return or__3548__auto____3190;
} else
{var or__3548__auto____3191 = p2.call(null,p1__3076_SHARP_);

if(cljs.core.truth_(or__3548__auto____3191))
{return or__3548__auto____3191;
} else
{return p3.call(null,p1__3076_SHARP_);
}
}
}),args);
}
};
var G__3224 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3224__delegate.call(this, x, y, z, args);
};
G__3224.cljs$lang$maxFixedArity = 3;
G__3224.cljs$lang$applyTo = (function (arglist__3225){
var x = cljs.core.first(arglist__3225);
var y = cljs.core.first(cljs.core.next(arglist__3225));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3225)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3225)));
return G__3224__delegate.call(this, x, y, z, args);
});
return G__3224;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3218.call(this);
case  1 :
return sp3__3219.call(this,x);
case  2 :
return sp3__3220.call(this,x,y);
case  3 :
return sp3__3221.call(this,x,y,z);
default:
return sp3__3222.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3222.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3200 = (function() { 
var G__3226__delegate = function (p1,p2,p3,ps){
var ps__3192 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3227 = (function (){
return null;
});
var spn__3228 = (function (x){
return cljs.core.some.call(null,(function (p1__3077_SHARP_){
return p1__3077_SHARP_.call(null,x);
}),ps__3192);
});
var spn__3229 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3078_SHARP_){
var or__3548__auto____3193 = p1__3078_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3193))
{return or__3548__auto____3193;
} else
{return p1__3078_SHARP_.call(null,y);
}
}),ps__3192);
});
var spn__3230 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3079_SHARP_){
var or__3548__auto____3194 = p1__3079_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3194))
{return or__3548__auto____3194;
} else
{var or__3548__auto____3195 = p1__3079_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3195))
{return or__3548__auto____3195;
} else
{return p1__3079_SHARP_.call(null,z);
}
}
}),ps__3192);
});
var spn__3231 = (function() { 
var G__3233__delegate = function (x,y,z,args){
var or__3548__auto____3196 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3196))
{return or__3548__auto____3196;
} else
{return cljs.core.some.call(null,(function (p1__3080_SHARP_){
return cljs.core.some.call(null,p1__3080_SHARP_,args);
}),ps__3192);
}
};
var G__3233 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3233__delegate.call(this, x, y, z, args);
};
G__3233.cljs$lang$maxFixedArity = 3;
G__3233.cljs$lang$applyTo = (function (arglist__3234){
var x = cljs.core.first(arglist__3234);
var y = cljs.core.first(cljs.core.next(arglist__3234));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3234)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3234)));
return G__3233__delegate.call(this, x, y, z, args);
});
return G__3233;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3227.call(this);
case  1 :
return spn__3228.call(this,x);
case  2 :
return spn__3229.call(this,x,y);
case  3 :
return spn__3230.call(this,x,y,z);
default:
return spn__3231.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3231.cljs$lang$applyTo;
return spn;
})()
};
var G__3226 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3226__delegate.call(this, p1, p2, p3, ps);
};
G__3226.cljs$lang$maxFixedArity = 3;
G__3226.cljs$lang$applyTo = (function (arglist__3235){
var p1 = cljs.core.first(arglist__3235);
var p2 = cljs.core.first(cljs.core.next(arglist__3235));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3235)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3235)));
return G__3226__delegate.call(this, p1, p2, p3, ps);
});
return G__3226;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3197.call(this,p1);
case  2 :
return some_fn__3198.call(this,p1,p2);
case  3 :
return some_fn__3199.call(this,p1,p2,p3);
default:
return some_fn__3200.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3200.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3248 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3236 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3236))
{var s__3237 = temp__3698__auto____3236;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3237)),map.call(null,f,cljs.core.rest.call(null,s__3237)));
} else
{return null;
}
})));
});
var map__3249 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3238 = cljs.core.seq.call(null,c1);
var s2__3239 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3240 = s1__3238;

if(cljs.core.truth_(and__3546__auto____3240))
{return s2__3239;
} else
{return and__3546__auto____3240;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3238),cljs.core.first.call(null,s2__3239)),map.call(null,f,cljs.core.rest.call(null,s1__3238),cljs.core.rest.call(null,s2__3239)));
} else
{return null;
}
})));
});
var map__3250 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3241 = cljs.core.seq.call(null,c1);
var s2__3242 = cljs.core.seq.call(null,c2);
var s3__3243 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3244 = s1__3241;

if(cljs.core.truth_(and__3546__auto____3244))
{var and__3546__auto____3245 = s2__3242;

if(cljs.core.truth_(and__3546__auto____3245))
{return s3__3243;
} else
{return and__3546__auto____3245;
}
} else
{return and__3546__auto____3244;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3241),cljs.core.first.call(null,s2__3242),cljs.core.first.call(null,s3__3243)),map.call(null,f,cljs.core.rest.call(null,s1__3241),cljs.core.rest.call(null,s2__3242),cljs.core.rest.call(null,s3__3243)));
} else
{return null;
}
})));
});
var map__3251 = (function() { 
var G__3253__delegate = function (f,c1,c2,c3,colls){
var step__3247 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3246 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3246)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3246),step.call(null,map.call(null,cljs.core.rest,ss__3246)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3158_SHARP_){
return cljs.core.apply.call(null,f,p1__3158_SHARP_);
}),step__3247.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3253 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3253__delegate.call(this, f, c1, c2, c3, colls);
};
G__3253.cljs$lang$maxFixedArity = 4;
G__3253.cljs$lang$applyTo = (function (arglist__3254){
var f = cljs.core.first(arglist__3254);
var c1 = cljs.core.first(cljs.core.next(arglist__3254));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3254)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3254))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3254))));
return G__3253__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3253;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3248.call(this,f,c1);
case  3 :
return map__3249.call(this,f,c1,c2);
case  4 :
return map__3250.call(this,f,c1,c2,c3);
default:
return map__3251.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3251.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____3255 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3255))
{var s__3256 = temp__3698__auto____3255;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3256),take.call(null,(n - 1),cljs.core.rest.call(null,s__3256)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3259 = (function (n,coll){
while(true){
var s__3257 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3258 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3258))
{return s__3257;
} else
{return and__3546__auto____3258;
}
})()))
{{
var G__3260 = (n - 1);
var G__3261 = cljs.core.rest.call(null,s__3257);
n = G__3260;
coll = G__3261;
continue;
}
} else
{return s__3257;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3259.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3262 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3263 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3262.call(this,n);
case  2 :
return drop_last__3263.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3265 = cljs.core.seq.call(null,coll);
var lead__3266 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3266))
{{
var G__3267 = cljs.core.next.call(null,s__3265);
var G__3268 = cljs.core.next.call(null,lead__3266);
s__3265 = G__3267;
lead__3266 = G__3268;
continue;
}
} else
{return s__3265;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3271 = (function (pred,coll){
while(true){
var s__3269 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3270 = s__3269;

if(cljs.core.truth_(and__3546__auto____3270))
{return pred.call(null,cljs.core.first.call(null,s__3269));
} else
{return and__3546__auto____3270;
}
})()))
{{
var G__3272 = pred;
var G__3273 = cljs.core.rest.call(null,s__3269);
pred = G__3272;
coll = G__3273;
continue;
}
} else
{return s__3269;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3271.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3274 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3274))
{var s__3275 = temp__3698__auto____3274;

return cljs.core.concat.call(null,s__3275,cycle.call(null,s__3275));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3276 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3277 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3276.call(this,n);
case  2 :
return repeat__3277.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3279 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3280 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3279.call(this,n);
case  2 :
return repeatedly__3280.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3286 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3282 = cljs.core.seq.call(null,c1);
var s2__3283 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3284 = s1__3282;

if(cljs.core.truth_(and__3546__auto____3284))
{return s2__3283;
} else
{return and__3546__auto____3284;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3282),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3283),interleave.call(null,cljs.core.rest.call(null,s1__3282),cljs.core.rest.call(null,s2__3283))));
} else
{return null;
}
})));
});
var interleave__3287 = (function() { 
var G__3289__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3285 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3285)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3285),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3285)));
} else
{return null;
}
})));
};
var G__3289 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3289__delegate.call(this, c1, c2, colls);
};
G__3289.cljs$lang$maxFixedArity = 2;
G__3289.cljs$lang$applyTo = (function (arglist__3290){
var c1 = cljs.core.first(arglist__3290);
var c2 = cljs.core.first(cljs.core.next(arglist__3290));
var colls = cljs.core.rest(cljs.core.next(arglist__3290));
return G__3289__delegate.call(this, c1, c2, colls);
});
return G__3289;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3286.call(this,c1,c2);
default:
return interleave__3287.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3287.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3293 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3291 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3291))
{var coll__3292 = temp__3695__auto____3291;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3292),cat.call(null,cljs.core.rest.call(null,coll__3292),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3293.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3294 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3295 = (function() { 
var G__3297__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3297 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3297__delegate.call(this, f, coll, colls);
};
G__3297.cljs$lang$maxFixedArity = 2;
G__3297.cljs$lang$applyTo = (function (arglist__3298){
var f = cljs.core.first(arglist__3298);
var coll = cljs.core.first(cljs.core.next(arglist__3298));
var colls = cljs.core.rest(cljs.core.next(arglist__3298));
return G__3297__delegate.call(this, f, coll, colls);
});
return G__3297;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3294.call(this,f,coll);
default:
return mapcat__3295.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3295.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3299 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3299))
{var s__3300 = temp__3698__auto____3299;

var f__3301 = cljs.core.first.call(null,s__3300);
var r__3302 = cljs.core.rest.call(null,s__3300);

if(cljs.core.truth_(pred.call(null,f__3301)))
{return cljs.core.cons.call(null,f__3301,filter.call(null,pred,r__3302));
} else
{return filter.call(null,pred,r__3302);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3304 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3304.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3303_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3303_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3311 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3312 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3305 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3305))
{var s__3306 = temp__3698__auto____3305;

var p__3307 = cljs.core.take.call(null,n,s__3306);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3307))))
{return cljs.core.cons.call(null,p__3307,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3306)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3313 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3308 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3308))
{var s__3309 = temp__3698__auto____3308;

var p__3310 = cljs.core.take.call(null,n,s__3309);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3310))))
{return cljs.core.cons.call(null,p__3310,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3309)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3310,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3311.call(this,n,step);
case  3 :
return partition__3312.call(this,n,step,pad);
case  4 :
return partition__3313.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3319 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3320 = (function (m,ks,not_found){
var sentinel__3315 = cljs.core.lookup_sentinel;
var m__3316 = m;
var ks__3317 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3317))
{var m__3318 = cljs.core.get.call(null,m__3316,cljs.core.first.call(null,ks__3317),sentinel__3315);

if(cljs.core.truth_((sentinel__3315 === m__3318)))
{return not_found;
} else
{{
var G__3322 = sentinel__3315;
var G__3323 = m__3318;
var G__3324 = cljs.core.next.call(null,ks__3317);
sentinel__3315 = G__3322;
m__3316 = G__3323;
ks__3317 = G__3324;
continue;
}
}
} else
{return m__3316;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3319.call(this,m,ks);
case  3 :
return get_in__3320.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3325,v){
var vec__3326__3327 = p__3325;
var k__3328 = cljs.core.nth.call(null,vec__3326__3327,0,null);
var ks__3329 = cljs.core.nthnext.call(null,vec__3326__3327,1);

if(cljs.core.truth_(ks__3329))
{return cljs.core.assoc.call(null,m,k__3328,assoc_in.call(null,cljs.core.get.call(null,m,k__3328),ks__3329,v));
} else
{return cljs.core.assoc.call(null,m,k__3328,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3330,f,args){
var vec__3331__3332 = p__3330;
var k__3333 = cljs.core.nth.call(null,vec__3331__3332,0,null);
var ks__3334 = cljs.core.nthnext.call(null,vec__3331__3332,1);

if(cljs.core.truth_(ks__3334))
{return cljs.core.assoc.call(null,m,k__3333,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3333),ks__3334,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3333,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3333),args));
}
};
var update_in = function (m,p__3330,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3330, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3335){
var m = cljs.core.first(arglist__3335);
var p__3330 = cljs.core.first(cljs.core.next(arglist__3335));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3335)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3335)));
return update_in__delegate.call(this, m, p__3330, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3336 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3361 = null;
var G__3361__3362 = (function (coll,k){
var this__3337 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3361__3363 = (function (coll,k,not_found){
var this__3338 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3361 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3361__3362.call(this,coll,k);
case  3 :
return G__3361__3363.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3361;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3339 = this;
var new_array__3340 = cljs.core.aclone.call(null,this__3339.array);

(new_array__3340[k] = v);
return (new cljs.core.Vector(this__3339.meta,new_array__3340));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3341 = this;
var new_array__3342 = cljs.core.aclone.call(null,this__3341.array);

new_array__3342.push(o);
return (new cljs.core.Vector(this__3341.meta,new_array__3342));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3365 = null;
var G__3365__3366 = (function (v,f){
var this__3343 = this;
return cljs.core.ci_reduce.call(null,this__3343.array,f);
});
var G__3365__3367 = (function (v,f,start){
var this__3344 = this;
return cljs.core.ci_reduce.call(null,this__3344.array,f,start);
});
G__3365 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3365__3366.call(this,v,f);
case  3 :
return G__3365__3367.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3365;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3345 = this;
if(cljs.core.truth_((this__3345.array.length > 0)))
{var vector_seq__3346 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3345.array.length)))
{return cljs.core.cons.call(null,(this__3345.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3346.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3347 = this;
return this__3347.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3348 = this;
var count__3349 = this__3348.array.length;

if(cljs.core.truth_((count__3349 > 0)))
{return (this__3348.array[(count__3349 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3350 = this;
if(cljs.core.truth_((this__3350.array.length > 0)))
{var new_array__3351 = cljs.core.aclone.call(null,this__3350.array);

new_array__3351.pop();
return (new cljs.core.Vector(this__3350.meta,new_array__3351));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3352 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3353 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3354 = this;
return (new cljs.core.Vector(meta,this__3354.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3355 = this;
return this__3355.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3369 = null;
var G__3369__3370 = (function (coll,n){
var this__3356 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3357 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3357))
{return (n < this__3356.array.length);
} else
{return and__3546__auto____3357;
}
})()))
{return (this__3356.array[n]);
} else
{return null;
}
});
var G__3369__3371 = (function (coll,n,not_found){
var this__3358 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3359 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3359))
{return (n < this__3358.array.length);
} else
{return and__3546__auto____3359;
}
})()))
{return (this__3358.array[n]);
} else
{return not_found;
}
});
G__3369 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3369__3370.call(this,coll,n);
case  3 :
return G__3369__3371.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3369;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3360 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3360.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3373 = null;
var G__3373__3374 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3373__3375 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3373 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3373__3374.call(this,_,k);
case  3 :
return G__3373__3375.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3373;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3377){
var args = cljs.core.seq( arglist__3377 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3378 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3398 = null;
var G__3398__3399 = (function (coll,k){
var this__3379 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3398__3400 = (function (coll,k,not_found){
var this__3380 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3398 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3398__3399.call(this,coll,k);
case  3 :
return G__3398__3400.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3398;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__3381 = this;
var v_pos__3382 = (this__3381.start + key);

return (new cljs.core.Subvec(this__3381.meta,cljs.core._assoc.call(null,this__3381.v,v_pos__3382,val),this__3381.start,((this__3381.end > (v_pos__3382 + 1)) ? this__3381.end : (v_pos__3382 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3383 = this;
return (new cljs.core.Subvec(this__3383.meta,cljs.core._assoc_n.call(null,this__3383.v,this__3383.end,o),this__3383.start,(this__3383.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3402 = null;
var G__3402__3403 = (function (coll,f){
var this__3384 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__3402__3404 = (function (coll,f,start){
var this__3385 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__3402 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3402__3403.call(this,coll,f);
case  3 :
return G__3402__3404.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3402;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3386 = this;
var subvec_seq__3387 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__3386.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__3386.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__3387.call(null,this__3386.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3388 = this;
return (this__3388.end - this__3388.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3389 = this;
return cljs.core._nth.call(null,this__3389.v,(this__3389.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3390 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__3390.start,this__3390.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__3390.meta,this__3390.v,this__3390.start,(this__3390.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3391 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3392 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3393 = this;
return (new cljs.core.Subvec(meta,this__3393.v,this__3393.start,this__3393.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3394 = this;
return this__3394.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3406 = null;
var G__3406__3407 = (function (coll,n){
var this__3395 = this;
return cljs.core._nth.call(null,this__3395.v,(this__3395.start + n));
});
var G__3406__3408 = (function (coll,n,not_found){
var this__3396 = this;
return cljs.core._nth.call(null,this__3396.v,(this__3396.start + n),not_found);
});
G__3406 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3406__3407.call(this,coll,n);
case  3 :
return G__3406__3408.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3406;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3397 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3397.meta);
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__3410 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3411 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__3410.call(this,v,start);
case  3 :
return subvec__3411.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__3413 = null;
var G__3413__3414 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3413__3415 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3413 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3413__3414.call(this,_,k);
case  3 :
return G__3413__3415.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3413;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3417 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3418 = array.length;

var i__3419 = 0;

while(true){
if(cljs.core.truth_((i__3419 < len__3418)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3419]))))
{return i__3419;
} else
{{
var G__3420 = (i__3419 + incr);
i__3419 = G__3420;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3422 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3423 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3421 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3421))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3421;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3422.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3423.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3426 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3445 = null;
var G__3445__3446 = (function (coll,k){
var this__3427 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3445__3447 = (function (coll,k,not_found){
var this__3428 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3428.strobj,(this__3428.strobj[k]),not_found);
});
G__3445 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3445__3446.call(this,coll,k);
case  3 :
return G__3445__3447.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3445;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3429 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3430 = goog.object.clone.call(null,this__3429.strobj);
var overwrite_QMARK___3431 = new_strobj__3430.hasOwnProperty(k);

(new_strobj__3430[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3431))
{return (new cljs.core.ObjMap(this__3429.meta,this__3429.keys,new_strobj__3430));
} else
{var new_keys__3432 = cljs.core.aclone.call(null,this__3429.keys);

new_keys__3432.push(k);
return (new cljs.core.ObjMap(this__3429.meta,new_keys__3432,new_strobj__3430));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3429.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3433 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3433.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3434 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3435 = this;
if(cljs.core.truth_((this__3435.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3425_SHARP_){
return cljs.core.vector.call(null,p1__3425_SHARP_,(this__3435.strobj[p1__3425_SHARP_]));
}),this__3435.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3436 = this;
return this__3436.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3437 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3438 = this;
return (new cljs.core.ObjMap(meta,this__3438.keys,this__3438.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3439 = this;
return this__3439.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3440 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3440.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3441 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3442 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3442))
{return this__3441.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3442;
}
})()))
{var new_keys__3443 = cljs.core.aclone.call(null,this__3441.keys);
var new_strobj__3444 = goog.object.clone.call(null,this__3441.strobj);

new_keys__3443.splice(cljs.core.scan_array.call(null,1,k,new_keys__3443),1);
cljs.core.js_delete.call(null,new_strobj__3444,k);
return (new cljs.core.ObjMap(this__3441.meta,new_keys__3443,new_strobj__3444));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3450 = null;
var G__3450__3451 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3450__3452 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3450 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3450__3451.call(this,_,k);
case  3 :
return G__3450__3452.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3450;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3454 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3484 = null;
var G__3484__3485 = (function (coll,k){
var this__3455 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3484__3486 = (function (coll,k,not_found){
var this__3456 = this;
var bucket__3457 = (this__3456.hashobj[cljs.core.hash.call(null,k)]);
var i__3458 = (cljs.core.truth_(bucket__3457)?cljs.core.scan_array.call(null,2,k,bucket__3457):null);

if(cljs.core.truth_(i__3458))
{return (bucket__3457[(i__3458 + 1)]);
} else
{return not_found;
}
});
G__3484 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3484__3485.call(this,coll,k);
case  3 :
return G__3484__3486.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3484;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3459 = this;
var h__3460 = cljs.core.hash.call(null,k);
var bucket__3461 = (this__3459.hashobj[h__3460]);

if(cljs.core.truth_(bucket__3461))
{var new_bucket__3462 = cljs.core.aclone.call(null,bucket__3461);
var new_hashobj__3463 = goog.object.clone.call(null,this__3459.hashobj);

(new_hashobj__3463[h__3460] = new_bucket__3462);
var temp__3695__auto____3464 = cljs.core.scan_array.call(null,2,k,new_bucket__3462);

if(cljs.core.truth_(temp__3695__auto____3464))
{var i__3465 = temp__3695__auto____3464;

(new_bucket__3462[(i__3465 + 1)] = v);
return (new cljs.core.HashMap(this__3459.meta,this__3459.count,new_hashobj__3463));
} else
{new_bucket__3462.push(k,v);
return (new cljs.core.HashMap(this__3459.meta,(this__3459.count + 1),new_hashobj__3463));
}
} else
{var new_hashobj__3466 = goog.object.clone.call(null,this__3459.hashobj);

(new_hashobj__3466[h__3460] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3459.meta,(this__3459.count + 1),new_hashobj__3466));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3467 = this;
var bucket__3468 = (this__3467.hashobj[cljs.core.hash.call(null,k)]);
var i__3469 = (cljs.core.truth_(bucket__3468)?cljs.core.scan_array.call(null,2,k,bucket__3468):null);

if(cljs.core.truth_(i__3469))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3470 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3471 = this;
if(cljs.core.truth_((this__3471.count > 0)))
{var hashes__3472 = cljs.core.js_keys.call(null,this__3471.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3449_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3471.hashobj[p1__3449_SHARP_])));
}),hashes__3472);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3473 = this;
return this__3473.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3474 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3475 = this;
return (new cljs.core.HashMap(meta,this__3475.count,this__3475.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3476 = this;
return this__3476.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3477 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3477.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3478 = this;
var h__3479 = cljs.core.hash.call(null,k);
var bucket__3480 = (this__3478.hashobj[h__3479]);
var i__3481 = (cljs.core.truth_(bucket__3480)?cljs.core.scan_array.call(null,2,k,bucket__3480):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3481)))
{return coll;
} else
{var new_hashobj__3482 = goog.object.clone.call(null,this__3478.hashobj);

if(cljs.core.truth_((3 > bucket__3480.length)))
{cljs.core.js_delete.call(null,new_hashobj__3482,h__3479);
} else
{var new_bucket__3483 = cljs.core.aclone.call(null,bucket__3480);

new_bucket__3483.splice(i__3481,2);
(new_hashobj__3482[h__3479] = new_bucket__3483);
}
return (new cljs.core.HashMap(this__3478.meta,(this__3478.count - 1),new_hashobj__3482));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3488 = ks.length;

var i__3489 = 0;
var out__3490 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3489 < len__3488)))
{{
var G__3491 = (i__3489 + 1);
var G__3492 = cljs.core.assoc.call(null,out__3490,(ks[i__3489]),(vs[i__3489]));
i__3489 = G__3491;
out__3490 = G__3492;
continue;
}
} else
{return out__3490;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3493 = null;
var G__3493__3494 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3493__3495 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3493 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3493__3494.call(this,_,k);
case  3 :
return G__3493__3495.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3493;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3497 = cljs.core.seq.call(null,keyvals);
var out__3498 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3497))
{{
var G__3499 = cljs.core.nnext.call(null,in$__3497);
var G__3500 = cljs.core.assoc.call(null,out__3498,cljs.core.first.call(null,in$__3497),cljs.core.second.call(null,in$__3497));
in$__3497 = G__3499;
out__3498 = G__3500;
continue;
}
} else
{return out__3498;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3501){
var keyvals = cljs.core.seq( arglist__3501 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3502_SHARP_,p2__3503_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3504 = p1__3502_SHARP_;

if(cljs.core.truth_(or__3548__auto____3504))
{return or__3548__auto____3504;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3503_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3505){
var maps = cljs.core.seq( arglist__3505 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3508 = (function (m,e){
var k__3506 = cljs.core.first.call(null,e);
var v__3507 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3506)))
{return cljs.core.assoc.call(null,m,k__3506,f.call(null,cljs.core.get.call(null,m,k__3506),v__3507));
} else
{return cljs.core.assoc.call(null,m,k__3506,v__3507);
}
});
var merge2__3510 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3508,(function (){var or__3548__auto____3509 = m1;

if(cljs.core.truth_(or__3548__auto____3509))
{return or__3548__auto____3509;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3510,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3511){
var f = cljs.core.first(arglist__3511);
var maps = cljs.core.rest(arglist__3511);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3513 = cljs.core.ObjMap.fromObject([],{});
var keys__3514 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3514))
{var key__3515 = cljs.core.first.call(null,keys__3514);
var entry__3516 = cljs.core.get.call(null,map,key__3515,"﷐'user/not-found");

{
var G__3517 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3516,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3513,key__3515,entry__3516):ret__3513);
var G__3518 = cljs.core.next.call(null,keys__3514);
ret__3513 = G__3517;
keys__3514 = G__3518;
continue;
}
} else
{return ret__3513;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3519 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3532 = null;
var G__3532__3533 = (function (coll,v){
var this__3520 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3532__3534 = (function (coll,v,not_found){
var this__3521 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3521.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3532 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3532__3533.call(this,coll,v);
case  3 :
return G__3532__3534.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3532;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3522 = this;
return (new cljs.core.Set(this__3522.meta,cljs.core.assoc.call(null,this__3522.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3523 = this;
return cljs.core.keys.call(null,this__3523.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3524 = this;
return (new cljs.core.Set(this__3524.meta,cljs.core.dissoc.call(null,this__3524.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3525 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3526 = this;
var and__3546__auto____3527 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3527))
{var and__3546__auto____3528 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3528))
{return cljs.core.every_QMARK_.call(null,(function (p1__3512_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3512_SHARP_);
}),other);
} else
{return and__3546__auto____3528;
}
} else
{return and__3546__auto____3527;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3529 = this;
return (new cljs.core.Set(meta,this__3529.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3530 = this;
return this__3530.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3531 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3531.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3536 = null;
var G__3536__3537 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3536__3538 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3536 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3536__3537.call(this,_,k);
case  3 :
return G__3536__3538.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3536;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3541 = cljs.core.seq.call(null,coll);
var out__3542 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3541))))
{{
var G__3543 = cljs.core.rest.call(null,in$__3541);
var G__3544 = cljs.core.conj.call(null,out__3542,cljs.core.first.call(null,in$__3541));
in$__3541 = G__3543;
out__3542 = G__3544;
continue;
}
} else
{return out__3542;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3545 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3546 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3546))
{var e__3547 = temp__3695__auto____3546;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3547));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3545,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3540_SHARP_){
var temp__3695__auto____3548 = cljs.core.find.call(null,smap,p1__3540_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3548))
{var e__3549 = temp__3695__auto____3548;

return cljs.core.second.call(null,e__3549);
} else
{return p1__3540_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3557 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3550,seen){
while(true){
var vec__3551__3552 = p__3550;
var f__3553 = cljs.core.nth.call(null,vec__3551__3552,0,null);
var xs__3554 = vec__3551__3552;

var temp__3698__auto____3555 = cljs.core.seq.call(null,xs__3554);

if(cljs.core.truth_(temp__3698__auto____3555))
{var s__3556 = temp__3698__auto____3555;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3553)))
{{
var G__3558 = cljs.core.rest.call(null,s__3556);
var G__3559 = seen;
p__3550 = G__3558;
seen = G__3559;
continue;
}
} else
{return cljs.core.cons.call(null,f__3553,step.call(null,cljs.core.rest.call(null,s__3556),cljs.core.conj.call(null,seen,f__3553)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3557.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3560 = cljs.core.Vector.fromArray([]);
var s__3561 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3561)))
{{
var G__3562 = cljs.core.conj.call(null,ret__3560,cljs.core.first.call(null,s__3561));
var G__3563 = cljs.core.next.call(null,s__3561);
ret__3560 = G__3562;
s__3561 = G__3563;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3560);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3564 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3564))
{return or__3548__auto____3564;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3565 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3565 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3565 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____3566 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3566))
{return or__3548__auto____3566;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3567 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3567 > -1)))
{return cljs.core.subs.call(null,x,2,i__3567);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3570 = cljs.core.ObjMap.fromObject([],{});
var ks__3571 = cljs.core.seq.call(null,keys);
var vs__3572 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3573 = ks__3571;

if(cljs.core.truth_(and__3546__auto____3573))
{return vs__3572;
} else
{return and__3546__auto____3573;
}
})()))
{{
var G__3574 = cljs.core.assoc.call(null,map__3570,cljs.core.first.call(null,ks__3571),cljs.core.first.call(null,vs__3572));
var G__3575 = cljs.core.next.call(null,ks__3571);
var G__3576 = cljs.core.next.call(null,vs__3572);
map__3570 = G__3574;
ks__3571 = G__3575;
vs__3572 = G__3576;
continue;
}
} else
{return map__3570;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3579 = (function (k,x){
return x;
});
var max_key__3580 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3581 = (function() { 
var G__3583__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3568_SHARP_,p2__3569_SHARP_){
return max_key.call(null,k,p1__3568_SHARP_,p2__3569_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3583 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3583__delegate.call(this, k, x, y, more);
};
G__3583.cljs$lang$maxFixedArity = 3;
G__3583.cljs$lang$applyTo = (function (arglist__3584){
var k = cljs.core.first(arglist__3584);
var x = cljs.core.first(cljs.core.next(arglist__3584));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3584)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3584)));
return G__3583__delegate.call(this, k, x, y, more);
});
return G__3583;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3579.call(this,k,x);
case  3 :
return max_key__3580.call(this,k,x,y);
default:
return max_key__3581.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3581.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3585 = (function (k,x){
return x;
});
var min_key__3586 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3587 = (function() { 
var G__3589__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3577_SHARP_,p2__3578_SHARP_){
return min_key.call(null,k,p1__3577_SHARP_,p2__3578_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3589 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3589__delegate.call(this, k, x, y, more);
};
G__3589.cljs$lang$maxFixedArity = 3;
G__3589.cljs$lang$applyTo = (function (arglist__3590){
var k = cljs.core.first(arglist__3590);
var x = cljs.core.first(cljs.core.next(arglist__3590));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3590)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3590)));
return G__3589__delegate.call(this, k, x, y, more);
});
return G__3589;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3585.call(this,k,x);
case  3 :
return min_key__3586.call(this,k,x,y);
default:
return min_key__3587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3587.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3593 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3594 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3591 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3591))
{var s__3592 = temp__3698__auto____3591;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3592),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3592)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3593.call(this,n,step);
case  3 :
return partition_all__3594.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3596 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3596))
{var s__3597 = temp__3698__auto____3596;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3597))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3597),take_while.call(null,pred,cljs.core.rest.call(null,s__3597)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3598 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3599 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3615 = null;
var G__3615__3616 = (function (rng,f){
var this__3600 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3615__3617 = (function (rng,f,s){
var this__3601 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3615 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3615__3616.call(this,rng,f);
case  3 :
return G__3615__3617.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3615;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3602 = this;
var comp__3603 = (cljs.core.truth_((this__3602.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3603.call(null,this__3602.start,this__3602.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3604 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3604.end - this__3604.start) / this__3604.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3605 = this;
return this__3605.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3606 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3606.meta,(this__3606.start + this__3606.step),this__3606.end,this__3606.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3607 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3608 = this;
return (new cljs.core.Range(meta,this__3608.start,this__3608.end,this__3608.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3609 = this;
return this__3609.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3619 = null;
var G__3619__3620 = (function (rng,n){
var this__3610 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3610.start + (n * this__3610.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3611 = (this__3610.start > this__3610.end);

if(cljs.core.truth_(and__3546__auto____3611))
{return cljs.core._EQ_.call(null,this__3610.step,0);
} else
{return and__3546__auto____3611;
}
})()))
{return this__3610.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3619__3621 = (function (rng,n,not_found){
var this__3612 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3612.start + (n * this__3612.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3613 = (this__3612.start > this__3612.end);

if(cljs.core.truth_(and__3546__auto____3613))
{return cljs.core._EQ_.call(null,this__3612.step,0);
} else
{return and__3546__auto____3613;
}
})()))
{return this__3612.start;
} else
{return not_found;
}
}
});
G__3619 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3619__3620.call(this,rng,n);
case  3 :
return G__3619__3621.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3619;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3614 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3614.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3623 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3624 = (function (end){
return range.call(null,0,end,1);
});
var range__3625 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3626 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3623.call(this);
case  1 :
return range__3624.call(this,start);
case  2 :
return range__3625.call(this,start,end);
case  3 :
return range__3626.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3628 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3628))
{var s__3629 = temp__3698__auto____3628;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3629),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3629)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3631 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3631))
{var s__3632 = temp__3698__auto____3631;

var fst__3633 = cljs.core.first.call(null,s__3632);
var fv__3634 = f.call(null,fst__3633);
var run__3635 = cljs.core.cons.call(null,fst__3633,cljs.core.take_while.call(null,(function (p1__3630_SHARP_){
return cljs.core._EQ_.call(null,fv__3634,f.call(null,p1__3630_SHARP_));
}),cljs.core.next.call(null,s__3632)));

return cljs.core.cons.call(null,run__3635,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3635),s__3632))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3650 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3646 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3646))
{var s__3647 = temp__3695__auto____3646;

return reductions.call(null,f,cljs.core.first.call(null,s__3647),cljs.core.rest.call(null,s__3647));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3651 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3648 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3648))
{var s__3649 = temp__3698__auto____3648;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3649)),cljs.core.rest.call(null,s__3649));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3650.call(this,f,init);
case  3 :
return reductions__3651.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3654 = (function (f){
return (function() {
var G__3659 = null;
var G__3659__3660 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3659__3661 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3659__3662 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3659__3663 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3659__3664 = (function() { 
var G__3666__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3666 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3666__delegate.call(this, x, y, z, args);
};
G__3666.cljs$lang$maxFixedArity = 3;
G__3666.cljs$lang$applyTo = (function (arglist__3667){
var x = cljs.core.first(arglist__3667);
var y = cljs.core.first(cljs.core.next(arglist__3667));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3667)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3667)));
return G__3666__delegate.call(this, x, y, z, args);
});
return G__3666;
})()
;
G__3659 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3659__3660.call(this);
case  1 :
return G__3659__3661.call(this,x);
case  2 :
return G__3659__3662.call(this,x,y);
case  3 :
return G__3659__3663.call(this,x,y,z);
default:
return G__3659__3664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3659.cljs$lang$maxFixedArity = 3;
G__3659.cljs$lang$applyTo = G__3659__3664.cljs$lang$applyTo;
return G__3659;
})()
});
var juxt__3655 = (function (f,g){
return (function() {
var G__3668 = null;
var G__3668__3669 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3668__3670 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3668__3671 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3668__3672 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3668__3673 = (function() { 
var G__3675__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3675 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3675__delegate.call(this, x, y, z, args);
};
G__3675.cljs$lang$maxFixedArity = 3;
G__3675.cljs$lang$applyTo = (function (arglist__3676){
var x = cljs.core.first(arglist__3676);
var y = cljs.core.first(cljs.core.next(arglist__3676));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3676)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3676)));
return G__3675__delegate.call(this, x, y, z, args);
});
return G__3675;
})()
;
G__3668 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3668__3669.call(this);
case  1 :
return G__3668__3670.call(this,x);
case  2 :
return G__3668__3671.call(this,x,y);
case  3 :
return G__3668__3672.call(this,x,y,z);
default:
return G__3668__3673.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3668.cljs$lang$maxFixedArity = 3;
G__3668.cljs$lang$applyTo = G__3668__3673.cljs$lang$applyTo;
return G__3668;
})()
});
var juxt__3656 = (function (f,g,h){
return (function() {
var G__3677 = null;
var G__3677__3678 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3677__3679 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3677__3680 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3677__3681 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3677__3682 = (function() { 
var G__3684__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3684 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3684__delegate.call(this, x, y, z, args);
};
G__3684.cljs$lang$maxFixedArity = 3;
G__3684.cljs$lang$applyTo = (function (arglist__3685){
var x = cljs.core.first(arglist__3685);
var y = cljs.core.first(cljs.core.next(arglist__3685));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3685)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3685)));
return G__3684__delegate.call(this, x, y, z, args);
});
return G__3684;
})()
;
G__3677 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3677__3678.call(this);
case  1 :
return G__3677__3679.call(this,x);
case  2 :
return G__3677__3680.call(this,x,y);
case  3 :
return G__3677__3681.call(this,x,y,z);
default:
return G__3677__3682.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3677.cljs$lang$maxFixedArity = 3;
G__3677.cljs$lang$applyTo = G__3677__3682.cljs$lang$applyTo;
return G__3677;
})()
});
var juxt__3657 = (function() { 
var G__3686__delegate = function (f,g,h,fs){
var fs__3653 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3687 = null;
var G__3687__3688 = (function (){
return cljs.core.reduce.call(null,(function (p1__3636_SHARP_,p2__3637_SHARP_){
return cljs.core.conj.call(null,p1__3636_SHARP_,p2__3637_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3653);
});
var G__3687__3689 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3638_SHARP_,p2__3639_SHARP_){
return cljs.core.conj.call(null,p1__3638_SHARP_,p2__3639_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3653);
});
var G__3687__3690 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3640_SHARP_,p2__3641_SHARP_){
return cljs.core.conj.call(null,p1__3640_SHARP_,p2__3641_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3653);
});
var G__3687__3691 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3642_SHARP_,p2__3643_SHARP_){
return cljs.core.conj.call(null,p1__3642_SHARP_,p2__3643_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3653);
});
var G__3687__3692 = (function() { 
var G__3694__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3644_SHARP_,p2__3645_SHARP_){
return cljs.core.conj.call(null,p1__3644_SHARP_,cljs.core.apply.call(null,p2__3645_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3653);
};
var G__3694 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3694__delegate.call(this, x, y, z, args);
};
G__3694.cljs$lang$maxFixedArity = 3;
G__3694.cljs$lang$applyTo = (function (arglist__3695){
var x = cljs.core.first(arglist__3695);
var y = cljs.core.first(cljs.core.next(arglist__3695));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3695)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3695)));
return G__3694__delegate.call(this, x, y, z, args);
});
return G__3694;
})()
;
G__3687 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3687__3688.call(this);
case  1 :
return G__3687__3689.call(this,x);
case  2 :
return G__3687__3690.call(this,x,y);
case  3 :
return G__3687__3691.call(this,x,y,z);
default:
return G__3687__3692.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3687.cljs$lang$maxFixedArity = 3;
G__3687.cljs$lang$applyTo = G__3687__3692.cljs$lang$applyTo;
return G__3687;
})()
};
var G__3686 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3686__delegate.call(this, f, g, h, fs);
};
G__3686.cljs$lang$maxFixedArity = 3;
G__3686.cljs$lang$applyTo = (function (arglist__3696){
var f = cljs.core.first(arglist__3696);
var g = cljs.core.first(cljs.core.next(arglist__3696));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3696)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3696)));
return G__3686__delegate.call(this, f, g, h, fs);
});
return G__3686;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3654.call(this,f);
case  2 :
return juxt__3655.call(this,f,g);
case  3 :
return juxt__3656.call(this,f,g,h);
default:
return juxt__3657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3657.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3698 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3701 = cljs.core.next.call(null,coll);
coll = G__3701;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3699 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3697 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3697))
{return (n > 0);
} else
{return and__3546__auto____3697;
}
})()))
{{
var G__3702 = (n - 1);
var G__3703 = cljs.core.next.call(null,coll);
n = G__3702;
coll = G__3703;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3698.call(this,n);
case  2 :
return dorun__3699.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3704 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3705 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3704.call(this,n);
case  2 :
return doall__3705.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3707 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3707),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3707),1)))
{return cljs.core.first.call(null,matches__3707);
} else
{return cljs.core.vec.call(null,matches__3707);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3708 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3708)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3708),1)))
{return cljs.core.first.call(null,matches__3708);
} else
{return cljs.core.vec.call(null,matches__3708);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3709 = cljs.core.re_find.call(null,re,s);
var match_idx__3710 = s.search(re);
var match_str__3711 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3709))?cljs.core.first.call(null,match_data__3709):match_data__3709);
var post_match__3712 = cljs.core.subs.call(null,s,(match_idx__3710 + cljs.core.count.call(null,match_str__3711)));

if(cljs.core.truth_(match_data__3709))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3709,re_seq.call(null,re,post_match__3712));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3713_SHARP_){
return print_one.call(null,p1__3713_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3714 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3714))
{var and__3546__auto____3718 = (function (){var x__319__auto____3715 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3716 = x__319__auto____3715;

if(cljs.core.truth_(and__3546__auto____3716))
{var and__3546__auto____3717 = x__319__auto____3715.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3717))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____3715));
} else
{return and__3546__auto____3717;
}
} else
{return and__3546__auto____3716;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__319__auto____3715);
}
})();

if(cljs.core.truth_(and__3546__auto____3718))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3718;
}
} else
{return and__3546__auto____3714;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__319__auto____3719 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3720 = x__319__auto____3719;

if(cljs.core.truth_(and__3546__auto____3720))
{var and__3546__auto____3721 = x__319__auto____3719.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3721))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____3719));
} else
{return and__3546__auto____3721;
}
} else
{return and__3546__auto____3720;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__319__auto____3719);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3722 = cljs.core.first.call(null,objs);
var sb__3723 = (new goog.string.StringBuffer());

var G__3724__3725 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3724__3725))
{var obj__3726 = cljs.core.first.call(null,G__3724__3725);
var G__3724__3727 = G__3724__3725;

while(true){
if(cljs.core.truth_((obj__3726 === first_obj__3722)))
{} else
{sb__3723.append(" ");
}
var G__3728__3729 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3726,opts));

if(cljs.core.truth_(G__3728__3729))
{var string__3730 = cljs.core.first.call(null,G__3728__3729);
var G__3728__3731 = G__3728__3729;

while(true){
sb__3723.append(string__3730);
var temp__3698__auto____3732 = cljs.core.next.call(null,G__3728__3731);

if(cljs.core.truth_(temp__3698__auto____3732))
{var G__3728__3733 = temp__3698__auto____3732;

{
var G__3736 = cljs.core.first.call(null,G__3728__3733);
var G__3737 = G__3728__3733;
string__3730 = G__3736;
G__3728__3731 = G__3737;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3734 = cljs.core.next.call(null,G__3724__3727);

if(cljs.core.truth_(temp__3698__auto____3734))
{var G__3724__3735 = temp__3698__auto____3734;

{
var G__3738 = cljs.core.first.call(null,G__3724__3735);
var G__3739 = G__3724__3735;
obj__3726 = G__3738;
G__3724__3727 = G__3739;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3723);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3740 = cljs.core.first.call(null,objs);

var G__3741__3742 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3741__3742))
{var obj__3743 = cljs.core.first.call(null,G__3741__3742);
var G__3741__3744 = G__3741__3742;

while(true){
if(cljs.core.truth_((obj__3743 === first_obj__3740)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3745__3746 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3743,opts));

if(cljs.core.truth_(G__3745__3746))
{var string__3747 = cljs.core.first.call(null,G__3745__3746);
var G__3745__3748 = G__3745__3746;

while(true){
cljs.core.string_print.call(null,string__3747);
var temp__3698__auto____3749 = cljs.core.next.call(null,G__3745__3748);

if(cljs.core.truth_(temp__3698__auto____3749))
{var G__3745__3750 = temp__3698__auto____3749;

{
var G__3753 = cljs.core.first.call(null,G__3745__3750);
var G__3754 = G__3745__3750;
string__3747 = G__3753;
G__3745__3748 = G__3754;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3751 = cljs.core.next.call(null,G__3741__3744);

if(cljs.core.truth_(temp__3698__auto____3751))
{var G__3741__3752 = temp__3698__auto____3751;

{
var G__3755 = cljs.core.first.call(null,G__3741__3752);
var G__3756 = G__3741__3752;
obj__3743 = G__3755;
G__3741__3744 = G__3756;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3757){
var objs = cljs.core.seq( arglist__3757 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3758){
var objs = cljs.core.seq( arglist__3758 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3759){
var objs = cljs.core.seq( arglist__3759 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3760){
var objs = cljs.core.seq( arglist__3760 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3761){
var objs = cljs.core.seq( arglist__3761 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3762 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3762,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3763 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3763))
{var nspc__3764 = temp__3698__auto____3763;

return cljs.core.str.call(null,nspc__3764,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3765 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3765))
{var nspc__3766 = temp__3698__auto____3765;

return cljs.core.str.call(null,nspc__3766,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3767 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3767,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__3768 = this;
var G__3769__3770 = cljs.core.seq.call(null,this__3768.watches);

if(cljs.core.truth_(G__3769__3770))
{var G__3772__3774 = cljs.core.first.call(null,G__3769__3770);
var vec__3773__3775 = G__3772__3774;
var key__3776 = cljs.core.nth.call(null,vec__3773__3775,0,null);
var f__3777 = cljs.core.nth.call(null,vec__3773__3775,1,null);
var G__3769__3778 = G__3769__3770;

var G__3772__3779 = G__3772__3774;
var G__3769__3780 = G__3769__3778;

while(true){
var vec__3781__3782 = G__3772__3779;
var key__3783 = cljs.core.nth.call(null,vec__3781__3782,0,null);
var f__3784 = cljs.core.nth.call(null,vec__3781__3782,1,null);
var G__3769__3785 = G__3769__3780;

f__3784.call(null,key__3783,this$,oldval,newval);
var temp__3698__auto____3786 = cljs.core.next.call(null,G__3769__3785);

if(cljs.core.truth_(temp__3698__auto____3786))
{var G__3769__3787 = temp__3698__auto____3786;

{
var G__3794 = cljs.core.first.call(null,G__3769__3787);
var G__3795 = G__3769__3787;
G__3772__3779 = G__3794;
G__3769__3780 = G__3795;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__3788 = this;
return this$.watches = cljs.core.assoc.call(null,this__3788.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3789 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3789.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3790 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3790.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3791 = this;
return this__3791.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3792 = this;
return this__3792.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3793 = this;
return (o === other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3802 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3803 = (function() { 
var G__3805__delegate = function (x,p__3796){
var map__3797__3798 = p__3796;
var map__3797__3799 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3797__3798))?cljs.core.apply.call(null,cljs.core.hash_map,map__3797__3798):map__3797__3798);
var validator__3800 = cljs.core.get.call(null,map__3797__3799,"﷐'validator");
var meta__3801 = cljs.core.get.call(null,map__3797__3799,"﷐'meta");

return (new cljs.core.Atom(x,meta__3801,validator__3800,null));
};
var G__3805 = function (x,var_args){
var p__3796 = null;
if (goog.isDef(var_args)) {
  p__3796 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3805__delegate.call(this, x, p__3796);
};
G__3805.cljs$lang$maxFixedArity = 1;
G__3805.cljs$lang$applyTo = (function (arglist__3806){
var x = cljs.core.first(arglist__3806);
var p__3796 = cljs.core.rest(arglist__3806);
return G__3805__delegate.call(this, x, p__3796);
});
return G__3805;
})()
;
atom = function(x,var_args){
var p__3796 = var_args;
switch(arguments.length){
case  1 :
return atom__3802.call(this,x);
default:
return atom__3803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3803.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3807 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3807))
{var validate__3808 = temp__3698__auto____3807;

if(cljs.core.truth_(validate__3808.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",2934))))));
}
} else
{}
var old_value__3809 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3809,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3810 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3811 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3812 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3813 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3814 = (function() { 
var G__3816__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3816 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3816__delegate.call(this, a, f, x, y, z, more);
};
G__3816.cljs$lang$maxFixedArity = 5;
G__3816.cljs$lang$applyTo = (function (arglist__3817){
var a = cljs.core.first(arglist__3817);
var f = cljs.core.first(cljs.core.next(arglist__3817));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3817)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3817))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3817)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3817)))));
return G__3816__delegate.call(this, a, f, x, y, z, more);
});
return G__3816;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3810.call(this,a,f);
case  3 :
return swap_BANG___3811.call(this,a,f,x);
case  4 :
return swap_BANG___3812.call(this,a,f,x,y);
case  5 :
return swap_BANG___3813.call(this,a,f,x,y,z);
default:
return swap_BANG___3814.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3814.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3818){
var iref = cljs.core.first(arglist__3818);
var f = cljs.core.first(cljs.core.next(arglist__3818));
var args = cljs.core.rest(cljs.core.next(arglist__3818));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3819 = (function (){
return gensym.call(null,"G__");
});
var gensym__3820 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3819.call(this);
case  1 :
return gensym__3820.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3822 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3822.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3823 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3823.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3823.state,this__3823.f);
}
return cljs.core.deref.call(null,this__3823.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3824){
var body = cljs.core.seq( arglist__3824 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3825__3826 = options;
var map__3825__3827 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3825__3826))?cljs.core.apply.call(null,cljs.core.hash_map,map__3825__3826):map__3825__3826);
var keywordize_keys__3828 = cljs.core.get.call(null,map__3825__3827,"﷐'keywordize-keys");
var keyfn__3829 = (cljs.core.truth_(keywordize_keys__3828)?cljs.core.keyword:cljs.core.str);
var f__3835 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__383__auto____3834 = (function iter__3830(s__3831){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3831__3832 = s__3831;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3831__3832)))
{var k__3833 = cljs.core.first.call(null,s__3831__3832);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3829.call(null,k__3833),thisfn.call(null,(x[k__3833]))]),iter__3830.call(null,cljs.core.rest.call(null,s__3831__3832)));
} else
{return null;
}
break;
}
})));
});

return iter__383__auto____3834.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3835.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3836){
var x = cljs.core.first(arglist__3836);
var options = cljs.core.rest(arglist__3836);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3837 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3841__delegate = function (args){
var temp__3695__auto____3838 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3837),args);

if(cljs.core.truth_(temp__3695__auto____3838))
{var v__3839 = temp__3695__auto____3838;

return v__3839;
} else
{var ret__3840 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3837,cljs.core.assoc,args,ret__3840);
return ret__3840;
}
};
var G__3841 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3841__delegate.call(this, args);
};
G__3841.cljs$lang$maxFixedArity = 0;
G__3841.cljs$lang$applyTo = (function (arglist__3842){
var args = cljs.core.seq( arglist__3842 );;
return G__3841__delegate.call(this, args);
});
return G__3841;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3844 = (function (f){
while(true){
var ret__3843 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3843)))
{{
var G__3847 = ret__3843;
f = G__3847;
continue;
}
} else
{return ret__3843;
}
break;
}
});
var trampoline__3845 = (function() { 
var G__3848__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3848 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3848__delegate.call(this, f, args);
};
G__3848.cljs$lang$maxFixedArity = 1;
G__3848.cljs$lang$applyTo = (function (arglist__3849){
var f = cljs.core.first(arglist__3849);
var args = cljs.core.rest(arglist__3849);
return G__3848__delegate.call(this, f, args);
});
return G__3848;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3844.call(this,f);
default:
return trampoline__3845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3845.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3850 = (function (){
return rand.call(null,1);
});
var rand__3851 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3850.call(this);
case  1 :
return rand__3851.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3853 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3853,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3853,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3862 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3863 = (function (h,child,parent){
var or__3548__auto____3854 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3854))
{return or__3548__auto____3854;
} else
{var or__3548__auto____3855 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3855))
{return or__3548__auto____3855;
} else
{var and__3546__auto____3856 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3856))
{var and__3546__auto____3857 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3857))
{var and__3546__auto____3858 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3858))
{var ret__3859 = true;
var i__3860 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3861 = cljs.core.not.call(null,ret__3859);

if(cljs.core.truth_(or__3548__auto____3861))
{return or__3548__auto____3861;
} else
{return cljs.core._EQ_.call(null,i__3860,cljs.core.count.call(null,parent));
}
})()))
{return ret__3859;
} else
{{
var G__3865 = isa_QMARK_.call(null,h,child.call(null,i__3860),parent.call(null,i__3860));
var G__3866 = (i__3860 + 1);
ret__3859 = G__3865;
i__3860 = G__3866;
continue;
}
}
break;
}
} else
{return and__3546__auto____3858;
}
} else
{return and__3546__auto____3857;
}
} else
{return and__3546__auto____3856;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3862.call(this,h,child);
case  3 :
return isa_QMARK___3863.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3867 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3868 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3867.call(this,h);
case  2 :
return parents__3868.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3870 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3871 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3870.call(this,h);
case  2 :
return ancestors__3871.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3873 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3874 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3873.call(this,h);
case  2 :
return descendants__3874.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3884 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3226))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3885 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3230))))));
}
var tp__3879 = "﷐'parents".call(null,h);
var td__3880 = "﷐'descendants".call(null,h);
var ta__3881 = "﷐'ancestors".call(null,h);
var tf__3882 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3883 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3879.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3881.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3881.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3879,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3882.call(null,"﷐'ancestors".call(null,h),tag,td__3880,parent,ta__3881),"﷐'descendants":tf__3882.call(null,"﷐'descendants".call(null,h),parent,ta__3881,tag,td__3880)});
})());

if(cljs.core.truth_(or__3548__auto____3883))
{return or__3548__auto____3883;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3884.call(this,h,tag);
case  3 :
return derive__3885.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3891 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3892 = (function (h,tag,parent){
var parentMap__3887 = "﷐'parents".call(null,h);
var childsParents__3888 = (cljs.core.truth_(parentMap__3887.call(null,tag))?cljs.core.disj.call(null,parentMap__3887.call(null,tag),parent):cljs.core.set([]));
var newParents__3889 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3888))?cljs.core.assoc.call(null,parentMap__3887,tag,childsParents__3888):cljs.core.dissoc.call(null,parentMap__3887,tag));
var deriv_seq__3890 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3876_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3876_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3876_SHARP_),cljs.core.second.call(null,p1__3876_SHARP_)));
}),cljs.core.seq.call(null,newParents__3889)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3887.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3877_SHARP_,p2__3878_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3877_SHARP_,p2__3878_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3890));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3891.call(this,h,tag);
case  3 :
return underive__3892.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3894 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3896 = (cljs.core.truth_((function (){var and__3546__auto____3895 = xprefs__3894;

if(cljs.core.truth_(and__3546__auto____3895))
{return xprefs__3894.call(null,y);
} else
{return and__3546__auto____3895;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3896))
{return or__3548__auto____3896;
} else
{var or__3548__auto____3898 = (function (){var ps__3897 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3897) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3897),prefer_table)))
{} else
{}
{
var G__3901 = cljs.core.rest.call(null,ps__3897);
ps__3897 = G__3901;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3898))
{return or__3548__auto____3898;
} else
{var or__3548__auto____3900 = (function (){var ps__3899 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3899) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3899),y,prefer_table)))
{} else
{}
{
var G__3902 = cljs.core.rest.call(null,ps__3899);
ps__3899 = G__3902;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3900))
{return or__3548__auto____3900;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3903 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3903))
{return or__3548__auto____3903;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3912 = cljs.core.reduce.call(null,(function (be,p__3904){
var vec__3905__3906 = p__3904;
var k__3907 = cljs.core.nth.call(null,vec__3905__3906,0,null);
var ___3908 = cljs.core.nth.call(null,vec__3905__3906,1,null);
var e__3909 = vec__3905__3906;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3907)))
{var be2__3911 = (cljs.core.truth_((function (){var or__3548__auto____3910 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3910))
{return or__3548__auto____3910;
} else
{return cljs.core.dominates.call(null,k__3907,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3909:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3911),k__3907,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3907," and ",cljs.core.first.call(null,be2__3911),", and neither is preferred")));
}
return be2__3911;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3912))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3912));
return cljs.core.second.call(null,best_entry__3912);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3913 = mf;

if(cljs.core.truth_(and__3546__auto____3913))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3913;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3914 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3914))
{return or__3548__auto____3914;
} else
{var or__3548__auto____3915 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3915))
{return or__3548__auto____3915;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3916 = mf;

if(cljs.core.truth_(and__3546__auto____3916))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3916;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3917 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3917))
{return or__3548__auto____3917;
} else
{var or__3548__auto____3918 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3918))
{return or__3548__auto____3918;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3919 = mf;

if(cljs.core.truth_(and__3546__auto____3919))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3919;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3920 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3920))
{return or__3548__auto____3920;
} else
{var or__3548__auto____3921 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3921))
{return or__3548__auto____3921;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3922 = mf;

if(cljs.core.truth_(and__3546__auto____3922))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3922;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3923 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3923))
{return or__3548__auto____3923;
} else
{var or__3548__auto____3924 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3924))
{return or__3548__auto____3924;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3925 = mf;

if(cljs.core.truth_(and__3546__auto____3925))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3925;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3926 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3926))
{return or__3548__auto____3926;
} else
{var or__3548__auto____3927 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3927))
{return or__3548__auto____3927;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3928 = mf;

if(cljs.core.truth_(and__3546__auto____3928))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3928;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3929 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3929))
{return or__3548__auto____3929;
} else
{var or__3548__auto____3930 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3930))
{return or__3548__auto____3930;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3931 = mf;

if(cljs.core.truth_(and__3546__auto____3931))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3931;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3932 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3932))
{return or__3548__auto____3932;
} else
{var or__3548__auto____3933 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3933))
{return or__3548__auto____3933;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3934 = mf;

if(cljs.core.truth_(and__3546__auto____3934))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3934;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3935 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3935))
{return or__3548__auto____3935;
} else
{var or__3548__auto____3936 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3936))
{return or__3548__auto____3936;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3937 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3938 = cljs.core._get_method.call(null,mf,dispatch_val__3937);

if(cljs.core.truth_(target_fn__3938))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3937)));
}
return cljs.core.apply.call(null,target_fn__3938,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3939 = this;
cljs.core.swap_BANG_.call(null,this__3939.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3939.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3939.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3939.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3940 = this;
cljs.core.swap_BANG_.call(null,this__3940.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3940.method_cache,this__3940.method_table,this__3940.cached_hierarchy,this__3940.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3941 = this;
cljs.core.swap_BANG_.call(null,this__3941.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3941.method_cache,this__3941.method_table,this__3941.cached_hierarchy,this__3941.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3942 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3942.cached_hierarchy),cljs.core.deref.call(null,this__3942.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3942.method_cache,this__3942.method_table,this__3942.cached_hierarchy,this__3942.hierarchy);
}
var temp__3695__auto____3943 = cljs.core.deref.call(null,this__3942.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3943))
{var target_fn__3944 = temp__3695__auto____3943;

return target_fn__3944;
} else
{var temp__3695__auto____3945 = cljs.core.find_and_cache_best_method.call(null,this__3942.name,dispatch_val,this__3942.hierarchy,this__3942.method_table,this__3942.prefer_table,this__3942.method_cache,this__3942.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3945))
{var target_fn__3946 = temp__3695__auto____3945;

return target_fn__3946;
} else
{return cljs.core.deref.call(null,this__3942.method_table).call(null,this__3942.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3947 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3947.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3947.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3947.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3947.method_cache,this__3947.method_table,this__3947.cached_hierarchy,this__3947.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3948 = this;
return cljs.core.deref.call(null,this__3948.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3949 = this;
return cljs.core.deref.call(null,this__3949.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3950 = this;
return cljs.core.do_invoke.call(null,mf,this__3950.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3951__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3951 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3951__delegate.call(this, _, args);
};
G__3951.cljs$lang$maxFixedArity = 1;
G__3951.cljs$lang$applyTo = (function (arglist__3952){
var _ = cljs.core.first(arglist__3952);
var args = cljs.core.rest(arglist__3952);
return G__3951__delegate.call(this, _, args);
});
return G__3951;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
