/**
 * 创建于 2019-07-06
 * 作者: SHERlocked93
 * 功能: 装饰者模式 js 方式
 */

/* 毛坯房 */
var originHouse = {
    getDesc() {
        console.log('毛坯房 ')
    }
}

/* 搬入家具 */
function furniture() {
    console.log('搬入家具 ')
}

/* 墙壁刷漆 */
function painting() {
    console.log('墙壁刷漆 ')
}

// 添加装饰 - 搬入家具
originHouse.getDesc = function() {
    var getDesc = originHouse.getDesc
    return function() {
        furniture()
        getDesc()
    }
}()

originHouse.getDesc()
// 输出： 毛坯房  搬入家具

// 添加装饰 - 墙壁刷漆
originHouse.getDesc = function() {
    var getDesc = originHouse.getDesc
    return function() {
        painting()
        getDesc()
    }
}()

originHouse.getDesc()
// 输出： 毛坯房  搬入家具  墙壁刷漆

