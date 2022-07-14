const {get, post} = require('../utils/fetch.js')

const ModelUtil = {
  'METHOD_MAP': {
    get: get,
    post: post,
  },

  wrapPromise: (request) => {
    return new Promise((resolve, reject) => {
      request().then(
        data => resolve(data),
        err => reject(err),
      )
    })
  },

  generateAPI: (apiArray) => {
    const ret = {}
    if (apiArray.length > 0) {
      apiArray.forEach(api => {
        ret[api.name] = (param = {}) => ModelUtil.wrapPromise(ModelUtil.METHOD_MAP[api.type || 'get'].bind(null, api.url, param))
      })
    }
    return ret
  }
}

module.exports = ModelUtil