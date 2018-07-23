let util = require('./util')

// util.callbaiduwebpage_v1('http://www.baidu.com', function(err, body) {
//     console.log(body)
// })

async function wraper() {
    let body = await util.callbaiduwebpage_v2('http://www.baidu.com');
    console.log(body);

}

wraper()