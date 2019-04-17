


gear list

gear start 어쩌


openpaas.cloudsc.kr


OpenShift Client

gem install rhc

ssh-keygen -t rsa

rhc setup --server brocker.cloudsc.kr
rhc setup --server broker.cloud.or.kr


또는 rhc setup -l 로그인메일

rhc cartridge list

rhc app create {app name} {cartridge}



```
Your application 'b' is now available.

  URL:        http://b-mandu.cloudsc.kr/
  SSH to:     56b00a6c09d8699b44000dae@b-mandu.cloudsc.kr
  Git remote: ssh://56b00a6c09d8699b44000dae@b-mandu.cloudsc.kr/~/git/b.git/

```


git remote add upstream -m master git://github.com/openshift/django-example.git
git pull -s recursive -X theirs upstream master
git push


python $OPENSHIFT_REPO_DIR/wsgi/myproject/manage.py createsuperuser



```
  URL:        http://c-mandu.cloudsc.kr/
  SSH to:     56b035a109d8699b44000dc6@c-mandu.cloudsc.kr
  Git remote: ssh://56b035a109d8699b44000dc6@c-mandu.cloudsc.kr/~/git/c.git/
  Cloned to:  /Users/rigel/workspace/openshift/c
```

rhc cartridge-add mysql-5.5 -a c

connect url
 mysql://$OPENSHIFT_MYSQL_DB_HOST:$OPENSHIFT_MYSQL_DB_PORT/


MySQL 5.5 database added.  Please make note of these credentials:

       Root User: adminyytrycw
   Root Password: gNEHxp7cbg2c
   Database Name: c

Connection URL: mysql://$OPENSHIFT_MYSQL_DB_HOST:$OPENSHIFT_MYSQL_DB_PORT/

## list
ssh 56af85134423f891a80003f9@king-dubu.cloudsc.kr




```
ssh://56af85134423f891a80003f9@king-dubu.cloudsc.kr/~/git/king.git/
SSH URL ssh 56af85134423f891a80003f9@king-dubu.cloudsc.kr

```


  URL:        http://springbook-j63.cloudsc.kr/
  SSH to:     56f8d7c79a329744f4000504@springbook-j63.cloudsc.kr
  Git remote: ssh://56f8d7c79a329744f4000504@springbook-j63.cloudsc.kr/~/git/springbook.git/

  URL:        http://nbbang-j63.cloudsc.kr/
  SSH to:     56f0f9ab9a3297e5080006f3@nbbang-j63.cloudsc.kr
  Git remote: ssh://56f0f9ab9a3297e5080006f3@nbbang-j63.cloudsc.kr/~/git/nbbang.git/
  Cloned to:  /Users/rigel/nbbang

  URL:        http://bs-j63.cloudsc.kr/
  SSH to:     56f0f9db9a3297e508000708@bs-j63.cloudsc.kr
  Git remote: ssh://56f0f9db9a3297e508000708@bs-j63.cloudsc.kr/~/git/bs.git/
  Cloned to:  /Users/rigel/tmux/tmp/bs

rhc cartridge-add mysql-5.5 -a springbook
rhc cartridge-add mysql-5.5 -a nbbang
rhc cartridge-add mysql-5.5 -a bs
rhc cartridge-add mysql-5.5 -a music

rhc cartridge-add php-5.4 -a blog

rhc app create springbook jbossews-2.0
rhc app create nbbang jbossews-2.0
rhc app create bs jbossews-2.0
rhc app create music jbossews-2.0


rhc app create king-kura jbossews-2.0

rhc delete-app aaa

### env 수정
rhc env set JAVA_HOME=/etc/alternatives/java_sdk_1.7.0 -a springbook
요렇게 할 필요 없음
.openshift 이하 폴더 설정이 꼭 필요하다

rhc mysql conf 수정
배포하면 다시 바뀐다 ;; hook 을 이용하여 수정함
.openshift/action_hooks/post_start_mysql
```
#!/bin/bash
echo "********MySQL_config it's running."
/usr/bin/mysql -h $OPENSHIFT_MYSQL_DB_HOST -u $OPENSHIFT_MYSQL_DB_USERNAME \--password=$OPENSHIFT_MYSQL_DB_PASSWORD -P $OPENSHIFT_MYSQL_DB_PORT \-e 'SET NAMES "utf8"; SET CHARACTER SET utf8; SET GLOBAL character_set_client=utf8,character_set_results=utf8, character_set_connection=utf8, character_set_server=utf8, collation_server=utf8_general_ci, character_set_database=utf8;'
```

