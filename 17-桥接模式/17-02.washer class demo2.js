/**
 * 创建于 2019-07-30
 * 作者: SHERlocked93
 * 功能: 桥接模式 变频洗衣机
 */

/* 组装洗衣机 */
class Washer {
    constructor(motorType, rollerType, transducerType) {
        this.motor = new Motor(motorType)
        this.roller = new Roller(rollerType)
        this.transducer = new Transducer(transducerType)
    }
    
    /* 开始使用 */
    work() {
        this.motor.run()
        this.roller.run()
        this.transducer.run()
    }
}

/* 电机 */
class Motor {
    constructor(type) {
        this.motorType = type + '电机'
    }
    
    run() {
        console.log(this.motorType + '开始工作')
    }
}

/* 滚筒 */
class Roller {
    constructor(type) {
        this.rollerType = type + '滚筒'
    }
    
    run() {
        console.log(this.rollerType + '开始工作')
    }
}

/* 变频器 */
class Transducer {
    constructor(type) {
        this.transducerType = type + '变频器'
    }
    
    run() {
        console.log(this.transducerType + '开始工作')
    }
}

const washerA = new Washer('小功率', '直立', '小功率')
washerA.work()

// 输出：小功率电机开始工作
//      直立滚筒开始工作
//      小功率变频器开始工作
