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
var or__3576__auto____5482 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____5482))
{return or__3576__auto____5482;
} else
{var or__3576__auto____5483 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____5483))
{return or__3576__auto____5483;
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
if(cljs.core.truth_((function (){var and__3574__auto____5484 = coll;

if(cljs.core.truth_(and__3574__auto____5484))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____5484;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____5485 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5485))
{return or__3576__auto____5485;
} else
{var or__3576__auto____5486 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3576__auto____5486))
{return or__3576__auto____5486;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____5487 = coll;

if(cljs.core.truth_(and__3574__auto____5487))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____5487;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____5488 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5488))
{return or__3576__auto____5488;
} else
{var or__3576__auto____5489 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3576__auto____5489))
{return or__3576__auto____5489;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____5490 = coll;

if(cljs.core.truth_(and__3574__auto____5490))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____5490;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____5491 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5491))
{return or__3576__auto____5491;
} else
{var or__3576__auto____5492 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3576__auto____5492))
{return or__3576__auto____5492;
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
var _nth__5499 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____5493 = coll;

if(cljs.core.truth_(and__3574__auto____5493))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____5493;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____5494 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5494))
{return or__3576__auto____5494;
} else
{var or__3576__auto____5495 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3576__auto____5495))
{return or__3576__auto____5495;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__5500 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____5496 = coll;

if(cljs.core.truth_(and__3574__auto____5496))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____5496;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____5497 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5497))
{return or__3576__auto____5497;
} else
{var or__3576__auto____5498 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3576__auto____5498))
{return or__3576__auto____5498;
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
return _nth__5499.call(this,coll,n);
case  3 :
return _nth__5500.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____5502 = coll;

if(cljs.core.truth_(and__3574__auto____5502))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____5502;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____5503 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5503))
{return or__3576__auto____5503;
} else
{var or__3576__auto____5504 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3576__auto____5504))
{return or__3576__auto____5504;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____5505 = coll;

if(cljs.core.truth_(and__3574__auto____5505))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____5505;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____5506 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5506))
{return or__3576__auto____5506;
} else
{var or__3576__auto____5507 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3576__auto____5507))
{return or__3576__auto____5507;
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
var _lookup__5514 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____5508 = o;

if(cljs.core.truth_(and__3574__auto____5508))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____5508;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____5509 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5509))
{return or__3576__auto____5509;
} else
{var or__3576__auto____5510 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3576__auto____5510))
{return or__3576__auto____5510;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__5515 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____5511 = o;

if(cljs.core.truth_(and__3574__auto____5511))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____5511;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____5512 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5512))
{return or__3576__auto____5512;
} else
{var or__3576__auto____5513 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3576__auto____5513))
{return or__3576__auto____5513;
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
return _lookup__5514.call(this,o,k);
case  3 :
return _lookup__5515.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____5517 = coll;

if(cljs.core.truth_(and__3574__auto____5517))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____5517;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____5518 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5518))
{return or__3576__auto____5518;
} else
{var or__3576__auto____5519 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____5519))
{return or__3576__auto____5519;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____5520 = coll;

if(cljs.core.truth_(and__3574__auto____5520))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____5520;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____5521 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5521))
{return or__3576__auto____5521;
} else
{var or__3576__auto____5522 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3576__auto____5522))
{return or__3576__auto____5522;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____5523 = coll;

if(cljs.core.truth_(and__3574__auto____5523))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____5523;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____5524 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5524))
{return or__3576__auto____5524;
} else
{var or__3576__auto____5525 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3576__auto____5525))
{return or__3576__auto____5525;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____5526 = coll;

if(cljs.core.truth_(and__3574__auto____5526))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____5526;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____5527 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5527))
{return or__3576__auto____5527;
} else
{var or__3576__auto____5528 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3576__auto____5528))
{return or__3576__auto____5528;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____5529 = coll;

if(cljs.core.truth_(and__3574__auto____5529))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____5529;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____5530 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5530))
{return or__3576__auto____5530;
} else
{var or__3576__auto____5531 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3576__auto____5531))
{return or__3576__auto____5531;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____5532 = coll;

if(cljs.core.truth_(and__3574__auto____5532))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____5532;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____5533 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5533))
{return or__3576__auto____5533;
} else
{var or__3576__auto____5534 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3576__auto____5534))
{return or__3576__auto____5534;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____5535 = coll;

if(cljs.core.truth_(and__3574__auto____5535))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____5535;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____5536 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5536))
{return or__3576__auto____5536;
} else
{var or__3576__auto____5537 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3576__auto____5537))
{return or__3576__auto____5537;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____5538 = o;

if(cljs.core.truth_(and__3574__auto____5538))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____5538;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____5539 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5539))
{return or__3576__auto____5539;
} else
{var or__3576__auto____5540 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3576__auto____5540))
{return or__3576__auto____5540;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____5541 = o;

if(cljs.core.truth_(and__3574__auto____5541))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____5541;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____5542 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5542))
{return or__3576__auto____5542;
} else
{var or__3576__auto____5543 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3576__auto____5543))
{return or__3576__auto____5543;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____5544 = o;

if(cljs.core.truth_(and__3574__auto____5544))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____5544;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____5545 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5545))
{return or__3576__auto____5545;
} else
{var or__3576__auto____5546 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3576__auto____5546))
{return or__3576__auto____5546;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____5547 = o;

if(cljs.core.truth_(and__3574__auto____5547))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____5547;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____5548 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5548))
{return or__3576__auto____5548;
} else
{var or__3576__auto____5549 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3576__auto____5549))
{return or__3576__auto____5549;
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
var _reduce__5556 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____5550 = coll;

if(cljs.core.truth_(and__3574__auto____5550))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____5550;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____5551 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5551))
{return or__3576__auto____5551;
} else
{var or__3576__auto____5552 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3576__auto____5552))
{return or__3576__auto____5552;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__5557 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____5553 = coll;

if(cljs.core.truth_(and__3574__auto____5553))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____5553;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____5554 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____5554))
{return or__3576__auto____5554;
} else
{var or__3576__auto____5555 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3576__auto____5555))
{return or__3576__auto____5555;
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
return _reduce__5556.call(this,coll,f);
case  3 :
return _reduce__5557.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____5559 = o;

if(cljs.core.truth_(and__3574__auto____5559))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____5559;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____5560 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5560))
{return or__3576__auto____5560;
} else
{var or__3576__auto____5561 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3576__auto____5561))
{return or__3576__auto____5561;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____5562 = o;

if(cljs.core.truth_(and__3574__auto____5562))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____5562;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____5563 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5563))
{return or__3576__auto____5563;
} else
{var or__3576__auto____5564 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3576__auto____5564))
{return or__3576__auto____5564;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____5565 = o;

if(cljs.core.truth_(and__3574__auto____5565))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____5565;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____5566 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5566))
{return or__3576__auto____5566;
} else
{var or__3576__auto____5567 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3576__auto____5567))
{return or__3576__auto____5567;
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
if(cljs.core.truth_((function (){var and__3574__auto____5568 = o;

if(cljs.core.truth_(and__3574__auto____5568))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____5568;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____5569 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____5569))
{return or__3576__auto____5569;
} else
{var or__3576__auto____5570 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3576__auto____5570))
{return or__3576__auto____5570;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____5571 = d;

if(cljs.core.truth_(and__3574__auto____5571))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____5571;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____5572 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____5572))
{return or__3576__auto____5572;
} else
{var or__3576__auto____5573 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____5573))
{return or__3576__auto____5573;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3574__auto____5574 = this$;

if(cljs.core.truth_(and__3574__auto____5574))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3574__auto____5574;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3576__auto____5575 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3576__auto____5575))
{return or__3576__auto____5575;
} else
{var or__3576__auto____5576 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3576__auto____5576))
{return or__3576__auto____5576;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3574__auto____5577 = this$;

if(cljs.core.truth_(and__3574__auto____5577))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3574__auto____5577;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3576__auto____5578 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3576__auto____5578))
{return or__3576__auto____5578;
} else
{var or__3576__auto____5579 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3576__auto____5579))
{return or__3576__auto____5579;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3574__auto____5580 = this$;

if(cljs.core.truth_(and__3574__auto____5580))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3574__auto____5580;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3576__auto____5581 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3576__auto____5581))
{return or__3576__auto____5581;
} else
{var or__3576__auto____5582 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3576__auto____5582))
{return or__3576__auto____5582;
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
var G__5583 = null;
var G__5583__5584 = (function (o,k){
return null;
});
var G__5583__5585 = (function (o,k,not_found){
return not_found;
});
G__5583 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__5583__5584.call(this,o,k);
case  3 :
return G__5583__5585.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5583;
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
var G__5587 = null;
var G__5587__5588 = (function (_,f){
return f.call(null);
});
var G__5587__5589 = (function (_,f,start){
return start;
});
G__5587 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__5587__5588.call(this,_,f);
case  3 :
return G__5587__5589.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5587;
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
var G__5591 = null;
var G__5591__5592 = (function (_,n){
return null;
});
var G__5591__5593 = (function (_,n,not_found){
return not_found;
});
G__5591 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__5591__5592.call(this,_,n);
case  3 :
return G__5591__5593.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5591;
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
var ci_reduce__5601 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__5595 = cljs.core._nth.call(null,cicoll,0);
var n__5596 = 1;

while(true){
if(cljs.core.truth_((n__5596 < cljs.core._count.call(null,cicoll))))
{{
var G__5605 = f.call(null,val__5595,cljs.core._nth.call(null,cicoll,n__5596));
var G__5606 = (n__5596 + 1);
val__5595 = G__5605;
n__5596 = G__5606;
continue;
}
} else
{return val__5595;
}
break;
}
}
});
var ci_reduce__5602 = (function (cicoll,f,val){
var val__5597 = val;
var n__5598 = 0;

while(true){
if(cljs.core.truth_((n__5598 < cljs.core._count.call(null,cicoll))))
{{
var G__5607 = f.call(null,val__5597,cljs.core._nth.call(null,cicoll,n__5598));
var G__5608 = (n__5598 + 1);
val__5597 = G__5607;
n__5598 = G__5608;
continue;
}
} else
{return val__5597;
}
break;
}
});
var ci_reduce__5603 = (function (cicoll,f,val,idx){
var val__5599 = val;
var n__5600 = idx;

while(true){
if(cljs.core.truth_((n__5600 < cljs.core._count.call(null,cicoll))))
{{
var G__5609 = f.call(null,val__5599,cljs.core._nth.call(null,cicoll,n__5600));
var G__5610 = (n__5600 + 1);
val__5599 = G__5609;
n__5600 = G__5610;
continue;
}
} else
{return val__5599;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__5601.call(this,cicoll,f);
case  3 :
return ci_reduce__5602.call(this,cicoll,f,val);
case  4 :
return ci_reduce__5603.call(this,cicoll,f,val,idx);
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
var this__5611 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5624 = null;
var G__5624__5625 = (function (coll,f){
var this__5612 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__5612.a[this__5612.i]),(this__5612.i + 1));
});
var G__5624__5626 = (function (coll,f,start){
var this__5613 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__5613.i);
});
G__5624 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__5624__5625.call(this,coll,f);
case  3 :
return G__5624__5626.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5624;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5614 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5615 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5628 = null;
var G__5628__5629 = (function (coll,n){
var this__5616 = this;
var i__5617 = (n + this__5616.i);

if(cljs.core.truth_((i__5617 < this__5616.a.length)))
{return (this__5616.a[i__5617]);
} else
{return null;
}
});
var G__5628__5630 = (function (coll,n,not_found){
var this__5618 = this;
var i__5619 = (n + this__5618.i);

if(cljs.core.truth_((i__5619 < this__5618.a.length)))
{return (this__5618.a[i__5619]);
} else
{return not_found;
}
});
G__5628 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5628__5629.call(this,coll,n);
case  3 :
return G__5628__5630.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5628;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__5620 = this;
return (this__5620.a.length - this__5620.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__5621 = this;
return (this__5621.a[this__5621.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__5622 = this;
if(cljs.core.truth_(((this__5622.i + 1) < this__5622.a.length)))
{return (new cljs.core.IndexedSeq(this__5622.a,(this__5622.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__5623 = this;
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
var G__5632 = null;
var G__5632__5633 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__5632__5634 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__5632 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__5632__5633.call(this,array,f);
case  3 :
return G__5632__5634.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5632;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__5636 = null;
var G__5636__5637 = (function (array,k){
return (array[k]);
});
var G__5636__5638 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__5636 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__5636__5637.call(this,array,k);
case  3 :
return G__5636__5638.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5636;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__5640 = null;
var G__5640__5641 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__5640__5642 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__5640 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__5640__5641.call(this,array,n);
case  3 :
return G__5640__5642.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5640;
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
var temp__3726__auto____5644 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____5644))
{var s__5645 = temp__3726__auto____5644;

return cljs.core._first.call(null,s__5645);
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
var G__5646 = cljs.core.next.call(null,s);
s = G__5646;
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
var s__5647 = cljs.core.seq.call(null,x);
var n__5648 = 0;

while(true){
if(cljs.core.truth_(s__5647))
{{
var G__5649 = cljs.core.next.call(null,s__5647);
var G__5650 = (n__5648 + 1);
s__5647 = G__5649;
n__5648 = G__5650;
continue;
}
} else
{return n__5648;
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
var conj__5651 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__5652 = (function() { 
var G__5654__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__5655 = conj.call(null,coll,x);
var G__5656 = cljs.core.first.call(null,xs);
var G__5657 = cljs.core.next.call(null,xs);
coll = G__5655;
x = G__5656;
xs = G__5657;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__5654 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5654__delegate.call(this, coll, x, xs);
};
G__5654.cljs$lang$maxFixedArity = 2;
G__5654.cljs$lang$applyTo = (function (arglist__5658){
var coll = cljs.core.first(arglist__5658);
var x = cljs.core.first(cljs.core.next(arglist__5658));
var xs = cljs.core.rest(cljs.core.next(arglist__5658));
return G__5654__delegate.call(this, coll, x, xs);
});
return G__5654;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__5651.call(this,coll,x);
default:
return conj__5652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__5652.cljs$lang$applyTo;
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
var nth__5659 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__5660 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__5659.call(this,coll,n);
case  3 :
return nth__5660.call(this,coll,n,not_found);
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
var get__5662 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__5663 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__5662.call(this,o,k);
case  3 :
return get__5663.call(this,o,k,not_found);
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
var assoc__5666 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__5667 = (function() { 
var G__5669__delegate = function (coll,k,v,kvs){
while(true){
var ret__5665 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__5670 = ret__5665;
var G__5671 = cljs.core.first.call(null,kvs);
var G__5672 = cljs.core.second.call(null,kvs);
var G__5673 = cljs.core.nnext.call(null,kvs);
coll = G__5670;
k = G__5671;
v = G__5672;
kvs = G__5673;
continue;
}
} else
{return ret__5665;
}
break;
}
};
var G__5669 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5669__delegate.call(this, coll, k, v, kvs);
};
G__5669.cljs$lang$maxFixedArity = 3;
G__5669.cljs$lang$applyTo = (function (arglist__5674){
var coll = cljs.core.first(arglist__5674);
var k = cljs.core.first(cljs.core.next(arglist__5674));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5674)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5674)));
return G__5669__delegate.call(this, coll, k, v, kvs);
});
return G__5669;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__5666.call(this,coll,k,v);
default:
return assoc__5667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__5667.cljs$lang$applyTo;
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
var dissoc__5676 = (function (coll){
return coll;
});
var dissoc__5677 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__5678 = (function() { 
var G__5680__delegate = function (coll,k,ks){
while(true){
var ret__5675 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__5681 = ret__5675;
var G__5682 = cljs.core.first.call(null,ks);
var G__5683 = cljs.core.next.call(null,ks);
coll = G__5681;
k = G__5682;
ks = G__5683;
continue;
}
} else
{return ret__5675;
}
break;
}
};
var G__5680 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5680__delegate.call(this, coll, k, ks);
};
G__5680.cljs$lang$maxFixedArity = 2;
G__5680.cljs$lang$applyTo = (function (arglist__5684){
var coll = cljs.core.first(arglist__5684);
var k = cljs.core.first(cljs.core.next(arglist__5684));
var ks = cljs.core.rest(cljs.core.next(arglist__5684));
return G__5680__delegate.call(this, coll, k, ks);
});
return G__5680;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__5676.call(this,coll);
case  2 :
return dissoc__5677.call(this,coll,k);
default:
return dissoc__5678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__5678.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__320__auto____5685 = o;

if(cljs.core.truth_((function (){var and__3574__auto____5686 = x__320__auto____5685;

if(cljs.core.truth_(and__3574__auto____5686))
{var and__3574__auto____5687 = x__320__auto____5685.cljs$core$IMeta$;

if(cljs.core.truth_(and__3574__auto____5687))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__320__auto____5685));
} else
{return and__3574__auto____5687;
}
} else
{return and__3574__auto____5686;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__320__auto____5685);
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
var disj__5689 = (function (coll){
return coll;
});
var disj__5690 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__5691 = (function() { 
var G__5693__delegate = function (coll,k,ks){
while(true){
var ret__5688 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__5694 = ret__5688;
var G__5695 = cljs.core.first.call(null,ks);
var G__5696 = cljs.core.next.call(null,ks);
coll = G__5694;
k = G__5695;
ks = G__5696;
continue;
}
} else
{return ret__5688;
}
break;
}
};
var G__5693 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5693__delegate.call(this, coll, k, ks);
};
G__5693.cljs$lang$maxFixedArity = 2;
G__5693.cljs$lang$applyTo = (function (arglist__5697){
var coll = cljs.core.first(arglist__5697);
var k = cljs.core.first(cljs.core.next(arglist__5697));
var ks = cljs.core.rest(cljs.core.next(arglist__5697));
return G__5693__delegate.call(this, coll, k, ks);
});
return G__5693;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__5689.call(this,coll);
case  2 :
return disj__5690.call(this,coll,k);
default:
return disj__5691.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__5691.cljs$lang$applyTo;
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
{var x__320__auto____5698 = x;

if(cljs.core.truth_((function (){var and__3574__auto____5699 = x__320__auto____5698;

if(cljs.core.truth_(and__3574__auto____5699))
{var and__3574__auto____5700 = x__320__auto____5698.cljs$core$ICollection$;

if(cljs.core.truth_(and__3574__auto____5700))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__320__auto____5698));
} else
{return and__3574__auto____5700;
}
} else
{return and__3574__auto____5699;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__320__auto____5698);
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
{var x__320__auto____5701 = x;

if(cljs.core.truth_((function (){var and__3574__auto____5702 = x__320__auto____5701;

if(cljs.core.truth_(and__3574__auto____5702))
{var and__3574__auto____5703 = x__320__auto____5701.cljs$core$ISet$;

if(cljs.core.truth_(and__3574__auto____5703))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__320__auto____5701));
} else
{return and__3574__auto____5703;
}
} else
{return and__3574__auto____5702;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__320__auto____5701);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__320__auto____5704 = x;

if(cljs.core.truth_((function (){var and__3574__auto____5705 = x__320__auto____5704;

if(cljs.core.truth_(and__3574__auto____5705))
{var and__3574__auto____5706 = x__320__auto____5704.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3574__auto____5706))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__320__auto____5704));
} else
{return and__3574__auto____5706;
}
} else
{return and__3574__auto____5705;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__320__auto____5704);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__320__auto____5707 = x;

if(cljs.core.truth_((function (){var and__3574__auto____5708 = x__320__auto____5707;

if(cljs.core.truth_(and__3574__auto____5708))
{var and__3574__auto____5709 = x__320__auto____5707.cljs$core$ISequential$;

if(cljs.core.truth_(and__3574__auto____5709))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__320__auto____5707));
} else
{return and__3574__auto____5709;
}
} else
{return and__3574__auto____5708;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__320__auto____5707);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__320__auto____5710 = x;

if(cljs.core.truth_((function (){var and__3574__auto____5711 = x__320__auto____5710;

if(cljs.core.truth_(and__3574__auto____5711))
{var and__3574__auto____5712 = x__320__auto____5710.cljs$core$ICounted$;

if(cljs.core.truth_(and__3574__auto____5712))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__320__auto____5710));
} else
{return and__3574__auto____5712;
}
} else
{return and__3574__auto____5711;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__320__auto____5710);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__320__auto____5713 = x;

if(cljs.core.truth_((function (){var and__3574__auto____5714 = x__320__auto____5713;

if(cljs.core.truth_(and__3574__auto____5714))
{var and__3574__auto____5715 = x__320__auto____5713.cljs$core$IMap$;

if(cljs.core.truth_(and__3574__auto____5715))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__320__auto____5713));
} else
{return and__3574__auto____5715;
}
} else
{return and__3574__auto____5714;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__320__auto____5713);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__320__auto____5716 = x;

if(cljs.core.truth_((function (){var and__3574__auto____5717 = x__320__auto____5716;

if(cljs.core.truth_(and__3574__auto____5717))
{var and__3574__auto____5718 = x__320__auto____5716.cljs$core$IVector$;

if(cljs.core.truth_(and__3574__auto____5718))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__320__auto____5716));
} else
{return and__3574__auto____5718;
}
} else
{return and__3574__auto____5717;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__320__auto____5716);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__5719 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__5719.push(key);
}));
return keys__5719;
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
{var x__320__auto____5720 = s;

if(cljs.core.truth_((function (){var and__3574__auto____5721 = x__320__auto____5720;

if(cljs.core.truth_(and__3574__auto____5721))
{var and__3574__auto____5722 = x__320__auto____5720.cljs$core$ISeq$;

if(cljs.core.truth_(and__3574__auto____5722))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__320__auto____5720));
} else
{return and__3574__auto____5722;
}
} else
{return and__3574__auto____5721;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__320__auto____5720);
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
var and__3574__auto____5723 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____5723))
{return cljs.core.not.call(null,(function (){var or__3576__auto____5724 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____5724))
{return or__3576__auto____5724;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____5723;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____5725 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____5725))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____5725;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____5726 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____5726))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____5726;
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
var and__3574__auto____5727 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____5727))
{return (n == n.toFixed());
} else
{return and__3574__auto____5727;
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
if(cljs.core.truth_((function (){var and__3574__auto____5728 = coll;

if(cljs.core.truth_(and__3574__auto____5728))
{var and__3574__auto____5729 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____5729))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____5729;
}
} else
{return and__3574__auto____5728;
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
var distinct_QMARK___5734 = (function (x){
return true;
});
var distinct_QMARK___5735 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___5736 = (function() { 
var G__5738__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__5730 = cljs.core.set([y,x]);
var xs__5731 = more;

while(true){
var x__5732 = cljs.core.first.call(null,xs__5731);
var etc__5733 = cljs.core.next.call(null,xs__5731);

if(cljs.core.truth_(xs__5731))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__5730,x__5732)))
{return false;
} else
{{
var G__5739 = cljs.core.conj.call(null,s__5730,x__5732);
var G__5740 = etc__5733;
s__5730 = G__5739;
xs__5731 = G__5740;
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
var G__5738 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5738__delegate.call(this, x, y, more);
};
G__5738.cljs$lang$maxFixedArity = 2;
G__5738.cljs$lang$applyTo = (function (arglist__5741){
var x = cljs.core.first(arglist__5741);
var y = cljs.core.first(cljs.core.next(arglist__5741));
var more = cljs.core.rest(cljs.core.next(arglist__5741));
return G__5738__delegate.call(this, x, y, more);
});
return G__5738;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___5734.call(this,x);
case  2 :
return distinct_QMARK___5735.call(this,x,y);
default:
return distinct_QMARK___5736.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___5736.cljs$lang$applyTo;
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
var r__5742 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__5742)))
{return r__5742;
} else
{if(cljs.core.truth_(r__5742))
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
var sort__5744 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__5745 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__5743 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__5743,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__5743);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__5744.call(this,comp);
case  2 :
return sort__5745.call(this,comp,coll);
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
var sort_by__5747 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__5748 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__5747.call(this,keyfn,comp);
case  3 :
return sort_by__5748.call(this,keyfn,comp,coll);
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
var reduce__5750 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__5751 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__5750.call(this,f,val);
case  3 :
return reduce__5751.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__5757 = (function (f,coll){
var temp__3723__auto____5753 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____5753))
{var s__5754 = temp__3723__auto____5753;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__5754),cljs.core.next.call(null,s__5754));
} else
{return f.call(null);
}
});
var seq_reduce__5758 = (function (f,val,coll){
var val__5755 = val;
var coll__5756 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__5756))
{{
var G__5760 = f.call(null,val__5755,cljs.core.first.call(null,coll__5756));
var G__5761 = cljs.core.next.call(null,coll__5756);
val__5755 = G__5760;
coll__5756 = G__5761;
continue;
}
} else
{return val__5755;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__5757.call(this,f,val);
case  3 :
return seq_reduce__5758.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__5762 = null;
var G__5762__5763 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__5762__5764 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__5762 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__5762__5763.call(this,coll,f);
case  3 :
return G__5762__5764.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5762;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___5766 = (function (){
return 0;
});
var _PLUS___5767 = (function (x){
return x;
});
var _PLUS___5768 = (function (x,y){
return (x + y);
});
var _PLUS___5769 = (function() { 
var G__5771__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__5771 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5771__delegate.call(this, x, y, more);
};
G__5771.cljs$lang$maxFixedArity = 2;
G__5771.cljs$lang$applyTo = (function (arglist__5772){
var x = cljs.core.first(arglist__5772);
var y = cljs.core.first(cljs.core.next(arglist__5772));
var more = cljs.core.rest(cljs.core.next(arglist__5772));
return G__5771__delegate.call(this, x, y, more);
});
return G__5771;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___5766.call(this);
case  1 :
return _PLUS___5767.call(this,x);
case  2 :
return _PLUS___5768.call(this,x,y);
default:
return _PLUS___5769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___5769.cljs$lang$applyTo;
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
var ___5773 = (function (x){
return (- x);
});
var ___5774 = (function (x,y){
return (x - y);
});
var ___5775 = (function() { 
var G__5777__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__5777 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5777__delegate.call(this, x, y, more);
};
G__5777.cljs$lang$maxFixedArity = 2;
G__5777.cljs$lang$applyTo = (function (arglist__5778){
var x = cljs.core.first(arglist__5778);
var y = cljs.core.first(cljs.core.next(arglist__5778));
var more = cljs.core.rest(cljs.core.next(arglist__5778));
return G__5777__delegate.call(this, x, y, more);
});
return G__5777;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___5773.call(this,x);
case  2 :
return ___5774.call(this,x,y);
default:
return ___5775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___5775.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___5779 = (function (){
return 1;
});
var _STAR___5780 = (function (x){
return x;
});
var _STAR___5781 = (function (x,y){
return (x * y);
});
var _STAR___5782 = (function() { 
var G__5784__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__5784 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5784__delegate.call(this, x, y, more);
};
G__5784.cljs$lang$maxFixedArity = 2;
G__5784.cljs$lang$applyTo = (function (arglist__5785){
var x = cljs.core.first(arglist__5785);
var y = cljs.core.first(cljs.core.next(arglist__5785));
var more = cljs.core.rest(cljs.core.next(arglist__5785));
return G__5784__delegate.call(this, x, y, more);
});
return G__5784;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___5779.call(this);
case  1 :
return _STAR___5780.call(this,x);
case  2 :
return _STAR___5781.call(this,x,y);
default:
return _STAR___5782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___5782.cljs$lang$applyTo;
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
var _SLASH___5786 = (function (x){
return (1 / x);
});
var _SLASH___5787 = (function (x,y){
return (x / y);
});
var _SLASH___5788 = (function() { 
var G__5790__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__5790 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5790__delegate.call(this, x, y, more);
};
G__5790.cljs$lang$maxFixedArity = 2;
G__5790.cljs$lang$applyTo = (function (arglist__5791){
var x = cljs.core.first(arglist__5791);
var y = cljs.core.first(cljs.core.next(arglist__5791));
var more = cljs.core.rest(cljs.core.next(arglist__5791));
return G__5790__delegate.call(this, x, y, more);
});
return G__5790;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___5786.call(this,x);
case  2 :
return _SLASH___5787.call(this,x,y);
default:
return _SLASH___5788.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___5788.cljs$lang$applyTo;
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
var _LT___5792 = (function (x){
return true;
});
var _LT___5793 = (function (x,y){
return (x < y);
});
var _LT___5794 = (function() { 
var G__5796__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5797 = y;
var G__5798 = cljs.core.first.call(null,more);
var G__5799 = cljs.core.next.call(null,more);
x = G__5797;
y = G__5798;
more = G__5799;
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
var G__5796 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5796__delegate.call(this, x, y, more);
};
G__5796.cljs$lang$maxFixedArity = 2;
G__5796.cljs$lang$applyTo = (function (arglist__5800){
var x = cljs.core.first(arglist__5800);
var y = cljs.core.first(cljs.core.next(arglist__5800));
var more = cljs.core.rest(cljs.core.next(arglist__5800));
return G__5796__delegate.call(this, x, y, more);
});
return G__5796;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___5792.call(this,x);
case  2 :
return _LT___5793.call(this,x,y);
default:
return _LT___5794.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___5794.cljs$lang$applyTo;
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
var _LT__EQ___5801 = (function (x){
return true;
});
var _LT__EQ___5802 = (function (x,y){
return (x <= y);
});
var _LT__EQ___5803 = (function() { 
var G__5805__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5806 = y;
var G__5807 = cljs.core.first.call(null,more);
var G__5808 = cljs.core.next.call(null,more);
x = G__5806;
y = G__5807;
more = G__5808;
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
var G__5805 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5805__delegate.call(this, x, y, more);
};
G__5805.cljs$lang$maxFixedArity = 2;
G__5805.cljs$lang$applyTo = (function (arglist__5809){
var x = cljs.core.first(arglist__5809);
var y = cljs.core.first(cljs.core.next(arglist__5809));
var more = cljs.core.rest(cljs.core.next(arglist__5809));
return G__5805__delegate.call(this, x, y, more);
});
return G__5805;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___5801.call(this,x);
case  2 :
return _LT__EQ___5802.call(this,x,y);
default:
return _LT__EQ___5803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___5803.cljs$lang$applyTo;
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
var _GT___5810 = (function (x){
return true;
});
var _GT___5811 = (function (x,y){
return (x > y);
});
var _GT___5812 = (function() { 
var G__5814__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5815 = y;
var G__5816 = cljs.core.first.call(null,more);
var G__5817 = cljs.core.next.call(null,more);
x = G__5815;
y = G__5816;
more = G__5817;
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
var G__5814 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5814__delegate.call(this, x, y, more);
};
G__5814.cljs$lang$maxFixedArity = 2;
G__5814.cljs$lang$applyTo = (function (arglist__5818){
var x = cljs.core.first(arglist__5818);
var y = cljs.core.first(cljs.core.next(arglist__5818));
var more = cljs.core.rest(cljs.core.next(arglist__5818));
return G__5814__delegate.call(this, x, y, more);
});
return G__5814;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___5810.call(this,x);
case  2 :
return _GT___5811.call(this,x,y);
default:
return _GT___5812.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___5812.cljs$lang$applyTo;
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
var _GT__EQ___5819 = (function (x){
return true;
});
var _GT__EQ___5820 = (function (x,y){
return (x >= y);
});
var _GT__EQ___5821 = (function() { 
var G__5823__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5824 = y;
var G__5825 = cljs.core.first.call(null,more);
var G__5826 = cljs.core.next.call(null,more);
x = G__5824;
y = G__5825;
more = G__5826;
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
var G__5823 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5823__delegate.call(this, x, y, more);
};
G__5823.cljs$lang$maxFixedArity = 2;
G__5823.cljs$lang$applyTo = (function (arglist__5827){
var x = cljs.core.first(arglist__5827);
var y = cljs.core.first(cljs.core.next(arglist__5827));
var more = cljs.core.rest(cljs.core.next(arglist__5827));
return G__5823__delegate.call(this, x, y, more);
});
return G__5823;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___5819.call(this,x);
case  2 :
return _GT__EQ___5820.call(this,x,y);
default:
return _GT__EQ___5821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___5821.cljs$lang$applyTo;
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
var max__5828 = (function (x){
return x;
});
var max__5829 = (function (x,y){
return ((x > y) ? x : y);
});
var max__5830 = (function() { 
var G__5832__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__5832 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5832__delegate.call(this, x, y, more);
};
G__5832.cljs$lang$maxFixedArity = 2;
G__5832.cljs$lang$applyTo = (function (arglist__5833){
var x = cljs.core.first(arglist__5833);
var y = cljs.core.first(cljs.core.next(arglist__5833));
var more = cljs.core.rest(cljs.core.next(arglist__5833));
return G__5832__delegate.call(this, x, y, more);
});
return G__5832;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__5828.call(this,x);
case  2 :
return max__5829.call(this,x,y);
default:
return max__5830.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__5830.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__5834 = (function (x){
return x;
});
var min__5835 = (function (x,y){
return ((x < y) ? x : y);
});
var min__5836 = (function() { 
var G__5838__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__5838 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5838__delegate.call(this, x, y, more);
};
G__5838.cljs$lang$maxFixedArity = 2;
G__5838.cljs$lang$applyTo = (function (arglist__5839){
var x = cljs.core.first(arglist__5839);
var y = cljs.core.first(cljs.core.next(arglist__5839));
var more = cljs.core.rest(cljs.core.next(arglist__5839));
return G__5838__delegate.call(this, x, y, more);
});
return G__5838;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__5834.call(this,x);
case  2 :
return min__5835.call(this,x,y);
default:
return min__5836.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__5836.cljs$lang$applyTo;
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
var rem__5840 = (n % d);

return cljs.core.fix.call(null,((n - rem__5840) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__5841 = cljs.core.quot.call(null,n,d);

return (n - (d * q__5841));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__5842 = (function (){
return Math.random.call(null);
});
var rand__5843 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__5842.call(this);
case  1 :
return rand__5843.call(this,n);
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
var _EQ__EQ___5845 = (function (x){
return true;
});
var _EQ__EQ___5846 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___5847 = (function() { 
var G__5849__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__5850 = y;
var G__5851 = cljs.core.first.call(null,more);
var G__5852 = cljs.core.next.call(null,more);
x = G__5850;
y = G__5851;
more = G__5852;
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
var G__5849 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5849__delegate.call(this, x, y, more);
};
G__5849.cljs$lang$maxFixedArity = 2;
G__5849.cljs$lang$applyTo = (function (arglist__5853){
var x = cljs.core.first(arglist__5853);
var y = cljs.core.first(cljs.core.next(arglist__5853));
var more = cljs.core.rest(cljs.core.next(arglist__5853));
return G__5849__delegate.call(this, x, y, more);
});
return G__5849;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___5845.call(this,x);
case  2 :
return _EQ__EQ___5846.call(this,x,y);
default:
return _EQ__EQ___5847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___5847.cljs$lang$applyTo;
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
var n__5854 = n;
var xs__5855 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____5856 = xs__5855;

if(cljs.core.truth_(and__3574__auto____5856))
{return (n__5854 > 0);
} else
{return and__3574__auto____5856;
}
})()))
{{
var G__5857 = (n__5854 - 1);
var G__5858 = cljs.core.next.call(null,xs__5855);
n__5854 = G__5857;
xs__5855 = G__5858;
continue;
}
} else
{return xs__5855;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__5863 = null;
var G__5863__5864 = (function (coll,n){
var temp__3723__auto____5859 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____5859))
{var xs__5860 = temp__3723__auto____5859;

return cljs.core.first.call(null,xs__5860);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__5863__5865 = (function (coll,n,not_found){
var temp__3723__auto____5861 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____5861))
{var xs__5862 = temp__3723__auto____5861;

return cljs.core.first.call(null,xs__5862);
} else
{return not_found;
}
});
G__5863 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5863__5864.call(this,coll,n);
case  3 :
return G__5863__5865.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5863;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___5867 = (function (){
return "";
});
var str_STAR___5868 = (function (x){
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
var str_STAR___5869 = (function() { 
var G__5871__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__5872 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__5873 = cljs.core.next.call(null,more);
sb = G__5872;
more = G__5873;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__5871 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5871__delegate.call(this, x, ys);
};
G__5871.cljs$lang$maxFixedArity = 1;
G__5871.cljs$lang$applyTo = (function (arglist__5874){
var x = cljs.core.first(arglist__5874);
var ys = cljs.core.rest(arglist__5874);
return G__5871__delegate.call(this, x, ys);
});
return G__5871;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___5867.call(this);
case  1 :
return str_STAR___5868.call(this,x);
default:
return str_STAR___5869.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___5869.cljs$lang$applyTo;
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
var str__5875 = (function (){
return "";
});
var str__5876 = (function (x){
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
var str__5877 = (function() { 
var G__5879__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__5879 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5879__delegate.call(this, x, ys);
};
G__5879.cljs$lang$maxFixedArity = 1;
G__5879.cljs$lang$applyTo = (function (arglist__5880){
var x = cljs.core.first(arglist__5880);
var ys = cljs.core.rest(arglist__5880);
return G__5879__delegate.call(this, x, ys);
});
return G__5879;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__5875.call(this);
case  1 :
return str__5876.call(this,x);
default:
return str__5877.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__5877.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__5881 = (function (s,start){
return s.substring(start);
});
var subs__5882 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__5881.call(this,s,start);
case  3 :
return subs__5882.call(this,s,start,end);
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
var symbol__5884 = (function (name){
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
var symbol__5885 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__5884.call(this,ns);
case  2 :
return symbol__5885.call(this,ns,name);
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
var keyword__5887 = (function (name){
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
var keyword__5888 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__5887.call(this,ns);
case  2 :
return keyword__5888.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__5890 = cljs.core.seq.call(null,x);
var ys__5891 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__5890)))
{return cljs.core.nil_QMARK_.call(null,ys__5891);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__5891)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__5890),cljs.core.first.call(null,ys__5891))))
{{
var G__5892 = cljs.core.next.call(null,xs__5890);
var G__5893 = cljs.core.next.call(null,ys__5891);
xs__5890 = G__5892;
ys__5891 = G__5893;
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
return cljs.core.reduce.call(null,(function (p1__5894_SHARP_,p2__5895_SHARP_){
return cljs.core.hash_combine.call(null,p1__5894_SHARP_,cljs.core.hash.call(null,p2__5895_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__5896__5897 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__5896__5897))
{var G__5899__5901 = cljs.core.first.call(null,G__5896__5897);
var vec__5900__5902 = G__5899__5901;
var key_name__5903 = cljs.core.nth.call(null,vec__5900__5902,0,null);
var f__5904 = cljs.core.nth.call(null,vec__5900__5902,1,null);
var G__5896__5905 = G__5896__5897;

var G__5899__5906 = G__5899__5901;
var G__5896__5907 = G__5896__5905;

while(true){
var vec__5908__5909 = G__5899__5906;
var key_name__5910 = cljs.core.nth.call(null,vec__5908__5909,0,null);
var f__5911 = cljs.core.nth.call(null,vec__5908__5909,1,null);
var G__5896__5912 = G__5896__5907;

var str_name__5913 = cljs.core.name.call(null,key_name__5910);

obj[str_name__5913] = f__5911;
var temp__3726__auto____5914 = cljs.core.next.call(null,G__5896__5912);

if(cljs.core.truth_(temp__3726__auto____5914))
{var G__5896__5915 = temp__3726__auto____5914;

{
var G__5916 = cljs.core.first.call(null,G__5896__5915);
var G__5917 = G__5896__5915;
G__5899__5906 = G__5916;
G__5896__5907 = G__5917;
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
var this__5918 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5919 = this;
return (new cljs.core.List(this__5919.meta,o,coll,(this__5919.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5920 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5921 = this;
return this__5921.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5922 = this;
return this__5922.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5923 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5924 = this;
return this__5924.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5925 = this;
return this__5925.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5926 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5927 = this;
return (new cljs.core.List(meta,this__5927.first,this__5927.rest,this__5927.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5928 = this;
return this__5928.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5929 = this;
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
var this__5930 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5931 = this;
return (new cljs.core.List(this__5931.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5932 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5933 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5934 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5935 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5936 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5937 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5938 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5939 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5940 = this;
return this__5940.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5941 = this;
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
list.cljs$lang$applyTo = (function (arglist__5942){
var items = cljs.core.seq( arglist__5942 );;
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
var this__5943 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5944 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5945 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5946 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5946.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5947 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5948 = this;
return this__5948.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5949 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__5949.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__5949.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5950 = this;
return this__5950.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5951 = this;
return (new cljs.core.Cons(meta,this__5951.first,this__5951.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__5952 = null;
var G__5952__5953 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__5952__5954 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__5952 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__5952__5953.call(this,string,f);
case  3 :
return G__5952__5954.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5952;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__5956 = null;
var G__5956__5957 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__5956__5958 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__5956 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__5956__5957.call(this,string,k);
case  3 :
return G__5956__5958.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5956;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__5960 = null;
var G__5960__5961 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__5960__5962 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__5960 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__5960__5961.call(this,string,n);
case  3 :
return G__5960__5962.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5960;
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
var G__5964 = null;
var G__5964__5965 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__5964__5966 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__5964 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__5964__5965.call(this,_,coll);
case  3 :
return G__5964__5966.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5964;
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
var x__5968 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__5968;
} else
{lazy_seq.x = x__5968.call(null);
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
var this__5969 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5970 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5971 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5972 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5972.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5973 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5974 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5975 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5976 = this;
return this__5976.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5977 = this;
return (new cljs.core.LazySeq(meta,this__5977.realized,this__5977.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__5978 = cljs.core.array.call(null);

var s__5979 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5979)))
{ary__5978.push(cljs.core.first.call(null,s__5979));
{
var G__5980 = cljs.core.next.call(null,s__5979);
s__5979 = G__5980;
continue;
}
} else
{return ary__5978;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__5981 = s;
var i__5982 = n;
var sum__5983 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____5984 = (i__5982 > 0);

if(cljs.core.truth_(and__3574__auto____5984))
{return cljs.core.seq.call(null,s__5981);
} else
{return and__3574__auto____5984;
}
})()))
{{
var G__5985 = cljs.core.next.call(null,s__5981);
var G__5986 = (i__5982 - 1);
var G__5987 = (sum__5983 + 1);
s__5981 = G__5985;
i__5982 = G__5986;
sum__5983 = G__5987;
continue;
}
} else
{return sum__5983;
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
var concat__5991 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__5992 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__5993 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5988 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__5988))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__5988),concat.call(null,cljs.core.rest.call(null,s__5988),y));
} else
{return y;
}
})));
});
var concat__5994 = (function() { 
var G__5996__delegate = function (x,y,zs){
var cat__5990 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__5989 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__5989))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__5989),cat.call(null,cljs.core.rest.call(null,xys__5989),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__5990.call(null,concat.call(null,x,y),zs);
};
var G__5996 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5996__delegate.call(this, x, y, zs);
};
G__5996.cljs$lang$maxFixedArity = 2;
G__5996.cljs$lang$applyTo = (function (arglist__5997){
var x = cljs.core.first(arglist__5997);
var y = cljs.core.first(cljs.core.next(arglist__5997));
var zs = cljs.core.rest(cljs.core.next(arglist__5997));
return G__5996__delegate.call(this, x, y, zs);
});
return G__5996;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__5991.call(this);
case  1 :
return concat__5992.call(this,x);
case  2 :
return concat__5993.call(this,x,y);
default:
return concat__5994.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__5994.cljs$lang$applyTo;
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
var list_STAR___5998 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___5999 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___6000 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___6001 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___6002 = (function() { 
var G__6004__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__6004 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6004__delegate.call(this, a, b, c, d, more);
};
G__6004.cljs$lang$maxFixedArity = 4;
G__6004.cljs$lang$applyTo = (function (arglist__6005){
var a = cljs.core.first(arglist__6005);
var b = cljs.core.first(cljs.core.next(arglist__6005));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6005)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6005))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6005))));
return G__6004__delegate.call(this, a, b, c, d, more);
});
return G__6004;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___5998.call(this,a);
case  2 :
return list_STAR___5999.call(this,a,b);
case  3 :
return list_STAR___6000.call(this,a,b,c);
case  4 :
return list_STAR___6001.call(this,a,b,c,d);
default:
return list_STAR___6002.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___6002.cljs$lang$applyTo;
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
var apply__6015 = (function (f,args){
var fixed_arity__6006 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__6006 + 1)) <= fixed_arity__6006)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__6016 = (function (f,x,args){
var arglist__6007 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__6008 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6007,fixed_arity__6008) <= fixed_arity__6008)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6007));
} else
{return f.cljs$lang$applyTo(arglist__6007);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6007));
}
});
var apply__6017 = (function (f,x,y,args){
var arglist__6009 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__6010 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6009,fixed_arity__6010) <= fixed_arity__6010)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6009));
} else
{return f.cljs$lang$applyTo(arglist__6009);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6009));
}
});
var apply__6018 = (function (f,x,y,z,args){
var arglist__6011 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__6012 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6011,fixed_arity__6012) <= fixed_arity__6012)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6011));
} else
{return f.cljs$lang$applyTo(arglist__6011);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6011));
}
});
var apply__6019 = (function() { 
var G__6021__delegate = function (f,a,b,c,d,args){
var arglist__6013 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__6014 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__6013,fixed_arity__6014) <= fixed_arity__6014)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__6013));
} else
{return f.cljs$lang$applyTo(arglist__6013);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__6013));
}
};
var G__6021 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__6021__delegate.call(this, f, a, b, c, d, args);
};
G__6021.cljs$lang$maxFixedArity = 5;
G__6021.cljs$lang$applyTo = (function (arglist__6022){
var f = cljs.core.first(arglist__6022);
var a = cljs.core.first(cljs.core.next(arglist__6022));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6022)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6022))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6022)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6022)))));
return G__6021__delegate.call(this, f, a, b, c, d, args);
});
return G__6021;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__6015.call(this,f,a);
case  3 :
return apply__6016.call(this,f,a,b);
case  4 :
return apply__6017.call(this,f,a,b,c);
case  5 :
return apply__6018.call(this,f,a,b,c,d);
default:
return apply__6019.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6019.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__6023){
var obj = cljs.core.first(arglist__6023);
var f = cljs.core.first(cljs.core.next(arglist__6023));
var args = cljs.core.rest(cljs.core.next(arglist__6023));
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
var not_EQ___6024 = (function (x){
return false;
});
var not_EQ___6025 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___6026 = (function() { 
var G__6028__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__6028 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6028__delegate.call(this, x, y, more);
};
G__6028.cljs$lang$maxFixedArity = 2;
G__6028.cljs$lang$applyTo = (function (arglist__6029){
var x = cljs.core.first(arglist__6029);
var y = cljs.core.first(cljs.core.next(arglist__6029));
var more = cljs.core.rest(cljs.core.next(arglist__6029));
return G__6028__delegate.call(this, x, y, more);
});
return G__6028;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___6024.call(this,x);
case  2 :
return not_EQ___6025.call(this,x,y);
default:
return not_EQ___6026.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___6026.cljs$lang$applyTo;
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
var G__6030 = pred;
var G__6031 = cljs.core.next.call(null,coll);
pred = G__6030;
coll = G__6031;
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
{var or__3576__auto____6032 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____6032))
{return or__3576__auto____6032;
} else
{{
var G__6033 = pred;
var G__6034 = cljs.core.next.call(null,coll);
pred = G__6033;
coll = G__6034;
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
var G__6035 = null;
var G__6035__6036 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__6035__6037 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__6035__6038 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__6035__6039 = (function() { 
var G__6041__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__6041 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6041__delegate.call(this, x, y, zs);
};
G__6041.cljs$lang$maxFixedArity = 2;
G__6041.cljs$lang$applyTo = (function (arglist__6042){
var x = cljs.core.first(arglist__6042);
var y = cljs.core.first(cljs.core.next(arglist__6042));
var zs = cljs.core.rest(cljs.core.next(arglist__6042));
return G__6041__delegate.call(this, x, y, zs);
});
return G__6041;
})()
;
G__6035 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__6035__6036.call(this);
case  1 :
return G__6035__6037.call(this,x);
case  2 :
return G__6035__6038.call(this,x,y);
default:
return G__6035__6039.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6035.cljs$lang$maxFixedArity = 2;
G__6035.cljs$lang$applyTo = G__6035__6039.cljs$lang$applyTo;
return G__6035;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__6043__delegate = function (args){
return x;
};
var G__6043 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6043__delegate.call(this, args);
};
G__6043.cljs$lang$maxFixedArity = 0;
G__6043.cljs$lang$applyTo = (function (arglist__6044){
var args = cljs.core.seq( arglist__6044 );;
return G__6043__delegate.call(this, args);
});
return G__6043;
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
var comp__6048 = (function (){
return cljs.core.identity;
});
var comp__6049 = (function (f){
return f;
});
var comp__6050 = (function (f,g){
return (function() {
var G__6054 = null;
var G__6054__6055 = (function (){
return f.call(null,g.call(null));
});
var G__6054__6056 = (function (x){
return f.call(null,g.call(null,x));
});
var G__6054__6057 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__6054__6058 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__6054__6059 = (function() { 
var G__6061__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__6061 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6061__delegate.call(this, x, y, z, args);
};
G__6061.cljs$lang$maxFixedArity = 3;
G__6061.cljs$lang$applyTo = (function (arglist__6062){
var x = cljs.core.first(arglist__6062);
var y = cljs.core.first(cljs.core.next(arglist__6062));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6062)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6062)));
return G__6061__delegate.call(this, x, y, z, args);
});
return G__6061;
})()
;
G__6054 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6054__6055.call(this);
case  1 :
return G__6054__6056.call(this,x);
case  2 :
return G__6054__6057.call(this,x,y);
case  3 :
return G__6054__6058.call(this,x,y,z);
default:
return G__6054__6059.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6054.cljs$lang$maxFixedArity = 3;
G__6054.cljs$lang$applyTo = G__6054__6059.cljs$lang$applyTo;
return G__6054;
})()
});
var comp__6051 = (function (f,g,h){
return (function() {
var G__6063 = null;
var G__6063__6064 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__6063__6065 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__6063__6066 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__6063__6067 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__6063__6068 = (function() { 
var G__6070__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__6070 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6070__delegate.call(this, x, y, z, args);
};
G__6070.cljs$lang$maxFixedArity = 3;
G__6070.cljs$lang$applyTo = (function (arglist__6071){
var x = cljs.core.first(arglist__6071);
var y = cljs.core.first(cljs.core.next(arglist__6071));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6071)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6071)));
return G__6070__delegate.call(this, x, y, z, args);
});
return G__6070;
})()
;
G__6063 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6063__6064.call(this);
case  1 :
return G__6063__6065.call(this,x);
case  2 :
return G__6063__6066.call(this,x,y);
case  3 :
return G__6063__6067.call(this,x,y,z);
default:
return G__6063__6068.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6063.cljs$lang$maxFixedArity = 3;
G__6063.cljs$lang$applyTo = G__6063__6068.cljs$lang$applyTo;
return G__6063;
})()
});
var comp__6052 = (function() { 
var G__6072__delegate = function (f1,f2,f3,fs){
var fs__6045 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__6073__delegate = function (args){
var ret__6046 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__6045),args);
var fs__6047 = cljs.core.next.call(null,fs__6045);

while(true){
if(cljs.core.truth_(fs__6047))
{{
var G__6074 = cljs.core.first.call(null,fs__6047).call(null,ret__6046);
var G__6075 = cljs.core.next.call(null,fs__6047);
ret__6046 = G__6074;
fs__6047 = G__6075;
continue;
}
} else
{return ret__6046;
}
break;
}
};
var G__6073 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6073__delegate.call(this, args);
};
G__6073.cljs$lang$maxFixedArity = 0;
G__6073.cljs$lang$applyTo = (function (arglist__6076){
var args = cljs.core.seq( arglist__6076 );;
return G__6073__delegate.call(this, args);
});
return G__6073;
})()
;
};
var G__6072 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6072__delegate.call(this, f1, f2, f3, fs);
};
G__6072.cljs$lang$maxFixedArity = 3;
G__6072.cljs$lang$applyTo = (function (arglist__6077){
var f1 = cljs.core.first(arglist__6077);
var f2 = cljs.core.first(cljs.core.next(arglist__6077));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6077)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6077)));
return G__6072__delegate.call(this, f1, f2, f3, fs);
});
return G__6072;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__6048.call(this);
case  1 :
return comp__6049.call(this,f1);
case  2 :
return comp__6050.call(this,f1,f2);
case  3 :
return comp__6051.call(this,f1,f2,f3);
default:
return comp__6052.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__6052.cljs$lang$applyTo;
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
var partial__6078 = (function (f,arg1){
return (function() { 
var G__6083__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__6083 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6083__delegate.call(this, args);
};
G__6083.cljs$lang$maxFixedArity = 0;
G__6083.cljs$lang$applyTo = (function (arglist__6084){
var args = cljs.core.seq( arglist__6084 );;
return G__6083__delegate.call(this, args);
});
return G__6083;
})()
;
});
var partial__6079 = (function (f,arg1,arg2){
return (function() { 
var G__6085__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__6085 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6085__delegate.call(this, args);
};
G__6085.cljs$lang$maxFixedArity = 0;
G__6085.cljs$lang$applyTo = (function (arglist__6086){
var args = cljs.core.seq( arglist__6086 );;
return G__6085__delegate.call(this, args);
});
return G__6085;
})()
;
});
var partial__6080 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__6087__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__6087 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6087__delegate.call(this, args);
};
G__6087.cljs$lang$maxFixedArity = 0;
G__6087.cljs$lang$applyTo = (function (arglist__6088){
var args = cljs.core.seq( arglist__6088 );;
return G__6087__delegate.call(this, args);
});
return G__6087;
})()
;
});
var partial__6081 = (function() { 
var G__6089__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__6090__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__6090 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6090__delegate.call(this, args);
};
G__6090.cljs$lang$maxFixedArity = 0;
G__6090.cljs$lang$applyTo = (function (arglist__6091){
var args = cljs.core.seq( arglist__6091 );;
return G__6090__delegate.call(this, args);
});
return G__6090;
})()
;
};
var G__6089 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6089__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__6089.cljs$lang$maxFixedArity = 4;
G__6089.cljs$lang$applyTo = (function (arglist__6092){
var f = cljs.core.first(arglist__6092);
var arg1 = cljs.core.first(cljs.core.next(arglist__6092));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6092)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6092))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6092))));
return G__6089__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__6089;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__6078.call(this,f,arg1);
case  3 :
return partial__6079.call(this,f,arg1,arg2);
case  4 :
return partial__6080.call(this,f,arg1,arg2,arg3);
default:
return partial__6081.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__6081.cljs$lang$applyTo;
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
var fnil__6093 = (function (f,x){
return (function() {
var G__6097 = null;
var G__6097__6098 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__6097__6099 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__6097__6100 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__6097__6101 = (function() { 
var G__6103__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__6103 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6103__delegate.call(this, a, b, c, ds);
};
G__6103.cljs$lang$maxFixedArity = 3;
G__6103.cljs$lang$applyTo = (function (arglist__6104){
var a = cljs.core.first(arglist__6104);
var b = cljs.core.first(cljs.core.next(arglist__6104));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6104)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6104)));
return G__6103__delegate.call(this, a, b, c, ds);
});
return G__6103;
})()
;
G__6097 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__6097__6098.call(this,a);
case  2 :
return G__6097__6099.call(this,a,b);
case  3 :
return G__6097__6100.call(this,a,b,c);
default:
return G__6097__6101.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6097.cljs$lang$maxFixedArity = 3;
G__6097.cljs$lang$applyTo = G__6097__6101.cljs$lang$applyTo;
return G__6097;
})()
});
var fnil__6094 = (function (f,x,y){
return (function() {
var G__6105 = null;
var G__6105__6106 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__6105__6107 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__6105__6108 = (function() { 
var G__6110__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__6110 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6110__delegate.call(this, a, b, c, ds);
};
G__6110.cljs$lang$maxFixedArity = 3;
G__6110.cljs$lang$applyTo = (function (arglist__6111){
var a = cljs.core.first(arglist__6111);
var b = cljs.core.first(cljs.core.next(arglist__6111));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6111)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6111)));
return G__6110__delegate.call(this, a, b, c, ds);
});
return G__6110;
})()
;
G__6105 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__6105__6106.call(this,a,b);
case  3 :
return G__6105__6107.call(this,a,b,c);
default:
return G__6105__6108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6105.cljs$lang$maxFixedArity = 3;
G__6105.cljs$lang$applyTo = G__6105__6108.cljs$lang$applyTo;
return G__6105;
})()
});
var fnil__6095 = (function (f,x,y,z){
return (function() {
var G__6112 = null;
var G__6112__6113 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__6112__6114 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__6112__6115 = (function() { 
var G__6117__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__6117 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6117__delegate.call(this, a, b, c, ds);
};
G__6117.cljs$lang$maxFixedArity = 3;
G__6117.cljs$lang$applyTo = (function (arglist__6118){
var a = cljs.core.first(arglist__6118);
var b = cljs.core.first(cljs.core.next(arglist__6118));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6118)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6118)));
return G__6117__delegate.call(this, a, b, c, ds);
});
return G__6117;
})()
;
G__6112 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__6112__6113.call(this,a,b);
case  3 :
return G__6112__6114.call(this,a,b,c);
default:
return G__6112__6115.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6112.cljs$lang$maxFixedArity = 3;
G__6112.cljs$lang$applyTo = G__6112__6115.cljs$lang$applyTo;
return G__6112;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__6093.call(this,f,x);
case  3 :
return fnil__6094.call(this,f,x,y);
case  4 :
return fnil__6095.call(this,f,x,y,z);
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
var mapi__6121 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6119 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6119))
{var s__6120 = temp__3726__auto____6119;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__6120)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__6120)));
} else
{return null;
}
})));
});

