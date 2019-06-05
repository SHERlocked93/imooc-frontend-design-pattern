/**
 * 模块: 代理模式
 * 作者: SHERlocked93
 * 功能: 明星例子 demo2
 */

/* 明星 */
const SuperStar = {
    name: '小鲜肉',
    playAdvertisement(ad) {
        console.log(ad)
    }
}

/* 经纪人 */
const ProxyAssistant = {
    name: '经纪人张某',
    scheduleTime() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('小鲜鲜有空了')
                resolve()
            }, 2000)                        // 发现明星有空了
        })
    },
    playAdvertisement(reward, ad) {
        if (reward > 1000000) {             // 如果报酬超过100w
            console.log('没问题，我们小鲜鲜最喜欢拍广告了！')
            ProxyAssistant.scheduleTime()   // 安排上了
              .then(() => SuperStar.playAdvertisement(ad))
        } else
            console.log('没空，滚！')
    }
}

ProxyAssistant.playAdvertisement(10000, '纯蒸酸牛奶，味道纯纯，尽享纯蒸')
// 输出： 没空，滚

ProxyAssistant.playAdvertisement(1000001, '纯蒸酸牛奶，味道纯纯，尽享纯蒸')
// 输出： 没问题，我们小鲜鲜最喜欢拍广告了！
// 2秒后
// 输出： 小鲜鲜有空了
// 输出： 纯蒸酸牛奶，味道纯纯，尽享纯蒸
