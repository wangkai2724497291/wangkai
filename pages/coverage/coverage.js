// pages/coverage/coverage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 省市区三级联动初始化
    region: [],
  },

  // 选择省市区函数
  changeRegin(e) {
    console.log(e)
    this.setData({ region: e.detail.value });
  },

  cancelOrder:function(){
    wx.showModal({
      title: '提示',
      content: '服务区域只能选择一个，一旦选择将无法更改！',
      confirmText:'确定',
      cancelText:'取消',
      cancelColor:'black',
      confirmColor:'#0FBF97',
      success(res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/pay/index?orderId=1045&orderSn=2019071299985152&count=980&isStandard=1&c_id=54&cityid=440300'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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