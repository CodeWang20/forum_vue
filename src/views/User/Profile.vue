<template>
<div class="container-profile">
    <div class="general-info">
        <div class="general-info-t">
            <div class="general-info-avatar">
                <img :src='require("@/assets/img/avatar.jpg")' alt="">
            </div>
            <div class="general-info-t-info">
                <div class="profile-name-info">
                    <div class="person-name">{{profile.nickname}}</div>
                </div>
            </div>
            <div class="introduction">
                <el-input type="text" @blur="updateIntroduction"  v-model="profile.introduction" maxlength="200"
                placeholder="这个人很懒，还没有添加简介" show-word-limit></el-input>
            </div>
        </div>
        <div class="general-info-b">
            <i class="general-info-b-split"></i>
        </div>
    </div>
    <div class="base-info">
        <div class="base-info-head">基本信息</div>
        <div class="base-info-content">
            <div v-if="display" class="base-info-content-show" 
                        :style="active" 
                        @mouseover="active = 'background-color: #f8f8f8'"
                        @mouseleave="active = ''">
                <ul>
                    <li>
                        <div class="content-show-l">用户昵称</div>
                        <div class="content-show-r">{{profile.nickname}}</div>
                    </li>
                    <li>
                        <div class="content-show-l">
                            <span>用</span>
                            <span>户</span>
                            <span>ID</span>
                        </div>
                        <div class="content-show-r">{{profile.id}}</div>
                    </li>
                    <li>
                        <div class="content-show-l">真实姓名</div>
                        <div class="content-show-r">{{profile.name}}</div>
                    </li>
                    <li>
                        <div class="content-show-l">
                            <span>性</span>
                            <span>别</span>
                        </div>
                        <div class="content-show-r">{{profile.sex}}</div>
                    </li>
                    <li>
                        <div class="content-show-l">
                            <span>邮</span>
                            <span>箱</span>
                        </div>
                        <div class="content-show-r">{{profile.email}}</div>
                    </li>
                    <li>
                        <div class="content-show-l">联系电话</div>
                        <div class="content-show-r">{{profile.telephone}}</div>
                    </li>
                </ul>
                <div @click="clickShow" class="edit-icon">
                    <i class="el-icon-edit"></i>
                    编辑
                </div>
            </div>
            <div v-if="!display" class="base-info-content-edit">
                <el-form class="base-info-edit-form" :model="profile" :rules="rules" ref="profile" label-width="100px">
                    <div class="base-info-edit-form-l">
                        <el-form-item label="用户昵称" prop="nickname">
                            <el-input v-model="profile.nickname"></el-input>
                        </el-form-item>
                        <el-form-item label="用户ID" prop="id">
                            <el-input disabled="true" v-model="profile.id"></el-input>
                        </el-form-item>
                        <el-form-item label="真实姓名" prop="name">
                            <el-input v-model="profile.name"></el-input>
                        </el-form-item>
                    </div>
                    <div class="base-info-edit-form-r">
                        <el-form-item label="性别" prop="sex">
                            <el-radio-group v-model="profile.sex">
                                <el-radio label="男" border>男</el-radio>
                                <el-radio label="女" border>女</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="邮箱" prop="email">
                            <el-input v-model="profile.email" placeholder="请填写您的邮箱地址"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话" prop="telephone">
                            <el-input v-model="profile.telephone"></el-input>
                        </el-form-item>
                    </div>
                    <div class="btn-group">
                        <el-form-item>
                            <el-button @click="clickShow" round>取消</el-button>
                            <el-button type="primary" @click="submitForm('profile')" round>保存</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {updateUserInfo, userProfile, introduction} from "@/network/user"
