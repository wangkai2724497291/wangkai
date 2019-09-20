// pages/search/index.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgDomain: path.getImageDomain(),
    bestRecomment: {},
    otherRecomment: [],

    keyword: '',
    isLoading: true,
    currentPage: 1,
    totalPage: 1,
    showNoMore: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      keyword: options.keyword
    }, () => {
      this.getSearchResult()
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
        this.getSearchResult()
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  
  search: function (event) {
    this.setData({
      bestRecomment: {},
      otherRecomment: [],
      keyword: event.detail.value,
      isLoading: true,
      currentPage: 1,
      totalPage: 1,
      showNoMore: false
    }, () => {
      this.getSearchResult()
    })
  },

  takeOrder: function (e) {
    var url = ''
<<<<<<< HEAD
=======
    console.log(e)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    if (e.currentTarget.dataset.standard) {
      url = '/pages/appointment/index?id=' + e.currentTarget.dataset.id
    } else {
      url = '/pages/simAppointment/index?id=' + e.currentTarget.dataset.id
    }
    wx.navigateTo({
      url: url,
    })
  },

  getSearchResult: function() {
    var that = this
    //搜索产品
    var searchProduct = wxRequest.postRequest(path.searchProduct(), {
      page: that.data.currentPage,
      pagesize: 10,
      search_text: that.data.keyword
    });
    searchProduct.then(res => {
      // console.log(res)
      if (res.data.status) {
        var otherRecomment = [...that.data.otherRecomment, ...res.data.data.list]
        if (that.data.currentPage == 1) {
          otherRecomment.shift()

          if (res.data.data.list.length) {
            that.setData({
              bestRecomment: res.data.data.list[0]
            })
          }
        }

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