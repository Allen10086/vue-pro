<template>
  <div id="background_image">
    <div class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
        <a
          class="navbar-brand"
          href="#"
          style="font-family: Nunito;font-weight: bold;font-size: 1.5rem"
        >Lz12Code</a>
        <div style="float:right" class="navbar-brand"><router-link style="font-family: Nunito; font-size: 1rem" :to="{name:'login'}">后台登录</router-link></div>
        
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
                    <img src="http://can.sfhfpc.com/sfhfpc/20191220083816.png" />
                    <span class="carousel-caption">JavaScript 逆向系列课</span>
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
                    <a
                      class="label label-important"
                      href="这里放文章分类url"
                      title="技术流综合知识"
                    >技术流综合知识</a>
                    <!--文章标题-->
                    <h2>
                      <a
                        target="_blank"
                        href="这里放文章详情页的url"
                        title="如何设计一款地震高岗一派溪山千古秀的反爬虫？-算法和反爬虫"
                      >如何设计一款地震高岗一派溪山千古秀的反爬虫？</a>
                    </h2>
                  </header>
                  <!--文章发布时间-->
                  <p class="text-muted time">Lz12Code 发布于 2020-05-30 14-22-09</p>
                  <!--文章封面-->
                  <p class="focus">
                    <a target="_blank" href="这里放文章详情页rul" class="thumbnail">
                      <span>
                        <img
                          src="http://can.sfhfpc.com/sfhfpc/20191220083816.png"
                          class="thumb"
                          style="display: inline;"
                        />
                      </span>
                    </a>
                  </p>
                  <!--文章预览-->
                  <p
                    class="note"
                  >地震高岗，一派溪山千古秀； 门朝大海，三河合水万年流； 没错，这正是《鹿鼎记》地震高岗，一派溪山千古秀；地震高岗，一派溪山千古秀； 门朝大海，三河合水万年流； 没错，这正是《鹿鼎记》地震高岗，一派溪山千古秀； 门朝大海，三河合水万年流； 没错，这正是《鹿鼎记》天地会的接头没错，这正是《鹿鼎记》天地会的接头暗号。 天地会为什么需要接头暗号呢？ 假设天地会赤火堂香主派人从京城前扬州将一封非常重要的密函交给青木堂香主韦小宝，我们可以将这件事抽象为下图： 这件事的核心是帮派成员-甲将重要密函交给帮派</p>
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
