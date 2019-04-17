GIT
====

## remote 여러개 예제

D:\workspace_intellij\biopy.github.io>git remote add biospin https://github.com/biospin/biopy.git

D:\workspace_intellij\biopy.github.io>git fetch biospin
warning: no common commits
remote: Counting objects: 23, done.
remote: Compressing objects: 100% (16/16), done.
remote: Total 23 (delta 0), reused 0 (delta 0)
Unpacking objects: 100% (23/23), done.
From https://github.com/biospin/biopy
 * [new branch]      gh-pages   -> biospin/gh-pages
 * [new branch]      master     -> biospin/master

D:\workspace_intellij\biopy.github.io>git remote
biospin
origin

D:\workspace_intellij\biopy.github.io>git checkout -b master_biospin biospin/master

D:\workspace_intellij\biopy.github.io>git log --decorate

D:\workspace_intellij\biopy.github.io>git merge master

git status

D:\workspace_intellij\biopy.github.io>git mergetool

D:\workspace_intellij\biopy.github.io>git push biospin master_biospin:master



# branch 변경

$ git fetch origin
$ git checkout gh-pages


# fork repository sync

## upsteam 등록
https://help.github.com/articles/configuring-a-remote-for-a-fork/

git remote -v

upsteam 으로 등록

git remote add upsteam https://github.com/mit-cml/appinventor-sources.git

git remote -v

upstream 변경
git branch master -u origin/master


## sync upsteam 
https://help.github.com/articles/syncing-a-fork/

git fetch upsteam

git checkout master

git merge upsteam/master


안되서 이거 진행함.
git reset --hard origin/master


# remote bitbucket 추가
cd /path/to/my/repo
git remote add origin https://kozazz@bitbucket.org/kozazz/androidbanner.git
git push -u origin --all # pushes up the repo and its refs for the first time
git push -u origin --tags # pushes up any tags

신규 저장소 업로드
git push -u origin master

remote 연결 정보
git branch -r

trackin 정보 조회
git branch -vv   // trackin 연결 정보까지 조회

trackin 정보 변경
git branch -u upstream/master master

commit 취소  이하 3개 취소
git reset --hard HEAD~3

reset 옵션
hard > mixed > soft
soft: head 만 변경 , mixed: index 도 변경 git add 취소 , hard: 파일내용까지 변경


rebase 정렬
git rebase master
checkout master
git merge branchtag

remote 삭제
git branch -d -r origin/pull_request

git config user.name "kozazz"
git config user.email "kozazz@hanmail.net"

매번 로그인 하기 싫으니 캐시 설정함
git config --global credential.helper cache


git commit --amend --author "kozazz <kozazz@hanmail.net>"


git merge --abort

git clean -f -d

git reflog

upstream 변경 설정
git push -f --set-upstream rhc master

untracted file remove
git clean -i

reset 롤백
git reset --hard ORIG_HEAD

// upsteam 변경 
git branch -u upstream/master


참고
----------

- [](https://www.youtube.com/watch?v=qKoUeXymsgk)
- [git자료](https://github.com/kenu/ssag-git)
- [git어렵지않아요](http://rogerdudler.github.io/git-guide/index.ko.html)

