Generator
============================

개요
-----------------
코드는 만드는 코드를 만들어서 개발을 안해보자.

mybatis generator
-------------------
- db schema 통해서 model 생성
- crud mapper 생성
- Criteria model 생성

방법
-----------------
mybatis generator project 를 수정한다.
service, conroller 영역까지 code generate 한다.
서버스를 통째로 찍어서 개발할 수 있게 한다.
code generator
형식
jpa 랑 비슷해져 가는데.
템블릿 프로젝트 base 는 존재해야 한다.
database schema table 통하여, 컬럼의 type 등 meta 정보를 조회한다.
meta 정보를 보태로 model 를 생성한다.
db 종류에 맞게 crud sql 구문을 생성, dao 를 생성한다.
미리 정해둔 web service 아키텍쳐에 맞게 temlplet를 구성한다.
base 구조에 맞게 contoller, service 등 코드를 생성한다.


참조
----------------
[mybatis generator](http://mybatis.github.io/generator/)

