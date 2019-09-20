// pages/user/index.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
import regeneratorRuntime from '../../utils/runtime.js'
var {isRegister} = require('../../models/isRegister.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    avatar: '',
    nickName: '',
    couponNum: 0,
    collecitionNum: 0,
    serviceTel: '',
<<<<<<< HEAD
    generalization: null
=======
    generalization: null,
    reCode: '',
    
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
=======
    console.log(app)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    this.setData({
      avatar: app.globalData.userInfo.avatarUrl,
      nickName: app.globalData.userInfo.nickName,
      serviceTel: app.globalData.serviceTel
    })
<<<<<<< HEAD
=======
    console.log(app)
  },


/**
 * 二维码
 */
  getScancode: function () {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        console.log(res)
        if (res.result.indexOf("getMasterCardInfo") == -1) {
          wx.showToast({
            title: '查找失败',
            icon: 'none',
            duration: 2000
          })
          return
        }
        var str = res.result;
        str = str.replace('?', "&");
        console.log(str)
        wx.navigateTo({
          url: '../master/master?title=' + str
        })
        var result = res.result;
        _this.setData({
          result: result,
        })
      }
    })

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

<<<<<<< HEAD
=======
  // 登录
  // login:function(){
  //   wx.navigateTo({
  //     url: '/pages/login/index'
  //   })
  // },

  // 退出登录
  logout:function(e){
    wx.showModal({
      title: '提示',
      content: '您真的要退出登录吗？',
      confirmText: '确定',
      cancelText: '取消',
      cancelColor: 'red',
      confirmColor: 'red',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

    console.log(app);
    console.log(this)
    console.log(e)
  },

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (wx.getStorageSync('token')) {
<<<<<<< HEAD
      if (!isRegister(app.globalData.isRegister, '该页面需要授权手机号！')) return
=======
      if (!isRegister(app.globalData.isRegister, '该页面需要授权手机号\n前往首页点击授权登录！')) return
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    }
    var that = this
    //查询用户信息
    var userinfo = wxRequest.postRequest(path.userinfo());
    userinfo.then(res => {
      if (res.data.status) {
        that.setData({
          userInfo: res.data.data.user_info,
          collecitionNum: res.data.data.colection_info.length,
          generalization: res.data.data.generalization
        })
      }
    })

    that.getCoupon()
<<<<<<< HEAD
=======
    that.getReCode()
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
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
  
  },

  // 打电话
  phoneCall: function () {
    const that = this
    wx.makePhoneCall({
      phoneNumber: that.data.serviceTel
    })
  },

<<<<<<< HEAD
=======
  // 二维码
  twocode: function () {
   
    wx.navigateTo({
      url: '/pages/code/code',
    })
  },

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  gotoOrder: function (e) {
    app.globalData.orderType = e.currentTarget.dataset.type
    wx.reLaunch({
      url: '/pages/orders/index'
    })
  },

  getCoupon: async function () {
    //查询个人优惠券
    var getCoupon = await wxRequest.postRequest(path.getCoupon(), {
      page: 1,
      page_size: 10,
      status: 0
    });
<<<<<<< HEAD
=======
    
    console.log(getCoupon)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    this.setData({
      couponNum: getCoupon.data.data.count
    })
  },

  previewImage: function () {
    wx.previewImage({
      urls: [this.data.generalization.qrcode],
      current: this.data.generalization.qrcode
    })
<<<<<<< HEAD
=======
  },

  getReCode: function () {
    var that = this
    var getRememberNo = wxRequest.postRequest(path.getRememberNo())
    getRememberNo.then(res => {
      if (res.data.status) {
        that.setData({
          reCode: res.data.data.code
        })
      }
    })
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  }
})