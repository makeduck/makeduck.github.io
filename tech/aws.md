## aws
- EC2 1년 무료
- @naver.com 계정
- redhat  또는 ami(amazone machine image)

## aws 가격
```
인스턴스 타입	"CPU  Units (ECU)"	"CPU Cores"	Memory	storage	달러	원화	%	1일	30일	1년
T1 Micro	2	1	0.6	EBS	0.027	29.635065	1	711	21,337	259,603
M1 Small	1	1	1.7	160	0.088	96.58836	4	2,318	69,544	846,114
```
제일 작은거 월2만
그나만 쓸만한거 월7만 

## ssh 접속
- private key 이용 연결
- puttygen , putty  
- gen 이용하여 .pem 파일을 .ppk 파일로 변경 
- ppk 파일 연결시 비번대신 사용
- 계정 ec2-user | root

## 초기 설정
- tzselect 실행
- sudo /etc/profile 내용 추가
```
TZ='Asia/Seoul'; export TZ
```
- source /etc/profile


2017

sudo yum install -y mysql
sudo yum install -y java-1.8.0
sudo yum install -y tmux
sudo yum install -y nginx
/etc/nginx/nginx.conf 수정. 8080 redirect 추가
sudo yum install java-1.8.0
sudo /usr/sbin/alternatives --config java
sudo /usr/sbin/alternatives --config javac

free 티어 사용건
vpc 설정 public/private
inbound 설정
네트웍트 security 설정
public ip 중심으로 접근 
intance to db 연결 확인 필요.


db
vpc 를 default로 해야 외부에서 접근된다.


adhook 을 통한 자동 배포
자동 빌드 및 restar 까지 연결?