return mapi__6121.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6122 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6122))
{var s__6123 = temp__3726__auto____6122;

var x__6124 = f.call(null,cljs.core.first.call(null,s__6123));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__6124)))
{return keep.call(null,f,cljs.core.rest.call(null,s__6123));
} else
{return cljs.core.cons.call(null,x__6124,keep.call(null,f,cljs.core.rest.call(null,s__6123)));
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
var keepi__6134 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6131 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6131))
{var s__6132 = temp__3726__auto____6131;

var x__6133 = f.call(null,idx,cljs.core.first.call(null,s__6132));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__6133)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__6132));
} else
{return cljs.core.cons.call(null,x__6133,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__6132)));
}
} else
{return null;
}
})));
});

return keepi__6134.call(null,0,coll);
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
var every_pred__6179 = (function (p){
return (function() {
var ep1 = null;
var ep1__6184 = (function (){
return true;
});
var ep1__6185 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__6186 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____6141 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____6141))
{return p.call(null,y);
} else
{return and__3574__auto____6141;
}
})());
});
var ep1__6187 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____6142 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____6142))
{var and__3574__auto____6143 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____6143))
{return p.call(null,z);
} else
{return and__3574__auto____6143;
}
} else
{return and__3574__auto____6142;
}
})());
});
var ep1__6188 = (function() { 
var G__6190__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____6144 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____6144))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____6144;
}
})());
};
var G__6190 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6190__delegate.call(this, x, y, z, args);
};
G__6190.cljs$lang$maxFixedArity = 3;
G__6190.cljs$lang$applyTo = (function (arglist__6191){
var x = cljs.core.first(arglist__6191);
var y = cljs.core.first(cljs.core.next(arglist__6191));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6191)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6191)));
return G__6190__delegate.call(this, x, y, z, args);
});
return G__6190;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__6184.call(this);
case  1 :
return ep1__6185.call(this,x);
case  2 :
return ep1__6186.call(this,x,y);
case  3 :
return ep1__6187.call(this,x,y,z);
default:
return ep1__6188.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__6188.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__6180 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__6192 = (function (){
return true;
});
var ep2__6193 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____6145 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____6145))
{return p2.call(null,x);
} else
{return and__3574__auto____6145;
}
})());
});
var ep2__6194 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____6146 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____6146))
{var and__3574__auto____6147 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____6147))
{var and__3574__auto____6148 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____6148))
{return p2.call(null,y);
} else
{return and__3574__auto____6148;
}
} else
{return and__3574__auto____6147;
}
} else
{return and__3574__auto____6146;
}
})());
});
var ep2__6195 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____6149 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____6149))
{var and__3574__auto____6150 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____6150))
{var and__3574__auto____6151 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____6151))
{var and__3574__auto____6152 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____6152))
{var and__3574__auto____6153 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____6153))
{return p2.call(null,z);
} else
{return and__3574__auto____6153;
}
} else
{return and__3574__auto____6152;
}
} else
{return and__3574__auto____6151;
}
} else
{return and__3574__auto____6150;
}
} else
{return and__3574__auto____6149;
}
})());
});
var ep2__6196 = (function() { 
var G__6198__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____6154 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____6154))
{return cljs.core.every_QMARK_.call(null,(function (p1__6125_SHARP_){
var and__3574__auto____6155 = p1.call(null,p1__6125_SHARP_);

if(cljs.core.truth_(and__3574__auto____6155))
{return p2.call(null,p1__6125_SHARP_);
} else
{return and__3574__auto____6155;
}
}),args);
} else
{return and__3574__auto____6154;
}
})());
};
var G__6198 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6198__delegate.call(this, x, y, z, args);
};
G__6198.cljs$lang$maxFixedArity = 3;
G__6198.cljs$lang$applyTo = (function (arglist__6199){
var x = cljs.core.first(arglist__6199);
var y = cljs.core.first(cljs.core.next(arglist__6199));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6199)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6199)));
return G__6198__delegate.call(this, x, y, z, args);
});
return G__6198;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__6192.call(this);
case  1 :
return ep2__6193.call(this,x);
case  2 :
return ep2__6194.call(this,x,y);
case  3 :
return ep2__6195.call(this,x,y,z);
default:
return ep2__6196.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__6196.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__6181 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__6200 = (function (){
return true;
});
var ep3__6201 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____6156 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____6156))
{var and__3574__auto____6157 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____6157))
{return p3.call(null,x);
} else
{return and__3574__auto____6157;
}
} else
{return and__3574__auto____6156;
}
})());
});
var ep3__6202 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____6158 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____6158))
{var and__3574__auto____6159 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____6159))
{var and__3574__auto____6160 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____6160))
{var and__3574__auto____6161 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____6161))
{var and__3574__auto____6162 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____6162))
{return p3.call(null,y);
} else
{return and__3574__auto____6162;
}
} else
{return and__3574__auto____6161;
}
} else
{return and__3574__auto____6160;
}
} else
{return and__3574__auto____6159;
}
} else
{return and__3574__auto____6158;
}
})());
});
var ep3__6203 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____6163 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____6163))
{var and__3574__auto____6164 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____6164))
{var and__3574__auto____6165 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____6165))
{var and__3574__auto____6166 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____6166))
{var and__3574__auto____6167 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____6167))
{var and__3574__auto____6168 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____6168))
{var and__3574__auto____6169 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____6169))
{var and__3574__auto____6170 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____6170))
{return p3.call(null,z);
} else
{return and__3574__auto____6170;
}
} else
{return and__3574__auto____6169;
}
} else
{return and__3574__auto____6168;
}
} else
{return and__3574__auto____6167;
}
} else
{return and__3574__auto____6166;
}
} else
{return and__3574__auto____6165;
}
} else
{return and__3574__auto____6164;
}
} else
{return and__3574__auto____6163;
}
})());
});
var ep3__6204 = (function() { 
var G__6206__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____6171 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____6171))
{return cljs.core.every_QMARK_.call(null,(function (p1__6126_SHARP_){
var and__3574__auto____6172 = p1.call(null,p1__6126_SHARP_);

if(cljs.core.truth_(and__3574__auto____6172))
{var and__3574__auto____6173 = p2.call(null,p1__6126_SHARP_);

if(cljs.core.truth_(and__3574__auto____6173))
{return p3.call(null,p1__6126_SHARP_);
} else
{return and__3574__auto____6173;
}
} else
{return and__3574__auto____6172;
}
}),args);
} else
{return and__3574__auto____6171;
}
})());
};
var G__6206 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6206__delegate.call(this, x, y, z, args);
};
G__6206.cljs$lang$maxFixedArity = 3;
G__6206.cljs$lang$applyTo = (function (arglist__6207){
var x = cljs.core.first(arglist__6207);
var y = cljs.core.first(cljs.core.next(arglist__6207));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6207)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6207)));
return G__6206__delegate.call(this, x, y, z, args);
});
return G__6206;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__6200.call(this);
case  1 :
return ep3__6201.call(this,x);
case  2 :
return ep3__6202.call(this,x,y);
case  3 :
return ep3__6203.call(this,x,y,z);
default:
return ep3__6204.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__6204.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__6182 = (function() { 
var G__6208__delegate = function (p1,p2,p3,ps){
var ps__6174 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__6209 = (function (){
return true;
});
var epn__6210 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__6127_SHARP_){
return p1__6127_SHARP_.call(null,x);
}),ps__6174);
});
var epn__6211 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__6128_SHARP_){
var and__3574__auto____6175 = p1__6128_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____6175))
{return p1__6128_SHARP_.call(null,y);
} else
{return and__3574__auto____6175;
}
}),ps__6174);
});
var epn__6212 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__6129_SHARP_){
var and__3574__auto____6176 = p1__6129_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____6176))
{var and__3574__auto____6177 = p1__6129_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____6177))
{return p1__6129_SHARP_.call(null,z);
} else
{return and__3574__auto____6177;
}
} else
{return and__3574__auto____6176;
}
}),ps__6174);
});
var epn__6213 = (function() { 
var G__6215__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____6178 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____6178))
{return cljs.core.every_QMARK_.call(null,(function (p1__6130_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__6130_SHARP_,args);
}),ps__6174);
} else
{return and__3574__auto____6178;
}
})());
};
var G__6215 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6215__delegate.call(this, x, y, z, args);
};
G__6215.cljs$lang$maxFixedArity = 3;
G__6215.cljs$lang$applyTo = (function (arglist__6216){
var x = cljs.core.first(arglist__6216);
var y = cljs.core.first(cljs.core.next(arglist__6216));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6216)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6216)));
return G__6215__delegate.call(this, x, y, z, args);
});
return G__6215;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__6209.call(this);
case  1 :
return epn__6210.call(this,x);
case  2 :
return epn__6211.call(this,x,y);
case  3 :
return epn__6212.call(this,x,y,z);
default:
return epn__6213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__6213.cljs$lang$applyTo;
return epn;
})()
};
var G__6208 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6208__delegate.call(this, p1, p2, p3, ps);
};
G__6208.cljs$lang$maxFixedArity = 3;
G__6208.cljs$lang$applyTo = (function (arglist__6217){
var p1 = cljs.core.first(arglist__6217);
var p2 = cljs.core.first(cljs.core.next(arglist__6217));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6217)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6217)));
return G__6208__delegate.call(this, p1, p2, p3, ps);
});
return G__6208;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__6179.call(this,p1);
case  2 :
return every_pred__6180.call(this,p1,p2);
case  3 :
return every_pred__6181.call(this,p1,p2,p3);
default:
return every_pred__6182.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__6182.cljs$lang$applyTo;
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
var some_fn__6257 = (function (p){
return (function() {
var sp1 = null;
var sp1__6262 = (function (){
return null;
});
var sp1__6263 = (function (x){
return p.call(null,x);
});
var sp1__6264 = (function (x,y){
var or__3576__auto____6219 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____6219))
{return or__3576__auto____6219;
} else
{return p.call(null,y);
}
});
var sp1__6265 = (function (x,y,z){
var or__3576__auto____6220 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____6220))
{return or__3576__auto____6220;
} else
{var or__3576__auto____6221 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____6221))
{return or__3576__auto____6221;
} else
{return p.call(null,z);
}
}
});
var sp1__6266 = (function() { 
var G__6268__delegate = function (x,y,z,args){
var or__3576__auto____6222 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____6222))
{return or__3576__auto____6222;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__6268 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6268__delegate.call(this, x, y, z, args);
};
G__6268.cljs$lang$maxFixedArity = 3;
G__6268.cljs$lang$applyTo = (function (arglist__6269){
var x = cljs.core.first(arglist__6269);
var y = cljs.core.first(cljs.core.next(arglist__6269));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6269)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6269)));
return G__6268__delegate.call(this, x, y, z, args);
});
return G__6268;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__6262.call(this);
case  1 :
return sp1__6263.call(this,x);
case  2 :
return sp1__6264.call(this,x,y);
case  3 :
return sp1__6265.call(this,x,y,z);
default:
return sp1__6266.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__6266.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__6258 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__6270 = (function (){
return null;
});
var sp2__6271 = (function (x){
var or__3576__auto____6223 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____6223))
{return or__3576__auto____6223;
} else
{return p2.call(null,x);
}
});
var sp2__6272 = (function (x,y){
var or__3576__auto____6224 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____6224))
{return or__3576__auto____6224;
} else
{var or__3576__auto____6225 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____6225))
{return or__3576__auto____6225;
} else
{var or__3576__auto____6226 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____6226))
{return or__3576__auto____6226;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__6273 = (function (x,y,z){
var or__3576__auto____6227 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____6227))
{return or__3576__auto____6227;
} else
{var or__3576__auto____6228 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____6228))
{return or__3576__auto____6228;
} else
{var or__3576__auto____6229 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____6229))
{return or__3576__auto____6229;
} else
{var or__3576__auto____6230 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____6230))
{return or__3576__auto____6230;
} else
{var or__3576__auto____6231 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____6231))
{return or__3576__auto____6231;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__6274 = (function() { 
var G__6276__delegate = function (x,y,z,args){
var or__3576__auto____6232 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____6232))
{return or__3576__auto____6232;
} else
{return cljs.core.some.call(null,(function (p1__6135_SHARP_){
var or__3576__auto____6233 = p1.call(null,p1__6135_SHARP_);

if(cljs.core.truth_(or__3576__auto____6233))
{return or__3576__auto____6233;
} else
{return p2.call(null,p1__6135_SHARP_);
}
}),args);
}
};
var G__6276 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6276__delegate.call(this, x, y, z, args);
};
G__6276.cljs$lang$maxFixedArity = 3;
G__6276.cljs$lang$applyTo = (function (arglist__6277){
var x = cljs.core.first(arglist__6277);
var y = cljs.core.first(cljs.core.next(arglist__6277));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6277)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6277)));
return G__6276__delegate.call(this, x, y, z, args);
});
return G__6276;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__6270.call(this);
case  1 :
return sp2__6271.call(this,x);
case  2 :
return sp2__6272.call(this,x,y);
case  3 :
return sp2__6273.call(this,x,y,z);
default:
return sp2__6274.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__6274.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__6259 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__6278 = (function (){
return null;
});
var sp3__6279 = (function (x){
var or__3576__auto____6234 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____6234))
{return or__3576__auto____6234;
} else
{var or__3576__auto____6235 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____6235))
{return or__3576__auto____6235;
} else
{return p3.call(null,x);
}
}
});
var sp3__6280 = (function (x,y){
var or__3576__auto____6236 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____6236))
{return or__3576__auto____6236;
} else
{var or__3576__auto____6237 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____6237))
{return or__3576__auto____6237;
} else
{var or__3576__auto____6238 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____6238))
{return or__3576__auto____6238;
} else
{var or__3576__auto____6239 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____6239))
{return or__3576__auto____6239;
} else
{var or__3576__auto____6240 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____6240))
{return or__3576__auto____6240;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__6281 = (function (x,y,z){
var or__3576__auto____6241 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____6241))
{return or__3576__auto____6241;
} else
{var or__3576__auto____6242 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____6242))
{return or__3576__auto____6242;
} else
{var or__3576__auto____6243 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____6243))
{return or__3576__auto____6243;
} else
{var or__3576__auto____6244 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____6244))
{return or__3576__auto____6244;
} else
{var or__3576__auto____6245 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____6245))
{return or__3576__auto____6245;
} else
{var or__3576__auto____6246 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____6246))
{return or__3576__auto____6246;
} else
{var or__3576__auto____6247 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____6247))
{return or__3576__auto____6247;
} else
{var or__3576__auto____6248 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____6248))
{return or__3576__auto____6248;
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
var sp3__6282 = (function() { 
var G__6284__delegate = function (x,y,z,args){
var or__3576__auto____6249 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____6249))
{return or__3576__auto____6249;
} else
{return cljs.core.some.call(null,(function (p1__6136_SHARP_){
var or__3576__auto____6250 = p1.call(null,p1__6136_SHARP_);

if(cljs.core.truth_(or__3576__auto____6250))
{return or__3576__auto____6250;
} else
{var or__3576__auto____6251 = p2.call(null,p1__6136_SHARP_);

if(cljs.core.truth_(or__3576__auto____6251))
{return or__3576__auto____6251;
} else
{return p3.call(null,p1__6136_SHARP_);
}
}
}),args);
}
};
var G__6284 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6284__delegate.call(this, x, y, z, args);
};
G__6284.cljs$lang$maxFixedArity = 3;
G__6284.cljs$lang$applyTo = (function (arglist__6285){
var x = cljs.core.first(arglist__6285);
var y = cljs.core.first(cljs.core.next(arglist__6285));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6285)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6285)));
return G__6284__delegate.call(this, x, y, z, args);
});
return G__6284;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__6278.call(this);
case  1 :
return sp3__6279.call(this,x);
case  2 :
return sp3__6280.call(this,x,y);
case  3 :
return sp3__6281.call(this,x,y,z);
default:
return sp3__6282.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__6282.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__6260 = (function() { 
var G__6286__delegate = function (p1,p2,p3,ps){
var ps__6252 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__6287 = (function (){
return null;
});
var spn__6288 = (function (x){
return cljs.core.some.call(null,(function (p1__6137_SHARP_){
return p1__6137_SHARP_.call(null,x);
}),ps__6252);
});
var spn__6289 = (function (x,y){
return cljs.core.some.call(null,(function (p1__6138_SHARP_){
var or__3576__auto____6253 = p1__6138_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____6253))
{return or__3576__auto____6253;
} else
{return p1__6138_SHARP_.call(null,y);
}
}),ps__6252);
});
var spn__6290 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__6139_SHARP_){
var or__3576__auto____6254 = p1__6139_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____6254))
{return or__3576__auto____6254;
} else
{var or__3576__auto____6255 = p1__6139_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____6255))
{return or__3576__auto____6255;
} else
{return p1__6139_SHARP_.call(null,z);
}
}
}),ps__6252);
});
var spn__6291 = (function() { 
var G__6293__delegate = function (x,y,z,args){
var or__3576__auto____6256 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____6256))
{return or__3576__auto____6256;
} else
{return cljs.core.some.call(null,(function (p1__6140_SHARP_){
return cljs.core.some.call(null,p1__6140_SHARP_,args);
}),ps__6252);
}
};
var G__6293 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6293__delegate.call(this, x, y, z, args);
};
G__6293.cljs$lang$maxFixedArity = 3;
G__6293.cljs$lang$applyTo = (function (arglist__6294){
var x = cljs.core.first(arglist__6294);
var y = cljs.core.first(cljs.core.next(arglist__6294));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6294)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6294)));
return G__6293__delegate.call(this, x, y, z, args);
});
return G__6293;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__6287.call(this);
case  1 :
return spn__6288.call(this,x);
case  2 :
return spn__6289.call(this,x,y);
case  3 :
return spn__6290.call(this,x,y,z);
default:
return spn__6291.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__6291.cljs$lang$applyTo;
return spn;
})()
};
var G__6286 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6286__delegate.call(this, p1, p2, p3, ps);
};
G__6286.cljs$lang$maxFixedArity = 3;
G__6286.cljs$lang$applyTo = (function (arglist__6295){
var p1 = cljs.core.first(arglist__6295);
var p2 = cljs.core.first(cljs.core.next(arglist__6295));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6295)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6295)));
return G__6286__delegate.call(this, p1, p2, p3, ps);
});
return G__6286;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__6257.call(this,p1);
case  2 :
return some_fn__6258.call(this,p1,p2);
case  3 :
return some_fn__6259.call(this,p1,p2,p3);
default:
return some_fn__6260.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__6260.cljs$lang$applyTo;
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
var map__6308 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6296 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6296))
{var s__6297 = temp__3726__auto____6296;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__6297)),map.call(null,f,cljs.core.rest.call(null,s__6297)));
} else
{return null;
}
})));
});
var map__6309 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6298 = cljs.core.seq.call(null,c1);
var s2__6299 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____6300 = s1__6298;

