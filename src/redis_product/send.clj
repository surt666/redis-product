(ns redis-product.send
  (:use postal.core))



(defn sendmail []
  (let [res (send-message #^{:host "smtp.gmail.com"
                             :user "steen666"
                             :pass "madball#666"
                             :ssl :yes!!!11}
                          {:from (:from *data*)
                           :to (:to *data*)
                           :subject (:subject *data*)
                           :body [{:type "text/html" :content *message*}]})]
    (if (= 0 (:code res))
      :ok
      :bounce)))