export default {
    data() {
        return {
            active: '',
            display: true,
            profile: {
                nickname: '',
                id: '',
                name: '',
                sex: '',
                email: '',
                telephone: '',
                introduction: '',
            },
            rules: {
                nickname: [
                    { required: true, message: '请输入您的昵称', trigger: 'blur' },
                    // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        updateIntroduction(){
            updateUserInfo({
                id: this.profile.id,
                introduction: this.profile.introduction
            }).then(res => {
            
        })
        },
        submitForm(profile) {
            this.$refs[profile].validate((valid) => {
            if (valid) {
                updateUserInfo(this.profile).then(res => {
                    if(res.code == 200){
                        this.display = true;
                    }
                })
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        clickShow(){
            this.display = !this.display;
        }
    },
    created(){
        userProfile(this.$store.getters.user.id).then(res => {
            if(res.code == 200){
                this.profile = res.data
            }
        })
    }
}
</script>

<style scoped lang="less">
.container-profile {
    width: 998px;
    -ms-flex-line-pack: justify;
    align-content: space-between;
}
.general-info{
    margin-bottom: 16px;
    background: #fff;
    .general-info-t{
        padding: 24px 0 40px 24px;
        position: relative;
        display: flex;
        box-shadow: 0 1px 8px 0 rgba(0,0,0,.04);
        .general-info-avatar{
            flex-shrink: 0;
            position: relative;
            width: 96px;
            height: 96px;
            margin-right: 16px;
            box-shadow: 0 0 10px 2px rgba(0,0,0,.06);
            border: 2px solid #fff;
            border-radius: 50%;
            cursor: pointer;
            img{
                width: 100%;
                height: 100%;
                display: block;
                border-radius: 50%;
            }
        }
        .general-info-t-info{
            display: flex;
            flex-direction: column;
            justify-content: center;
            .profile-name-info{
                margin-bottom: 16px;
                display: flex;
                align-items: center;
                .person-name{
                    color: #222226;
                    font-weight: 500;
                    line-height: 24px;
                    font-size: 20px;
                    margin-right: 16px;
                }
            }
        }
        .introduction{
            left: 120px;
            bottom: 10px;
            width: 80%;
            position: absolute;
            align-items: center;
            border-radius: 4px;
            padding: 0 8px;
            font-size: 14px;
        }
    }
    .general-info-b{
        display: flex;
        align-items: center;
        height: 48px;
        background: #fdfdfd;
        padding-left: 25px;
        font-size: 14px;
        .general-info-b-split{
            width: 1px;
            height: 16px;
            background: #ccccd8;
            margin: 0 32px;
        }
    }
}
.base-info{
    width: 998px;
    padding: 24px 16px 16px;
    background: #fff;
    margin-bottom: 16px;
    .base-info-head{
        font-size: 18px;
        line-height: 24px;
        font-weight: 600;
        color: #2e2e2e;
        margin-bottom: 16px;
    }
    .base-info-content{
        width: 100%;
    }
    .base-info-content-show{
        cursor: pointer;
        width: 100%;
        padding: 16px  0;
        position: relative;
        ul li{
            line-height: 24px;
            font-size: 14px;
            margin-bottom: 32px;
            display: flex;
            .content-show-l{
                width: 56px;
                text-align: justify;
                color: #555666;
                margin-right: 40px;
                flex-shrink: 0;
                padding-left: 16px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                box-sizing: content-box;
                justify-content: space-between;
            }
            .content-show-r{
                color: #222226;
                word-break: break-all;
            }
        }
        .edit-icon{
            position: absolute;
            top: 16px;
            right: 16px;
            align-items: center;
            color: #1989fa;
            font-size: 14px;
            i{
                display: inline-block;
                margin-right: 2px;
                width: 16px;
                height: 16px;
                background-size: 16px 16px;
            }
        }
    }
}
.base-info-content-edit{
    padding: 24px 40px;
    background: #f8f8f8;
    .base-info-edit-form{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .base-info-edit-form-l,  .base-info-edit-form-r{
            width: 50%;
        }
        .btn-group{
            width: 100%;
            text-align: center;
        }
    }
}
</style>