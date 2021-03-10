<template>
<div>
    <div v-if="$store.state.userInfo == null">
        请先登录！
    </div>
    <div v-else class="block">
        <el-timeline>
            <el-timeline-item v-for="(item, index) in blogList" :key="index" :timestamp="item.created">
                <el-card class="main-card">
                    <div class="head">
                        <a class="title" @click="$router.push( `/${item.userId}/detail/${item.id}`)">{{item.title}}</a>
                        <!-- <el-tag type="warning" effect="plain" size="mini" hit="true">{{item.}}</el-tag> -->
                        <div class="btn">
                            <el-tooltip effect="light" content="编辑" placement="top-start">
                                <el-button class="btn-edit" @click="$router.replace(`/${$store.getters.username}/blogs/edit/${item.id}`)" type="primary" icon="el-icon-edit" circle plain size="mini"></el-button>
                            </el-tooltip>
                            <el-tooltip effect="light" content="删除" placement="top-start">
                                <el-button @click="Delete(item.id)" class="btn-delete" type="danger" icon="el-icon-delete" circle plain size="mini"></el-button>
                            </el-tooltip>
                        </div>
                    </div>
                    <p>{{item.summary}}</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    
        <div class="pagination">
            <el-pagination 
                :current-page="currentPage"
                :page-size="pageSize"
                :total="total"
                background layout="total, prev,  pager, next, jumper"
                @current-change = page>
            </el-pagination>
        </div>
    </div>
</div>
</template>

<script>
import {selfBlogs, deleteBlog} from "@/network/blogs"
export default {
    data(){
        return{
            blogList: [],
            currentPage: 1,
            pageSize: 5,
            total:  0,
            totalPage: 0,
        }
    },
    methods:{
        Delete(id){
            this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                deleteBlog(id).then(res => {
                this.page(1)
            })
            // this.$message({
            //     type: 'success',
            //     message: '删除成功!'
            // });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
        },

        page(currentPage){
            selfBlogs({
                userId: this.$store.state.userInfo.id,
                currentPage: currentPage,
                pageSize: this.pageSize
            }).then(res => {
                this.blogList = res.data.blogs
                this.currentPage = res.data.currentPage
                this.total = res.data.totalCount
                this.totalPage = res.data.totalPage
                this.pageSize = res.data.pageSize
            })
        }
    },
    created(){
        this.page(1)
    }
}
</script>

<style scoped lang="less">
.block{
    width: 80%;
    margin: 5px 0 0 20px;
    .main-card{
        border-radius: 20px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    .head{
        height: 30px;
        line-height: 30px;
        position: relative;
        .title{
            font-size: 18px;
            color: #222226;
            font-weight: 600;
        }
        .btn{
            top: 0;
            right: 0;
            display: flex;
            position: absolute;
        }
    }

    .pagination{
        text-align: center;
    }
    p{
        margin-top: 15px;
    }
}
</style>