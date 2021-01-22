<template>
<div >
    <article-list-item class=articles v-for="(item, index) in articles" :articleItem="item"  :key="'article' + index"></article-list-item>
</div>
</template>

<script>
import ArticleListItem from "./ArticleListItem"
export default {
    name: "ArticleList",
    components:{
        ArticleListItem
    },
    props: {
        articles: {
            type: Array,
            default(){
                return{

                }
            }
        }
    }

}
</script>

<style scoped lang="less">
.articles{
    width: 100%;
    min-height: 160px;
    background-color: #fff;
    margin: 10px 0;
    padding: 0 20px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>