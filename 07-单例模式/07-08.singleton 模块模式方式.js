/**
 * 模块: 单例模式
 * 作者: SHERlocked93
 * 功能: 模块模式方式
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
    
    return {
        getInstance(bar) {
            if (_instance) return _instance
            _instance = new Singleton(bar)
            return _instance
        }
    }
})()

const visitor1 = Singleton.getInstance()
const visitor2 = Singleton.getInstance()

console.log(visitor1 === visitor2)	// true
