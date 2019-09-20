// pages/getCoupon/index.js
<<<<<<< HEAD
=======
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
var app = getApp()
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    city: '厦门',
=======
    city: '',
    adcode: '',
    isLoading: true,
    currentPage: 1,
    totalPage: 1,
    showNoMore: false,
    couponList: [],
    showTip: false,
    showGetCoupon: false,
    couponPrice: 0
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面加载
   */
<<<<<<< HEAD
  onLoad: function (options) {
=======
  onLoad: function(options) {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
<<<<<<< HEAD
  onReady: function () {
=======
  onReady: function() {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39

  },

  /**
   * 生命周期函数--监听页面显示
   */
<<<<<<< HEAD
  onShow: function () {

=======
  onShow: function() {
    if (wx.getStorageSync('token')) {
      if (this.data.city === '') {
        this.setData({
          city: app.globalData.address.selectCity == '' ? app.globalData.address.city : app.globalData.address.selectCity,
          adcode: app.globalData.address.selectAdcode == '' ? app.globalData.address.adcode : app.globalData.address.selectAdcode
        }, () => {
          this.getCouponList()
          this.couponNewInfo()
        })
      } else {
        if (this.data.city !== app.globalData.address.selectCity) {
          this.setData({
            city: app.globalData.address.selectCity == '' ? app.globalData.address.city : app.globalData.address.selectCity,
            adcode: app.globalData.address.selectAdcode == '' ? app.globalData.address.adcode : app.globalData.address.selectAdcode,
            isLoading: true,
            currentPage: 1,
            totalPage: 1,
            showNoMore: false,
            couponList: []
          }, () => {
            this.getCouponList()
          })
        }
      }
    }
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
<<<<<<< HEAD
  onHide: function () {
=======
  onHide: function() {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39

  },

  /**
   * 生命周期函数--监听页面卸载
   */
<<<<<<< HEAD
  onUnload: function () {
=======
  onUnload: function() {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
<<<<<<< HEAD
  onPullDownRefresh: function () {
=======
  onPullDownRefresh: function() {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39

  },

  /**
   * 页面上拉触底事件的处理函数
   */
<<<<<<< HEAD
  onReachBottom: function () {

=======
  onReachBottom: function() {
    if (this.data.isLoading) return
    if (this.data.currentPage > this.data.totalPage) return
    this.getCouponList()
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 用户点击右上角分享
   */
<<<<<<< HEAD
  onShareAppMessage: function () {

=======
  onShareAppMessage: function() {

  },

  // 点击红包提示
  tipTap: function () {
    this.setData({
      showGetCoupon: true
    })
  },

  closeGetCoupon: function () {
    this.setData({
      showGetCoupon: false
    })
  },
  
  getCouponList: function() {
    var that = this
    var getCouponList = wxRequest.postRequest(path.getCouponList(), {
      page: this.data.currentPage,
      page_size: 10,
      adcode: this.data.adcode
    });
    getCouponList.then(res => {
      if (res.data.status) {
        var list = res.data.data.list
        list.map(item => {
          item.coupon_start_time = item.coupon_start_time.substring(0, 10)
          item.coupon_end_time = item.coupon_end_time.substring(0, 10)
        })
        that.setData({
          couponList: [...that.data.couponList, ...list],
          currentPage: that.data.currentPage + 1,
          totalPage: Math.ceil(res.data.data.count / 10),
          isLoading: false,
          showNoMore: that.data.currentPage + 1 > Math.ceil(res.data.data.count / 10) ? true : false
        })
      } else {
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  // 免费领取优惠券
  takeCoupon: function({target: {id, dataset: {index}}}) {
    var that = this
    var takeCoupon = wxRequest.postRequest(path.takeCoupon(), {
      coupon_id: id
    });
    takeCoupon.then(res => {
      if (res.data.status) {
        var couponList = that.data.couponList
        couponList[index].type = 3
        that.setData({
          couponList: couponList
        })
      }
    })
  },

  // 付费优惠券购买
  buyCoupon: function ({ target: { id, dataset: { index } } }) {
    var that = this
    var buyCoupon = wxRequest.postRequest(path.buyCoupon(), {
      coupon_id: id
    });
    buyCoupon.then(res => {
      if (res.data.status === 0) {
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 2000
        })
      } else if (res.data.status === 1) {
        var couponList = that.data.couponList
        couponList[index].type = 3
        that.setData({
          couponList: couponList
        })
        wx.showToast({
          title: res.data.message,
          duration: 2000
        })
      } else if (res.data.status === -1) {
        wx.showModal({
          title: '提示',
          content: res.data.message,
          success: function (modalRes) {
            if (modalRes.confirm) {
              that.recharge(res.data.data.need_pay, id, index)
            }
          }
        })
      }
    })
  },

  recharge: function (money, id, index) {
    var that = this
    var userRechargeInit = wxRequest.postRequest(path.userRechargeInit(), {
      money: money,
      rechargeType: 1
    });
    userRechargeInit.then(res => {
      if(res.data.status) {
        wx.requestPayment({
          timeStamp: res.data.data.timeStamp,
          nonceStr: res.data.data.nonceStr,
          package: res.data.data.package,
          signType: res.data.data.signType,
          paySign: res.data.data.paySign,
          success: function (res) {
            wx.showToast({
              title: '支付成功',
              icon: 'success',
              duration: 2000
            })
            that.buyCoupon({ target: { id: id, dataset: {index: index} }})
          },
          fail: function (res) {
            wx.showToast({
              title: '取消支付',
              icon: 'none',
              duration: 2000
            })
          }
        })
      }
    })
  },

  getCoupon: function () {
    var that = this
    var rightGet = wxRequest.postRequest(path.rightGet());
    rightGet.then(res => {
      if (res.data.status) {
        that.setData({
          showGetCoupon: false,
          showTip: false
        }, () => {
          wx.showToast({
            title: '领取成功',
            duration: 2500
          })
        })
      } else {
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  // 获取优惠券总值信息
  couponNewInfo: function () {
    var that = this
    var couponNewInfo = wxRequest.postRequest(path.couponNewInfo(), {
      adcode: this.data.adcode
    });
    couponNewInfo.then(res => {
      if (res.data.status && res.data.data.get) {
        that.setData({
          couponPrice: res.data.data.price,
          showTip: true
        })
      }
    })
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  }
})