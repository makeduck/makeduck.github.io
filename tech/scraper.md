

scraper git
https://gist.github.com/cornchz/c340bd469d6a2f31827d

jedi-vim // python auto completate
tmux  // 멀티새션 창여러개
```
ctrl + b +명령어

```
## vim
원래있는 vim 으로는 잘 안되다. 업데이트 하자
http://www.prioritized.net/blog/upgrading-vim-on-os-x/
```
# mercurial required - install if you don't already have it.
$ brew install mercurial

# install Vim
$ brew install vim

# if /usr/bin is before /usr/local/bin in your $PATH,
# hide the system Vim so the new version is found first
$ sudo mv /usr/bin/vim /usr/bin/vim72

# should return /usr/local/bin/vim
$ which vim
```

## vundles
- vundles git 페이지 내 설치 설명 참
- vim bundle 설치 플러그인
- plugin 확인 :BundleList

## jedi
- pip install jedi
- http://jedi.jedidjah.ch/en/latest/
- install https://github.com/davidhalter/jedi-vim
- http://unlogic.co.uk/2013/02/08/vim-as-a-python-ide/

```
2.3. Installing using Vundle		*jedi-vim-installation-vundle*

1. Vundle automatically downloads subrepositories as git submodules, so you
   will automatically get the jedi library with the jedi-vim plugin. Add the
   following to the Bundles section in your .vimrc file: >

    Plugin 'davidhalter/jedi-vim'

2. Issue the following command in Vim: >

    :PluginInstall

Help tags are generated automatically, so you should be good to go.

```

- 단축키 설명창 활성 jedi-vim    shift + k
- :help jedi-vim
- vim python ver 확인  :python import sys; print(sys.version)
- import module 못찾을 때 path 추가 vim  : python import sys; sys.path.append('/home/ec2-user/anaconda/lib/python2.7/site-packages')
- 모듈설명 찾아 볼때 :Pyimport Flask     , :Pyimport numpy.sort
- letter 은 보톰   \ 이다

# NERDTree
- tmux 아래에서 F2 키 실행 아니됨 ;
- vim :NERDTree 로 직접 띄우자

