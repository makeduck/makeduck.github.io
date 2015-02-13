
## 서버 셋팅 server setting  
- 쓸만한 서버 구성을 위한
- apache ,tomcat ,enginex ,python ,anaconda ,postgre
- 설치된거 쓰면 편한디..
- 앤간하면 설치되어 있는거 python, java
- 필수 java 버젼별 ,tomcat ,mysql ,git
- php ,apache | Nginx

## 가정
- aws EC2 redhat 7 기준으로 작성
- 개발서버로
- 스펙이 저렴 메모리 1G, storage 500MG , 1 cpu
- 웹서버&mysql
- redhat 계열, redhat 또는 cenos 
- 빌드 파일을 직접 받자
- 서비스 데몬도 추가 하자 

## 참고 기본설치
[Nginx + Tomcat + MySQL](http://jongkwang.com/?p=941) bb
[aws apm 설치](http://analog-green.tistory.com/414)
[ami apm 설치](http://blog.naver.com/PostView.nhn?blogId=1024psc&logNo=220197954089) 이것도 해볼 필요가 있다

## 리눅스 확인 
- 버젼 확인 cat /etc/*release*
- bit 확인 getconf LONG_BIT

## rpm repository 등록
```
cd /tmp
wget https://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-5.noarch.rpm
ls *.rpm
To install epel-release-7-5.noarch.rpm, type:
sudo yum install epel-release-7-5.noarch.rpm
```

## 기본 설치
```
[root] # yum -y update
[root] # yum -y install wget
[root] # yum -y install gcc.x86_64 gcc-c++.x86_64 wget.x86_64 bzip2-devel.x86_64 pkgconfig.x86_64 openssl-devel.x86_64 make.x86_64 man.x86_64 nasm.x86_64 gmp.x86_64 gdbm-devel.x86_64 readline-devel.x86_64 compat-readline43.x86_64 ncurses-devel.x86_64 db4-devel.x86_64 automake* autoconf* distcache-devel.x86_64 pcre-devel.x86_64 libxslt-devel.x86_64 GeoIP-devel.x86_64 gd-devel.x86_64 libmcrypt libmcrypt-devel
[root] # yum -y install libtermcap-devel ncurses-devel
[root] # yum -y install libxml* curl-devel libjpeg* libpng* freetype-devel
[root] # yum -y install glib2-devel openssl-devel pcre-devel bzip2-devel gzip-devel gcc make
[root] # yum -y install perl-ExtUtils-Embed
[root] # yum -y install make cmake
[root] # yum -y install bison
[root] # yum -y install wget unzip
[root] # yum -y install bzip2
```

## setup 설치 
yum install setuptool system-config-securitylevel-tui authconfig system-config-network-tui ntsysv

## mysql 설치 
```
wget http://dev.mysql.com/get/mysql-community-release-el6-5.noarch.rpm
yum localinstall http://dev.mysql.com/get/mysql-community-release-el6-5.noarch.rpm
yum update
yum install mysql-community-server

service mysqld start
MySQL 자동 실행 등록
setup <– 서비스에서 mysqld 체크

MySQL root 계정 비밀번호 셋팅
mysqladmin -u root password XXXX

mysql -u root -p XXXX
show variables like 'c%';

    +--------------------------+----------------------------+
    | Variable_name            | Value                      |
    +--------------------------+----------------------------+
    | character_set_client     | utf8                       |
    | character_set_connection | utf8                       |
    | character_set_database   | latin1                     |
    | character_set_filesystem | binary                     |
    | character_set_results    | utf8                       |
    | character_set_server     | latin1                     |
    | character_set_system     | utf8                       |
    | character_sets_dir       | /usr/share/mysql/charsets/ |
    | collation_connection     | utf8_general_ci            |
    | collation_database       | latin1_swedish_ci          |
    | collation_server         | latin1_swedish_ci          |
    | completion_type          | NO_CHAIN                   |
    | concurrent_insert        | AUTO                       |
    | connect_timeout          | 10                         |
    | core_file                | OFF                        |
    +--------------------------+----------------------------+
utf8 도 있지만, latin1 도 보이고 한다.
이것들을 바꿔 보자

vi /etc/my.cnf

[mysqld]
character_set_server=utf8
collation_server=utf8_general_ci
init_connect=set collation_connection=utf8_general_ci
init_connect=set names utf8
character-set-server=utf8
character-set-client-handshake = TRUE
다시 설정을 살펴보면

service mysqld restart

mysql -u root -p XXXX
show variables like 'c%';

    +--------------------------+----------------------------+
    | Variable_name            | Value                      |
    +--------------------------+----------------------------+
    | character_set_client     | utf8                       |
    | character_set_connection | utf8                       |
    | character_set_database   | utf8                       |
    | character_set_filesystem | binary                     |
    | character_set_results    | utf8                       |
    | character_set_server     | utf8                       |
    | character_set_system     | utf8                       |
    | character_sets_dir       | /usr/share/mysql/charsets/ |
    | collation_connection     | utf8_general_ci            |
    | collation_database       | utf8_general_ci            |
    | collation_server         | utf8_general_ci            |
    | completion_type          | NO_CHAIN                   |
    | concurrent_insert        | AUTO                       |
    | connect_timeout          | 10                         |
    | core_file                | OFF                        |
    +--------------------------+----------------------------+
잘 바뀌어 있다.

MySQL 실행 안될 때
로그 보는 법 : vi /var/log/mysqld.log
MySQL 전체 Backup & Restore
Backup : mysqldump –opt –host=localhost –user=root –password=XXXX –all-databases > /tmp/backup/MySql_DailyBackup.sql
Restore : mysql -uroot -pXXXX < MySql_DailyBackup.sql
MySQL 부분 Backup & Restore
DB백업
mysqldump -u아이디 -p DB명 > 저장할파일명.sql
 
테이블 백업
mysqldump -u아이디 -p DB명 테이블명 > 저장할파일명.sql
 
테이블복사
create table 새로운테이블명 as select * from 복사할테이블명  
 
DB복원
mysql -u아이디 -p암호 --default-character-set=utf8 디비명 < 복원할파일명.sql
```

## java 설치
```
yum list java*jdk-devel
yum install java-1.7.0-openjdk-devel
// yum install java-1.7.0-openjdk java-1.7.0-openjdk-devel
java -version
```

## tomcat



## python
```
yum -y install python-pip
sudo yum install python-devel mysql-devel
 pip install mysql-python
```