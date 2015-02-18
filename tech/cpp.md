## intellij cpp setting
- MINGW cpp 라이브러리 사용
- cpp project setting CPPSTYLE , MAKEFILE 선택  . MSVC는 ms vitual C 전용.


## 설정변경
- mingw32-make.exe  파일이름 변경 to make.exe  make파일을 찾아서 변경 필요
- buidl make 수행하여 exe 생성
- intellij ide 에서 cpp 파일 생성
- 자동 생성된 make 파일 내용 수정 LDFLAGS = -static $(LIBPATH)  -g $(LIBS)     # -static 추가해 준다

## Q
- 디컴파일은 어떻게?
- intellij  C 개발 할만 한가?

