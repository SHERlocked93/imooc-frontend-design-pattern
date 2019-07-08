/**
 * 创建于 2019-07-06
 * 作者: SHERlocked93
 * 功能: 装饰者模式 es6 方式
 */

/* 毛坯房 */
class OriginHouse {
    getDesc() {
        console.log('毛坯房')
    }
}

/* 搬入家具 */
class Furniture {
    constructor(house) {
        this.house = house
    }
    
    getDesc() {
        this.house.getDesc()
        console.log('搬入家具')
    }
}

/* 墙壁刷漆 */
class Painting {
    constructor(house) {
        this.house = house
    }
    
    getDesc() {
        this.house.getDesc()
        console.log('墙壁刷漆')
    }
}

let house = new OriginHouse()
house = new Furniture(house)
house = new Painting(house)

house.getDesc()
// 输出： 毛坯房  搬入家具  墙壁刷漆
