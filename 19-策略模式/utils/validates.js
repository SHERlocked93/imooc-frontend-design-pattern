/**
 * 创建于 2019-06-24
 * 作者: SHERlocked93
 * 功能: 自定义表单验证
 */


/**
 * 姓名校验 由2-10位汉字组成
 * @param str
 * @returns {boolean}
 */
export function validateUsername(str) {
    const reg = /^[\u4e00-\u9fa5]{2,10}$/
    return reg.test(str)
}

/**
 * 手机号校验 由以1开头的11位数字组成
 * @param str
 * @returns {boolean}
 */
export function validateMobile(str) {
    const reg = /^1\d{10}$/
    return reg.test(str)
}

/**
 * 邮箱校验
 * @param str
 * @returns {boolean}
 */
export function validateEmail(str) {
    const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    return reg.test(str)
}
