/**
 * 模块: 代理模式
 * 作者: SHERlocked93
 * 功能: 明星例子 demo4 使用 Obeject.defineProperty
 */

/* 明星 */
const SuperStar = {
    name: '小鲜肉',
    scheduleFlagActually: false,            // 档期标识位，false-没空（默认值），true-有空
    playAdvertisement(ad) {
        console.log(ad)
    }
}

/* 经纪人 */
const ProxyAssistant = {
    name: '经纪人张某',
    scheduleTime(ad) {
        Object.defineProperty(SuperStar, 'scheduleFlag', { 	// 在这里监听 scheduleFlag 值的变化
            get() {
                return SuperStar.scheduleFlagActually
            },
            set(val) {
                if (SuperStar.scheduleFlagActually === false &&
                  val === true) {                    		// 小鲜肉现在有空了
                    SuperStar.scheduleFlagActually = true
                    SuperStar.playAdvertisement(ad)         // 安排上了
                }
            }
        })
        
        setTimeout(() => {
            console.log('小鲜鲜有空了')
            SuperStar.scheduleFlag = true
        }, 2000)                            // 明星有空了
    },
    playAdvertisement(reward, ad) {
        if (reward > 1000000) {             // 如果报酬超过100w
            console.log('没问题，我们小鲜鲜最喜欢拍广告了！')
            ProxyAssistant.scheduleTime(ad)
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
