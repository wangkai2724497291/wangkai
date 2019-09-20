// pages/home/index.js
var app = getApp()
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
import config from '../../utils/config.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*前端获取用户信息基础配置*/
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgDomain: path.getImageDomain(),
    auth_window_display: 'none',
    auth_phone_display: 'none',
    city: '',
    banner: [],
    menu: [],
    server: [],
<<<<<<< HEAD
=======
    cleanoutList: [],
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    userId: '',
    token: '',
    recommender: null,
    registerType: 1,
    showGetCoupon: false,
<<<<<<< HEAD
    showTabBar: false
=======
    couponPrice: 0,
    showTabBar: true,
    storage:false,
    serverList: [],
    serverList2: [],
    serverList3: [],
    serverList4: [],
    stair: [],
    stair2: [],
    stair3: [],
    stair4: [],
    bestRecomment: [],
    datalist: [{ 'c_id': '21', 'c_name': '家电清洗', 'g_id': '3', 'g_name': '维修', 'icon': '../../img/icon_rinse_.png' }, { 'c_id': '24', 'c_name': '家电维修', 'g_id': '2', 'g_name': '安装', 'icon': '../../img/icon_maintain.png' }, { 'c_id': '7', 'c_name': '厨卫安装', 'g_id': '1', 'g_name': '安装', 'icon': '../../img/icon_bath.png' }, { 'c_id': '5', 'c_name': '家具安装', 'g_id': '1', 'g_name': '安装', 'icon': '../../img/icon_furniture_.png' }, { 'c_id': '8', 'c_name': '全部服务', 'g_id': '1', 'g_name': '安装', 'icon': '../../img/icon_all.png' }],

    datalist1: [{ 'c_id': '7', 'c_name': '厨卫安装', 'icon': '../../img/home/bath_i.png' }, { 'c_id': '14', 'c_name': '灯具安装', 'icon': '../../img/home/lanterns_i.png' }, { 'c_id': '5', 'c_name': '家具安装', 'icon': '../../img/home/furniture_i.png' }, { 'c_id': '26', 'c_name': '窗帘五金', 'icon': '../../img/home/curtain.png' }],

    datalist2: [{ 'c_id': '24', 'c_name': '家电维修', 'icon': '../../img/home/appliances_s.png' }, { 'c_id': '10', 'c_name': '卫浴维修', 'icon': '../../img/home/bathroom_s.png' }, { 'c_id': '12', 'c_name': '家具维修', 'icon': '../../img/home/furniture_s.png' }, { 'c_id': '11', 'c_name': '门窗维修', 'icon': '../../img/home/windows_s.png' }],

    datalist3: [{ 'c_id': '54', 'c_name': '家通卡套餐', 'icon': '../../img/home/jiatd_s.png' }, { 'c_id': '21', 'c_name': '家电清洗', 'icon': '../../img/home/appliances_c.png' }, { 'c_id': '37', 'c_name': '灭鼠杀虫', 'icon': '../../img/home/insects_c.png' }, { 'c_id': '35', 'c_name': '防水补漏', 'icon': '../../img/home/bare_c.png' }],

    datalist4: [{ 'c_id': '33', 'c_name': '拆除', 'icon': '../../img/home/tear_m.png' }, { 'c_id': '31', 'c_name': '翻新装修', 'icon': '../../img/home/renovation_m.png' }, { 'c_id': '36', 'c_name': '墙纸墙布', 'icon': '../../img/home/wall_m.png' }, { 'c_id': '34', 'c_name': '墙面刷新', 'icon': '../../img/home/refresh_m.png' }],

    appliance: [{
      'c_id': '21', 'c_name': '家电清洗', 'product_price': '88', 'unit': '台', 'p_id': '94', 'is_standard': '1', 'p_name': '空调清洗', 'icon': 'http://jtd-uploads-admin.oss-cn-beijing.aliyuncs.com/20190710/54dba2c4a0c5a3f76f956f23d1a5eaf1.png'
    }, {
        'c_id': '21', 'c_name': '家电清洗', 'product_price': '208', 'unit': '台', 'p_id': '191', 'is_standard': '1', 'p_name': '油烟机清洗', 'icon': 'http://jtd-uploads-admin.oss-cn-beijing.aliyuncs.com/20190629/5e096db279422f3b993bdf6e53f66995.png'
      }, {
        'c_id': '21', 'c_name': '家电清洗', 'product_price': '108', 'unit': '台', 'p_id': '190', 'is_standard': '1', 'p_name': '洗衣机清洗', 'icon': 'http://jtd-uploads-admin.oss-cn-beijing.aliyuncs.com/20190629/3e30bef7831113be4ecc995cd40fff0b.png'
      },],
    banner: [{ 'banner_id': '17', 'image': 'http://jtd-uploads-admin.oss-cn-beijing.aliyuncs.com/20190711/cd2303dd7ef14098adb792db89ceb797.png' }, { 'banner_id': '20', 'image': 'http://jtd-uploads-admin.oss-cn-beijing.aliyuncs.com/20190711/8c18758e35922debff125ae18e71c52a.png' }, { 'banner_id': '15', 'image': 'http://jtd-uploads-admin.oss-cn-beijing.aliyuncs.com/20190703/f4b5ab498e3a52cc400273c664c36c0c.jpg' }]
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
<<<<<<< HEAD
=======
    this.setData({
      serverList: this.data.datalist,
      serverList1: this.data.datalist1,
      serverList2: this.data.datalist2,
      serverList3: this.data.datalist3,
      serverList4: this.data.datalist4,
      rinse: this.data.appliance,
      banner: this.data.banner
    })

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    if (options.userid) {
      this.setData({
        recommender: options.userid
      })
    }

    if (options.scene) {
      this.setData({
        recommender: options.scene,
        registerType: 2
      })
    }

    if (options.registerType === '2') {
      this.setData({
        registerType: parseInt(options.registerType)
      })
    }
