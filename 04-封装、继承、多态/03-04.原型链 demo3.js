/**
 * 创建于 2019-06-02
 * 作者: SHERlocked93
 * 功能: 构造函数继承
 */

/* 四边形 */
function Rectangle(...sizes) {
    this.sizes = sizes || []
}

/* 正方形 */
function Square() {}

Square.prototype = new Rectangle(1, 2)

var squa1 = new Square()  // sizes: [1, 2]

squa1.sizes.push(3)

console.log(squa1.sizes)  // sizes: [1, 2, 3]

var squa2 = new Square()

console.log(squa2.sizes)  // sizes: [1, 2, 3] 应该是 [1, 2]
