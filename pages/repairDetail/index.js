// pages/repairDetail/index.js
var path = require('../../utils/api.js');
var util = require('../../utils/util.js');
var wxRequest = require('../../utils/wxRequest.js')
var WxParse = require('../../wxParse/wxParse.js');
<<<<<<< HEAD
var { isRegister } = require('../../models/isRegister.js')
=======
var {isRegister} = require('../../models/isRegister.js')
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
var app = getApp()
import config from '../../utils/config.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgDomain: '',
    product: {},
    isStandard: true,
    evaluates: [],
    collect: 0,
    colectionId: null,
    serviceTel: '',
    auth_window_display: 'none',
    auth_phone_display: 'none',
    productId: '',
    prodIsStandard: null,
    userId: '',
    recommender: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
<<<<<<< HEAD
  onLoad: function (options) {
=======
  onLoad: function(options) {
    console.log(options)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    this.setData({
      productId: options.id, //用于从分享直接打开该页面时需要用此id来获取产品信息
      prodIsStandard: options.standard
    }, () => {
<<<<<<< HEAD
      if(options.userid) {
=======
      if (options.userid) {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        this.setData({
          recommender: options.userid
        })
        this.onLaunch()
      } else {
        this.getPageData()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
<<<<<<< HEAD
  onReady: function () {
  
=======
  onReady: function() {

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面显示
   */
<<<<<<< HEAD
  onShow: function () {
    this.addSeeTimes()
=======
  onShow: function() {
    
    
    
    this.addSeeTimes()
    
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
<<<<<<< HEAD
  onHide: function () {
  
=======
  onHide: function() {

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面卸载
   */
<<<<<<< HEAD
  onUnload: function () {
  
=======
  onUnload: function() {

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
<<<<<<< HEAD
  onPullDownRefresh: function () {
  
=======
  onPullDownRefresh: function() {

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 页面上拉触底事件的处理函数
   */
<<<<<<< HEAD
  onReachBottom: function () {
  
=======
  onReachBottom: function() {

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 用户点击右上角分享
   */
<<<<<<< HEAD
  onShareAppMessage: function () {
=======
  onShareAppMessage: function() {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    // console.log(app.globalData.userId);
    return {
      title: '家通达，通达更美好的家！',
      path: '/pages/repairDetail/index?id=' + this.data.productId + '&standard=' + this.data.prodIsStandard + '&userid=' + app.globalData.userId
    }
  },

  // 图片预览
<<<<<<< HEAD
  previewImage: function (e) {
=======
  previewImage: function(e) {
    console.log(e)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: e.currentTarget.dataset.urls // 需要预览的图片http链接列表
    })
  },

  //添加浏览次数
<<<<<<< HEAD
  addSeeTimes: function () {
=======
  addSeeTimes: function() {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    var that = this
    if (!(JSON.stringify(that.data.product) == "{}")) {
      var addSeeTimes = wxRequest.postRequest(path.addSeeTimes(), {
        product_id: that.data.product.p_id
      });
      addSeeTimes.then(res => {
        if (res.data.status) {
<<<<<<< HEAD
          var newProd = that.data.product
          newProd.see_times += 1
=======
          console.log(that)
          var newProd = that.data.product
          newProd.see_times += 1
          console.log(newProd)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
          that.setData({
            product: newProd
          })
        }
<<<<<<< HEAD
      })
    }
  },

  // 打电话
  phoneCall: function () {
    const that = this
=======
        console.log(this.data.product.c_name)

        if (this.data.product.c_name.indexOf("家通卡") != -1) {
          wx.setNavigationBarTitle({
            title: '家通卡详情',
          })
        }
        if (this.data.product.c_name.indexOf("维修") != -1){
          wx.setNavigationBarTitle({
            title: '维修详情',
          })
        }
        if (this.data.product.c_name.indexOf("安装") != -1){
          wx.setNavigationBarTitle({
            title: '安装详情',
          })
        }
        if (this.data.product.c_name.indexOf("清洗") != -1) {
          wx.setNavigationBarTitle({
            title: '清洗详情',
          })
        }
        if (this.data.product.c_name.indexOf("疏通") != -1) {
          wx.setNavigationBarTitle({
            title: '疏通详情',
          })
        }

      })
    }
    
  },

  // 打电话
  phoneCall: function() {
    const that = this
    // console.log(that)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    wx.makePhoneCall({
      phoneNumber: that.data.serviceTel
    })
  },

  // 添加、删除收藏
<<<<<<< HEAD
  collection: function () {
    if (wx.getStorageSync('token')) {
      if (!isRegister(app.globalData.isRegister, '该操作需要授权手机号！')) return
=======
  collection: function() {
    if (wx.getStorageSync('token')) {
      if (!isRegister(app.globalData.isRegister, '该页面需要授权手机号\n前往首页点击授权登录！')) return
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    }
    var that = this
    if (!this.data.collect) {
      // 添加收藏
<<<<<<< HEAD
      var addCollect = wxRequest.postRequest(path.addCollect(), that.data.product);
      addCollect.then(res => {
=======
      console.log(that)
      var addCollect = wxRequest.postRequest(path.addCollect(), that.data.product);
      addCollect.then(res => {
        console.log(res)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        if (res.data.status) {
          that.setData({
            collect: 1,
            colectionId: res.data.data
          })
        }
      })
    } else {
      // 删除收藏
      var delectCollect = wxRequest.postRequest(path.delectCollect(), {
        colection_id: that.data.colectionId
      });
      delectCollect.then(res => {
        if (res.data.status) {
          that.setData({
            collect: 0,
            colectionId: null
          })
        }
      })
    }
  },

  //下单
<<<<<<< HEAD
  formSubmit: function (e) {
    if (wx.getStorageSync('token')) {
      if (!isRegister(app.globalData.isRegister, '该操作需要授权手机号！')) return
    }
    var that = this
    var getFormId = wxRequest.postRequest(path.getFormId(), {
      formid: e.detail.formId
    });
    getFormId.then(res => {
      wx.navigateTo({
        url: that.data.product.is_standard ? '../appointment/index?id=' + that.data.product.p_id : '../simAppointment/index?id=' + that.data.product.p_id,
=======
  formSubmit: function(e) {
    if (wx.getStorageSync('token')) {
      if (!isRegister(app.globalData.isRegister, '该页面需要授权手机号\n前往首页点击授权登录！')) return
    }
    var that = this
    console.log(e)
    console.log(that)
    var getFormId = wxRequest.postRequest(path.getFormId(), {
      formid: e.detail.formId  //the formId is a mock one
    });
    getFormId.then(res => {
      console.log(res);
      wx.navigateTo({
        // url: that.data.product.is_standard ? '../appointment/index?id=' + that.data.product.p_id : '../simAppointment/index?id=' + that.data.product.p_id,
        url: that.data.product.c_name == '家通卡套餐' ? "../purchaseNote/purchaseNote?id=" + that.data.product.p_id : (that.data.product.is_standard ? "../appointment/index?id=" + that.data.product.p_id : '../simAppointment/index?id=' + that.data.product.p_id)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      })
    })
  },

<<<<<<< HEAD
  getPageData: function () {
=======
  getPageData: function() {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    var that = this
    var article = ''
    //搜索某服务对应的产品，搜索第一个服务对应的产品，搜索所有产品
    var getProduct = wxRequest.postRequest(path.getProduct(), {
      product_id: that.data.productId
    });
    getProduct.then(res => {
      if (res.data.status) {
        // 转换富文本
        article = res.data.data.html
        WxParse.wxParse('article', 'html', article, that, 0);

        that.setData({
          imgDomain: path.getImageDomain(),
          product: res.data.data,
          isStandard: that.data.prodIsStandard == '1' ? true : false
        })

        that.addSeeTimes()
      }
    })
    //查询某服务类对应的子服务(产品)评论
    var productComment = wxRequest.postRequest(path.productComment(), {
      product_id: that.data.productId,
      page: '1',
      num: '5'
    });
    productComment.then(res => {
      if (res.data.status) {
        if (!(JSON.stringify(res.data.data) == "{}")) {
          var evaluates = res.data.data.list
          var length = evaluates.length
          for (var i = 0; i < length; i++) {
<<<<<<< HEAD
            evaluates[i].date = util.formatTime(evaluates[i].on_time)
=======
            evaluates[i].date = evaluates[i].create_time ? util.formatTime(evaluates[i].create_time) : ''
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
            evaluates[i].nickname = evaluates[i].nickname[0] + '***' + evaluates[i].nickname[evaluates[i].nickname.length - 1]
            evaluates[i].star = JSON.parse(evaluates[i].star)
            if (evaluates[i].file.length) {
              evaluates[i].file = evaluates[i].file.split(',')
            }
          }
<<<<<<< HEAD

=======
          console.log(evaluates)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
          that.setData({
            evaluates: evaluates
          })
        }
      }
    })
    //判断用户某产品是否收藏
    var isCollect = wxRequest.postRequest(path.isCollect(), {
      product_id: that.data.productId
    });
    isCollect.then(res => {
      if (res.data.status) {
        that.setData({
          collect: res.data.data.is_no,
          colectionId: res.data.data.colection_info ? res.data.data.colection_info.colection_id + '' : null
        })
      }
    })

<<<<<<< HEAD
=======
    //获取推荐服务产品
    var recommenderProd = wxRequest.postRequest(path.recommenderProd(), {
      adcode: app.globalData.address.adcode,
      p_id: that.data.productId,
      page: 1,
      page_size: 10
    });
    recommenderProd.then(res => {
      console.log(res)
      if (res.data.status) {
        var list = res.data.data.list
        that.setData({
          recommenderProds: list
        })
      }
    })

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    that.setData({
      serviceTel: app.globalData.serviceTel
    })
  },

<<<<<<< HEAD
  onLaunch: function () {
=======
  onLaunch: function() {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    //全局
    var that = this;
    // 获取用户信息
    wx.getSetting({
      success: res => {
        // console.log(res)
        //如果已经授权
        if (res.authSetting['scope.userInfo']) {
          that.get_token();
        } else {
          //如果未授权，弹出授权
          this.setData({
            auth_window_display: "flex"
          });
        }
      }
    });
  },
<<<<<<< HEAD
  onGotUserInfo: function (res) {
=======
  onGotUserInfo: function(res) {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    // 可以将 res 发送给后台解码出 unionId
    if (res.detail.userInfo) {
      this.setData({
        auth_window_display: "none"
      })
      this.get_token();
    }
  },
<<<<<<< HEAD
  get_token: function () {
=======
  get_token: function() {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    //全局
    var that = this;
    //先获取code
    wx.login({
<<<<<<< HEAD
      success: function (res) {
=======
      success: function(res) {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        // console.log(res)
        if (res.code) {
          that.code = res.code;
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              app.globalData.userInfo = res.userInfo;
              // that.setData({
              //   userInfo: res.userInfo
              // })
              wx.request({
                url: path.getToken(),
                data: {
                  code: that.code,
                  iv: res.iv,
                  encryptedData: res.encryptedData
                },
                header: {
                  'content-type': 'application/json',
                  'app-ver': config.getVersion
                },
<<<<<<< HEAD
                success: function (res) {
=======
                success: function(res) {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
                  if (tokenRes.data.code !== 200) {
                    wx.showModal({
                      title: '提示',
                      content: tokenRes.data.message,
                    })
                  }
                  wx.setStorageSync("token", res.data.data.token);
                  that.setData({
                    token: res.data.data.token,
                    userId: res.data.data.uid
                  });

                  app.globalData.userId = res.data.data.uid

                  if (res.data.data.role) {
                    var role = res.data.data.role.split(',')
                    //用户角色：1、师傅，2、客户，3、门店
                    if (role.indexOf('2') == -1) { // 如果该用户没有注册客户端，提示要绑定手机号
                      that.setData({
                        auth_phone_display: "flex"
                      });
                    }
                  } else {
                    that.setData({
                      auth_phone_display: "flex"
                    });
                  }

                  that.getPageData()
                }
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              /*
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              */
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  },
<<<<<<< HEAD
  getPhoneNumber: function (e) {
    // console.log(e)
    var that = this
    console.log(that.data.recommender);
    console.log(e);
=======
  getPhoneNumber: function(e) {
    // console.log(e)
    var that = this
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    if (e.detail.encryptedData) {
      // 调用接口将encryptedData发送到后台解密出电话号码
      //搜索某服务对应的产品，搜索第一个服务对应的产品，搜索所有产品
      var getWxPhone = wxRequest.postRequest(path.getWxPhone(), {
        'type': 1,
        'encryptedData': e.detail.encryptedData,
        'iv': e.detail.iv
      });
      getWxPhone.then(res => {
        if (res.data.status) {
          var wxRegister = wxRequest.postRequest(path.wxRegister(), {
            'wx_phone': res.data.data.purePhoneNumber,
            'user_encode': that.data.recommender
          });

          wxRegister.then(result => {
            console.log(result)
          })
        }

        that.setData({
          auth_phone_display: "none"
        })
      })
    } else {
      this.setData({
        auth_phone_display: "none"
      })
    }
  },
})