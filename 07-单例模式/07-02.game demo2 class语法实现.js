/**
 * 模块: 单例模式
 * 作者: SHERlocked93
 * 功能: 经营游戏例子
 */

class ManageGame {
    static _schedule = null
    
    static getInstance() {
        if (ManageGame._schedule) {        // 判断是否已经有单例了
            return ManageGame._schedule
        }
        return ManageGame._schedule = new ManageGame()
    }
    
    constructor() {
        if (ManageGame._schedule) {        // 判断是否已经有单例了
            return ManageGame._schedule
        }
        ManageGame._schedule = this
    }
}

const schedule1 = new ManageGame()
const schedule2 = ManageGame.getInstance()

console.log(schedule1 === schedule2)

// 输出: true
