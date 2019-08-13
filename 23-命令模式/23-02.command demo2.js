const canvas = document.getElementById('my-canvas')
const CanvasWidth = 400    // 画布宽度
const CanvasHeight = 400   // 画布高度
const CanvasStep = 40      // 动作步长
canvas.width = CanvasWidth
canvas.height = CanvasHeight

const btnUp = document.getElementById('up-btn')
const btnDown = document.getElementById('down-btn')
const btnLeft = document.getElementById('left-btn')
const btnRight = document.getElementById('right-btn')

// 移动对象类
class Role {
    constructor(x, y, imgSrc) {
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
    
    move(x, y) {
        this.ctx.clearRect(this.x, this.y, CanvasStep, CanvasStep)
        this.x += x
        this.y += y
        this.ctx.drawImage(this.img, this.x, this.y, CanvasStep, CanvasStep)
    }
}

// 向上移动命令对象
class MoveUpCommand {
    constructor(receiver) {
        this.receiver = receiver
    }
    
    execute(role) {
        this.receiver.move(0, -CanvasStep)
    }
}

// 向下移动命令对象
class MoveDownCommand {
    constructor(receiver) {
        this.receiver = receiver
    }
    
    execute(role) {
        this.receiver.move(0, CanvasStep)
    }
}

// 向左移动命令对象
class MoveLeftCommand {
    constructor(receiver) {
        this.receiver = receiver
    }
    
    execute(role) {
        this.receiver.move(-CanvasStep, 0)
    }
}

// 向右移动命令对象
class MoveRightCommand {
    constructor(receiver) {
        this.receiver = receiver
    }
    
    execute(role) {
        this.receiver.move(CanvasStep, 0)
    }
}

// 设置按钮命令
const setCommand = function(element, command) {
    element.onclick = function() {
        command.execute()
    }
}

/* ----- 客户端 ----- */
const mario = new Role(200, 200, 'https://i.loli.net/2019/08/09/sqnjmxSZBdPfNtb.jpg')
const moveUpCommand = new MoveUpCommand(mario)
const moveDownCommand = new MoveDownCommand(mario)
const moveLeftCommand = new MoveLeftCommand(mario)
const moveRightCommand = new MoveRightCommand(mario)

setCommand(btnUp, moveUpCommand)
setCommand(btnDown, moveDownCommand)
setCommand(btnLeft, moveLeftCommand)
setCommand(btnRight, moveRightCommand)
