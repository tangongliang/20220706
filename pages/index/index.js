// index.js
Page({
  data: {
    randomNumber: 0,
  },

  onLoad() {
    this.setData({
      randomNumber: Math.floor(Math.random() * 104 + 1)
    })
  },

  onShow() {

  },

  // 去开始学习
  toStudy() {
    wx.navigateTo({
      url: '/pages/syllable/index'
    })
  },

  // 去学习资料
  toMaterial() {
    wx.navigateTo({
      url: '/pages/material/index'
    })
  },

  // 去入门知识
  toIntroduction() {
    wx.navigateTo({
      url: '/pages/introduction/index'
    })
  },

  // 去入门知识
  toCourse() {
    wx.navigateTo({
      // url: '/pages/course/index'
      url: '/pages/thirdPage/index'
    })
  }
})
