/**
 * 模块: 建造者模式
 * 作者: SHERlocked93
 * 功能: 实战使用建造者模式 重构多参数的构造函数
 */

// 汽车建造者
class CarBuilder {
    constructor(engine, weight, height, color, tyre, name, type) {
        this.engine = engine
        this.weight = weight
        this.height = height
        this.color = color
        this.tyre = tyre
        this.name = name
        this.type = type
    }
    
    setCarProperty(key, value) {
        if (Object.getOwnPropertyNames(this).includes(key)) {
            this[key] = value
            return this
        }
        throw new Error(`Key error : ${ key } 不是本实例上的属性`)
    }
}

// const benchi = new CarBuilder('大马力发动机', '2ton', '2000mm', 'white', '大号轮胎', '奔驰', 'AMG')    // 原本使用方式

const benchi = new CarBuilder()
  .setCarProperty('engine', '大马力发动机')
  .setCarProperty('weight', '2ton')
  .setCarProperty('height', '2000mm')
  .setCarProperty('color', 'white')
  .setCarProperty('tyre', '大号轮胎')
  .setCarProperty('name', '奔驰')
  .setCarProperty('type', 'AMG')
