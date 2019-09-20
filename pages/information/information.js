// pages/information/information.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
var { isRegister } = require('../../models/isRegister.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fourthList: [],
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },


  selectThirdStep: function (e) {
    var that = this
    var productLabels = wxRequest.postRequest(path.productLabels(), {
      product_id: e.target.id
    });
    productLabels.then(res => {
      if (res.data.status) {
        that.setData({
          thirdIndex: e.currentTarget.dataset.i,
          productId: e.target.id,
          fourthList: res.data.data.list
        })
      }
    })
    // this.setData({
    //   thirdIndex: e.currentTarget.dataset.i,
    //   productId: e.target.id
    // })
  },



  getSelectedLabel: function () {
    let splList = []
    this.data.fourthList.map(item => {
      let child_labels = []
      item.child_labels.map(label => {
        if (label.checked) {
          child_labels.push(label)
        }
      })
      item.child_labels = child_labels
      if (item.checked || item.child_labels.length) {
        splList.push(item)
      }
    })

    return splList
  },

  addToShopcart: function () {
    var that = this
    var post_data = {
      p_id: this.data.thirdList[this.data.thirdIndex - 1].p_id,
      is_standard: 0,
      labels: JSON.stringify(this.getSelectedLabel())
    };

    var addToShopcart = wxRequest.postRequest(path.addToShopcart(), post_data);
    addToShopcart.then(res => {
      if (res.data.status) {
        wx.hideLoading()
        wx.showToast({
          title: '添加成功！',
          duration: 2000
        })
        that.cartNum()
      }
    })
  },




  gotoSimAppointment: function (options) {
    console.log(this)
    app.globalData.pageCustomized.fourthList = this.data.fourthList
    console.log(this)
    console.log(this.options.name);
    wx.navigateTo({
      url: '../simAppointment/index?id=' + this.options.id + '&name=' + this.options.name
    })
  },


  cartNum: function () {
    var that = this
    var cartNum = wxRequest.postRequest(path.cartNum(), {
      is_standard: 0
    });

    cartNum.then(res => {
      console.log(res)
      if (res.data.status) {
        that.setData({
          shopCartCount: res.data.data.count
        })
      }
    })
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
  },


  verify: function ({ currentTarget: { dataset: { type } } }) {
    if (wx.getStorageSync('token')) {
      if (!isRegister(app.globalData.isRegister, '该操作需要授权手机号！')) return
    }

    // if (!this.data.thirdIndex) {
    //   wx.showModal({
    //     title: '提示',
    //     content: '您还没有选择完整的条件！',
    //     showCancel: false
    //   })
    //   return
    // }

    type === 'shop' ? this.addToShopcart() : this.gotoSimAppointment()
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
    this.cartNum()
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