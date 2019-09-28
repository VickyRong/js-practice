/**
 * 多状态精简写法一
 */
const action1 = {
    '1': ['processing','IndexPage'],
    '2': ['fail','FailPage'],
    '3': ['fail','FailPage'],
    '4': ['success','SuccessPage'],
    '5': ['cancel','CancelPage'],
    'default': ['other','Index'],
}

let num = Math.floor(Math.random()*10)
let result = action1[num] || action1['default'];
let status = result[0]
let route = result[1]


/**
 * 多状态精简写法二 -- Map结构
 */

const action2 = new Map([
    [1,['processing'],['IndexPage']],
    [2, ['fail','FailPage']],
    [3, ['fail','FailPage']],
    [4, ['success','SuccessPage']],
    [5, ['cancel','CancelPage']],
    ['default', ['other','Index']]    
])
let action = action2.get(num) || action2.get('default')


/**
 * 增加身份条件 -- 字符串拼接
 */
const action3 = new Map([
    ['guest_1', ()=>{/*do sth*/}],
    ['guest_2', ()=>{/*do sth*/}],
    ['guest_3', ()=>{/*do sth*/}],
    ['guest_4', ()=>{/*do sth*/}],
    ['guest_5', ()=>{/*do sth*/}],
    ['master_1', ()=>{/*do sth*/}],
    ['master_2', ()=>{/*do sth*/}],
    ['master_3', ()=>{/*do sth*/}],
    ['master_4', ()=>{/*do sth*/}],
    ['master_5', ()=>{/*do sth*/}],
    ['default', ()=>{/*do sth*/}],
  ])
console.log('action3:',action3)
let res = action3.get(`guest_${num}`) || action3.get(`master_${num}`) || action3.get('default')
console.log('res:',res)
  


