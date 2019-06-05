/**
 * 模块: 建造者模式
 * 作者: SHERlocked93
 * 功能: 通用实现 chain 方式
 */

// 建造者，汽车部件厂家
class CarBuilder {
    constructor(param) {
        this.param = param
    }
    
    /**
     * 生产部件，part1
     * @returns {CarBuilder}
     */
    buildPart1() {
        this.part1 = 'part1'
        return this
    }
    
    /**
     * 生产部件，part2
     * @returns {CarBuilder}
     */
    buildPart2() {
        this.part2 = 'part2'
        return this
    }
}

// 汽车装配，获得产品实例
const benchi1 = new CarBuilder('param')
    .buildPart1()
    .buildPart2()

