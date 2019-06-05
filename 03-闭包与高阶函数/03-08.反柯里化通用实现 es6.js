/**
 * 模块: 闭包与高阶函数
 * 作者: SHERlocked93
 * 功能: 反柯里化通用实现 es6方式
 */


function unCurrying(fn) {
    return function(tar, ...argu) {
        return fn.apply(tar, argu)
    }
}

var push = unCurrying(Array.prototype.push)

function execPush() {
    push(arguments, 4)
    console.log(arguments)
}

execPush(1, 2, 3)

// 输出: [1, 2, 3, 4]
