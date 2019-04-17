## php 
- 윈도우 설치 가정
- c:\php 이하가 default 경로임. 변경시 설저 변경 필요함
- php download 5.6.6 thread safe 윈도우용 다운로드/설치
- ext 이하 일부 파일 경로 이동  ex) php_mysqli.dll 등
- php -v
- php -r "print 'hello php~';" ## hello 를 찍어 보자

## 설치기
apache & php

sudo yum install php-mysql php php-xml php-mcrypt php-mbstring php-cli httpd

/etc/httpd

/etc/httpd/conf/httpd.conf 수정

### 설치기 2
- 2016 윈도우/php7/intellij15
- 내장 php server 포함 /ext 경로 이하 mysql도 포함
- php_production.ini 복사 /window/이하 복사
- 주석해제 mysql 모듈, php.ini 내 ext 경로 설정
- wordpress 로컬 실행으로 테스트

### 설치기 3
- 2016 mac/php56
- brew
```
brew update && brew upgrade
brew tap homebrew/dupes
brew tap homebrew/versions
brew tap homebrew/homebrew-php
brew install php56
brew install php56-xdebug
```
php.ini 추
xdebug.remote_enable=true
xdebug.remote_host=127.0.0.1
xdebug.remote_port=9000
xdebug.remote_handler=dbgp
xdebug.profiler_enable=1
xdebug.profiler_output_dir=/tmp

php bulit-in webserver 실행
php web applicat debug 로 실행