// pages/appointment/index.js
var app = getApp()
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: [0, 0],
    time: [['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'], ['00', '30']],
    product: {},
    order: {},
<<<<<<< HEAD
    canUse: [],    
    couponMsg: '暂无可用优惠券',
    startDate: '',//用于时间选择器的开始时间
    endDate: '', //用于时间选择器的结束时间
    serverPrice: 0,
    totalPrice: 0
=======
    // canUse: [],    
    // couponMsg: '暂无可用优惠券',
    startDate: '',//用于时间选择器的开始时间
    endDate: '', //用于时间选择器的结束时间
    serverPrice: 0,
    shopCartCount: 0
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var reset = {
      productId: '',
      typeData: [],
      specData: [],
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
    }
    app.globalData.pageAppointment = reset
    app.globalData.pageAppointment.productId = options.id
<<<<<<< HEAD
=======
    console.log(this)
    // if (app.globalData.retakeOrder.retake) {

    //   app.globalData.retakeOrder = {
    //     retake = false,
    //     order: {}
    //   }
    // }
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39

    //通过id获取产品信息
    this.getProductById(options.id)

    //设定日期，开始日期为当前日期，为期一年
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
<<<<<<< HEAD
=======
    var hour = myDate.getHours();
    var minutes = myDate.getMinutes();
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39

    if (month < 10) {
      month = '0' + month
    }

