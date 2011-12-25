goog.provide('client');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
client.base_url = "http://localhost:8080/";
client.get_uri = (function get_uri(uri,callback){
return goog.net.XhrIo.send.call(null,uri,callback,"GET");
});
client.insert_data = (function insert_data(elem_id,e){
var json__7347 = (e["target"]).getResponseJson();
var data__7348 = cljs.core.js__GT_clj.call(null,json__7347,"﷐'keywordize-keys",true);
var elem__7349 = goog.dom.getElement.call(null,elem_id);
var d__7350 = goog.dom.htmlToDocumentFragment.call(null,cljs.core.str.call(null,"<span>","﷐'varenr".call(null,data__7348),"</span>&nbsp;<span>","﷐'navn".call(null,data__7348),"</span>"));

goog.dom.removeChildren.call(null,elem__7349);
return goog.dom.insertChildAt.call(null,elem__7349,d__7350,0);
});
client.main = (function main(){
alert.call(null,"MAIN");
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__7346_SHARP_){
return client.get_uri.call(null,cljs.core.str.call(null,client.base_url,"produkt/120100",p1__7346_SHARP_),cljs.core.partial.call(null,client.insert_data,cljs.core.str.call(null,"navn",p1__7346_SHARP_)));
}),cljs.core.range.call(null,50)));
});
goog.exportSymbol('client.main', client.main);
client.handle_file = (function handle_file(elem_id,e){
var t__7351 = e.target.getResponseText();
var elem__7352 = goog.dom.getElement.call(null,elem_id);

return elem__7352.innerHTML = t__7351;
});
client.get_htmlfile_as_string = (function get_htmlfile_as_string(elem_id,file){
alert.call(null,elem_id);
return client.get_uri.call(null,cljs.core.str.call(null,client.base_url,file),cljs.core.partial.call(null,client.handle_file,elem_id));
});
goog.exportSymbol('client.get_htmlfile_as_string', client.get_htmlfile_as_string);
