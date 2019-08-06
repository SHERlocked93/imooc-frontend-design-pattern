/**
 * 创建于 2019-08-06
 * 作者: SHERlocked93
 * 功能: 红绿灯例子 引入状态类，并且增加状态机切换逻辑
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
    
    changeState() {
        throw new Error('抽象方法不能调用!')
    }
}

/* 交通灯类-红灯 */
class RedState extends AbstractState {
    constructor() {
        super()
        this.colorState = '红色'
    }
    
    /* 覆盖抽象方法 */
    employ() {
        console.log('交通灯颜色变为 ' + this.colorState + '，行人通行 & 车辆等待')
        const redDom = document.getElementById('color-red')
        redDom.click()
    }
    
    changeState(trafficLight) {
        trafficLight.setState(trafficLight.yellowState)
    }
}

/* 交通灯类-绿灯 */
class GreenState extends AbstractState {
    constructor() {
        super()
        this.colorState = '绿色'
    }
    
    /* 覆盖抽象方法 */
    employ() {
        console.log('交通灯颜色变为 ' + this.colorState + '，行人等待 & 车辆通行')
        const greenDom = document.getElementById('color-green')
        greenDom.click()
    }
    
    changeState(trafficLight) {
        trafficLight.setState(trafficLight.redState)
    }
}

/* 交通灯类-黄灯 */
class YellowState extends AbstractState {
    constructor() {
        super()
        this.colorState = '黄色'
    }
    
    /* 覆盖抽象方法 */
    employ() {
        console.log('交通灯颜色变为 ' + this.colorState + '，行人等待 & 车辆等待')
        const yellowDom = document.getElementById('color-yellow')
        yellowDom.click()
    }
    
    changeState(trafficLight) {
        trafficLight.setState(trafficLight.greenState)
    }
}

/* 交通灯类 */
class TrafficLight {
    constructor() {
        this.redState = new RedState()
        this.greenState = new GreenState()
        this.yellowState = new YellowState()
        
        this.state = this.greenState
    }
    
    /* 设置交通灯状态 */
    setState(state) {
        state.employ(this)
        this.state = state
    }
    
    changeState() {
        this.state.changeState(this)
    }
}


const trafficLight = new TrafficLight()

trafficLight.changeState()    // 输出： 交通灯颜色变为 红色，行人通行 & 车辆等待
trafficLight.changeState()    // 输出： 交通灯颜色变为 黄色，行人等待 & 车辆等待
trafficLight.changeState()    // 输出： 交通灯颜色变为 绿色，行人等待 & 车辆通行
