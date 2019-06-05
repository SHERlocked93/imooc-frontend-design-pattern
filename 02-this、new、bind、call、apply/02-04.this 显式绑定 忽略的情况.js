/**
 * 模块: this
 * 作者: SHERlocked93
 * 功能: 显式绑定 call apply
 */

var a = 'hello'

function foo() {
    console.log(this.a)
}

foo.call(null) // 浏览器中输出: "hello"
