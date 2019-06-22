/**
 * 模块: 享元模式
 * 作者: SHERlocked93
 * 功能: 考驾照例子
 */


var candidateNum = 10   // 考生数量
var examCarNum = 0      // 驾考车的数量

/**
 * 驾考车构造函数
 * @constructor
 */
function ExamCar(carType) {
    examCarNum++
    this.carId = examCarNum
    this.carType = carType ? '手动档' : '自动档'
}

ExamCar.prototype.examine = function(candidateId) {
    console.log('考生- ' + candidateId + ' 在' + this.carType + '驾考车- ' + this.carId + ' 上考试')
}

for (var candidateId = 1; candidateId <= candidateNum; candidateId++) {
    var examCar = new ExamCar(candidateId % 2)
    examCar.examine(candidateId)
}

console.log('驾考车总数- ' + examCarNum)
// 输出: 驾考车总数 - 10
