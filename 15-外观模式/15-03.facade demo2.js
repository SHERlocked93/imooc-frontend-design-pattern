/**
 * 创建于 2019-07-13
 * 作者: SHERlocked93
 * 功能: 外观模式 绑定事件
 */


function addEvent(dom, type, fn) {
    if (dom.addEventListener) {      // 支持 DOM2 级事件处理方法的浏览器
        dom.addEventListener(type, fn, false)
    } else if (dom.attachEvent) {    // 不支持 DOM2 级但支持 attachEvent
        dom.attachEvent('on' + type, fn)
    } else {
        dom['on' + type] = fn        // 都不支持的浏览器
    }
}

const myInput = document.getElementById('myinput')

addEvent(myInput, 'click', function() {
    console.log('绑定 click 事件')
})
