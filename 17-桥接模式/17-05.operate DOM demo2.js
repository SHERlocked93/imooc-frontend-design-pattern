/**
 * 创建于 2019-07-31
 * 作者: SHERlocked93
 * 功能: 操作DOM
 */


var btn = document.getElementById('btn')

/* 设置前景色和背景色 */
function setColor(element, color = 'black', bgc = 'lightgray') {
    element.style.setProperty('color', color)
    element.style.setProperty('background-color', bgc)
}

/* 设置尺寸 */
function setSize(element, size = '1') {
    element.style.setProperty('transform', `scale(${ size })`)
}

btn.addEventListener('mouseover', function() {
    setColor(btn, 'blue', 'green')
    setSize(btn, '1.5')
})

btn.addEventListener('mouseleave', function() {
    setColor(btn)
    setSize(btn)
})

btn.addEventListener('mousedown', function() {
    setColor(btn, 'red', 'purple')
    setSize(btn, '.5')
})

btn.addEventListener('mouseup', function() {
    setColor(btn)
    setSize(btn)
})
