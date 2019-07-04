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
    
    setPropertyFuncChain() {
        Object.getOwnPropertyNames(this)
          .forEach(key => {
              const funcName = 'set' + key.replace(/^\w/g, str => str.toUpperCase())
              this[funcName] = value => {
                  this[key] = value
                  return this
              }
          })
        return this
    }
}

const benchi = new CarBuilder().setPropertyFuncChain()
  .setEngine('大马力发动机')
  .setWeight('2ton')
  .setHeight('2000mm')
  .setColor('white')
  .setTyre('大号轮胎')
  .setName('奔驰')
  .setType('AMG')
