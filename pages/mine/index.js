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
    // wx.showLoading({ title: '登录中...' })

    wx.getUserProfile({
      desc: '获取用户头像', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        }, () => {
          console.log(1111)
          wx.login({
            success (res1) {
              console.log('打印code=====>', res1)
              if (res.code) {
                wx.showToast({
                  title: '登录成功',
                  success: () => {}
                })
              }
            }
          })
        })
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