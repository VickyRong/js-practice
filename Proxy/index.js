const target = [
    { name: 'Firefox'    , type: 'browser' },
    { name: 'SeaMonkey'  , type: 'browser' },
    { name: 'Thunderbird', type: 'mailer' }
]

const handler = {
    get:function(obj,prop){
        console.log('prop-------:',prop)

        //返回属性值
        if(prop in obj){
            return obj[prop]
        }

        //返回对象长度
        if(prop === 'number'){
            return obj.length
        }

        let result = {} 
        let types = {}
        for(let item of obj){
            // console.log('item-------:',item)
            if(prop === item.name){
                result = item
            }
            // 根据类型分类
            if(types[item.type]){
                types[item.type].push(item)
            }else{
                types[item.type] = [item]
            }
        }
        console.log('types:',types)

        //获取types种类
        if(prop === 'types'){
            return Object.keys(types)
        }

        // 通过name获取某个对象
        if(result){
            console.log('result:',result)
            return result
        }


        //通过type获取某个对象
        if(prop in types){
            return types[prop]
        }


        


        return undefined;
    }
}

let products = new Proxy(target,handler);


// console.log(products['Firefox'])
console.log("结果：",products.types)