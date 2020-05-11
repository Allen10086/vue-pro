<template>
  <div>
    <h1>我是登陆页面</h1>
    <input type="text" placeholder="请输入用户名" v-model="user" />
    <input type="password" placeholder="请输入密码" v-model="passwd" />
    <input type="button" value="登录" @click="LoginFunc(user,passwd)" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      user: "",
      passwd: ""
    };
  },
  methods: {
    LoginFunc(user, passwd) {
      // 全局修改axios默认配置
      axios.defaults.baseURL = "http://rap2.taobao.org:38080";
      this.$axios
        .post("/app/mock/253571/api/user/login", { user: user, passwd: passwd })
        .then(res => {
          if (res.data.code === "1000") {
            alert("登录成功");
             this.$router.push('/admin')
          } else {
            alert("登录失败");
            // 登陆失败跳转到首页
            this.$router.push('/')
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>
