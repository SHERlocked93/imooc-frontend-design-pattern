/**
 * 创建于 2019-08-17
 * 作者: SHERlocked93
 * 功能: 职责链模式 请假
 */

/* 领导基类 */
class Leader {
    constructor() {
        this.nextLeader = null
    }
    
    setNext(next) {
        this.nextLeader = next
        return next
    }
}

/* 小组领导 */
class GroupLeader extends Leader {
    handle(duration) {
        if (duration <= 0.5) {
            console.log('小组领导经过一番心理斗争：批准了')
        } else
            this.nextLeader.handle(duration)
    }
}

/* 部门领导 */
class DepartmentLeader extends Leader {
    handle(duration) {
        if (duration <= 1) {
            console.log('部门领导经过一番心理斗争：批准了')
        } else
            this.nextLeader.handle(duration)
    }
}

/* 总经理 */
class GeneralLeader extends Leader {
    handle(duration) {
        if (duration <= 2) {
            console.log('总经理经过一番心理斗争：批准了')
        } else
            console.log('总经理：不准请这么长的假')
    }
}

const zhangSan = new GroupLeader()
const liSi = new DepartmentLeader()
const wangWu = new GeneralLeader()

/* 组装职责链 */
zhangSan
  .setNext(liSi)     // 设置小组领导的下一个职责节点为部门领导
  .setNext(wangWu)   // 设置部门领导的下一个职责节点为总经理

zhangSan.handle(0.5)   // 小组领导经过一番心理斗争：批准了
zhangSan.handle(1)     // 部门领导经过一番心理斗争：批准了
zhangSan.handle(2)     // 总经理经过一番心理斗争：批准了
zhangSan.handle(3)     // 总经理：不准请这么长的假
