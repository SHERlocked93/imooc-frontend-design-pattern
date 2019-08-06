/**
 * 创建于 2019-08-06
 * 作者: SHERlocked93
 * 功能: 红绿灯例子， ES6形式
 */


/* 抽象状态类 */
class AbstractState {
    constructor() {
        if (new.target === AbstractState) {
            throw new Error('抽象类不能直接实例化!')
        }
    }
    
    /* 抽象方法 */
    employ() {
        throw new Error('抽象方法不能调用!')
    }
}

/* 交通灯类 */
class State extends AbstractState {
    constructor(name, desc) {
        super()
        this.color = { name, desc }
    }
    
    /* 覆盖抽象方法 */
    employ(trafficLight) {
        console.log('交通灯颜色变为 ' + this.color.name + '，' + this.color.desc)
        trafficLight.setState(this)
    }
}

/* 交通灯类 */
class TrafficLight {
    constructor() {
        this.state = null
    }
    
    /* 获取交通灯状态 */
    getState() {
        return this.state
    }
    
    /* 设置交通灯状态 */
    setState(state) {
        this.state = state
    }
}

const trafficLight = new TrafficLight()

const redState = new State('红色', '行人等待 & 车辆等待')
const greenState = new State('绿色', '行人等待 & 车辆通行')
const yellowState = new State('黄色', '行人等待 & 车辆等待')

redState.employ(trafficLight)    // 输出： 交通灯颜色变为 红色，行人通行 & 车辆等待
yellowState.employ(trafficLight) // 输出： 交通灯颜色变为 黄色，行人等待 & 车辆等待
greenState.employ(trafficLight)  // 输出： 交通灯颜色变为 绿色，行人等待 & 车辆通行

const blueState = new State('蓝色', '行人倒立 & 车辆飞起')
blueState.employ(trafficLight)  // 输出： 交通灯颜色变为 蓝色，行人倒立 & 车辆飞起
