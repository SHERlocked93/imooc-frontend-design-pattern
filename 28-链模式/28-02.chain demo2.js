/* 四边形 */
function Rectangle() {
    this.length = null   // 长
    this.width = null    // 宽
    this.color = null    // 颜色
}

/* 设置长度 */
Rectangle.prototype.setLength = function(length) {
    this.length = length
    return this
}

/* 设置宽度 */
Rectangle.prototype.setWidth = function(width) {
    this.width = width
    return this
}

/* 设置颜色 */
Rectangle.prototype.setColor = function(color) {
    this.color = color
    return this
}

const rect = new Rectangle()
  .setLength('100px')
  .setWidth('80px')
  .setColor('blue')

console.log(rect)

// 输出：{length: "100px", width: "80px", color: "blue"}
