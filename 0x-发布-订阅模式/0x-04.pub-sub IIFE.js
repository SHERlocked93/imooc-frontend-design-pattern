/**
 * 作者: SHERlocked93
 * 功能: IIFE 版发布订阅模式实现
 */

const Publisher = (function() {
    const SubsMap = {}   // 存储订阅者
    return {
        /**
         * 消息订阅
         * @param type 消息类型
         * @param cb 消息回调
         */
        subscribe(type, cb) {
            if (SubsMap[type]) {
                if (!SubsMap[type].includes(cb))
                    SubsMap[type].push(cb)
            } else SubsMap[type] = [cb]
        },
        /**
         * 消息退订
         * @param type 消息类型
         * @param cb 消息回调
         */
        unsubscribe(type, cb) {
            if (!SubsMap[type] ||
                !SubsMap[type].includes(cb)) return
            const idx = SubsMap[type].indexOf(cb)
            SubsMap[type].splice(idx, 1)
        },
        /**
         * 消息发布
         * @param type 消息类型
         * @param payload 回调参数
         */
        emit(type, ...payload) {
            if (!SubsMap[type]) return
            SubsMap[type].forEach(cb => cb(...payload))
        }
    }
})()

Publisher.subscribe('运动鞋', message => console.log('152xxx' + message))    // 订阅运动鞋
Publisher.subscribe('运动鞋', message => console.log('138yyy' + message))
Publisher.subscribe('帆布鞋', message => console.log('139zzz' + message))    // 订阅帆布鞋

Publisher.emit('运动鞋', ' 运动鞋到货了 ~')   // 打电话通知买家运动鞋消息
Publisher.emit('帆布鞋', ' 帆布鞋售罄了 T.T') // 打电话通知买家帆布鞋消息

// 输出:  152xxx 运动鞋到货了 ~
// 输出:  138yyy 运动鞋到货了 ~
// 输出:  139zzz 帆布鞋售罄了 T.T
