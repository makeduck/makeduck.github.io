
# 쓸려면 기억 안나는 명령어
삭제 앞으로 댕기기 d+del키
창분할 가로분할 ctrl+w+n  ,세로분할ctrl+w+v  ,창종료 ctrl +w +c
창크기변견  :resize 40
창 이동 ctrl +w + hjkl
탭생성 :tabnew
탭종료 :tabclose
탭이동 gt ,gT
탭이동 :tabn 2
이전페이지 ctrl +^
링크이동 ctrl+]
링크 밖으로 이동 ctrl+t 또는 ctrl+o
이력 :hist
블럭이동 ctrl+f ,ctrl+b
encoding 확인 :set encoding 재설정 set encoding=utf-8
encoding 리스트 iconv -l
encoding 변경. iconv -f ISO_8859-1 -t UTF-8 bbi_misc.cpp >bbi_misc.cpp
라인넘버 :set nu , :set nonu
블럭주석 ctrl+v ,shift+i ,글자 ,esc
python 블럭 indent v +선택 +indentLevel(0..9) + >


## buffer
:buffers
:ball // 전체 buffer 안쓸듯
:bn
:bN
:h buffer-list

^M =  ctrl + v + enter

:%s/^M/\r/g


## less
vim 같아 보이나 less 임
-m
G 하면 %로 보인다.
