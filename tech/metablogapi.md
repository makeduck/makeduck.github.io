## metaBlogAPi

#기능 
- 기본기능만 있음. 최소 기능;
```
MetaWeblogAPI metaWeblog.newPost 메서드는 블로그에 새 항목을 게시합니다.
MetaWeblogAPI metaWeblog.editPost 메서드는 블로그의 기존 항목을 편집합니다.
MetaWeblogAPI metaWeblog.getPost 메서드는 블로그에서 특정 항목을 반환합니다.
MetaWeblogAPI metaWeblog.getCategories 메서드는 블로그에서 사용된 범주의 목록을 반환합니다.
MetaWeblogAPI metaWeblog.getRecentPosts 메서드는 가장 최근의 초안 게시물과 초안이 아닌 게시물을 게시 날짜 기준 내림차순으로 반환합니다.
MetaWeblogAPI blogger.deletePost 메서드는 블로그에서 게시물을 삭제합니다.
MetaWeblogAPI blogger.getUsersBlogs 메서드는 사용자의 스페이스에 대한 정보를 반환합니다.
MetaWeblogAPI blogger.getUserInfo 메서드는 이름, 전자 메일 주소, 사용자 ID와 같은 기본 사용자 정보를 반환합니다.
MetaWeblog API 오류에서는 Windows Live Spaces가 오류를 반환하도록 만드는 HTTP 작업 및 XML-RPC 작업에 대한 정보를 제공합니다.
```

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