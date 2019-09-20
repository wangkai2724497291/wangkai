// pages/activate/activate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 省市区三级联动初始化
    region: [],
    cardid:[],
    codeid:[],
  },

  // 选择省市区函数
  changeRegin(e) {
    console.log(e)
    this.setData({ region: e.detail.value });
  },

  card:function(e){
    console.log(e)
    this.setData({
      cardid:e.detail.value,
    })
  },
  code:function(e){
    this.setData({
      codeid: e.detail.value
    })
  },

  cancelOrder: function (e) {
    console.log(e);
    console.log(this);
    if (!this.data.cardid.length) {
      wx.showToast({
        title: '请输入卡号',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (!this.data.codeid.length) {
      wx.showToast({
        title: '请输入激活码',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (!this.data.region.length) {
      wx.showToast({
        title: '请选择服务区域',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    
    wx.redirectTo({
      url: '/pages/couponjitk/couponjitk'
  })    
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})