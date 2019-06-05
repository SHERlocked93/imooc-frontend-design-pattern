/**
 * 创建于 2019-06-02
 * 作者: SHERlocked93
 * 功能: 构造函数继承
 */


// 构造函数
function YourConstructor() {}

// JavaScript 引擎在背后做的：
YourConstructor.prototype = Object.create(Object.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: YourConstructor,
        writable: true
    }
})

console.log(YourConstructor.prototype.__proto__ === Object.prototype)         // true
