/**
 * 模块: 工厂模式
 * 作者: SHERlocked93
 * 功能: 通用实现
 */

/* 工厂类 */
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

/* 产品类1 */
class Product1 {
    constructor() {
        this.type = 'Product1'
    }
    
    operate() {
        console.log(this.type)
    }
}

/* 产品类2 */
class Product2 {
    constructor() {
        this.type = 'Product2'
    }
    
    operate() {
        console.log(this.type)
    }
}

const prod1 = Factory.getInstance('Product1')
prod1.operate()
const prod2 = Factory.getInstance('Product3')

// 输出: Product1
// 输出: Error 当前没有这个产品
