/**
 * 模块: 工厂模式
 * 作者: SHERlocked93
 * 功能: 饭店例子 class 方式改写
 */

/* 饭店方法 */
class Restaurant {
    static orderDish(menu) {
        switch (menu) {
            case '鱼香肉丝':
                return new YuXiangRouSi()
            case '宫保鸡丁':
                return new GongBaoJiDing()
            default:
                throw new Error('这个菜本店没有 -。-')
        }
    }
}

/* 鱼香肉丝类 */
class YuXiangRouSi {
    constructor() {
        this.type = '鱼香肉丝'
    }
    
    eat() {
        console.log(this.type + ' 真香~')
    }
}

/* 宫保鸡丁类 */
class GongBaoJiDing {
    constructor() {
        this.type = '宫保鸡丁'
    }
    
    eat() {
        console.log(this.type + ' 让我想起了外婆做的菜~')
    }
}

const dish1 = Restaurant.orderDish('鱼香肉丝')
dish1.eat()
const dish2 = Restaurant.orderDish('红烧排骨')

// 输出: 鱼香肉丝 真香~
// 输出: Error 这个菜本店没有 -。-
