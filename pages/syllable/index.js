// pages/syllable/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: '100%',
    toView: 'qingBox',
    activeMenu: 'qingBox',

    qingArr: [
      {first: 'あ', second: 'ア', third: 'a'},
      {first: 'あ', second: 'ア', third: 'a'},
      {first: 'あ', second: 'ア', third: 'a'},
      {first: 'あ', second: 'ア', third: 'a'},
      {first: 'あ', second: 'ア', third: 'a'},
      {first: 'あ', second: 'ア', third: 'a'},
      {first: 'あ', second: 'ア', third: 'a'},
      {first: 'あ', second: 'ア', third: 'a'},
      {first: 'あ', second: 'ア', third: 'a'},
      {first: 'あ', second: 'ア', third: 'a'},
      {first: 'あ', second: 'ア', third: 'a'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winHeight: res.windowHeight - (res.windowWidth * 90 / 750) + 'px'
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  toViewClick: function(e){
    console.log(e)
    const that = this
    that.setData({
      toView: e.currentTarget.dataset.hash,
      activeMenu: e.currentTarget.dataset.hash
    })
  }
})