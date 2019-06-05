/**
 * 模块: 闭包与高阶函数
 * 作者: SHERlocked93
 * 功能: 闭包
 */


function foo() {
    var a = 2
    
    function bar() {
        console.log(a)
    }
    
    return bar
}

var baz = foo()

baz()

// 输出: 2
