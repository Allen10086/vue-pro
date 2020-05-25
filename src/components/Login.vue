<template>
  <el-container>
    <el-header>登录界面</el-header>
    <el-row>
      <!--登录框居中-->
      <el-col :span="6" :offset="9">
        <div id="input">
          <el-row :gutter="10">
            <el-col>
              <el-input
                placeholder="请输入用户名"
                v-model="user"
                :maxlength="20"
                clearable
                prefix-icon="el-icon-s-custom"
              ></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col>
              <el-input
                placeholder="请输入密码"
                v-model="passwd"
                show-password
                prefix-icon="el-icon-lock"
              ></el-input>
            </el-col>
          </el-row>
          <el-button type="primary" @click="LoginFunc(user,passwd)">登录</el-button>
        </div>
      </el-col>
    </el-row>
  </el-container>
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
      if ((user, passwd)) {
        // 全局修改axios默认配置
        axios.defaults.baseURL = "http://127.0.0.1:8081";
        this.$axios
          .post("/api/user/login", {
            user: user,
            passwd: passwd
          })
          .then(res => {
            // 校验后端返回的code
            if (res.data.code === 1000) {
              alert("登录成功");
              // 登录成功跳转到后台页面
              this.$router.push("/admin");
            } else {
              alert("登录失败");
              // 登陆失败跳转到首页
              this.$router.push("/");
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        alert("用户名或密码不能为空！");
      }
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
#input {
  /* background-color: cadetblue; */
  height: 200px;
  margin-top: 300px;
}
</style>
