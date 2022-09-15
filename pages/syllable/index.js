// pages/syllable/index.js
const Syllable = require('../../models/Syllable.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    winHeight: '100%',
    toView: 'qingBox',
    activeMenu: 'qingBox',
    unvoiced: [],
    voiced: [],
    slang: [],



    alertCard: false,
    romanTone: '',
    hiragana: '',
    hiraganaCharacter: '',
    katakana: '',
    katakanaCharacter: '',
    audioFile: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  onLoad(options) {
    this.getData();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  getData() {
    Syllable.fiftyToneMap({
      type: 1
    }).then(data => {
      const that = this;
      let unvoiced = [],
        voiced = [],
        slang = [];
      data = data.data;
      for (let key in data) {
        for (let singleLine in data[key]) {
          data[key][singleLine].forEach((item) => {
            switch (key) {
              case 'slang':
                slang.push(item);
                break;
              case 'unvoiced':
                unvoiced.push(item);
                break;
              case 'voiced':
                voiced.push(item);
                break;
              default:
                break;
            };
          });
        };
      }
      that.setData({
        unvoiced: unvoiced,
        voiced: voiced,
        slang: slang
      })

      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            winHeight: res.windowHeight - (res.windowWidth * 90 / 750) + 'px'
          })
        },
      })
    })
  },

  toViewClick: function (e) {
    const that = this
    that.setData({
      toView: e.currentTarget.dataset.hash,
      activeMenu: e.currentTarget.dataset.hash
    })
  },
  clickWord: function (e) {
    const word = e.currentTarget.dataset.word;
    if (word.id === 0) {
      return;
    }
    this.setData({
      alertCard: true,
      romanTone: word.romanTone,
      hiragana: word.hiragana,
      hiraganaCharacter: word.hiraganaCharacter,
      katakana: word.katakana,
      katakanaCharacter: word.katakanaCharacter,
      audioFile: word.audioFile,
    })
  },
  voicePlay: function () {
    const innerAudioContext = wx.createInnerAudioContext({
      useWebAudioImplement: true
    })
    innerAudioContext.src = this.data.audioFile;
    innerAudioContext.play(); // 播放
  },

  clickCardBg: function () {
    this.setData({
      alertCard: false,
      romanTone: '',
      hiragana: '',
      hiraganaCharacter: '',
      katakana: '',
      katakanaCharacter: '',
      audioFile: '',
    })
  },
})