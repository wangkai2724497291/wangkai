// pages/addAddr/index.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
var app = getApp()
// 引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
// 实例化API核心类
var demo = new QQMapWX({
  key: 'LFJBZ-KAUCO-N4XWA-S535O-7F3D5-OWFKP' // 必填
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    phone: '',
    addrObj: {},
    addrDetail: '',
    editAddr: {},
    editAddrId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
=======
    console.log(app)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    if (options.edit === 'true') {
      wx.setNavigationBarTitle({
        title: '编辑地址'
      })

      let addr = app.globalData.editAddr
      let obj = {}
<<<<<<< HEAD
      obj.title = addr.province + addr.city + addr.area
=======
      obj.title = addr.province + addr.city + addr.area + addr.recommend
      obj.recommend = addr.recommend
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      obj.province = addr.province
      obj.city = addr.city
      obj.area = addr.area
      obj.adcode = addr.adcode
      obj.location = { lat: addr.lat, lng: addr.lng }
      obj.address_id = addr.address_id
<<<<<<< HEAD
=======
      // console.log(app)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      this.setData({
        name: app.globalData.editAddr.username,
        phone: app.globalData.editAddr.mobile,
        addrObj: obj,
        editAddr: app.globalData.editAddr,
        addrDetail: addr.address,
        editAddrId: addr.address_id
      })
<<<<<<< HEAD
=======

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
<<<<<<< HEAD
    
=======
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
<<<<<<< HEAD
=======
    console.log(app)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    if (app.globalData.pageLocation.title) {
      this.setData({
        addrObj: app.globalData.pageLocation
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
<<<<<<< HEAD
  
=======

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
<<<<<<< HEAD
  
=======

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
<<<<<<< HEAD
  
=======

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
<<<<<<< HEAD
  
=======

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
<<<<<<< HEAD
  
=======

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  inputChange: function (e) {
    if (e.target.id == 'name') {
      this.setData({
        name: e.detail.value
      })
    } else if (e.target.id == 'phone') {
      this.setData({
        phone: e.detail.value
      })
    } else if (e.target.id == 'addrDetail') {
      this.setData({
        addrDetail: e.detail.value
      })
    }
  },

  verify: function () {
    if (this.data.name === '') {
      wx.showToast({
        title: '联系人不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if (this.data.phone === '') {
      wx.showToast({
        title: '手机号不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    var RegCellPhone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
    if (!RegCellPhone.test(this.data.phone)) {
      wx.showToast({
        title: '手机号有误，请重新输入！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if (!this.data.addrObj.title) {
      wx.showToast({
        title: '服务地址不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }

    var that = this
<<<<<<< HEAD
=======
    console.log(this)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    if (this.data.addrDetail && this.data.addrObj.title != app.globalData.address.allAddr) {
      // 通过地址获取坐标
      demo.geocoder({
        address: this.data.addrObj.province + this.data.addrObj.city + this.data.addrObj.area + this.data.addrObj.title + this.data.addrDetail,
        success: function (res) {
          var obj = that.data.addrObj
          obj.location = res.result.location;
          that.setData({
            addrObj: obj
          }, () => {
            that.addAddress()
          })
        },
        fail: function (res) {
          console.log(res);
        },
        complete: function (res) {
          // console.log(res);
        }
      });
    } else {
      that.addAddress()
<<<<<<< HEAD
    }    
=======
    }
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  addAddress: function () {
    var that = this
    //新增用户地址or更新用户地址
    var addr = that.data.addrObj
    console.log(addr)
<<<<<<< HEAD
=======
    console.log(that)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    var addAddr = wxRequest.postRequest(path.addAddr(), {
      username: that.data.name,
      mobile: that.data.phone,
      province: addr.province,
      city: addr.city,
      area: addr.area,
      lng: addr.location.lng,
      lat: addr.location.lat,
      adcode: addr.adcode,
      address_id: this.data.editAddrId ? this.data.editAddrId : null,
      address: addr.address_id ? that.data.addrDetail : (that.data.addrDetail ? addr.title + that.data.addrDetail : addr.title)
    });
    addAddr.then(res => {
<<<<<<< HEAD
      // console.log(res)
=======
      console.log(res)
      console.log(that)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      if (res.data.status) {
        app.globalData.pageLocation = {}
        wx.navigateBack()
      } else {
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 3000
        })
      }
    })
  },

  cancle: function () {
    app.globalData.editAddr = {}
    wx.navigateBack();
  },

  // 获取formid
  formSubmit: function (e) {
    var that = this
    var getFormId = wxRequest.postRequest(path.getFormId(), {
      formid: e.detail.formId
    });
<<<<<<< HEAD
=======

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    getFormId.then(res => {
      // console.log(res)
    })
  }
})