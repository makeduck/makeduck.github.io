connectionTimeOut
=======================


개요
---------
적절한 conneciton pool timeout 시간은? 1초 2초? 짧을 수록 좋다?
짧은 수록 좋은가? 부하테스틑 통하여 적절한 timeout 시간을 테스트해본다.


방법
-------------
- simple 한 웹서비스를 구현
- glinder 를 통한 부하 발생
- time out 시간 변경을 통한 성능 테스트
