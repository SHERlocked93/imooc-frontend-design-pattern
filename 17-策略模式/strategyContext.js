/**
 * 作者: SHERlocked93
 * 功能: 过滤器策略
 */

export const StrategyMap = {
    /**
     * 功能： 将文件大小（bit）转化为 KB
     * @param val
     * @returns {string}
     */
    bitToKB: val => {
        const num = Number(val)
        return isNaN(num) ? val : (num / 1024).toFixed(0) + 'KB'
    },
    /**
     * 功能： 将文件大小（bit）转化为 MB
     * @param val
     * @returns {string}
     */
    bitToMB: val => {
        const num = Number(val)
        return isNaN(num) ? val : (num / 1024 / 1024).toFixed(1) + 'MB'
    }
}

/**
 * 生成el表单 formatter
 * @param type strategy
 * @param rowKey
 */
const strategyContext = (type, rowKey) => (row, column, cellValue, index) => StrategyMap[type](row[rowKey])

export default strategyContext

