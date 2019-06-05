/**
 * 模块: this
 * 作者: SHERlocked93
 * 功能: 一个小练习
 */

var a = 20

var obj = {
    a: 40,
    foo: function() {
        console.log(this.a)
        
        function func() {
            this.a = 60
            console.log(this.a)
        }
        
        func.prototype.a = 50
        return func
    }
}

var bar = obj.foo()        // 浏览器中输出: 40
bar()                      // 浏览器中输出: 60
new bar()                  // 浏览器中输出: 60
