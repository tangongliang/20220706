// pages/thirdPage/index.js
const ThirdPage = require('../../models/ThirdPage.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageData: {}
  },

  onLoad(options) {
    console.log(options)
    const that = this
    ThirdPage.getUserCard({
      equipmentNo: options.equipmentNo,
      source: options.source,
      userId: options.userId
    })
      .then(res => {
        that.setData({
          pageData: res.data.businessCard
        })
      })
      .catch(err => {
        console.log('err====>', err)
      })
  },

})
