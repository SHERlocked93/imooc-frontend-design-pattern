/**
 * 模块: this
 * 作者: SHERlocked93
 * 功能: 隐式绑定
 */

var a = 'hello'

var obj = {
    a: 'world',
    foo: function() {
        console.log(this.a)
    }
}

obj.foo()

// 浏览器中输出: hello
