//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //motto: 'Hello World',
    //userInfo: {},
    //hasUserInfo: false,
    //canIUse: wx.canIUse('button.open-type.getUserInfo')
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
    nextMargin: 0
  },
  toPacketRain: function() {
    wx.navigateTo({
      url: '/pages/packetRain/index',
    })
  },/*,
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }*/
})
