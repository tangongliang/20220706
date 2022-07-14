function createRequest (options) {
  wx.request(options)
}

const basicUrl = 'https://api.chongyaedu.com:8443/';

module.exports.createRequest = createRequest
module.exports.basicUrl = basicUrl
