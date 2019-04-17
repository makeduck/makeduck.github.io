

jdbc:hsqldb:file:/Users/rigel/workspace/spring
hsqldb 는 하나만 접근 가능하다ㅏ. 여러개 할려면 서버 띄워야 함. 그냥 메모리 쓰자

test쪽 자동 롤백 되는듯. 중간에 끝으면 들어가나?

hsqldb, mysql , jps


```
# Allow Thymeleaf templates to be reloaded at dev time
spring.thymeleaf.cache: false
server.tomcat.access_log_enabled: true
server.tomcat.basedir: target/tomcat

spring.jpa.hibernate.ddl-auto=create
spring.datasource.url=jdbc:mysql://aaa.bbb.com/spring
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
```

jpa 참고

spring project : spring-data-jpa-examples
jpa 프러그래밍책 : jpabook https://github.com/holyeye/jpabook
hibernate demo : hibernate-demos > hibernate-orm > core

순서 hibernate -  jpa book - spring data jpa - spring boot jpa 비교 필요
샘플 예제 생성

목차
hsql db는 mysql로 바꿔 봅시다.  file/memory 는 connection 하나밖에 못씁니다.
멀티 db source
jpa 간 비교 사용.
상세 설정은?
