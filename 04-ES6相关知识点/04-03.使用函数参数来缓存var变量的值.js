/**
 * 模块: ES6 相关知识点
 * 作者: SHERlocked93
 * 功能: 使用函数参数来缓存var变量的值
 */


var a = []

for (var i = 0; i < 4; i++) {
    (function(j) {
        a[i] = function(j) {
            console.log(j)
        }
    })(i)
}

a[2]()	 // 输出: 4
