/**
 * 模块: 单例模式
 * 作者: SHERlocked93
 * 功能: 块级作用域方式
 */

let getInstance

{
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
    
    getInstance = function(bar) {
        if (_instance) return _instance
        _instance = new Singleton(bar)
        return _instance
    }
}

const visitor1 = getInstance()
const visitor2 = getInstance()

console.log(visitor1 === visitor2)

// 输出: true
