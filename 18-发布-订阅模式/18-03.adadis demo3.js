/**
 * 模块: 发布-订阅模式
 * 作者: SHERlocked93
 * 功能: adadis 售货员例子 再次改进
 */

const adadisPub = {
    adadisBook: {},                    // adadis售货员的小本本
    subShoe(type, customer) {       // 买家在小本本是登记号码
        if (this.adadisBook[type]) {   // 如果小本本上已经有这个type
            if (!this.adadisBook[type].includes(customer))    // 判重
                this.adadisBook[type].push(customer)
        } else this.adadisBook[type] = [customer]
    },
    unSubShoe(type, customer) {     // 取消订阅
        if (!this.adadisBook[type] ||
          !this.adadisBook[type].includes(customer)) return
        const idx = this.adadisBook[type].indexOf(customer)
        this.adadisBook[type].splice(idx, 1)
    },
    notify(type) {                     // 售货员打电话通知小本本上的买家
        if (!this.adadisBook[type]) return
        this.adadisBook[type].forEach(customer =>
          customer.update(type)
        )
    }
}

const customer1 = {
    phoneNumber: '152xxx',
    update(type) {
        console.log(this.phoneNumber + ': 去商场看看' + type)
    }
}

const customer2 = {
    phoneNumber: '138yyy',
    update(type) {
        console.log(this.phoneNumber + ': 给表弟买双' + type)
    }
}

adadisPub.subShoe('运动鞋', customer1)    // 订阅运动鞋
adadisPub.subShoe('运动鞋', customer1)
adadisPub.subShoe('运动鞋', customer2)
adadisPub.subShoe('帆布鞋', customer1)    // 订阅帆布鞋

adadisPub.notify('运动鞋')    // 打电话通知买家运动鞋到货了

// 152xxx: 去商场看看运动鞋
// 138yyy: 给表弟买双运动鞋
