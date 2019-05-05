/**
 * 模块: 模板方法模式
 * 作者: SHERlocked93
 * 功能: 通用实现 高阶函数
 */

/* 虚拟方法 */
const abstractFunc = function() {
    throw new Error('抽象方法不能调用!')
}

/* 空方法 */
const emptyFunc = function() {}

/* 饮料方法 */
class AbstractClass {
    constructor({
                    operate2 = abstractFunc    // 抽象方法
                }) {
        this.operate2 = operate2
    }
    
    /* 共用方法 */
    operate1() {
        console.log('operate1')
    }
    
    /* 模板方法 */
    init() {
        this.operate1()
        this.operate2()
    }
}

/* 咖啡 */
const instance = new AbstractClass({
    /* 覆盖抽象方法 */
    operate2: function() {
        console.log('operate2')
    }
})

instance.init()

// 输出：operate1
// 输出：operate2
