<?php
/**
* 	配置账号信息 2015-05-13 13:16:33
* 	配置文件 
*/

class WxPayConf_pub
{
	//=======【基本信息设置】=====================================
	//微信公众号身份的唯一标识。审核通过后，在微信发送的邮件中查看
	const APPID = "wx169147d6a93c3e8f";
	//受理商ID，身份标识
	const MCHID =  "***";
	//商户支付密钥Key。审核通过后，在微信发送的邮件中查看
	const KEY =  "***";
	//JSAPI接口中获取openid，审核后在公众平台开启开发模式后可查看
	const APPSECRET =  "3f57f8b2b5cd90abffca17c5a8308e5b";
	
	//=======【JSAPI路径设置】===================================
	
	
	//=======【证书路径设置】=====================================
	//证书路径,注意应该填写绝对路径
	const SSLCERT_PATH    =   "***";	
	const SSLKEY_PATH     =   "***";
	const SSLROOTCA_PATH  =    "***";
	
	//=======【curl超时设置】===================================
	//本例程通过curl使用HTTP POST方法，此处可修改其超时时间，默认为30秒
	const CURL_TIMEOUT = 30;

	//=======【idea云平台签名密钥】===================================
	//在云平台 配置的 签名密钥 可不填
	const privateKey = "test";

	// 【接口调用域名白名单】
	const OAUTH_HOST = "|wx78585.com|127.0.0.1|localhost|";

	// 开启接收调试信息的模式
	const DEBUG = true;
	
	// 数据库相关连接参数
	const dbhost = "localhost:3306";  // mysql服务器主机地址
	const dbuser = "root";            // mysql用户名
	const dbpass = "nginxphp135792468";          // mysql用户名密码

}

?>
