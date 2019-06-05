/**
 * 模块: ES6 相关知识点
 * 作者: SHERlocked93
 * 功能: 变量提升
 */

// var 命令存在变量提升
console.log(a)  // undefined
var a = 1
console.log(a)  // 1

// let、const 命令不存在变量提升
console.log(b)  // 报错 ReferenceError: b is not defined
let b = 2
