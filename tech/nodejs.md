

### 노드02 node.js 2014-06-18
노트 2일차


기계컴파일 jit 컴파일.??
v8 메모리릭 있긴 있다고 함..

IoE 에도 쓰나?

node.js
생산성?  좋다
항상 빠르진 않다.
싱글 쓰레드로 돈다.
자주 죽는다고 함... ? 에러처리 안하면 진짜 노드가 죽음.
리소스도 많이 슨다. 코어 4개면 2개. 코어당 1개는 노드 하나는 무리인듯.

노드 죽으면 다시 띄우는 모듈도 있네..

사용하는곳.
linkedin
paypal

 node runner  무중단 배포, 모니터링
 호스팅. haroku?

로그 winston??

디버깅  intellj 디버그 쓰시요.

테스트
validation jsLint ? jsHint

unit test  mocha 라고 있었음

테스트 자동화  Driver, Headless

부하테스트 Noadload

배포 9rum

Grunt ?

노드 모니터링.

모듈 밑에서 설치할것..
npm install -save winston

### 노드01 node.js

구글 v8 ??  코드컴파일로 한다.  스크립트를 빠르게.. script로도 쓸만하다.
common.js  ? 크롬 스크립트 에서쓰던거??
sever.js -> common.js
event 기반.
2010 인기? joyent  회사지원??
npm 모듈??

#### 어디서쓰나.
ebay - ql.io
yahoo  -mobile applicaion  플래폼
linked in 회사에서 페북같이.
루비에서 script로 바꿔 node.
trello node
azure  웨져? node 들어가 있다고 함. window

java8 nashorn node.jar
naver ? 로그 분선 시스템.  ? 확장이 좋은가??
daum 애조로 안건님. node.js
mobile hub?? /

### node 특징
비동기. 싱글 쓰레드.
nio
싱글 쓰레드 , 비동기 20분.
nio 이벤트 looping

### 실습
node 설치, intellij node 플러그인 추가
npm  node package... yum 같은거..
모듈 올릴수도 있다. 모듈명 선점 하기도..
underscore??
노드에서 쓰는 scrpit 에서 쓸 수 있나??

node 프로젝트 생성
버젼은 3.6.0
ejb

npm -h
npl ls
node app.js
localhost:3000
npm install pg
npm uninstall pg --save
package.json //패키지 관리하는 놈.

npm install pg --save
npm install pg --save -g // 글로벌 다른데로  다 설치된다고 함.

pg postgre sql 지원 모듈

ejb / vm 같은거 .

https://github.com/brianc/node-postgres
소개에서 sample 복사 실행