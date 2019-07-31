/**
 * 创建于 2019-07-30
 * 作者: SHERlocked93
 * 功能: 桥接模式 皮包
 */

/* 皮包 */
class Bag {
    constructor(type, color) {
        this.type = type
        this.color = color
    }
    
    /* 展示 */
    show() {
        console.log(
          this.color.show() + this.type.show()
        )
    }
}

/* 皮包类型 */
class Type {
    constructor(type) {
        this.typeType = type
    }
    
    show() {
        return this.typeType
    }
}

/* 皮包颜色 */
class Color {
    constructor(type) {
        this.colorType = type
    }
    
    show() {
        return this.colorType
    }
}


/* 抽象实例化 */
const redColor = new Color('红色')
const walletType = new Type('钱包')
const briefcaseType = new Type('公文包')

const bagA = new Bag(walletType, redColor)
bagA.show()

// 输出：红色钱包

const bagB = new Bag(briefcaseType, redColor)
bagB.show()

// 输出：红色公文包
