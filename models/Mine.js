const ModelUtil =  require('./ModelUtil')

const API = [
  {name: 'login', type: 'post', url: '/wx/login'},
  {name: 'syncInfo', type: 'post', url: '/wx/syncuserinfo'}
]

module.exports = ModelUtil.generateAPI(API)
