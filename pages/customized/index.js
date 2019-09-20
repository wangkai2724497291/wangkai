// pages/customized/index.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
var { isRegister } = require('../../models/isRegister.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    firstList: [],
    secondList: [],
    thirdList: [],
    firstIndex: 0,
    secondIndex: 0,
    thirdIndex: 0,
    productId: null
=======
    login: true,
    firstList: [],
    secondList: [],
    thirdList: [],
    fourthList: [],
    firstIndex: 0,
    secondIndex: 0,
    thirdIndex: 0,
    fourthIndex: 0,
    fifthIndex: 0,
    productId: null,
    shopCartCount: 0,
    tab:"",
    logs:""
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //获取一级分类
    var selectServiceGroup = wxRequest.postRequest(path.selectServiceGroup(), {
      up: 1
    });
    selectServiceGroup.then(res => {
<<<<<<< HEAD
=======
      console.log(res);
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      if (res.data.status) {
        that.setData({
          firstList: res.data.data.list
        })
      }
    })
  },

<<<<<<< HEAD
=======
  login: function () {
    this.setData({
      login: true,
      logs:0
    });
    if (this.data.logs == 0) {
      this.setData({
        tab: 0,
      })
      // return
    }
    console.log(this.data.tab)
  },
  register: function () {
    
      this.setData({
        login: false,
        tab: 1,
      });
    console.log(this.data.tab)
  },

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
<<<<<<< HEAD

=======
    
    this.cartNum()
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
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

  selectFirstStep: function (e) {
<<<<<<< HEAD
=======
    console.log(e)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    var that = this
    var selectServiceCategory = wxRequest.postRequest(path.selectServiceCategory(), {
      g_id: e.target.id,
      all: 1
    });
    selectServiceCategory.then(res => {
<<<<<<< HEAD
=======
      console.log(res)
      console.log(e)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      if (res.data.status) {
        that.setData({
          firstIndex: e.currentTarget.dataset.i,
          secondList: res.data.data.list,
          secondIndex: 0,
          thirdIndex: 0,
<<<<<<< HEAD
=======
          fourthIndex: 0
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        })
      }
    })
  },

  selectSecondStep: function (e) {
    var that = this
    var selectServiceProduct = wxRequest.postRequest(path.selectServiceProduct(), {
      category_id: e.target.id,
      up:1
    });
    selectServiceProduct.then(res => {
<<<<<<< HEAD
=======
      console.log(res)
      console.log(e)
      // = "家通卡套餐"
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      if (res.data.status) {
        that.setData({
          secondIndex: e.currentTarget.dataset.i,
          thirdList: res.data.data.data,
          thirdIndex: 0,
<<<<<<< HEAD
=======
          fourthIndex: 0
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        })
      }
    })
  },

  selectThirdStep: function (e) {
<<<<<<< HEAD
    this.setData({
      thirdIndex: e.currentTarget.dataset.i,
      productId: e.target.id
    })
  },

  gotoSimAppointment: function () {
    if (wx.getStorageSync('token')) {
      if (!isRegister(app.globalData.isRegister, '该操作需要授权手机号！')) return
    }
    wx.navigateTo({
      url: '../simAppointment/index?id=' + this.data.productId
=======
    console.log(e)
    var that = this
    var productLabels = wxRequest.postRequest(path.productLabels(), {
      product_id: e.target.id
    });
    productLabels.then(res => {
      console.log(res)
      if (res.data.status) {
        that.setData({
          thirdIndex: e.currentTarget.dataset.i,
          productId: e.target.id,
          fourthList: res.data.data.list
        })
      }
    })
  },

  fifthTap: function ({ currentTarget: { dataset: { id, index, idx } }}) {
    console.log(this)
    let list = this.data.fourthList
    if (!list[index].child_labels[idx].checked) {
      list[index].checked = true
    }
    list[index].child_labels[idx].checked = !list[index].child_labels[idx].checked

    this.setData({
      fourthList: list
    })
  },

  verify: function ({ currentTarget: { dataset: { type } } }) {
    if (wx.getStorageSync('token')) {
      if (!isRegister(app.globalData.isRegister, '该页面需要授权手机号\n前往首页点击授权登录！')) return
    }

    if (!this.data.thirdIndex) {
      wx.showModal({
        title: '提示',
        content: '您还没有选择完整的条件！',
        showCancel: false
      })
      return
    }

    type === 'shop' ? this.addToShopcart() : this.gotoSimAppointment()
  },

  getSelectedLabel: function () {
    let splList = []
    this.data.fourthList.map(item => {
      let child_labels = []
      item.child_labels.map(label => {
        if (label.checked) {
          child_labels.push(label)
        }
      })
      console.log(label)
      item.child_labels = child_labels
      if (item.checked || item.child_labels.length) {
        splList.push(item)
      }
    })

    return splList
  },

  addToShopcart: function () {
    var that = this
    var post_data = {
      p_id: this.data.thirdList[this.data.thirdIndex - 1].p_id,
      is_standard: 0,
      labels: JSON.stringify(this.getSelectedLabel())
    };

    var addToShopcart = wxRequest.postRequest(path.addToShopcart(), post_data);
    addToShopcart.then(res => {
      console.log(res);
      if (res.data.status) {
        wx.hideLoading()
        wx.showToast({
          title: '添加成功！',
          duration: 2000
        })
        that.cartNum()
      }
    })
  },

  fourthCheck: function ({currentTarget: {dataset: {index}}}) {
    let fourthList = this.data.fourthList
    fourthList[index].checked = !fourthList[index].checked

    this.setData({
      fourthList
    })
  },

  gotoSimAppointment: function () {
    console.log(this)
    app.globalData.pageCustomized.fourthList = this.data.fourthList
    console.log(this)
    console.log(this.data.tab)
    wx.navigateTo({
      url: '../information/information?id=' + this.data.productId +'&name='+this.data.tab
    })
    
  },

  cartNum: function () {
    var that = this
    var cartNum = wxRequest.postRequest(path.cartNum(), {
      is_standard: 0
    });

    cartNum.then(res => {
      console.log(res)
      if (res.data.status) {
        that.setData({
          shopCartCount: res.data.data.count
        })
      }
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    })
  },

  // 获取formid
  formSubmit: function (e) {
<<<<<<< HEAD
=======
    console.log(e)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    var getFormId = wxRequest.postRequest(path.getFormId(), {
      formid: e.detail.formId
    });
    getFormId.then(res => {
      // console.log(res)
    })
  }
})