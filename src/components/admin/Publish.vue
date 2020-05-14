<template>
  <el-container>
    <el-row>
      <el-col :span="24">
        <el-main>
          <h1>发布文章</h1>
          <el-row :gutter="3">
            <el-col :span="12">
              <el-input v-model="ArticleTitle" placeholder="请输入文章标题" clearable></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-select
                v-model="ArticleLable"
                placeholder="请选择文章分类"
                size="medium"
                :filterable="true"
                style="width: 50%"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-upload
              class="upload-demo"
              action="string"
              accept="image/jpeg,image/png,image/jpg"
              :http-request="uploadSectionFile"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              list-type="picture"
              :limit="1"
              style="width: 50%"
            >
              <el-button size="small" type="primary">上传文章封面图</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-row>
          <el-row :gutter="3">
            <el-col :span="12">
              <el-input
                type="textarea"
                :rows="4"
                placeholder="请输入文章简介"
                v-model="textarea"
                :show-word-limit="true"
                :maxlength="100"
              ></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="3">
            <el-col>
              <div id="editor">
                <mavon-editor style="height: 100%" v-model="Text"></mavon-editor>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="3">
            <el-col>
              <el-button type="primary" plain @click="PublishButton">提交</el-button>
              <el-button type="primary" plain @click="PublishButton">保存草稿</el-button>
            </el-col>
          </el-row>
        </el-main>
      </el-col>
    </el-row>

  </el-container>
</template>

<script>
  // Local Registration
  import {mavonEditor} from "mavon-editor";
  import "mavon-editor/dist/css/index.css";

  export default {
    name: "pulishNav",
    data() {
      return {
        Text: "",
        ArticleTitle: "", // 文章标题
        ArticleBiref: "",
        // 文章分类
        options: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          },
          {
            value: "选项3",
            label: "蚵仔煎"
          },
          {
            value: "选项4",
            label: "龙须面"
          },
          {
            value: "选项5",
            label: "北京烤鸭"
          }
        ],
        ArticleLable: "", // 文章分类
        textarea: "",
        fileList: [
          {
            name: "food.jpeg",
            url:
              "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          }
        ]
      };
    },
    methods: {
      PublishButton() {
        if (this.Text) {
          // 获取文章之后的处理逻辑
          console.log(this.Text);
          console.log(this.ArticleLable);
          console.log(this.textarea);
        } else {
          alert("文章内容不能不空！");
        }
      },
      // 删除封面图触发的函数
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      // 点击封面图触发的函数
      handlePreview(file) {
        // console.log(file);
      },

      // 文件上传触发的函数   自定义请求:http-request="uploadSectionFile"
      uploadSectionFile(param) {
        var fileObj = param.file                // 要上传的文件对象
        var form = new FormData()
        form.append("upload", fileObj)    // 传文件  upload是后端指定的key
        console.log(fileObj)
        // form.append('id',this.srid)          // 传其它参数文件
        this.$axios.post('http://127.0.0.1:9000/upload', form)
          .then(function (res) {
            alert('成功');
          })
          .catch(function (error) {
            alert("上传失败");
            console.log(error);
          });
      },


    },
    comments: mavonEditor
  };
</script>

<style scoped>
  #editor {
    margin: auto;
    width: 100%;
    height: 580px;
  }
  .el-row {
    margin-bottom: 20px;
  }
</style>
