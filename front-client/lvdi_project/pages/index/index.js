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
    nextMargin: 0
  },
  toPacketRain: function() {
    wx.navigateTo({
      url: '/pages/packetRain/index',
    })
  }
})
