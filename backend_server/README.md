1.此nginx为windows64位平台上的程序，由于nginx中的html/sendWallet/demo.php
中需要执行curl_post，故需要将php安装主目录中的php_curl.dll和libssl-1_1-x64.dll
拷贝到C:\Windows\System32中(参考链接中说还需要拷贝libeay32.dll,我的系统中已经有
此文件)。
2.启动
  -开启nginx：打开cmd命令提示符输入命令，start nginx。（自己配置全局变量）
　　　　　　　　　或者进入到nginx目录下，输入命令 nginx.exe，开启nginx
　　　　　　　　　　nginx.exe -s reload  重启
　　　　　　　　　　nginx.exe -s quit   关闭

  -开启php-cgi.exe
　E:\self\soft\php-7.2.11/php-cgi.exe -b 127.0.0.1:9000 -c E:\self\soft\php-7.2.11/php.ini 
　就是php目录下的 php-cgi.exe和php-ini文件，加上绝对路径，端口号要跟nginx的对上！
3.浏览器访问:
localhost/sendWallet/demo.php
