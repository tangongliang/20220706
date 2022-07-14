const ModelUtil =  require('./ModelUtil')

const API = [
    {name: 'getList', type: 'get', url: '/api/dataInfo/list'}
]

module.exports = ModelUtil.generateAPI(API)