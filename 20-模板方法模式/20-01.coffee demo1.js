/**
 * 模块: 模板方法模式
 * 作者: SHERlocked93
 * 功能: 咖啡厅例子 使用原型方式
 */

/* 饮料类，父类 */
var Beverage = function() {
    if (new.target === Beverage) {
        throw new Error('抽象类不能直接实例化!')
    }
}

/* 烧开水，共用方法 */
Beverage.prototype.boilWater = function() {
    console.log('水已经煮沸')
}

/* 冲泡饮料，抽象方法 */
Beverage.prototype.brewDrink = function() {
    throw new Error('抽象方法不能调用!')
}

/* 倒杯子里，共用方法 */
Beverage.prototype.pourCup = function() {
    console.log('倒进杯子里')
}

/* 加调味品，抽象方法 */
Beverage.prototype.addCondiment = function() {
    throw new Error('抽象方法不能调用!')
}

/* 制作流程，模板方法 */
Beverage.prototype.init = function() {
    this.boilWater()
    this.brewDrink()
    this.pourCup()
    this.addCondiment()
}

/* 咖啡类，子类 */
var Coffee = function() {}
Coffee.prototype = new Beverage()

/* 冲泡饮料，覆盖抽象方法 */
Coffee.prototype.brewDrink = function() {
    console.log('冲泡咖啡')
}

/* 加调味品，覆盖抽象方法 */
Coffee.prototype.addCondiment = function() {
    console.log('加点咖啡伴侣')
}

var coffee = new Coffee()
coffee.init()

// 输出：水已经煮沸
// 输出：冲泡咖啡
// 输出：倒进杯子里
// 输出：加点咖啡伴侣
