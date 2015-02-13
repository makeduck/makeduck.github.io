# sql parameter binding
- 각종 플러그인, 꼼수, 라이브러리 이용해도 좋지만
- python 한 번 돌리는게 낫을때가 있다. 

```
sql = "SELECT * FROM user where id = ? and age = ?"
Parameters =   [0, 20]
print sql.replace("?" , "%s") % tuple(Parameters)
```