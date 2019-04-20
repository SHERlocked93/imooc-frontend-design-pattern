/**
 * 模块: 发布-订阅模式
 * 作者: SHERlocked93
 * 功能: adadis 售货员例子 改进
 */

const adadisPub = {
    adadisBook: [],              // adadis售货员的小本本
    subShoe(phoneNumber) {       // 买家在小本本是登记号码
        if (!this.adadisBook.includes(phoneNumber))    // 判重
            this.adadisBook.push(phoneNumber)
    },
    unSubShoe(phoneNumber) {     // 取消订阅
        if (!this.adadisBook.includes(phoneNumber)) return
        const idx = this.adadisBook.indexOf(phoneNumber)
        this.adadisBook.splice(idx, 1)
    },
    emit() {                     // 售货员打电话通知小本本上的买家
        for (const phoneNumber of this.adadisBook) {
            console.log(phoneNumber + ' : 鞋子到货啦！')
        }
    }
}

adadisPub.subShoe('152xxx')    // 在小本本上留下号码
adadisPub.subShoe('152xxx')
adadisPub.subShoe('138yyy')
adadisPub.unSubShoe('138yyy')  // 取消订阅

adadisPub.emit()            // 打电话通知买家到货了

// 152xxx : 鞋子到货啦！