<<<<<<< HEAD
    this.onLaunch();
  },

=======

    // if (wx.getStorageSync('token')) {
    //   console.log("已登录")
    //   this.onLaunch();
    // }
  },

  // detail:function(){
  //   if (wx.getStorageSync('token')) {
  //     wx.navigateTo({
  //       url: '../repairDetail/index?id=' + this.data.rinse.p_id + '&standard='+this.data.rinse.is_standard,
  //     })
  //   }
  // },

 
  /**
 * 二维码
 */
  getScancode: function () {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        if (res.path.indexOf("master") == -1 || res.path == '') {
          wx.showToast({
            title: '查找失败',
            icon: 'none',
            duration: 2000
          })
          return
        }
        
        // var str = res.result;
        // str = str.replace('?', "&");
        // console.log(str)
        // wx.navigateTo({
        //   url: '../master/master?title=' + str
        // })
        var str = res.path;
        str = str.replace('?', "&");
        console.log(str)
        wx.navigateTo({
          url: '../master/master?scene= ' + str
        })
      }
    })

  },


>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

<<<<<<< HEAD
  },

=======
   
  },

  getProducts: function() {
    wx.showLoading({
      title: '正在加载...',
      mask: true
    })
    var that = this
    //搜索某服务对应的产品，搜索第一个服务对应的产品，搜索所有产品
    var selectServiceProduct = wxRequest.postRequest(path.selectServiceProduct(), {
      page: 1,
      num: 100,
      category_id: that.data.serverList[that.data.products.length].c_id
    });
    selectServiceProduct.then(res => {
      var prods = that.data.products
      prods.push(res.data.data.data)
      that.setData({
        products: prods

      }, () => {
        if (that.data.products.length < that.data.serverList.length) {
          that.getProducts()
        } else {
          wx.hideLoading()
        }

      })

    })
  },


