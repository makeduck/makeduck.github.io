
mac
brew install pyenv-virtualenv
virtualenv myvenv

pyvenv-3.5 --without-pip myvenv
source myvenv/bin/activate
curl https://bootstrap.pypa.io/get-pip.py | python
deactivate
source myvenv/bin/activate

csrutil disable --without debug


--

rhc app create django python-3.3
rhc cartridge-add mysql-5.5 -a django
rhc alias add django django.kozazz.com


ssh 5805ebc79e34d5725c000183@django-dubu.cloud.or.kr

/var/lib/openshift/5805ebc79e34d5725c000183/app-root/data/djangogirls

python -m venv myvenv --without-pip


source myvenv/bin/activate

pip install django==1.8

django-admin startproject mysite .

pip install mysqlclient
pip install MySQL-python -  요거 안됨
pip install PyMySQL

mac 에서는 이게 된다
sudo ln -sf /usr/local/Cellar/mysql/5.6.27/lib/libmysqlclient.18.dylib /usr/local/lib/libmysqlclient.18.dylib

sudo ln -s /Users/rigel/anaconda/lib/libcrypto.1.0.0.dylib /usr/local/lib

엘케피탄 보안으로 심볼릭 링크 안돔 ㅡ
대신 이런걸로
export DYLD_FALLBACK_LIBRARY_PATH=$HOME/anaconda/lib/:$DYLD_FALLBACK_LIBRARY_PATH


up vote
43
down vote
Instead of playing with symlinks in system library dirs, set the $DYLD_FALLBACK_LIBRARY_PATH to include the anaconda libraries. eg:
export DYLD_FALLBACK_LIBRARY_PATH=$HOME/anaconda/lib/:$DYLD_FALLBACK_LIBRARY_PATH

python manage.py runserver

python manage.py shell

telegram 은 왜 안되는고
brew uninstall readline
brew install --build-from-source readline


콘다인스
https://uoa-eresearch.github.io/eresearch-cookbook/recipe/2014/11/20/conda/
conda install psycopg2

--

sudo apt-get install libmysqlclient-dev
sudo pip install MySQL-python


python manage.py startapp 앱이름

python manage.py startapp mandu

python manage.py shell

python manage.py runserver 0:8080

http://127.0.0.1:8080/
http://rigel.storyfunding.dev.daum.net/

source activate myvenv


from storyfundingorm.models import Category


model to db
python manage.py makemigrations
python manage.py migrate-- db 테이블 생성

db to model
python manage.py inspectdb > models.py


https://docs.djangoproject.com/en/1.8/ref/models/querysets/#iterator


mysql 설치

window용 직접 설치
https://pypi.python.org/pypi/MySQL-python/1.2.5#downloads

pip install mysql-python
pip install  python-mysqldb  # 윈도우는 그냥 윈도우용 설치했음



 python manage.py runserver

파이썬 환경 설정
mkdir .venv
virtualevn --nostie-packages --distribute dex ## 프로젝트 이름
source  ~/.venv/dex/bin/activate

샘플 블로그
https://github.com/jamiecurle/django-omblog.git


장고 nitrous 셋팅
http://help.nitrous.io/django-app/


요기에 띄워 뒀음
http://fast-wagon-75-157532.apne1.nitrousbox.com/blog/edit/1/




