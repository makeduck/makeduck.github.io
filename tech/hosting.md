Hosting
============

개요
-------
웹서비스 호스팅 어디까지 알아봤니. 서비스 하나 올려 볼려믄 hosting 서비스를 받아아 한다. 쓸만한 서비스를 비교하여 본다.

uclode biz
-----------
- [ucloud biz](https://ucloudbiz.olleh.com)
- 좀 쓸만한 2G 한달에 4만원 정도 썼었음.
- 1년 체험판으로 512M, db도 지원하는 프로모션 패키지 있었으니 현재 사라짐


disital ocense
---------------
- [digitalocean](https://cloud.digitalocean.com)
- 512M 월 5000원 정도.
- 이미지샷을 뜨고 삭제하면 비용 안나감.
- 다시 사용하고 싶은데 이미지샷으로 서버 생성 후 사용하면 좋다.


parse.com
-----------------
- [www.parse.com](http://parse.com)
- 모바일앱과 연결해서 쓰믄 좋다.



google webengine
------------------
왜 구급 앱엔진을 선택했는가
http://curioe.com/7

어찌 사용하나
http://damool8.tistory.com/1506

http://blog.saltfactory.net/63



appinventor tiny webdb
---------------------------
0  [webdb소개](http://beta.appinventor.mit.edu/learn/reference/other/tinywebdb.html)  앱이름.appspot.com
1 앱생성 https://console.developers.google.com/
2 압축 받아서풀어.customtinywebdb
3 app.yaml 수정 후 deploy. deploy 권한 필요. 설정내 로그인을 통한 배포 부분 설정
```
application: bold-vortex-833
version: 1
runtime: python
api_version: 1

handlers:
- url: /images
  static_dir: images

- url: .*
  script: main.py

axiomatic-path-865 -- 피드백용
automatic-ace-867 -- 스탬프 랭킹용

```


