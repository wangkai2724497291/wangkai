// pages/selectCity/index.js
var app = getApp()
var city = require('../../utils/city.js');
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')

<<<<<<< HEAD
=======
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
// 实例化API核心类
var demo = new QQMapWX({
  key: 'RXXBZ-JZNCD-JPF4H-P5AZE-7UKYT-Z7F2B'
  // key: 'LFJBZ-KAUCO-N4XWA-S535O-7F3D5-OWFKP' // 必填
});

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: '',
    selectCity: '',
    searchLetter: [],
    showLetter: "",
    winHeight: 0,
    tHeight: 0,
    bHeight: 0,
    startPageY: 0,
    cityList: [],
    isShowLetter: false,
    scrollTop: 0,
    itemH: 0,
    searchStatus: false,
    result: [],
    isLoading: true,
    currentPage: 1,
    totalPage: 1,
<<<<<<< HEAD
    showNoMore: false
=======
    showNoMore: false,

  
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
<<<<<<< HEAD
    // 所有城市列表 开始 //
    var searchLetter = city.searchLetter;
    var cityList = city.cityList();
    // console.log(cityInfo);

    var sysInfo = wx.getSystemInfoSync();
    // console.log(sysInfo);
    var winHeight = sysInfo.windowHeight - 170;

    //添加要匹配的字母范围值
    //1、更加屏幕高度设置子元素的高度
    var itemH = winHeight / searchLetter.length;
