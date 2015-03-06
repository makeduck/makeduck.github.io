## scrapy
- python web crawler
- [scrapy doc](http://doc.scrapy.org/en/0.24/intro/tutorial.html#our-first-spider)
- [example git source](https://github.com/dubu/scrapy)


## table schema 
```
## table scrapy_football_player
CREATE TABLE `scrapy_football_player` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `birthday` varchar(100) DEFAULT NULL,
  `birthplace` varchar(100) DEFAULT NULL,
  `height` varchar(45) DEFAULT NULL,
  `weight` varchar(45) DEFAULT NULL,
  `position` varchar(100) DEFAULT NULL,
  `currentClub` varchar(100) DEFAULT NULL,
  `number` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=545 DEFAULT CHARSET=utf8;
```