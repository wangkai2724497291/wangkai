//1、app.js 添加 isRegister: false

//2、get_login里去掉tabbar的隐藏、显示，换成设定isRegister

//3、首页onshow函数添加是否需要重新弹出注册的判断
// 放在有token的判断里
// if (!app.globalData.isRegister) {
//   this.get_token()
// }

const isRegister = (appisRegister, msg) => {
  if (appisRegister) return true
  wx.showModal({
    title: '提示',
    content: msg,
    showCancel: false,
    success(res) {
      if (res.confirm) {
        wx.reLaunch({
          url: '/pages/index/index',
        })
      }
    }
  })
  return false
}

module.exports = {
  isRegister: isRegister
}