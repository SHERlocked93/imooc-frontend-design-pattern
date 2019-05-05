/**
 * 模块: 模板方法模式
 * 作者: SHERlocked93
 * 功能: 咖啡厅例子 使用class方式
 */

/* 饮料类，父类 */
class Beverage {
    constructor() {
        if (new.target === Beverage) {
            throw new Error('抽象类不能直接实例化!')
        }
    }
    
    /* 烧开水，共用方法 */
    boilWater() {
        console.log('水已经煮沸')
    }
    
    /* 冲泡饮料，抽象方法 */
    brewDrink() {
        throw new Error('抽象方法不能调用!')
    }
    
    /* 倒杯子里，共用方法 */
    pourCup() {
        console.log('倒进杯子里')
    }
    
    /* 加调味品，抽象方法 */
    addCondiment() {
        throw new Error('抽象方法不能调用!')
    }
    
    /* 制作流程，模板方法 */
    init() {
        this.boilWater()
        this.brewDrink()
        this.pourCup()
        this.addCondiment()
    }
}

/* 咖啡类，子类 */
class Coffee extends Beverage {
    constructor() { super() }
    
    /* 冲泡饮料，覆盖抽象方法 */
    brewDrink() {
        console.log('冲泡咖啡')
    }
    
    /* 加调味品，覆盖抽象方法 */
    addCondiment() {
        console.log('加点咖啡伴侣')
    }
}

/* 茶类，子类 */
class Tea extends Beverage {
    constructor() { super() }
    
    /* 冲泡饮料，覆盖抽象方法 */
    brewDrink() {
        console.log('冲泡茶')
    }
    
    /* 注意这里，没有覆盖加调味品抽象方法 */
}

const coffee = new Coffee()
coffee.init()

const tea = new Tea()
tea.init()

// 输出：水已经煮沸
// 输出：冲泡咖啡
// 输出：倒进杯子里
// 输出：加点咖啡伴侣

// 输出：水已经煮沸
// 输出：冲泡茶
// 输出：倒进杯子里
// Error: 抽象方法不能调用!
