
### 메이븐 프로젝트 모듈 분리의 소견.
사례)
- admin,section 존재
- model,service 가 겹치게 됨.
- 모듈을 공통인(model,service) 와 admin, section 을 각각 분리.
- core.jar , core.jar를 포함한 admin.war  setion.war 각각 생성
- maven 에서 dependence 를 걸어 lib 로 core를 가져와 사용. 하는데 구지 이럴 필요가 있을까???
- core.jar를 별로 배포 해야 한다. 불필요함.

개선책은
모듈은 별도로 분리하되. core.jar 파일을 dependence로 걸지 말자.
maven build 시 필요 모듈만 선별 패키징을 하자.

