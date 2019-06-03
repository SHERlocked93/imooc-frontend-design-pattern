/**
 * 创建于 2019-06-02
 * 作者: SHERlocked93
 * 功能: 组合继承
 */

/* 四边形 */
class Rectangle {
    constructor(length, width) {
        this.length = length
        this.width = width
        this.color = 'red'
    }
    
    /* 获取面积 */
    getArea() {
        return this.length * this.width
    }
    
    /* 获取尺寸信息 */
    getSize() {
        console.log(`Rectangle: ${ this.length }x${ this.width }，面积: ${ this.getArea() }`)
    }
}

/* 正方形 */
class Square extends Rectangle {
    constructor(size) {
        super(size, size)
        this.color = 'blue'
    }
    
    getSize() {
        console.log(`Square: ${ this.length }x${ this.width }，面积: ${ this.getArea() }`)
    }
}


var rect = new Rectangle(5, 10)
var squa = new Square(6)

rect.getSize()       // Rectangle: 5x10，面积: 50
squa.getSize()       // Square: 6x6，面积: 36

