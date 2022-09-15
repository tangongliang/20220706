const ModelUtil = require('./ModelUtil')

const API = [{
    name: 'findTagGroup',
    type: 'post',
    url: '/h5/tagBranch/findTagGroup',
    contentType: 'application/json'
  },
  {
    name: 'findById',
    type: 'post',
    url: '/h5/tagBranch/findById',
    contentType: 'application/json'
  },
]

module.exports = ModelUtil.generateAPI(API)