/**
 * 模块: 发布-订阅模式
 * 作者: SHERlocked93
 * 功能: adadis 售货员例子
 */

const adadisPub = {
    adadisBook: [],              // adadis售货员的小本本
    subShoe(phoneNumber) {       // 买家在小本本是登记号码
        this.adadisBook.push(phoneNumber)
    },
    notify() {                     // 售货员打电话通知小本本上的买家
        for (const customer of this.adadisBook) {
            customer.update()
        }
    }
}

const customer1 = {
    phoneNumber: '152xxx',
    update() {
        console.log(this.phoneNumber + ': 去商场看看')
    }
}

const customer2 = {
    phoneNumber: '138yyy',
    update() {
        console.log(this.phoneNumber + ': 给表弟买双')
    }
}

adadisPub.subShoe(customer1)  // 在小本本上留下号码
adadisPub.subShoe(customer2)

adadisPub.notify()            // 打电话通知买家到货了

// 152xxx: 去商场看看
// 138yyy: 给表弟买双
