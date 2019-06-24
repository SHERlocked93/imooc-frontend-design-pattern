<template>
    <el-form ref="ruleForm"
             label-width="100px"
             class="demo-ruleForm"
             :rules="rules"
             :model="ruleForm">
        
        <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        
        <el-form-item label="手机号" prop="mobile">
            <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
    </el-form>
</template>

<script type='text/javascript'>
    import * as Utils from '../utils'
    
    export default {
        name: 'ElTableDemo',
        data() {
            return {
                ruleForm: { pass: '', checkPass: '', age: '' },
                rules: {
                    username: [{
                        validator: Utils.formValidateGene('validateUsername', '姓名由2-10位汉字组成'),
                        trigger: 'blur'
                    }],
                    mobile: [{
                        validator: Utils.formValidateGene('validateMobile', '手机号由以1开头的11位数字组成'),
                        trigger: 'blur'
                    }],
                    email: [{
                        validator: Utils.formValidateGene('validateEmail', '不是正确的邮箱格式'),
                        trigger: 'blur'
                    }]
                }
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    /* 不能为空，否则codesandbox报错 */
</style>
