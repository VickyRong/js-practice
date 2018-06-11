//1.通过与空字符串相加，可以将某个变量快速转换成字符串类型。
var demo1 = '3'+ 4 + 5;
console.log(demo1);

//2.在需要访问某个对象的属性时，使用这个特性可以事先检测该对象是否为空：
var o = {
    name : 'haha',
    getName :function(){
        return o.name
    }
}
var name = o && o.getName();

//3.或运算可以用来设置默认值：
var otherName = "xixi"
var name = otherName || "default";

//4.对象的属性可以通过链式（chain）表示方法进行访问：
var obj = {
    name: "Carrot",
    "for": "Max",
    details: {
        color: "orange",
        size: 12
    }
}
obj.details.color; // orange
obj["details"]["size"]; // 12