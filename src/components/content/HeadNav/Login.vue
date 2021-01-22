<template>
    <el-dialog title="用户登录" :visible.sync="loginDialog" width="450px">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
    import {login} from "@/network/home"

    export default {
        name: "loginDialog",
        props:{
            loginDialogVisible: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                loginDialog:this.loginDialogVisible,
                loginForm: {
                    username: 'rainbowcat',
                    password: '123456'
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 8, max: 12, message: '长度在 8 到 12 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ]
                },
                userLoginInfo: {}

            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        login(this.loginForm ).then(res=> {
                            this.$store.commit("SET_TOKEN", res.headers['authorization'])
                            this.$store.commit("SET_USERINFO", res.data.data.user)
                        })
                    } else {
                        console.log('错误的请求参数!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        watch: {
            loginDialogVisible(val) {
                this.loginDialog = val;//②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
            },
            loginDialog(val){
                this.$emit("on-result-change",val);//③组件内对myResult变更后向外部发送事件通知
            },
        },

    }
</script>

<style lang="less" scoped>

</style>
