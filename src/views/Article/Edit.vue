<template>
<div class="blog-editor">
    <el-form :model="articleForm" :rules="rules" ref="articleForm" label-width="100px">
        <div class="info-box">
            <el-form-item label="标题" prop="title">
                <el-input class="title" v-model="articleForm.title"></el-input>
            </el-form-item>

            <el-form-item label="摘要" prop="summary">
                <el-input type="textarea" v-model="articleForm.summary"></el-input>
            </el-form-item>

            <div class="toolbar">
                <el-form-item label="板块" prop="plateId">
                    <el-select  v-model="articleForm.plateId" placeholder="请选择要发布的板块">
                        <el-option v-for="(plate, index) in plates" :key="'palte' + index" :label="plate.name" :value="plate.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('articleForm')">发布</el-button>
                    <el-button @click="resetForm('articleForm')">重置</el-button>
                </el-form-item>
            </div>
        </div>

        <el-form-item prop="content">
            <mavon-editor class="article-content" v-model="articleForm.content"></mavon-editor>
        </el-form-item>

        <el-form-item class="hid-input" prop="userId">
            <el-input type="hidden" v-model="articleForm.userId" disabled></el-input>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {creation, getAllPlate} from "@/network/blogs"
export default {
    data() {
        return {
            plates: null,
            articleForm: {
                userId: this.$store.state.userInfo.id,
                title: '',
                summary: '',
                content: '',
        },
        rules: {
            title: [
                { required: true, message: '请输入文章标题', trigger: 'blur' }
            ],
            summary: [
                { required: true, message: '请输入文章摘要', trigger: 'blur' }
            ],
            plateId: [
                { required: true, message: '请选择要发布的板块', trigger: 'change' }
            ],
            content: [
                { required: true, message: '文章内容不能为空！', trigger: 'change' }
            ],
        }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    creation(this.articleForm).then(res => {
                        console.log(res)
                    })
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    created(){
        getAllPlate().then(res => {
            this.plates = res.data
        })
    }
}
</script>

<style lang="less" scoped>
.blog-editor{
    width: 90%;
    margin-top: 20px;
    position: relative;
    .hid-input{
        position: absolute;
        bottom: 0;
    }
}
.info-box {
    margin-left: 50px;
    .toolbar{
    display: flex;
    flex: 1;
    }
}
.article-content{
    min-height: 600px;
}


</style>