/**
 * 模块: 策略模式
 * 作者: SHERlocked93
 * 功能: 商品打折的例子
 */

/**
 * 计算总售价
 * @param discountType 折扣类型
 * @param price
 * @return {number}
 */
function priceCalculate(discountType, price) {
    if (discountType === 'minus100_30') {   // 满100减30
        return price - Math.floor(price / 100) * 30
    }
    if (discountType === 'minus200_80') {   // 满200减80
        return price - Math.floor(price / 200) * 80
    }
    if (discountType === 'percent80') {   // 8折
        return price * 0.8
    }
}

priceCalculate('minus100_30', 270)
priceCalculate('percent80', 250)

// 输出: 210
// 输出: 200
