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
    ThirdPage.getUserCard({
      equipmentNo: '123456789',
      source: '小米'
    })
      .then(res => {
        console.log('res===>', res)
        // res.data.businessCard
        this.setData({
          pageData: res.data.businessCard
        })
      })
      .catch(err => {
        console.log('err====>', err)
      })
  },

})
