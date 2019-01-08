// pages/cards/index.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banks: [],
    name: '',
    code: '',
    endNum: ''
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
    this.getBanks()
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

  selectBank: function (e) {
    var params = JSON.parse(e.detail.value)

    var obj = {}
    obj.name = params.name
    obj.code = params.code
    obj.end = params.end

    app.globalData.pageCards = obj

    this.setData({
      name: params.name,
      code: params.code,
      endNum: params.end
    })
  },

  getBanks: function () {
    var that = this
    //获取用户银行卡列表
    var userBankList = wxRequest.postRequest(path.userBankList());
    userBankList.then(res => {
      if (res.data.status) {
        if (JSON.stringify(res.data.data) !== '{}') {
          var list = res.data.data.list
          if (list.length) {
            list.map((item, index) => {
              index == 0 ? item.checked = 'true' : null
              item.endNum = item.bank_code.substr(item.bank_code.length - 4)
            })

            that.setData({
              banks: list,
              name: list[0].bank_name,
              code: list[0].bank_code,
              endNum: list[0].endNum
            })

            var obj = {}
            obj.name = list[0].bank_name
            obj.code = list[0].bank_code
            obj.end = list[0].endNum

            app.globalData.pageCards = obj
          }
        }
      }
    })
  }
})