>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    if (wx.getStorageSync('token')) {
      this.setData({
<<<<<<< HEAD
        city: app.globalData.address.selectCity == '' ? app.globalData.address.city : app.globalData.address.selectCity
=======
        city: app.globalData.address.selectCity == '' ? app.globalData.address.recommend : app.globalData.address.selectCity
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      })

      // if (!app.globalData.isRegister) {
      //   this.get_token()
      // }
    }
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
    return {
      title: '家通达客户端',
      path: '/pages/index/index?userid=' + this.data.userId
    }
  },
  getPageData: function() {
    var that = this
    if (wx.getStorageSync('token')) {
      //首页轮播图
      var getPostsRequest = wxRequest.postRequest(path.getBanners());
      getPostsRequest.then(res => {
        if (res.data.status) {
          that.setData({
            banner: res.data.data.list
          })
        }
      })
<<<<<<< HEAD
      //获取顶级服务类对应热门服务 或者 所有子服务
      var selectServiceCategory = wxRequest.postRequest(path.selectServiceCategory(), {
        page: 1,
        num: 7,
        all: 1,
        is_recommend: 1
      });
      selectServiceCategory.then(res => {
        var list = res.data.data.list
        list.push({
          c_id: 8,
          c_name: "全部服务",
          g_id: 1,
          g_name: "安装",
          icon: "../../img/menu-icon-8.jpg",
          is_recommend: 1,
        })
        that.setData({
          menu: list
        })
      })
      //搜索某服务对应的产品，搜索第一个服务对应的产品，搜索所有产品
      var selectServiceProduct = wxRequest.postRequest(path.selectServiceProduct(), {
        page: 1,
        num: 3
        //,category_id: 1
      });
      selectServiceProduct.then(res => {
        if (res.data.status) {
          that.setData({
            server: res.data.data.data
          })
        }
      })

      // 定位
      app.getLoaction(function() {
        that.setData({
          city: app.globalData.address.city
=======
      
      // 定位
      app.getLoaction(function() {
        that.setData({
          city: app.globalData.address.recommend
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        })
      })

      //一开始获取客服电话
      app.getServiceTel()
    }
  },
  clickBanner: function(e) {
<<<<<<< HEAD
    if (e.currentTarget.dataset.url.length < 10) return;
    var url

    if (e.currentTarget.dataset.url.substr(0, 7) === '/pages/') {
      const pageName = e.currentTarget.dataset.url.split('/')[2]
      const navPage = ['index', 'customized', 'orders', 'user']
      url = e.currentTarget.dataset.url

      if (navPage.includes(pageName)) {
        wx.reLaunch({
          url: url,
        });
      } else {
        wx.navigateTo({
          url: url
        })
      }
    } else {
      url = '/pages/article/index?url=' + e.currentTarget.dataset.url
      wx.navigateTo({
        url: url,
      });
=======
    this.onLaunch();
    if (wx.getStorageSync('token')) {
      if (e.currentTarget.dataset.url.length < 10) return;
      var url

      if (e.currentTarget.dataset.url.substr(0, 7) === '/pages/') {
        const pageName = e.currentTarget.dataset.url.split('/')[2]
        const navPage = ['index', 'customized', 'orders', 'user']
        url = e.currentTarget.dataset.url

        if (navPage.includes(pageName)) {
          wx.reLaunch({
            url: url,
          });
        } else {
          wx.navigateTo({
            url: url
          })
        }
      } else {
        url = '/pages/article/index?url=' + e.currentTarget.dataset.url
        wx.navigateTo({
          url: url,
        });
      }
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    }
  },

  closeGetCoupon: function() {
    this.setData({
      showGetCoupon: false
    })
  },

  search: function(event) {
    wx.navigateTo({
      url: '/pages/search/index?keyword=' + event.detail.value,
    })
  },

<<<<<<< HEAD
=======
  getCoupon: function() {
    var that = this
    var rightGet = wxRequest.postRequest(path.rightGet());
    rightGet.then(res => {
      if (res.data.status) {
        that.setData({
          showGetCoupon: false
        }, () => {
          wx.showToast({
            title: '领取成功',
            duration: 2500
          })
        })
      }
    })
  },

  // 获取优惠券总值信息
  couponNewInfo: function() {
    var that = this
    var couponNewInfo = wxRequest.postRequest(path.couponNewInfo(), {
      adcode: app.globalData.address.adcode
    });
    couponNewInfo.then(res => {
      if (res.data.status && res.data.data.get) {
        that.setData({
          couponPrice: res.data.data.price,
          showGetCoupon: true
        })
      }
    })
  },

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  //点击去授权手机号,获取formid
  getFormId: function(e) {
    var that = this
    var getFormId = wxRequest.postRequest(path.getFormId(), {
      formid: e.detail.formId
    });
    getFormId.then(res => {

    })
  },

  onLaunch: function() {
    //全局
    var that = this;
    // 获取用户信息
    wx.getSetting({
      success: res => {
<<<<<<< HEAD
        // console.log(res)
=======
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        //如果已经授权
        if (res.authSetting['scope.userInfo']) {
          that.get_token();
        } else {
          //如果未授权，弹出授权
          that.setData({
            auth_window_display: "flex"
          });
<<<<<<< HEAD
=======
         
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        }
      }
    });
  },
  onGotUserInfo: function(res) {
    // 可以将 res 发送给后台解码出 unionId
    if (res.detail.userInfo) {
      this.setData({
        auth_window_display: "none"
      })
      this.get_token();
<<<<<<< HEAD
=======
    }else{
      this.setData({
        auth_window_display: "none"
      })
      console.log("拒绝登录")
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    }
  },
  getPhoneNumber: function(e) {
    var that = this
    if (e.detail.encryptedData) {
      // 调用接口将encryptedData发送到后台解密出电话号码
      //搜索某服务对应的产品，搜索第一个服务对应的产品，搜索所有产品
      var getWxPhone = wxRequest.postRequest(path.getWxPhone(), {
        'type': 1,
        'encryptedData': e.detail.encryptedData,
        'iv': e.detail.iv
      });
      getWxPhone.then(res => {
        let registerObj = {
          'user_encode': that.data.recommender,
          'register_type': that.data.registerType
        }

        if (that.data.registerType === 1) {
          registerObj.wx_phone = res.data.data.purePhoneNumber
        } else if (that.data.registerType === 2) {
          registerObj.mobile = res.data.data.purePhoneNumber
        }

<<<<<<< HEAD
=======
       
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        if (res.data.status) { //从后台获取到手机号码
          var wxRegister = wxRequest.postRequest(path.wxRegister(), registerObj);

          wxRegister.then(result => {
            if (result.data.status) {
              app.globalData.isRegister = true
              app.globalData.userInfo.uid = result.data.data.uid
<<<<<<< HEAD
=======
              that.couponNewInfo()
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
            } else {
              wx.showToast({
                title: result.data.message,
                icon: 'none',
                duration: 2000
              })
            }
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
  get_token: function() {
    //全局
    var that = this;
    //先获取code
    wx.login({
      success: function(res) {
<<<<<<< HEAD
        // console.log('login',res)
        if (res.code) {
          that.code = res.code;
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // console.log('getUserInfo',res)
=======
        if (res.code) {
          that.code = res.code;
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框 
          wx.getUserInfo({
            success: res => {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
              // 可以将 res 发送给后台解码出 unionId
              app.globalData.userInfo = res.userInfo;
              that.setData({
                userInfo: res.userInfo
              })
              wx.request({
                url: path.getToken(),
                data: {
                  code: that.code,
                  iv: res.iv,
                  encryptedData: res.encryptedData
                  // ,debug: 1
                },
                header: {
                  'content-type': 'application/json',
                  'app-ver': config.getVersion
                },
<<<<<<< HEAD
                success: function (tokenRes) {
=======
                success: function(tokenRes) {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
                  if (tokenRes.data.code !== 200) {
                    wx.showModal({
                      title: '提示',
                      showCancel: false,
                      content: tokenRes.data.message,
                    })
                    return
                  }
                  wx.setStorageSync("token", tokenRes.data.data.token);
                  that.setData({
                    token: tokenRes.data.data.token
                  });

                  app.globalData.userId = tokenRes.data.data.uid
                  if (tokenRes.data.data.uid != '') {
                    that.setData({
                      userId: tokenRes.data.data.uid
                    })
                  }

                  if (tokenRes.data.data.role) {
                    var role = tokenRes.data.data.role.split(',')
                    //用户角色：1、师傅，2、客户，3、门店
                    if (role.indexOf('2') == -1) { // 如果该用户没有注册客户端，提示要绑定手机号
                      that.setData({
                        auth_phone_display: "flex"
                      });
                      app.globalData.isRegister = false
                    } else {
                      app.globalData.isRegister = true
                    }
                  } else {
                    that.setData({
                      auth_phone_display: "flex"
                    });
                    app.globalData.isRegister = false
                  }

                  that.setData({
<<<<<<< HEAD
                    showTabBar: true
=======
                    showTabBar: true,
                    storage:true,
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
                  });

                  that.getPageData()
                },
                fail: function(res) {
                  console.log(res)
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
  }
})