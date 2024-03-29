// pages/code/code.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  getScancode: function () {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => { 
        console.log(res)
        if (res.result.indexOf("getMasterCardInfo") == -1){
          wx.showToast({
            title: '查找失败',
            icon: 'none',
            duration: 2000
          })
          return
        }
        var str = res.result;
        str = str.replace('?', "&");
        console.log(str)
        wx.navigateTo({
          url: '../master/master?title=' + str
        })
        var result = res.result;
        _this.setData({
          result: result,
        })
      }
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})