const ModelUtil =  require('./ModelUtil')

const API = [
  {name: 'getUserCard', type: 'post', url: '/h5/businessCard/findCard'}
]

module.exports = ModelUtil.generateAPI(API)
