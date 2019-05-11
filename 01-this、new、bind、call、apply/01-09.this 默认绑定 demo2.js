/**
 * 模块: this
 * 作者: SHERlocked93
 * 功能: 独立函数调用方式
 */

var a = 'hello'

var obj = {
    a: 'world',
    foo: function() {
        console.log(this.a)
    }
}

var bar = obj.foo

bar()

// 浏览器中输出: 'hello'
