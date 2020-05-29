<template>
  <div id="background_image">
    <div class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
        <a
          class="navbar-brand"
          href="#"
          style="font-family: Nunito;font-weight: bold;font-size: 1.5rem"
        >前端展示</a>
        <router-link :to="{name:'login'}" style="margin-left:83%;">后台登录</router-link>
      </div>
    </div>

    <!-- <router-link :to="{name:'register'}">注册页面</router-link> -->
    <!-- <router-link :to="{name:'survey'}">问卷调查</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  }
};
</script>

<style scoped>
/*只给当前页面添加样式*/
@import "../assets/static/css/background_image.css";
@import "../assets/static/css/home.css";
</style>
