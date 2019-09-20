// pages/genStream/index.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    isLoading: true,
    currentPage: 1,
    totalPage: 1,
    showNoMore: false
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
    this.getList();
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
    if (this.data.isLoading) return
    if (this.data.currentPage > this.data.totalPage) return
    this.getList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getList: function () {
    var that = this
    wxRequest.postRequest(path.getPromotionList(), {
      page: that.data.currentPage,
      page_size: 20
    }).then(res => {
<<<<<<< HEAD
=======
      console.log(res);
      console.log(that)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      if (!res.data.status) return
      that.setData({
        list: [...that.data.list, ...res.data.data.list],
        totalPage: Math.ceil(res.data.data.count / 20),
        isLoading: false,
        currentPage: that.data.currentPage + 1,
        showNoMore: that.data.currentPage + 1 > Math.ceil(res.data.data.count / 20) ? true : false
      })
    })
  }
})