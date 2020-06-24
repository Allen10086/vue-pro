<template>
  <el-container>
    <el-row>
      <el-col :span="24">
        <el-main>
          <h1>发布文章</h1>
          <el-row :gutter="3">
            <el-col :span="12">
              <el-input v-model="title" placeholder="请输入文章标题" clearable></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-select
                v-model="category"
                placeholder="请选择文章分类"
                size="medium"
                :filterable="true"
                style="width: 50%"
              >
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.category_name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row :gutter="3">
            <el-col :span="12">
              <el-input v-model="tags" placeholder="请输入文章标签 多个标签用分号分隔" clearable></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-upload
              class="upload-demo"
              action="string"
              accept="image/jpeg, image/png, image/jpg"
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
          <!-- <el-row :gutter="3">
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
          </el-row>-->
          <el-row :gutter="3">
            <el-col>
              <div id="editor">
                <mavon-editor
                  style="height: 100%"
                  v-model="md"
                  ref="md"
                  @imgAdd="$imgAdd"
                  @change="change"
                ></mavon-editor>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="3">
            <el-col>
              <el-button type="success" @click="PublishButton">文章发布</el-button>
              <el-button type="primary" @click="PublishSave">保存草稿</el-button>
            </el-col>
          </el-row>
        </el-main>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
// Local Registration
import axios from "axios";
import qs from "qs"; // post请求传form-data要转换
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

axios.defaults.baseURL = "http://127.0.0.1:8081";
export default {
  name: "pulishNav",
  data() {
    return {
      md: "", // 文章内容
      title: "", // 文章标题
      // 文章分类
      options: [],
      category: "", // 文章分类
      // textarea: "",     // 简介
      OssUrl: "", // 图片上传aliyun返回的url
      html: "", // markdown解析成html
      tags: "", // 文章标签
      fileList: [
        {
          name: "demo.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    // 发布文章
    PublishButton() {
      if (this.md && this.title && this.category) {
        // 获取文章之后的处理逻辑
        this.$axios
          .post(
            "/api/v1/article/create",
            // 构造请求参数form-data
            qs.stringify({
              title: this.title,
              category: this.category,
              ossUrl: this.OssUrl,
              html: this.html,
              tags: this.tags,
              status: true,
              md: this.md
            })
          )
          .then(function(response) {
            console.log("res:", response);
            if (response.data.code === 1000) {
              alert("文章发布成功！");
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        alert("文章内容不能不空！");
      }
    },
    // 保存文章
    PublishSave() {
      if (this.md && this.title && this.category) {
        // 获取文章之后的处理逻辑
        this.$axios
          .post(
            "/api/v1/article/create",
            // 构造请求参数form-data
            qs.stringify({
              title: this.title,
              category: this.category,
              ossUrl: this.OssUrl,
              html: this.html,
              tags: this.tags,
              status: false,
              md: this.md
            })
          )
          .then(function(response) {
            alert("文章保存为草稿！");
          })
          .catch(function(error) {
            console.log(error);
          });
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

    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("upload", $file);
      this.$axios({
        url: "http://127.0.0.1:8081/api/v1/upload",
        method: "post",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" }
      }).then(data => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        /**
         * $vm 指为mavonEditor实例，可以通过如下两种方式获取
         * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
         * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
         */
        // console.log(data)
        // 将后端返回的url替换到文本原位置
        this.$refs.md.$img2Url(pos, data.data.imgurl);
        // $vm.$img2Url(pos, url);
      });
    },
    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    // 文件上传触发的函数   自定义请求:http-request="uploadSectionFile"
    uploadSectionFile(param) {
      var fileObj = param.file; // 要上传的文件对象
      var formData = new FormData();
      formData.append("upload", fileObj); // 传文件
      // console.log(fileObj);
      // form.append('id',this.srid)          // 传其它参数文件
      this.$axios({
        url: "http://127.0.0.1:8081/api/v1/upload",
        method: "post",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
      })
        .then(res => {
          // 图片上传到阿里云oss  后端返回的图片地址
          this.OssUrl = res.data.imgurl;
          alert("上传成功");
        })
        .catch(err => {
          console.log(err);
          alert("上传失败");
        });
    }
  },
  comments: mavonEditor,
  // 钩子 组件加载后运行 查询所有分类
  created: function() {
    // 组件创建之后
    // 在created这个方法中可以操作后端的数据  数据驱动试图
    // 应用：发起Ajax请求

    this.$axios
      .get("/api/v1/category/all")
      .then(res => {
        // 校验后端返回的code
        if (res.data.code === 1000) {
          this.options = res.data.categoryList;
          console.log(res.data.categoryList);
        } else {
          alert("数据获取失败");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
#editor {
  margin: auto;
  width: 100%;
  height: 700px;
}

.el-row {
  margin-bottom: 20px;
}
</style>
