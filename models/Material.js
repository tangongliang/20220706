const ModelUtil =  require('./ModelUtil')

const API = [
    {name: 'getList', type: 'get', url: '/h5/dataInfo/list'}
]

module.exports = ModelUtil.generateAPI(API)
