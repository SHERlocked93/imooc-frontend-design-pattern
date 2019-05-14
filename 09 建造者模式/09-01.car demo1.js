/**
 * 模块: 建造者模式
 * 作者: SHERlocked93
 * 功能: car 组装汽车例子
 */

// 建造者，汽车部件厂家
function CarBuilder({ color = 'white', weight = 0 }) {
    this.color = color
    this.weight = weight
}

// 生产部件，轮胎
CarBuilder.prototype.buildTyre = function(type) {
    switch (type) {
        case 'small':
            this.tyreType = '小号轮胎'
            this.tyreIntro = '正在使用小号轮胎'
            break
        case 'normal':
            this.tyreType = '中号轮胎'
            this.tyreIntro = '正在使用中号轮胎'
            break
        case 'big':
            this.tyreType = '大号轮胎'
            this.tyreIntro = '正在使用大号轮胎'
            break
    }
}

// 生产部件，发动机
CarBuilder.prototype.buildEngine = function(type) {
    switch (type) {
        case 'small':
            this.engineType = '小马力发动机'
            this.engineIntro = '正在使用小马力发动机'
            break
        case 'normal':
            this.engineType = '中马力发动机'
            this.engineIntro = '正在使用中马力发动机'
            break
        case 'big':
            this.engineType = '大马力发动机'
            this.engineIntro = '正在使用大马力发动机'
            break
    }
}

/**
 * 奔驰厂家，负责最终汽车产品的装配
 */
function benChiDirector(tyre, engine, param) {
    var _car = new CarBuilder(param)
    _car.buildTyre(tyre)
    _car.buildEngine(engine)
    return _car
}

// 获得产品实例
var benchi1 = benChiDirector('small', 'big', { color: 'red', weight: '1600kg' })

console.log(benchi1)

// 输出：
// {
//   color: "red"
//   weight: "1600kg"
//   tyre: Tyre {tyreType: "小号轮胎", tyreIntro: "正在使用小号轮胎"}
//   engine: Engine {engineType: "大马力发动机", engineIntro: "正在使用大马力发动机"}
// }
