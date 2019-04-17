java spring

방향
가볍게 가자

api [링크](http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#mvc-ann-return-types)

test controller
[참고링크](https://github.com/spring-projects/spring-framework/blob/c38542739734c15e84a28ecc5f575127f25d310a/spring-webmvc/src/test/java/org/springframework/web/servlet/mvc/annotation/ServletAnnotationControllerTests.java)
해당 타켓만 테스트

Q
templet engine
springboot
cache
auth
controller return type
intercepter
request parameter biding

urlpattern get

extract method
```apple js


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({
    "classpath:/servlet.xml",
    "classpath:applicationContext.xml",
    "classpath:persistenceContext.xml"})
@WebAppConfiguration
public class PatternUrlTest {

    @Autowired
    private RequestMappingHandlerMapping requestMappingHandlerMapping;

    @Autowired
    private RequestMappingHandlerMapping requestMappingHandlerMapping;
    @Test
    public void testGetPatternUrl() throws Exception {

        Map<RequestMappingInfo, HandlerMethod> map = requestMappingHandlerMapping.getHandlerMethods();
        for (Map.Entry next : map.entrySet()) {

            RequestMappingInfo info = (RequestMappingInfo) next.getKey();
            Set<String> patterns = info.getPatternsCondition().getPatterns();

//            System.err.println(next.getValue());
            System.err.println(patterns);
        }
    }
}


```