// pages/master/master.js
var app = getApp()
import config from '../../utils/config.js'
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order:[],
    deposit:'',
    attestation:'',
    username:[],
    mobile:[],
    serviceinfo:[],
    state:null,
    servicecontent:'',
    star:3,
    title:'',
    level:'',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    auth_window_display: 'none',
    showTabBar: false,
  },

 
  submitPresent:function(e){
    console.log(wx.getStorageSync('token'))
    this.onLaunch()
    if (wx.getStorageSync('token')) {
      console.log(wx.getStorageSync('token'))
      console.log("登录成功")
      wx.navigateTo({
        url: '/pages/placeorder/placeorder?content=' + this.data.servicecontent + "&username=" + this.data.username + "&uid=" + this.data.uid + "&scene=" + this.data.scene,
      })
    }
    
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages = getCurrentPages() //获取加载的页面
    var currentPage = pages[pages.length - 1] //获取当前页面的对象
    var url = currentPage.route

    this.setData({
      order:this.data.serviceinfo,
      // title:options.title,
      // uid: options.uid,
      // store: options.store,
      scene: options.scene,
    })
    
   
    var that = this;
    wx.request({
      // url: this.data.title + '?uid=' + this.data.uid + '&store=' + this.data.store, 
      url: 'https://www.jiatd.com/mini_user/master/getMasterCardInfo?uid= ' + this.data.scene,
      type:'get',
      data:{
        token:wx.getStorageSync('token')
      },
      header:{
        'Content-Type': 'application/json',
        'app-ver':'1.6'
      },
      success(res) {
        console.log(res)
        that.setData({
          headpics: res.data.data.headpics,
          username: res.data.data.username,
          mobile: res.data.data.mobile,//电话号码
          serviceinfo: res.data.data.service_product,//服务内容
          deposit: res.data.data.deposit,//保障金
          attestation: res.data.data.auth_status,//认证
          level: res.data.data.level//星级
        })
      }
    })

    // this.onLaunch();


    // var code = wxRequest.postRequest(path.code())
    // code.then(res => {
    //   console.log(this.data.uid)
    //   console.log(res)
    //   this.setData({
    //     username: res.data.data.username,
    //     mobile: res.data.data.mobile,//电话号码
    //     serviceinfo: res.data.data.service_product,//服务内容
    //     deposit: res.data.data.deposit,//保障金
    //     attestation: res.data.data.auth_status,//认证
    //     level: res.data.data.level//星级
    //   })
     
    // })

  },

  home:function(){
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },


  /**
   * 师傅名片
   */
  getPageData: function () {
    var that = this
    if (wx.getStorageSync('token')) {
      //师傅数据
      wx.request({
        // url: this.data.title + '?uid=' + this.data.uid + '&store=' + this.data.store, 
        url: 'https://www.jiatd.com/mini_user/master/getMasterCardInfo?uid= ' + this.data.scene,
        type: 'get',
        data: {
          token: wx.getStorageSync('token')
        },
        header: {
          'Content-Type': 'application/json',
          'app-ver': '1.6'
        },
        success(res) {
          that.setData({
            headpics: res.data.data.headpics,
            username: res.data.data.username,
            mobile: res.data.data.mobile,//电话号码
            serviceinfo: res.data.data.service_product,//服务内容
            deposit: res.data.data.deposit,//保障金
            attestation: res.data.data.auth_status,//认证
            level: res.data.data.level//星级
          })
        }
      })

    }
  },



  /**
   * 授权登录
   */
  onLaunch: function () {
    //全局
    var that = this;
    // 获取用户信息
    wx.getSetting({
      success: res => {
        //如果已经授权
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          that.get_token();
        } else {
          //如果未授权，弹出授权
          that.setData({
            auth_window_display: "flex"
          });
        }
      }
    });
  },

  onGotUserInfo: function (res) {
    // 可以将 res 发送给后台解码出 unionId
    console.log(res)
    if (res.detail.userInfo) {
      this.setData({
        auth_window_display: "none"
      })
      this.get_token();
    } else {
      this.setData({
        auth_window_display: "none"
      })
      console.log("拒绝登录")
    }
  },




 


  get_token: function () {
    //全局
    var that = this;
    //先获取code
    wx.login({
      success: function (res) {
        console.log(res)
        if (res.code) {
          that.code = res.code;
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              app.globalData.userInfo = res.userInfo;
              that.setData({
                userInfo: res.userInfo
              })
              console.log(path.getToken())
              wx.request({
                url: path.getToken(),
                data: {
                  code: that.code,
                  iv: res.iv,
                  encryptedData: res.encryptedData
                  // ,debug: 1
                },
                header: {
                  'content-type': 'application/json',
                  'app-ver': config.getVersion
                },
                
                success: function (tokenRes) {
                  console.log(tokenRes.data.message)
                  if (tokenRes.data.code !== 200) {
                    wx.showModal({
                      title: '提示',
                      showCancel: false,
                      content: tokenRes.data.message,
                    })
                    return
                  }
                  wx.setStorageSync("token", tokenRes.data.data.token);
                  that.setData({
                    token: tokenRes.data.data.token
                  });

                  app.globalData.userId = tokenRes.data.data.uid
                  if (tokenRes.data.data.uid != '') {
                    that.setData({
                      userId: tokenRes.data.data.uid
                    })
                  }

                  if (tokenRes.data.data.role) {
                    var role = tokenRes.data.data.role.split(',')
                    //用户角色：1、师傅，2、客户，3、门店
                    if (role.indexOf('2') == -1) { // 如果该用户没有注册客户端，提示要绑定手机号
                      that.setData({
                        auth_phone_display: "flex"
                      });
                      app.globalData.isRegister = false
                    } else {
                      app.globalData.isRegister = true
                    }
                  } else {
                    that.setData({
                      auth_phone_display: "flex"
                    });
                    app.globalData.isRegister = false
                  }

                  that.setData({
                    showTabBar: true
                  });

                  that.getPageData()
                },
                fail: function (res) {
                  console.log(res)
                }
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              /*
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              */
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  },


  call:function(){
    wx.makePhoneCall({
      phoneNumber: this.data.mobile //仅为示例，并非真实的电话号码
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})