import path from '../utils/api.js'
const app = getApp()

export default class Login {
  getSetting() {
    return new Promise(resolve => {
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            resolve({successed: true})
          } else {
            //如果未授权，弹出授权
            resolve({ successed: false })
          }
        },
        fail: res => {
          resolve({ successed: false })
        }
      })
    })
  }

  wxLogin() {
    return new Promise(resolve => {
      wx.login({
        success: res => {
          if (res.code) {
            resolve({ successed: true, ...res })
          } else {
            resolve({successed: false})
          }
        },
        fail: res => {
          resolve({ successed: false })
        }
      })
    })
  }

  getUserInfo() {
    return new Promise(resolve => {
      wx.getUserInfo({
        success: res => {
          // console.log(res.userInfo)
          app.globalData.userInfo = res.userInfo
          resolve({successed: true, ...res})
        },
        fail: res => {
          resolve({successed: false})
        }
      })
    })
  }

  getToken(code, iv, encryptedData) {
    return new Promise(resolve => {
      wx.request({
        url: path.getToken(),
        data: {
          code: code,
          iv: iv,
          encryptedData: encryptedData
        },
        method: 'POST',
        success: res => {
          // console.log(res)
          // wx.setStorageSync('token', res.data.data.token)
          // app.globalData.userId = res.data.data.userId
          resolve({successed: true, ...res})
        },
        fail: res => {
          resolve({successed: false})
        }
      })
    })
  }
}