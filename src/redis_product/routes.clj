(ns redis-product.routes
  (:use compojure.core
        ring.middleware.resource
        ring.middleware.file-info
        redis-product.core
        redis-product.mail
        ring.commonrest
        yousee-common.web)
  (:require [compojure.route :as route]
            [compojure.handler :as handler]            
            [clojure.data.json :as json]))

(defroutes handler
  (GET ["/:context/loadtemplates" , :context #".[^/]*"] req
       (let [res (load-templates)]
         (json-response res "application/json")))
  
  (GET ["/:context/:id" , :context #".[^/]*"] [id]
       (json/json-str (get-product id)))

  (POST ["/:context/template" , :context #".[^/]*"] req        
        (let [res (save (parse-body (:body req)))]
          {:status 201 :body res}))

  (POST ["/:context/merge" , :context #".[^/]*"] req        
        (let [res (mergemail (parse-body (:body req)))]
          {:status 200 :body res :headers {"Content-Type" "text/html"}}))
  
  (POST ["/:context/send" , :context #".[^/]*"] req
        (merge-and-send (parse-body (:body req)))))

(def app
  (-> (handler/site handler)
      (wrap-resource "public")
      (wrap-file-info)))