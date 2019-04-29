/**
 * 模块: 工厂模式
 * 作者: SHERlocked93
 * 功能: 通用实现 引入抽象工厂类
 */

/**
 *  工厂 抽象类
 *  工厂的功能
 */
class AbstractFactory {
    constructor() {
        if (new.target === AbstractProduct) {
            throw new Error('抽象类不能直接实例化!')
        }
    }
    
    /* 抽象方法 */
    createProduct1() {
        throw new Error('抽象方法不能调用!')
    }
}

/* 具体饭店类 */
class Factory extends AbstractFactory {
    constructor() {
        super()
    }
    
    createProduct1(type) {
        switch (type) {
            case 'Product1':
                return new Product1()
            case 'Product2':
                return new Product2()
            default:
                throw new Error('当前没有这个产品 -。-')
        }
    }
}

/**
 * 抽象产品类
 */
class AbstractProduct {
    constructor() {
        if (new.target === AbstractProduct) {
            throw new Error('抽象类不能直接实例化!')
        }
        this.kind = '抽象产品类1'
    }
    
    /* 抽象方法 */
    operate() {
        throw new Error('抽象方法不能调用!')
    }
}

/* 具体产品类1 */
class Product1 extends AbstractProduct {
    constructor() {
        super()
        this.type = 'Product1'
    }
    
    operate() {
        console.log(this.kind + ' - ' + this.type)
    }
}

/* 具体产品类2 */
class Product2 extends AbstractProduct {
    constructor() {
        super()
        this.type = 'Product2'
    }
    
    operate() {
        console.log(this.kind + ' - ' + this.type)
    }
}


const factory = new Factory()

const prod1 = factory.createProduct1('Product1')
prod1.operate()
const prod2 = factory.createProduct1('Product3')

// 输出: 抽象产品类1 - Product1
// 输出: Error 当前没有这个产品 -。-
