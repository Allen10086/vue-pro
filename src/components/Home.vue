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
          <router-link
            style="font-family: Nunito; font-size: 1rem"
            class="el-icon-s-custom"
            :to="{name:'login'}"
          >后台登录</router-link>
        </div>
      </div>
    </div>
    <!-- <router-link :to="{name:'register'}">注册页面</router-link> -->
    <!-- <router-link :to="{name:'survey'}">问卷调查</router-link> -->
    <div class="container">
      <el-row>
        <!--左侧部分-->
        <el-col :span="17">
          <el-main>
            <!--轮播图-->
            <el-carousel>
              <el-carousel-item v-for="item in 4" :key="item">
                <!-- <h3>{{ item }}</h3> -->
                <div class="item">
                  <a target="_blank" href="https://mp.weixin.qq.com/s/CiUGkKNKYsQyVPtsRv6z4Q">
                    <img src="https://images.cnblogs.com/cnblogs_com/songzhixue/1487435/o_1.jpg" />
                    <span class="carousel-caption">GIT版本控制工具</span>
                    <span class="carousel-bg"></span>
                  </a>
                </div>
              </el-carousel-item>
            </el-carousel>
            <!--分割线-->
            <el-divider content-position="left">文章内容</el-divider>
            <!--文章内容布局 <el-row :v-for>-->
            <el-row>
              <el-col>
                <!--文章正文-->
                <article class="excerpt excerpt-one">
                  <header>
                    <!--文章分类-->
                    <a class="label label-important" href="这里放文章分类url" title="技术流综合知识">技术流综合知识</a>
                    <!--文章标题-->
                    <h2>
                      <a
                        target="_blank"
                        href="这里放文章详情页的url"
                        title="GIT版本控制工具"
                      >GIT版本控制工具</a>
                    </h2>
                  </header>
                  <!--文章发布时间-->
                  <p class="text-muted time">Lz12Code 发布于 2020-05-30 14-22-09</p>
                  <!--文章封面-->
                  <p class="focus">
                    <a target="_blank" href="这里放文章详情页rul" class="thumbnail">
                      <span>
                        <img
                          src="https://images.cnblogs.com/cnblogs_com/songzhixue/1487435/o_1.jpg"
                          class="thumb"
                          style="display: inline;"
                        />
                      </span>
                    </a>
                  </p>
                  <!--文章预览-->
                  <p class="note">
                    Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。
                    Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。
                    Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。
                  </p>
                  <p class="text-muted views">
                    <span class="post-views">阅读(3820)</span>
                    <span class="post-comments">评论(300)</span>
                    <span class="post-tags">
                      标签：
                      <a
                        href="http://www.sfhfpc.com/?tag=python"
                        rel="tag"
                        data-original-title
                        title
                      >GIT</a> /
                      <a
                        href="http://www.sfhfpc.com/?tag=%e5%8f%8d%e7%88%ac%e8%99%ab"
                        rel="tag"
                        data-original-title
                        title
                      >GIT使用</a>
                    </span>
                  </p>
                </article>
              </el-col>
            </el-row>
          </el-main>
        </el-col>
        <el-col :span="7">
          <!--右侧边栏-->
          <div class="sidebar">侧边栏</div>
        </el-col>
      </el-row>
    </div>
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
/*当前页面CSS样式*/
@import "../assets/static/css/background_image.css";
@import "../assets/static/css/home.css";
</style>
