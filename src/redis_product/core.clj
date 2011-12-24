(ns redis-product.core
  (:require [accession.core :as redis]
            [clojure.walk :as walk]))

;; Create a connection map
(def c (redis/connection-map {}))

(defn create-product [navn varenr pg]
  (redis/with-connection c
    (redis/multi)
    (redis/hmset (str "vare:" varenr) "varenr" varenr "navn" navn "pg" pg)
    (redis/sadd (str "pg:" pg) (str "vare:" varenr))
    (redis/exec)))

(defn create-data []
  (map #(create-product (str "produkt" %) (str "120100" %) "2D") (range 500)))

(defn list2map [ll]
  (loop [l ll r {}]
    (if (empty? l)
      r
      (recur (rest (rest l)) (assoc r (keyword (first l)) (second l))))))

(defn get-product [varenr]
  (list2map
   (redis/with-connection c
     (redis/hgetall (str "vare:" varenr)))))
