/**
 * 模块: this
 * 作者: SHERlocked93
 * 功能: 箭头函数中的this
 */

var a = 'hello'

var obj = {
    a: 'world',
    foo: () => {
        console.log(this.a)
    }
}

obj.foo()

// 浏览器中输出: 'hello'
