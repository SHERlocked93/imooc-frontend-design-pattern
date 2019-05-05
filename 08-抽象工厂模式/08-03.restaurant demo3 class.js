/**
 * 模块: 工厂模式
 * 作者: SHERlocked93
 * 功能: 饭店例子 引入抽象类
 */

/**
 *  饭店 抽象类
 *  饭店都可以做菜和汤
 */
class AbstractRestaurant {
    constructor() {
        if (new.target === AbstractDish) {
            throw new Error('抽象类不能直接实例化!')
        }
        this.signboard = '饭店'
    }
    
    /* 抽象方法：创建菜 */
    createDish() {
        throw new Error('抽象方法不能调用!')
    }
    
    /* 抽象方法：创建汤 */
    createSoup() {
        throw new Error('抽象方法不能调用!')
    }
}

/* 具体饭店类 */
class Restaurant extends AbstractRestaurant {
    constructor() {
        super()
    }
    
    createDish(type) {
        switch (type) {
            case '鱼香肉丝':
                return new YuXiangRouSi()
            case '宫保鸡丁':
                return new GongBaoJiDing()
            default:
                throw new Error('本店没这个菜')
        }
    }
    
    createSoup(type) {
        switch (type) {
            case '紫菜蛋汤':
                return new ZiCaiDanTang()
            default:
                throw new Error('本店没这个汤')
        }
    }
}

/**
 * 菜 抽象类
 * 菜都有吃的功能
 */
class AbstractDish {
    constructor() {
        if (new.target === AbstractDish) {
            throw new Error('抽象类不能直接实例化!')
        }
        this.kind = '菜'
    }
    
    /* 抽象方法 */
    eat() {
        throw new Error('抽象方法不能调用!')
    }
}

/* 菜 鱼香肉丝类 */
class YuXiangRouSi extends AbstractDish {
    constructor() {
        super()
        this.type = '鱼香肉丝'
    }
    
    eat() {
        console.log(this.kind + ' - ' + this.type + ' 真香~')
    }
}

/* 菜 宫保鸡丁类 */
class GongBaoJiDing extends AbstractDish {
    constructor() {
        super()
        this.type = '宫保鸡丁'
    }
    
    eat() {
        console.log(this.kind + ' - ' + this.type + ' 让我想起了外婆做的菜~')
    }
}

/**
 * 汤 抽象类
 * 汤都有喝的功能
 */
class AbstractSoup {
    constructor() {
        if (new.target === AbstractDish) {
            throw new Error('抽象类不能直接实例化!')
        }
        this.kind = '汤'
    }
    
    /* 抽象方法 */
    drink() {
        throw new Error('抽象方法不能调用!')
    }
}

/* 汤 紫菜蛋汤类 */
class ZiCaiDanTang extends AbstractSoup {
    constructor() {
        super()
        this.type = '紫菜蛋汤'
    }
    
    drink() {
        console.log(this.kind + ' - ' + this.type + ' 我从小喝到大~')
    }
}


const restaurant = new Restaurant()

const soup1 = restaurant.createSoup('紫菜蛋汤')
soup1.drink()
const dish1 = restaurant.createDish('鱼香肉丝')
dish1.eat()
const dish2 = restaurant.createDish('红烧排骨')

// 输出: 汤 - 紫菜蛋汤 我从小喝到大~
// 输出: 菜 - 鱼香肉丝 真香~
// 输出: Error 本店没有这个 -。-
