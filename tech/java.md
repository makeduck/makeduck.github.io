
boolen = 1bit = 2
bype = 8bit = 2^8 = 256 = 16*16 = 0F
char = 2byte
short = 2byte = 2^16 (-2^15~2^15)
int = 4byte = 2^32 (-2^31~2^31)
long = 8byte = 2^64 (-2^63~2^63)
float = 4byte = 2^16 1.0E-45
double = 8byte = 2^64 1.0E-324


wget --no-cookies \
 --no-check-certificate \
 --header "Cookie: oraclelicense=accept-securebackup-cookie" \
 "http://download.oracle.com/otn-pub/java/jdk/8u161-b12/2f38c3b165be4555a1fa6e98c45e0808/jdk-8u161-linux-x64.tar.gz" \
 -O jdk-8u161-linux-x64.tar.gz



aws java8 install switch

$ cd /opt
$ sudo wget --no-cookies ...
$ sudo tar xzf jdk-8u161-linux-x64.tar.gz
$ cd jdk1.8.0_161/
$ sudo alternatives --install /usr/bin/java java /opt/jdk1.8.0_161/bin/java 2
$ sudo alternatives --config java
There are 2 programs which provide 'java'.
  Selection    Command
-----------------------------------------------
*+ 1           /usr/lib/jvm/jre-1.7.0-openjdk.x86_64/bin/java
   2           /opt/jdk1.8.0_151/bin/java
Enter to keep the current selection[+], or type selection number: 2
