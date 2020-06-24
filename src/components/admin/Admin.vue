<template>
  <el-container>
    <div id="menu">
      <!--定义鼠标经过时鼠标图型样式-->
      <i
        class="el-icon-menu"
        style=" position: absolute;font-size: 20px;margin-left: 22px;margin-top: 25px; cursor:pointer"
        @click="IsCollapse"
      ></i>
    </div>

    <el-header>
      <span>博客后台管理</span>
    </el-header>
    <el-container>
      <el-aside width="IsCollapse ? 80px : 300px">
        <el-menu
          default-active="2"
          background-color="rgba(238,238,238,.2)"
          text-color="#666"
          active-text-color="#79171c"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          :collapse-transition="true"
        >
          <!--collapse 是否水平收起菜单-->
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
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
var MenuList = [
  { index: 1, title: "数据统计", icon: "el-icon-s-data", RouterName: "index" },
  {
    index: 2,
    title: "发布文章",
    icon: "el-icon-edit-outline",
    RouterName: "publish"
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
    icon: "el-icon-price-tag",
    RouterName: "label"
  },
  { index: 6, title: "文件管理", icon: "el-icon-s-help", RouterName: "file" },
  { index: 7, title: "友链管理", icon: "el-icon-link", RouterName: "linkz" },
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
      MenuList: MenuList,
      isCollapse: false
    };
  },
  methods: {
    MenuFunc(val) {
      this.$router.push({ name: val }); // 必须给一个路由出口<router-view></router-view>
    },
    IsCollapse() {
      this.isCollapse = !this.isCollapse; // 菜单是否隐藏
    }
  }
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
  /*min-height: 400px;*/
}
.el-header {
  font-size: 20px;
  font-weight: bold;
}
.el-header {
  background-color: #f6f6f6;
  color: #666;
  text-align: center;
  line-height: 60px;
}

/*菜单按钮 鼠标悬停颜色*/
#menu i:hover {
  background-color: #f6f6f6;
}

/*滚动条样式*/
.el-aside::-webkit-scrollbar {
  width: 5px;
  /*height: 4px;*/
}
.el-aside::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  /*background: rgba(0,0,0,0.2);    改变滚轮颜色*/
}
.el-aside::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  /*background: rgba(0,0,0,0.1);    改变滚轮颜色*/
}
</style>
