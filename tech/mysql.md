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
mysql> CREATE DATABASE dbname;
mysql> SHOW DATABASES;
mysql> USE dbname;
mysql> DROP DATABASE [IF EXISTS] dbname;

#계정생성
mysql에 root로 접속하신 후 다음 명령을 실행
mysql>create user ‘user명’@’%’ identified by ‘패스워드';
mysql>grant all privileges on *.* to ‘user명’@’%';
mysql>flush privileges;

또는 
mysql> GRANT ALL PRIVILEGES ON dbname.* TO username@localhost IDENTIFIED BY 'password';

#외부 접근 추가
GRANT ALL PRIVILEGES ON dbname.* TO username@'%' IDENTIFIED BY 'password';

#불필요한 사용자 삭제는
mysql> DLETE FROM user WHERE user='username';
mysql> FLUSH PRIVILEGES;

## 각종설정
mysql> show global variables ;

```

## select format
- select * from table \G;


## 이외에 관리는 툴을 쓰는게 낫다

## 매번 서버 시작시 등록
데몬관리 gui 툴 sudo ntsysv

## 데몬 실행
service mysqld stop      <- 정지
service mysqld start      <- 시작
service mysqld restart      <- 재시작

# mysql dump
- 저장 mysqldump -uscrapy -p scrapy > scrapy_dump.txt
- 복구 mysql -uscrapy -p < dump.sql
