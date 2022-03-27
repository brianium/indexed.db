(ns build
  (:require [clojure.tools.build.api :as b]))

(def lib 'com.github.brianium/indexed.db)

(def class-dir "target/classes")

(def basis (b/create-basis {:project "deps.edn"}))

(def version (:version basis))

(def jar-file (format "target/%s.jar" (name lib)))

(defn clean [_]
  (doseq [path ["target" "public" "out"]]
    (b/delete {:path path})))

(defn jar [_]
  (b/write-pom {:class-dir class-dir
                :lib lib
                :version version
                :basis basis
                :src-dirs ["src"]
                :scm {:url                 "https://github.com/brianium/indexed.db"
                      :connection          "scm:git:git://github.com/brianium/indexed.db.git"
                      :developerConnection "scm:git:git://github.com/brianium/indexed.db.git"
                      :tag                 "HEAD"}})
  (b/copy-dir {:src-dirs ["src"]
               :target-dir class-dir})
  (b/jar {:class-dir class-dir
          :jar-file jar-file}))

(defn out [_]
  (let [cmds (b/java-command
              {:basis (b/create-basis {:aliases [:dev] :project "deps.edn"})
               :main 'clojure.main
               :main-args ["-m" "cljs.main" "--optimizations" "advanced" "-c" "cljs.user"]})]
    (b/process cmds)))

(defn demo [_]
  (out _)
  (b/copy-dir {:src-dirs ["out"]
               :target-dir "public/out"})
  (b/copy-file {:src    "index.html"
                :target "public/index.html"}))
