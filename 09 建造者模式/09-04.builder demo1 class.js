/**
 * 模块: 建造者模式
 * 作者: SHERlocked93
 * 功能: 通用实现 ES6 class方式
 */

// 建造者，部件生产
class ProductBuilder {
    constructor(param) {
        this.param = param
    }
    
    /**
     * 生产部件，part1
     */
    buildPart1() {
        // ... Part1 生产过程
        this.part1 = 'part1'
        
    }
    
    /**
     * 生产部件，part2
     */
    buildPart2() {
        // ... Part2 生产过程
        this.part2 = 'part2'
    }
}

/**
 * 指挥者，负责最终产品的装配
 */
class Director {
    constructor(param) {
        const _prod = new ProductBuilder(param)
        _prod.buildPart1()
        _prod.buildPart2()
        return _prod
    }
}

// 获得产品实例
const prod = new Director('param')

console.log(prod)
