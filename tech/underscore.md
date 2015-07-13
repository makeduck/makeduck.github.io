### 동적로딩
```
var jq = document.createElement('script');
jq.src = "http://underscorejs.org/underscore.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type.
jQuery.noConflict();
```



http://underscorejs.org/underscore.js