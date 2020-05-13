<template>
  <div class="publish">
    <h1>发布文章</h1>
    <div id="editor">
      <mavon-editor style="height: 100%" v-model="text"></mavon-editor>
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
        text:''
      }
    },
    methods:{
      PublishButton(){
        if (this.text){
          // 获取文章之后的处理逻辑
          console.log(this.text)
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
