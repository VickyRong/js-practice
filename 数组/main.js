
console.log("************ 以下方法会改变数组 ***************")
var arr = ["aa","bb","cc","dd","ee","ff"];
var arr1 = ["11","22","55","66","33","44"];

//增加元素--头，尾
arr.unshift("111")
arr.push("999")
console.log(arr);

//删除元素--头,尾
arr.shift()
arr.pop()
console.log(arr)

//反转数组
arr.reverse()
console.log(arr)

//排序
arr.sort()
console.log(arr1)
arr1.sort()
console.log(arr1) //按字符排序
arr1.sort(function(a,b){
    return b > a;
})
console.log(arr1) //按降序排序


//splice() 很强大的方法，既可以删除又可以添加
console.log(arr);
arr.splice(2,1,"11111111","222222");
console.log(arr);//["aa","bb","11111111","222222","dd","ee","ff"];
arr.splice(4)
console.log(arr);//["aa","bb","11111111","222222","dd","ee","ff"];


console.log("************ 以下方法不会改变数组 ***************")
//slice()
var arr2 = ["111","222","333","444","555"];
var test = arr2.slice(0,3)
console.log(test);
//filter()
var res =  arr2.filter(r => r > 2)
console.log(res)
//find()
var r = arr2.find(r => r > 222);
console.log(r)
//findIndex();
var a = arr2.findIndex(r => r == "555");
console.log(a)

