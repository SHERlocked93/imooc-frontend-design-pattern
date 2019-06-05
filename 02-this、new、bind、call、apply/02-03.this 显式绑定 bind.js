/**
 * 模块: this
 * 作者: SHERlocked93
 * 功能: 显式绑定 bind
 */

var food = {
    name: '汉堡',
    price: '5块钱',
    getPrice: function(place) {
        console.log(place + this.price)
    }
}

food.getPrice('KFC ')   // 浏览器中输出: "KFC 5块钱"

var getPrice1 = food.getPrice.bind({ name: '鸡腿', price: '7块钱' }, '肯打鸡 ')
getPrice1()       // 浏览器中输出: "肯打鸡 7块钱"

Function.prototype.bind = Function.prototype.bind || function(...rest1) {
    const self = this
    const context = rest1.shift()
    return function(...rest2) {
        return self.apply(context, [...rest1, ...rest2])
    }
}
