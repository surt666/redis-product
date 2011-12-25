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

(defn get-data [elem-id e]
  ;;((js* "alert") e)
  (let [json (. e/target (getResponseJson))
        data (js->clj json :keywordize-keys true)]
    ;;((js* "alert") (:navn data))    
    (set! (. (dom/getElement (str "navn" elem-id)) innerHTML) (:navn data))))

(defn ^:export get-products2 []
  ;;((js* "alert") "PROD2")
  (let [s (* (rand-int 5) 50)
        r (range s (+ s 50))
        ;html (reduce #(str %1 "<span>" %2 "</span>") "" res)
        ;d (dom/htmlToDocumentFragment "<h3>bla</h3>")
        ] 
    ;;((js* "alert") (str (count res) res))
    ;(set! (. (dom/getElement "test") innerHTML) html)
    (doall (map #(get-uri (str base-url "produkt/120100" %) (partial get-data (- % s))) r))))

(defn ^:export get-products []
  ;;((js* "alert") "MAIN")
  (doall (map #(get-uri (str base-url "produkt/120100" %) (partial insert-data (str "navn" %))) (range 50))))

(defn handle-file [elem-id e]
  (let [t (. e/target (getResponseText))
        elem (dom/getElement elem-id)]
    ;;((js* "alert") t)   
    (set! (. elem innerHTML) t)))

(defn ^:export get-htmlfile-as-string [elem-id file]
  ;;((js* "alert") elem-id)
  (get-uri (str base-url file) (partial handle-file elem-id)))