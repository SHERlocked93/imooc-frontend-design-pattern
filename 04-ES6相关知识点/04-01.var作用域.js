/**
 * 模块: ES6 相关知识点
 * 作者: SHERlocked93
 * 功能: var命令只有函数作用域
 */


var a = []

for (var i = 0; i < 4; i++) {
    a[i] = function() {
        console.log(i)
    }
}

a[2]()	 // 输出: 4
