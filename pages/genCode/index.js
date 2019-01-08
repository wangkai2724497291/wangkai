// pages/genCode/index.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    generalization: null,
    realName: '',
    disableBtn: false,
    mobile: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getGenInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 获取formid
  formSubmit: function(e) {
    var that = this
    var getFormId = wxRequest.postRequest(path.getFormId(), {
      formid: e.detail.formId
    });
    getFormId.then(res => {
      // console.log(res)
    })
  },

  realNameChange: function(e) {
    this.setData({
      realName: e.detail.value
    })
  },

  getGenInfo: function () {
    let that = this
    var getGenInfo = wxRequest.getRequest(path.generalizationCode());
    getGenInfo.then(res => {
      if (res.data.status) {
        that.setData({
          generalization: res.data.data.genera,
          mobile: res.data.data.mobile,
          realName: res.data.data.genera ? res.data.data.genera.real_name : ''
        })
      }
    })
  },

  submitGenCode: function() {
    if (this.data.realName === '' && this.data.generalization === null) {
      wx.showToast({
        title: '姓名不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    var that = this

    this.setData({
      disableBtn: true
    }, () => {
      //申请推广码
      var generalizationCode = wxRequest.postRequest(path.generalizationCode(), {
        mobile: this.data.mobile,
        real_name: this.data.realName
      });
      generalizationCode.then(res => {
        if (res.data.status) {
          that.getGenInfo()
        }
        this.setData({
          disableBtn: false
        })
      })
    })
    
  },

  saveQRcode: function() {
    let that =this
    //获取相册授权
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              that.saveImg()
            }
          })
        } else {
          that.saveImg()
        }
      }
    })
  },

  saveImg: function () {
    wx.showLoading({
      title: '正在保存图片...',
    })
    wx.getImageInfo({
      src: this.data.generalization.qrcode,
      success: function (ress) {
        wx.saveImageToPhotosAlbum({
          filePath: ress.path,
          success: function (res) {
            wx.hideLoading()
            wx.showToast({
              title: '保存图片成功，请前往系统相册查看！',
              duration: 2000
            })
          },
          fail: function (res) {
            wx.hideLoading()
            wx.showToast({
              title: '保存失败，请重试！',
              icon: 'none',
              duration: 2000
            })
          }
        })
      },
      fail: function (res) {
        wx.hideLoading()
        wx.showToast({
          title: '获取图片信息错误，请重试！',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  previewImage: function () {
    wx.previewImage({
      urls: [this.data.generalization.qrcode],
      current: this.data.generalization.qrcode
    })
  }
})