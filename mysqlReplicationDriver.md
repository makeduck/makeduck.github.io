mysqlReplicationDriver
===============================

개요
------------
mysql ReplicationDriver 사용. master/slave 사용의 경우 master 장애시 connection 문제가 발생한다는데 실험을 통하여 알아본다.

방법
------------------

- mysql master/slave 구성
- 웹서비스를 구현하여 부하 발생
- master 장애발생을 가정하여 master 서버를 down 시킴.
- master db 복구
- 복구후에도 서비스 connection 에 문제 발생 여부 확인

참고
------
- [취약점리포트](http://gywn.net/2012/07/mysql-replication-driver-error-report/)