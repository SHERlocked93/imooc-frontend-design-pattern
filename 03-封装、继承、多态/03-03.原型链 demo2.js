/**
 * 创建于 2019-06-02
 * 作者: SHERlocked93
 * 功能: 构造函数继承
 */

/* 四边形 */
function Rectangle(length, width) {
    this.length = length   // 长
    this.width = width     // 宽
}

/* 获取面积 */
Rectangle.prototype.getArea = function() {
    return this.length * this.width
}

/* 获取尺寸信息 */
Rectangle.prototype.getSize = function() {
    console.log(`Rectangle: ${ this.length }x${ this.width }，面积: ${ this.getArea() }`)
}

/* 正方形 */
function Square(size) {
    this.length = size
    this.width = size
}

Square.prototype = new Rectangle()
Square.prototype.constructor = Square

Square.prototype.getSize = function() {
    console.log(`Square: ${ this.length }x${ this.width }，面积: ${ this.getArea() }`)
}

var rect = new Rectangle(5, 10)
var squa = new Square(6)

rect.getSize()       // Rectangle: 5x10，面积: 50
squa.getSize()       // Square: 6x6，面积: 36

console.log(rect instanceof Rectangle)     // true
console.log(rect instanceof Square)        // false
console.log(rect instanceof Object)        // true
console.log(squa instanceof Rectangle)     // true
console.log(squa instanceof Square)        // true
console.log(squa instanceof Object)        // true
