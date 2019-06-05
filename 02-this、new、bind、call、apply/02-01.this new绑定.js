/**
 * 模块: this
 * 作者: SHERlocked93
 * 功能: 通过 new 调用的函数中的 this
 */

function Foo() {
    console.log(this)
}

var bar = new Foo()

// 输出: Foo 实例
