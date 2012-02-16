(defproject redis-product "1.0.0"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [accession "0.1.1" :exclusions [org.clojure/clojure]]
                 [org.clojure/data.json "0.1.1"]   
                 [compojure "1.0.0-RC1" :exclusions [org.clojure/clojure]]
                 [ring/ring-core "1.0.0" :exclusions [javax.servlet/servlet-api]]
                 [ring/ring-servlet "1.0.0" :exclusions [javax.servlet/servlet-api]]                
                 [org.slf4j/slf4j-simple "1.6.1"]
                 [org.freemarker/freemarker "2.3.18"]
                 [com.draines/postal "1.7-SNAPSHOT"]
                 [yousee-common "1.0.27"]
                 [ring-common "1.1.1"]
                 [log4j "1.2.16" :exclusions [javax.mail/mail
                                              javax.jms/jms
                                              com.sun.jdmk/jmxtools
                                              com.sun.jmx/jmxri]]]
  :dev-dependencies [[ring/ring-jetty-adapter "1.0.0" :exclusions [org.mortbay.jetty/servlet-api]]
                     [ring/ring-devel "1.0.0"]
                     [org.mortbay.jetty/jetty-plus "6.1.25"]
                     [org.mortbay.jetty/jetty-naming "6.1.25"]
                     [swank-clojure "1.3.3"]]
  :war {:web-content "war-root"})
