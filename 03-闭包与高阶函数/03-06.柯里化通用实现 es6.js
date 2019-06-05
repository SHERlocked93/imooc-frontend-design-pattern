/**
 * 模块: 闭包与高阶函数
 * 作者: SHERlocked93
 * 功能: 柯里化通用实现 es6方式
 */


function currying(fn, ...rest1) {
    return function(...rest2) {
        return fn.apply(null, rest1.concat(rest2))
    }
}

function sayHello(name, age, fruit) {
    console.log(console.log(`我叫 ${ name },我 ${ age } 岁了, 我喜欢吃 ${ fruit }`))
}

var curryingShowMsg1 = currying(sayHello, '小明')
curryingShowMsg1(22, '苹果')           // 输出: 我叫 小明,我 22 岁了, 我喜欢吃 苹果

var curryingShowMsg2 = currying(sayHello, '小衰', 20)
curryingShowMsg2('西瓜')               // 输出: 我叫 小衰,我 20 岁了, 我喜欢吃 西瓜
