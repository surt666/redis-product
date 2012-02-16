(ns redis-product.routes
  (:use compojure.core
        ring.util.response
        ring.middleware.resource
        ring.middleware.file-info
        redis-product.core
        yousee-common.wrappers
        ring.commonrest
        yousee-common.web)
  (:require [compojure.route :as route]
            [compojure.handler :as handler]            
            [clojure.data.json :as json]))

(defroutes handler
  (GET ["/:context/:id" , :context #".[^/]*"] [id]
       (json/json-str (get-product id)))

  (POST ["/:context" , :context #".[^/]*"] req
        (merge-and-send (parse-body (:body req)))))

(def app
  (-> (handler/site handler)
      (wrap-resource "public")
      (wrap-file-info)))