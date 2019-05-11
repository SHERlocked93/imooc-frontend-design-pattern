/**
 * 模块: this
 * 作者: SHERlocked93
 * 功能: 隐式绑定 方法作为回调函数的场景
 */

var a = 'hello'

var obj = {
    a: 'world',
    foo: function() {
        console.log(this.a)
    }
}

function func(fn) {
    fn()
}

func(obj.foo)              // 浏览器中输出: 'hello'
