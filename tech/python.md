

python
-----------

사전자료
--------------
- 파이썬 기본 환경 구성. python 2.7 , pip , vituralenv
- [내가파이썬을 선택한 이유](https://github.com/ethdemor/springcamp2014)
- 관련 자료 내가 파이썬을 선택한 이유 spring camp  - django


Setting
------------------
- python 설치 2.7.7
- ez_setup.py 파일 다운로드 후 설치 python ez_setup.py install
- path 등록 %PHTHON_HOME%\Scripts
- pip 설치 easy_install pip
- pip install django
- pip install virtualenv

Summary
------------------
- 외에 setting 생략.
- [ipython notebook viewer](http://nbviewer.ipython.org/)
- [python notebook 계정](https://www.wakari.io)
- 먼지 모르는 파이썬 샘플 http://nbviewer.ipython.org/github/ipython/ipython/blob/2.x/examples/Interactive%20Widgets/Lorenz%20Differential%20Equations.ipynb

python notebook
-----------------
- [my python notebook](http://nbviewer.ipython.org/github/makeduck/makeduck.github.io/blob/master/python)
- [notebook dubu ](http://nbviewer.ipython.org/github/makeduck/makeduck.github.io/blob/master/python/dubu.ipynb)

[토플모] 파이썬을 이용한 Bioinformatics 기초](python_study.md)
[바이오 파이썬 노트](python_study_note.md)


crontab 인코딩이 문제일때
------------------------------
PYTHONIOENCODING=utf8

## flask + mysql 
- pip install flask-mysql
```
from flaskext.mysql import MySQL
...
cursor = mysql.connect().cursor()
    cursor.execute("SELECT * from scrapy_football_player")

```


virtural env
------------------

http://docs.python-guide.org/en/latest/dev/virtualenvs/
시작
virtualenv -p /usr/bin/python2.7 aa
source aa/bin/activate
deactivate

conda package 로 설치시
conda create -n conda2 python=2.7 anaconda
source activate conda2

각종설치
conda install -c anaconda bcolz=1.1.2
conda install theano pygpu
conda install -c conda-forge keras=2.0.2


pygame
conda create -n pygame python=2.6 anaconda
http://www.pygame.org/wiki/GettingStarted#Pygame%20Installation


py depplearing
conda create -n pylearning python=2.7 anaconda
http://www.pygame.org/wiki/GettingStarted#Pygame%20Installation


simple server
--------------------
python


ipython
 -------------------

%recall number
%rep 3  //edit 3
exec _i3


피이썬으 시작 ipython 이 낳더라
ipyton
from + tab  엄청 많다
from collections import Counter
help(Counter)
dir(Counter)
