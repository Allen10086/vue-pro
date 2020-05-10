<template>
  <div>
    <h1>我是首页</h1>
    <router-link :to="{name:'login'}">登录页面</router-link>
    <router-link :to="{name:'register'}">注册页面</router-link>
    <router-link :to="{name:'survey'}">问卷调查</router-link>
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
</style>
