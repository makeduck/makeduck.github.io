
### 라즈베리 파이 네트워크

--------------------

pi@raspberrypi ~ $ sudo cat /etc/network/interfaces
auto lo

iface lo inet loopback
iface eth0 inet dhcp

allow-hotplug wlan0
iface wlan0 inet manual
wpa-roam /etc/wpa_supplicant/wpa_supplicant.conf
iface default inet dhcp

-------------------------------

pi@raspberrypi ~ $ sudo cat /etc/wpa_supplicant/wpa_supplicant.conf
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
	ssid="null"
	key_mgmt=NONE
	auth_alg=OPEN
}

-------------

 sudo route add default gw 192.168.0.1

--------------

$ sudo /etc/init.d/networking restart
$ sudo ifup wlan0

---------

network={
ssid="SSID-GOES-HERE"
proto=RSN
key_mgmt=WPA-PSK
pairwise=CCMP TKIP
group=CCMP TKIP
psk="WIFI-PASSW


### 랜케이블로 라즈베리파이 접속
cmdline.txt  rootwait 다음에 ip=192.168.0.XXX

### 라즈베리 파이 설치
sudo raspi-config
os 다운로드. 종류 다향 raspbian 를 받자
- http://www.raspberrypi.org/downloads/
raspbian zip download

- win32diskimager
프로그램 이용 img sd 카드에 씌움
라즈베리파이 부팅 붕~

- 인터넷 설정
유선은 그냥 되고, 무선랜은 꼽으면 wlan0  보이면 좋은데 안보이기도 하더라

이하 무선랜 설정은 아래가 진리임.
sudo nano /etc/network/interfaces
'''
auto lo

iface lo inet loopback
iface eth0 inet dhcp

allow-hotplug wlan0
auto wlan0

iface wlan0 inet dhcp
wpa-ssid "ssid"
wpa-psk "password"
'''
### 배선그리기
http://fritzing.org/download

웹캠설치
sudo apt-get install motion

koazaz.iptime.org:8180
ie. 크롬에서는 안보임. 파폭에서 8180 포트로 보면 웹캠보임
참고
http://jonghyunkim816.blogspot.kr/2014/01/webcam.html
