const ModelUtil =  require('./ModelUtil')

const API = [
    {name: 'chineseToJapanese', type: 'post', url: '/appindex/chineseToJapanese', contentType:'application/json'}
]

module.exports = ModelUtil.generateAPI(API)
