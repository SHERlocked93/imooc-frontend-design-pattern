import * as Validates from './validates'

/**
 * 生成表格自定义校验函数
 * @param key validate的key
 * @param msg 校验信息
 * @return {Function}
 */
export const formValidateGene = (key, msg) => (rule, value, cb) => {
    if (Validates[key](value)) {
        cb()
    } else {
        cb(new Error(msg))
    }
}
