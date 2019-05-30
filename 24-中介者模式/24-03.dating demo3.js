/**
 * 模块: 中介者模式
 * 作者: SHERlocked93
 * 功能: 相亲例子 引入媒人
 */

/* 男方 */
const ZhangXiaoShuai = {
    name: '张小帅',
    familyType: '男方',
    info: { age: 25, height: 171, salary: 5000 },
    target: { age: [23, 27] }
}

/* 男方家长 */
const ZhangXiaoShuaiParent = {
    name: '张小帅家长',
    familyType: '男方',
    info: null,
    target: { height: [160, 167] }
}

/* 女方 */
const LiXiaoMei = {
    name: '李小美',
    familyType: '女方',
    info: { age: 23, height: 160 },
    target: { age: [25, 27] }
}

/* 女方家长 */
const LiXiaoMeiParent = {
    name: '李小美家长',
    familyType: '女方',
    info: null,
    target: { salary: [10000, 20000] }
}

/* 媒人 */
const MatchMaker = {
    matchBook: {},
    
    /**
     * 注册各方
     * @param personList
     */
    registPersons(...personList) {
        personList.forEach(person => {
            if (this.matchBook[person.familyType]) {
                this.matchBook[person.familyType].push(person)
            } else this.matchBook[person.familyType] = [person]
        })
    },
    
    /**
     * 检查对方家庭的孩子对象是否满足要求
     */
    checkAllPurpose() {
        Object.keys(this.matchBook)
          .forEach((familyType, idx, matchList) =>
            matchList
              .filter(match => match !== familyType)    // 过滤出familyType的成员，比如「赵小美家」
              .forEach(enemyFamily => this.matchBook[enemyFamily]   // 对「赵小美家」的成员们检查是否符合自己要求
                .forEach(enemy => this.matchBook[familyType]
                  .forEach(person =>
                    enemy.info && this.checkPurpose(person, enemy)  // 逐一检查对方成员是否满足自己要求
                  )
                ))
          )
    },
    
    /**
     * 检查对方是否满足自己的要求，并发信息
     * @param enemy
     * @param person
     */
    checkPurpose(person, enemy) {
        const result = Object.keys(person.target)    // 是否满足自己的要求
          .every(key => {
              const [low, high] = person.target[key]
              return low <= enemy.info[key] && enemy.info[key] <= high
          })
        this.receiveResult(result, person, enemy)    // 通知对方
    },
    
    /**
     * 通知对方信息
     * @param result
     * @param person
     * @param enemy
     */
    receiveResult(result, person, enemy) {
        result
          ? console.log(`${ person.name } 觉得合适~ \t（${ enemy.name } 已经满足要求）`)
          : console.log(`${ person.name } 觉得不合适! \t（${ enemy.name } 不能满足要求！）`)
    }
}


/* 注册 */
MatchMaker.registPersons(ZhangXiaoShuai, ZhangXiaoShuaiParent, LiXiaoMei, LiXiaoMeiParent)

MatchMaker.checkAllPurpose()

// 输出: 小帅 觉得合适~ 	    （李小美 已经满足要求）
// 输出: 张小帅家长 觉得合适~ 	（李小美 已经满足要求）
// 输出: 李小美 觉得合适~ 	    （张小帅 已经满足要求）
// 输出: 李小美家长 觉得不合适! 	（张小帅 不能满足要求！）