if(cljs.core.truth_(and__3574__auto____6300))
{return s2__6299;
} else
{return and__3574__auto____6300;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__6298),cljs.core.first.call(null,s2__6299)),map.call(null,f,cljs.core.rest.call(null,s1__6298),cljs.core.rest.call(null,s2__6299)));
} else
{return null;
}
})));
});
var map__6310 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6301 = cljs.core.seq.call(null,c1);
var s2__6302 = cljs.core.seq.call(null,c2);
var s3__6303 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____6304 = s1__6301;

if(cljs.core.truth_(and__3574__auto____6304))
{var and__3574__auto____6305 = s2__6302;

if(cljs.core.truth_(and__3574__auto____6305))
{return s3__6303;
} else
{return and__3574__auto____6305;
}
} else
{return and__3574__auto____6304;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__6301),cljs.core.first.call(null,s2__6302),cljs.core.first.call(null,s3__6303)),map.call(null,f,cljs.core.rest.call(null,s1__6301),cljs.core.rest.call(null,s2__6302),cljs.core.rest.call(null,s3__6303)));
} else
{return null;
}
})));
});
var map__6311 = (function() { 
var G__6313__delegate = function (f,c1,c2,c3,colls){
var step__6307 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__6306 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__6306)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__6306),step.call(null,map.call(null,cljs.core.rest,ss__6306)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__6218_SHARP_){
return cljs.core.apply.call(null,f,p1__6218_SHARP_);
}),step__6307.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__6313 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__6313__delegate.call(this, f, c1, c2, c3, colls);
};
G__6313.cljs$lang$maxFixedArity = 4;
G__6313.cljs$lang$applyTo = (function (arglist__6314){
var f = cljs.core.first(arglist__6314);
var c1 = cljs.core.first(cljs.core.next(arglist__6314));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6314)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6314))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6314))));
return G__6313__delegate.call(this, f, c1, c2, c3, colls);
});
return G__6313;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__6308.call(this,f,c1);
case  3 :
return map__6309.call(this,f,c1,c2);
case  4 :
return map__6310.call(this,f,c1,c2,c3);
default:
return map__6311.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__6311.cljs$lang$applyTo;
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
{var temp__3726__auto____6315 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6315))
{var s__6316 = temp__3726__auto____6315;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__6316),take.call(null,(n - 1),cljs.core.rest.call(null,s__6316)));
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
var step__6319 = (function (n,coll){
while(true){
var s__6317 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____6318 = (n > 0);

if(cljs.core.truth_(and__3574__auto____6318))
{return s__6317;
} else
{return and__3574__auto____6318;
}
})()))
{{
var G__6320 = (n - 1);
var G__6321 = cljs.core.rest.call(null,s__6317);
n = G__6320;
coll = G__6321;
continue;
}
} else
{return s__6317;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__6319.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__6322 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__6323 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__6322.call(this,n);
case  2 :
return drop_last__6323.call(this,n,s);
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
var s__6325 = cljs.core.seq.call(null,coll);
var lead__6326 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__6326))
{{
var G__6327 = cljs.core.next.call(null,s__6325);
var G__6328 = cljs.core.next.call(null,lead__6326);
s__6325 = G__6327;
lead__6326 = G__6328;
continue;
}
} else
{return s__6325;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__6331 = (function (pred,coll){
while(true){
var s__6329 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____6330 = s__6329;

if(cljs.core.truth_(and__3574__auto____6330))
{return pred.call(null,cljs.core.first.call(null,s__6329));
} else
{return and__3574__auto____6330;
}
})()))
{{
var G__6332 = pred;
var G__6333 = cljs.core.rest.call(null,s__6329);
pred = G__6332;
coll = G__6333;
continue;
}
} else
{return s__6329;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__6331.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6334 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6334))
{var s__6335 = temp__3726__auto____6334;

return cljs.core.concat.call(null,s__6335,cycle.call(null,s__6335));
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
var repeat__6336 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__6337 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__6336.call(this,n);
case  2 :
return repeat__6337.call(this,n,x);
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
var repeatedly__6339 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__6340 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__6339.call(this,n);
case  2 :
return repeatedly__6340.call(this,n,f);
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
var interleave__6346 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__6342 = cljs.core.seq.call(null,c1);
var s2__6343 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____6344 = s1__6342;

if(cljs.core.truth_(and__3574__auto____6344))
{return s2__6343;
} else
{return and__3574__auto____6344;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__6342),cljs.core.cons.call(null,cljs.core.first.call(null,s2__6343),interleave.call(null,cljs.core.rest.call(null,s1__6342),cljs.core.rest.call(null,s2__6343))));
} else
{return null;
}
})));
});
var interleave__6347 = (function() { 
var G__6349__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__6345 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__6345)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__6345),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__6345)));
} else
{return null;
}
})));
};
var G__6349 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6349__delegate.call(this, c1, c2, colls);
};
G__6349.cljs$lang$maxFixedArity = 2;
G__6349.cljs$lang$applyTo = (function (arglist__6350){
var c1 = cljs.core.first(arglist__6350);
var c2 = cljs.core.first(cljs.core.next(arglist__6350));
var colls = cljs.core.rest(cljs.core.next(arglist__6350));
return G__6349__delegate.call(this, c1, c2, colls);
});
return G__6349;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__6346.call(this,c1,c2);
default:
return interleave__6347.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__6347.cljs$lang$applyTo;
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
var cat__6353 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____6351 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____6351))
{var coll__6352 = temp__3723__auto____6351;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__6352),cat.call(null,cljs.core.rest.call(null,coll__6352),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__6353.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__6354 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__6355 = (function() { 
var G__6357__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__6357 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6357__delegate.call(this, f, coll, colls);
};
G__6357.cljs$lang$maxFixedArity = 2;
G__6357.cljs$lang$applyTo = (function (arglist__6358){
var f = cljs.core.first(arglist__6358);
var coll = cljs.core.first(cljs.core.next(arglist__6358));
var colls = cljs.core.rest(cljs.core.next(arglist__6358));
return G__6357__delegate.call(this, f, coll, colls);
});
return G__6357;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__6354.call(this,f,coll);
default:
return mapcat__6355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__6355.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6359 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6359))
{var s__6360 = temp__3726__auto____6359;

var f__6361 = cljs.core.first.call(null,s__6360);
var r__6362 = cljs.core.rest.call(null,s__6360);

if(cljs.core.truth_(pred.call(null,f__6361)))
{return cljs.core.cons.call(null,f__6361,filter.call(null,pred,r__6362));
} else
{return filter.call(null,pred,r__6362);
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
var walk__6364 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__6364.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__6363_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__6363_SHARP_));
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
var partition__6371 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__6372 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6365 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6365))
{var s__6366 = temp__3726__auto____6365;

var p__6367 = cljs.core.take.call(null,n,s__6366);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__6367))))
{return cljs.core.cons.call(null,p__6367,partition.call(null,n,step,cljs.core.drop.call(null,step,s__6366)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__6373 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6368 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6368))
{var s__6369 = temp__3726__auto____6368;

var p__6370 = cljs.core.take.call(null,n,s__6369);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__6370))))
{return cljs.core.cons.call(null,p__6370,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__6369)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__6370,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__6371.call(this,n,step);
case  3 :
return partition__6372.call(this,n,step,pad);
case  4 :
return partition__6373.call(this,n,step,pad,coll);
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
var get_in__6379 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__6380 = (function (m,ks,not_found){
var sentinel__6375 = cljs.core.lookup_sentinel;
var m__6376 = m;
var ks__6377 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__6377))
{var m__6378 = cljs.core.get.call(null,m__6376,cljs.core.first.call(null,ks__6377),sentinel__6375);

if(cljs.core.truth_((sentinel__6375 === m__6378)))
{return not_found;
} else
{{
var G__6382 = sentinel__6375;
var G__6383 = m__6378;
var G__6384 = cljs.core.next.call(null,ks__6377);
sentinel__6375 = G__6382;
m__6376 = G__6383;
ks__6377 = G__6384;
continue;
}
}
} else
{return m__6376;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__6379.call(this,m,ks);
case  3 :
return get_in__6380.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__6385,v){
var vec__6386__6387 = p__6385;
var k__6388 = cljs.core.nth.call(null,vec__6386__6387,0,null);
var ks__6389 = cljs.core.nthnext.call(null,vec__6386__6387,1);

if(cljs.core.truth_(ks__6389))
{return cljs.core.assoc.call(null,m,k__6388,assoc_in.call(null,cljs.core.get.call(null,m,k__6388),ks__6389,v));
} else
{return cljs.core.assoc.call(null,m,k__6388,v);
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
var update_in__delegate = function (m,p__6390,f,args){
var vec__6391__6392 = p__6390;
var k__6393 = cljs.core.nth.call(null,vec__6391__6392,0,null);
var ks__6394 = cljs.core.nthnext.call(null,vec__6391__6392,1);

if(cljs.core.truth_(ks__6394))
{return cljs.core.assoc.call(null,m,k__6393,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__6393),ks__6394,f,args));
} else
{return cljs.core.assoc.call(null,m,k__6393,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__6393),args));
}
};
var update_in = function (m,p__6390,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__6390, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__6395){
var m = cljs.core.first(arglist__6395);
var p__6390 = cljs.core.first(cljs.core.next(arglist__6395));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6395)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6395)));
return update_in__delegate.call(this, m, p__6390, f, args);
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
var this__6396 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6421 = null;
var G__6421__6422 = (function (coll,k){
var this__6397 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__6421__6423 = (function (coll,k,not_found){
var this__6398 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__6421 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6421__6422.call(this,coll,k);
case  3 :
return G__6421__6423.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6421;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6399 = this;
var new_array__6400 = cljs.core.aclone.call(null,this__6399.array);

(new_array__6400[k] = v);
return (new cljs.core.Vector(this__6399.meta,new_array__6400));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6401 = this;
var new_array__6402 = cljs.core.aclone.call(null,this__6401.array);

new_array__6402.push(o);
return (new cljs.core.Vector(this__6401.meta,new_array__6402));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6425 = null;
var G__6425__6426 = (function (v,f){
var this__6403 = this;
return cljs.core.ci_reduce.call(null,this__6403.array,f);
});
var G__6425__6427 = (function (v,f,start){
var this__6404 = this;
return cljs.core.ci_reduce.call(null,this__6404.array,f,start);
});
G__6425 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__6425__6426.call(this,v,f);
case  3 :
return G__6425__6427.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6425;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6405 = this;
if(cljs.core.truth_((this__6405.array.length > 0)))
{var vector_seq__6406 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__6405.array.length)))
{return cljs.core.cons.call(null,(this__6405.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__6406.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6407 = this;
return this__6407.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6408 = this;
var count__6409 = this__6408.array.length;

if(cljs.core.truth_((count__6409 > 0)))
{return (this__6408.array[(count__6409 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6410 = this;
if(cljs.core.truth_((this__6410.array.length > 0)))
{var new_array__6411 = cljs.core.aclone.call(null,this__6410.array);

new_array__6411.pop();
return (new cljs.core.Vector(this__6410.meta,new_array__6411));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__6412 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6413 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6414 = this;
return (new cljs.core.Vector(meta,this__6414.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6415 = this;
return this__6415.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6429 = null;
var G__6429__6430 = (function (coll,n){
var this__6416 = this;
if(cljs.core.truth_((function (){var and__3574__auto____6417 = (0 <= n);

if(cljs.core.truth_(and__3574__auto____6417))
{return (n < this__6416.array.length);
} else
{return and__3574__auto____6417;
}
})()))
{return (this__6416.array[n]);
} else
{return null;
}
});
var G__6429__6431 = (function (coll,n,not_found){
var this__6418 = this;
if(cljs.core.truth_((function (){var and__3574__auto____6419 = (0 <= n);

if(cljs.core.truth_(and__3574__auto____6419))
{return (n < this__6418.array.length);
} else
{return and__3574__auto____6419;
}
})()))
{return (this__6418.array[n]);
} else
{return not_found;
}
});
G__6429 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6429__6430.call(this,coll,n);
case  3 :
return G__6429__6431.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6429;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6420 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__6420.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__6433 = null;
var G__6433__6434 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__6433__6435 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__6433 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__6433__6434.call(this,_,k);
case  3 :
return G__6433__6435.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6433;
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
vector.cljs$lang$applyTo = (function (arglist__6437){
var args = cljs.core.seq( arglist__6437 );;
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
var this__6438 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6458 = null;
var G__6458__6459 = (function (coll,k){
var this__6439 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__6458__6460 = (function (coll,k,not_found){
var this__6440 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__6458 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6458__6459.call(this,coll,k);
case  3 :
return G__6458__6460.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6458;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__6441 = this;
var v_pos__6442 = (this__6441.start + key);

return (new cljs.core.Subvec(this__6441.meta,cljs.core._assoc.call(null,this__6441.v,v_pos__6442,val),this__6441.start,((this__6441.end > (v_pos__6442 + 1)) ? this__6441.end : (v_pos__6442 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6443 = this;
return (new cljs.core.Subvec(this__6443.meta,cljs.core._assoc_n.call(null,this__6443.v,this__6443.end,o),this__6443.start,(this__6443.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6462 = null;
var G__6462__6463 = (function (coll,f){
var this__6444 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__6462__6464 = (function (coll,f,start){
var this__6445 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__6462 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__6462__6463.call(this,coll,f);
case  3 :
return G__6462__6464.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6462;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6446 = this;
var subvec_seq__6447 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__6446.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__6446.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__6447.call(null,this__6446.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6448 = this;
return (this__6448.end - this__6448.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__6449 = this;
return cljs.core._nth.call(null,this__6449.v,(this__6449.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__6450 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__6450.start,this__6450.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__6450.meta,this__6450.v,this__6450.start,(this__6450.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__6451 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6452 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6453 = this;
return (new cljs.core.Subvec(meta,this__6453.v,this__6453.start,this__6453.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6454 = this;
return this__6454.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6466 = null;
var G__6466__6467 = (function (coll,n){
var this__6455 = this;
return cljs.core._nth.call(null,this__6455.v,(this__6455.start + n));
});
var G__6466__6468 = (function (coll,n,not_found){
var this__6456 = this;
return cljs.core._nth.call(null,this__6456.v,(this__6456.start + n),not_found);
});
G__6466 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6466__6467.call(this,coll,n);
case  3 :
return G__6466__6468.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6466;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6457 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__6457.meta);
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
var subvec__6470 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__6471 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__6470.call(this,v,start);
case  3 :
return subvec__6471.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__6473 = null;
var G__6473__6474 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__6473__6475 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__6473 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__6473__6474.call(this,_,k);
case  3 :
return G__6473__6475.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6473;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__6477 = this;
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
var len__6478 = array.length;

var i__6479 = 0;

while(true){
if(cljs.core.truth_((i__6479 < len__6478)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__6479]))))
{return i__6479;
} else
{{
var G__6480 = (i__6479 + incr);
i__6479 = G__6480;
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
var obj_map_contains_key_QMARK___6482 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___6483 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____6481 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____6481))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____6481;
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
return obj_map_contains_key_QMARK___6482.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___6483.call(this,k,strobj,true_val,false_val);
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
var this__6486 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6505 = null;
var G__6505__6506 = (function (coll,k){
var this__6487 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__6505__6507 = (function (coll,k,not_found){
var this__6488 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__6488.strobj,(this__6488.strobj[k]),not_found);
});
G__6505 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6505__6506.call(this,coll,k);
case  3 :
return G__6505__6507.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6505;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6489 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__6490 = goog.object.clone.call(null,this__6489.strobj);
var overwrite_QMARK___6491 = new_strobj__6490.hasOwnProperty(k);

(new_strobj__6490[k] = v);
if(cljs.core.truth_(overwrite_QMARK___6491))
{return (new cljs.core.ObjMap(this__6489.meta,this__6489.keys,new_strobj__6490));
} else
{var new_keys__6492 = cljs.core.aclone.call(null,this__6489.keys);

new_keys__6492.push(k);
return (new cljs.core.ObjMap(this__6489.meta,new_keys__6492,new_strobj__6490));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__6489.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__6493 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__6493.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__6494 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6495 = this;
if(cljs.core.truth_((this__6495.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__6485_SHARP_){
return cljs.core.vector.call(null,p1__6485_SHARP_,(this__6495.strobj[p1__6485_SHARP_]));
}),this__6495.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6496 = this;
return this__6496.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6497 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6498 = this;
return (new cljs.core.ObjMap(meta,this__6498.keys,this__6498.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6499 = this;
return this__6499.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6500 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__6500.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__6501 = this;
if(cljs.core.truth_((function (){var and__3574__auto____6502 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____6502))
{return this__6501.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____6502;
}
})()))
{var new_keys__6503 = cljs.core.aclone.call(null,this__6501.keys);
var new_strobj__6504 = goog.object.clone.call(null,this__6501.strobj);

new_keys__6503.splice(cljs.core.scan_array.call(null,1,k,new_keys__6503),1);
cljs.core.js_delete.call(null,new_strobj__6504,k);
return (new cljs.core.ObjMap(this__6501.meta,new_keys__6503,new_strobj__6504));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__6510 = null;
var G__6510__6511 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__6510__6512 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__6510 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__6510__6511.call(this,_,k);
case  3 :
return G__6510__6512.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6510;
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
var this__6514 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6544 = null;
var G__6544__6545 = (function (coll,k){
var this__6515 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__6544__6546 = (function (coll,k,not_found){
var this__6516 = this;
var bucket__6517 = (this__6516.hashobj[cljs.core.hash.call(null,k)]);
var i__6518 = (cljs.core.truth_(bucket__6517)?cljs.core.scan_array.call(null,2,k,bucket__6517):null);

if(cljs.core.truth_(i__6518))
{return (bucket__6517[(i__6518 + 1)]);
} else
{return not_found;
}
});
G__6544 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__6544__6545.call(this,coll,k);
case  3 :
return G__6544__6546.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6544;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__6519 = this;
var h__6520 = cljs.core.hash.call(null,k);
var bucket__6521 = (this__6519.hashobj[h__6520]);

if(cljs.core.truth_(bucket__6521))
{var new_bucket__6522 = cljs.core.aclone.call(null,bucket__6521);
var new_hashobj__6523 = goog.object.clone.call(null,this__6519.hashobj);

(new_hashobj__6523[h__6520] = new_bucket__6522);
var temp__3723__auto____6524 = cljs.core.scan_array.call(null,2,k,new_bucket__6522);

if(cljs.core.truth_(temp__3723__auto____6524))
{var i__6525 = temp__3723__auto____6524;

(new_bucket__6522[(i__6525 + 1)] = v);
return (new cljs.core.HashMap(this__6519.meta,this__6519.count,new_hashobj__6523));
} else
{new_bucket__6522.push(k,v);
return (new cljs.core.HashMap(this__6519.meta,(this__6519.count + 1),new_hashobj__6523));
}
} else
{var new_hashobj__6526 = goog.object.clone.call(null,this__6519.hashobj);

(new_hashobj__6526[h__6520] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__6519.meta,(this__6519.count + 1),new_hashobj__6526));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__6527 = this;
var bucket__6528 = (this__6527.hashobj[cljs.core.hash.call(null,k)]);
var i__6529 = (cljs.core.truth_(bucket__6528)?cljs.core.scan_array.call(null,2,k,bucket__6528):null);

if(cljs.core.truth_(i__6529))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__6530 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6531 = this;
if(cljs.core.truth_((this__6531.count > 0)))
{var hashes__6532 = cljs.core.js_keys.call(null,this__6531.hashobj);

return cljs.core.mapcat.call(null,(function (p1__6509_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__6531.hashobj[p1__6509_SHARP_])));
}),hashes__6532);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6533 = this;
return this__6533.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6534 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6535 = this;
return (new cljs.core.HashMap(meta,this__6535.count,this__6535.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6536 = this;
return this__6536.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6537 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__6537.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__6538 = this;
var h__6539 = cljs.core.hash.call(null,k);
var bucket__6540 = (this__6538.hashobj[h__6539]);
var i__6541 = (cljs.core.truth_(bucket__6540)?cljs.core.scan_array.call(null,2,k,bucket__6540):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__6541)))
{return coll;
} else
{var new_hashobj__6542 = goog.object.clone.call(null,this__6538.hashobj);

if(cljs.core.truth_((3 > bucket__6540.length)))
{cljs.core.js_delete.call(null,new_hashobj__6542,h__6539);
} else
{var new_bucket__6543 = cljs.core.aclone.call(null,bucket__6540);

new_bucket__6543.splice(i__6541,2);
(new_hashobj__6542[h__6539] = new_bucket__6543);
}
return (new cljs.core.HashMap(this__6538.meta,(this__6538.count - 1),new_hashobj__6542));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__6548 = ks.length;

var i__6549 = 0;
var out__6550 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__6549 < len__6548)))
{{
var G__6551 = (i__6549 + 1);
var G__6552 = cljs.core.assoc.call(null,out__6550,(ks[i__6549]),(vs[i__6549]));
i__6549 = G__6551;
out__6550 = G__6552;
continue;
}
} else
{return out__6550;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__6553 = null;
var G__6553__6554 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__6553__6555 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__6553 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__6553__6554.call(this,_,k);
case  3 :
return G__6553__6555.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6553;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__6557 = cljs.core.seq.call(null,keyvals);
var out__6558 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__6557))
{{
var G__6559 = cljs.core.nnext.call(null,in$__6557);
var G__6560 = cljs.core.assoc.call(null,out__6558,cljs.core.first.call(null,in$__6557),cljs.core.second.call(null,in$__6557));
in$__6557 = G__6559;
out__6558 = G__6560;
continue;
}
} else
{return out__6558;
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
hash_map.cljs$lang$applyTo = (function (arglist__6561){
var keyvals = cljs.core.seq( arglist__6561 );;
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
{return cljs.core.reduce.call(null,(function (p1__6562_SHARP_,p2__6563_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____6564 = p1__6562_SHARP_;

if(cljs.core.truth_(or__3576__auto____6564))
{return or__3576__auto____6564;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__6563_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__6565){
var maps = cljs.core.seq( arglist__6565 );;
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
{var merge_entry__6568 = (function (m,e){
var k__6566 = cljs.core.first.call(null,e);
var v__6567 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__6566)))
{return cljs.core.assoc.call(null,m,k__6566,f.call(null,cljs.core.get.call(null,m,k__6566),v__6567));
} else
{return cljs.core.assoc.call(null,m,k__6566,v__6567);
}
});
var merge2__6570 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__6568,(function (){var or__3576__auto____6569 = m1;

if(cljs.core.truth_(or__3576__auto____6569))
{return or__3576__auto____6569;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__6570,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__6571){
var f = cljs.core.first(arglist__6571);
var maps = cljs.core.rest(arglist__6571);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__6573 = cljs.core.ObjMap.fromObject([],{});
var keys__6574 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__6574))
{var key__6575 = cljs.core.first.call(null,keys__6574);
var entry__6576 = cljs.core.get.call(null,map,key__6575,"﷐'user/not-found");

{
var G__6577 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__6576,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__6573,key__6575,entry__6576):ret__6573);
var G__6578 = cljs.core.next.call(null,keys__6574);
ret__6573 = G__6577;
keys__6574 = G__6578;
continue;
}
} else
{return ret__6573;
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
var this__6579 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__6592 = null;
var G__6592__6593 = (function (coll,v){
var this__6580 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__6592__6594 = (function (coll,v,not_found){
var this__6581 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__6581.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__6592 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__6592__6593.call(this,coll,v);
case  3 :
return G__6592__6594.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6592;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6582 = this;
return (new cljs.core.Set(this__6582.meta,cljs.core.assoc.call(null,this__6582.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__6583 = this;
return cljs.core.keys.call(null,this__6583.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__6584 = this;
return (new cljs.core.Set(this__6584.meta,cljs.core.dissoc.call(null,this__6584.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__6585 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6586 = this;
var and__3574__auto____6587 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____6587))
{var and__3574__auto____6588 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____6588))
{return cljs.core.every_QMARK_.call(null,(function (p1__6572_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__6572_SHARP_);
}),other);
} else
{return and__3574__auto____6588;
}
} else
{return and__3574__auto____6587;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__6589 = this;
return (new cljs.core.Set(meta,this__6589.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__6590 = this;
return this__6590.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__6591 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__6591.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__6596 = null;
var G__6596__6597 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__6596__6598 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__6596 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__6596__6597.call(this,_,k);
case  3 :
return G__6596__6598.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6596;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__6601 = cljs.core.seq.call(null,coll);
var out__6602 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__6601))))
{{
var G__6603 = cljs.core.rest.call(null,in$__6601);
var G__6604 = cljs.core.conj.call(null,out__6602,cljs.core.first.call(null,in$__6601));
in$__6601 = G__6603;
out__6602 = G__6604;
continue;
}
} else
{return out__6602;
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
{var n__6605 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3723__auto____6606 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3723__auto____6606))
{var e__6607 = temp__3723__auto____6606;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__6607));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__6605,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__6600_SHARP_){
var temp__3723__auto____6608 = cljs.core.find.call(null,smap,p1__6600_SHARP_);

if(cljs.core.truth_(temp__3723__auto____6608))
{var e__6609 = temp__3723__auto____6608;

return cljs.core.second.call(null,e__6609);
} else
{return p1__6600_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__6617 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__6610,seen){
while(true){
var vec__6611__6612 = p__6610;
var f__6613 = cljs.core.nth.call(null,vec__6611__6612,0,null);
var xs__6614 = vec__6611__6612;

var temp__3726__auto____6615 = cljs.core.seq.call(null,xs__6614);

if(cljs.core.truth_(temp__3726__auto____6615))
{var s__6616 = temp__3726__auto____6615;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__6613)))
{{
var G__6618 = cljs.core.rest.call(null,s__6616);
var G__6619 = seen;
p__6610 = G__6618;
seen = G__6619;
continue;
}
} else
{return cljs.core.cons.call(null,f__6613,step.call(null,cljs.core.rest.call(null,s__6616),cljs.core.conj.call(null,seen,f__6613)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__6617.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__6620 = cljs.core.Vector.fromArray([]);
var s__6621 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__6621)))
{{
var G__6622 = cljs.core.conj.call(null,ret__6620,cljs.core.first.call(null,s__6621));
var G__6623 = cljs.core.next.call(null,s__6621);
ret__6620 = G__6622;
s__6621 = G__6623;
continue;
}
} else
{return cljs.core.seq.call(null,ret__6620);
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
{if(cljs.core.truth_((function (){var or__3576__auto____6624 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____6624))
{return or__3576__auto____6624;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__6625 = x.lastIndexOf("/");

if(cljs.core.truth_((i__6625 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__6625 + 1));
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
if(cljs.core.truth_((function (){var or__3576__auto____6626 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____6626))
{return or__3576__auto____6626;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__6627 = x.lastIndexOf("/");

if(cljs.core.truth_((i__6627 > -1)))
{return cljs.core.subs.call(null,x,2,i__6627);
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
var map__6630 = cljs.core.ObjMap.fromObject([],{});
var ks__6631 = cljs.core.seq.call(null,keys);
var vs__6632 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____6633 = ks__6631;

if(cljs.core.truth_(and__3574__auto____6633))
{return vs__6632;
} else
{return and__3574__auto____6633;
}
})()))
{{
var G__6634 = cljs.core.assoc.call(null,map__6630,cljs.core.first.call(null,ks__6631),cljs.core.first.call(null,vs__6632));
var G__6635 = cljs.core.next.call(null,ks__6631);
var G__6636 = cljs.core.next.call(null,vs__6632);
map__6630 = G__6634;
ks__6631 = G__6635;
vs__6632 = G__6636;
continue;
}
} else
{return map__6630;
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
var max_key__6639 = (function (k,x){
return x;
});
var max_key__6640 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__6641 = (function() { 
var G__6643__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6628_SHARP_,p2__6629_SHARP_){
return max_key.call(null,k,p1__6628_SHARP_,p2__6629_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__6643 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6643__delegate.call(this, k, x, y, more);
};
G__6643.cljs$lang$maxFixedArity = 3;
G__6643.cljs$lang$applyTo = (function (arglist__6644){
var k = cljs.core.first(arglist__6644);
var x = cljs.core.first(cljs.core.next(arglist__6644));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6644)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6644)));
return G__6643__delegate.call(this, k, x, y, more);
});
return G__6643;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__6639.call(this,k,x);
case  3 :
return max_key__6640.call(this,k,x,y);
default:
return max_key__6641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__6641.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__6645 = (function (k,x){
return x;
});
var min_key__6646 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__6647 = (function() { 
var G__6649__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__6637_SHARP_,p2__6638_SHARP_){
return min_key.call(null,k,p1__6637_SHARP_,p2__6638_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__6649 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6649__delegate.call(this, k, x, y, more);
};
G__6649.cljs$lang$maxFixedArity = 3;
G__6649.cljs$lang$applyTo = (function (arglist__6650){
var k = cljs.core.first(arglist__6650);
var x = cljs.core.first(cljs.core.next(arglist__6650));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6650)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6650)));
return G__6649__delegate.call(this, k, x, y, more);
});
return G__6649;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__6645.call(this,k,x);
case  3 :
return min_key__6646.call(this,k,x,y);
default:
return min_key__6647.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__6647.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__6653 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__6654 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6651 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6651))
{var s__6652 = temp__3726__auto____6651;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__6652),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__6652)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__6653.call(this,n,step);
case  3 :
return partition_all__6654.call(this,n,step,coll);
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
var temp__3726__auto____6656 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6656))
{var s__6657 = temp__3726__auto____6656;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__6657))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__6657),take_while.call(null,pred,cljs.core.rest.call(null,s__6657)));
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
var this__6658 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__6659 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6675 = null;
var G__6675__6676 = (function (rng,f){
var this__6660 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__6675__6677 = (function (rng,f,s){
var this__6661 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__6675 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__6675__6676.call(this,rng,f);
case  3 :
return G__6675__6677.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6675;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__6662 = this;
var comp__6663 = (cljs.core.truth_((this__6662.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__6663.call(null,this__6662.start,this__6662.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__6664 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__6664.end - this__6664.start) / this__6664.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__6665 = this;
return this__6665.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__6666 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__6666.meta,(this__6666.start + this__6666.step),this__6666.end,this__6666.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__6667 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__6668 = this;
return (new cljs.core.Range(meta,this__6668.start,this__6668.end,this__6668.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__6669 = this;
return this__6669.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6679 = null;
var G__6679__6680 = (function (rng,n){
var this__6670 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__6670.start + (n * this__6670.step));
} else
{if(cljs.core.truth_((function (){var and__3574__auto____6671 = (this__6670.start > this__6670.end);

if(cljs.core.truth_(and__3574__auto____6671))
{return cljs.core._EQ_.call(null,this__6670.step,0);
} else
{return and__3574__auto____6671;
}
})()))
{return this__6670.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__6679__6681 = (function (rng,n,not_found){
var this__6672 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__6672.start + (n * this__6672.step));
} else
{if(cljs.core.truth_((function (){var and__3574__auto____6673 = (this__6672.start > this__6672.end);

if(cljs.core.truth_(and__3574__auto____6673))
{return cljs.core._EQ_.call(null,this__6672.step,0);
} else
{return and__3574__auto____6673;
}
})()))
{return this__6672.start;
} else
{return not_found;
}
}
});
G__6679 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__6679__6680.call(this,rng,n);
case  3 :
return G__6679__6681.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6679;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__6674 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6674.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__6683 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__6684 = (function (end){
return range.call(null,0,end,1);
});
var range__6685 = (function (start,end){
return range.call(null,start,end,1);
});
var range__6686 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__6683.call(this);
case  1 :
return range__6684.call(this,start);
case  2 :
return range__6685.call(this,start,end);
case  3 :
return range__6686.call(this,start,end,step);
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
var temp__3726__auto____6688 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6688))
{var s__6689 = temp__3726__auto____6688;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__6689),take_nth.call(null,n,cljs.core.drop.call(null,n,s__6689)));
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
var temp__3726__auto____6691 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6691))
{var s__6692 = temp__3726__auto____6691;

var fst__6693 = cljs.core.first.call(null,s__6692);
var fv__6694 = f.call(null,fst__6693);
var run__6695 = cljs.core.cons.call(null,fst__6693,cljs.core.take_while.call(null,(function (p1__6690_SHARP_){
return cljs.core._EQ_.call(null,fv__6694,f.call(null,p1__6690_SHARP_));
}),cljs.core.next.call(null,s__6692)));

return cljs.core.cons.call(null,run__6695,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__6695),s__6692))));
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
var reductions__6710 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____6706 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____6706))
{var s__6707 = temp__3723__auto____6706;

return reductions.call(null,f,cljs.core.first.call(null,s__6707),cljs.core.rest.call(null,s__6707));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__6711 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____6708 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____6708))
{var s__6709 = temp__3726__auto____6708;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__6709)),cljs.core.rest.call(null,s__6709));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__6710.call(this,f,init);
case  3 :
return reductions__6711.call(this,f,init,coll);
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
var juxt__6714 = (function (f){
return (function() {
var G__6719 = null;
var G__6719__6720 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__6719__6721 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__6719__6722 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__6719__6723 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__6719__6724 = (function() { 
var G__6726__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__6726 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6726__delegate.call(this, x, y, z, args);
};
G__6726.cljs$lang$maxFixedArity = 3;
G__6726.cljs$lang$applyTo = (function (arglist__6727){
var x = cljs.core.first(arglist__6727);
var y = cljs.core.first(cljs.core.next(arglist__6727));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6727)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6727)));
return G__6726__delegate.call(this, x, y, z, args);
});
return G__6726;
})()
;
G__6719 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6719__6720.call(this);
case  1 :
return G__6719__6721.call(this,x);
case  2 :
return G__6719__6722.call(this,x,y);
case  3 :
return G__6719__6723.call(this,x,y,z);
default:
return G__6719__6724.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6719.cljs$lang$maxFixedArity = 3;
G__6719.cljs$lang$applyTo = G__6719__6724.cljs$lang$applyTo;
return G__6719;
})()
});
var juxt__6715 = (function (f,g){
return (function() {
var G__6728 = null;
var G__6728__6729 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__6728__6730 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__6728__6731 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__6728__6732 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__6728__6733 = (function() { 
var G__6735__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__6735 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6735__delegate.call(this, x, y, z, args);
};
G__6735.cljs$lang$maxFixedArity = 3;
G__6735.cljs$lang$applyTo = (function (arglist__6736){
var x = cljs.core.first(arglist__6736);
var y = cljs.core.first(cljs.core.next(arglist__6736));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6736)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6736)));
return G__6735__delegate.call(this, x, y, z, args);
});
return G__6735;
})()
;
G__6728 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6728__6729.call(this);
case  1 :
return G__6728__6730.call(this,x);
case  2 :
return G__6728__6731.call(this,x,y);
case  3 :
return G__6728__6732.call(this,x,y,z);
default:
return G__6728__6733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6728.cljs$lang$maxFixedArity = 3;
G__6728.cljs$lang$applyTo = G__6728__6733.cljs$lang$applyTo;
return G__6728;
})()
});
var juxt__6716 = (function (f,g,h){
return (function() {
var G__6737 = null;
var G__6737__6738 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__6737__6739 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__6737__6740 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__6737__6741 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__6737__6742 = (function() { 
var G__6744__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__6744 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6744__delegate.call(this, x, y, z, args);
};
G__6744.cljs$lang$maxFixedArity = 3;
G__6744.cljs$lang$applyTo = (function (arglist__6745){
var x = cljs.core.first(arglist__6745);
var y = cljs.core.first(cljs.core.next(arglist__6745));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6745)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6745)));
return G__6744__delegate.call(this, x, y, z, args);
});
return G__6744;
})()
;
G__6737 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6737__6738.call(this);
case  1 :
return G__6737__6739.call(this,x);
case  2 :
return G__6737__6740.call(this,x,y);
case  3 :
return G__6737__6741.call(this,x,y,z);
default:
return G__6737__6742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6737.cljs$lang$maxFixedArity = 3;
G__6737.cljs$lang$applyTo = G__6737__6742.cljs$lang$applyTo;
return G__6737;
})()
});
var juxt__6717 = (function() { 
var G__6746__delegate = function (f,g,h,fs){
var fs__6713 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__6747 = null;
var G__6747__6748 = (function (){
return cljs.core.reduce.call(null,(function (p1__6696_SHARP_,p2__6697_SHARP_){
return cljs.core.conj.call(null,p1__6696_SHARP_,p2__6697_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__6713);
});
var G__6747__6749 = (function (x){
return cljs.core.reduce.call(null,(function (p1__6698_SHARP_,p2__6699_SHARP_){
return cljs.core.conj.call(null,p1__6698_SHARP_,p2__6699_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__6713);
});
var G__6747__6750 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__6700_SHARP_,p2__6701_SHARP_){
return cljs.core.conj.call(null,p1__6700_SHARP_,p2__6701_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__6713);
});
var G__6747__6751 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__6702_SHARP_,p2__6703_SHARP_){
return cljs.core.conj.call(null,p1__6702_SHARP_,p2__6703_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__6713);
});
var G__6747__6752 = (function() { 
var G__6754__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__6704_SHARP_,p2__6705_SHARP_){
return cljs.core.conj.call(null,p1__6704_SHARP_,cljs.core.apply.call(null,p2__6705_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__6713);
};
var G__6754 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6754__delegate.call(this, x, y, z, args);
};
G__6754.cljs$lang$maxFixedArity = 3;
G__6754.cljs$lang$applyTo = (function (arglist__6755){
var x = cljs.core.first(arglist__6755);
var y = cljs.core.first(cljs.core.next(arglist__6755));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6755)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6755)));
return G__6754__delegate.call(this, x, y, z, args);
});
return G__6754;
})()
;
G__6747 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__6747__6748.call(this);
case  1 :
return G__6747__6749.call(this,x);
case  2 :
return G__6747__6750.call(this,x,y);
case  3 :
return G__6747__6751.call(this,x,y,z);
default:
return G__6747__6752.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__6747.cljs$lang$maxFixedArity = 3;
G__6747.cljs$lang$applyTo = G__6747__6752.cljs$lang$applyTo;
return G__6747;
})()
};
var G__6746 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6746__delegate.call(this, f, g, h, fs);
};
G__6746.cljs$lang$maxFixedArity = 3;
G__6746.cljs$lang$applyTo = (function (arglist__6756){
var f = cljs.core.first(arglist__6756);
var g = cljs.core.first(cljs.core.next(arglist__6756));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6756)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6756)));
return G__6746__delegate.call(this, f, g, h, fs);
});
return G__6746;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__6714.call(this,f);
case  2 :
return juxt__6715.call(this,f,g);
case  3 :
return juxt__6716.call(this,f,g,h);
default:
return juxt__6717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__6717.cljs$lang$applyTo;
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
var dorun__6758 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__6761 = cljs.core.next.call(null,coll);
coll = G__6761;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__6759 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____6757 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____6757))
{return (n > 0);
} else
{return and__3574__auto____6757;
}
})()))
{{
var G__6762 = (n - 1);
var G__6763 = cljs.core.next.call(null,coll);
n = G__6762;
coll = G__6763;
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
return dorun__6758.call(this,n);
case  2 :
return dorun__6759.call(this,n,coll);
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
var doall__6764 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__6765 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__6764.call(this,n);
case  2 :
return doall__6765.call(this,n,coll);
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
var matches__6767 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__6767),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__6767),1)))
{return cljs.core.first.call(null,matches__6767);
} else
{return cljs.core.vec.call(null,matches__6767);
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
var matches__6768 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__6768)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__6768),1)))
{return cljs.core.first.call(null,matches__6768);
} else
{return cljs.core.vec.call(null,matches__6768);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__6769 = cljs.core.re_find.call(null,re,s);
var match_idx__6770 = s.search(re);
var match_str__6771 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__6769))?cljs.core.first.call(null,match_data__6769):match_data__6769);
var post_match__6772 = cljs.core.subs.call(null,s,(match_idx__6770 + cljs.core.count.call(null,match_str__6771)));

