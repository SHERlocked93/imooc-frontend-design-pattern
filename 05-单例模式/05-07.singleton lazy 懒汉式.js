/**
 * 模块: 单例模式
 * 作者: SHERlocked93
 * 功能: 懒汉式
 */

class FuncClass {
    constructor() { this.bar = 'bar' }
}

const LazySingleton = (function() {
    let _instance = null
    
    return function() {
        return _instance || (_instance = new FuncClass())
    }
})()

const visitor1 = new LazySingleton()
const visitor2 = new LazySingleton()

console.log(visitor1 === visitor2)

// 输出: true
