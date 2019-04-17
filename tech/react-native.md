export ANDROID_HOME={PATH}/Android/sdk
export ANDROID_NDK={PATH}/android-ndk-r10e

### new proj for android 
npm install -g react-native-cli
react-native init AwesomeProject
react-native run-android

$ANDROID_HOME/platform-tools/adb reverse tcp:8081 tcp:8081

react-native UIexample
read Examples/UIExplorer/README.dm

### for android
    지우고
    gradlew clean
    cd react-native
    device에 설치
    ./gradlew :Examples:UIExplorer:android:app:installDebug
    packager 별도 설치
    ./packager/packager.sh

/ debug 옵션 켜야 한다
localhost:8081/debugger-ui

데이터 변경시에는 재시작 해야 한다
ui만 live update 가능하다

## awesome
npm install
react-native run-android
packager 는 자동으로 뜬다



ios
npm install react-native-vector-icons --save
react-native link react-native-vector-icons
--stopped the npm server--
react-native run-ios


