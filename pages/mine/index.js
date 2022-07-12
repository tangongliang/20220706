// pages/mine/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  onShow() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      this.setData({
        userInfo: {},
        hasUserInfo: false
      })
    }
  },

  handleLogin() {
    const that = this
    wx.showLoading({ title: '登录中...' })
    wx.login({
      success (res) {
        console.log('获取code====>', res.code)
        if (res.code) {
          wx.getUserInfo({
            success: res => {
              // console.log('打印这里授权====>', res)
              // 可以将 res 发送给后台解码出 unionId
              wx.showToast({
                title: '登录成功',
                success: () => {
                  that.setData({
                    userInfo: res.userInfo
                  })
                }
              })
            }
          })
        }
      }
    })
  },

  handleLoginOut() {
    const that = this
    wx.showLoading({ title: '退出中...' })
    that.setData({
      userInfo: null
    })
    wx.hideLoading()
  },

  handleEditInfo() {
    wx.navigateTo({ url: '/pages/edit-info/index' })
  }
})