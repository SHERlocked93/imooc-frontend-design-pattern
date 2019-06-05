/**
 * 模块: 策略模式
 * 作者: SHERlocked93
 * 功能: 商品打折的例子 改进
 */

/**
 * 计算总售价
 */
const PriceCalculate = (function() {
    /* 售价计算方式 */
    const DiscountMap = {
        minus100_30: price => price - Math.floor(price / 100) * 30,  // 满100减30
        minus200_80: price => price - Math.floor(price / 200) * 80,  // 满200减80
        percent80: price => price * 0.8                              // 8折
    }
    
    return {
        priceClac: function(discountType, price) {
            return DiscountMap[discountType] && DiscountMap[discountType](price)
        },
        addStrategy: function(discountType, fn) {       // 添加新的策略
            if (DiscountMap[discountType]) return       // 如果已有这个策略
            DiscountMap[discountType] = fn
        }
    }
})()

PriceCalculate.priceClac('minus100_30', 270)

PriceCalculate.addStrategy('minus150_40', price => price - Math.floor(price / 150) * 40
)
PriceCalculate.priceClac('minus150_40', 270)

// 输出: 210
// 输出: 230
