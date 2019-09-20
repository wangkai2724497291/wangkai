// pages/orderDetail/index.js
var util = require('../../utils/util.js');
var path = require('../../utils/api.js');
var wxRequest = require('../../utils/wxRequest.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order: {},
    visible: false,
<<<<<<< HEAD
    payFeeTitle: '感谢费',
    payFee: '',
    status: ['新增', '待报价', '已报价', '待确认', '待上门', '服务中', '服务完成', '已完成', '已评价', '已取消'],
=======
    visibles:false,
    // statu:0,
    payFeeTitle: '感谢费',
    payFeeTitles: '补差价',
    payFee: '',
    payFees: '',
    status: ['新增', '待报价', '已报价', '待确认', '待上门', '服务中', '服务完成', '已完成', '已评价', '已取消', '已上门'],
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    actions: [
      {
        name: '不给感谢费',
        color: '#8c92a2'
      },
      {
        name: '支付感谢费',
        color: '#00c482'
      }
    ],
<<<<<<< HEAD
=======
    actionss: [
      {
        name: '取消',
        color: '#8c92a2'
      },
      {
        name: '确定',
        color: '#8c92a2'
      }
    ],
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    files: [],
    comment: {},
    disableCancleBtn: false,
    disableConfirmBtn: false,
<<<<<<< HEAD
    masterList: []
=======
    masterList: [],
    showModal: false,
    name:[],
    isPaying:false,
    resps:''
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOrderById(options.order_id)
    if (options.tab) {
      app.globalData.orderType = options.tab
    }
<<<<<<< HEAD
  },

  /**
=======
    console.log(app);
    console.log(this)
  },

  showDialogBtn:function(){
    this.setData({
      showModal: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },

  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },

  inputChange:function(e){
    // console.log(e)
    this.setData({
      name: e.detail.value
    })
    
  },
  /**
     * 对话框取消按钮点击事件
     */
  onCancel: function () {
    this.hideModal();
    console.log(this)       
  },
  /**
   * 对话框确认按钮点击事件
   */
  


  onConfirm: function (e) {
    this.hideModal();
    var re = /^\+?[1-9][0-9]*$/;
    if (re.test(this.data.name)) {
      console.log("差价：" + this.data.name)
      console.log("订单编号：" + this.data.order.order_sn)
      console.log("订单号：" + this.data.order.order_id)
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })
      var difference = wxRequest.postRequest(path.difference(), {
        token: wx.getStorageSync('token'),
        order_id: this.data.order.order_id,
        price_diff: this.data.name
      });
      difference.then(res => {
        console.log(res)
      })
    } else {
      wx.showToast({
        title: '你输入的字符有误',
        icon: 'none',
        duration: 2000
      })
    }
  },




  // pay: function () {
  //   var that = this

  //   const index = detail.index
  //   if (index === 0) {
  //     // console.log('不给感谢费')
  //     this.setData({
  //       visible: false
  //     })
  //   } else if (index === 1) {
  //     // console.log('给感谢费')
  //     if (that.data.payFee === '') {
  //       wx.showToast({
  //         title: '您还没有填写金额',
  //         icon: 'none',
  //         duration: 1500,
  //       })
  //       return;
  //     }
  //     var payFee = wxRequest.postRequest(path.payFee(), {
  //       'order_sn': this.data.order.order_sn,
  //       'total_fee': this.data.name,
  //       'type': 2
  //     });
  //     payFee.then(res => {
  //       if (res.data.status) {
  //         if (res.data.message == '支付成功') {
  //           that.getOrderById(that.data.order.order_id)
  //           wx.showToast({
  //             title: '支付成功',
  //             icon: 'success',
  //             duration: 2000
  //           })
  //           that.setData({
  //             visible: false
  //           })
  //         } else if (res.data.message == '获取成功') {
  //           // console.log('获取成功')
  //           wx.requestPayment({
  //             'timeStamp': res.data.data.timeStamp,
  //             'nonceStr': res.data.data.nonceStr,
  //             'package': res.data.data.package,
  //             'signType': 'MD5',
  //             'paySign': res.data.data.paySign,
  //             'success': function (res) {
  //               that.setData({
  //                 visible: false
  //               })
  //               that.getOrderById(that.data.order.order_id)
  //               wx.showToast({
  //                 title: '支付成功',
  //                 icon: 'success',
  //                 duration: 2000
  //               })
  //             },
  //             'fail': function (res) {
  //               wx.showToast({
  //                 title: '取消支付',
  //                 icon: 'none',
  //                 duration: 2000
  //               })
  //             }
  //           })
  //         }
  //       }
  //     })
  //   }
  // },


  pay: function () {
    var that = this
    wx.showLoading({
      title: '加载中',
    })
    console.log(this)
    this.setData({
      isPaying: true
    }, () => {
      //小程序微信支付获取支付密钥

      var getWxpay = wxRequest.postRequest(path.payFee(), {
        order_sn: this.data.order.order_sn,
        total_fee: this.data.name,
        type: 2,
        // token:wx.getSystemInfoSync("token")
      });
      getWxpay.then(resp => {
        console.log(resp)
        console.log(that)
        console.log(resp.data.status)
        wx.hideLoading()
        if (resp.data.status === 2) {
          wx.showModal({
            title: '提示',
            content: resp.data.message,
            showCancel: false,
            success: function () {
              if (that.data.isStandard) {//标准订单支付
                app.globalData.orderType = 'excuting'
              }
              wx.reLaunch({
                url: '/pages/orders/index',
              })
            }
          })
        } else if (resp.data.status === 1) {
          wx.requestPayment({
            'timeStamp': resp.data.data.timeStamp,
            'nonceStr': resp.data.data.nonceStr,
            'package': resp.data.data.package,
            'signType': 'MD5',
            'paySign': resp.data.data.paySign,
            'complete': function (resp) {
              // console.log(that.data.isStandard)
              if (that.data.isStandard) {//标准订单支付
                app.globalData.orderType = 'excuting'
                wx.reLaunch({
                  url: '/pages/orders/index',
                })
              } else {//非标准订单同意报价并支付
                wx.navigateBack()
              }
            },
            'fail': function () {
              if (!that.data.isStandard) {
                var cancelPay = wxRequest.postRequest(path.cancelPay());
                cancelPay.then(cancelPayRes => { })
              }
            }
          })
        } else {
          // wx.showToast({
          //   title: res.data.message,
          // })
          wx.showModal({
            title: '错误',
            content: resp.data.message,
            showCancel: false,
            success: function () {
              wx.navigateBack()
            }
          })
        }
      })
    })
  },




  // onConfirm: function (e) {
  //   this.hideModal();
  //   var re = /^\+?[1-9][0-9]*$/;
  //   if (re.test(this.data.name)) {
  //     console.log("差价："+this.data.name)
  //     console.log("订单编号：" +this.data.order.order_sn)
  //     console.log("订单号：" + this.data.order.order_id)
  //     wx.showToast({
  //       title: '提交成功',
  //       icon: 'success',
  //       duration: 2000
  //     })
  //     var difference = wxRequest.postRequest(path.difference(), {
  //       token: wx.getStorageSync('token'),
  //       order_id: this.data.order.order_id,
  //       price_diff: this.data.name
  //     });
  //     difference.then(res => {
  //       console.log(res)
  //     })
  //   }else{
  //     wx.showToast({
  //       title: '你输入的字符有误',
  //       icon: 'none',
  //       duration: 2000
  //     })
  //   }
  // },


  /**
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
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
    console.log(this)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    if (JSON.stringify(this.data.order) != '{}') {
      this.getOrderById(this.data.order.order_id)
    }
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
<<<<<<< HEAD
  
=======
    // this.confirmIndoor();
    
    // // 隐藏导航栏加载框
    // wx.hideNavigationBarLoading();
    // // 停止下拉动作
    // wx.stopPullDownRefresh();
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
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

  // 支付差价弹窗
  showpayDiff: function (e) {
    var that = this
    wx.showModal({
      title: '提示',
      content: '支付差价',
      success: function (res) {
        if (res.confirm) {
          var payFee = wxRequest.postRequest(path.payFee(), {
            'order_sn': that.data.order.order_sn,
            'type': 2
          });
          payFee.then(res => {
            if (res.data.status) {
              if (res.data.message == '支付成功') {
                that.getOrderById(that.data.order.order_id)
                wx.showToast({
                  title: '支付成功',
                  icon: 'success',
                  duration: 2000
                })
              } else if (res.data.message == '获取成功') {
                wx.requestPayment({
                  'timeStamp': res.data.data.timeStamp,
                  'nonceStr': res.data.data.nonceStr,
                  'package': res.data.data.package,
                  'signType': 'MD5',
                  'paySign': res.data.data.paySign,
                  'success': function (res) {
                    that.getOrderById(that.data.order.order_id)
                    wx.showToast({
                      title: '支付成功',
                      icon: 'success',
                      duration: 2000
                    })
                  },
                  'fail': function (res) {
                    wx.showToast({
                      title: '取消支付',
                      icon: 'none',
                      duration: 2000
                    })
                  }
                })
              }
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

<<<<<<< HEAD
=======
  payFeeInputs: function (e) {
    this.setData({
      payFees: e.detail.value
    })
  },
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  payFeeInput: function (e) {
    this.setData({
      payFee: e.detail.value
    })
  },

<<<<<<< HEAD
=======
  // 补差价
  showpayFees: function () {
    console.log(this.data.visibles)
   
    this.setData({
      visibles: true,
      visibl:true,
    })
  },

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  showpayFee: function () {
    this.setData({
      visible: true
    })
  },

<<<<<<< HEAD
  // 感谢费
  payFee: function ({ detail }) {
    var that = this

=======

  // 补差价
  payFees: function ({ detail }) {
    console.log(detail)
    var that = this
    console.log(that)
    const index = detail.index
    if (index === 0) {
      // console.log('不给感谢费')
      console.log(that)
      this.setData({
        visibles: false,
        visibl:false
      })
    } else if (index === 1) {
      // console.log('给感谢费')
      console.log(that)
      if (that.data.payFees === '') {
        wx.showToast({
          title: '您还没有填写金额',
          icon: 'none',
          duration: 1500,
        })
        return;
      }
      console.log(that)
      var payFees = wxRequest.postRequest(path.payFee(), {
        
        'order_sn': that.data.order.order_sn,
        'total_fee': that.data.payFees,
        'type': 2
      });
      payFees.then(res => {
        console.log(res)
        console.log(that)
        if (res.data.status) {
          if (res.data.message == '支付成功') {
            console.log(that)
            that.getOrderById(that.data.order.order_id)
            wx.showToast({
              title: '支付成功',
              icon: 'success',
              duration: 2000
            })
            console.log(that)
            that.setData({
              visibles: false,
              visibl:true,
              // statu:res.data.data.status,
              resps: res.data.message
            })
          } else if (res.data.message == '获取成功') {
            console.log(that)
            console.log(res)
            wx.requestPayment({
              'timeStamp': res.data.data.timeStamp,
              'nonceStr': res.data.data.nonceStr,
              'package': res.data.data.package,
              'signType': 'MD5',
              'paySign': res.data.data.paySign,
              'success': function (res) {
                console.log(res)
                that.setData({
                  visibles: false,
                  visibl:true,
                  
                })
                console.log(that)
                that.getOrderById(that.data.order.order_id)
                wx.showToast({
                  title: '支付成功',
                  icon: 'success',
                  duration: 2000
                })
                console.log(that)
              },
              'fail': function (res) {
                wx.showToast({
                  title: '取消支付',
                  icon: 'none',
                  duration: 2000
                })
              }
            })
          }else if(res.data.message == '该订单已经支付过差价'){
            wx.showToast({
              title: res.data.message,
              icon:'none',
              duration:2000
            })
            
          }
        }
      })
    }
  },


  // 感谢费
  payFee: function ({ detail }) {
    var that = this
    console.log(that)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    const index = detail.index
    if (index === 0) {
      // console.log('不给感谢费')
      this.setData({
        visible: false
      })
    } else if (index === 1) {
      // console.log('给感谢费')
      if (that.data.payFee === '') {
        wx.showToast({
          title: '您还没有填写金额',
          icon: 'none',
<<<<<<< HEAD
          duration: 1500
=======
          duration: 1500,
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        })
        return;
      }
      var payFee = wxRequest.postRequest(path.payFee(), {
        'order_sn': that.data.order.order_sn,
        'total_fee': that.data.payFee,
        'type': 1
      });
      payFee.then(res => {
<<<<<<< HEAD
=======
        console.log(res)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
        if (res.data.status) {
          if (res.data.message == '支付成功') {
            that.getOrderById(that.data.order.order_id)
            wx.showToast({
              title: '支付成功',
              icon: 'success',
              duration: 2000
            })
            that.setData({
              visible: false
            })
          } else if (res.data.message == '获取成功') {
            // console.log('获取成功')
            wx.requestPayment({
              'timeStamp': res.data.data.timeStamp,
              'nonceStr': res.data.data.nonceStr,
              'package': res.data.data.package,
              'signType': 'MD5',
              'paySign': res.data.data.paySign,
              'success': function (res) {
                that.setData({
                  visible: false
                })
                that.getOrderById(that.data.order.order_id)
                wx.showToast({
                  title: '支付成功',
                  icon: 'success',
                  duration: 2000
                })
              },
              'fail': function (res) {
                wx.showToast({
                  title: '取消支付',
                  icon: 'none',
                  duration: 2000
                })
              }
            })
          }
        }
      })
    }
  },

  // 打电话
  phoneCall: function () {
<<<<<<< HEAD
=======
    console.log(app)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    const that = this
    wx.makePhoneCall({
      phoneNumber: app.globalData.serviceTel
    })
  },

<<<<<<< HEAD
=======
  // 拨打师傅电话
  callMaster: function ({currentTarget: {dataset: {mobile}}}) {
    wx.makePhoneCall({
      phoneNumber: mobile
    })
  },

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  //选择图片
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      count: 3 - that.data.files.length,
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
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
  //预览图片
  previewImage: function (e) {
    console.log(e.currentTarget.id)
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.order.service_img // 需要预览的图片http链接列表
    })
  },
  //评论预览图片
  commentPreview: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.comment.file // 需要预览的图片http链接列表
    })
  },
  //删除图片
  deleteImage: function (event) {
    let arr = this.data.files
    arr.splice(arr.indexOf(event.target.dataset.item), 1)
    this.setData({
      files: arr
    })
  },

  // 获取订单详情
  getOrderById: function (id) {
<<<<<<< HEAD
=======
    console.log(id)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    var that = this
    var getOrder = wxRequest.postRequest(path.getOrder(), {
      order_id: id
    });
    getOrder.then(res => {
<<<<<<< HEAD
      var order = res.data.data
=======
      console.log(res)
      var order = res.data.data
      console.log(order)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      order.address_info = JSON.parse(order.address_info)
      order.price_diff = parseFloat(order.price_diff)
      order.create_time = util.formatTimeWithMin(order.create_time)
      if (order.take_address_info) {
        order.take_address_info = JSON.parse(order.take_address_info)
      }
      if (order.service_img) {
        order.service_img = order.service_img.split(',')
      }
<<<<<<< HEAD
=======
      console.log(order)
      console.log(order.quotation)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
      if (res.data.status) {
        that.setData({
          order: order
        })

        if (res.data.data.status == 8) {//如果订单已评价，就请求该订单的评论数据
          that.getOrderComment(id)
        }

        if (res.data.data.status == 2) {//如果订单已报价，获取报价师傅列表
          that.getMasters()
        }
      }
    })
  },

  //获取订单评论
  getOrderComment: function (id) {
    var that = this
    var getOrderComment = wxRequest.postRequest(path.getOrderComment(), {
      order_id: id,
      page: 1,
      page_size: 5
    });
    getOrderComment.then(res => {
      if (res.data.status) {
        var comment = res.data.data.list[0]
        comment.star = JSON.parse(comment.star)
        comment.file = comment.file.split(',')
        that.setData({
          comment: comment
        })
      }
    })
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

  //跳转评价
  addComment: function () {
<<<<<<< HEAD
=======
    console.log(this)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    wx.navigateTo({
      url: '/pages/evaluate/index?orderId=' + this.data.order.order_id
    })
  },

<<<<<<< HEAD
  // 取消订单
  cancelOrder: function () {
    var that = this
    var content = this.data.order.status === '5' ? '确认取消订单？\r\n由于师傅已上门，如需继续取消订单，系统将从已支付费用中扣除30元的上门费，剩余金额原路返回!' : '确定取消订单？'
=======
  //再次下单
  again_order: function () {
    wx.navigateTo({
      url: '/pages/master/master?scene=' + this.data.order.master_info.master_id
    })
  },

  // 取消订单
  cancelOrder: function () {
    var that = this
    console.log(that)
    console.log(this)
    var content = this.data.order.status === 5 ? '确认取消订单？\r\n由于师傅已上门，如需继续取消订单，系统将从已支付费用中扣除30元的上门费，剩余金额原路返回!' : '确定取消订单吗？'
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    wx.showModal({
      title: '提示',
      content: content,
      success: function (res) {
        if (res.confirm) {
<<<<<<< HEAD
          // console.log('用户点击确定')
=======
          console.log(res)
          // console.log('用户点击确定')
          
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
          that.setData({
            disableCancleBtn: true
          }, () => {
            var cancelOrder = wxRequest.postRequest(path.cancelOrder(), {
              order_id: that.data.order.order_id
            });
            cancelOrder.then(res => {
<<<<<<< HEAD
=======
              console.log(res)
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
              if (res.data.status) {
                that.setData({
                  disableCancleBtn: false
                }, () => {
                  wx.showModal({
                    title: '提示',
                    content: '取消订单成功！',
                    showCancel: false,
                    success: function (res) {
                      if (res.confirm) {
                        wx.navigateBack()
                      }
                    }
                  })
                })
              } else {
                wx.showModal({
                  title: '提示',
<<<<<<< HEAD
                  content: '取消订单失败！',
=======
                  content: '取消订单失败！请联系客服',
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
                  showCancel: false,
                  success: function (res) {
                    if (res.confirm) {
                      wx.navigateBack()
                    }
                  }
                })
              }
            })
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
  },

<<<<<<< HEAD
=======
  confirmIndoor: function () {
    var that = this
    wx.showModal({
      title: '提示',
      content: '确认上门后，您如需取消订单，需支付30元上门费作为师傅补偿！',
      success: function (modalRes) {
        if (modalRes.confirm) {
          var confirmIndoor = wxRequest.postRequest(path.confirmIndoor(), {
            order_id: that.data.order.order_id
          });

          confirmIndoor.then(res => {
            if (res.data.status) {
              that.getOrderById(that.data.order.order_id)
              wx.showToast({
                title: '确认上门成功',
                icon: 'success',
                duration: 2000
              })
            } else {
              wx.showToast({
                title: res.data.message,
                icon: 'none',
                duration: 2000
              })
            }
          })
        }
      }
    })
  },

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  // 确认完成订单
  confirmOrder: function () {
    var that = this
    this.setData({
      disableConfirmBtn: true
    }, () => {
      var sureOrder = wxRequest.postRequest(path.sureOrder(), {
        order_id: this.data.order.order_id
      });
      sureOrder.then(res => {
        if (res.data.status) {
          that.setData({
            disableConfirmBtn: false
          }, () => {
            app.globalData.orderType = 'completed'
            wx.reLaunch({
              url: '/pages/orders/index'
            })
          })
        }
      })
    })
  },

  // 非标准订单同意报价并支付
  agreeAndPay: function (price) {
<<<<<<< HEAD
    var url = '/pages/pay/index?orderId=' + this.data.order.order_id + '&count=' + price + '&orderSn=' + this.data.order.order_sn + '&isStandard=' + this.data.order.is_standard + '&c_id=' + this.data.order.c_id
=======
    var url = '/pages/pay/index?orderId=' + this.data.order.order_id + '&count=' + price + '&orderSn=' + this.data.order.order_sn + '&isStandard=' + this.data.order.is_standard + '&c_id=' + this.data.order.c_id + '&cityid=' + this.data.order.address_info.cityid
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
    wx.navigateTo({
      url: url,
    })
  },

  // 获取报价师傅列表
  getMasters: function () {
    let that = this
    var getMasters = wxRequest.postRequest(path.getMasters(), {
      order_id: this.data.order.order_id
    });
    getMasters.then(res => {
      if (!res.data.status) return
      res.data.data.order_offer_record.map(item => {
        item.quotation_type.split(',').map(type => {
          item[type] = true
        })
      })
      that.setData({
        masterList: res.data.data
      })
    })
  },

  // 确认雇佣师傅
  sureOrderOffer: function ({currentTarget: {id, dataset}}) {
    let that = this
    var sureOrderOffer = wxRequest.postRequest(path.sureOrderOffer(), {
      id: id
    })
    sureOrderOffer.then(res => {
      if (!res.data.status) return
      that.agreeAndPay(dataset.price)
    })
<<<<<<< HEAD
=======
  },

  // 重新下单
  retakeOrder: function () {
    let that = this
    console.log(that)
    var reloadOrder = wxRequest.postRequest(path.reloadOrder(), {
      order_id: this.data.order.order_id
    })
    reloadOrder.then(res => {
      console.log(res)
      console.log(that)
      if (res.data.status) {
        wx.showModal({
          title: '重新下单成功!',
          content: '点击确认到购物车查看',
          success(modalres) {
            console.log(modalres)
            if (modalres.confirm) {
              wx.redirectTo({
                url: '/pages/shopCart/index?tab=' + (that.data.order.is_standard ? 1 : 2),
              })
            }
          }
        })
      } else {
        wx.showToast({
          title: res.data.message,
          icon: "none",
          duration: 2000
        })
      }
    })
    // wx.showToast({
    //   title: '该功能开发中...',
    //   icon: 'none'
    // })
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  }
})