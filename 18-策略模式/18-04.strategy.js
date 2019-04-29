/**
 * 模块: 策略模式
 * 作者: SHERlocked93
 * 功能: 通用实现
 */

const StrategyMap = {}

function context(type, ...rest) {
    return StrategyMap[type] && StrategyMap[type](...rest)
}

StrategyMap.minus100_30 = price => price - Math.floor(price / 100) * 30

context('minus100_30', 270)

// 输出: 210
