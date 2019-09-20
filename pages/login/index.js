//index.js
 
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
//获取应用实例
const app = getApp()
Page({
  globalData: {
    userInfo: "",
    js_code: "",
    openid: "",
    session_key: ""
  },
  data: {
    /*前端获取用户信息基础配置*/
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    /*页面数据配置*/
<<<<<<< HEAD
    title:'每日一题',
=======
    title:'家通达',
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    auth_window_display:"none"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {

  },
  //页面加载时启动
  onLoad: function () {
    this.onLaunch();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  login:function(e){
    var data = {};
    var getPostsRequest = wxRequest.postRequest(path.test(), data);
    getPostsRequest.then(response => { 
         console.log("调用完毕继续");
<<<<<<< HEAD
    })
  },
  regist:function(e){
    wx.navigateTo({
=======
      console.log(response)
    })
    wx.redirectTo({
      url: '../user/index'
    })
  },
  regist:function(e){
    wx.redirectTo({
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      url: '../register/index'
    })
  },
  onLaunch:function(){
    //全局
    var that = this;
<<<<<<< HEAD
=======
    console.log(that)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res)
        //如果已经授权
        if (res.authSetting['scope.userInfo']) {
          that.get_token();
        } else {
          console.log(res);
          //如果未授权，弹出授权
          this.setData({
            auth_window_display: "flex"
          });
        }
      }
    });
  }, 
  onGotUserInfo:function(res){
    // 可以将 res 发送给后台解码出 unionId
    this.get_token();
  },
  get_token: function (){
    //全局
    var that = this;
<<<<<<< HEAD
    //先获取code
    wx.login({
      success: function (res) {
=======
    console.log(that)
    //先获取code
    wx.login({
      success: function (res) {
        console.log(res)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        if (res.code) {
          that.code = res.code;
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res);
<<<<<<< HEAD
=======
              console.log(path)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
              // 可以将 res 发送给后台解码出 unionId
              that.globalData.userInfo = res.userInfo;
              wx.request({
                url: path.getToken(),
                data: {
                  code: that.code,
                  iv: res.iv,
                  encryptedData: res.encryptedData
                },
                success: function (res) {
<<<<<<< HEAD
                  console.log(res.data);
=======
                  console.log(res);
                  console.log(res.data)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
                  wx.setStorageSync("token", res.data.data.token);
                  that.setData({
                    auth_window_display: "none"
                  });
                }
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
        else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  }
})
