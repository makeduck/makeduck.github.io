### mysql
- mysqlworkbench, toad for mysql
-


## 명령어 
- shell 에서 직접 쓸만한 명령어
```
$mysqladmin -u root -p password new-password
또는
$mysql -u root mysql
mysql>update user set password=password(‘new-password’) where user=’root';

#DB 생성
mysql >CREATE SCHEMA `new_schema` DEFAULT CHARACTER SET utf8 ;

#계정생성
mysql에 root로 접속하신 후 다음 명령을 실행
mysql>create user ‘user명’@’%’ identified by ‘패스워드';
mysql>grant all privileges on *.* to ‘user명’@’%';
mysql>flush privileges;

```

## 이외에 관리는 툴을 쓰는게 낫다
