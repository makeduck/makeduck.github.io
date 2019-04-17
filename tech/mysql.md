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
mysql>create user 'user명'@'%' identified by '패스워드';
mysql>grant all privileges on *.* to 'user명'@'%';
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
- 저장 mysqldump -hhosturl -uscrapy -p scrapy database명 > scrapy_dump.txt
- 복구 mysql -uscrapy -p < dump.sql

# table 정보
show full columns from message;

#한글 설정 일회성
mysql> show variables like 'char%';

mysql>
SET character_set_client = utf8;
SET character_set_results = utf8;
SET character_set_connection = utf8;
SET character_set_database = utf8;
SET character_set_server = utf8;

mysql 안내렸다 올려도 설정 되나 이 이후에 만든 테이블부터 적용됨

mysql> ALTER DATABASE DB명 DEFAULT CHARACTER SET utf8;
commit;

정안되면 한글 설정 테이블 만들때 명시적으로 선언해 준다
CREATE DATABASE mandu  DEFAULT CHARACTER SET utf8  DEFAULT COLLATE utf8_general_ci;