var hello = "Hello World!";
console.log(hello);
//面向对象编程
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('vicky');
    };
    return Site;
}());
var obj = new Site();
obj.name();
