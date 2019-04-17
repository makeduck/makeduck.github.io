

### thread dump
- jps -v   // java로 뭐가 돌아가고 있나
- jstack 넘버
또는
- kill -3 넘버
또는
visual vm 에서 봐도 좋고

케이스별로 코드 만들어서 덤프를 만들어봄직 하다.

### vi
- :%s/찾아서/바꿔라/g
- 매일 까먹는다

ls -al -SS  크기순
while TRUE ; do  print time ; done;

## inode
- 충분히 커서 신경 쓸 일 없으나  sub folder 는 32000 개 정도가 max 폴더생성 안됨. 백업파일 만들다가 max 채워봤다.


### 참고
http://helloworld.naver.com/helloworld/10963

### 맨날 까먹는 명령어들
 자주 안써서


grep -v 빼고 선택

앞에 선택을 위에 속성으로 넣어서 실행함
ls  |  xarg file {} \;

directory 만 조회
ls -dl */

vim back 없이
set nobackup nowritebackup

netstat -an
netstat -ano

모니터링 할때 가끔 씀
while true ; do  sleep 5 ; echo 'hi' ; done


### awk
echo $( ps -ef | grep 11799  | awk '{print $1}')


## shell
#!/bin/bash
APP_SERVERS=(
  "dubu@server1"
  "dubu@server2"
  "dubu@server3"
)

for SERVER in ${APP_SERVERS[@]}
do
# ssh -o StrictHostKeyChecking=no $SERVER  "echo 'hello' >> ~/.tmp/tmpfile.txt"
done


for i in 1 2 3 4
do
echo $i
done

 for i in `seq 1 10`;

  for i in `seq 1 10`;



은근히 잘 쓰임
export serverlist=`rhc apps | grep SSH | awk '{ print $2 }' `
for i in serverlist ; done echo $i ; ssh $i ls ; done


써먹고 까먹음.
find .  -print -type f -depth 1 -exec cat {} \;

mod_jk.log apache 정상 start 확인용
$ cat * | awk '{ print $6 }' |  awk '{split($0,a,":") ;  print  a[2]} ' | uniq -c  | grep ' 1 ' | sort

regx grep
$ egrep "a|b|c"


함번 쓰윽 보면 다시 생각남
http://wiki.kldp.org/wiki.php/DocbookSgml/Shell_Programming-TRANS


bash schell 잘 하기.. 함 훑어볼 필요가 있다

http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc8

sed

sed s/CLASSPATH=\"\$JAVA_HOME\\/lib\\/tools.jar:\$CATALINA_HOME\\/bin\\/bootstrap.jar\"/CLASSPATH=\"\$JAVA_HOME\\/lib\\/tools.jar:\$CATALINA_HOME\\/bin\\/bootstrap.jar:\$CATALINA_HOME\\/bin\\/tomcat-juli.jar\"/ test.conf > out.conf


sed -e '9 i <Listener className="org.apache.catalina.core.ThreadLocalLeakPreventionListener" />' -e '/JasperListener/d' -e '/ServerLifecycleListener/d' server.xml

