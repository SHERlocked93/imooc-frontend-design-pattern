/**
 * 创建于 2019-06-02
 * 作者: SHERlocked93
 * 功能: 组合继承
 */

/* 四边形 */
function Rectangle(length, width) {
    this.length = length
    this.width = width
    this.color = 'red'
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
    Rectangle.call(this, size, size)  // 第一次调用 Rectangle 函数
    this.color = 'blue'
}

Square.prototype = new Rectangle()    // 第二次调用 Rectangle 函数
Square.prototype.constructor = Square

Square.prototype.getSize = function() {
    console.log(`Square: ${ this.length }x${ this.width }，面积: ${ this.getArea() }`)
}

var rect = new Rectangle(5, 10)
var squa = new Square(6)

rect.getSize()       // Rectangle: 5x10，面积: 50
squa.getSize()       // Square: 6x6，面积: 36
