//index.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
//获取应用实例
const app = getApp()
var timer
Page({
  data: {
    /*页面数据配置*/
    // phone: '',
    // smsCode: '',
    // smsCodeValue : '',
    // canGetSmsCode: true,
    // code: '',
    // codeValue: '',
    // referee: '',
    // auth_window_display: 'none',
    // smsBtn: '获取验证码',
    // count: 60
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载...',
    })

    if (options.scene) {
      setTimeout(() => {
        wx.hideLoading()
        wx.reLaunch({
          url: '/pages/index/index?scene=' + options.scene + '&registerType=2'
        })
      }, 1000)
    }
    // this.onLaunch();
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    
  },
  // getUserInfo: function(e) {

  // },
  // getPhone: function(e) {
  //   this.setData({
  //     phone: e.detail.value
  //   })
  // },
  // getSmsCodeValue: function(e) {
  //   this.setData({
  //     smsCodeValue: e.detail.value
  //   })
  // },
  // getCodeValue: function(e) {
  //   this.setData({
  //     codeValue: e.detail.value
  //   })
  // },
  // getSmsCode: function() {
  //   console.log('getSmsCode')
  //   var that = this;
  //   if (this.data.phone === '') {
  //     wx.showToast({
  //       title: '手机号不能为空！',
  //       icon: 'none',
  //       duration: 2000
  //     })
  //     return
  //   }
  //   var RegCellPhone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
  //   if (!RegCellPhone.test(this.data.phone)) {
  //     wx.showToast({
  //       title: '手机号有误，请重新输入！',
  //       icon: 'none',
  //       duration: 2000
  //     })
  //     return
  //   }
  //   wx.showLoading({
  //     title: '正在获取验证码',
  //   })
  //   var getPostRequest = wxRequest.postRequest(path.getSmsCode(), {mobile: that.data.phone})
  //   getPostRequest.then(res => {
  //     console.log(res)
  //     if (res.data.status) {
  //       wx.hideLoading()
  //       that.setData({
  //         smsCode: res.data.data,
  //         canGetSmsCode: false,
  //       })
  //       timer = setInterval(function () {
  //         if (that.data.count) {
  //           that.setData({
  //             count: that.data.count - 1
  //           })
  //         } else {
  //           that.setData({
  //             canGetSmsCode: true,
  //             count: 60
  //           })
  //           clearInterval(timer)
  //         }
  //       }, 1000)
  //     } else {
  //       wx.showToast({
  //         title: res.data.message,
  //         icon: 'none',
  //         duration: 2000
  //       })
  //     }
  //   })
  // },

  // // 获取formid
  // formSubmit: function (e) {
  //   var that = this
  //   var getFormId = wxRequest.postRequest(path.getFormId(), {
  //     formid: e.detail.formId
  //   });
  //   getFormId.then(res => {
  //     // console.log(res)
  //   })
  // },

  // register: function () {
  //   var that = this
  //   if (this.data.phone === '') {
  //     wx.showToast({
  //       title: '手机号不能为空！',
  //       icon: 'none',
  //       duration: 2000
  //     })
  //     return
  //   }
  //   if (this.data.smsCodeValue === '') {
  //     wx.showToast({
  //       title: '短信验证码不能为空！',
  //       icon: 'none',
  //       duration: 2000
  //     })
  //     return
  //   }
  //   if (this.data.smsCode != parseInt(this.data.smsCodeValue)) {
  //     wx.showToast({
  //       title: '短信验证码错误！',
  //       icon: 'none',
  //       duration: 2000
  //     })
  //     return
  //   }
  //   if (this.data.codeValue === '') {
  //     wx.showToast({
  //       title: '图形验证码不能为空！',
  //       icon: 'none',
  //       duration: 2000
  //     })
  //     return
  //   }
  //   if (this.data.code.toLowerCase() != this.data.codeValue.toLowerCase()) {
  //     wx.showToast({
  //       title: '图形验证码错误！',
  //       icon: 'none',
  //       duration: 2000
  //     })
  //     return
  //   }
  //   var data = {
  //     mobile: this.data.phone,
  //     img_code: this.data.codeValue,
  //     sms_code: this.data.smsCodeValue,
  //     user_encode: this.data.referee
  //   }
  //   var getPostRequest = wxRequest.postRequest(path.register(), data)
  //   getPostRequest.then(res => {
  //     console.log(res)
  //     // role 用户角色：1、师傅，2、客户，3、门店
  //     if (res.data.status) {
  //       wx.showModal({
  //         title: '提示',
  //         content: '恭喜！注册成功！',
  //         showCancel: false,
  //         success: function (res) {
  //           if (res.confirm) {
  //             // console.log('用户点击确定')
  //             wx.reLaunch({
  //               url: '/pages/index/index',
  //             })
  //           }
  //         }
  //       })
  //     } else {
  //       wx.showToast({
  //         title: res.data.message,
  //         icon: 'none',
  //         duration: 2000
  //       })
  //     }
  //   })
  // },
  // imgCodeChange: function (e) {
  //   this.setData({
  //     code: e.detail.value
  //   })
  // },

  // onLaunch: function () {
  //   //全局
  //   var that = this;
  //   // 获取用户信息
  //   wx.getSetting({
  //     success: res => {
  //       //如果已经授权
  //       if (res.authSetting['scope.userInfo']) {
  //         that.get_token();
  //       } else {
  //         //如果未授权，弹出授权
  //         this.setData({
  //           auth_window_display: "flex"
  //         });
  //       }
  //     }
  //   });
  // },
  // onGotUserInfo: function (res) {
  //   // 可以将 res 发送给后台解码出 unionId
  //   if (res.detail.userInfo) {
  //     this.setData({
  //       auth_window_display: "none"
  //     })
  //     this.get_token();
  //   }
  // },
  // get_token: function () {
  //   wx.showLoading({
  //     title: '加载中',
  //   })
  //   //全局
  //   var that = this;
  //   //先获取code
  //   wx.login({
  //     success: function (res) {
  //       // console.log(res)
  //       if (res.code) {
  //         that.code = res.code;
  //         // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
  //         wx.getUserInfo({
  //           success: res => {
  //             // console.log(res)
  //             // 可以将 res 发送给后台解码出 unionId
  //             app.globalData.userInfo = res.userInfo;
  //             that.setData({
  //               userInfo: res.userInfo
  //             })
  //             wx.request({
  //               url: path.getToken(),
  //               data: {
  //                 code: that.code,
  //                 iv: res.iv,
  //                 encryptedData: res.encryptedData
  //                 // ,debug: 1
  //               },
  //               success: function (res) {
  //                 // console.log(res.data);
  //                 wx.hideLoading();
  //                 wx.setStorageSync("token", res.data.data.token);
  //                 that.setData({
  //                   token: res.data.data.token
  //                 });

  //                 if (res.data.data.role) {
  //                   var role = res.data.data.role.split(',')
  //                   //用户角色：1、师傅，2、客户，3、门店
  //                   if (role.indexOf('2') !== -1) { // 如果该用户没有注册客户端，提示要绑定手机号
  //                     wx.reLaunch({
  //                       url: '/pages/index/index',
  //                     })
  //                   }
  //                 }
  //               }
  //             })
  //             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //             // 所以此处加入 callback 以防止这种情况
  //             /*
  //             if (this.userInfoReadyCallback) {
  //               this.userInfoReadyCallback(res)
  //             }
  //             */
  //           }
  //         })
  //       } else {
  //         console.log('登录失败！' + res.errMsg)
  //       }
  //     }
  //   });
  // }
})
