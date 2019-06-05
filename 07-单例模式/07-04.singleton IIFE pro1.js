/**
 * 模块: 单例模式
 * 作者: SHERlocked93
 * 功能: IIFE 方式创建单例，增加 getInstance 方法
 */

const Singleton = (function() {
    let _instance = null        // 存储单例
    
    const Singleton = function() {
        if (_instance) return _instance     // 判断是否已有单例
        _instance = this
        this.init()                         // 初始化操作
        return _instance
    }
    
    Singleton.prototype.init = function() {
        this.foo = 'Singleton Pattern'
    }
    
    Singleton.getInstance = function(bar) {
        if (_instance) return _instance
        _instance = new Singleton(bar)
        return _instance
    }
    
    return Singleton
})()

const visitor1 = new Singleton()
const visitor2 = new Singleton()         // 既可以 new 获取单例
const visitor3 = Singleton.getInstance() // 也可以 getInstance 获取单例

console.log(visitor1 === visitor2)
console.log(visitor1 === visitor3)

// 输出: true
// 输出: true
