/**
 * 创建于 2019-06-02
 * 作者: SHERlocked93
 * 功能: 对象继承
 */


var rectangle = {
    sizeType: '四边形',
    getSize: function() {
        console.log(this.sizeType)
    }
}

var square = Object.create(rectangle, {
    sizeType: { value: '正方形' }
})

rectangle.getSize()   // "四方形"
square.getSize()      // "正方形"

console.log(rectangle.hasOwnProperty('getSize')) // true
console.log(rectangle.isPrototypeOf(square))     // true
console.log(square.hasOwnProperty('getSize'))    // false
console.log('getSize' in square)                 // true

console.log(square.__proto__ === rectangle)                       // true
console.log(square.__proto__.__proto__ === Object.prototype)      // true
