(ns redis-product.mail
  (:use postal.core
        [clojure.data.json :only (read-json json-str)]
        [clojure.walk :only (stringify-keys keywordize-keys)])
  (:import [freemarker.template Configuration DefaultObjectWrapper]
           [java.io StringWriter File BufferedWriter FileWriter]))

(def template-dir "/home/sla/templates")

(defn configuration []
  (doto (Configuration.)
    (.setDirectoryForTemplateLoading (File. template-dir))
    (.setObjectWrapper (DefaultObjectWrapper.))))

(def config (configuration))

(declare ^:dynamic *message*)

(declare ^:dynamic *data*)

(declare ^:dynamic sendmail)

(defn sendmail []
  (let [res (send-message #^{:host "smtp.gmail.com"
                             :user "steen666"
                             :pass ""
                             :ssl :yes!!!11}
                          {:from (:from *data*)
                           :to (:to *data*)
                           :subject (:subject *data*)
                           :body [{:type "text/html" :content *message*}]})]
    (if (= 0 (:code res))
      :ok
      :bounce)))

(defn sendsms []
  (prn "send sms"))

(defn sendspoc []
  (prn "send to spoc"))

(defmacro my-eval [s] `~(read-string s))

(defn wf1 [] (condp = (sendmail)
               :bounce (condp = (sendsms)
                         :bounce (sendspoc))
               :ok :ok))

(defn merge-and-send [data]
  (let [temp (. config (getTemplate (str (:template data) ".ftl")))       
        wf (slurp (str template-dir "/" (:template data) ".wf"))
        out (StringWriter.)
        _ (. temp (process (stringify-keys (:data data)) out))
        mailbody (str out)]    
    (binding [*message* mailbody
              *data* data]      
      (let [res (wf1)]
        {:status (if (= :ok res) 204 404)}))))

(defn save [data]
  (spit "/home/sla/templates/test2.ftl" (str "[#ftl]\n" (:msg data)))
  (spit "/home/sla/templates/test2.wf" (:workflow data)))

(comment "{\"template\" : \"test.flt\",
  \"from\" : \"stel@yousee.dk\",
  \"to\" \"steen666@gmail.com\", 
  \"subject\" : \"Yousee kvittering\", 
  \"data\" : {\"user\" : \"Steen Larsen\",
            \"animals\" : [{\"name\" : \"abe\", \"price\" : \"100\"}, {\"name\" : \"hund\", \"price\" : \"200\"}]}}")