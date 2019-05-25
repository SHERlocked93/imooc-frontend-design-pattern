/**
 * 模块: 代理模式
 * 作者: SHERlocked93
 * 功能: 明星例子
 */

/* 明星 */
var SuperStar = {
    name: '小鲜肉',
    playAdvertisement: function(ad) {
        console.log(ad)
    }
}

/* 经纪人 */
var ProxyAssistant = {
    name: '经纪人张某',
    playAdvertisement: function(reward, ad) {
        if (reward > 1000000) {             // 如果报酬超过100w
            console.log('没问题，我们小鲜鲜最喜欢拍广告了！')
            SuperStar.playAdvertisement(ad)
        } else
            console.log('没空，滚！')
    }
}

ProxyAssistant.playAdvertisement(10000, '纯蒸酸牛奶，味道纯纯，尽享纯蒸')
// 输出： 没空，滚
