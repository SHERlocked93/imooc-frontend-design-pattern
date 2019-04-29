/**
 * 模块: 工厂模式
 * 作者: SHERlocked93
 * 功能: 饭店例子 灵活方式
 */

/* 饭店方法 */
class Restaurant {
    constructor() {
        this.menuData = {}
    }
    
    /**
     * 创建菜品
     * @param menu
     * @returns {Menu}
     */
    orderDish(menu) {
        if (!this.menuData[menu])
            throw new Error('这个菜本店没有 -。-')
        const { type, message } = this.menuData[menu]
        return new Menu(type, message)
    }
    
    /**
     * 增加菜品种类
     * @param menu
     * @param type
     * @param message
     */
    addMenu(menu, type, message) {
        if (this.menuData[menu]) {
            console.Info('已经有这个菜了!')
            return
        }
        this.menuData[menu] = { type, message }
    }
    
    /**
     * 移除菜品
     * @param menu
     */
    removeMenu(menu) {
        if (!this.menuData[menu]) return
        delete this.menuData[menu]
    }
}

/* 菜品类 */
class Menu {
    constructor(type, message) {
        this.type = type
        this.message = message
    }
    
    eat() {
        console.log(this.type + this.message)
    }
}

const restaurant = new Restaurant()
restaurant.addMenu('YuXiangRouSi', '鱼香肉丝', ' 真香~')
restaurant.addMenu('GongBaoJiDing', '宫保鸡丁', ' 让我想起了外婆做的菜~')

const dish1 = restaurant.orderDish('YuXiangRouSi')
dish1.eat()
const dish2 = restaurant.orderDish('HongShaoPaiGu')

// 输出: 鱼香肉丝 真香~
// 输出: Error 这个菜本店没有 -。-
