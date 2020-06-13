<template>
  <el-main>
    <h1>分类</h1>

    <el-row>
      <el-col>
        <el-button type="text" @click="dialogVisible = true">添加分类</el-button>

        <el-dialog
          title="添加分类"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <el-input v-model="category" placeholder="请输入分类名称"></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="insertCategory(category)">确 定</el-button>
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
          size="small"
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column type="index" label="序号" width="50"></el-table-column>
          <!-- <el-table-column prop="id" label="id" width="50"></el-table-column> -->
          <el-table-column prop="category_name" label="名称" width="100"></el-table-column>
          <el-table-column prop="create_time" label="创建时间" width="150">
            <template slot-scope="scope">
              <span>{{scope.row.create_time | formatDate}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="update_time" label="更新时间" width="150">
            <template slot-scope="scope">
              <span>{{scope.row.update_time | formatDate}}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>
              <el-button @click="deleteClick1(scope.row.id)" type="text" size="small">编辑</el-button>
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
      category: ""
    };
  },
  methods: {
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
    }
  },
  // 日期过滤器 时间戳转换成日期时间
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  created: function() {
    // 组件创建之后
    // 在created这个方法中可以操作后端的数据  数据驱动试图
    // 应用：发起Ajax请求

    this.$axios
      .get("/api/v1/category/all")
      .then(res => {
        // 校验后端返回的code
        if (res.data.code === 1000) {
          this.tableData = res.data.CategoryList;
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
