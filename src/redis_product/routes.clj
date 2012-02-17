(ns redis-product.routes
  (:use compojure.core
        ring.middleware.resource
        ring.middleware.file-info
        redis-product.core
        redis-product.mail
        yousee-common.web)
  (:require [compojure.route :as route]
            [compojure.handler :as handler]            
            [clojure.data.json :as json]))

(defroutes handler
  (GET ["/:context/:id" , :context #".[^/]*"] [id]
       (json/json-str (get-product id)))

  (POST ["/:context/template" , :context #".[^/]*"] req        
        (let [res (save (parse-body (:body req)))]
          {:status 201 :body res}))
  
  (POST ["/:context/send" , :context #".[^/]*"] req
        (merge-and-send (parse-body (:body req)))))

(def app
  (-> (handler/site handler)
      (wrap-resource "public")
      (wrap-file-info)))