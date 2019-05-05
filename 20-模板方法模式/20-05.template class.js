/**
 * 模块: 模板方法模式
 * 作者: SHERlocked93
 * 功能: 通用实现
 */

/* 抽象父类 */
class AbstractClass {
    constructor() {
        if (new.target === AbstractClass) {
            throw new Error('抽象类不能直接实例化!')
        }
    }
    
    /* 共用方法 */
    operate1() {
        console.log('operate1')
    }
    
    /* 抽象方法 */
    operate2() {
        throw new Error('抽象方法不能调用!')
    }
    
    /* 模板方法 */
    templateMethod() {
        this.operate1()
        this.operate2()
    }
}

/* 实例子类，继承抽象父类 */
class ConcreteClass extends AbstractClass {
    constructor() { super() }
    
    /* 覆盖抽象方法 operate2 */
    operate2() {
        console.log('operate2')
    }
}

const instance = new ConcreteClass()
instance.templateMethod()

// 输出：operate1
// 输出：operate2
