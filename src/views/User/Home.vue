<template>
<div id="profile-container">
    <el-tabs class="tabs-main" tab-position="left" type="card">
        <el-tab-pane class="tabs">
            <span slot="label"><i class="fa fa-id-card-o"></i> 个人资料</span>
            <profile-com></profile-com>
        </el-tab-pane>
        <el-tab-pane class="tabs">
            <span slot="label"><i class="el-icon-date"></i> 我的关注</span>
            我的关注
        </el-tab-pane>
        <el-tab-pane class="tabs">
            <span slot="label"><i class="el-icon-date"></i> 我的粉丝</span>
            我的粉丝
        </el-tab-pane>
        <el-tab-pane class="tabs">
            <span slot="label"><i class="el-icon-date"></i> 帐号设置</span>
            帐号设置
        </el-tab-pane>
    </el-tabs>
</div>
</template>

</style>

<script>
import ProfileCom from "./Profile"
import Profile from './Profile.vue'
export default {
    components:{
        ProfileCom
    }
}
</script>

<style scoped lang="less">
.tabs-main{
    height: 100%;
    width: 100%;
}
</style>