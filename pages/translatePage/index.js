const Translate = require('../../models/Translate.js')

Page({
  data: {
    chinese: '',
    japanese: '',
  },

  onLoad(options) {

  },

  onShow() {

  },

  _chinese(e) {
    let value = e.detail.value;
    this.setData({
      chinese: value
    });
  },

  translate() {
    if (!this.data.chinese) {
      return;
    }
    this.setData({
      japanese: ''
    });
    Translate.chineseToJapanese({
      "str": this.data.chinese, //翻译的文字
      "type": 1 //1中文转日文  2日文转中文
    }).then(data => {
      this.setData({
        japanese: data.msg
      });
    })
  }


})