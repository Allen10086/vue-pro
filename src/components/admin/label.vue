<template>
  <el-main>
    <h1>标签</h1>
    <el-row>
      <el-col>
        <el-table
          :data="tableData"
          border
          fit
          stripe
          size="small"
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column prop="id" label="id" width="120"></el-table-column>
          <el-table-column prop="category_name" label="名称" width="120"></el-table-column>
          <el-table-column prop="create_time" label="创建时间" width="200"></el-table-column>
          <el-table-column prop="update_time" label="更新时间" width="200"></el-table-column>

          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="deleteClick(scope.row.id)" type="text" size="small">删除</el-button>
              <el-button @click="deleteClick1(scope.id)" type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8081";
export default {
  name: "labelNav",
  inject: ["reload"],
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    deleteClick(res) {
      console.log(res);
      this.$axios
        .delete("/api/v1/category/delete", {
          params: {
            id: res
          }
        })
        .then(res => {
          if (res.data.code === 1000) {
            alert("删除成功");
            // location.reload() // 全局网页刷新会造成短暂页面空白
            this.reload(); // 局部刷新参考：https://blog.csdn.net/qq_39009348/article/details/81698316
          } else {
            alert("删除失败");
          }
        });
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
