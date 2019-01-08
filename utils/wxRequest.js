// const { $Message } = require('../extend/iview/base/index');
var path = require('api.js');
import config from 'config.js'
var token_expire = 1000 * 24 * 3600;//过期时间
 
function wxPromisify(fn) {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        // console.log(res.data);
        //成功
        if (res.data.code == "401") {
          getToken(obj.url,obj.data);
        }
        if (res.data.code == "200"){
          resolve(res)
        }
        else{
          resolve(res)
        }
      }
      obj.fail = function (res) {
        //失败
        reject(res)
      }
      fn(obj)
    })
  }
}

//无论promise对象最后状态如何都会执行
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

/**
 * 微信请求get方法
 * url
 * data 以对象的格式传入
 */
function getRequest(url, data = { "token": "" }) {
  var getRequest = wxPromisify(wx.request)
  data.token = wx.getStorageSync('token');
  return getRequest({
    url: url,
    method: 'GET',
    data: data,
    header: {
      'Content-Type': 'application/json',
      'app-ver': config.getVersion
    }
  })
}

/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function postRequest(url, this_data = { "token": "" }) {
  var postRequest = wxPromisify(wx.request);
  this_data.token = wx.getStorageSync('token');
  return postRequest({
    url: url,
    method: 'POST',
    data: this_data,
    header: {
      "content-type": "application/json",
      'app-ver': config.getVersion
    },
  })
}

function pageInit() {
  var that = this;
  // 获取用户信息
  wx.getSetting({
    success: res => {
      //如果已经授权
      if (res.authSetting['scope.userInfo']) {
        that.get_token();
      } else {
        console.log(res);
        //如果未授权，弹出授权
        that.setData({
          auth_window_display: "flex"
        });
      }
    }
  });
}

function getToken(this_url,this_data) {
  console.log("getToken调用中");
  var date = new Date();
  var time = date.getTime();
  var session_time = wx.getStorageSync('token_expire');
  if (session_time == null || session_time == "" || session_time==undefined){
    session_time = 0 ;
  }
  //如果token还没有过期，则返回
  if (session_time > time){
    console.log("getToken未过期,返回");
    return;
  }
  var code = "";
  //设置过期时间
  var expire_time = (time * 10 + token_expire * 10) / 10;
  wx.setStorageSync('token_expire', expire_time);
  // 获取用户信息
  wx.getSetting({
    success: res => {
      if (res.authSetting['scope.userInfo']) {
        //先获取code
        wx.login({
          success: function (res) {
            if (res.code) {
              code = res.code;
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  // 可以将 res 发送给后台解码出 unionId
                  console.log(code);
                  console.log(res.iv);
                  console.log(res.encryptedData); 
                  wx.request({
                    url: path.getToken(),
                    data: {
                      code: code,
                      iv: res.iv,
                      encryptedData: res.encryptedData
                    },
                    success: function (res) {
                      console.log(res.data);
                      //设置token
                      wx.setStorageSync("token", res.data.data.token);
 
                      //展示
                      this_data.token = res.data.data.token;
                      console.log("生成新的token:" + res.data.data.token);
                      //提醒 
                      /*
                      $Message({
                        content: '微信认证过期。已默认为您重新认证。',
                        type: 'success',
                        duration: 5
                      });
                      */
                      /*
                      wx.request({
                        url: this_url, //仅为示例，并非真实的接口地址
                        data: this_data,
                        method: 'Post',
                        header: {
                          'content-type': 'application/json' // 默认值
                        },
                        success: function (res) {
                          console.log(res.data)
                        }
                      })
                      */
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
    }
  });
}
module.exports = {
  postRequest: postRequest,
  getRequest: getRequest,
  getToken: getToken
}