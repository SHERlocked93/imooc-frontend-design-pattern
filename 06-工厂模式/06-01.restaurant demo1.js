/**
 * 模块: 工厂模式
 * 作者: SHERlocked93
 * 功能: 餐馆例子
 */

/* 餐厅方法 */
function restaurant(menu) {
    switch (menu) {
        case '鱼香肉丝':
            return new YuXiangRouSi()
        case '宫保鸡丁':
            return new GongBaoJiDin()
        default:
            throw new Error('这个菜本店没有 -。-')
    }
}

/* 鱼香肉丝类 */
function YuXiangRouSi() {
    this.type = '鱼香肉丝'
}

YuXiangRouSi.prototype.eat = function() {
    console.log(this.type + ' 真香~')
}

/* 宫保鸡丁类 */
function GongBaoJiDin() {
    this.type = '宫保鸡丁'
}

GongBaoJiDin.prototype.eat = function() {
    console.log(this.type + ' 让我想起了外婆做的菜~')
}

const dish1 = restaurant('鱼香肉丝')
dish1.eat()
const dish2 = restaurant('红烧排骨')

// 输出: 鱼香肉丝 真香~
// 输出: Error 这个菜本店没有 -。-
