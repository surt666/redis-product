(ns client
  (:require [goog.net.XhrIo :as xhrio]
            [goog.dom :as dom]))

(def base-url "http://localhost:8080/produkt/")

(defn get-uri [uri callback]
  (goog.net.XhrIo/send uri callback "GET"))

(defn insert-data [elem-id e]
  (let [json (. (aget e "target") (getResponseJson))
        data (js->clj json :keywordize-keys true) 
        elem (dom/getElement elem-id)
        d (dom/htmlToDocumentFragment (:navn data))]
                                        ;((js* "alert") elem)
    (dom/removeChildren elem)
    (dom/insertChildAt elem d 0)))

(defn ^:export main []
  (get-uri (str base-url "1201001") (partial insert-data "navn1")))