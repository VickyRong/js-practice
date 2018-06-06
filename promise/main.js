//resolve用法
function runPromise1() {
  var p1 = new Promise(function(resolve, reject) {
    console.log("第1个任务执行完成");
    resolve("111数据111");
  });
  return p1;
}
function runPromise2() {
  var p2 = new Promise(function(resolve, reject) {
    console.log("第2个任务执行完成");
    resolve("222数据222");
  });
  return p2;
}
function runPromise3() {
  var p3 = new Promise(function(resolve, reject) {
    console.log("第3个任务执行完成");
    resolve("333数据333");
  });
  return p3;
}

runPromise1()
  .then(data => {
    console.log(data);
    return runPromise2();
  })
  .then(data => {
    console.log(data);
    return runPromise3();
  })
  .then(data => {
    console.log(data);
  });

  //reject用法
  function getNumber(){
      let p = new Promise(function(resolve, reject) {
            let num = Math.ceil(Math.random()*10);
            if(num >= 5){
                console.log(num);
                resolve("合格");
            }else{
                console.log(num);
                reject("分数太低了");
            }
        })
        return p;
  }

getNumber()
.then(
    function(data){
        console.log('resolved:');
        console.log(data);
    },
    function(err){
        console.log('rejected:');
        console.log(err);
    }
)
