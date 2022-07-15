const config = require('../config.js')

const API_SERVER = config.requestApi

function getParam(data) {
    const param = {}
    if (typeof data === 'object') {
        for (let key in data) {
            if (data.hasOwnProperty(key)
                && data[key] !== undefined
                && data[key] !== null
                && data[key] !== ''
            ) {
                param[key] = data[key]
            }
        }
    }
    return param
}
function get(url, data = {}) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${API_SERVER}${url}`,
            data: getParam(data),
            method: 'GET',
            header: {
                'content-type': 'multipart/form-data',
                // 'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTk2MTM0NjksInVzZXJuYW1lIjoiYWRtaW4ifQ.S-gjiA1kNFfW-iNcVql2IjzVav2BCDwdtrF-izWrs28'
            },
            success: (res) => {
                switch (res.data.code) {
                    case 401:
                        reject(res.data)
                        break
                    default:
                        const { data } = res
                        if (data.code === 0) {
                            resolve(res.data)
                        } else {
                            reject({
                                code: res.data.code,
                                message: res.data.msg,
                            })
                        }
                        break
                }
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
}
function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${API_SERVER}${url}`,
            data: JSON.stringify(getParam(data)),
            method: 'POSt',
            header: {
                'content-type': 'application/json',
                // 'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTk2MTM0NjksInVzZXJuYW1lIjoiYWRtaW4ifQ.S-gjiA1kNFfW-iNcVql2IjzVav2BCDwdtrF-izWrs28'
            },
            success: (res) => {
                switch (res.data.code) {
                    case 401:
                        reject(res.data)
                        break
                    default:
                        const { data } = res
                        if (data.code === 200) {
                            resolve(res.data)
                        } else {
                            reject({
                                code: data.code,
                                message: data.msg,
                            })
                        }
                        break
                }
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
}

module.exports = {
    get,
    post,
}
