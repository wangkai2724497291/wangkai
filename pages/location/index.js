// pages/location/index.js
var app = getApp()
// 引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
// 实例化API核心类
var demo = new QQMapWX({
  key: 'LFJBZ-KAUCO-N4XWA-S535O-7F3D5-OWFKP' // 必填
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: '',
    locationAddr: '',
    searchStatus: false,
    result: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
<<<<<<< HEAD
  
=======

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
<<<<<<< HEAD
    this.setData({
      locationAddr: app.globalData.address.allAddr,
=======
    console.log(app)
    this.setData({
      locationAddr: app.globalData.address.recommend,
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      city: app.globalData.address.selectCity == '' ? app.globalData.address.city : app.globalData.address.selectCity
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
<<<<<<< HEAD
  
=======

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
<<<<<<< HEAD
  
=======

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
<<<<<<< HEAD
  
=======

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
<<<<<<< HEAD
  
=======

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
<<<<<<< HEAD
  
=======

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  getLoaction: function () {
    var that = this
    that.setData({
      locationAddr: '重新定位中...'
    })
    app.getLoaction(function () {
<<<<<<< HEAD
      that.setData({
        locationAddr: app.globalData.address.allAddr
=======
      console.log(app)
      that.setData({
        locationAddr: app.globalData.address.recommend
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      })
    })
  },

  searchChange: function (e) {
    var that = this
<<<<<<< HEAD
=======
    console.log(e);
    console.log(that);
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    demo.getSuggestion({
      keyword: e.detail.value,
      region: that.data.city,
      policy: 1,
      success: function (res) {
<<<<<<< HEAD
=======
        console.log(res)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        that.setData({
          result: res.data
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    });
  },

  // 搜索栏聚焦
  searchFocus: function () {
    this.setData({
      searchStatus: true
    })
  },

  // 搜索栏失去焦点
  searchBlur: function () {
    this.setData({
      searchStatus: false
    })
  },

  selectAddr: function (e) {
    var obj = {}
    var data = e.currentTarget.dataset
    obj.title = data.title
    obj.addr = data.addr
    obj.province = data.province
    obj.city = data.city
    obj.area = data.area
    obj.adcode = data.adcode
<<<<<<< HEAD
    obj.location = {lat: data.lat, lng: data.lng}
=======
    obj.location = { lat: data.lat, lng: data.lng }
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    app.globalData.pageLocation = obj
    wx.navigateBack()
  },

  selectLocationAddr: function () {
<<<<<<< HEAD
    var obj = {}
    var data = app.globalData.address
    obj.title = data.street_number
    obj.addr = data.street_number
    obj.province = data.province
    obj.city = data.city
=======
    console.log(app)
    var obj = {}
    var data = app.globalData.address
    // obj.title = data.street_number
    obj.title = data.recommend
    obj.addr = data.street_number
    obj.province = data.province
    obj.city = data.city
    obj.recommend = data.recommend
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    obj.area = data.area
    obj.adcode = data.adcode
    obj.location = data.location
    app.globalData.pageLocation = obj
    wx.navigateBack()
  }
})