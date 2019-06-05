/**
 * 模块: this
 * 作者: SHERlocked93
 * 功能: 隐式绑定
 */

var a = 'hello'

var obj = {
    a: 'world',
    b:{
        a:'China',
        foo: function() {
            console.log(this.a)
        }
    }
}

obj.b.foo()

// 浏览器中输出: China
