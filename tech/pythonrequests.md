#python request
- 할때마다 까먹어;

# 참고
- python requests http://docs.python-requests.org/en/latest/user/quickstart/

# 기능
- get , post , json  , header setting 

```
url = 'http://www.a.com'
resp = requests.post(url=url)
data = json.loads(resp.text)
resp = requests.post(url=url)

payload = {'grant_type': 'authorization_code', 'client_id': 'aadd2dca8073bc2366147c277b725420','redirect_ur':'http://makeduck.github.io/oauth','code':'Gx29UvM9N1LbG6bxKVXF0xdMNkUkVjAisET5asic-LqB8RVsvhKxVOqe9O9xbyuJ45TuUKwQQjQAAAFMKykHfQ'}
r = requests.post("https://www.a.com", params=payload)
r.json()

u'{"access_token":"-kl4omiOfDsm2SYK7ROfBycRrTtCp5GBNBTruqwQQjQAAAFMKym2QQ","token_type":"bearer","refresh_token":"Z5MaC9FqoEvjK_4cg5bO0ESeWNjQxM1NjwQ_-qwQQjQAAAFMKym2Pw","expires_in":21599,"scope":"story_publish story_read profile"}'

tc =  r.json()['access_token']
rc =  r.json()['refresh_token']

```

