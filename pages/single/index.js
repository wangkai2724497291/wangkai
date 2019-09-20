// pages/single/index.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
var { isRegister } = require('../../models/isRegister.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgDomain: path.getImageDomain(),
    bestRecomment: {},
    otherRecomment: [],

    categoryId: 0,
<<<<<<< HEAD
=======
    categoryIds:0,
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    isLoading: true,
    currentPage: 1,
    totalPage: 1,
    showNoMore: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
    this.setData({
      categoryId: options.c_id
=======
    if (options.c_id==21){
      this.setData({
        categoryIds: '家电清洗'
      })
    }
    this.setData({
      categoryId: options.c_id,
      categoryIds: options.c_name,
      
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    }, () => {
      this.getProducts()
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
    if (!this.data.isLoading) {
      if (this.data.currentPage <= this.data.totalPage) {
        this.getProducts()
      }
    }
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
<<<<<<< HEAD
      // console.log(res)
=======
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    })
  },

  search: function (event) {
    if (wx.getStorageSync('token')) {
      if (!isRegister(app.globalData.isRegister, '该操作需要授权手机号！')) return
    }
    wx.navigateTo({
      url: '/pages/search/index?keyword=' + event.detail.value,
    })
  },

  takeOrder: function (e) {
    if (wx.getStorageSync('token')) {
      if (!isRegister(app.globalData.isRegister, '该操作需要授权手机号！')) return
    }
    var url = ''
    if (e.currentTarget.dataset.standard) {
      url = '/pages/appointment/index?id=' + e.currentTarget.dataset.id
    } else {
      url = '/pages/simAppointment/index?id=' + e.currentTarget.dataset.id
    }
    wx.navigateTo({
      url: url,
    })
  },

  getProducts: function() {
    var that = this
<<<<<<< HEAD
    //搜索某服务对应的产品，搜索第一个服务对应的产品，搜索所有产品
=======
    //搜索某服务对应的产品，搜索第一个服务对应的产品，搜索所有产品 
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    var getServiceProduct = wxRequest.postRequest(path.selectServiceProduct(), {
      page: that.data.currentPage,
      num: 10,
      category_id: that.data.categoryId
    });
    getServiceProduct.then(res => {
      if (res.data.status) {
        var otherRecomment = [...that.data.otherRecomment, ...res.data.data.data]
<<<<<<< HEAD
=======
        console.log(otherRecomment)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        if (that.data.currentPage == 1) {
          otherRecomment.shift()

          that.setData({
            bestRecomment: res.data.data.data[0]
          })
        }
<<<<<<< HEAD

=======
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        that.setData({
          otherRecomment: otherRecomment,
          totalPage: Math.ceil(res.data.data.count / 10),
          isLoading: false,
          currentPage: that.data.currentPage + 1,
          showNoMore: that.data.currentPage + 1 > Math.ceil(res.data.data.count / 10) ? true : false
        })
      }
    })
  }
})