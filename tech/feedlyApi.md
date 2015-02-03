## feedly api
- https://developer.feedly.com/
- cloud.feedly.com 운영  , sandbox.feedly.com 개발
- github python wraper https://github.com/zgw21cn/FeedlyClient
- [FeedlyClient](https://github.com/zgw21cn/FeedlyClient/blob/master/client.py)
- tocken 기간이 길지 않다. 3달 정도유효.

FEEDLY_REDIRECT_URI = "http://localhost"
FEEDLY_CLIENT_ID="sandbox"
FEEDLY_CLIENT_SECRET="8LDQOW8KPYFPCQV2UL6J"

from client import FeedlyClient

def get_feedly_client(token=None):
    if token:
        return FeedlyClient(token=token, sandbox=True)
    else:
        return FeedlyClient(
                            client_id=FEEDLY_CLIENT_ID,
                            client_secret=FEEDLY_CLIENT_SECRET,
                            sandbox=True
        )


def auth(request):
    feedly = get_feedly_client()
    # Redirect the user to the feedly authorization URL to get user code
    code_url = feedly.get_code_url(FEEDLY_REDIRECT_URI)
    return redirect(code_url)

------------

def callback(request):
    code=request.GET.get('code','')
    if not code:
        return HttpResponse('The authentication is failed.')

    feedly = get_feedly_client()

    #response of access token
    res_access_token = feedly.get_access_token(FEEDLY_REDIRECT_URI, code)
    # user id
    if 'errorCode' in res_access_token.keys():
        return HttpResponse('The authentication is failed.')

    id = res_access_token['id']
    access_token=res_access_token['access_token']

------------------
def feed(access_token):
    '''get user's subscription'''
    feedly = get_feedly_client()
    user_subscriptions = feedly.get_user_subscriptions(access_token)
    
    
    
---- 이하 참고 
    

-- 구독 목록 조회
curl 'http://sandbox.feedly.com/v3/stream/contents?streamId=feed%2Fhttp%3A%2F%2Fwww.readwriteweb.com%2Frss.xml&count=20' -H 'Authorization: OAuth AvvsFKB7ImEiOiJGZWVkbHkgc2FuZGJveCBjbGllbnQiLCJlIjoxNDIyOTQxNTA4MjY0LCJpIjoiZWRjNWIwZWUtZWEwNi00NWI0LTgwYjktZWNhNzBmNzBlZWE2IiwicCI6OCwidCI6MSwidiI6InNhbmRib3giLCJ3IjoiMjAxNS40IiwieCI6InN0YW5kYXJkIn0:sandbox'

curl 'http://sandbox.feedly.com/v3/subscriptions' -H 'Authorization: OAuth AvvsFKB7ImEiOiJGZWVkbHkgc2FuZGJveCBjbGllbnQiLCJlIjoxNDIyOTQxNTA4MjY0LCJpIjoiZWRjNWIwZWUtZWEwNi00NWI0LTgwYjktZWNhNzBmNzBlZWE2IiwicCI6OCwidCI6MSwidiI6InNhbmRib3giLCJ3IjoiMjAxNS40IiwieCI6InN0YW5kYXJkIn0'



-- 구독 게시물 조회
curl 'http://cloud.feedly.com/v3/mixes/contents?streamId=feed%2Fhttp%3A%2F%2Fwww.engadget.com%2Frss.xml&count=3' -H 'Authorization: OAuth YourAuthToken'

streamId  : key 같은건가보다

curl 'http://sandbox.feedly.com/v3/mixes/contents?streamId=feed/http://chhwa75.tistory.com/814' -H 'Authorization: OAuth AvvsFKB7ImEiOiJGZWVkbHkgc2FuZGJveCBjbGllbnQiLCJlIjoxNDIyOTQxNTA4MjY0LCJpIjoiZWRjNWIwZWUtZWEwNi00NWI0LTgwYjktZWNhNzBmNzBlZWE2IiwicCI6OCwidCI6MSwidiI6InNhbmRib3giLCJ3IjoiMjAxNS40IiwieCI6InN0YW5kYXJkIn0'

curl 'http://sandbox.feedly.com/v3/mixes/contents?streamId=feed/http://chhwa75.tistory.com/rss' -H 'Authorization: OAuth AvvsFKB7ImEiOiJGZWVkbHkgc2FuZGJveCBjbGllbnQiLCJlIjoxNDIyOTQxNTA4MjY0LCJpIjoiZWRjNWIwZWUtZWEwNi00NWI0LTgwYjktZWNhNzBmNzBlZWE2IiwicCI6OCwidCI6MSwidiI6InNhbmRib3giLCJ3IjoiMjAxNS40IiwieCI6InN0YW5kYXJkIn0'


curl 'http://sandbox.feedly.com/v3/mixes/contents?streamId=user/http://chhwa75.tistory.com/814' -H 'Authorization: OAuth AvvsFKB7ImEiOiJGZWVkbHkgc2FuZGJveCBjbGllbnQiLCJlIjoxNDIyOTQxNTA4MjY0LCJpIjoiZWRjNWIwZWUtZWEwNi00NWI0LTgwYjktZWNhNzBmNzBlZWE2IiwicCI6OCwidCI6MSwidiI6InNhbmRib3giLCJ3IjoiMjAxNS40IiwieCI6InN0YW5kYXJkIn0'


-- 특정게시물
/v3/streams/ids?streamId=:streamId

curl 'http://sandbox.feedly.com/v3/streams/ids?streamId=3K21LYJMYiyxCq3dcv/zLp5F7icnvoOLBBY+8Nof4k4=_14b2da51ccb:37b9e:b55e4cce' -H 'Authorization: OAuth AvvsFKB7ImEiOiJGZWVkbHkgc2FuZGJveCBjbGllbnQiLCJlIjoxNDIyOTQxNTA4MjY0LCJpIjoiZWRjNWIwZWUtZWEwNi00NWI0LTgwYjktZWNhNzBmNzBlZWE2IiwicCI6OCwidCI6MSwidiI6InNhbmRib3giLCJ3IjoiMjAxNS40IiwieCI6InN0YW5kYXJkIn0'

curl 'http://sandbox.feedly.com/v3/streams/ids?streamId=zLp5F7icnvoOLBBY+8Nof4k4=_14b2da51ccb:37b9e:b55e4cce' -H 'Authorization: OAuth AvvsFKB7ImEiOiJGZWVkbHkgc2FuZGJveCBjbGllbnQiLCJlIjoxNDIyOTQxNTA4MjY0LCJpIjoiZWRjNWIwZWUtZWEwNi00NWI0LTgwYjktZWNhNzBmNzBlZWE2IiwicCI6OCwidCI6MSwidiI6InNhbmRib3giLCJ3IjoiMjAxNS40IiwieCI6InN0YW5kYXJkIn0'

요거되는거
curl 'http://sandbox.feedly.com/v3/entries/3K21LYJMYiyxCq3dcv%2FzLp5F7icnvoOLBBY%2B8Nof4k4%3D_14b2da51ccb%3A37b9e%3Ab55e4cce' -H 'Authorization: OAuth AvvsFKB7ImEiOiJGZWVkbHkgc2FuZGJveCBjbGllbnQiLCJlIjoxNDIyOTQxNTA4MjY0LCJpIjoiZWRjNWIwZWUtZWEwNi00NWI0LTgwYjktZWNhNzBmNzBlZWE2IiwicCI6OCwidCI6MSwidiI6InNhbmRib3giLCJ3IjoiMjAxNS40IiwieCI6InN0YW5kYXJkIn0'

curl 'http://sandbox.feedly.com/v3/entries/http://chhwa75.tistory.com/814'
gRtwnDeqCDpZ42bXE9Sp7dNhm4R6NsipqFVbXn2XpDA=_13fb9d6f274:2ac9c5:f5718180

curl 'http://sandbox.feedly.com/v3/entries/http%3A%2F%2Fchhwa75.tistory.com%2F814'

-- 전부가져오기

/v3/mixes/contents?streamId=:streamId

curl 'http://sandbox.feedly.com/v3/mixes/contents?streamId=user/edc5b0ee-ea06-45b4-80b9-eca70f70eea6/category/all&count=3' -H 'Authorization: OAuth AvvsFKB7ImEiOiJGZWVkbHkgc2FuZGJveCBjbGllbnQiLCJlIjoxNDIyOTQxNTA4MjY0LCJpIjoiZWRjNWIwZWUtZWEwNi00NWI0LTgwYjktZWNhNzBmNzBlZWE2IiwicCI6OCwidCI6MSwidiI6InNhbmRib3giLCJ3IjoiMjAxNS40IiwieCI6InN0YW5kYXJkIn0'

curl 'http://sandbox.feedly.com/v3/mixes/contents?streamId=user/edc5b0ee-ea06-45b4-80b9-eca70f70eea6/category/2014enter&count=3' -H 'Authorization: OAuth AvvsFKB7ImEiOiJGZWVkbHkgc2FuZGJveCBjbGllbnQiLCJlIjoxNDIyOTQxNTA4MjY0LCJpIjoiZWRjNWIwZWUtZWEwNi00NWI0LTgwYjktZWNhNzBmNzBlZWE2IiwicCI6OCwidCI6MSwidiI6InNhbmRib3giLCJ3IjoiMjAxNS40IiwieCI6InN0YW5kYXJkIn0'

curl 'http://sandbox.feedly.com/v3/mixes/contents?streamId=user/edc5b0ee-ea06-45b4-80b9-eca70f70eea6/category/global.all&count=3' -H 'Authorization: OAuth AvvsFKB7ImEiOiJGZWVkbHkgc2FuZGJveCBjbGllbnQiLCJlIjoxNDIyOTQxNTA4MjY0LCJpIjoiZWRjNWIwZWUtZWEwNi00NWI0LTgwYjktZWNhNzBmNzBlZWE2IiwicCI6OCwidCI6MSwidiI6InNhbmRib3giLCJ3IjoiMjAxNS40IiwieCI6InN0YW5kYXJkIn0'

-- 8시간 이내

curl 'http://sandbox.feedly.com/v3/mixes/contents?streamId=user/edc5b0ee-ea06-45b4-80b9-eca70f70eea6/category/global.all&hours=1' -H 'Authorization: OAuth AvvsFKB7ImEiOiJGZWVkbHkgc2FuZGJveCBjbGllbnQiLCJlIjoxNDIyOTQxNTA4MjY0LCJpIjoiZWRjNWIwZWUtZWEwNi00NWI0LTgwYjktZWNhNzBmNzBlZWE2IiwicCI6OCwidCI6MSwidiI6InNhbmRib3giLCJ3IjoiMjAxNS40IiwieCI6InN0YW5kYXJkIn0'

&hours=8
