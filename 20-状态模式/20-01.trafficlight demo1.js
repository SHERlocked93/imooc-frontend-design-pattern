/**
 * 创建于 2019-08-06
 * 作者: SHERlocked93
 * 功能: 红绿灯例子 反例
 */


var trafficLight = (function() {
    var state = '绿灯'        // 闭包缓存状态
    
    return {
        /* 设置交通灯状态 */
        setState: function(target) {
            if (target === '红灯') {
                state = '红灯'
                console.log('交通灯颜色变为 红色，行人通行 & 车辆等待')
            } else if (target === '黄灯') {
                state = '黄灯'
                console.log('交通灯颜色变为 黄色，行人等待 & 车辆等待')
            } else if (target === '绿灯') {
                state = '绿灯'
                console.log('交通灯颜色变为 绿色，行人等待 & 车辆通行')
            } else {
                console.error('交通灯还有这颜色？')
            }
        },
        
        /* 获取交通灯状态 */
        getState: function() {
            return state
        }
    }
})()

trafficLight.setState('红灯') // 输出： 交通灯颜色变为 红色，行人通行 & 车辆等待
trafficLight.setState('黄灯') // 输出： 交通灯颜色变为 黄色，行人等待 & 车辆等待
trafficLight.setState('绿灯') // 输出： 交通灯颜色变为 绿色，行人等待 & 车辆通行

trafficLight.setState('紫灯') // 输出： 交通灯还有这颜色？
