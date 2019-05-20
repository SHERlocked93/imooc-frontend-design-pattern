/**
 * 模块: 闭包与高阶函数
 * 作者: SHERlocked93
 * 功能: 高阶函数 Array.prototype.filter()
 */


var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

var result = words.filter(function(word) {
    return word.length > 6
})

console.log(result)


// 输出: ["exuberant", "destruction", "present"]
