/**
 * 模块: 中介者模式
 * 作者: SHERlocked93
 * 功能: 相亲例子
 */

const PersonFunc = {
    /**
     * 注册对方
     * @param enemy
     */
    registEnemy(...enemy) {
        this.enemyList.push(...enemy)
    },
    
    /**
     * 检查所有考虑对象是否满足要求
     */
    checkAllPurpose() {
        this.enemyList.forEach(enemy => enemy.info && this.checkPurpose(enemy))
    },
    
    /**
     * 检查对方是否满足自己的要求，并发信息
     * @param enemy
     */
    checkPurpose(enemy) {
        const result = Object.keys(this.target)    // 是否满足自己的要求
          .every(key => {
              const [low, high] = this.target[key]
              return low <= enemy.info[key] && enemy.info[key] <= high
          })
        enemy.receiveResult(result, this, enemy)   // 通知对方
    },
    
    /**
     * 接受到对方的信息
     * @param result
     * @param me
     * @param they
     */
    receiveResult(result, they, me) {
        result
          ? console.log(`${ they.name }：我觉得合适~ \t（我的要求 ${ me.name } 已经满足）`)
          : console.log(`${ they.name }：你是个好人! \t（我的要求 ${ me.name } 不能满足！）`)
    }
}

/* 男方 */
const ZhangXiaoShuai = {
    ...PersonFunc,
    name: '张小帅',
    info: { age: 25, height: 171, salary: 5000 },
    target: { age: [23, 27] },
    enemyList: []
}

/* 男方家长 */
const ZhangXiaoShuaiParent = {
    ...PersonFunc,
    name: '张小帅家长',
    info: null,
    target: { height: [160, 167] },
    enemyList: []
}

/* 女方 */
const LiXiaoMei = {
    ...PersonFunc,
    name: '李小美',
    info: { age: 23, height: 160 },
    target: { age: [25, 27] },
    enemyList: []
}

/* 女方家长 */
const LiXiaoMeiParent = {
    ...PersonFunc,
    name: '李小美家长',
    info: null,
    target: { salary: [10000, 20000] },
    enemyList: []
}

/* 注册 */
ZhangXiaoShuai.registEnemy(LiXiaoMei, LiXiaoMeiParent)
LiXiaoMei.registEnemy(ZhangXiaoShuai, ZhangXiaoShuaiParent)
ZhangXiaoShuaiParent.registEnemy(LiXiaoMei, LiXiaoMeiParent)
LiXiaoMeiParent.registEnemy(ZhangXiaoShuai, ZhangXiaoShuaiParent)

/* 检查对方是否符合要求 */
ZhangXiaoShuai.checkAllPurpose()
LiXiaoMei.checkAllPurpose()
ZhangXiaoShuaiParent.checkAllPurpose()
LiXiaoMeiParent.checkAllPurpose()

// 张小帅：我觉得合适~ 	（我的要求 李小美 已经满足）
// 李小美：我觉得合适~ 	（我的要求 张小帅 已经满足）
// 张小帅家长：我觉得合适~ 	（我的要求 李小美 已经满足）
// 李小美家长：你是个好人! 	（我的要求 张小帅 不能满足！）
