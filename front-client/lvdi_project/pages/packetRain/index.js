Page({
  data: {
    visible: false
  },
  onLoad: function(options) {
    // 演示模式一
    this.initModeOne()
    // 注释模式一 打开模式二
    // this.initModeTwo()
  },
  // 上限模式
  initModeOne() {
    this.setData({
      visible: true,
      time: 15, // 游戏时间
      readyTime: 3, // 准备时间
      mode: 1,
      total: 200, // 红包总金额200
      number: 50, // 50个红包
      min: 0, // 金额最小是0
      max: 10 // 金额最大是10
    })
  },
  initModeTwo() {
    this.setData({
      visible: true,
      time: 15, // 游戏时间
      readyTime: 3, // 准备时间
      mode: 2, // 模式二，要设置createSpeed参数
      createSpeed: 300,
      min: 0.01, // 金额最小是0.01
      max: 10, // 金额最大是10
      decimal: 2
    })
  },
  // 结束
  success() {
    console.log('bind:finish')
    /*this.setData({
      visible: false //  隐藏界面
    })*/
    wx.navigateTo({
      url: '/pages/index/index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /*onShareAppMessage: function(ops) {
    return {
      title: 'sol-红包雨',
      path: '/pages/packetRain/index'
    }
  }*/
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中•••',
      mask: true
    })
    var scene = decodeURIComponent(options.scene);
    if (scene > 0) {
      var pid = scene;
    } else {
      var pid = options.pid;
    }
    this.loop(pid);
  },
  loop: function (pid) {
    if (!app.globalData.token) {
      var that = this
      setTimeout(function () { that.loop(pid); }, 100)
    } else {
      var info = app.globalData.userInfo,
        tok = app.globalData.token;
      if (!info) {
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            token: tok,
            pid: pid
          })
        }
      } else {
        this.setData({
          userInfo: info,
          token: tok,
          pid: pid
        })
      }

      var postUrl = app.setConfig.url + '/index.php?g=Api&m=Enve&a=enveDetail',
        postData = {
          id: pid,
          token: tok
        };
      app.postLogin(postUrl, postData, this.initial);
    }

  },
  //数据初始化
  initial: function (res) {
    wx.stopPullDownRefresh();
    if (res.data.code == 20000) {
      var data = res.data.data;
      var vos = data.receive,
        status = data.status,
        recive_status = data.recive_status,
        term_status = data.be_overdue,
        voices = [],
        state = 0;

      if (recive_status) {
        var hint = "已领取";
        state = 2
      } else if (!status) {
        var hint = "赏金都被领完了";
        state = 3
      } else {
        var hint = "点击领取";
        state = 1
      }
      if (term_status == 1) {
        state = 4;
      }
      for (var i = 0; i < vos.length; i++) {
        var width = (45 + 55 * vos[i].durat / 1000 / 30) + '%',
          duration = Math.round(vos[i].durat / 1000);

        var voice = {
          imgurl: vos[i].head_img,
          name: vos[i].nick_name,
          src: vos[i].voice_url,
          width: width,
          duration: duration,
          get_time: vos[i].get_time,
          millisecond: vos[i].durat,
          time: vos[i].add_time,
          lsje: vos[i].receive_amount
        };
        voices = voices.concat(voice);
      }
      let mytime = data.get_time;
      this.setData({
        ownerImg: data.head_img,
        ownerName: data.nick_name,
        mode: data.type,
        imgsrc: data.pic_dir,
        textCN: data.quest,
        zje: data.show_amount,
        zlq: data.receive_num,
        zgs: data.num,
        mytime: mytime,
        ls: voices,
        state: state,
        receiveState: recive_status,
        hint: hint,
        receiveJE: data.receive_amount,
        hasUserInfo: true
      })
      wx.hideLoading();
      this.addLattice()
    }
  }
})
