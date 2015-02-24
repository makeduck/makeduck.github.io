


## app inventor open source 분석 
- github source https://github.com/mit-cml/appinventor-sources
- build를 위한 웹서비스 수행.
- 제작을 위한 제작 web 수행
- build 서비스는 오만가지 라이브러리 이용하여 9999 포트로 서비스 생성
- 제작웹은  google appengine java 사용, 화면은 gwt 사용
- D:\appengine-sdk\appengine-java-sdk-1.9.17\bin\/dev_appserver.cmd --port=8888 --address=0.0.0.0 appengine/build/war/
- google gwt ,google webengine java, 등 이해 필요


## 궁긍한거 위주로 코드 분석

## apk 빌드 부분  App ( save .apk to my computer )

<td class="ode-ContextMenuItem ode-ContextMenuItem-disabled" id="gwt-uid-20" role="menuitem" colspan="2">App ( save .apk to my computer )</td>

빌드서버 없을때 나는 애러 
d not fetch URL:
http://localhost:9990/buildserver/build-all-from-zip-async?uname=test%40example.com&gitBuildVersion=nls-613-gc247b3b-dirty&callback=http%3A%2F%2Flocalhost%3A8888%2Fode2%2Freceivebuild%2Fd6u8q65rb4pinxsr15en4xaglzmguhdlg61ran1zk26rblclfnz7jvcceh2mgi59jngcg6dqj7v8zmz3w05k6x0drvzz77d6z50qh1ntozh1f8pibibonjnw5m5yie974wo4bsybz5%2Fbuild%2FAndroid, error: Received exception executing http method POST against URL http://localhost:9990/buildserver/build-all-from-zip-async?uname=test%40example.com&gitBuildVersion=nls-613-gc247b3b-dirty&callback=http%3A%2F%2Flocalhost%3A8888%2Fode2%2Freceivebuild%2Fd6u8q65rb4pinxsr15en4xaglzmguhdlg61ran1zk26rblclfnz7jvcceh2mgi59jngcg6dqj7v8zmz3w05k6x0drvzz77d6z50qh1ntozh1f8pibibonjnw5m5yie974wo4bsybz5%2Fbuild%2FAndroid: Connection to http://localhost:9990 refused

빌드서버 호출
http://localhost:9990/buildserver/build-all-from-zip-async

com.google.appinventor.buildserver/BuildServer.java   //rest 서비스 지원
웹페이지에서 aaa.zip 형태로 파일 전송
zip 파일 이용하여 빌드 후 apk 파일 생성
response 로 apk 반환

private void buildAndCreateZip(String userName, File inputZipFile)

중간에 넘겨주는 zip 파일을 가로채 보자  -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=9990

ant build 추가 후 remote debug  수행
<jvmarg line="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=9950" />

tmp 파일 분석
C:\Users\dubu9\AppData\Local\Temp\rep1390201256979409173tmp

.bky -- 설정
.scm -- kawa syntax
.yail -- kawa syntax

YailGenerator.jar

http://www.gnu.org/software/kawa/Compiling.html

kawa compile  -> compiling to bytecode

쉬운 코드 블럭을 만들고,  바로 bytecode 생성  apk 실행. 
java   -> to comfile byte code  -> apk
쉬운 appinventor code -> to comfile byte code  -> apk
 Blockly - [block editor](https://code.google.com/p/blockly/)

## wifi sync 하는 부분.

Ode.java
  private void wontConnectDialog() {

## open source contiributing
- [appinventor dev doc](https://developers.google.com/blockly/)
- 고쳐보자
- 무엇을 개선할꼬, list sorting
- 사운드 초기화 일부 모델에서 소리나지 않음 고쳐보자. 삼송 S노트2, S5. view에서 지정된 resource가 작동하지 않음. 
- 안되는예제 등록 및 원본 코드 고치기..


