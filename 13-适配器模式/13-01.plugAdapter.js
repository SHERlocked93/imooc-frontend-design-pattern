/**
 * 模块: 适配器模式
 * 作者: SHERlocked93
 * 功能: 电源适配器例子
 */

var chinaPlug = {
    type: '中国插头',
    inPlug() {
        console.log('开始供电')
    }
}

var japanPlug = {
    type: '日本插头',
    japanInPlug() {
        console.log('开始供电')
    }
}

/* 日本插头电源适配器 */
function japanPlugAdapter(plug) {
    return {
        inPlug() {
            return plug.japanInPlug()
        }
    }
}

japanPlugAdapter(japanPlug).inPlug()
// 输出：开始供电
