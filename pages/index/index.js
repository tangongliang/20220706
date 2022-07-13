// index.js
Page({
  data: {

  },

  onLoad() {

  },

  onShow() {
    wx.request({
      url: 'https://api.chongyaedu.com:8443/api/dataInfo/list', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log("1111====>", res.data)
      }
    })
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
