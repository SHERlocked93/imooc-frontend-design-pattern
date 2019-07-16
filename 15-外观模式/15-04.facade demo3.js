/**
 * 创建于 2019-07-13
 * 作者: SHERlocked93
 * 功能: 外观模式 外观方法
 */


// 移除 DOM 上的事件
function removeEvent(element, type, fn) {
    if (element.removeEventListener) {
        element.removeEventListener(type, fn, false)
    } else if (element.detachEvent) {
        element.detachEvent('on' + type, fn)
    } else {
        element['on' + type] = null
    }
}

// 获取样式
function getStyle(obj, styleName) {
    if (window.getComputedStyle) {
        var styles = getComputedStyle(obj, null)[styleName]
    } else {
        var styles = obj.currentStyle[styleName]
    }
    return styles
}

// 阻止默认事件
var preventDefault = function(event) {
    if (event.preventDefault) {
        event.preventDefault()
    } else {                    // IE 下
        event.returnValue = false
    }
}

// 阻止时间冒泡
var cancelBubble = function(event) {
    if (event.stopPropagation) {
        event.stopPropagation()
    } else {                    // IE 下
        event.cancelBubble = true
    }
}