if(cljs.core.truth_(match_data__6769))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__6769,re_seq.call(null,re,post_match__6772));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__6773_SHARP_){
return print_one.call(null,p1__6773_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____6774 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____6774))
{var and__3574__auto____6778 = (function (){var x__320__auto____6775 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____6776 = x__320__auto____6775;

if(cljs.core.truth_(and__3574__auto____6776))
{var and__3574__auto____6777 = x__320__auto____6775.cljs$core$IMeta$;

if(cljs.core.truth_(and__3574__auto____6777))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__320__auto____6775));
} else
{return and__3574__auto____6777;
}
} else
{return and__3574__auto____6776;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__320__auto____6775);
}
})();

if(cljs.core.truth_(and__3574__auto____6778))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____6778;
}
} else
{return and__3574__auto____6774;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__320__auto____6779 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____6780 = x__320__auto____6779;

if(cljs.core.truth_(and__3574__auto____6780))
{var and__3574__auto____6781 = x__320__auto____6779.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3574__auto____6781))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__320__auto____6779));
} else
{return and__3574__auto____6781;
}
} else
{return and__3574__auto____6780;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__320__auto____6779);
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
var first_obj__6782 = cljs.core.first.call(null,objs);
var sb__6783 = (new goog.string.StringBuffer());

