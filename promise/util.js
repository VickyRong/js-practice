let request = require('request')

function callbaiduwebpage_v1(url, cb) {
    request.get(url, (err, res, body) => {
        if (err) {
            console.log('something error')
        }
        if (typeof cb === 'function') {
            cb(err, res, body)
        }
    })
}

function callbaiduwebpage_v2(url){
    if(!url){ 
        console.log("请输入链接")
        return; 
    }
    return new Promise((resolve,reject) => {
        request.get(url,(err,res,body)=>{
            if (err) {
                reject(err);
            }
            resolve(body)
        })
    })
}


module.exports = {
    callbaiduwebpage_v1,callbaiduwebpage_v2
}