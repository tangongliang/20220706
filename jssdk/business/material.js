const api = require('../api');

function getMaterialInfo (options) {
  Promise.resolve()
    .then(
      api.getDataInfo(success,failed,{},{
        header: {
          'content-type': 'multipart/form-data',
          'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTk2MTM0NjksInVzZXJuYW1lIjoiYWRtaW4ifQ.S-gjiA1kNFfW-iNcVql2IjzVav2BCDwdtrF-izWrs28'
        }
      })
  )
  function success (res) {
    console.log('getMaterialInfo success');
    options.success(res);
  }
  function failed (err) {
    console.log('getMaterialInfo failed');
    options.failed(err);
  }
}


exports.getMaterialInfo = getMaterialInfo;