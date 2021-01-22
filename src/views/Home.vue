<template>
<div class="home">
    <div class="plate-nav">
        <plate-nav></plate-nav>
    </div>
    <div class="article-hot">
        <article-list :articles="hotArticles"></article-list>
    </div>
</div>
</template>

<script>
import PlateNav from "@/components/content/PlateNav/index"
import ArticleList from "@/components/content/Article/ArticleList"

import {getOne, hotArticles} from "@/network/home"
import "github-markdown-css"

export default {
    name: 'Home',
    data(){
        return{
            hotArticles: []
        }
},
components: {
    PlateNav, ArticleList
},
created(){
    hotArticles().then(res => {
        this.hotArticles = res.data
    })
}
}
</script>
<style lang="less" scoped>
.home{
    height: 900px;
    margin: auto;
    margin-top: 15px;
    background-color: #fff;
}
.plate-nav{
    height: 260px;
}
.article-hot{
    width: 100%;
    background-color: #efefef;
    padding-top: 5px;
}
</style>