const ModelUtil =  require('./ModelUtil')

const API = [
    {name: 'getList', type: 'post', url: '/h5/course/list'}
]

module.exports = ModelUtil.generateAPI(API)
