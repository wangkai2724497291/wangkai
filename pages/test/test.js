// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var this_data = { "token": "" };
      this_data.token = wx.getStorageSync('token');

      wx.request({
        url: 'https://www.moonvila.com/mini_user/service/select_sec_category',
        data:this_data,
        method:'post',
        header: {
          'Content-Type': 'application/json',
          'app-ver': '1.6'
        },
        success:function(res) {
          console.log(res.data);
        },
        error:function(res) {
          console.log("error....");
        },
        complete:function(res) {
          console.log("complete...");

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