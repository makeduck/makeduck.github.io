## android tip
Q apk 설치중 실패했을때 이미 폴더 생성으로 앱이 설치가 안됨 com.android.packageinstaller D/InstallAppProgress﹕ Installation error code: -24
A 폴더 직접삭제 adb shell , cd /data/data , rm -r [packagename]



node-red on android
https://github.com/npm/npm/issues/19265#issuecomment-347997389

adb shell
dumpsys sensorservice
