<<<<<<< HEAD
// pages/allClass/index.js
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
=======
//全部服务
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
var { isRegister } = require('../../models/isRegister.js')
var app = getApp()
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotWord: [],
    tabActive: 1,
    serverList: [],
<<<<<<< HEAD
    products: []
=======

    allClassData: [],
    firstMenu: [],
    secondMenu: [],

    list: ["list0", "list1", "list2", "list3", "list4", "list5", "list11", "list12", "list13", "list14", "list15", "list25", "list26", "list27", "list28", "list29", "list30"],
    windowHeight: [],
    ids: 0
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    //获取顶级服务类对应热门服务 或者 所有子服务
    var selectServiceCategory = wxRequest.postRequest(path.selectServiceCategory(), {
      page: 1,
      num: 1000,
      all: 1
    });
    selectServiceCategory.then(res => {
      if (res.data.status) {
        that.setData({
          products: [],
          serverList: res.data.data.list
        }, () => {
          // 获取服务的产品
          that.getProducts()
        })
      }
    })
=======
    var that = this
    //获取顶级服务类对应热门服务 或者 所有子服务
    var selectServiceCategory = wxRequest.postRequest(path.selectseccategory());
    selectServiceCategory.then(res => {
      console.log(res)
      var allClassData = res.data.data.list;
      /* 备份数据以便于二级菜单使用 */
      that.setData({
        allClassData: allClassData
      });
      var firstMenu = [];
      //获取cid和cname封装在一级菜单以便于渲染
      for (var i = 0; i < allClassData.length; i++) {
        var cId = allClassData[i].c_id;
        var cName = allClassData[i].c_name;
        // var firstMenuSelected = allClassData[i].firstMenuSelected
        if (i == 0) {
          var firstMenuEle = {
            cId: cId,
            cName: cName,
            /* 作为样式切换 */
            firstMenuSelected: 1
          };
          firstMenu.push(firstMenuEle);
        } else {
          var firstMenuEle = {
            cId: cId,
            cName: cName,
            /* 作为样式切换 */
            firstMenuSelected: 0
          };
          firstMenu.push(firstMenuEle);
        }


      }
      that.setData({
        firstMenu: firstMenu
      });

      /* 设置默认选项卡选中状态 - 二级菜单的哦 */
      var selectServiceProduct = wxRequest.postRequest(path.selectServiceProduct1(), {
        page: 1,
        num: 100,
        c_id: 54
      });
      selectServiceProduct.then(res => {
        var secondMenu = res.data.data.data;
        that.setData({
          secondMenu: secondMenu
        });
      })
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
<<<<<<< HEAD
    // var that = this
    // var getPostsRequest = wxRequest.postRequest(path.hotSearch());
    // getPostsRequest.then(res => {
    //   if (res.data.status) {
    //     that.setData({
    //       hotWord: res.data.data.list
    //     })
    //   }
    // })
=======
    // if (wx.getStorageSync('token')) {
    //   if (!isRegister(app.globalData.isRegister, '该页面需要授权手机号！')) return
    // }
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
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

  search: function (event) {
    wx.navigateTo({
      url: '/pages/search/index?keyword=' + event.detail.value,
    })
  },

  // 获取formid
  formSubmit: function (e) {
    var that = this
    var getFormId = wxRequest.postRequest(path.getFormId(), {
<<<<<<< HEAD
      formid: e.detail.formId
    });
    getFormId.then(res => {
      // console.log(res)
=======

      formid: e.detail.formId
    });
    getFormId.then(res => {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    })
  },

  // 手风琴切换
  changeTab: function (e) {
    var isSetting = true
    if (this.data.tabActive == e.target.dataset.tab) {
      this.setData({
        'tabActive': 0
      })
    } else {
      this.setData({
        'tabActive': e.target.dataset.tab
      })
    }
  },

  gotoProduct: function (e) {
    wx.navigateTo({
      url: '../repairDetail/index?id=' + e.currentTarget.dataset.id + '&standard=' + e.currentTarget.dataset.standard
    })
  },

  // 获取单项服务下的产品
<<<<<<< HEAD
  getProducts: function () {
    wx.showLoading({
      title: '正在加载...',
      mask: true
    })
=======
  getProducts: function (isd) {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    var that = this
    //搜索某服务对应的产品，搜索第一个服务对应的产品，搜索所有产品
    var selectServiceProduct = wxRequest.postRequest(path.selectServiceProduct(), {
      page: 1,
      num: 100,
<<<<<<< HEAD
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
  }
})
=======
      c_id: that.data.serverList[that.data.products.length].c_id
    });
    selectServiceProduct.then(res => {
      console.log(res)
      var prods = that.data.products;
      prods.push(res.data.data.data);
      that.setData({
        products: prods
      })
    })
  },

  click: function (e) {
    var ids = e.currentTarget.dataset.id;
    this.setData({
      id: ids,  //把获取的自定义id赋给当前组件的id(即获取当前组件)
      oncli: false,
    })
    this.getProducts(ids)

  },

  selectFirst: function (event) {
    var that = this
    /* 点击一级菜单传递cid */
    var selectedId = "";
    if (event == 0) {
      selectedId = 0;
    } else {
      selectedId = event.currentTarget.dataset.id;
    }

    /* 一级菜单样式切换 */
    var firstEle = that.data.firstMenu;
    for (var i = 0; i < firstEle.length; i++) {
      if (selectedId == firstEle[i].cId) {
        firstEle[i].firstMenuSelected = 1;
      } else {
        firstEle[i].firstMenuSelected = 0;
      }
    }
    /* 样式重新设置回去 */
    that.setData({
      firstMenu: firstEle
    });

    /* 渲染点击的一级菜单对应的二级菜单 */
    var selectServiceProduct = wxRequest.postRequest(path.selectServiceProduct1(), {
      page: 1,
      num: 100,
      c_id: selectedId
    });
    selectServiceProduct.then(res => {
      console.log(res)
      var secondMenu = res.data.data.data;
      that.setData({
        secondMenu: secondMenu
      });
    })

  }
})


>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
