/**
 * 创建于 2019-08-17
 * 作者: SHERlocked93
 * 功能: 职责链模式 请假
 */

var askLeave = function(duration) {
    if (duration <= 0.5) {
        console.log('小组领导经过一番心理斗争：批准了')
    } else if (duration <= 1) {
        console.log('部门领导经过一番心理斗争：批准了')
    } else if (duration <= 2) {
        console.log('总经理经过一番心理斗争：批准了')
    } else {
        console.log('总经理：不准请这么长的假')
    }
}

askLeave(0.5)   // 小组领导经过一番心理斗争：批准了
askLeave(1)     // 部门领导经过一番心理斗争：批准了
askLeave(2)     // 总经理经过一番心理斗争：批准了
askLeave(3)     // 总经理：不准请这么长的假
