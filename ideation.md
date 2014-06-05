



또 그 무엇
------------


방금 그 라디오
-----------------

### 개요
- 방금 그 곡을 라디오로 플레이 한다.
- 라디오로 노래만 들을 수 있다.
- 업데이트시 라이디 체널 자동 변경, 갱신/멈춤
- 방금 그 곡 사용  [다음방금그곡]( http://m.music.daum.net/onair/timeline)
- api 있으면 좋고 없으면, update call parsing http://m.music.daum.net/onair/timeline
- POST http://m.music.daum.net/onair/songlist.json?type=top&searchChannelType=popular&startTime=20140605100621&channelIds= HTTP/1.1
- [response json](onair.txt)

###
 설명

### 제안
- 주파수를 받아서 제어 가능한 라디오 필요 (핸드폰이나. 라이오이거나 )
- 핸드폰은 라이오app 은 밴더 종속이랑 공통 app 만들기가 힘들어 보인다.

### 방금 그 곡 api 업데이트
- 한 곳에서만 해도 되겠다.
- 서버하나 두고, api 파씽해서 라이오 채널만 out 으로 내려주는 api 생성
- 채널을 받아서 라디로 플레이는 하는 app 필요.