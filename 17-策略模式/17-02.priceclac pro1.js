/**
 * 模块: 策略模式
 * 作者: SHERlocked93
 * 功能: 商品打折的例子 改进
 */

/* 售价计算方式 */
const DiscountMap = {
    minus100_30: function(price) {      // 满100减30
        return price - Math.floor(price / 100) * 30
    },
    minus200_80: function(price) {      // 满200减80
        return price - Math.floor(price / 200) * 80
    },
    percent80: function(price) {        // 8折
        return price * 0.8
    }
}

/**
 * 计算总售价
 * @param discountType 折扣类型
 * @param price
 * @return {number}
 */
function priceCalculate(discountType, price) {
    return DiscountMap[discountType] && DiscountMap[discountType](price)
}

priceCalculate('minus100_30', 270)
priceCalculate('percent80', 250)

// 输出: 210
// 输出: 200
