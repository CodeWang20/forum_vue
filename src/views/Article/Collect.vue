<template>
    <div class="collection">
        <div class="aside-left">
            <div class="menus">
                <li class="menu-item menu-item-new">
                    <i class="el-icon-folder-add" />
                <span>新建收藏夹</span>
                </li>

                <li class="menu-item" v-for="(favorite, index) in favorites" :key="index">
                    <div class="menu-item-title">
                        <i class="el-icon-folder" />
                        <span>{{favorite.type}}</span>
                    </div>
                    <div class="menu-item-like">
                        <i class="el-icon-document" />
                        <span>3</span>
                    </div>
                </li>
            </div>
        </div>

        <div class="collection-content">
            <div class="list-wrap">
                <ul class="collection-list">
                    <li>
                        <div class="titleHead">
                            <div class="nameBox">
                                <span class="collection-dir">
                                    <span class="collection-folder-name">
                                        文件夹
                                        <i class="el-icon-edit"></i>
                                    </span>
                                </span>
                            </div>
                            <div class="collection-edit-box">
                                <el-link type="primary" :underline="false" icon="">删除收藏夹</el-link>
                                    <el-divider direction="vertical"></el-divider>
                                <el-link type="primary" :underline="false" icon="">设为私密</el-link>
                            </div>
                        </div>
                        <ul class="collection-sublist">
                            <li v-for="(collect, index) in collects" :key="index">
                                <div class="collection-con">
                                    <span>
                                        <div class="collection-dir">
                                            <em class="conllection-type">BLOG</em>
                                            <span class="subtitle">{{collect.article.title}}</span>
                                        </div>
                                    </span>
                                    <div class="collect-detail-right">
                                        <a class="collect-cancel">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <!-- <i class="fa fa-star-o" aria-hidden="true"></i> -->
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {favorites,collection} from "@/network/blogs"
export default {
    data() {
        return {
            reverse: true,
            favorites: [],
            collects: [],
            favId: '',
        };
    },
    methods: {

    },
    created(){
        let userId = this.$store.getters.user.id
        favorites(userId).then(res => {
            this.favorites = res.data
            this.favId = res.data[0].id
            let favId = this.favId
            collection({userId, favId}).then(res => {
                this.collects = res.data
            })
        })
    }
}
</script>

<style scoped lang="less">
.collection{
    min-width: 968px;
    margin-left: 30px;
    min-height: 800px;
    background: #fff;
    display: block;
    zoom: 1;
    .aside-left{
        min-height: 760px;
        width: 200px;
        border-right: 1px solid #ededed;
        box-sizing: border-box;
        float: left;
        .menu-item{
            height: 66px;
            padding-left: 16px;
            border-bottom: 1px solid #ededed;
            position: relative;
            padding-right: 8px;
            padding-top: 10px;
            cursor: pointer;
            font-weight: 400;
            span{
                font-size: 14px;
                color: #555666;
                line-height: 16px;
                margin-left: 8px;
            }
            .menu-item-title{
                white-space: nowrap;
            }
            .menu-item-like{
                position: absolute;
                bottom: 12px;
                right: 8px;
            }
        }
        .menu-item-new{
            width: 200px;
            line-height: 35px;
            padding-top: 16px!important;
        }
    }
    .collection-content{
        min-height: 400px;
        overflow: hidden;
        .list-wrap{
            min-height: 760px;
        }
    }
}
.collection-list{
    li{
        border: none;
        position: relative;
        padding: 16px 0;
        line-height: 20px;
        span {
            display: block;
        }
    }
    .titleHead{
        padding: 0 16px;
        height: 32px;
        border-bottom: 1px solid #ededed;
        position: relative;
        display: flex;
        flex: 1;
        .nameBox{
            height: 32px;
            width: 50%;
            .collection-dir {
                font-size: 14px!important;
                color: #555666;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                .collection-folder-name i{
                    position: relative;
                    left: 8px;
                    cursor: pointer
                }
            }
            .collection-edit-box{
                width: 50%;
            }
        }
    }
}
.collection-sublist{
    margin-top: 8px;
    margin-bottom: -17px;
    padding: 0 16px;
    li{
        padding: 0;
        position: relative;
        margin-top: 0;
        background: #fff;
        border: 1px solid #ededed;
        border-radius: 4px;
        margin-bottom: 8px;
        height: 52px;
        overflow: hidden;
        line-height: 52px;
        .collection-con{
            position: relative;
            padding: 0 24px;
            background: #fff;
            display: inline-block;
            width: 100%;
            font-size: 14px!important;
            line-height: 52px;
        }
        .collection-dir {
            width: 89%;
            font-size: 14px!important;
            color: #555666;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .conllection-type{
            height: 20px;
            padding: 0 5px;
            border: 1px solid #d5d5d5;
            background-color: #fff;
            color: #999;
            font-size: 12px;
            vertical-align: top;
            font-weight: 400!important;
            border-radius: 4px;
            font-style: normal;
            line-height: 52px;
        }
        .subtitle{
            font-family: Helvetica!important;
            color: #555666;
            display: inline;
            cursor: pointer;
        }
        .collect-detail-right {
            position: absolute;
            right: 0;
            width: 150px;
            height: 100%;
            top: 0;
            text-align: right;
            line-height: 52px;
            padding-right: 18px;
            .collect-cancel {
                margin-right: 10px;
                i{
                    width: 16px;
                    color: #ecb80b;
                }
            }
        }
    }
}
.collection-sublist li:hover{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.active{
    position: relative;
    background: #f6f7f8;
}

</style>