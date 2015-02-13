
## telnet
- telnet http 사용
- GET 요거는 대문자 , HTTP 요것도 대문자로 하자 소문자 안되기도 함

```
telnet www.daum.net 80
GET / HTTP/1.1
host : www.daum.net
엔터2번
```

```
 ~]$ telnet www.daum.net 80
Trying 180.70.93.56...
Connected to www.daum.net.
Escape character is '^]'.
GET / HTTP/1.1
```

## HTTP
- [spec](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
