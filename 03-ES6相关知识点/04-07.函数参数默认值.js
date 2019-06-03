/**
 * 模块: ES6 相关知识点
 * 作者: SHERlocked93
 * 功能: 参数默认值
 */

function log(x, y = 'World') {
    console.log(x, y)
}

log('Hello')             // Hello World
log('Hello', undefined)  // Hello World
log('Hello', 'China')    // Hello China
log(undefined, 'China')  // undefined China
// log(, 'China')           // 报错
log('Hello', '')         // Hello
log('Hello', null)       // Hello null

