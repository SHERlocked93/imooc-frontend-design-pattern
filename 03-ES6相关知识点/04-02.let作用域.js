/**
 * 模块: ES6 相关知识点
 * 作者: SHERlocked93
 * 功能: let命令声明的变量具有块级作用域
 */


var a = []

for (let i = 0; i < 4; i++) {
    a[i] = function() {
        console.log(i)
    }
}

a[2]()	 // 输出: 2
