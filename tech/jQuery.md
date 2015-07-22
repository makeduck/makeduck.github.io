
### 동적로딩
```
var jq = document.createElement('script');
jq.src = "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type.
jQuery.noConflict();
```


### plugin

[jQuery BlockUi](http://jquery.malsup.com/block/#demos)

### jquery 살펴보기
- git fork to my repository https://github.com/jquery/jquery
- git checkout

- qunit 수행  /test/index.html 브라우져 실행
- /dist/ 폴더 생성. 테스트할 소스를 넣어둔다.  jquery.min.js
- unit test module 별로 살펴보기
- 크롬에서 js source breack point 를 걸어 살펴보거나, browser console 창에서 테스트 수행해 본다.

jquery unit list
```
ajax.js
attributes.js
callbacks.js
V core.js
css.js
data.js
deferred.js
deprecated.js
dimensions.js
effects.js
event.js
exports.js
manipulation.js
offset.js
queue.js
ready.js
V selector.js
serialize.js
support.js
traversing.js
wrap.js

```