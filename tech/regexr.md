### 정규식

### 참고
http://www.regexr.com/
http://www.nextree.co.kr/p4327/


## 스크립트 정규식

/a/.test("aa")


## java 정규식

```
        String patternStr = "/episode/\\d{1,}";
        Pattern pattern = Pattern.compile(patternStr);

        String url = "/episode/13207";
        Matcher m = pattern.matcher(url);
//            Assert.assertTrue(m.find());

// m.find()
        if (m.matches()) {
            System.out.println(m.group());

        }


```