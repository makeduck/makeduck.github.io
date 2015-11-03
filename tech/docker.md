## 설치
boot2docker vs dockertoolbox
도커도 진행형. 리눅스에서는 바로 설치가능. 윈도우나iox vm별도 설치필요.. boot2docker 많이 쓴듯하나 150812 dockertoolbox 나옴. 요거 쓰는게 권장같음. https://blog.docker.com/2015/08/docker-toolbox/
요기 순서대로 설치 http://docs.docker.com/mac/step_one/


## 주요명령어

```
docker quickstart terminal 수행
docker images

docker ps

docker run -it ubuntu bash

파일생성&저장

docker diff [컨테이너아이디]

docker commit [컨테이너아이디]  centos:django

docker rmi -f [이미지아이디]

docker tag [이미지아이디] [저장소:태그]


docker push  [저장소:태그]

```

## 사용 예

mysql
docker run --name dubu-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=dubu  -d mysql:5.7

link
docker run --name dubu-app --link dubu-mysql:mysql -d mysql:5.7

msyql client
docker run -it --link dubu-mysql:mysql --rm mysql:5.7 sh -c 'exec mysql -h0c3a06b0115b -P3306 -uroot -pdubu'


도커 centos + mysql 연동



docker pull centos
docker tag centos centos:django

cat /etc/redhat-release

docker run -it centos:django

cat /etc/redhat-release

$  yum install http://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-2.noarch.rpm
$  yum install python-pip python-devel gcc

pip 가 설치 안됨

curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
python get-pip.py

 yum install mysql mysql-devel
  pip install django MySQL-python

$ sudo yum install mysql mysql-devel
$ sudo pip install django MySQL-python