var G__6784__6785 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__6784__6785))
{var obj__6786 = cljs.core.first.call(null,G__6784__6785);
var G__6784__6787 = G__6784__6785;

while(true){
if(cljs.core.truth_((obj__6786 === first_obj__6782)))
{} else
{sb__6783.append(" ");
}
var G__6788__6789 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__6786,opts));

if(cljs.core.truth_(G__6788__6789))
{var string__6790 = cljs.core.first.call(null,G__6788__6789);
var G__6788__6791 = G__6788__6789;

while(true){
sb__6783.append(string__6790);
var temp__3726__auto____6792 = cljs.core.next.call(null,G__6788__6791);

if(cljs.core.truth_(temp__3726__auto____6792))
{var G__6788__6793 = temp__3726__auto____6792;

{
var G__6796 = cljs.core.first.call(null,G__6788__6793);
var G__6797 = G__6788__6793;
string__6790 = G__6796;
G__6788__6791 = G__6797;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3726__auto____6794 = cljs.core.next.call(null,G__6784__6787);

if(cljs.core.truth_(temp__3726__auto____6794))
{var G__6784__6795 = temp__3726__auto____6794;

{
var G__6798 = cljs.core.first.call(null,G__6784__6795);
var G__6799 = G__6784__6795;
obj__6786 = G__6798;
G__6784__6787 = G__6799;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__6783);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__6800 = cljs.core.first.call(null,objs);

var G__6801__6802 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__6801__6802))
{var obj__6803 = cljs.core.first.call(null,G__6801__6802);
var G__6801__6804 = G__6801__6802;

while(true){
if(cljs.core.truth_((obj__6803 === first_obj__6800)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__6805__6806 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__6803,opts));

if(cljs.core.truth_(G__6805__6806))
{var string__6807 = cljs.core.first.call(null,G__6805__6806);
var G__6805__6808 = G__6805__6806;

while(true){
cljs.core.string_print.call(null,string__6807);
var temp__3726__auto____6809 = cljs.core.next.call(null,G__6805__6808);

if(cljs.core.truth_(temp__3726__auto____6809))
{var G__6805__6810 = temp__3726__auto____6809;

{
var G__6813 = cljs.core.first.call(null,G__6805__6810);
var G__6814 = G__6805__6810;
string__6807 = G__6813;
G__6805__6808 = G__6814;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3726__auto____6811 = cljs.core.next.call(null,G__6801__6804);

if(cljs.core.truth_(temp__3726__auto____6811))
{var G__6801__6812 = temp__3726__auto____6811;

{
var G__6815 = cljs.core.first.call(null,G__6801__6812);
var G__6816 = G__6801__6812;
obj__6803 = G__6815;
G__6801__6804 = G__6816;
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
pr_str.cljs$lang$applyTo = (function (arglist__6817){
var objs = cljs.core.seq( arglist__6817 );;
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
pr.cljs$lang$applyTo = (function (arglist__6818){
var objs = cljs.core.seq( arglist__6818 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__6819){
var objs = cljs.core.seq( arglist__6819 );;
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
println.cljs$lang$applyTo = (function (arglist__6820){
var objs = cljs.core.seq( arglist__6820 );;
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
prn.cljs$lang$applyTo = (function (arglist__6821){
var objs = cljs.core.seq( arglist__6821 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__6822 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__6822,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____6823 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____6823))
{var nspc__6824 = temp__3726__auto____6823;

return cljs.core.str.call(null,nspc__6824,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____6825 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____6825))
{var nspc__6826 = temp__3726__auto____6825;

return cljs.core.str.call(null,nspc__6826,"/");
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
var pr_pair__6827 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__6827,"{",", ","}",opts,coll);
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
var this__6828 = this;
var G__6829__6830 = cljs.core.seq.call(null,this__6828.watches);

if(cljs.core.truth_(G__6829__6830))
{var G__6832__6834 = cljs.core.first.call(null,G__6829__6830);
var vec__6833__6835 = G__6832__6834;
var key__6836 = cljs.core.nth.call(null,vec__6833__6835,0,null);
var f__6837 = cljs.core.nth.call(null,vec__6833__6835,1,null);
var G__6829__6838 = G__6829__6830;

var G__6832__6839 = G__6832__6834;
var G__6829__6840 = G__6829__6838;

while(true){
var vec__6841__6842 = G__6832__6839;
var key__6843 = cljs.core.nth.call(null,vec__6841__6842,0,null);
var f__6844 = cljs.core.nth.call(null,vec__6841__6842,1,null);
var G__6829__6845 = G__6829__6840;

f__6844.call(null,key__6843,this$,oldval,newval);
var temp__3726__auto____6846 = cljs.core.next.call(null,G__6829__6845);

if(cljs.core.truth_(temp__3726__auto____6846))
{var G__6829__6847 = temp__3726__auto____6846;

{
var G__6854 = cljs.core.first.call(null,G__6829__6847);
var G__6855 = G__6829__6847;
G__6832__6839 = G__6854;
G__6829__6840 = G__6855;
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
var this__6848 = this;
return this$.watches = cljs.core.assoc.call(null,this__6848.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__6849 = this;
return this$.watches = cljs.core.dissoc.call(null,this__6849.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__6850 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__6850.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__6851 = this;
return this__6851.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__6852 = this;
return this__6852.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__6853 = this;
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
var atom__6862 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__6863 = (function() { 
var G__6865__delegate = function (x,p__6856){
var map__6857__6858 = p__6856;
var map__6857__6859 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6857__6858))?cljs.core.apply.call(null,cljs.core.hash_map,map__6857__6858):map__6857__6858);
var validator__6860 = cljs.core.get.call(null,map__6857__6859,"﷐'validator");
var meta__6861 = cljs.core.get.call(null,map__6857__6859,"﷐'meta");

return (new cljs.core.Atom(x,meta__6861,validator__6860,null));
};
var G__6865 = function (x,var_args){
var p__6856 = null;
if (goog.isDef(var_args)) {
  p__6856 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6865__delegate.call(this, x, p__6856);
};
G__6865.cljs$lang$maxFixedArity = 1;
G__6865.cljs$lang$applyTo = (function (arglist__6866){
var x = cljs.core.first(arglist__6866);
var p__6856 = cljs.core.rest(arglist__6866);
return G__6865__delegate.call(this, x, p__6856);
});
return G__6865;
})()
;
atom = function(x,var_args){
var p__6856 = var_args;
switch(arguments.length){
case  1 :
return atom__6862.call(this,x);
default:
return atom__6863.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__6863.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3726__auto____6867 = a.validator;

if(cljs.core.truth_(temp__3726__auto____6867))
{var validate__6868 = temp__3726__auto____6867;

if(cljs.core.truth_(validate__6868.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",2934))))));
}
} else
{}
var old_value__6869 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__6869,new_value);
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
var swap_BANG___6870 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___6871 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___6872 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___6873 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6874 = (function() { 
var G__6876__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__6876 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__6876__delegate.call(this, a, f, x, y, z, more);
};
G__6876.cljs$lang$maxFixedArity = 5;
G__6876.cljs$lang$applyTo = (function (arglist__6877){
var a = cljs.core.first(arglist__6877);
var f = cljs.core.first(cljs.core.next(arglist__6877));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6877)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6877))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6877)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__6877)))));
return G__6876__delegate.call(this, a, f, x, y, z, more);
});
return G__6876;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___6870.call(this,a,f);
case  3 :
return swap_BANG___6871.call(this,a,f,x);
case  4 :
return swap_BANG___6872.call(this,a,f,x,y);
case  5 :
return swap_BANG___6873.call(this,a,f,x,y,z);
default:
return swap_BANG___6874.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6874.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__6878){
var iref = cljs.core.first(arglist__6878);
var f = cljs.core.first(cljs.core.next(arglist__6878));
var args = cljs.core.rest(cljs.core.next(arglist__6878));
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
var gensym__6879 = (function (){
return gensym.call(null,"G__");
});
var gensym__6880 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__6879.call(this);
case  1 :
return gensym__6880.call(this,prefix_string);
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
var this__6882 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__6882.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__6883 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__6883.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__6883.state,this__6883.f);
}
return cljs.core.deref.call(null,this__6883.state);
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
delay.cljs$lang$applyTo = (function (arglist__6884){
var body = cljs.core.seq( arglist__6884 );;
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
var map__6885__6886 = options;
var map__6885__6887 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__6885__6886))?cljs.core.apply.call(null,cljs.core.hash_map,map__6885__6886):map__6885__6886);
var keywordize_keys__6888 = cljs.core.get.call(null,map__6885__6887,"﷐'keywordize-keys");
var keyfn__6889 = (cljs.core.truth_(keywordize_keys__6888)?cljs.core.keyword:cljs.core.str);
var f__6895 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__384__auto____6894 = (function iter__6890(s__6891){
return (new cljs.core.LazySeq(null,false,(function (){
var s__6891__6892 = s__6891;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__6891__6892)))
{var k__6893 = cljs.core.first.call(null,s__6891__6892);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__6889.call(null,k__6893),thisfn.call(null,(x[k__6893]))]),iter__6890.call(null,cljs.core.rest.call(null,s__6891__6892)));
} else
{return null;
}
break;
}
})));
});

return iter__384__auto____6894.call(null,cljs.core.js_keys.call(null,x));
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

return f__6895.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__6896){
var x = cljs.core.first(arglist__6896);
var options = cljs.core.rest(arglist__6896);
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
var mem__6897 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__6901__delegate = function (args){
var temp__3723__auto____6898 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__6897),args);

if(cljs.core.truth_(temp__3723__auto____6898))
{var v__6899 = temp__3723__auto____6898;

return v__6899;
} else
{var ret__6900 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__6897,cljs.core.assoc,args,ret__6900);
return ret__6900;
}
};
var G__6901 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6901__delegate.call(this, args);
};
G__6901.cljs$lang$maxFixedArity = 0;
G__6901.cljs$lang$applyTo = (function (arglist__6902){
var args = cljs.core.seq( arglist__6902 );;
return G__6901__delegate.call(this, args);
});
return G__6901;
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
var trampoline__6904 = (function (f){
while(true){
var ret__6903 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__6903)))
{{
var G__6907 = ret__6903;
f = G__6907;
continue;
}
} else
{return ret__6903;
}
break;
}
});
var trampoline__6905 = (function() { 
var G__6908__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__6908 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6908__delegate.call(this, f, args);
};
G__6908.cljs$lang$maxFixedArity = 1;
G__6908.cljs$lang$applyTo = (function (arglist__6909){
var f = cljs.core.first(arglist__6909);
var args = cljs.core.rest(arglist__6909);
return G__6908__delegate.call(this, f, args);
});
return G__6908;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__6904.call(this,f);
default:
return trampoline__6905.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__6905.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__6910 = (function (){
return rand.call(null,1);
});
var rand__6911 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__6910.call(this);
case  1 :
return rand__6911.call(this,n);
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
var k__6913 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__6913,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__6913,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___6922 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___6923 = (function (h,child,parent){
var or__3576__auto____6914 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3576__auto____6914))
{return or__3576__auto____6914;
} else
{var or__3576__auto____6915 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3576__auto____6915))
{return or__3576__auto____6915;
} else
{var and__3574__auto____6916 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3574__auto____6916))
{var and__3574__auto____6917 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3574__auto____6917))
{var and__3574__auto____6918 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3574__auto____6918))
{var ret__6919 = true;
var i__6920 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____6921 = cljs.core.not.call(null,ret__6919);

if(cljs.core.truth_(or__3576__auto____6921))
{return or__3576__auto____6921;
} else
{return cljs.core._EQ_.call(null,i__6920,cljs.core.count.call(null,parent));
}
})()))
{return ret__6919;
} else
{{
var G__6925 = isa_QMARK_.call(null,h,child.call(null,i__6920),parent.call(null,i__6920));
var G__6926 = (i__6920 + 1);
ret__6919 = G__6925;
i__6920 = G__6926;
continue;
}
}
break;
}
} else
{return and__3574__auto____6918;
}
} else
{return and__3574__auto____6917;
}
} else
{return and__3574__auto____6916;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___6922.call(this,h,child);
case  3 :
return isa_QMARK___6923.call(this,h,child,parent);
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
var parents__6927 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__6928 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__6927.call(this,h);
case  2 :
return parents__6928.call(this,h,tag);
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
var ancestors__6930 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__6931 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__6930.call(this,h);
case  2 :
return ancestors__6931.call(this,h,tag);
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
var descendants__6933 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__6934 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__6933.call(this,h);
case  2 :
return descendants__6934.call(this,h,tag);
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
var derive__6944 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3226))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__6945 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3230))))));
}
var tp__6939 = "﷐'parents".call(null,h);
var td__6940 = "﷐'descendants".call(null,h);
var ta__6941 = "﷐'ancestors".call(null,h);
var tf__6942 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3576__auto____6943 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__6939.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__6941.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__6941.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__6939,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__6942.call(null,"﷐'ancestors".call(null,h),tag,td__6940,parent,ta__6941),"﷐'descendants":tf__6942.call(null,"﷐'descendants".call(null,h),parent,ta__6941,tag,td__6940)});
})());

