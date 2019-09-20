// component/tabBar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
<<<<<<< HEAD
=======
 

>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39

  /**
   * 组件的方法列表
   */
  methods: {
<<<<<<< HEAD

=======
    homeindex: function () {
      wx.redirectTo({
        url: '/pages/index/index',
      })
    },

    allClass: function () {
      wx.redirectTo({
        url: '/pages/allClass/index',
      })
    },

    customized: function () {
      wx.navigateTo({
        url: '/pages/customized/index',
      })
    },

    orders: function () {
      wx.redirectTo({
        url: '/pages/orders/index',
      })
    },

    user: function () {
      wx.redirectTo({
        url: '/pages/user/index',
      })
    },
>>>>>>> fa31deabb250d9d8a1a94d8851963e555179fa39
  }
})
