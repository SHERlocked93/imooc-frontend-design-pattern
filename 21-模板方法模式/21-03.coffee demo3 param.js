/**
 * 模块: 模板方法模式
 * 作者: SHERlocked93
 * 功能: 通用实现
 */

/* 虚拟方法 */
const abstractFunc = function() {
    throw new Error('抽象方法不能调用!')
}

/* 空方法 */
const emptyFunc = function() {}

/* 饮料方法，方法体就是模板方法 */
function beverageFunc({
                           boilWater = function() {     // 烧开水，共用方法
                               console.log('水已经煮沸')
                           },
                           brewDrink = abstractFunc,    // 冲泡饮料，抽象方法
                           pourCup = function() {       // 倒杯子里，共用方法
                               console.log('倒进杯子里')
                           },
                           addCondiment = abstractFunc  // 加调味品，抽象方法
                       }) {
    boilWater()
    brewDrink()
    pourCup()
    addCondiment()
}

/* 制作咖啡 */
beverageFunc({
    brewDrink: function() {        // 冲泡饮料，覆盖抽象方法
        console.log('水已经煮沸')
    },
    addCondiment: function() {     // 加调味品，覆盖抽象方法
        console.log('加点咖啡伴侣')
    }
})
