/**
 * 模块: 发布-订阅模式
 * 作者: SHERlocked93
 * 功能: adadis 售货员例子 再次改进
 */

const adadisPub = {
    adadisBook: {},                    // adadis售货员的小本本
    subShoe(type, phoneNumber) {       // 买家在小本本是登记号码
        if (this.adadisBook[type]) {   // 如果小本本上已经有这个type
            if (!this.adadisBook[type].includes(phoneNumber))    // 判重
                this.adadisBook[type].push(phoneNumber)
        } else this.adadisBook[type] = [phoneNumber]
    },
    unSubShoe(type, phoneNumber) {     // 取消订阅
        if (!this.adadisBook[type] ||
            !this.adadisBook[type].includes(phoneNumber)) return
        const idx = this.adadisBook[type].indexOf(phoneNumber)
        this.adadisBook[type].splice(idx, 1)
    },
    emit(type) {                     // 售货员打电话通知小本本上的买家
        if (!this.adadisBook[type]) return
        this.adadisBook[type].forEach(phoneNumber =>
            console.log(phoneNumber + ' : 鞋子到货啦！')
        )
    }
}

adadisPub.subShoe('运动鞋', '152xxx')    // 订阅运动鞋
adadisPub.subShoe('运动鞋', '152xxx')
adadisPub.subShoe('运动鞋', '138yyy')
adadisPub.subShoe('帆布鞋', '139zzz')    // 订阅帆布鞋

adadisPub.emit('运动鞋')    // 打电话通知买家运动鞋到货了

// 输出:  152xxx 鞋子到货啦！
// 输出:  138yyy 鞋子到货啦！
