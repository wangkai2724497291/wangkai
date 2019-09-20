// pages/pay/index.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    payCount: app.globalData.payCount.toFixed(2),
=======
    payCount: app.globalData.payCount.toFixed(2),//保留两位小数
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    orderId: '',
    orderSn: '',
    isStandard: 1,
    balance: '0',
    doorFee: '',
    isPaying: false,
    cId: '',
    coupon: { code: '', prices: 0},
<<<<<<< HEAD
    offerPrice: 0
=======
    offerPrice: 0,
    cityid: ''
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
    this.setData({
      payCount: parseFloat(options.count).toFixed(2),
=======
    console.log(options)
    this.setData({
      payCount: parseFloat(options.count).toFixed(2),//解析一个字符串，返回一个浮点数，保留两位小数
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      offerPrice: parseFloat(options.count),
      orderId: options.orderId,
      orderSn: options.orderSn,
      isStandard: parseInt(options.isStandard),
<<<<<<< HEAD
      cId: options.c_id || ''
=======
      cId: options.c_id || '',
      cityid: options.cityid
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    })

    if (options.c_id) {
      this.getCoupon()
    }
  },
<<<<<<< HEAD

=======
  
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    //查询用户信息
    var userinfo = wxRequest.postRequest(path.userinfo());
    userinfo.then(res => {
<<<<<<< HEAD
=======
      console.log(res)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      if (res.data.status) {
        that.setData({
          balance: res.data.data.user_info.balance
        })
      }
    })
<<<<<<< HEAD

    if (app.globalData.pagePay.coupon.code != '') {
      this.setData({
        coupon: app.globalData.pagePay.coupon,
        payCount: (this.data.offerPrice - app.globalData.pagePay.coupon.prices).toFixed(2)
=======
    console.log(this)
    if (app.globalData.pagePay.coupon.code != '') {
      console.log(app)
      this.setData({
        coupon: app.globalData.pagePay.coupon,
        payCount: (this.data.offerPrice - app.globalData.pagePay.coupon.prices).toFixed(2)
      }, () => {
        app.globalData.pagePay.coupon = {
          code: '',
          prices: 0
        }
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      })
    }
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

<<<<<<< HEAD
  // 获取formid
  formSubmit: function (e) {
    var that = this
    var getFormId = wxRequest.postRequest(path.getFormId(), {
      formid: e.detail.formId
    });
    getFormId.then(res => {
      // console.log(res)
    })
  },

=======
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  pay: function () {
    var that = this
    wx.showLoading({
      title: '加载中',
    })
<<<<<<< HEAD
=======
    console.log(this)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    this.setData({
      isPaying: true
    }, () => {
      //小程序微信支付获取支付密钥
<<<<<<< HEAD
=======
      console.log(this)
      console.log(this.data.orderSn)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      var getWxpay = wxRequest.postRequest(path.getWxpay(), {
        order_sn: this.data.orderSn,
        total_fee: this.data.payCount,
        pay_type: 3,
        coupon_code: this.data.coupon.code || null
      });
      getWxpay.then(res => {
<<<<<<< HEAD
        console.log(res);
=======
        console.log(res)
        console.log(that)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        wx.hideLoading()
        if (res.data.status === 1) {
          wx.showModal({
            title: '提示',
            content: res.data.message,
            showCancel: false,
            success: function () {
              if (that.data.isStandard) {//标准订单支付
                app.globalData.orderType = 'excuting'
              }
              wx.reLaunch({
                url: '/pages/orders/index',
              })
            }
          })
        } else if (res.data.status === 2) {
          wx.requestPayment({
            'timeStamp': res.data.data.timeStamp,
            'nonceStr': res.data.data.nonceStr,
            'package': res.data.data.package,
            'signType': 'MD5',
            'paySign': res.data.data.paySign,
            'complete': function (res) {
              // console.log(that.data.isStandard)
              if (that.data.isStandard) {//标准订单支付
                app.globalData.orderType = 'excuting'
                wx.reLaunch({
                  url: '/pages/orders/index',
                })
              } else {//非标准订单同意报价并支付
                wx.navigateBack()
              }
            },
            'fail': function () {
              if (!that.data.isStandard) {
                var cancelPay = wxRequest.postRequest(path.cancelPay());
                cancelPay.then(cancelPayRes => { })
              }
            }
          })
        } else {
          // wx.showToast({
          //   title: res.data.message,
          // })
          wx.showModal({
            title: '错误',
            content: res.data.message,
            showCancel: false,
            success: function () {
              wx.navigateBack()
            }
          })
        }
      })
    })
  },
<<<<<<< HEAD

  gotoCoupon: function () {
    var url = '../serviceCoupon/index?c_id=' + this.data.cId + '&total=' + this.data.offerPrice + '&from=true'
=======
  
  gotoCoupon: function () {                      //cId = 14                       //报价金额：320             
    var url = '../serviceCoupon/index?c_id=' + this.data.cId + '&total=' + this.data.offerPrice + '&from=pay&cityid=' + this.data.cityid  //cityid = 440300
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    wx.navigateTo({
      url: url,
    })
  },

  getCoupon: function () {
    var that = this
    //查询个人优惠券
    var getCoupon = wxRequest.postRequest(path.getCoupon(), {
      page: 1,
<<<<<<< HEAD
      page_size: 100,
      status: 0 //0为未使用
    });
    getCoupon.then(res => {
=======
      page_size: 1000,
      status: 0, //0为未使用 
      city_id: this.data.cityid
    });
    getCoupon.then(res => {
      console.log(res)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      var coupons = res.data.data.list, length = res.data.data.list.length
      var canUse = [], maxSaleOff = 0, finalCoupon = {code: '', prices: 0}

      for (let item of coupons) {
<<<<<<< HEAD
        if (item.service_id.split(',').indexOf(that.data.cId + '') != -1) {
=======
        if (item.service_id.split(',').indexOf(that.data.cId + '') != -1 || item.is_use_product === 1) {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
          if (item.prices <= that.data.payCount) {
            canUse.push(item)
          }
        }
      }

      for (let item of canUse) {
        if (item.prices > maxSaleOff) {
          maxSaleOff = item.prices
          finalCoupon = item
        }
      }
<<<<<<< HEAD

      that.setData({
        coupon: {
          code: finalCoupon.coupon_code,
          prices: finalCoupon.prices
        },
        payCount: (that.data.offerPrice - finalCoupon.prices).toFixed(2)
      })
=======
      console.log(that);
      console.log(finalCoupon)
      if (that.data.offerPrice == 980){
        that.setData({
          coupon: {
            code: finalCoupon.coupon_code,
            prices: finalCoupon.prices
          },
          payCount: that.data.offerPrice.toFixed(2),
          offerPrice: that.data.offerPrice
        })
      }else{
        that.setData({
          coupon: {
            code: finalCoupon.coupon_code,
            prices: finalCoupon.prices
          },
          payCount: (that.data.offerPrice - finalCoupon.prices).toFixed(2),
          // payCount: that.data.offerPrice.toFixed(2)
          offerPrice: that.data.offerPrice
        })
      }
      
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    })
  },

  // 获取formid
  formSubmit: function (e) {
<<<<<<< HEAD
=======
    console.log(e)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    var that = this
    var getFormId = wxRequest.postRequest(path.getFormId(), {
      formid: e.detail.formId
    });
<<<<<<< HEAD
=======
    console.log(getFormId)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    getFormId.then(res => {
      // console.log(res)
    })
  }
})