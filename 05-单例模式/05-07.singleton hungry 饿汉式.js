/**
 * 模块: 单例模式
 * 作者: SHERlocked93
 * 功能: 饿汉式
 */

class FuncClass {
    constructor() { this.bar = 'bar' }
}

const HungrySingleton = (function() {
    const _instance = new FuncClass()
    
    return function() {
        return _instance
    }
})()

const visitor1 = new HungrySingleton()
const visitor2 = new HungrySingleton()

console.log(visitor1 === visitor2)

// 输出: true
