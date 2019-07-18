/**
 * 创建于 2019-07-16
 * 作者: SHERlocked93
 * 功能: 使用 jq 提供的api实现发布订阅
 */


function eventHandler() {
    console.log('自定义方法')
}

/* ---- 事件订阅 ---- */
$('#app').on('myevent', eventHandler)
/* 发布 */
$('#app').trigger('myevent')

// 输出：自定义方法


/* ---- 取消订阅 ---- */
$('#app').off('myevent')
$('#app').trigger('myevent')

// 没有输出
