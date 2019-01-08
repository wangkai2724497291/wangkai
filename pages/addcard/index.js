// pages/addcard/index.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    account: '',
    array: [],
    index: 0, //picker插件使用
    isAdding: false,
    btnText: '保存'
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
    this.getBankList()
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
  receive: function (e) {
    console.log(e)
  },
  bindPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  nameInput: function(e) {
    this.setData({
      name: e.detail.value
    })
  },

  accountInput: function (e) {
    this.setData({
      account: e.detail.value
    })
  },

  getBankList: function () {
    var that = this
    //获取通用银行卡列表
    var getBankList = wxRequest.postRequest(path.getBankList());
    getBankList.then(res => {
      if (res.data.status) {
        var arr = []
        for (var item in res.data.data) {
          arr.push(item)
        }

        that.setData({
          array: arr
        })
      }
    })
  },

  addCard: function() {
    if (!this.data.name) {
      wx.showToast({
        title: '您还未填写持卡人姓名',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (!this.data.account) {
      wx.showToast({
        title: '您还未填写银行卡号',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    var that = this
    that.setData({
      isAdding: true,
      btnText: '保存中...'
    }, () => {
      //添加银行卡
      var addBank = wxRequest.postRequest(path.addBank(), {
        bank_person: that.data.name,
        bank_code: that.data.account,
        bank_name: that.data.array[that.data.index]
      });
      addBank.then(res => {
        if (res.data.status) {
          wx.showToast({
            title: '添加银行卡成功',
            icon: "success"
          })
          that.setData({
            name: '',
            account: '',
            index: 0,
            isAdding: false,
            btnText: '保存'
          }, () => {
            wx.navigateBack()
          })
        } else {
          that.setData({
            isAdding: false,
            btnText: '保存'
          })
          wx.showToast({
            title: res.data.message,
            icon: "none"
          })
        }
      })
    })
  }
})