<template>
  <el-main>
    <h1>分类</h1>

    <el-row>
      <el-col>
        <el-button type="text" @click="dialogVisible = true,clickFlag('insert')">添加分类</el-button>

        <el-dialog title="分类" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <el-input v-model="category" placeholder="请输入分类名称"></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <!-- <el-button type="primary" @click="insertCategory(category)">确 定</el-button> -->

            <!--这里用到flag判断点击的不同按钮执行不同的操作 按钮的显示隐藏用到v-show判断flag的值-->
            <el-button type="primary" v-show="flag==='insert'" @click="insertCategory(category)">确 定</el-button>

            <el-button
              type="primary"
              v-show="flag==='modify'"
              @click="handleModify(modifyId,category)"
            >修 改</el-button>
          </span>
        </el-dialog>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="11.2">
        <el-table
          :data="tableData"
          border
          fit
          stripe
          size="medium "
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column type="index" label="序号" width="100"></el-table-column>
          <!-- <el-table-column prop="id" label="id" width="50"></el-table-column> -->
          <el-table-column prop="category_name" label="名称" width="200"></el-table-column>
          <el-table-column prop="create_time" label="创建时间" width="200">
            <template slot-scope="scope">
              <span>{{scope.row.create_time | formatDate}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="update_time" label="更新时间" width="200">
            <template slot-scope="scope">
              <span>{{scope.row.update_time | formatDate}}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>
              <el-button
                @click="dialogVisible = true,clickFlag('modify',scope.row.id,scope.row.category_name)"
                type="text"
                size="small"
              >编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import axios from "axios";
import qs from "qs"; // post请求传form-data要转换
// 导入时间戳转换日期时间的js
import { formatDate } from "../../assets/static/js/time.js";
axios.defaults.baseURL = "http://127.0.0.1:8081";
export default {
  name: "labelNav",
  inject: ["reload"],
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      category: "", // 输入的分类名称
      flag: "", // 标识是哪个按钮 编辑还是添加 用于区别点击的按钮来操作不同的事件 复用模态框,
      modifyId: ""
    };
  },
  methods: {
    // 删除分类
    handleDelete(res) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 点击确认删除后向后端发起请求删除该数据
          this.$axios.delete("/api/v1/category/delete", {
            params: {
              id: res
            }
          });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.reload(); // 局部刷新参考：https://blog.csdn.net/qq_39009348/article/details/81698316
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    // 添加分类函数
    insertCategory(res) {
      if (!res) {
        alert("分类不能为空");
      } else {
        console.log(res);
        this.$axios
          .post(
            "/api/v1/category/create",
            // 构造请求参数form-data
            qs.stringify({
              category_name: res
            })
          )
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        this.reload();
      }
    },
    // 修改分类
    handleModify(categoryId, categoryName) {
      console.log(categoryId, categoryName);
      this.$axios
        .put(
          "/api/v1/category/modify",
          // 构造请求参数form-data
          qs.stringify({
            id: categoryId,
            category_name: categoryName
          })
        )

        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      this.reload();
    },
    // 主要用来区分是什么按钮添加分类或修改分类
    clickFlag(res, categoryId, category_name) {
      this.flag = res;
      this.modifyId = categoryId;
      this.category = category_name; // v-model在输入框内显示选择分类的分类名称
      console.log(this.flag, this.modifyId);
    }
  },
  // 日期过滤器 时间戳转换成日期时间
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
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
          this.tableData = res.data.categoryList;
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
</style>
