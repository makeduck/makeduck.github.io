
# 설치
ubuntu 14.04 partioning / 100 , /home 100 , swap 10G
apt-get install ros indigo full desk version

# source build
nxt ros mercurial clone & rosmake
rosdep install orocos_kdl

로봇은 연결한 상태에서 전원을 킨다 O
켠상태에서 연결을 한다 X


# osx
맥에서 설치. docker. melodic

docker 재설치
docker pull ros

docker pull ros:melodic-robot


docker run -it ros
docker exec -it nostalgic_morse bash

포기.. 도커로 가자

#docker
참고 https://github.com/osblinnikov/ros-docker

docker run -p 6080:6080 -v `pwd`/workspaceSrc:/home/ros/workspace/src -t -i osblinnikov/rosdocker
roscore
rosrun turtlesim turtlesim_node
rosrun turtlesim turtle_teleop_key
