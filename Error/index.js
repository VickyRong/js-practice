function Error1(a,b){
    try{
        if(b == 0){
            throw("除数不能为0")
        }else{
            let c = a / b;
            console.log("结果是：",c)
        }
    }catch(e){
        console.log("错误信息：",e)
    }
}
// Error1(100,0)


function Error2(message) { 
    this.name = 'CustomError'; 
    this.message = message || 'Default Error Message';  
} 

try { 
    throw new Error2('测试自定义错误信息'); 
 }catch (e) { 
    console.log(e.name);      
    console.log(e.message);  
 }