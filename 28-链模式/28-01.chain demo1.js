/* 四边形 */
var rectangle = {
    length: null,  // 长
    width: null,   // 宽
    color: null,   // 颜色
    
    getSize: function() {
        console.log(`length: ${ this.length }, width: ${ this.width }, color: ${ this.color }`)
    },
    
    /* 设置长度 */
    setLength: function(length) {
        this.length = length
        return this
    },
    
    /* 设置宽度 */
    setWidth: function(width) {
        this.width = width
        return this
    },
    
    /* 设置颜色 */
    setColor: function(color) {
        this.color = color
        return this
    }
}

var rect = rectangle
  .setLength('100px')
  .setWidth('80px')
  .setColor('blue')
  .getSize()

// 输出：length: 100px, width: 80px, color: blue
