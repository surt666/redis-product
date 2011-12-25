goog.provide('client');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
client.base_url = "http://localhost:8080/";
client.get_uri = (function get_uri(uri,callback){
return goog.net.XhrIo.send.call(null,uri,callback,"GET");
});
client.insert_data = (function insert_data(elem_id,e){
var json__3955 = (e["target"]).getResponseJson();
var data__3956 = cljs.core.js__GT_clj.call(null,json__3955,"﷐'keywordize-keys",true);
var elem__3957 = goog.dom.getElement.call(null,elem_id);
var d__3958 = goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<span>","﷐'varenr".call(null,data__3956),"</span>&nbsp;<span>","﷐'navn".call(null,data__3956),"</span>"));

goog.dom.removeChildren.call(null,elem__3957);
return goog.dom.insertChildAt.call(null,elem__3957,d__3958,0);
});
client.get_data = (function get_data(elem_id,e){
var json__3960 = e.target.getResponseJson();
var data__3961 = cljs.core.js__GT_clj.call(null,json__3960,"﷐'keywordize-keys",true);

return goog.dom.getElement.call(null,cljs.core.str.call(null,"navn",elem_id)).innerHTML = "﷐'navn".call(null,data__3961);
});
client.get_products2 = (function get_products2(){
var s__3963 = (cljs.core.rand_int.call(null,5) * 50);
var r__3964 = cljs.core.range.call(null,s__3963,(s__3963 + 50));

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3959_SHARP_){
return client.get_uri.call(null,cljs.core.str.call(null,client.base_url,"produkt/120100",p1__3959_SHARP_),cljs.core.partial.call(null,client.get_data,(p1__3959_SHARP_ - s__3963)));
}),r__3964));
});
goog.exportSymbol('client.get_products2', client.get_products2);
client.get_products = (function get_products(){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3962_SHARP_){
return client.get_uri.call(null,cljs.core.str.call(null,client.base_url,"produkt/120100",p1__3962_SHARP_),cljs.core.partial.call(null,client.insert_data,cljs.core.str.call(null,"navn",p1__3962_SHARP_)));
}),cljs.core.range.call(null,50)));
});
goog.exportSymbol('client.get_products', client.get_products);
client.handle_file = (function handle_file(elem_id,e){
var t__3965 = e.target.getResponseText();
var elem__3966 = goog.dom.getElement.call(null,elem_id);

return elem__3966.innerHTML = t__3965;
});
client.get_htmlfile_as_string = (function get_htmlfile_as_string(elem_id,file){
return client.get_uri.call(null,cljs.core.str.call(null,client.base_url,file),cljs.core.partial.call(null,client.handle_file,elem_id));
});
goog.exportSymbol('client.get_htmlfile_as_string', client.get_htmlfile_as_string);
