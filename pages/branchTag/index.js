const Vocabulary = require('../../models/Vocabulary.js')
const {
  getCurrentPageArgs
} = require('../../utils/getCurrent.js')

Page({

  data: {
    words: [],
  },

  onLoad(options) {
    const data = getCurrentPageArgs();
    wx.setNavigationBarTitle({
      title: data.branchName
    })
  },

  onShow() {
    this.getList()
  },

  getList() {
    const that = this;
    const data = getCurrentPageArgs();
    Vocabulary.findById({
        id: data.tagBranchId
      })
      .then(data => {
        that.setData({
          words: data.data
        });
      })
  },

  voicePlay(e) {
    const innerAudioContext = wx.createInnerAudioContext({
      useWebAudioImplement: true
    })
    innerAudioContext.src = e.currentTarget.dataset.audioFile;
    innerAudioContext.play(); // 播放
  }
})