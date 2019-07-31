/**
 * 创建于 2019-07-31
 * 作者: SHERlocked93
 * 功能: 操作DOM
 */


var btn = document.getElementById('btn')

btn.addEventListener('mouseover', function() {
    btn.style.setProperty('color', 'blue')
    btn.style.setProperty('background-color', 'green')
    btn.style.setProperty('transform', 'scale(1.5)')
})

btn.addEventListener('mouseleave', function() {
    btn.style.setProperty('color', 'black')
    btn.style.setProperty('background-color', 'lightgray')
    btn.style.setProperty('transform', 'scale(1)')
})

btn.addEventListener('mousedown', function() {
    btn.style.setProperty('color', 'red')
    btn.style.setProperty('background-color', 'purple')
    btn.style.setProperty('transform', 'scale(.5)')
})

btn.addEventListener('mouseup', function() {
    btn.style.setProperty('color', 'black')
    btn.style.setProperty('background-color', 'lightgray')
    btn.style.setProperty('transform', 'scale(1)')
})
