var canvas = document.getElementById('my-canvas')
var CanvasWidth = 400 // 画布宽度
var CanvasHeight = 400 // 画布高度
var CanvasStep = 40 // 动作步长
canvas.width = CanvasWidth
canvas.height = CanvasHeight

// 移动对象类
var Role = function(x, y, imgSrc) {
    this.x = x
    this.y = y
    this.canvas = document.getElementById('my-canvas')
    this.ctx = this.canvas.getContext('2d')
    this.img = new Image()
    this.img.style.width = CanvasStep
    this.img.style.height = CanvasStep
    this.img.src = imgSrc
    this.img.onload = () => {
        this.ctx.drawImage(this.img, x, y, CanvasStep, CanvasStep)
        this.move(0, 0)
    }
}

Role.prototype.move = function(x, y) {
    this.ctx.clearRect(this.x, this.y, CanvasStep, CanvasStep)
    this.x += x
    this.y += y
    this.ctx.drawImage(this.img, this.x, this.y, CanvasStep, CanvasStep)
}

/* ----- 客户端 ----- */
var mario = new Role(200, 200, 'https://i.loli.net/2019/08/09/sqnjmxSZBdPfNtb.jpg')
// var monster = new Role(160, 160, 'https://i.loli.net/2019/08/12/XCTzcdbhriLlskv.png')

// 设置按钮命令
var elementUp = document.getElementById('up-btn')
elementUp.onclick = function() {
    mario.move(0, -CanvasStep)
}

var elementDown = document.getElementById('down-btn')
elementDown.onclick = function() {
    mario.move(0, CanvasStep)
}

var elementLeft = document.getElementById('left-btn')
elementLeft.onclick = function() {
    mario.move(-CanvasStep, 0)
}

var elementRight = document.getElementById('right-btn')
elementRight.onclick = function() {
    mario.move(CanvasStep, 0)
}
