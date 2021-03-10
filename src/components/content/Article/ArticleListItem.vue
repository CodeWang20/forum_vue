<template>
<div>
    <div class="atticle-item">
        <div class="left hidden-xs-only">
        </div>

        <div class="center">
            <div class="head">
                <div class="title" @click="articleClick">{{articleItem.title}}</div>

                <el-tooltip effect="light" :content="'最后更新时间：' + articleItem.lastUpdate" placement="top-start">
                    <div class="issuing hidden-xs-only"><small>发表于：{{articleItem.created}}</small></div>
                </el-tooltip>
                
                <div class="attention">
                    <el-button type="primary" round size="mini" icon="el-icon-circle-plus">关注</el-button>
                </div>
            </div>
            <div class="text">{{articleItem.summary}}</div>
            <div class="btn-group hidden-xs-only">
                <span><el-link   icon="el-icon-star-off"></el-link>{{articleItem.collect}}</span>
                <span><el-link   icon="el-icon-view"></el-link>{{articleItem.nowView}}</span>
            </div>
        </div>
        
        <div class="right">

        </div>
    </div>
</div>
</template>

<script>
import {addPageviews} from "@/network/blogs"
export default {
    props: {
       articleItem: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
        }
    },
    methods:{
        articleClick(){
            addPageviews(this.articleItem.id)
            this.$router.push( `/detail/${this.articleItem.id}`)
        }
    }
}
</script>

<style scoped lang="less">
@font-color: #9b9393;
@full-height: 100%;
@full-width: 100%;
@media(min-width:1200px){
    .center{
        width: 900px;
    }
}
@media(min-width:760px) and (max-width:1200px){
    .center{
        width: 900px;
    }
}
@media(max-width:760px){
    .center{
        width: 760px;
    }
}

.atticle-item{
    width: 100%;
    display: flex;
    // margin: 10px 0;
}
.left{
    // width: 220px;
    min-width: 220px;
    height: 140px;
    margin: 10px 0;
    background-color: cyan;
}
.center{
    min-width: 460px;
    padding-top: 16px;
    padding-left: 30px;
    position: relative;
    .head{
        height: 35px;
        text-align: left;
        position: relative;
        display: flex;
        line-height: 35px;
        .title{
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            padding-bottom: 2px;
            border-bottom: 2px solid gray;
            a{
                color: black;
            }
            a:hover{
                color: rgb(143, 197, 143);
            }
        }
        .issuing{
            position: absolute;
            right: 120px;
            color: @font-color;
            small{
            font-size: 90%;
            }
        }
        .attention{
            position: absolute;
            right: 20px;
            height: 30px;
            .el-button--mini, .el-button--small {
                font-size: 14px;
                border-radius: 8px;
                letter-spacing: 3px;
            }
        }
    }
    .text{
        text-indent: 2em;
        padding-top: 10px;
        line-height: 1.5rem;
    }
    .btn-group{
        position: absolute;
        bottom: 1px;
        height: 30px;
        padding-left: 60px;
        display: flex;
        span{
            width: 100px;
            height: @full-height;
            margin: 0 15px;
            color: @font-color;
            .el-link{
                width: 30px;
                height: @full-height;
                color: @font-color;
            }
            
        }
    }
    .text{
        display:-webkit-box;
        overflow: hidden;
        white-space: normal !important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical
    }
}

</style>