//app.js
App({
  globalData: {
    userInfo: null
  },
  onLaunch: function () {
    var openId = (wx.getStorageSync('openId'));
    if (openId) {
      wx.getUserInfo({
        success: function(res) {
          that.setData({
            nickName: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl,
          })
        },
        fail: function() {
          //fail
          console.log("获取失败!")
        },
        complete: function() {
          //complete
          console.log("获取用户信息完成!")
        }
      })
    } else {
      wx.login({
        success: function(res) {
          console.log(res.code)
          if (res.code) {
            wx.getUserInfo({
              withCredentials: true,
              success: function (res_user) {
                wx.request({
                  //后台接口地址
                  url: 'http://localhost/wx.login',
                  data: {
                    code: res.code,
                    encryptedData: res_user.encryptedData,
                    iv: res_user.iv
                  },
                  method: 'GET',
                  header: {
                    'content-type': 'application/json'
                  },
                  success: function(res) {
                    //this.globalData.userInfo = JSON.parse(res.data);
                    that.setData({
                      nickName: res.data.nickName,
                      avatarUrl: res.data.avatarUrl,
                    })
                    wx.setStorageSync('openId', res.data.openId);
                  }
                })
              }, fail: function() {
                wx.showModal({
                  title: '警告通知',
                  content: '您点击了拒绝授权，将无法正常显示个人信息，点击确定重新获取授权。',
                  success: function (res) {
                    if (res.confirm) {
                      wx.openSetting({
                        success: (res) => {
                          if (res.authSetting["scope.userInfo"]) {//如果用户重新同意了授权登录
                            wx.getUserInfo({
                              withCredentials: true,
                              success: function (res_user) {
                                wx.request({
                                  url: 'https://localhost/wx/login',
                                  data: {
                                    code: res_login.code,
                                    encryptedData: res_user.encryptedData,
                                    iv: res_user.iv
                                  },
                                  method: 'GET',
                                  header: {
                                    'content-type': 'application/json'
                                  },
                                  success: function (res) {
                                    that.setData({
                                      nickName: res.data.nickName,
                                      avatarUrl: res.data.avatarUrl,
                                    })
                                    wx.setStorageSync('openId', res.data.openId);
                                  }
                                })
                              }
                            })
                          }
                        }
                      })
                    }
                  }, complete: function(res) {

                  }
                })
              }
            })
          }
        }
      })
    }
  },
  
  //提交
  postLogin: function (url, data, callback = function () { }) {
    var that = this;
    var signData = this.getSign();
    data.sign = signData.sign;
    data.timestamp = signData.timestamp;
    //发起网络请求
    wx.request({
      url: url,
      data: data,
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
      success: function (res) {
        if (res.data.code != 20000) {
          wx.showToast({
            title: res.data.msg,
            icon: 'loading',
            duration: 1500
          })
          if (res.data.code == 40500) { callback(res); }
          return false;
        }
        if (res.data.token) { that.globalData.token = res.data.token; }
        callback(res);
      }
    })
  }
  
})