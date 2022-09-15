const Find = require('../../models/Find.js')

Page({

  data: {
    courseList: []
  },

  onLoad(options) {

  },

  onShow() {
    this.getList()
  },
  goVideo(e) {
    const videoUrl = e.currentTarget.dataset.videourl,
      courseTypeName = e.currentTarget.dataset.coursetypename;
    wx.navigateTo({
      url: '/pages/video/index?videoUrl=' + videoUrl + '&courseTypeName=' + courseTypeName
    })
  },
  getList() {
    const that = this;
    Find.getList({})
      .then(data => {
        that.setData({
          courseList: data.data.courseList
        });
        console.log(that.data.courseList)
      })
  }
})