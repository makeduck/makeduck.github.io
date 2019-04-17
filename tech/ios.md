http://stackoverflow.com/questions/31254725/transport-security-has-blocked-a-cleartext-http

이하 추가 필요 

	<key>NSAppTransportSecurity</key>
	<dict>
		<key>NSAllowsArbitraryLoads</key>
		<true/>
	</dict>
	
	
	
코드 사인 부분을 전부 삭제한다. 
내 사인을 받는다. 
code identiy 를 수정 한다. code. 
auto check
팀은 개인꺼. 
설정 필요한 옵션 전부 비활성화 

	
	
	
	
	
	