

## bbi interpeter
- source code   http://www.hanbit.co.kr/exam/1904/
- BBI_edit_by_sigmadream.zip  그나마 개선된 것을 받는다
- 압축해제후  파일 incodeing 변경 utf-8 재저장 한다.

## build
- window7 64 bit 기준
- mingw64 설치 옵션 x86_64, posix
- build 옵션
-
```
g++  -o bbi bbi.cpp bbi_pars.cpp bbi_tkn.cpp bbi_tbl.cpp bbi_code.cpp bbi_misc.cpp
```



