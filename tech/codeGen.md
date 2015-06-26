## codeGen
- framework 생성기
- velocity templet, 각종 설정으로 찍어내다. ,
- mybatis codeGen 추가

https://github.com/mybatis/generator
http://mybatis.github.io/generator/quickstart.html

fork

origin  https://github.com/dubu/generator.git (fetch)
origin  https://github.com/dubu/generator.git (push)
upsteam https://github.com/mybatis/generator (fetch)
upsteam https://github.com/mybatis/generator (push)


```
java -jar mybatis-generator-core-x.x.x.jar -configfile \temp\generatorConfig.xml -overwrite
```

maven plugin 또는 jar 사용 가능
core/mybatis-generator 최상단 프로젝트 서택

mvn clean install -Denforcer.skip=true  // enforce 버젼 체크 부분에서 에러나서 install 안됨. 넘어가도록 옵션을 추가해 준다.

최상위 pom.xml 적절히 수정한다.

maven plugin jar-jar 수행 .jar 빌드함

test src 내
MyBatisGeneratorTest 수행.


generatorConfigMyBatis.xml  // sample

```
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE generatorConfiguration PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN" "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd" >
<generatorConfiguration>
  <classPathEntry location="/Users/rigel/workspace/prmc/codUtilMenu/lib/mysql-connector-java-5.1.21.jar" />

  <context id="context1">
    <jdbcConnection driverClass="com.mysql.jdbc.Driver"
                    connectionURL="jdbc:mysql://xxx.xxx.xxx/xxx/xx?xxx" userId="xxx"
                    password="passwd" />

    <javaModelGenerator targetPackage="com.dubu.domain"
                        targetProject="/Users/forlder" />

    <sqlMapGenerator targetPackage="com.dubu.dao.impl"
                     targetProject="/Users/forlder" />

    <javaClientGenerator targetPackage="com.dubu..dao"
                         targetProject="/Users/folder" type="XMLMAPPER" />

    <table schema="dubu" tableName="admin" />
    <!--<table schema="dubu" tableName="admin_log" />-->
    <!--<table schema="dubu" tableName="user" />-->
  </context>
</generatorConfiguration>

```

todo
config 파일 옵션
maven plugin 으로 사용하기
generator code 따라가 보기
