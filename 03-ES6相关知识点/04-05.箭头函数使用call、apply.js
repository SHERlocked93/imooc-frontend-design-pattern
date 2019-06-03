/**
 * 模块: ES6 相关知识点
 * 作者: SHERlocked93
 * 功能: 箭头函数使用 call apply
 */

this.param = 1

const func1 = () => console.log(this.param)
const func2 = function() {
    console.log(this.param)
}
func1.apply({ param: 2 })   // 输出: 1
func2.apply({ param: 2 })   // 输出: 2
