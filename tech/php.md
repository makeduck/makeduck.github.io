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