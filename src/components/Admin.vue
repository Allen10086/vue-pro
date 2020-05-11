<template>
  <el-container>
    <el-header>后台管理</el-header>
    <el-aside width="500px">
      <el-container>
        <el-col :span="12">
          <el-menu
            default-active="2"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <!--使用element-ui的菜单，在SubMenu Attribute中有一个index的属性，如果index的值从后端传入，则会报错-->
            <!-- index的值不能有空格，并且要为字符串类型，将其转为字符串就不会报错了-->
            <el-menu-item
              :index="item.index.toString()"
              v-for="(item) in MenuList"
              :key="item.index"
              @click="MenuFunc(item.RouterName)"
            >
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-container>
    </el-aside>
  </el-container>
</template>

<script>
var MenuList = [
  { index: 1, title: "仪表盘", icon: "el-icon-s-home", RouterName: "index" },
  {
    index: 2,
    title: "发布文章",
    icon: "el-icon-edit-outline",
    RouterName: "pulish"
  },
  {
    index: 3,
    title: "文章管理",
    icon: "el-icon-tickets",
    RouterName: "article"
  },
  { index: 4, title: "页面管理", icon: "el-icon-reading", RouterName: "page" },
  {
    index: 5,
    title: "分类/标签",
    icon: "el-icon-s-management",
    RouterName: "label"
  },
  { index: 6, title: "文件管理", icon: "el-icon-s-help", RouterName: "file" },
  { index: 7, title: "友链管理", icon: "el-icon-link", RouterName: "link" },
  {
    index: 8,
    title: "系统设置",
    icon: "el-icon-setting",
    RouterName: "settings"
  }
];
export default {
  name: "admin",
  data() {
    return {
      MenuList: MenuList
    };
  },
  methods: {
    MenuFunc(val) {
      console.log(val);
      this.$router.push({ name: val }); // ????
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: #545c64;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
</style>
