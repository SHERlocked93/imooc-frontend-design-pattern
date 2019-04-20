/**
 * 模块: 单例模式
 * 作者: SHERlocked93
 * 功能: IIFE 改进 将单例模式的创建逻辑和业务逻辑拆开
 */

/* 功能类 */
class FuncClass {
    constructor(bar) {
        this.bar = bar
    }
    
    init() {
        this.foo = 'Singleton Pattern'
    }
}

/* 单例模式的赋能类 */
const Singleton = (function() {
    let _instance = null        // 存储单例
    
    const ProxySingleton = function(bar) {
        if (_instance) return _instance     // 判断是否已有单例
        _instance = new FuncClass(bar)
        return _instance
    }
    
    ProxySingleton.getInstance = function(bar) {
        if (_instance) return _instance
        _instance = new Singleton(bar)
        return _instance
    }
    
    return ProxySingleton
})()

const visitor1 = new Singleton('单例1')
const visitor2 = new Singleton('单例2')
const visitor3 = Singleton.getInstance()

console.log(visitor1 === visitor2)
console.log(visitor1 === visitor3)

// 输出: true
// 输出: true
