<template>
  <div class="publish">
    <h1>发布文章</h1>
    <div id="input">
      <el-input v-model="ArticleTitle" placeholder="请输入文章标题"></el-input>
      <el-input v-model="ArticleLable" placeholder="请输入文章分类"></el-input>
    </div>
    <div id="editor">
      <mavon-editor style="height: 100%" v-model="Text"></mavon-editor>
    </div>
    <el-button type="primary" plain @click="PublishButton">提交</el-button>
  </div>
</template>

<script>
  // Local Registration
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    name: "pulishNav",
    data(){
      return {
        Text:'',
        ArticleTitle:'',
        ArticleLable:''
      }
    },
    methods:{
      PublishButton(){
        if (this.Text){
          // 获取文章之后的处理逻辑
          console.log(this.Text)
        }else {
          alert("文章内容不能不空！")
        }

      }
    },
    comments:mavonEditor
  }
</script>

<style scoped>
  #editor {
    margin: auto;
    width: 100%;
    height: 580px;
  }
</style>
