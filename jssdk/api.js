const JP = require('./request');

function getDataInfo(resolve, reject, data, options) {
  JP.createRequest({
    url: JP.basicUrl + '/api/dataInfo/list',
    data: data,
    method: 'GET',
    header: options.header,
    success(res) {
      resolve(res);
    },
    fail(err) {
      reject(err)
    }
  })
}



module.exports.getDataInfo = getDataInfo