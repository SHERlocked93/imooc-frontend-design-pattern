/**
 * 模块: 单例模式
 * 作者: SHERlocked93
 * 功能: 经营游戏例子
 */

function ManageGame() {
    if (ManageGame._schedule) {        // 判断是否已经有单例了
        return ManageGame._schedule
    }
    ManageGame._schedule = this
    ManageGame.playGame = function() {
        this._schedule = new Date()
    }
    return this
}

const schedule1 = new ManageGame()
const schedule2 = new ManageGame()

console.log(schedule1 === schedule2)

// 输出: true

