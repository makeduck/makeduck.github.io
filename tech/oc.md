
 oc get projects
  oc get services
 oc expose service/jee-ex
 oc get routes


oc get services

oc set env dc/nodejs-mongodb-example MONGO_URL='mongodb://admin:secret@<your_mongodb_service_ip>:27017/sampledb'
oc set env pods --all --list

oc describe buildConfig jee-ex

oc new-app --image-stream=mysql  -e MYSQL_USER=goodroad -e MYSQL_PASSWORD=#goodroad# -e MYSQL_DATABASE=sampledb

mysql -u $MYSQL_USER -p$MYSQL_PASSWORD -h $HOSTNAME 
mysql -uroot -p$MYSQL_ROOT_PASSWORD -h $HOSTNAME 

mysql -uroot -h $HOSTNAME 

mysql     172.30.252.144   <none>        3306/TCP   3m

oc set env pod <pod_name> --list
oc set env pod mysql-1-hjs5b --list

oc rsh mysql-1-hjs5b

oc port-forward mysql-3-g2e4v 3306:3306

oc new-app --list

oc new-app https://github.com/<your_github_username>/nodejs-ex --name nodejs-mongodb-example

oc new-app --image-stream="openshift/wildfly:latest" https://github.com/dubu/jee-ex.git --name jee-ex
