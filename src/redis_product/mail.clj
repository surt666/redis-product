(ns redis-product.mail
  (:use postal.core
        [clojure.data.json :only (read-json json-str)]
        [clojure.walk :only (stringify-keys keywordize-keys)])
  (:import [freemarker.template Configuration DefaultObjectWrapper]
           [java.io StringWriter File BufferedWriter FileWriter]))

(defn configuration []
  (doto (Configuration.)
    (.setDirectoryForTemplateLoading (File. "/home/sla/templates"))
    (.setObjectWrapper (DefaultObjectWrapper.))))

(def config (configuration))

(defn merge-and-send [data]
  (prn data)
  (let [temp (. config (getTemplate (:template data)))
        out (StringWriter.)
        _ (. temp (process (stringify-keys (:data data)) out))
        mergedtemp (str out)]
    (send-message #^{:host "smtp.gmail.com"
                     :user "steen666"
                     :pass ""
                     :ssl :yes!!!11}
                  {:from (:from data)
                   :to (:to data)
                   :subject (:subject data)
                   :body [{:type "text/html" :content mergedtemp}]})))

(defn save [data]
  (let [html (BufferedWriter. (FileWriter. "/home/sla/templates/test2.ftl"))
        wf (BufferedWriter. (FileWriter. "/home/sla/templates/test2.wf"))]
    (. html (write (:msg data)))
    (.close html)
    (. wf (write (:workflow data)))
    (.close wf)))

(comment "{\"template\" : \"test.flt\",
  \"from\" : \"stel@yousee.dk\",
  \"to\" \"steen666@gmail.com\", 
  \"subject\" : \"Yousee kvittering\", 
  \"data\" : {\"user\" : \"Steen Larsen\",
            \"animals\" : [{\"name\" : \"abe\", \"price\" : \"100\"}, {\"name\" : \"hund\", \"price\" : \"200\"}]}}")