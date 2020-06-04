<template>
  <div id="background_image">
    <div class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
        <a
          class="navbar-brand"
          href="#"
          style="font-family: Nunito;font-weight: bold;font-size: 1.5rem"
        >Lz12Code</a>
        <div style="float:right" class="navbar-brand">
          <router-link style="font-family: inherit; font-size: 1rem" :to="{name:'home'}">&nbsp;首页&nbsp;</router-link>
          <router-link style="font-family: Nunito; font-size: 1rem" :to="{name:'archives'}">&nbsp;归档&nbsp;</router-link>
          <router-link style="font-family: Nunito; font-size: 1rem" :to="{name:'laboratory'}">&nbsp;统计&nbsp;</router-link>
          <router-link style="font-family: Nunito; font-size: 1rem" :to="{name:'link'}">&nbsp;友链&nbsp;</router-link>
          <router-link style="font-family: Nunito; font-size: 1rem" :to="{name:'about'}">&nbsp;关于&nbsp;</router-link>
          <router-link
            style="font-family: Nunito; font-size: 1rem"
            class="el-icon-s-custom"
            :to="{name:'login'}"
          >&nbsp;后台登录</router-link>
        </div>
      </div>
    </div>

    <div class="container">
      <el-row>
        <!--左侧部分-->
        <el-col :span="17">
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-col>
        <el-col :span="7">
          <!--右侧边栏-->
          <div class="sidebar" style="background-color: #ffffff;">
            <img id="avatar" src="#" alt="博主简介" style="display: block;">
          </div>
        </el-col>
        <el-col :span="7">
          <!--右侧边栏-->
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "front",
  data() {
    return {};
  }
};
</script>

<style scoped>
@import "../assets/static/css/home.css";
</style>
