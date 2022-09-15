// pages/vocabulary/index.js
const Vocabulary = require('../../models/Vocabulary')

Page({

  data: {
    records: []
  },

  onLoad(options) {

  },

  onShow() {
    this.getList()
  },

  toBranchTag(e) {
    wx.navigateTo({
      url: '/pages/branchTag/index?tagBranchId=' + e.currentTarget.dataset.branchid + '&branchName=' + e.currentTarget.dataset.branchname
    })
  },

  getList() {
    const that = this;
    Vocabulary.findTagGroup({})
        .then(data => {
          // console.log('打印data====>', data)
          that.setData({
            records: data.data
          });
        })
  }
})