if(cljs.core.truth_(or__3576__auto____6943))
{return or__3576__auto____6943;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__6944.call(this,h,tag);
case  3 :
return derive__6945.call(this,h,tag,parent);
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
var underive__6951 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__6952 = (function (h,tag,parent){
var parentMap__6947 = "﷐'parents".call(null,h);
var childsParents__6948 = (cljs.core.truth_(parentMap__6947.call(null,tag))?cljs.core.disj.call(null,parentMap__6947.call(null,tag),parent):cljs.core.set([]));
var newParents__6949 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__6948))?cljs.core.assoc.call(null,parentMap__6947,tag,childsParents__6948):cljs.core.dissoc.call(null,parentMap__6947,tag));
var deriv_seq__6950 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__6936_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__6936_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__6936_SHARP_),cljs.core.second.call(null,p1__6936_SHARP_)));
}),cljs.core.seq.call(null,newParents__6949)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__6947.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__6937_SHARP_,p2__6938_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__6937_SHARP_,p2__6938_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__6950));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__6951.call(this,h,tag);
case  3 :
return underive__6952.call(this,h,tag,parent);
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
var xprefs__6954 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3576__auto____6956 = (cljs.core.truth_((function (){var and__3574__auto____6955 = xprefs__6954;

if(cljs.core.truth_(and__3574__auto____6955))
{return xprefs__6954.call(null,y);
} else
{return and__3574__auto____6955;
}
})())?true:null);

