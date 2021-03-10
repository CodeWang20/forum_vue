<template>
<div class="container">
    <el-row class="header">
        <div class="logo"><h2>XX论坛</h2></div>
        <div class="nav">
            <el-menu mode="horizontal">
                <el-menu-item index="1">
                    <router-link v-if="$store.getters.username != null" :to="'/' + $store.getters.username">首页</router-link>
                    <router-link v-else to="/">首页</router-link>
                </el-menu-item>
                <el-menu-item index="2"><router-link to="/home">焦点</router-link></el-menu-item>
                <el-menu-item index="3"><router-link to="/about">关于</router-link></el-menu-item>
            </el-menu>
        </div>
        <div class="search hidden-md-and-down">
            <el-input class="key-words" placeholder="请输入内容" v-model="input" clearable></el-input>
            <el-button type="primary" plain>search</el-button>
        </div>
        <div  class="toolbar-right hidden-xs-only">
            <div class="content">
                <!--用户已登录-->
                <div v-if="$store.getters.user != null">
                    <div class="info">
                        <el-menu mode="horizontal">
                            <el-submenu index="1">
                                <template slot="title"><el-avatar class="avatar" icon="el-icon-user-solid" :size="48" :src='require("@/assets/img/avatar.jpg")' /></template>
                                <el-menu-item  @click="$router.replace(`/${$store.getters.username}/home`)">个人中心</el-menu-item>
                                <el-menu-item  @click="$router.replace(`/${$store.getters.username}/article`)">内容管理</el-menu-item>
                                <el-menu-item @click="logoutFrame">退出</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </div>
                    <div class="toolbar-wrap">
                        <div class="toolbar-btn">
                            <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                            </el-tooltip>
                            <el-link :underline="false">收藏</el-link>
                            <el-link :underline="false">消息</el-link>
                        </div>
                        <el-button @click="$router.replace(`/${$store.getters.username}/blogs/edit`)"  type="danger" icon="el-icon-edit" round>创作</el-button>
                    </div>
                </div>
                <!--用户未登录-->
                <div class="login" v-else>
                    <div class="btn">
                        <el-button type="text" @click="loginDialogVisible = !loginDialogVisible">登录</el-button>
                        <el-link :underline="false">注册</el-link>
                        <login-dialog :loginDialogVisible="loginDialogVisible" ></login-dialog>
                    </div>
                </div>
            </div>
        </div>
    </el-row>
</div>
</template>

<script>
    import LoginDialog from "./Login"

    export default {
    data() {
        return {
            input: '',
            loginDialogVisible: false,
            result: '',
        };
    },
    methods:{
        logoutFrame() {
            this.$confirm('此操作将退出本次登录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                this.$store.commit("DELETE_USERINFO");
                this.$store.commit("DELETE_TOKEN")
                this.$message({
                    type: 'success',
                    message: '退出成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消退出！'
                });
            });
        }
    },
    components:{
        LoginDialog
    }
}
</script>
<style lang="less" scoped>
@nav-header-size: 16px;
.default-font(){
    font-size: @nav-header-size;
}
.vertical-align{
    display: flex;
    align-self: center;
}
.position-left(@left){
    position: absolute;
    left: @left;
}
.position-right(@right){
    position: absolute;
    right: @right;
}



.container{
    width: 100%;
    height: 60px;
    background: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
    .default-font
}
.header{
    height: 100%;
    text-align: center;
    position: relative;
    font-weight: 400;
    display: flex;
    .logo{
        .position-left(0);
        line-height: 60px;
        width: 100px;

    }
    .search{
        .position-left(500px);
        width: 300px;
        height: 40px;
        .vertical-align;
        .el-input{
            width: 220px;
            line-height: 40px;
        }
        .el-button{
            width: 80px;
            height: 100%;
            padding: 0;
            margin: 0;
            font-size: 16px;
            text-align: center;
            line-height: 40px;
        }
    }
    .nav{
        .position-left(110px);
        width: 300px;
        .el-menu-item{
            display: block;
        }
    }
}
.toolbar-right{
    width: 300px;
    height: 100%;
    .position-right(0);
    .content{
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        .info{
            width: 60px;
            .position-left(0);
            .avatar{
                cursor: pointer;
                top: 2px;
                .position-left(0)
            }
        }
        .toolbar-wrap{
            width: 220px;
            height: 50px;
            line-height: 60px;
            .position-right(0);
            .vertical-align;
            .toolbar-btn{
                height: 30px;
                .vertical-align;
                .el-link{
                    .default-font;
                    width: 50px;
                }
            }
            .el-button{
                .default-font;
                .vertical-align;
                position: absolute;
                right: 0;
                width: 100px;
                height: 40px;
                letter-spacing: 2px;
                padding: 10px 15px
            }
        }
    }
}

.login{
    width: 140px;
    height: 100%;
    display: flex;
    .btn{
        width: 140px;
        height: 50px;
        text-align: center;
        margin-left: 20px;
        .vertical-align;
        .el-link, .el-button{
            margin: 0;
            padding: 0;
            width: 50px;
            font-size: 16px;
        }
    }
}
.el-menu-item{
        .default-font;
    }
    .el-menu.el-menu--horizontal {
    border: 0;
}
</style>
