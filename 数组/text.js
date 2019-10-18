/**
 * 数组去重
 */
let arr = [1, 2, 3, 22, 233, 22, 2, 233, 'a', 3, 'b', 'a'];

function unique1(arr){
    const newArray = [];
    let isRepeat;
    for(let i = 0;i < arr.length;i++){
        isRepeat = false;
        for(let j = 0; j < newArray.length;j++){
            if(arr[i] === newArray[j] ){
                isRepeat = true;
                break;
            }
        }
        if(!isRepeat){
            newArray.push(arr[i])
        }
    }
    return newArray;
}
console.log(unique1(arr));