if(cljs.core.truth_(or__3576__auto____6956))
{return or__3576__auto____6956;
} else
{var or__3576__auto____6958 = (function (){var ps__6957 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__6957) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__6957),prefer_table)))
{} else
{}
{
var G__6961 = cljs.core.rest.call(null,ps__6957);
ps__6957 = G__6961;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____6958))
{return or__3576__auto____6958;
} else
{var or__3576__auto____6960 = (function (){var ps__6959 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__6959) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__6959),y,prefer_table)))
{} else
{}
{
var G__6962 = cljs.core.rest.call(null,ps__6959);
ps__6959 = G__6962;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____6960))
{return or__3576__auto____6960;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3576__auto____6963 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3576__auto____6963))
{return or__3576__auto____6963;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__6972 = cljs.core.reduce.call(null,(function (be,p__6964){
var vec__6965__6966 = p__6964;
var k__6967 = cljs.core.nth.call(null,vec__6965__6966,0,null);
var ___6968 = cljs.core.nth.call(null,vec__6965__6966,1,null);
var e__6969 = vec__6965__6966;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__6967)))
{var be2__6971 = (cljs.core.truth_((function (){var or__3576__auto____6970 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3576__auto____6970))
{return or__3576__auto____6970;
} else
{return cljs.core.dominates.call(null,k__6967,cljs.core.first.call(null,be),prefer_table);
}
})())?e__6969:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__6971),k__6967,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__6967," and ",cljs.core.first.call(null,be2__6971),", and neither is preferred")));
}
return be2__6971;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__6972))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__6972));
return cljs.core.second.call(null,best_entry__6972);
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
if(cljs.core.truth_((function (){var and__3574__auto____6973 = mf;

if(cljs.core.truth_(and__3574__auto____6973))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3574__auto____6973;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3576__auto____6974 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6974))
{return or__3576__auto____6974;
} else
{var or__3576__auto____6975 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3576__auto____6975))
{return or__3576__auto____6975;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3574__auto____6976 = mf;

if(cljs.core.truth_(and__3574__auto____6976))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3574__auto____6976;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3576__auto____6977 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6977))
{return or__3576__auto____6977;
} else
{var or__3576__auto____6978 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3576__auto____6978))
{return or__3576__auto____6978;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____6979 = mf;

if(cljs.core.truth_(and__3574__auto____6979))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3574__auto____6979;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____6980 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6980))
{return or__3576__auto____6980;
} else
{var or__3576__auto____6981 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3576__auto____6981))
{return or__3576__auto____6981;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3574__auto____6982 = mf;

if(cljs.core.truth_(and__3574__auto____6982))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3574__auto____6982;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3576__auto____6983 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6983))
{return or__3576__auto____6983;
} else
{var or__3576__auto____6984 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3576__auto____6984))
{return or__3576__auto____6984;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____6985 = mf;

if(cljs.core.truth_(and__3574__auto____6985))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3574__auto____6985;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____6986 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6986))
{return or__3576__auto____6986;
} else
{var or__3576__auto____6987 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3576__auto____6987))
{return or__3576__auto____6987;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3574__auto____6988 = mf;

if(cljs.core.truth_(and__3574__auto____6988))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3574__auto____6988;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3576__auto____6989 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6989))
{return or__3576__auto____6989;
} else
{var or__3576__auto____6990 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3576__auto____6990))
{return or__3576__auto____6990;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3574__auto____6991 = mf;

if(cljs.core.truth_(and__3574__auto____6991))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3574__auto____6991;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3576__auto____6992 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6992))
{return or__3576__auto____6992;
} else
{var or__3576__auto____6993 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3576__auto____6993))
{return or__3576__auto____6993;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3574__auto____6994 = mf;

if(cljs.core.truth_(and__3574__auto____6994))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3574__auto____6994;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3576__auto____6995 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____6995))
{return or__3576__auto____6995;
} else
{var or__3576__auto____6996 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3576__auto____6996))
{return or__3576__auto____6996;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__6997 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__6998 = cljs.core._get_method.call(null,mf,dispatch_val__6997);

if(cljs.core.truth_(target_fn__6998))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__6997)));
}
return cljs.core.apply.call(null,target_fn__6998,args);
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
var this__6999 = this;
cljs.core.swap_BANG_.call(null,this__6999.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6999.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6999.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6999.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__7000 = this;
cljs.core.swap_BANG_.call(null,this__7000.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__7000.method_cache,this__7000.method_table,this__7000.cached_hierarchy,this__7000.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__7001 = this;
cljs.core.swap_BANG_.call(null,this__7001.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__7001.method_cache,this__7001.method_table,this__7001.cached_hierarchy,this__7001.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__7002 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__7002.cached_hierarchy),cljs.core.deref.call(null,this__7002.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__7002.method_cache,this__7002.method_table,this__7002.cached_hierarchy,this__7002.hierarchy);
}
var temp__3723__auto____7003 = cljs.core.deref.call(null,this__7002.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3723__auto____7003))
{var target_fn__7004 = temp__3723__auto____7003;

return target_fn__7004;
} else
{var temp__3723__auto____7005 = cljs.core.find_and_cache_best_method.call(null,this__7002.name,dispatch_val,this__7002.hierarchy,this__7002.method_table,this__7002.prefer_table,this__7002.method_cache,this__7002.cached_hierarchy);

if(cljs.core.truth_(temp__3723__auto____7005))
{var target_fn__7006 = temp__3723__auto____7005;

return target_fn__7006;
} else
{return cljs.core.deref.call(null,this__7002.method_table).call(null,this__7002.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__7007 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__7007.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__7007.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__7007.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__7007.method_cache,this__7007.method_table,this__7007.cached_hierarchy,this__7007.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__7008 = this;
return cljs.core.deref.call(null,this__7008.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__7009 = this;
return cljs.core.deref.call(null,this__7009.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__7010 = this;
return cljs.core.do_invoke.call(null,mf,this__7010.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__7011__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__7011 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7011__delegate.call(this, _, args);
};
G__7011.cljs$lang$maxFixedArity = 1;
G__7011.cljs$lang$applyTo = (function (arglist__7012){
var _ = cljs.core.first(arglist__7012);
var args = cljs.core.rest(arglist__7012);
return G__7011__delegate.call(this, _, args);
});
return G__7011;
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
