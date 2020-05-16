<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="24">
          <el-row>
            <h1>文章管理</h1>
            <el-col :span="4" :xs="8">
              <el-input placeholder="根据文章标题或分类搜索" v-model="input" clearable></el-input>
            </el-col>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-table
                :data="tableData"
                style="width: 100%"
                highlight-current-row
                stripe
                border
                :fit="true"
              >
                <!--多选框-->
                <el-table-column type="selection" width="40"></el-table-column>
                <!--ID-->
                <el-table-column label="ID" width="100px" fixed>
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.id }}</span>
                  </template>
                </el-table-column>
                <!--文章标题-->
                <el-table-column label="标题" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.title }}</span>
                  </template>
                </el-table-column>
                <!--文章所属分类-->
                <el-table-column label="所属分类" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.category }}</span>
                  </template>
                </el-table-column>
                <!--文章封面-->
                <el-table-column label="文章封面" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <div class="demo-image__preview">
                      <el-image
                        :src="scope.row.article_vover_url"
                        :preview-src-list="scope.row.article_vover_srcList"
                        :fit="scale-down"
                      ></el-image>
                    </div>
                  </template>
                </el-table-column>
                <!--文章添加时间-->
                <el-table-column label="添加时间" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.add_time }}</span>
                  </template>
                </el-table-column>
                <!--文章更新时间-->
                <el-table-column label="更新时间" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.update_time }}</span>
                  </template>
                </el-table-column>
                <!--文章浏览量-->
                <el-table-column label="浏览量" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.views_number }}</span>
                  </template>
                </el-table-column>
                <!--文章评论数-->
                <el-table-column label="评论数" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.comments_number }}</span>
                  </template>
                </el-table-column>
                <!--文章推荐分数-->
                <el-table-column label="推荐分数" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <div class="block">
                      <el-rate
                        v-model="scope.row.score"
                        :colors="colors"
                        disabled
                        show-score
                        text-color="#ff9900"
                      ></el-rate>
                    </div>
                  </template>
                </el-table-column>
                <!--文章发布状态-->
                <el-table-column label="发布状态" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <el-switch v-model="scope.row.release_status" disabled active-color="#13ce66"></el-switch>
                  </template>
                </el-table-column>
                <!--操作-->
                <el-table-column label="操作" show-overflow-tooltip>
                  <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
var tableData = [
  {
    id: "20022", // 文章id
    title: "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄", // 文章标题
    category: "Go基础", // 所属分类
    add_time: "2020-02-16 09:27:33", // 发布时间
    update_time: "2020-05-16 16:27:33", // 修改时间
    views_number: "9999", //浏览量
    comments_number: "3453", // 评论数
    release_status: true, // 发布状态
    article_vover_url:
      "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg", // 文章封面地址
    article_vover_srcList: [
      "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" //  文章预览图地址同封面地址
    ],
    score: "2.1" // 文章推荐分数 总计5分
  },
  {
    id: "20022", // 文章id
    title: "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄", // 文章标题
    category: "Go基础", // 所属分类
    add_time: "2020-02-16 09:27:33", // 发布时间
    update_time: "2020-05-16 16:27:33", // 修改时间
    views_number: "9999", //浏览量
    comments_number: "3453", // 评论数
    release_status: false, // 发布状态
    article_vover_url:
      "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    article_vover_srcList: [
      "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    ],
    score: "5"
  }
];
export default {
  name: "articleNav",
  data() {
    return {
      tableData: tableData,
      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
</style>
