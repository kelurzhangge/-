//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/assets/images/1.jpeg',
      '/assets/images/2.jpeg',
      '/assets/images/3.jpeg',
      '/assets/images/4.jpeg',
      '/assets/images/5.jpeg',
      '/assets/images/6.jpeg',
      '/assets/images/bj.jpg',
      '/assets/images/rdc.png',
    ],
    ViewCount: ['1', '2', '3', '4', '5', '6', '7'],
    indicatorDots: true,
    vertical: true,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,

    isCanAccessPackageRain: false
  },
  toPacketRain: function() {
    wx.navigateTo({
      url: '/pages/packetRain/index',
    })
  },
  onLoad: function() {
    var that = this;
    //判断是否可以进入抢红包页面
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code)
        wx.request({
          //后台接口地址
          url: 'http://127.0.0.1/sendWallet/demo.php?sendType=IsCanGetRedPackage',
          data: {
            wxCode: res.code
          },
          method: 'GET',
          header: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          success: function (res) {
            console.log("res is:" + res.data + ',' + res.data.return_code);
            if (res.data.return_code == 'SUCCESS') {
              that.setData({
                isCanAccessPackageRain: true
              })
              if (res.data.wxOpenId) {
                wx.setStorageSync('wxOpenId', res.data.wxOpenId);
              }
            }
          }
        })
      }
    });
  }
})
