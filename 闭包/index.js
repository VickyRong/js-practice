/* 利用闭包的简单计数器 */

var makeCounter = function(){
    var count = 0;
    function changeFun(val) {
        count += val;
    }
    return {
        increment:function(){
            changeFun(1)
        },
        decrement:function(){
            changeFun(-1)
        },
        value:function(){
            return count;
        }
    }
}
var count1 = makeCounter()
count1.increment()
count1.increment()
count1.increment()
count1.increment()
console.log(count1.value())