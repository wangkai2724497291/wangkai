// pages/serviceDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderInfo: {
      id: '18053017370001',
      status: '服务中',
      title: '油烟机清洗',
      time: '2018-05-29 下午',
      name: '张三',
      phone: '18541254563',
      address: '厦门集美区软件园三期A区02栋5楼501室',
      price: '288.00',
      coupon: '5.00',
      pay: '283.00'
    },
    evaluateInfo: [
      {
        star1: 5,
        star2: 5,
        star3: 5,
        comment: '安装很仔细认真，值得推荐！安装很仔细认真，值得推荐！安装很仔细认真，值得推荐！安装很仔细认真，值得推荐！',
        imgUrls: [
          '../../img/evaluate1.jpg',
          '../../img/evaluate2.jpg',
          '../../img/evaluate3.jpg'
        ]
      }
    ]
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
  
  },

  // 图片预览
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: e.currentTarget.dataset.urls // 需要预览的图片http链接列表
    })
  }
})