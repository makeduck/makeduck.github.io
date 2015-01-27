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