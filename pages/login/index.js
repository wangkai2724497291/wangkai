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
    title:'每日一题',
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
    })
  },
  regist:function(e){
    wx.navigateTo({
      url: '../register/index'
    })
  },
  onLaunch:function(){
    //全局
    var that = this;
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
    //先获取code
    wx.login({
      success: function (res) {
        if (res.code) {
          that.code = res.code;
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res);
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
                  console.log(res.data);
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
