/**
 * 模块: 模板方法模式
 * 作者: SHERlocked93
 * 功能: 通用实现
 */

/* 虚拟方法 */
const abstractFunc = function() {
    throw new Error('抽象方法不能调用!')
}

/* 饮料方法 */
class Beverage {
    constructor({
                    brewDrink = abstractFunc,    // 冲泡饮料，抽象方法
                    addCondiment = abstractFunc  // 加调味品，抽象方法
                }) {
        this.brewDrink = brewDrink
        this.addCondiment = addCondiment
    }
    
    /* 烧开水，共用方法 */
    boilWater() {
        console.log('水已经煮沸')
    }
    
    /* 倒杯子里，共用方法 */
    pourCup() {
        console.log('倒进杯子里')
    }
    
    /* 模板方法 */
    init() {
        this.boilWater()
        this.brewDrink()
        this.pourCup()
        this.addCondiment()
    }
}

/* 咖啡 */
const coffee = new Beverage({
    /* 冲泡饮料，覆盖抽象方法 */
    brewDrink: function() {
        console.log('水已经煮沸')
    },
    
    /* 加调味品，覆盖抽象方法 */
    addCondiment: function() {
        console.log('加点咖啡伴侣')
    }
})

coffee.init()

// 输出：水已经煮沸
// 输出：冲泡咖啡
// 输出：倒进杯子里
// 输出：加点咖啡伴侣
