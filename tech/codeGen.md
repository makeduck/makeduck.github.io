## codeGen
- framework 생성기
- velocity templet, 각종 설정으로 찍어내다. ,
- mybatis codeGen 추가

https://github.com/mybatis/generator
http://mybatis.github.io/generator/quickstart.html
```
java -jar mybatis-generator-core-x.x.x.jar -configfile \temp\generatorConfig.xml -overwrite
```

maven plugin 또는 jar 사용 가능
core/mybatis-generator-core 단독 프로젝트 실행

mvn clean install -Denforcer.skip=true  // enforce 버젼 체크 부분에서 에러나서 install 안됨. 넘어가도록 옵션을 추가해 준다.

최상위 pom.xml 적절히 수정한다.