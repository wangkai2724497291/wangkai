//app.js
var path = require('./utils/api.js');

var wxRequest = require('./utils/wxRequest.js')
// 引入SDK核心类
var QQMapWX = require('./utils/qqmap-wx-jssdk.min.js');
// 实例化API核心类
var map = new QQMapWX({
<<<<<<< HEAD
  key: 'LFJBZ-KAUCO-N4XWA-S535O-7F3D5-OWFKP' // 必填
=======
  // key: 'LFJBZ-KAUCO-N4XWA-S535O-7F3D5-OWFKP' // 必填
  key: 'RXXBZ-JZNCD-JPF4H-P5AZE-7UKYT-Z7F2B'
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
});
App({
  globalData: {
    isRegister: false,
    userInfo: "",
    userId: '',
    js_code: "",
    openid: "",
    session_key: "",
    payCount: 0,
    address: {
      province: '',
      city: '',
      area: '',
      allAddr: '',
      location: {},
      street_number: '',
      selectCity: '',
<<<<<<< HEAD
      adcode: ''
=======
      selectAdcode: '',
      adcode: '',
      recommend:''
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    },
    serviceTel: '',
    pageCards: {},
    pageLocation: {},
    pageAddress: {},
    pageAppointment: {
      productId: '',
      typeData: [],
      specData: [],
<<<<<<< HEAD
      
=======
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      count: 1,
      startAddr: '',
      endAddr: '',
      date: '',
      time: '',
<<<<<<< HEAD
      coupon: {
        id: '',
        count: 0
      },
=======
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      msg: ''
    },
    pageSimAppoint: {
      productId: '',
      address: {},
      date: '',
      time: '',
      msg: ''
    },
    pagePay: {
      coupon: {
        code: '',
        prices: 0
      }
    },
    orderType: '', //由于switchtab不能带参数，跳转之前先设定该参数，跳转之后从这里取参
<<<<<<< HEAD
    editAddr: {}
=======
    editAddr: {},
    pageShopCart: {
      address: {
        idx: '',
        addrtype: '',
        addr: {},
      },
      coupon: {
        index: '',
        coupon_code: '',
        coupon_id: '',
        prices: 0
      }
    },
    pageCustomized: {
      fourthList: []
    }
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },
  onLaunch: function () {
     // 展示本地存储能力
     var logs = wx.getStorageSync('logs') || []
     logs.unshift(Date.now())
     wx.setStorageSync('logs', logs);
  },
  auth_return:function(){
    return;
  },

  // 获取客服电话
  getServiceTel: function () {
    var that = this
    var systel = wxRequest.postRequest(path.systel());
    systel.then(res => {
      if (res.data.status) {
        that.globalData.serviceTel = res.data.data.value
      }
    })
  },

  // 定位
  getLoaction: function (cb) {
    let that = this
    wx.getLocation({
<<<<<<< HEAD
      type: 'wgs84',
      success: function (res) {
=======
      type: 'gcj02',
      success: function (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        map.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (res) {
<<<<<<< HEAD
            // console.log(res)
            that.globalData.address.allAddr = res.result.address
=======
            that.globalData.address.allAddr = res.result.address_reference.crossroad.title
            that.globalData.address.address = res.result.address
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
            that.globalData.address.province = res.result.address_component.province
            that.globalData.address.city = res.result.address_component.city
            that.globalData.address.area = res.result.address_component.district
            that.globalData.address.street_number = res.result.address_component.street_number
            that.globalData.address.location = res.result.ad_info.location
            that.globalData.address.adcode = res.result.ad_info.adcode
<<<<<<< HEAD
=======
            that.globalData.address.recommend = res.result.formatted_addresses.recommend;
            that.globalData.address.accuracy = 0
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
            cb ? cb() : null
          },
          fail: function (res) {
            console.log(res);
          }
          // complete: function (res) {
          //   console.log(res);
          // }
        });
      }
    })
  }
})
