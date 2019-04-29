/**
 * 模块: 工厂模式
 * 作者: SHERlocked93
 * 功能: 通用实现 引入抽象产品类
 */

/* 工厂方法 */
class Factory {
    static getInstance(type) {
        switch (type) {
            case 'Product1':
                return new Product1()
            case 'Product2':
                return new Product2()
            default:
                throw new Error('当前没有这个产品')
        }
    }
}

/* 抽象类1 */
class AbstractClass1 {
    constructor() {
        if (new.target === AbstractClass1) {
            throw new Error('抽象类不能直接实例化!')
        }
        this.kind = 'Abstract1'
    }
    
    /* 抽象方法 */
    operate() {
        throw new Error('抽象方法不能调用!')
    }
}

/* 产品类1 */
class Product1 extends AbstractClass1 {
    constructor() {
        super()
        this.type = 'Product1'
    }
    
    operate() {
        console.log(this.kind + ' - ' + this.type + ' 第一个产品类~')
    }
}

/* 产品类2 */
class Product2 extends AbstractClass1 {
    constructor() {
        super()
        this.type = 'Product2'
    }
    
    operate() {
        console.log(this.kind + ' - ' + this.type + ' 第二个产品类哦~')
    }
}

const prod1 = Factory.getInstance('Product1')
prod1.operate()
const prod3 = Factory.getInstance('Product3')

// 输出: Abstract1 - Product1 第一个产品类~
// 输出: Error 当前没有这个产品 -。-
