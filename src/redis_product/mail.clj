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

(defn create-var
  ([sym] (intern *ns* sym))
  ([sym val] (intern *ns* sym val)))

(defn merge-and-send [data]
  (let [temp (. config (getTemplate (str (:template data) ".ftl")))       
        wf (slurp (str template-dir "/" (:template data) ".wf"))
        out (StringWriter.)
        _ (. temp (process (stringify-keys (:data data)) out))
        mailbody (str out)]        
    (create-var 'sendmail (fn [] (let [res (send-message #^{:host "smtp.gmail.com"
                                                            :user "steen666"
                                                            :pass "madball#666"
                                                            :ssl :yes!!!11}
                                                         {:from (:from data)
                                                          :to (:to data)
                                                          :subject (:subject data)
                                                          :body [{:type "text/html" :content mailbody}]})]
                                   (if (= 0 (:code res))
                                     :ok
                                     :bounce))))
    (create-var 'sendsms (fn [] (prn "send sms")))
    (create-var 'sendspoc (fn [] (prn "send spoc")))
    (let [res (load-string wf)]
      {:status (if (= :ok res) 204 404)})))

(defn save [data]
  (let [name (:name data)]
    (spit (str "/home/sla/templates/" name ".ftl") (str "[#ftl]\n" (:msg data)))
    (spit (str "/home/sla/templates/" name ".wf") (:workflow data))))

(comment "{\"template\" : \"test.flt\",
  \"from\" : \"stel@yousee.dk\",
  \"to\" \"steen666@gmail.com\", 
  \"subject\" : \"Yousee kvittering\", 
  \"data\" : {\"user\" : \"Steen Larsen\",
            \"animals\" : [{\"name\" : \"abe\", \"price\" : \"100\"}, {\"name\" : \"hund\", \"price\" : \"200\"}]}}")