<template>
<div class="block">
    <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
            <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
        </el-timeline-item>
    </el-timeline>
    
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
</div>
</template>

<script>
export default {
    data(){
        return{
            blogList: [],
            currentPage: 1,
            total:  0,
            pageSize: 10,
        }
    },
    methods:{
        
    }
}
</script>

<style scoped lang="less">
.block{
    max-width: 1400px;
    margin: 0 auto;
}
</style>