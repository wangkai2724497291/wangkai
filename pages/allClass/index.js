// pages/allClass/index.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotWord: [],
    tabActive: 1,
    serverList: [],
    products: []
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
    var that = this
    //获取顶级服务类对应热门服务 或者 所有子服务
    var selectServiceCategory = wxRequest.postRequest(path.selectServiceCategory(), {
      page: 1,
      num: 1000,
      all: 1
    });
    selectServiceCategory.then(res => {
      if (res.data.status) {
        that.setData({
          products: [],
          serverList: res.data.data.list
        }, () => {
          // 获取服务的产品
          that.getProducts()
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // var that = this
    // var getPostsRequest = wxRequest.postRequest(path.hotSearch());
    // getPostsRequest.then(res => {
    //   if (res.data.status) {
    //     that.setData({
    //       hotWord: res.data.data.list
    //     })
    //   }
    // })
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

  search: function (event) {
    wx.navigateTo({
      url: '/pages/search/index?keyword=' + event.detail.value,
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

  // 手风琴切换
  changeTab: function (e) {
    var isSetting = true
    if (this.data.tabActive == e.target.dataset.tab) {
      this.setData({
        'tabActive': 0
      })
    } else {
      this.setData({
        'tabActive': e.target.dataset.tab
      })
    }
  },

  gotoProduct: function (e) {
    wx.navigateTo({
      url: '../repairDetail/index?id=' + e.currentTarget.dataset.id + '&standard=' + e.currentTarget.dataset.standard
    })
  },

  // 获取单项服务下的产品
  getProducts: function () {
    wx.showLoading({
      title: '正在加载...',
      mask: true
    })
    var that = this
    //搜索某服务对应的产品，搜索第一个服务对应的产品，搜索所有产品
    var selectServiceProduct = wxRequest.postRequest(path.selectServiceProduct(), {
      page: 1,
      num: 100,
      category_id: that.data.serverList[that.data.products.length].c_id
    });
    selectServiceProduct.then(res => {
      var prods = that.data.products
      prods.push(res.data.data.data)
      that.setData({
        products: prods
      }, () => {
        if (that.data.products.length < that.data.serverList.length) {
          that.getProducts()
        } else {
          wx.hideLoading()
        }
      })
    })
  }
})