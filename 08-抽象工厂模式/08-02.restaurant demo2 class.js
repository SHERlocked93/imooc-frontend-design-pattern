/**
 * 模块: 工厂模式
 * 作者: SHERlocked93
 * 功能: 饭店例子 引入抽象类
 */

/* 饭店方法 */
class Restaurant {
    static orderDish(type) {
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
}

/* 菜品抽象类 */
class Dish {
    constructor() {
        if (new.target === Dish) {
            throw new Error('抽象类不能直接实例化!')
        }
        this.kind = '菜'
    }
    
    /* 抽象方法 */
    eat() {
        throw new Error('抽象方法不能调用!')
    }
}

/* 鱼香肉丝类 */
class YuXiangRouSi extends Dish {
    constructor() {
        super()
        this.type = '鱼香肉丝'
    }
    
    eat() {
        console.log(this.kind + ' - ' + this.type + ' 真香~')
    }
}

/* 宫保鸡丁类 */
class GongBaoJiDing extends Dish {
    constructor() {
        super()
        this.type = '宫保鸡丁'
    }
    
    eat() {
        console.log(this.kind + ' - ' + this.type + ' 让我想起了外婆做的菜~')
    }
}

/* 汤抽象类 */
class Soup {
    constructor() {
        if (new.target === Dish) {
            throw new Error('抽象类不能直接实例化!')
        }
        this.kind = '汤'
    }
    
    /* 抽象方法 */
    drink() {
        throw new Error('抽象方法不能调用!')
    }
}


/* 紫菜蛋汤类 */
class ZiCaiDanTang extends Soup {
    constructor() {
        super()
        this.type = '紫菜蛋汤'
    }
    
    drink() {
        console.log(this.kind + ' - ' + this.type + ' 我从小喝到大~')
    }
}

const soup1 = Restaurant.orderDish('紫菜蛋汤')
soup1.drink()
const dish1 = Restaurant.orderDish('鱼香肉丝')
dish1.eat()
const dish2 = Restaurant.orderDish('红烧排骨')

// 输出: 汤 - 紫菜蛋汤 我从小喝到大~
// 输出: 菜 - 鱼香肉丝 真香~
// 输出: Error 本店没有这个 -。-
