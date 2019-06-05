/**
 * 模块: 发布-订阅模式
 * 作者: SHERlocked93
 * 功能: es6 的 class 版发布订阅模式实现
 */

class Publisher {
    constructor() {
        this._subsMap = {}   // 存储订阅者
    }
    
    /**
     * 消息订阅
     * @param type 消息类型
     * @param cb 消息回调
     */
    subscribe(type, cb) {
        if (this._subsMap[type]) {
            if (!this._subsMap[type].includes(cb))
                this._subsMap[type].push(cb)
        } else this._subsMap[type] = [cb]
    }
    
    /**
     * 消息退订
     * @param type 消息类型
     * @param cb 消息回调
     */
    unsubscribe(type, cb) {
        if (!this._subsMap[type] ||
            !this._subsMap[type].includes(cb)) return
        const idx = this._subsMap[type].indexOf(cb)
        this._subsMap[type].splice(idx, 1)
    }
    
    /**
     * 消息发布
     * @param type 消息类型
     * @param payload 回调参数
     */
    notify(type, ...payload) {
        if (!this._subsMap[type]) return
        this._subsMap[type].forEach(cb => cb(...payload))
    }
}

const adadis = new Publisher()

adadis.subscribe('运动鞋', message => console.log('152xxx' + message))    // 订阅运动鞋
adadis.subscribe('运动鞋', message => console.log('138yyy' + message))
adadis.subscribe('帆布鞋', message => console.log('139zzz' + message))    // 订阅帆布鞋

adadis.notify('运动鞋', ' 运动鞋到货了 ~')   // 打电话通知买家运动鞋消息
adadis.notify('帆布鞋', ' 帆布鞋售罄了 T.T') // 打电话通知买家帆布鞋消息

// 输出:  152xxx 运动鞋到货了 ~
// 输出:  138yyy 运动鞋到货了 ~
// 输出:  139zzz 帆布鞋售罄了 T.T
