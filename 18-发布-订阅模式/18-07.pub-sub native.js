/**
 * 创建于 2019-07-16
 * 作者: SHERlocked93
 * 功能: 使用浏览器原生方法实现发布订阅
 */


// 输出：自定义方法
function eventHandler(dom) {
    console.log('自定义方法', dom)
}

var app = document.getElementById('app')

/* ---- 事件订阅 ---- */
app.addEventListener('myevent', eventHandler)
/* 发布 */
app.dispatchEvent(new Event('myevent'))

// 输出：自定义方法+DOM


/* ---- 取消订阅 ---- */
app.removeEventListener('myevent', eventHandler)
app.dispatchEvent(new Event('myevent'))

// 没有输出