rhc app create blog jbossews-2.0
rhc cartridge-add mysql-5.5 -a blog

  URL:        http://blog-dubu.cloudsc.kr/
  SSH to:     5739e8a84423f8efb800081a@blog-dubu.cloudsc.kr
  Git remote: ssh://5739e8a84423f8efb800081a@blog-dubu.cloudsc.kr/~/git/blog.git/


rhc port-forward -a blog

kong-dubu.cloudsc.kr

외부 도메인 연결
kozazz@hanmail.net
dubu
rhc alias add blog blog.kozazz.com
rhc alias add king king.kozazz.com
rhc alias add kong kong.kozazz.com
rhc alias add sun sun.kozazz.com

kozazz@naver.com
mandu

a-mandu.cloudsc.kr
b-mandu.cloudsc.kr
c -mandu.cloudsc.kr

rhc alias add a a.kozazz.com
rhc alias add b b.kozazz.com
rhc alias add c c.kozazz.com

kozazzt@hanmail.net
j63
rhc alias add springbook springbook.kozazz.com
rhc alias add nbbang nbbang.kozazz.com
rhc alias add bs bs.kozazz.com
rhc alias add song song.kozazz.com
rhc alias add music music.kozazz.com

목록조회
rhc apps

rhc app create a jbossews-2.0
rhc app create b jbossews-2.0
rhc app create c jbossews-2.0
rhc app create springbook jbossews-2.0
rhc app create bs jbossews-2.0
rhc app create song jbossews-2.0
rhc app create music jbossews-2.0
rhc app create kong jbossews-2.0
rhc app create blog jbossews-2.0
rhc app create sun jbossews-2.0
rhc app create king python-3.3

rhc cartridge-add mysql-5.5 -a a
rhc cartridge-add mysql-5.5 -a b
rhc cartridge-add mysql-5.5 -a c
rhc cartridge-add mysql-5.5 -a springbook
rhc cartridge-add mysql-5.5 -a bs
rhc cartridge-add mysql-5.5 -a song
rhc cartridge-add mysql-5.5 -a music
rhc cartridge-add mysql-5.5 -a kong
rhc cartridge-add mysql-5.5 -a blog
rhc cartridge-add mysql-5.5 -a sun
rhc cartridge-add mysql-5.5 -a king
rhc cartridge-add cron-1.4  -a king

rhc alias add a a.kozazz.com
rhc alias add b b.kozazz.com
rhc alias add c c.kozazz.com
rhc alias add springbook springbook.kozazz.com
rhc alias add bs bs.kozazz.com
rhc alias add song song.kozazz.com
rhc alias add music music.kozazz.com
rhc alias add king king.kozazz.com
rhc alias add song song.kozazz.com
rhc alias add blog blog.kozazz.com
rhc alias add sun sun.kozazz.com

rhc alias add nbbang nbbang.kozazz.com

git push origin HEAD:master


이하 미등록
rhc app create nbbang jbossews-2.0
rhc app create springbook jbossews-2.0
rhc app create bs jbossews-2.0

rhc cartridge-add mysql-5.5 -a nbbang
rhc cartridge-add mysql-5.5 -a springbook
rhc cartridge-add mysql-5.5 -a bs

rhc alias add nbbang nbbang.kozazz.com
rhc alias add springbook springbook.kozazz.com
rhc alias add bs bs.kozazz.com

// cronjob 추가
rhc cartridge add cron-1.4 -a kingkura

rhc app create gonani jbossews-2.0
rhc cartridge-add mysql-5.5 -a gonani
rhc alias add goni gonani.kozazz.com


rhc app create goodroad jbossews-2.0
rhc cartridge-add mysql-5.5 -a goodroad
rhc alias add goodroad goodroad.kozazz.com
rhc cartridge add cron-1.4 -a goodroad


rhc app create oss jbossews-2.0
rhc cartridge-add mysql-5.5 -a oss
rhc alias add oss oss.kozazz.com
rhc cartridge add cron-1.4 -a oss
