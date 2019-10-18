var text = 'The cat scattered his food all over the room.';
var reg = /cat/;
// console.log(text.replace(/cat/,'----'))

//分组查找
var str = 'Hello what what is the first thing, and I am am scq000';
// console.log(str.replace(/(what)/,'$1---'))
// console.log(str.replace(/(what)/g,'$1---'))

//向前查找
var str1 = 'Hello what happy happily happily is the first thing, and I am am happ333';
console.log(str1.replace(/happ(?=ily)/g,'---')) // 匹配包含包含ily的happ开头的单词
console.log(str1.replace(/happ(?!ily)/g,'---')) // 匹配不包含ily的happ开头的单词
//向后查找
var str2 = 'apple people';
console.log(str2.replace(/(?<=ap)ple/g,'---'));
console.log(str2.replace(/(?<!ap)ple/g,'---'));



