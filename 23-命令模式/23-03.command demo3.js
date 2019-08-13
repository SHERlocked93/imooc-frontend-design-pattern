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
const MoveUpCommand = {
    execute(role) {
        role.move(0, -CanvasStep)
    }
}

// 向下移动命令对象
const MoveDownCommand = {
    execute(role) {
        role.move(0, CanvasStep)
    }
}

// 向左移动命令对象
const MoveLeftCommand = {
    execute(role) {
        role.move(-CanvasStep, 0)
    }
}

// 向右移动命令对象
const MoveRightCommand = {
    execute(role) {
        role.move(CanvasStep, 0)
    }
}

// 设置按钮命令
const setCommand = function(element, role, command) {
    element.onclick = function() {
        command.execute(role)
    }
}

/* ----- 客户端 ----- */
const mario = new Role(200, 200, 'https://i.loli.net/2019/08/09/sqnjmxSZBdPfNtb.jpg')

setCommand(btnUp, mario, MoveUpCommand)
setCommand(btnDown, mario, MoveDownCommand)
setCommand(btnLeft, mario, MoveLeftCommand)
setCommand(btnRight, mario, MoveRightCommand)
