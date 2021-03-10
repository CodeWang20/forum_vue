<template>
<div id="profile-container">
    <el-tabs class="tabs-main" tab-position="left" type="card">
        <el-tab-pane class="tabs">
            <span slot="label"><i class="fa fa-file-text-o"></i> 文章管理</span>
            <blogs-com></blogs-com>
        </el-tab-pane>
        <el-tab-pane class="tabs">
            <span slot="label"><i class="fa fa-star"></i> 我的收藏</span>
            <collect-com></collect-com>
        </el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
import BlogsCom from"./Blogs"
import CollectCom from "./Collect"
export default {
    components:{
        BlogsCom, CollectCom
    }
}
</script>

<style scoped lang="less">
#page-container{
    margin: 40px auto 0;
}
.tabs-main{
    height: 100%;
    width: 100%;
}
</style>