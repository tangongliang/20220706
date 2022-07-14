// pages/material/index.js
const Material = require('../../models/Material.js')

Page({

  data: {
    records: []
  },

  onLoad(options) {

  },

  onShow() {
    this.getList()
  },

  getList() {
    const that = this
    Material.getList({})
        .then(data => {
          // console.log('打印data====>', data)
          that.setData({
            records: data.data
          });
        })
  }
})