=======
    console.log(getApp())
    console.log(app)
    // 所有城市列表 开始 //
    console.log(city)
    var searchLetter = city.searchLetter;
    var cityList = city.cityList();
    console.log(searchLetter);

    var sysInfo = wx.getSystemInfoSync();
    console.log(sysInfo)
    var winHeight = sysInfo.windowHeight - 170;
    console.log(sysInfo.windowHeight)
    //添加要匹配的字母范围值
    //1、更加屏幕高度设置子元素的高度
    var itemH = winHeight / searchLetter.length;
    console.log(itemH)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    var tempObj = [];
    for (var i = 0; i < searchLetter.length; i++) {
      var temp = {};
      temp.name = searchLetter[i];
      temp.tHeight = i * itemH;
      temp.bHeight = (i + 1) * itemH;

      tempObj.push(temp)
<<<<<<< HEAD
=======
    
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    }

    this.setData({
      winHeight: winHeight,
      itemH: itemH,
      searchLetter: tempObj,
      cityList: cityList
    })
    // 所有城市列表 结束 //
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
<<<<<<< HEAD
    var addr = app.globalData.address
    this.setData({
      city: addr.city,
=======
    console.log(app)
    var addr = app.globalData.address
    console.log(addr)
    this.setData({
      city: addr.recommend,
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      selectCity: addr.selectCity == '' ? addr.city : addr.selectCity //如果一开始还未选择城市，那么选择的城市和当前城市一样
    })
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

<<<<<<< HEAD
  setSearchValue: function (e) {
    var that = this
    //搜索城市接口
    var searchCity = wxRequest.postRequest(path.searchCity(), {
      page: that.data.currentPage,
      pagesize: 30,
      search_text: e.detail.value
    });
    searchCity.then(res => {
=======
  // setSearchValue: function (e) {
  //   var that = this
  //   //搜索城市接口
  //   console.log(that)
  //   var searchCity = wxRequest.postRequest(path.searchCity(), {
  //     page: that.data.currentPage,
  //     pagesize: 30,
  //     search_text: e.detail.value,
  //   });
  //   searchCity.then(res => {
  //     console.log(res)
  //     if (res.data.status) {
  //       that.setData({
  //         result: res.data.data.list
  //       })
  //     }
  //   })
  // },


  setSearchValue: function (e) { 
    var that = this
    //搜索城市接口
    console.log(that)
    var searchCity = wxRequest.postRequest(path.searchCity(), {
      page: that.data.currentPage,
      pagesize: 30,
      search_text: e.detail.value,
    });
    searchCity.then(res => {
      console.log(res)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      if (res.data.status) {
        that.setData({
          result: res.data.data.list
        })
      }
    })
  },

<<<<<<< HEAD
=======
  // setSearchValue: function (e) {
  //   var that = this
  //   console.log(e);
  //   console.log(that);
  //   demo.getSuggestion({
  //     keyword: e.detail.value,
  //     region: that.data.city,
  //     policy: 1,
  //     success: function (res) {
  //       console.log(res)
  //       that.setData({
  //         result: res.data
  //       })
  //     },
  //     fail: function (res) {
  //       console.log(res);
  //     },
  //     complete: function (res) {
  //       // console.log(res);
  //     }
  //   });
  // },


  // selectAddr: function (e) {
  //   var obj = {}
  //   var data = e.currentTarget.dataset
  //   obj.title = data.title
  //   obj.addr = data.addr
  //   obj.province = data.province
  //   obj.city = data.city
  //   obj.area = data.area
  //   obj.adcode = data.adcode
  //   obj.location = { lat: data.lat, lng: data.lng }
  //   app.globalData.pageLocation = obj
  //   wx.navigateBack()
  // },

  // selectLocationAddr: function () {
  //   var obj = {}
  //   var data = app.globalData.address
  //   obj.title = data.street_number
  //   obj.addr = data.street_number
  //   obj.province = data.province
  //   obj.city = data.city
  //   obj.area = data.area
  //   obj.adcode = data.adcode
  //   obj.location = data.location
  //   app.globalData.pageLocation = obj
  //   wx.navigateBack()
  // },


  // getLoaction: function () {
  //   var that = this
  //   that.setData({
  //     locationAddr: '重新定位中...'
  //   })
  //   app.getLoaction(function () {
  //     that.setData({
  //       locationAddr: app.globalData.address.allAddr
  //     })
  //   })
  // },

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  // 搜索栏聚焦
  searchFocus: function () {
    this.setData({
      searchStatus: true
    })
  },

  // 搜索栏失去焦点
  searchBlur: function () {
    this.setData({
      searchStatus: false
    })
  },

<<<<<<< HEAD
  getLoaction: function() {
    var that = this
=======
  getLoaction: function() {  
    var that = this
    console.log(that)
    console.log(app)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    that.setData({
      city: '重新定位中...'
    })
    app.getLoaction(function() {
<<<<<<< HEAD
      that.setData({
        city: app.globalData.address.city
=======
    console.log(app);
      that.setData({
        city: app.globalData.address.recommend
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      })
    })
  },

  // 所有城市列表 方法开始 //
  searchStart: function (e) {
    var showLetter = e.currentTarget.dataset.letter;
    var pageY = e.touches[0].pageY - 170;
    this.setScrollTop(this, showLetter);
    this.nowLetter(pageY, this);
    this.setData({
      showLetter: showLetter,
      startPageY: pageY,
      isShowLetter: true,
    })
  },
  searchMove: function (e) {
    var pageY = e.touches[0].pageY - 170;
    var startPageY = this.data.startPageY;
    var tHeight = this.data.tHeight;
    var bHeight = this.data.bHeight;
    var showLetter = 0;
    // console.log(pageY);
    if (startPageY - pageY > 0) { //向上移动
      if (pageY < tHeight) {
        // showLetter=this.mateLetter(pageY,this);
        this.nowLetter(pageY, this);
      }
    } else {//向下移动
      if (pageY > bHeight) {
        // showLetter=this.mateLetter(pageY,this);
        this.nowLetter(pageY, this);
      }
    }
  },
  searchEnd: function (e) {
    // console.log(e);
    // var showLetter=e.currentTarget.dataset.letter;
    var that = this;
    setTimeout(function () {
      that.setData({
        isShowLetter: false
      })
    }, 1000)

  },
  nowLetter: function (pageY, that) {//当前选中的信息
    var letterData = this.data.searchLetter;
    var bHeight = 0;
    var tHeight = 0;
    var showLetter = "";
    for (var i = 0; i < letterData.length; i++) {
      if (letterData[i].tHeight <= pageY && pageY <= letterData[i].bHeight) {
        bHeight = letterData[i].bHeight;
        tHeight = letterData[i].tHeight;
        showLetter = letterData[i].name;
        break;
      }
    }

    this.setScrollTop(that, showLetter);

    that.setData({
      bHeight: bHeight,
      tHeight: tHeight,
      showLetter: showLetter,
      startPageY: pageY
    })
  },
  bindScroll: function (e) {
    // console.log(e.detail)
  },
  setScrollTop: function (that, showLetter) {
    var scrollTop = 0;
    var cityList = that.data.cityList;
    var cityCount = 0;
    var initialCount = 0;
    for (var i = 0; i < cityList.length; i++) {
      if (showLetter == cityList[i].initial) {
        scrollTop = initialCount * 30 + cityCount * 41;
        break;
      } else {
        initialCount++;
        cityCount += cityList[i].cityInfo.length;
      }
    }

    that.setData({
      scrollTop: scrollTop
    })
  },
  // 点击选择城市
  bindCity: function (e) {
<<<<<<< HEAD
    var selectCity = e.currentTarget.dataset.city;
    app.globalData.address.selectCity = selectCity
=======
    console.log(e)
    var selectCity = e.currentTarget.dataset;
    app.globalData.address.selectCity = selectCity.city
    app.globalData.address.selectAdcode = selectCity.adcode
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    this.setData({ selectCity: selectCity }, () => { wx.navigateBack() })
  },
  // 所有城市列表 方法结束 //

  selectCurrentCity: function () {
    app.globalData.address.selectCity = ''
<<<<<<< HEAD
=======
    app.globalData.address.selectAdcode = ''
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    wx.navigateBack()
  }
})