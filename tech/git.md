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


참고
---------

- [](https://www.youtube.com/watch?v=qKoUeXymsgk)
- [git자료](https://github.com/kenu/ssag-git)
- [git어렵지않아요](http://rogerdudler.github.io/git-guide/index.ko.html)

