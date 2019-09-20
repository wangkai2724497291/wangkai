// pages/simAppointment/index.js
import config from '../../utils/config.js'
var app = getApp()
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
import regeneratorRuntime from '../../utils/runtime.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: [0, 0],
    time: [['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'], ['00', '30']],
    order: {},
    install: {},
    product: {},
    startDate: '', //用于时间选择器的开始时间
    endDate: '', //用于时间选择器的结束时间
    files: [],
    expected: '',
    shopCartCount: 0,
    content:'',
    NameInput:'',
    NameInputs:0.00,
    showTxtArea: 0, //设定txtarea 隐藏与否
    couponNum: 0,
    indent:'',
    coupon: { code: '', prices: 0 },
    payCount: 0.00,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      content: options.content,
      uname: options.username,
      scene: options.scene,
    })
    var that = this
    wx.request({
      // url: this.data.title + '?uid=' + this.data.uid + '&store=' + this.data.store, 
      url: 'https://www.jiatd.com/mini_user/master/getMasterCardInfo?uid= ' + this.data.scene,
      type: 'get',
      data: {
        token: wx.getStorageSync('token')
      },
      header: {
        'Content-Type': 'application/json',
        'app-ver': '1.6'
      },
      success(res) {
        that.setData({
          serviceinfo: res.data.data.service_product,//服务内容
        })
      }
    })
  },


  // 优惠券
  gotoCoupon: function () {
    if (this.data.NameInput === 0) {
      wx.showToast({
        title: '请先选择支付金额！',
        icon: 'none',
        duration: 3000
      })
      return;
    }
    if (this.data.NameInput < 5) {
      wx.showToast({
        title: '您输入的金额比优惠券小',
        icon: 'none',
        duration: 3000
      })
      return;
    }
    wx.navigateTo({
      url: '../serviceCoupon/index?c_id= + 14&total= 320&from=pay&cityid= 440300',
    })
  },

  service: function (e) {
    var indexs = e.currentTarget.dataset.key
    this.setData({
      state: e.currentTarget.dataset.key,
      servicecontent: this.data.serviceinfo[indexs].c_name,
      c_id:this.data.serviceinfo[indexs].c_id,
      indexs: indexs
    })
  },

  getCoupon: async function () {
    //查询个人优惠券 
    var getCoupon = await wxRequest.postRequest(path.getCoupon(), {
      page: 1,
      page_size: 10,
      status: 0
    });

    this.setData({
      couponNum: getCoupon.data.data.count
    })
  },

  discount:function(){
    wx:wx.navigateTo({
      url: '/pages/coupon/index',
      
    })
  },

  userNameInput:function(e){
    this.setData({
      NameInput: e.detail.value,
      NameInputs: e.detail.value
    })
  },



  niming(e) {
    var flag = e.detail.value[0];

    if (flag === undefined) {
      this.data.bbb = "#bbb";
      flag = false;

    } else {
      this.data.bbb = "#00c482";
      flag = true;
    }
    this.setData({
      if_rem_user: flag,
      bbb: this.data.bbb
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (app.globalData.pagePay.coupon.code != '') {
      var sum = this.data.NameInput
      this.setData({
        coupon: app.globalData.pagePay.coupon,
        NameInputs: (sum - app.globalData.pagePay.coupon.prices).toFixed(2)
      }, () => {
        app.globalData.pagePay.coupon = {
          code: '',
          prices: 0
        }
      })
    }


    this.getCoupon()
    this.setData({
      // order: app.globalData.pageAppointment
      order: app.globalData.pageSimAppoint
    })
    this.cartNum()
  },

  // installtap:function(){
  //   console.log("收货地址")
  //   console.log(app)
  //   this.setData({
  //     install: app.globalData.pageAddress
  //   })
  //   this.cartNum()
  //   console.log("-------------")
  // },

  // orders: function() {
  //   console.log(app)
  //   this.setData({
  //     order: app.globalData.pageSimAppoint
  //   })
  //   this.cartNum()
  //   console.log("服务地址")
  // },

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

  expectedChange: function (e) {
    this.setData({
      expected: e.detail.value
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
        that.setData({
          product: res.data.data
        }, () => {
          if (app.globalData.pageCustomized.fourthList.length) {
            let product = this.data.product
            product.labels = app.globalData.pageCustomized.fourthList
            this.setData({
              product
            })

          }
        })
      }
    })
  },

  // 获取formid
  formSubmit: function (e) {
    var that = this
    var getFormId = wxRequest.postRequest(path.getFormId(), {
      formid: e.detail.formId
    });
    getFormId.then(res => {
      // console.log(res)
    })
  },

  bindDateChange: function (e) {
    app.globalData.pageSimAppoint.date = e.detail.value
    this.setData({
      order: app.globalData.pageSimAppoint,
      install: app.globalData.pageSimAppoint
    })
  },


  bindTimeChange: function (e) {
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
    app.globalData.pageSimAppoint.time = this.data.time[0][e.detail.value[0]] + ':' + this.data.time[1][e.detail.value[1]]
    this.setData({
      order: app.globalData.pageSimAppoint
    })
  },

  clickTimePicker: function () {
    if (this.data.order.date === '') {
      wx.showToast({
        title: '请先选择日期！',
        icon: 'none',
        duration: 3000
      })
      return;
    }

    if (this.data.order.date === this.data.startDate || this.data.order.date >= this.data.startDate) {
      var myDate = new Date();
      var hour = myDate.getHours();
      var minutes = myDate.getMinutes();
      let timeHour = [], timeMin = [], count = 0
      if (minutes > 30) {
        count = hour + 1
        // timeMin = ['00', '30']
        timeMin = [minutes + 30]
        if (timeMin > 60 || timeMin == 60) {
          var minutes = minutes - 60;
          timeMin = [minutes + 30]
          if (timeMin < 10) {
            timeMin = "0" + timeMin
          }
        }
      } else {
        count = hour
        // timeMin = ['30']
        timeMin = [minutes + 30]
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
        // '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'
      })
    }
  },

  timeColumnChange: function (e) {
    if (this.data.order.date === this.data.startDate && e.detail.column === 0 && e.detail.value === 0) {
      var myDate = new Date();
      var minutes = myDate.getMinutes();
      var timeHour = this.data.time[0]

      if (minutes > 30) {
        this.setData({
          time: [timeHour, ['00', '30']]
        })
      } else {
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

  textareaInput: function (e) {
    app.globalData.pageSimAppoint.msg = e.detail.value
    this.setData({
      order: app.globalData.pageSimAppoint
    })
  },

  // 选择图片
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      count: 4 - that.data.files.length,
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // console.log(res)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var shouldAddImg = true
        res.tempFiles.map(item => {
          if (item.size > 2097152) {
            wx.showToast({
              title: '图片不能大于2兆',
              icon: 'none',
              duration: 2000
            })
            shouldAddImg = false
          }
        })

        if (shouldAddImg) {
          that.setData({
            files: that.data.files.concat(res.tempFilePaths)
          });
        }
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  deleteImage: function (event) {
    let arr = this.data.files
    arr.splice(arr.indexOf(event.target.dataset.item), 1)
    this.setData({
      files: arr
    })
  },

  verify: function ({ currentTarget: { dataset: { type } } }) {
    if (!this.data.order.address.name) {
      wx.showToast({
        title: '服务地址不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
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
    var that = this;
    if (that.data.if_rem_user === undefined) {
      that.data.if_rem_user = false;
    }
    if (that.data.if_rem_user == false) {
      wx.showToast({
        title: '未勾选《购买协议》',
        icon: 'none',
        duration: 2000
      })
      return;
    }

    var that = this,
      files = this.data.files,
      fileNames = '',
      success = 0

    if (this.data.files.length) {
      uploadImage()
    } else {
      type === 'submit' ? this.submitOrder(fileNames) : this.addToShopCart(fileNames)
    }

    function uploadImage() {
      wx.showLoading({
        title: '上传第' + (success + 1) + '张图片中...'
      })
      wx.uploadFile({
        url: path.uploadFile(),
        filePath: files[success],
        name: 'orderImage' + (success + 1),
        formData: {
          'file_name': 'orderImage' + (success + 1),
          'token': wx.getStorageSync('token')
        },
        header: {
          'app-ver': config.getVersion
        },
        success: function (res) {
          // console.log(res)
          if (JSON.parse(res.data).status) {
            fileNames = fileNames + JSON.parse(res.data).data.img_src + ','
            success += 1
            if (success < files.length) {
              wx.hideLoading()
              uploadImage()
            } else {
              wx.hideLoading()
              wx.showLoading({
                title: type === 'submit' ? '正在提交订单...' : '添加到购物车'
              })
              type === 'submit' ? that.submitOrder(fileNames) : that.addToShopCart(fileNames)
            }
          } else {
            wx.hideLoading()
            wx.showToast({
              title: '图片上传错误。',
              icon: 'none',
              duration: 2000
            })
          }
        },
        fail: function (err) {
          wx.showModal({
            title: '错误',
            content: path.uploadFile() + JSON.stringify(err)
          })
          wx.hideLoading()
          wx.showToast({
            title: '图片上传失败！',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  },

  addToShopCart: function (fileNames) {
    var that = this
    var post_data = {
      p_id: this.data.product.p_id,
      remark: this.data.order.msg,
      address_id: this.data.order.address.id,
      expected_quotation: parseFloat(this.data.expected),
      is_standard: 0,
      date: this.data.order.date,
      time: this.data.order.time,
      labels: JSON.stringify(that.getSelectedLabel()),
      take_address_id: this.data.order.startAddr ? this.data.order.startAddr.id : null,
      file_name: fileNames.substring(0, fileNames.length - 1)
    };

    var addToShopcart = wxRequest.postRequest(path.addToShopcart(), post_data);
    addToShopcart.then(res => {
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

  submitorder_oc:function(){
    if (!this.data.servicecontent) {
      wx.showToast({
        title: '服务内容不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if (!this.data.order.address.name) {
      wx.showToast({
        title: '服务地址不能为空！',
        icon: 'none',
        duration: 2000
      })
      return
    }
    if(this.data.NameInput == ''){
      wx.showToast({
        title: '支付金额不能为空',
        icon: 'none',
        duration: 2000
      })
      return
    }
    // if (this.data.NameInput < 20) {
    //   wx.showToast({
    //     title: '支付金额不能少于20',
    //     icon: 'none',
    //     duration: 2000
    //   })
    //   return
    // }
   
    //用户扫码下单
    var submitOrder = wxRequest.postRequest(path.ScanVerIfiCation(), {
      username: app.globalData.userInfo.nickName,//用户名
      mobile: this.data.order.address.mobile,//手机号码
      obj_name: this.data.servicecontent,//服务类别名称
      amount: this.data.NameInput,//金额
      c_id:this.data.c_id,//类别id
      total: this.data.NameInput,
      uid: this.data.scene,
      address_info: this.data.order.address.address,
      coupon_code: this.data.coupon.code || null
    });
    submitOrder.then(res => {
      if (res.data.status) {
        wx.redirectTo({
          url: '/pages/confirmorder/confirmorder?name=' + this.data.order.address.name + '&phone=' + this.data.order.address.mobile + '&address=' + this.data.order.address.address + '&content=' + this.data.servicecontent + '&NameInput=' + this.data.NameInput + '&NameInputs=' + this.data.NameInputs + '&pid=' + this.data.c_id + '&indent=' + res.data.data.order_sn + '&discount=' + this.data.coupon.prices
        })
      }
    })



    // wx.navigateTo({
    //   url: '/pages/confirmorder/confirmorder?name=' + this.data.order.address.name + '&phone=' + this.data.order.address.mobile + '&address=' + this.data.order.address.address + '&content=' + this.data.content + '&NameInput=' + this.data.NameInput + '&pid=' + this.data.pid
    // })
  },

  submitOrder: function (fileNames) {
    var that = this
    var submitOrder = wxRequest.postRequest(path.submitOrder(), {
      obj_name: that.data.product.p_name,
      obj_id: that.data.product.p_id,
      c_id: that.data.product.c_id,
      make_time: that.data.order.date + ' ' + that.data.order.time,
      remark: that.data.order.msg,
      mobile: that.data.order.address.mobile,
      username: that.data.order.address.name,
      address_info: JSON.stringify(that.data.order.address),
      order_type: 1,
      expected_quotation: that.data.expected,
      labels: JSON.stringify(that.getSelectedLabel()),
      file_name: fileNames.substring(0, fileNames.length - 1)
    });
    submitOrder.then(result => {
      if (result.data.status) {
        wx.hideLoading()
        wx.reLaunch({
          url: '/pages/orders/index'
        })
      } else {
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  cartNum: function () {
    var that = this
    var cartNum = wxRequest.postRequest(path.cartNum(), {
      is_standard: 0
    });

    cartNum.then(res => {
      if (res.data.status) {
        that.setData({
          shopCartCount: res.data.data.count
        })
      }
    })
  },

  fourthCheck: function ({ currentTarget: { dataset: { index } } }) {
    let product = this.data.product
    product.labels[index].checked = !product.labels[index].checked
    this.setData({
      product,
      firstIndex: index
    })
  },

  fifthTap: function ({ currentTarget: { dataset: { index, idx } } }) {
    let product = this.data.product
    if (!product.labels[index].child_labels[idx].checked) {
      product.labels[index].checked = true
    }
    product.labels[index].child_labels[idx].checked = !product.labels[index].child_labels[idx].checked

    this.setData({
      product
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

  change2txtarea: function () {
    var that = this
    that.setData({
      showTxtArea: 1
    })
  },

  confirmtxt: function () {
  }
})

