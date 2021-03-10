<template>
<div>
    <div class="blog">
        <div class="blog-aside">
            <div class="author">
                
            </div>
        </div>

        <div class=detail>

            <div class="head-box">
                <div class="title-box">
                    <h1>{{article.title}}</h1>
                </div>
                <div class=" info-box">
                    <div class="bar-top">
                        <div class="bar-content">
                            <el-tooltip effect="light" :content="'最后更新时间：' + article.lastUpdate" placement="top-start">
                                <span>发表时间：{{article.created}}</span>
                            </el-tooltip>
                            <span>
                                <a v-if="isCollected == false" @click="addCollect">
                                    <img class="icon" :size="20"  :src='require("@/assets/img/collect.png")'>
                                </a>
                                <a v-if="isCollected == true" @click="cancelCollect">
                                    <img  class="icon" :size="20"  :src='require("@/assets/img/collected.png")'>
                                </a>
                                {{article.collect}}
                            </span>
                            <span><img class="icon" :size="20"  :src='require("@/assets/img/views.png")'>{{article.nowView}}</span>
                        </div>

                        <div class="blog-plates-box">
                            <span>分类板块：先弄一个测试板块</span>
                        </div>
                    </div>
                </div>
            </div>

            <el-divider><i class="el-icon-mobile-phone"></i></el-divider>

            <div class="content">
                <div class="markdown-body" v-html="article.content"></div>
            </div>

            <el-divider><i class="el-icon-mobile-phone"></i></el-divider>

        </div>
    </div>

    <el-backtop target="" :bottom="60">
        <div class="btn-top">
                Top
            </div>
    </el-backtop>
</div>
</template>

<script>
import {
    getArticleById,
    isCollected,
    getCollections,
    collectArticles,
    cancelCollectArticles
} from "@/network/blogs"
import "github-markdown-css"

export default {
    data(){
        return{
            id: null,
            article: null,
            isCollected:  null,
        }
    },
    methods: {
        addCollect(){
            collectArticles({
                userId: this.$store.state.userInfo.id,
                articleId: this.article.id
            }).then(res => {
                this.isCollected = true
                this.article.collect += 1
            })
        },
        cancelCollect(){
            cancelCollectArticles({
                userId: this.$store.state.userInfo.id,
                articleId: this.article.id
            }).then(res => {
                this.isCollected = false
                this.article.collect -= 1
            })
        }
    },
    created(){
        let _this = this
        _this.id = _this.$route.params.id
        getArticleById(_this.id).then(res => {
            let MarkdownIt = require("markdown-it")
            let md = new MarkdownIt()
            res.data.content = md.render(res.data.content)
            _this.article = res.data
            /**
             * 查询用户是否收藏当前文章
             */
            isCollected({
                userId: this.$store.state.userInfo.id,
                articleId:  _this.article.id
                }).then(res => {
                    if(res.code == 404){
                        this.isCollected = false
                    }
                    if(res.code == 200){
                        this.isCollected = true
                    }
            })
        })
        
    }
}
</script>

<style lang="less" scoped>
@font-color: #9b9393;
@media(min-width:1200px){
    .blog{
        width: 1460px;
    }
}
@media(min-width:760px) and (max-width:1200px){
    .blog{
        width: 100%;
    }
}
.blog{
    margin: 0 auto;
    padding: 20px 0;
    min-height: 800px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    display: flex;
}
.blog-aside{
    width: 300px;
    margin-right: 10px;
    background-color: #fff;
}
.detail{
    width: 90%;
    margin: 0 auto;
    padding: 10 0 80px 0;
    background-color: #fff;
}
.head-box{
    height: 110px;
    margin: 20px;
    padding: 0 20px;
    position: relative;
    .text-box{
        position: absolute;
        top: 0;
        border: 1px solid red;
    }
    .info-box{
        width: 95%;
        position: absolute;
        bottom: 0;
        height: 70px;
        margin: auto;
        background-color: #f8f8f8;
        span{
            margin: 0 5px;
            padding: 0 5px;
            color: @font-color;
            font-size: 14px;
        }
        img{
            height: 24px;
        }
    }
}
.bar-top, .blog-plates-box{
    height: 35px;
    line-height: 35px;
    margin: 2px 0;
}
.content{
    margin: 50px;
}

.btn-top{
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0,0,0, .12);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
}
</style>