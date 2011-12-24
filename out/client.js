goog.provide('client');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
client.base_url = "http://localhost:8080/produkt/";
client.get_uri = (function get_uri(uri,callback){
return goog.net.XhrIo.send.call(null,uri,callback,"GET");
});
client.insert_data = (function insert_data(elem_id,e){
var json__7049 = (e["target"]).getResponseJson();
var data__7050 = cljs.core.js__GT_clj.call(null,json__7049,"﷐'keywordize-keys",true);
var elem__7051 = goog.dom.getElement.call(null,elem_id);
var d__7052 = goog.dom.htmlToDocumentFragment.call(null,"﷐'navn".call(null,data__7050));

goog.dom.removeChildren.call(null,elem__7051);
return goog.dom.insertChildAt.call(null,elem__7051,d__7052,0);
});
client.main = (function main(){
return client.get_uri.call(null,cljs.core.str.call(null,client.base_url,"1201001"),cljs.core.partial.call(null,client.insert_data,"navn1"));
});
goog.exportSymbol('client.main', client.main);
