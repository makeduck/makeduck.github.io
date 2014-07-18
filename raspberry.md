### 라즈베리 파이 설치

os 다운로드. 종류 다향 raspbian 를 받자
- www.rasbeerrypi.org/download
raspbian zip download

- win32diskimager
프로그램 이용 img sd 카드에 씌움
라즈베리파이 부팅 붕~

- 인터넷 설정
유선은 그냥 되고, 무선랜은 꼽으면 wlan0  보이면 좋은데 안보이기도 하더라

sudo vi /etc/network/interfaces

이하 망했음 됨. 무선랜 고정 설정이 잘 안되더라
iface wlan0 inet static
address 192.168.0.22
netmask 255.255.255.0
gateway 192.168.0.1
wpa-ssid "null"

바꾼 interfaces 설정적용하기
sudo ifup wlan0

웹캠설치
sudo apt-get install motion

koazaz.iptime.org:8180
ie. 크롬에서는 안보임. 파폭에서 8180 포트로 보면 웹캠보임
참고
http://jonghyunkim816.blogspot.kr/2014/01/webcam.html
