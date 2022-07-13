// pages/material/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    records: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let _this = this;
    wx.request({
      url: 'https://api.chongyaedu.com:8443/api/dataInfo/list', //仅为示例，并非真实的接口地址
      data: {},
      method: 'GET',
      header: {
        'content-type': 'multipart/form-data',
        'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTk1MjAzODgsInVzZXJuYW1lIjoiYWRtaW4ifQ._I2NsVQ0asChxOfCxlrWxTvY-qLgWcxmDszd-mEqNWc'
      },
      success(res) {
        let data = res.data;
        if (data.code === 0) {
          _this.setData({
            records: data.data
          });
        }
      },
      fail(err) {
        console.log(err.data);
      }
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})