<<<<<<< HEAD
    if (day < 10) {
      day = '0' + day
    }

    this.setData({
      startDate: year + '-' + month + '-' + day,
      endDate: year + 1 + '-' + month + '-' + day
=======
    if (minutes > 30) {
      var count = hour + 1
      if (count === 24) {
        day = day + 1
      }
    }

    if (day < 10) {
      day = '0' + day
    }
    console.log(year + '-' + month + '-' + (day + 60))
    console.log(year+'-'+month+'-'+(day+7))
    this.setData({
      startDate: year + '-' + month + '-' + day,
      endDate: year+1 + '-' + month + '-' + day
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    })
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
    // console.log('pageAppointement:', app.globalData.pageAppointment)
    console.log(app)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    this.setData({
      order: app.globalData.pageAppointment
    }, () => {
      if (this.data.product.sku !== undefined && this.data.order.count !== undefined) {
        this.setData({
          serverPrice: parseFloat((this.data.product.sku.sale_price * this.data.order.count).toFixed(2)),
<<<<<<< HEAD
          totalPrice: parseFloat((this.data.product.sku.sale_price * this.data.order.count - this.data.order.coupon.count).toFixed(2))
=======
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        })
      }
    })

<<<<<<< HEAD
=======


    this.cartNum()
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

  // 获取formid
  formSubmit: function (e) {
    var that = this
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
  },

  getProductById: function (id) {
    var that = this
    //获取服务类下的某产品信息获取服务类下的某产品信息[规格类型等]
    var getProduct = wxRequest.postRequest(path.getProduct(), {
      product_id: id
    });
    getProduct.then(res => {
      if (res.data.status) {
<<<<<<< HEAD
=======
        console.log(res)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        that.setData({
          product: res.data.data
        }, () => {
          //通过id获取产品sku
          that.getSkuById(id)
<<<<<<< HEAD
          that.getCoupon()
=======
          // that.getCoupon()
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        })
      }
    })
  },

  // 选择产品类型
  typeChange: function (e) {
<<<<<<< HEAD
    if (!e.currentTarget.dataset.disable) {
      //要分两种情况，1、产品规格已选择，2、产品规格没有任何选择
      var specHasSelected = false
      app.globalData.pageAppointment.specData.map((item, index) => {
=======
    console.log(e)
    if (!e.currentTarget.dataset.disable) {
      //要分两种情况，1、产品规格已选择，2、产品规格没有任何选择
      var specHasSelected = false

      app.globalData.pageAppointment.specData.map((item, index) => {
        console.log(app)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        if (item.checked) {
          specHasSelected = true
        }
      })
      if (app.globalData.pageAppointment.typeData[e.currentTarget.id].checked) {//取消选中
        app.globalData.pageAppointment.typeData.map((item, index) => {
          if (specHasSelected) {//产品规格已选择
            item.checked = false
          } else {//产品规格没有任何选择
            item.checked = false
            item.disable = false
          }
        })
        app.globalData.pageAppointment.specData.map((item, index) => {
          item.disable = false
        })

<<<<<<< HEAD
        app.globalData.pageAppointment.coupon = { id: '', count: 0 } //取消选中就把优惠劵清空
=======
        // app.globalData.pageAppointment.coupon = { id: '', count: 0 } //取消选中就把优惠劵清空
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        var product = this.data.product
        product.sku.typeName = ''
        product.sku.sale_price = ''
        this.setData({
          product: product
        })
      } else { // 选中某个产品类型
        app.globalData.pageAppointment.typeData.map((item, index) => {
          if (specHasSelected) { //产品规格已选择
            if (item.checked) {
              item.checked = false
            }
          } else { //产品规格没有任何选择
            item.checked = false
            item.disable = false
          }
        })

        app.globalData.pageAppointment.typeData[e.currentTarget.id].checked = true
        var product = this.data.product
        product.sku.typeName = app.globalData.pageAppointment.typeData[e.currentTarget.id].value
        this.setData({
          product: product
        })

        app.globalData.pageAppointment.specData.map((item, index) => {
          //已是选中了某个产品类型，再循环判断产品规格是否有选中，如果有，判断出产品的地址是否单选、获取id
          if (item.checked) {
            // console.log(this.data.product.sku.productFilter[e.currentTarget.dataset.value][item.value])
            var product = this.data.product
            product.sku.id = product.sku.productFilter[e.currentTarget.dataset.value][item.value].id
            product.sku.more_select = product.sku.productFilter[e.currentTarget.dataset.value][item.value].more_select
            product.sku.sale_price = product.sku.productFilter[e.currentTarget.dataset.value][item.value].sale_price
            product.sku.typeName = e.currentTarget.dataset.value
            product.sku.specName = item.value
            this.setData({
              product: product
            })
          }

          // 如果所有产品规格中的某一个不在某个产品类型的产品规格列表里，该产品规格不选中且不能点击
          if (this.data.product.sku.typeObj[e.currentTarget.dataset.value].indexOf(item.value) == -1) {
            item.checked = false
            item.disable = true
          } else {
            item.disable = false
          }
        })
      }
<<<<<<< HEAD

      this.setData({
        order: app.globalData.pageAppointment
      }, () => {
        if (specHasSelected) {
          this.couponFilter()
        }

        if (this.data.product !== undefined && this.data.order !== undefined) {
          var serverPrice = parseFloat((this.data.product.sku.sale_price * this.data.order.count).toFixed(2))
          var totalPrice = parseFloat((this.data.product.sku.sale_price * this.data.order.count - this.data.order.coupon.count).toFixed(2))
          // if (typeof (this.data.product.sku.sale_price * this.data.order.count).toFixed(2) == 'number') {
          //     serverPrice = (this.data.product.sku.sale_price * this.data.order.count).toFixed(2)
          // }
          // if (typeof (this.data.product.sku.sale_price * this.data.order.count - this.data.order.coupon.count).toFixed(2) == 'number') {
          //   totalPrice = (this.data.product.sku.sale_price * this.data.order.count - this.data.order.coupon.count).toFixed(2)
          // }
          this.setData({
            serverPrice: serverPrice,
            totalPrice: totalPrice
=======
      console.log(app)
      this.setData({

        order: app.globalData.pageAppointment
      }, () => {
        // if (specHasSelected) {
        //   this.couponFilter()
        // }

        if (this.data.product !== undefined && this.data.order !== undefined) {
          var serverPrice = parseFloat((this.data.product.sku.sale_price * this.data.order.count).toFixed(2))
          this.setData({
            serverPrice: serverPrice
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
          })
        }
      })
    }
  },

  // 选择产品规格
  specChange: function (e) {
    if (!e.currentTarget.dataset.disable) {
      //要分两种情况，1、产品类型已选择，2、产品类型没有任何选择
      var typeHasSelected = false
      app.globalData.pageAppointment.typeData.map((item, index) => {
        if (item.checked) {
          typeHasSelected = true
        }
      })
      if (app.globalData.pageAppointment.specData[e.currentTarget.id].checked) {//取消选择
        app.globalData.pageAppointment.specData.map((item, index) => {
          if (typeHasSelected) {//产品类型已选择
            item.checked = false
          } else {//产品类型没有任何选择
            item.checked = false
            item.disable = false
          }
        })
        app.globalData.pageAppointment.typeData.map((item, index) => {
          item.disable = false
        })

<<<<<<< HEAD
        app.globalData.pageAppointment.coupon = { id: '', count: 0 } //取消选中就把优惠劵清空
=======
        // app.globalData.pageAppointment.coupon = { id: '', count: 0 } //取消选中就把优惠劵清空
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        var product = this.data.product
        product.sku.specName = ''
        product.sku.sale_price = ''
        this.setData({
          product: product
        })
      } else {
        app.globalData.pageAppointment.specData.map((item, index) => {
          if (typeHasSelected) { //产品类型已选择
            if (item.checked) {
              item.checked = false
            }
          } else { //产品类型没有任何选择
            item.checked = false
            item.disable = false
          }
        })
        app.globalData.pageAppointment.specData[e.currentTarget.id].checked = true

        app.globalData.pageAppointment.typeData.map((item, index) => {
          //已是选中了某个产品规格，再循环判断产品类型是否有选中，如果有，判断出产品的地址是否单选、获取id
          if (item.checked) {
            // console.log(this.data.product.sku.productFilter[item.value][e.currentTarget.dataset.value])
            var product = this.data.product
            product.sku.id = product.sku.productFilter[item.value][e.currentTarget.dataset.value].id
            product.sku.isMoreAddr = product.sku.productFilter[item.value][e.currentTarget.dataset.value].more_select
            product.sku.sale_price = product.sku.productFilter[item.value][e.currentTarget.dataset.value].sale_price
            product.sku.typeName = item.value
            product.sku.specName = e.currentTarget.dataset.value
            this.setData({
              product: product
            })
          }
          // 如果所有产品类型中的某一个不在某个产品规格的产品类型列表里，该产品类型不选中且不能点击
          if (this.data.product.sku.specObj[e.currentTarget.dataset.value].indexOf(item.value) == -1) {
            item.checked = false
            item.disable = true
          } else {
            item.disable = false
          }
        })
      }

      this.setData({
        order: app.globalData.pageAppointment
      }, () => {
<<<<<<< HEAD
        if (typeHasSelected) {
          this.couponFilter()
        }

        if (this.data.product !== undefined && this.data.order !== undefined) {
          var serverPrice = parseFloat((this.data.product.sku.sale_price * this.data.order.count).toFixed(2))
          var totalPrice = parseFloat((this.data.product.sku.sale_price * this.data.order.count - this.data.order.coupon.count).toFixed(2))
          
          // if (typeof (this.data.product.sku.sale_price * this.data.order.count).toFixed(2) == 'number') {
          //   serverPrice = (this.data.product.sku.sale_price * this.data.order.count).toFixed(2)
          // }
          // if (typeof (this.data.product.sku.sale_price * this.data.order.count - this.data.order.coupon.count).toFixed(2) == 'number') {
          //   totalPrice = (this.data.product.sku.sale_price * this.data.order.count - this.data.order.coupon.count).toFixed(2)
          // }
          this.setData({
            serverPrice: serverPrice,
            totalPrice: totalPrice
=======
        // if (typeHasSelected) {
        //   this.couponFilter()
        // }

        if (this.data.product !== undefined && this.data.order !== undefined) {
          var serverPrice = parseFloat((this.data.product.sku.sale_price * this.data.order.count).toFixed(2))
          this.setData({
            serverPrice: serverPrice
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
          })
        }
      })
    }
  },

  // 数量
  countChange: function ({ detail }) {
<<<<<<< HEAD
    app.globalData.pageAppointment.count = detail.value
    this.setData({
      order: app.globalData.pageAppointment
    }, () => {
      this.setData({
        serverPrice: (this.data.product.sku.sale_price * this.data.order.count).toFixed(2),
        totalPrice: (this.data.product.sku.sale_price * this.data.order.count - this.data.order.coupon.count).toFixed(2)
      })
      this.couponFilter()
    })
  },
  
=======
    console.log(this)
    console.log(detail)
    let salePrice = this.data.product.sku.sale_price
    if (!salePrice) return
    app.globalData.pageAppointment.count = detail.value
    console.log(app)
    this.setData({
      order: app.globalData.pageAppointment
    }, () => {
      console.log(app)
      console.log(this)
      this.setData({
        serverPrice: (salePrice * this.data.order.count).toFixed(2)
      })
      // this.couponFilter()
    })
  },

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  textareaInput: function (e) {
    app.globalData.pageAppointment.msg = e.detail.value
    this.setData({
      order: app.globalData.pageAppointment
    })
  },

  bindDateChange: function (e) {
<<<<<<< HEAD
=======
    console.log(app)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    app.globalData.pageAppointment.date = e.detail.value
    this.setData({
      order: app.globalData.pageAppointment
    })
  },

<<<<<<< HEAD
  clickTimePicker: function() {
=======
  clickTimePicker: function () {
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    if (this.data.order.date === '') {
      wx.showToast({
        title: '请先选择日期！',
        icon: 'none',
        duration: 3000
      })
      return;
    }

    if (this.data.order.date === this.data.startDate) {
      var myDate = new Date();
      var hour = myDate.getHours();
      var minutes = myDate.getMinutes();
      let timeHour = [], timeMin = [], count = 0

      if (minutes > 30) {
        count = hour + 1
        timeMin = ['00', '30']
<<<<<<< HEAD
      } else {
=======
      } else { 
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        count = hour
        timeMin = ['30']
      }
      for (let i = count; i < 24; i++) {
        timeHour.push(i >= 10 ? i + '' : '0' + i);
      }

      this.setData({
        time: [timeHour, timeMin]
      })
    } else {
      this.setData({
        time: [['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'], ['00', '30']]
      })
    }
  },

<<<<<<< HEAD
  timeColumnChange: function(e) {
=======
  timeColumnChange: function (e) {
    console.log(e)
    console.log(this)
    console.log(this.data.order.date === this.data.startDate)
    console.log(e.detail.column === 0)
    console.log(e.detail.value === 0)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    if (this.data.order.date === this.data.startDate && e.detail.column === 0 && e.detail.value === 0) {
      var myDate = new Date();
      var minutes = myDate.getMinutes();
      var timeHour = this.data.time[0]
<<<<<<< HEAD
=======
      console.log(minutes + '-' + timeHour)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39

      if (minutes > 30) {
        this.setData({
          time: [timeHour, ['00', '30']]
        })
      } else {
<<<<<<< HEAD
=======
        
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        this.setData({
          time: [timeHour, ['30']]
        })
      }
    } else {
      this.setData({
        time: [this.data.time[0], ['00', '30']]
      })
    }
  },

  bindTimeChange: function (e) {
<<<<<<< HEAD
=======
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();

    month < 10 ? month = '0' + month : null
    day < 10 ? day = '0' + day : null

    if (e.detail.value[0] === 0 && e.detail.value[1] === 0 && this.data.order.date === (year + '-' + month + '-' + day)) {
      wx.showModal({
        title: '提示',
        content: '您预约的下单时间快到了，师傅可能无法准时到达哦！',
        showCancel: false
      })
    }
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    app.globalData.pageAppointment.time = this.data.time[0][e.detail.value[0]] + ':' + this.data.time[1][e.detail.value[1]]
    this.setData({
      order: app.globalData.pageAppointment
    })
  },

  selectCoupon: function () {
    var that = this
    if (!this.data.product.sku.typeName) {
      wx.showToast({
        title: '产品类型不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if (!this.data.product.sku.specName) {
      wx.showToast({
        title: '产品规格不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    wx.navigateTo({
      url: '../serviceCoupon/index?c_id=' + that.data.product.c_id + '&total=' + (that.data.product.sku.sale_price * that.data.order.count)
    })
  },

<<<<<<< HEAD
  getCoupon: function () {
    var that = this
    //查询个人优惠券
    var getCoupon = wxRequest.postRequest(path.getCoupon(), {
      page: 1,
      page_size: 100,
      status: 0 //0为未使用
    });
    getCoupon.then(res => {
      var coupons = res.data.data.list, length = res.data.data.list.length
      var canUse = []

      for (let item of coupons) {
        if (item.service_id.split(',').indexOf(that.data.product.c_id + '') != -1) {
          canUse.push(item)
        }
      }

      that.setData({
        canUse: canUse
      })
    })
  },

  // 自动筛选最优优惠劵
  couponFilter: function () {
    var count = parseFloat(this.data.product.sku.sale_price * this.data.order.count)
    var priceLower = [], maxSaleOff = 0, finalCoupon = {}
    if (this.data.canUse.length) {
      for (let item of this.data.canUse) {
        if (item.prices <= count) {// 过滤掉价格大于服务金额的
          if (item.prices > maxSaleOff) {
            maxSaleOff = item.prices
            finalCoupon = item
          }
        }
      }

      app.globalData.pageAppointment.coupon = {
        coupon_code: finalCoupon.coupon_code || '',
        count: finalCoupon.prices || 0
      }

      this.setData({
        order: app.globalData.pageAppointment
      }, () => {
        this.setData({
          totalPrice: parseFloat((this.data.product.sku.sale_price * this.data.order.count - this.data.order.coupon.count).toFixed(2))
        })
      })
    }
  },
=======
  // getCoupon: function () {
  //   var that = this
  //   //查询个人优惠券
  //   var getCoupon = wxRequest.postRequest(path.getCoupon(), {
  //     page: 1,
  //     page_size: 100,
  //     status: 0 //0为未使用
  //   });
  //   getCoupon.then(res => {
  //     var coupons = res.data.data.list, length = res.data.data.list.length
  //     var canUse = []

  //     for (let item of coupons) {
  //       if (item.service_id.split(',').indexOf(that.data.product.c_id + '') != -1) {
  //         canUse.push(item)
  //       }
  //     }

  //     that.setData({
  //       canUse: canUse
  //     })
  //   })
  // },

  // 自动筛选最优优惠劵
  // couponFilter: function () {
  //   var count = parseFloat(this.data.product.sku.sale_price * this.data.order.count)
  //   var priceLower = [], maxSaleOff = 0, finalCoupon = {}
  //   if (this.data.canUse.length) {
  //     for (let item of this.data.canUse) {
  //       if (item.prices <= count) {// 过滤掉价格大于服务金额的
  //         if (item.prices > maxSaleOff) {
  //           maxSaleOff = item.prices
  //           finalCoupon = item
  //         }
  //       }
  //     }

  //     app.globalData.pageAppointment.coupon = {
  //       coupon_code: finalCoupon.coupon_code || '',
  //       count: finalCoupon.prices || 0
  //     }

  //     this.setData({
  //       order: app.globalData.pageAppointment
  //     })
  //   }
  // },
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39

  getSkuById: function (id) {
    var that = this
    //获取产品的sku
    var getProductSku = wxRequest.postRequest(path.getProductSku(), {
      p_id: id
    });
    getProductSku.then(res => {
      if (JSON.stringify(res.data.data) !== '{}') {
        var list = res.data.data.list,
          types = [],//产品类型名称的数组
          spec = [], //产品规格名称的数据
          typeObj = {}, //
          specObj = {},
          productFilter = {}// 用于使用产品类型和规格筛选出产品sku的id以及是否地址单选
        for (let item of list) {
          item.type = JSON.parse(item.type)
          item.special = JSON.parse(item.special)

          if (types.indexOf(item.type.name) == -1) {
            types.push(item.type.name) //产品类型名称的数组
            typeObj[item.type.name] = [] //产品类型名称为数组
            productFilter[item.type.name] = {}
          }

          if (spec.indexOf(item.special.name) == -1) {
            spec.push(item.special.name) //产品规格名称的数据
            specObj[item.special.name] = [] //产品规格名称为数组
          }
        }

        for (let index = 0; index < list.length; index++) {
          for (let typeItem in typeObj) { //以产品类型名称为属性，该属性下有的产品规格都放到数组里
            if (typeItem == list[index].type.name) {
              typeObj[typeItem].push(list[index].special.name)
            }
          }
          for (let specItem in specObj) { //以产品规格名称为属性，该属性下有的产品类型都放到数组里
            if (specItem == list[index].special.name) {
              specObj[specItem].push(list[index].type.name)
            }
            productFilter[list[index].type.name][list[index].special.name] = {
              more_select: list[index].type.more_select,
              id: list[index].id,
              sale_price: parseFloat(list[index].sale_price)
            }
          }
        }

        for (let i = 0; i < types.length; i++) {
          app.globalData.pageAppointment.typeData.push({
            name: i + 1 + '',
            value: types[i],
            checked: false,
            disable: false
          })
        }

        for (let l = 0; l < spec.length; l++) {
          app.globalData.pageAppointment.specData.push({
            name: l + 1 + '',
            value: spec[l],
            checked: false,
            disable: false
          })
        }

<<<<<<< HEAD
        // console.log(types)
        // console.log(spec)
        // console.log(typeObj)
        // console.log(specObj)
        // console.log(productFilter)

=======
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        var product = that.data.product
        product.sku = {
          types: types,
          typeObj: typeObj,
          spec: spec,
          specObj: specObj,
          productFilter: productFilter
        }

        that.setData({
          order: app.globalData.pageAppointment,
          product: product
        })
      }
    })
  },

<<<<<<< HEAD
=======
  addToShopcart: function () {
    console.log(this)
    if (!this.data.product.sku.typeName) {
      wx.showToast({
        title: '产品类型不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if (!this.data.product.sku.specName) {
      wx.showToast({
        title: '产品规格不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if (this.data.order.endAddr == '') {
      wx.showToast({
        title: '终点地址不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if (this.data.product.sku.isMoreAddr) {
      if (this.data.order.startAddr == '') {
        wx.showToast({
          title: '起始地址不能为空！',
          icon: 'none',
          duration: 2000
        })
        return
      }
    }
    if (this.data.order.date == '') {
      wx.showToast({
        title: '服务日期不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if (this.data.order.time == '') {
      wx.showToast({
        title: '服务时间不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    var that = this
    var post_data = {
      p_id: this.data.product.p_id,
      num: this.data.order.count,
      remark: this.data.order.msg,
      address_id: this.data.order.endAddr.id,
      is_standard: 1,
      date: this.data.order.date,
      time: this.data.order.time,
      sku_id: this.data.product.sku.id,
      labels: JSON.stringify(that.getSelectedLabel()),
      take_address_id: this.data.order.startAddr ? this.data.order.startAddr.id : null
    };

    var addToShopcart = wxRequest.postRequest(path.addToShopcart(), post_data);
    addToShopcart.then(res => {
      console.log(res);
      console.log(that);
      if (res.data.status) {
        wx.showToast({
          title: '添加成功！',
          duration: 2000
        })
        that.cartNum()
      }
    })
  },

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  submitOrder: function () {
    if (!this.data.product.sku.typeName) {
      wx.showToast({
        title: '产品类型不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if (!this.data.product.sku.specName) {
      wx.showToast({
        title: '产品规格不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if (this.data.order.endAddr == '') {
      wx.showToast({
        title: '终点地址不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if (this.data.product.sku.isMoreAddr) {
      if (this.data.order.startAddr == '') {
        wx.showToast({
          title: '起始地址不能为空！',
          icon: 'none',
          duration: 2000
        })
        return
      }
    }
    if (this.data.order.date == '') {
      wx.showToast({
        title: '服务日期不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if (this.data.order.time == '') {
      wx.showToast({
        title: '服务时间不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    var that = this
    var post_data = {
      obj_name: this.data.product.p_name,
      obj_id: this.data.product.p_id,
      c_id: this.data.product.c_id,
      product_type: this.data.product.sku.typeName,
      product_guige: this.data.product.sku.specName,
      product_num: this.data.order.count,
      make_time: this.data.order.date + ' ' + this.data.order.time,
<<<<<<< HEAD
      coupon_code: this.data.order.coupon.coupon_code,
      remark: this.data.order.msg,
      amount: this.data.product.sku.sale_price * this.data.order.count,
      total: this.data.product.sku.sale_price * this.data.order.count - this.data.order.coupon.count,
=======
      // coupon_code: this.data.order.coupon.coupon_code,
      remark: this.data.order.msg,
      amount: this.data.product.sku.sale_price * this.data.order.count,
      // total: this.data.product.sku.sale_price * this.data.order.count - this.data.order.coupon.count,
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      mobile: this.data.order.endAddr.mobile,
      username: this.data.order.endAddr.name,
      take_address_info: this.data.order.startAddr ? JSON.stringify(this.data.order.startAddr) : null,
      address_info: JSON.stringify(this.data.order.endAddr),
      sku_id: this.data.product.sku.id,
<<<<<<< HEAD
=======
      labels: JSON.stringify(that.getSelectedLabel()),
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      order_type: 0,
    };

    //用户下单
<<<<<<< HEAD
    var submitOrder = wxRequest.postRequest(path.submitOrder(), post_data );
    submitOrder.then(res => {
      if (res.data.status) {
        wx.redirectTo({
          url: '/pages/pay/index?orderId=' + res.data.data.order_id + '&orderSn=' + res.data.data.order_sn + '&count=' + (that.data.product.sku.sale_price * that.data.order.count - that.data.order.coupon.count) + '&isStandard=' + that.data.product.is_standard
        })
      }
    })
=======
    var submitOrder = wxRequest.postRequest(path.submitOrder(), post_data);
    submitOrder.then(res => {
      console.log(res)
      if (res.data.status) {
        wx.redirectTo({
          url: '/pages/pay/index?orderId=' + res.data.data.order_id + '&orderSn=' + res.data.data.order_sn + '&count=' + (that.data.product.sku.sale_price * that.data.order.count) + '&isStandard=' + that.data.product.is_standard + '&c_id=' + res.data.data.c_id + '&cityid=' + this.data.order.endAddr.city_id
        })
      }
    })
  },

  cartNum: function () {
    var that = this
    var cartNum = wxRequest.postRequest(path.cartNum(), {
      is_standard: 1
    });

    cartNum.then(res => {
      if (res.data.status) {
        console.log(res)
        that.setData({
          shopCartCount: res.data.data.count
        })
      }
    })
  },

  getSelectedLabel: function () {
    let splList = []
    this.data.product.labels.map(item => {
      let child_labels = []
      item.child_labels.map(label => {
        if (label.checked) {
          child_labels.push(label)
        }
      })
      item.child_labels = child_labels
      if (item.checked || item.child_labels.length) {
        splList.push(item)
      }
    })

    return splList
  },

  fourthCheck: function ({ currentTarget: { dataset: { index } } }) {
    let product = this.data.product
    product.labels[index].checked = !product.labels[index].checked

    this.setData({
      product
    })
  },

  fifthTap: function ({ currentTarget: { dataset: { id, index, idx } } }) {
    let product = this.data.product
    if (!product.labels[index].child_labels[idx].checked) {
      product.labels[index].checked = true
    }
    product.labels[index].child_labels[idx].checked = !product.labels[index].child_labels[idx].checked

    this.setData({
      product
    })
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  }
})