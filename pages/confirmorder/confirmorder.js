// pages/confirmorder/confirmorder.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    phone:"",
    address:"",
    content:"",
    coupon: { code: '', prices: 0 },
    num:'',
    isPaying: false,
    discount:0,
  },

  /**
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {
    this.setData({
      name : options.name,
      phone : options.phone,
      address : options.address,
      content: options.content,
      NameInputs: options.NameInputs,
      NameInput: options.NameInput,
      // payCount: (options.NameInput - app.globalData.pagePay.coupon.prices).toFixed(2),
      payCount: options.NameInputs,
      pid: options.pid,
      indent: options.indent,
      discount: options.discount,
    })
  },

  typeChange:function(){
  },

// 优惠券
  gotoCoupon: function () {         
    // wx.navigateTo({
    //   url: '../serviceCoupon/index?c_id= + 14&total= 320&from=pay&cityid= 440300',
    // })
  },

//支付
  pay: function () {
    var that = this
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      isPaying: true
    }, () => {
      //小程序微信支付获取支付密钥
      var getWxpay = wxRequest.postRequest(path.getWxpay(), {
        order_sn: this.data.indent,
        total_fee: this.data.payCount,
        pay_type: 3,
        coupon_code: this.data.discount || null
      });
      getWxpay.then(res => {
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
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (app.globalData.pagePay.coupon.code != '') {
      this.setData({
        coupon: app.globalData.pagePay.coupon,
        payCount: (this.data.NameInput - app.globalData.pagePay.coupon.prices).toFixed(2)
      }, () => {
        app.globalData.pagePay.coupon = {
          code: '',
          prices: 0
        }
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

   // 获取formid
  formSubmit: function (e) {
    var that = this
    var getFormId = wxRequest.postRequest(path.getFormId(), {
      formid: e.detail.formId
    });
    getFormId.then(res => {
      // console.log(res)
    })
  }
})