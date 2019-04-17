## 개요
http://kong-dubu.cloudsc.kr/
java7 + mysql 구성
openpaas 이용:  https://openpaas.cloudsc.kr/
이메일/ 4~00

접근 openkey 접근
ssh://564b2a524423f8efb8000029@kong-dubu.cloudsc.kr/~/git/kong.git/
ssh 564b2a524423f8efb8000029@kong-dubu.cloudsc.kr
mysql 설정
env | grep MYSQL
webhome
app-root/runtime/dependencies/egovframework/

/var/lib/openshift/564b2a524423f8efb8000029/egovframework/ 이하 다 있음

/var/lib/openshift/564b2a524423f8efb8000029/app-root/runtime/dependencies/egovframework

배포

```
scp -i ~/.ssh/id_open spring-boot-sample-web-ui-1.2.7.RELEASE.war 564b2a524423f8efb8000029@kong-dubu.cloudsc.kr:/var/lib/openshift/564b2a524423f8efb8000029/egovframework/webapps

```

make war deploy file
https://docs.spring.io/spring-boot/docs/current/reference/html/howto-traditional-deployment.html

tomcat 시작?
gear start tomcat
gear start mysql-5.1

mysql 55
mysql 카트리지 설치
내부에서만 접근 가능. 원거리
/var/lib/openshift/564b2a524423f8efb8000029/mysql/
