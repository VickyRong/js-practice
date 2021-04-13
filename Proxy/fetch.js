fetch('https://www.baidu.com')
    .then(function(res){
        console.log("res:",res)
    })
    .then(function(err){
        console.log('err:',err)
    })