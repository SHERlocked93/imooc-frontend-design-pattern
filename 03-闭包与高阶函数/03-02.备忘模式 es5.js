/**
 * 模块: 闭包与高阶函数
 * 作者: SHERlocked93
 * 功能: 备忘模式
 */


/**
 * 备忘函数
 * @param fn
 * @returns {function(): *}
 */
function memorize(fn) {
    var cache = {}
    return function() {
        var args = Array.prototype.slice.call(arguments)
        var key = JSON.stringify(args)
        return cache[key] || (cache[key] = fn.apply(fn, args))
    }
}

/* 复杂计算函数 */
function add(a) {
    return a + 1
}

var adder = memorize(add)

adder(1)            // 输出: 2    当前: cache: { '[1]': 2 }
adder(1)            // 输出: 2    当前: cache: { '[1]': 2 }
adder(2)            // 输出: 3    当前: cache: { '[1]': 2, '[2]': 3 }
