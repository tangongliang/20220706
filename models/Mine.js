const ModelUtil =  require('./ModelUtil')

const API = [
  {name: 'login', type: 'post', url: '/wx/login'}
]

module.exports = ModelUtil.generateAPI(API)
