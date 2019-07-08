/**
 * 创建于 2019-07-06
 * 作者: SHERlocked93
 * 功能: 装饰者模式 es5 方式
 */

/* 毛坯房 */
function OriginHouse() {}

OriginHouse.prototype.getDesc = function() {
    console.log('毛坯房')
}

/* 搬入家具 */
function Furniture(house) {
    this.house = house
}

Furniture.prototype.getDesc = function() {
    this.house.getDesc()
    console.log('搬入家具')
}

/* 墙壁刷漆 */
function Painting(house) {
    this.house = house
}

Painting.prototype.getDesc = function() {
    this.house.getDesc()
    console.log('墙壁刷漆')
}

var house = new OriginHouse()
house = new Furniture(house)
house = new Painting(house)

house.getDesc()
// 输出： 毛坯房  搬入家具  墙壁刷漆
