## metaBlogAPi

## 참고 
- http://myinformation.tistory.com/111

## Post
- tistory
```

password = "비번"
blogNum = 485275
blogId = "티스토리이름"

import xmlrpclib
datastruct={'category': '', 'description': '내용입니다','title':'제목입니다.'}
metaWeblog=xmlrpclib.Server("http://blogId.tistory.com/api").metaWeblog
no=metaWeblog.newPost(blogNum, "blogId@hanmail.net","password", datastruct, True)
r = metaWeblog.getPost(no, "blogId@hanmail.net","password")
```

- wordpress

- naver blog

- daumblog