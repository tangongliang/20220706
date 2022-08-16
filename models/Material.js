const ModelUtil =  require('./ModelUtil')

const API = [
    {name: 'getList', type: 'post', url: '/h5/dataInfo/list'}
]

module.exports = ModelUtil.generateAPI(API)
