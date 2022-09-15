const ModelUtil =  require('./ModelUtil')

const API = [
    {name: 'fiftyToneMap', type: 'post', url: '/api/romanTone/fiftyToneMap', contentType:'application/json'}
]

module.exports = ModelUtil.generateAPI(API)
