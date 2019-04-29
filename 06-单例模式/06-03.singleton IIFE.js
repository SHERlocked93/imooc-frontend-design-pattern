/**
 * 模块: 单例模式
 * 作者: SHERlocked93
 * 功能: IIFE 方式创建单例
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
    
    return Singleton
})()

const visitor1 = new Singleton()
const visitor2 = new Singleton()

console.log(visitor1 === visitor2)

// 输出: true
