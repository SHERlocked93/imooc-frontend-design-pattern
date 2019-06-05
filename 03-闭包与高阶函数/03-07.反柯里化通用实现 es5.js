/**
 * 模块: 闭包与高阶函数
 * 作者: SHERlocked93
 * 功能: 反柯里化通用实现 es5方式
 */


function unCurrying(fn) {
    return function(tar) {
        var rest = Array.prototype.slice.call(arguments)
        rest.shift()
        return fn.apply(tar, rest)
    }
}

var push = unCurrying(Array.prototype.push)

function execPush() {
    push(arguments, 4)
    console.log(arguments)
}

execPush(1, 2, 3)

// 输出: [1, 2, 3, 4]
