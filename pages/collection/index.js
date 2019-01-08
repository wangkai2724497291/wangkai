// pages/collection/index.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    currentPage: 1,
    totalPage: 1,
    showNoMore: false,
    collections: []
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
    this.getCollection()
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
        this.getCollection()
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  takeOrder: function (e) {
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

  getCollection: function () {
    var that = this
    //查询收藏
    var getCollection = wxRequest.postRequest(path.getCollection(), {
      page: this.data.currentPage,
      page_size: 10
    });
    getCollection.then(res => {
      if (res.data.status) {
        that.setData({
          collections: [...that.data.collections, ...res.data.data.list],
          currentPage: that.data.currentPage + 1,
          totalPage: Math.ceil(res.data.data.count / 10),
          isLoading: false,
          showNoMore: that.data.currentPage + 1 > Math.ceil(res.data.data.count / 10) ? true : false
        })
      }
    })
  }
})