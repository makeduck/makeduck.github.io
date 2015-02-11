## xpath
http://www.w3.org/TR/xpath/
http://www.freeformatter.com/xpath-tester.html#ad-output
http://ko.wikipedia.org/wiki/XPath

## 도움되는 plugin 
- firefox add on "xpath prototyping"

## scrapy 설치 
-
```
pip install scrapy
 cat > myspider.py <<EOF

from scrapy import Spider, Item, Field

class Post(Item):
    title = Field()

class BlogSpider(Spider):
    name, start_urls = 'blogspider', ['http://blog.scrapinghub.com']

    def parse(self, response):
        return [Post(title=e.extract()) for e in response.css("h2 a::text")]

EOF
 scrapy runspider myspider.py
```

- 프로젝트도 별도 설치 scrapy startproject tutorial

##
