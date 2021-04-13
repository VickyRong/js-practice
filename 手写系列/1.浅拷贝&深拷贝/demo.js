/**
 *  by:vk 2020-04-13
 * /

//==================== 1.对象赋值 =======================
// var obj = {
//     name:'晴天小宝贝',
//     sex:'女',
//     arr:[1,[3,5],7]
// }
// var obj1 = obj;
// obj1.name = '晴天小宝贝--可可爱爱';
// obj1.arr = [2,[4,6],8]
// obj.sex = 'girl'
// console.log('obj:',obj)
// console.log('obj1:',obj1)
/**
 * 输出结果：
 * obj: { name: '晴天小宝贝--可可爱爱', sex: 'girl', arr: [ 2, [ 4, 6 ], 8 ] }
 * obj1: { name: '晴天小宝贝--可可爱爱', sex: 'girl', arr: [ 2, [ 4, 6 ], 8 ] }
 * 【结论】：通过对象赋值的对象，一旦改变其中任意一个对象的任意值，基本数据类型和引用类型都将会被改变。
 * （因为此时赋值只是将栈中的地址赋值给新对象，没有改变堆中的数据）
 */


//==================== 2.浅拷贝 =======================
// var obj = {
//         name:'晴天小宝贝',
//         sex:'女',
//         arr:[1,[3,5],7]
//     }
// var obj2 = shallowCopy(obj);
// obj2.sex = '女孩子呀呀呀呀呀';
// obj2.arr[1] = [4,6] // 浅拷贝中二维数组改变会导致原数组改变。
// // obj2.arr = [2,[4,5],9]  //数组中只有单层数组的时候改变新对象中数组不会改变原数组，但是有多层二维数组嵌套，会改变原数组。
// function shallowCopy(source){
//     var target = {};
//     for(var i in source){
//      if(source.hasOwnProperty(i)){
//         target[i] = source[i]
//     }
//     return target;
// }
// console.log('obj:',obj)
// console.log('obj2:',obj2)

/**
 * 
 * 输出结果：
 *   obj: { name: '晴天小宝贝', sex: '女', arr: [ 1, [ 4, 6 ], 7 ] }
     obj2: { name: '晴天小宝贝', sex: '女孩子呀呀呀呀呀', arr: [ 2, [ 4, 5 ], 9 ] }
    【结论】：通过浅拷贝赋值，基本数据类型不会改变，但是引用类型会被改变
    （因为是在堆中创建内存，所以基本数据类型不会受影响，但是引用类型还是使用同一地址，所以会被改变）
 */


//==================== 3.深拷贝 =======================
var obj = {
    name:'晴天小宝贝',
    sex:'女',
    arr:[1,[3,5],7]
}

var obj3 = deepCopy(obj);
obj3.arr[1] = [99,88,77];
obj.sex = "小女孩呀"
console.log('obj:',obj)
console.log('obj3:',obj3)


function deepCopy(source){
    //各种判断条件
    if(source === null) return source
    if(typeof source !== 'object') return source //基础数据类型没有constructor，所以要提前排除异常情况

    var cloneObj = new source.constructor();
    for(var k in source){
        if(source.hasOwnProperty(k)){
            cloneObj[k] = deepCopy(source[k])
        }
    }
    return cloneObj
}

/**
 * 输出结果：
 *  obj: { name: '晴天小宝贝', sex: '小女孩呀', arr: [ 1, [ 3, 5 ], 7 ] }
    obj3: { name: '晴天小宝贝', sex: '女', arr: [ 1, [ 99, 88, 77 ], 7 ] }
    【结论】：深拷贝重新开辟了一份内存空间保存新对象，所以不管是修改基本数据类型还是引用类型，两个对象直接互不影响。
 */