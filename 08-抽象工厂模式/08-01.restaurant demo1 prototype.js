/**
 * 模块: 工厂模式
 * 作者: SHERlocked93
 * 功能: 饭店例子 使用原型方式
 */

/* 饭店方法 */
function Restaurant() {}

Restaurant.orderDish = function(type) {
    switch (type) {
        case '鱼香肉丝':
            return new YuXiangRouSi()
        case '宫保鸡丁':
            return new GongBaoJiDing()
        case '紫菜蛋汤':
            return new ZiCaiDanTang()
        default:
            throw new Error('本店没有这个 -。-')
    }
}

/* 菜品抽象类 */
function Dish() {
    this.kind = '菜'
}

/* 抽象方法 */
Dish.prototype.eat = function() {
    throw new Error('抽象方法不能调用!')
}

/* 鱼香肉丝类 */
function YuXiangRouSi() {
    this.type = '鱼香肉丝'
}

YuXiangRouSi.prototype = new Dish()

YuXiangRouSi.prototype.eat = function() {
    console.log(this.kind + ' - ' + this.type + ' 真香~')
}

/* 宫保鸡丁类 */
function GongBaoJiDing() {
    this.type = '宫保鸡丁'
}

GongBaoJiDing.prototype = new Dish()

GongBaoJiDing.prototype.eat = function() {
    console.log(this.kind + ' - ' + this.type + ' 让我想起了外婆做的菜~')
}

const dish1 = Restaurant.orderDish('鱼香肉丝')
dish1.eat()
const dish2 = Restaurant.orderDish('红烧排骨')

// 输出: 菜 - 鱼香肉丝 真香~
// 输出: Error 本店没有这个 -。-
