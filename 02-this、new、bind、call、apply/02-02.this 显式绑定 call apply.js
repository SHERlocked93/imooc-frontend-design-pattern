/**
 * 模块: this
 * 作者: SHERlocked93
 * 功能: 显式绑定 call apply
 */

function foo(name, price) {
    this.name = name
    this.price = price
}

function Food(category, name, price) {
    foo.call(this, name, price)       // call 方式调用
    // foo.apply(this, [name, price])    // apply 方式调用
    this.category = category
}

new Food('吃的', '汉堡', '5块钱')

// 浏览器中输出: {name: "汉堡", price: "5块钱", category: "吃的"}
