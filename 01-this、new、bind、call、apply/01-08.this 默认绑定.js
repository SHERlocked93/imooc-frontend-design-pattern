/**
 * 模块: this
 * 作者: SHERlocked93
 * 功能: 独立函数调用方式
 */

var a = 'hello'

function foo() {
    var a = 'world'
    console.log(this.a)
    console.log(this)
}

foo()
// 浏览器中输出: 'hello'
// 浏览器中输出: Window 对象
