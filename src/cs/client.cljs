(ns client
  (:require [goog.net.XhrIo :as xhrio]
            [goog.dom :as dom]))

(def base-url "http://localhost:8080/")

(defn get-uri [uri callback]
  (goog.net.XhrIo/send uri callback "GET"))

(defn insert-data [elem-id e]
  (let [json (. (aget e "target") (getResponseJson))
        data (js->clj json :keywordize-keys true) 
        elem (dom/getElement elem-id)
        d (dom/htmlToDocumentFragment (str "<span>" (:varenr data) "</span>&nbsp;<span>" (:navn data) "</span>"))]
    ;;((js* "alert") elem-id)
    (dom/removeChildren elem)
    (dom/insertChildAt elem d 0)))

(defn ^:export main []
  ((js* "alert") "MAIN")
  (doall (map #(get-uri (str base-url "produkt/120100" %) (partial insert-data (str "navn" %))) (range 50))))

(defn handle-file [elem-id e]
  (let [t (. e/target (getResponseText))
        elem (dom/getElement elem-id)]
    ;;((js* "alert") t)
    ;; (dom/insertChildAt elem t 0)
    (set! (. elem innerHTML) t)
    ))

(defn ^:export get-htmlfile-as-string [elem-id file]
  ((js* "alert") elem-id)
  (get-uri (str base-url file) (partial handle-file elem-id)))