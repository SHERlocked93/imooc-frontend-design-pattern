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
const btnUndo = document.getElementById('undo-btn')
const btnRedo = document.getElementById('redo-btn')

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
    },
    undo(role) {
        role.move(0, CanvasStep)
    }
}

// 向下移动命令对象
const MoveDownCommand = {
    execute(role) {
        role.move(0, CanvasStep)
    },
    undo(role) {
        role.move(0, -CanvasStep)
    }
}

// 向左移动命令对象
const MoveLeftCommand = {
    execute(role) {
        role.move(-CanvasStep, 0)
    },
    undo(role) {
        role.move(CanvasStep, 0)
    }
}

// 向右移动命令对象
const MoveRightCommand = {
    execute(role) {
        role.move(CanvasStep, 0)
    },
    undo(role) {
        role.move(-CanvasStep, 0)
    }
}

// Comand管理者（调用command之前先放入栈内）
const CommandManager = {
    undoStack: [],   // 重做命令栈
    redoStack: [],   // 撤销命令栈
    
    executeCommand(role, command) {
        this.redoStack.length = 0    // 每次执行清空撤销命令栈
        this.undoStack.push(command) // 放入重做  命令栈
        command.execute(role)
    },
    
    /* 重做 */
    undo(role) {
        if (this.undoStack.length === 0) return
        const lastCommand = this.undoStack.pop()
        lastCommand.undo(role)
        this.redoStack.push(lastCommand)  // 放入redo栈中
    },
    
    /* 撤销 */
    redo(role) {
        if (this.redoStack.length === 0) return
        const lastCommand = this.redoStack.pop()
        lastCommand.execute(role)
        this.undoStack.push(lastCommand)  // 放入undo栈中
    }
}

// 设置按钮命令
const setCommand = function(element, role, command) {
    if (typeof command === 'object') {
        element.onclick = function() {
            CommandManager.executeCommand(role, command)
        }
    } else {
        element.onclick = function() {
            command.call(CommandManager, role)
        }
    }
}

/* ----- 客户端 ----- */
const mario = new Role(200, 200, 'https://i.loli.net/2019/08/09/sqnjmxSZBdPfNtb.jpg')

setCommand(btnUp, mario, MoveUpCommand)
setCommand(btnDown, mario, MoveDownCommand)
setCommand(btnLeft, mario, MoveLeftCommand)
setCommand(btnRight, mario, MoveRightCommand)

setCommand(btnUndo, mario, CommandManager.undo)
setCommand(btnRedo, mario, CommandManager.redo)
