<template>
    <el-table :data="tableData">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="文件名"></el-table-column>
        <el-table-column prop="sizeKb" label="文件大小(KB)"
                         :formatter='strategyContext("bitToKB", "sizeKb")'>
        </el-table-column>
        <el-table-column prop="sizeMb" label="附件大小(MB)"
                         :formatter='strategyContext("bitToMB", "sizeMb")'>
        </el-table-column>
    </el-table>
</template>

<script type='text/javascript'>
    import strategyContext from './strategyContext.js'
    
    export default {
        name: 'ElTableDemo',
        data() {
            return {
                strategyContext,
                tableData: [
                    { date: '2019-05-02', name: '文件1', sizeKb: 1234, sizeMb: 1234426 },
                    { date: '2019-05-04', name: '文件2', sizeKb: 4213, sizeMb: 8636152 }]
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
