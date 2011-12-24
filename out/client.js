goog.provide('client');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
client.base_url = "http://localhost:8080/produkt/";
client.get_uri = (function get_uri(uri,callback){
return goog.net.XhrIo.send.call(null,uri,callback,"GET");
});
client.insert_data = (function insert_data(elem_id,e){
var json__7098 = (e["target"]).getResponseJson();
var data__7099 = cljs.core.js__GT_clj.call(null,json__7098,"﷐'keywordize-keys",true);
var elem__7100 = goog.dom.getElement.call(null,elem_id);
var d__7101 = goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<span>","﷐'varenr".call(null,data__7099)," ","﷐'navn".call(null,data__7099),"</span>"));

goog.dom.removeChildren.call(null,elem__7100);
return goog.dom.insertChildAt.call(null,elem__7100,d__7101,0);
});
client.main = (function main(){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__7097_SHARP_){
return client.get_uri.call(null,cljs.core.str.call(null,client.base_url,"120100",p1__7097_SHARP_),cljs.core.partial.call(null,client.insert_data,cljs.core.str.call(null,"navn",p1__7097_SHARP_)));
}),cljs.core.range.call(null,50)));
});
goog.exportSymbol('client.main', client.main);
