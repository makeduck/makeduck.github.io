## gradle

intellij 기준 신규 프로젝트 gradle로 생성
gradle depency library 들어왔는지 확인 필요.
debug 도 gracle select 이후 gradle debug 통해서 한다. junit 은 안되더라.
gradle project 는 gradle debug 필요.
dependency 때문에 junit test 실행시 에러 왕창발생한다


gradle ?
gradle
gradle tasks
gradle help --task init


### task
gradle tasks  task 목록을 보여줌


### spring build
gradle install // install archives to local maven
gradle build // assemble project

### script
gradle
gradle help --task init

gradle init --type java-library


gradle init --type java-application --test-framework spock