/**
 * 模块: 发布-订阅模式
 * 作者: SHERlocked93
 * 功能: IIFE 版发布订阅模式实现
 */

const Publisher = (function() {
    const _subsMap = {}   // 存储订阅者
    return {
        /**
         * 消息订阅
         * @param type 消息类型
         * @param cb 消息回调
         */
        subscribe(type, cb) {
            if (_subsMap[type]) {
                if (!_subsMap[type].includes(cb))
                    _subsMap[type].push(cb)
            } else _subsMap[type] = [cb]
        },
        /**
         * 消息退订
         * @param type 消息类型
         * @param cb 消息回调
         */
        unsubscribe(type, cb) {
            if (!_subsMap[type] ||
                !_subsMap[type].includes(cb)) return
            const idx = _subsMap[type].indexOf(cb)
            _subsMap[type].splice(idx, 1)
        },
        /**
         * 消息发布
         * @param type 消息类型
         * @param payload 回调参数
         */
        emit(type, ...payload) {
            if (!_subsMap[type]) return
            _subsMap[type].forEach(cb => cb(...payload))
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
