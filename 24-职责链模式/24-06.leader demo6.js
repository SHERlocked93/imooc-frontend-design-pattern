/**
 * 创建于 2019-08-17
 * 作者: SHERlocked93
 * 功能: 职责链模式 请假
 */

/* 领导基类 */
var Leader = function() {
    this.nextLeader = null
}

Leader.prototype.setNext = function(next) {
    this.nextLeader = next
    return next
}

/* 小组领导 */
var GroupLeader = new Leader()
GroupLeader.handle = function(duration) {
    if (duration <= 0.5) {
        console.log('小组领导经过一番心理斗争：批准了')
    } else
        this.nextLeader.handle(duration)
}

/* 部门领导 */
var DepartmentLeader = new Leader()
DepartmentLeader.handle = function(duration) {
    if (duration <= 1) {
        console.log('部门领导经过一番心理斗争：批准了')
    } else
        this.nextLeader.handle(duration)
}

/* 总经理 */
var GeneralLeader = new Leader()
GeneralLeader.handle = function(duration) {
    if (duration <= 2) {
        console.log('总经理经过一番心理斗争：批准了')
    } else
        console.log('总经理：不准请这么长的假')
}

/* 组装职责链 */
GroupLeader
  .setNext(DepartmentLeader)   // 设置小组领导的下一个职责节点为部门领导
  .setNext(GeneralLeader)      // 设置部门领导的下一个职责节点为总经理

GroupLeader.handle(0.5)   // 小组领导经过一番心理斗争：批准了
GroupLeader.handle(1)     // 部门领导经过一番心理斗争：批准了
GroupLeader.handle(2)     // 总经理经过一番心理斗争：批准了
GroupLeader.handle(3)     // 总经理：不准请这么长的假
