/**
 * 模块: 单例模式
 * 作者: SHERlocked93
 * 功能: 构造函数复写方式 这种方式比较少见，可读性也不好，尽量不要使用在项目中，仅作为视野扩展
 */

function Singleton() {
    const _instance = this        // 存储单例
    init()                   // 初始化操作
    
    Singleton = function() {
        return _instance
    }
    
    function init() {
        _instance.foo = 'Singleton Pattern'
    }
}

const visitor1 = new Singleton()
const visitor2 = new Singleton()

console.log(visitor1 === visitor2)

// 输出: true
