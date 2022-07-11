// index.js
Page({
  data: {

  },

  onLoad() {

  },

  onShow() {

  },

  // 去开始学习
  toStudy() {
    wx.navigateTo({ url: '/pages/syllable/index' })
  },

  // 去学习资料
  toMaterial() {
    wx.navigateTo({ url: '/pages/material/index' })
  }
})
