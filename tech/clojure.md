

## 서명
- () 괄호 문법
- jvm , 응용하는데 좋아 보임
- lisp ,Structure and Interpretation of Computer Programs
- script 도 있다
- tools emacs , intellij - cursive plugin
- 책 living clojure 클로저 시작하기

## 실행
- mac 기준
- java -cp clojure-1.8.0.jar clojure.main
- java -cp /Users/rigel/Downloads/clojure-1.8.0/clojure-1.8.0.jar  -Dclojure.server.repl="{:port 5555 :accept clojure.core.server/repl}" clojure.main 
- web service 실행

```
brew install leiningen
lein new compojure webapp
cd webapp
lein ring server
```

## code plue
https://github.com/astangl/sicp-exercises-clojure/blob/f447ec666ebf332c960e1a512be03b5791f8b781/Ex2_6.clj


lein
luminus
