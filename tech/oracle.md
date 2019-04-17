

### 설치
-- 클라이언트 설치를 하자
-- 11 ex 설치하면 다 설치되는줄 알았는데 그러하지는 않음
-- C:\app\dubu9\product\11.2.0\client_1\network\admin\tnsnames.ora
```
  ORCL =
    (DESCRIPTION =
      (ADDRESS = (PROTOCOL = TCP)(HOST = ip주소 )(PORT = 1521))
      (CONNECT_DATA =
        (SERVER = DEDICATED)
        (SERVICE_NAME = orcl)
      )
    )
```


### oracle
- 모델링은?
- sqldepveloper


### 테이블별 사이즈 조회
SELECT A.SEGMENT_NAME,
              ROUND(SUM(A.BYTES)/1024/1024) "SIZE_MB",
              A.SEGMENT_TYPE
FROM DBA_SEGMENTS A,
            DBA_TABLES B
WHERE A.SEGMENT_NAME = B.TABLE_NAME
      AND A.SEGMENT_TYPE IN ('TABLE','TABLE PARTITION')
      AND A.OWNER = '유저아이디'
GROUP BY A.SEGMENT_NAME, A.SEGMENT_TYPE
ORDER BY 2 DESC;

# sqlplus

# import sql
sqlplus user_name/user_password@connect_string @path\your_sql.sql


# xe 한글 해결

http://hermeslog.tistory.com/236

NLS_LANG=Korean_Korea.KO16KSC5601; export NLS_LANG


sqlplus sys/oracle as sysdba

export NLS_LANG=KOREAN.UTF-8

sqlplus를 실행한 리눅스는 문자셋이 e 이구요..

== UTF-8 ==
sql> update sys.props$ set value$='UTF8' where name='NLS_CHARACTERSET';
sql> update sys.props$ set value$='UTF8' where name='NLS_NCHAR_CHARACTERSET';
sql> update sys.props$ set value$='KOREAN_KOREA.UTF8' where name='NLS_LANGUAGE';


unset NLS_LANG

select * from mz_item where rownum < 400;

select name from mz_item where id = 1849;

# sqlplus 한글 확인

export NLS_LANG=KOREAN_KOREA.AL32UTF8
slqplus
select '한글' from dual;

선확인 한글 설정 확인 필요
NLS_NCHAR_CHARACTERSET
KO16MSWIN949

# dump import/ exprot
plsql job 으로 실행
export 는 full
특정 작업 폴더이하 .dmp 파일 위치 /admin/이름/dpdump 이하에 dump 파일 위치
table space 적절히 생성 후 schema import , user/table 등 생성



# 오라클 startup
sqlplus /nolog

2. conn sys/ as sysdba 하고 비밀번호 입력

SQL> conn sys/ as sysdba
암호 입력:
휴지 인스턴스에 접속되었습니다.

3. startup

SQL> startup
ORACLE 인스턴스가 시작되었습니다.

Total System Global Area  167772160 bytes
Fixed Size                  1247900 bytes
Variable Size              83887460 bytes

#listener
lsnrctl start
lsnrctl stop




