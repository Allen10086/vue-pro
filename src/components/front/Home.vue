<template>
  <el-main>
    <!--轮播图-->
    <el-carousel direction="vertical" :interval="5000">
      <el-carousel-item v-for="carousel in carousel_array" :key="carousel.carousel_id">
        <!-- <h3>{{ item }}</h3> -->
        <div class="item">
          <a target="_blank" :href="carousel.carousel_href">
            <img :src="carousel.carousel_src" />
            <span class="carousel-caption">{{carousel.carousel_caption}}</span>
            <span class="carousel-bg"></span>
          </a>
        </div>
      </el-carousel-item>
    </el-carousel>
    <!--分割线-->
    <!-- <el-divider content-position="left" >文章内容</el-divider> -->
    <!--文章内容布局 <el-row :v-for>-->

    <el-row v-for="article in article_array" :key="article.article_id">
      <el-col>
        <!--文章正文-->
        <article class="excerpt excerpt-one" style="background-color: #ffffff;">
          <header>
            <!--文章分类-->
            <a
              class="label label-important"
              :href="article.article_class_url"
              :title="article.article_class"
            >
              {{article.article_class}}
              <i class="label-arrow"></i>
            </a>

            <!--文章标题-->
            <h2>
              <a
                target="_blank"
                :href="article.article_detail_url"
                :title="article.article_title"
              >{{article.article_title}}</a>
            </h2>
          </header>
          <!--文章发布时间-->
          <span
            class="text-muted time el-icon-s-custom"
          >&nbsp;&nbsp;{{article.article_author}}&nbsp;&nbsp;发布于&nbsp;&nbsp;</span>
          <span class="text-muted time el-icon-time">&nbsp;&nbsp;{{article.article_release_time}}</span>
          <!--文章封面-->
          <p class="focus">
            <a target="_blank" :href="article.article_detail_url" class="thumbnail">
              <span>
                <img :src="article.article_focus_url" class="thumb" style="display: inline;" />
              </span>
            </a>
          </p>
          <!--文章预览-->
          <p class="note">{{article.article_content}}</p>
          <p class="text-muted views">
            <span class="post-views">阅读({{article.article_views}})</span>
            <span class="post-comments">评论({{article.article_comments}})</span>
            <span class="post-tags">
              标签：
              <a
                :href="tag.tag_class_url"
                rel="tag"
                data-original-title
                title
                v-for="tag in article.article_tags"
                :key="tag.tag_id"
              >{{tag.tag}}&nbsp;&nbsp;/&nbsp;&nbsp;</a>
            </span>
          </p>
        </article>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
// 轮播图
var carousel_array = [
  {
    carousel_src: "https://lz12code.oss-cn-beijing.aliyuncs.com/myblog/3c09d3fb-6ead-4d8a-aa6c-783178a1f14d.jpg",
    carousel_id: "1",
    carousel_caption: "时间就是金钱",
    carousel_href: "https://mp.weixin.qq.com/s/CiUGkKNKYsQyVPtsRv6z4Q"
  },
  {
    carousel_src: "https://lz12code.oss-cn-beijing.aliyuncs.com/myblog/64c33d0f-8a30-4706-9e70-28e82e2c66e6.jpg",
    carousel_id: "2",
    carousel_caption: "风光壁纸-缤纷植物图",
    carousel_href: "https://mp.weixin.qq.com/s/CiUGkKNKYsQyVPtsRv6z4Q"
  },
  {
    carousel_src: "https://lz12code.oss-cn-beijing.aliyuncs.com/myblog/da46bf2f-284f-4ebe-8158-98fb3a6c7e6a.jpg",
    carousel_id: "3",
    carousel_caption: "做个有良知的人",
    carousel_href: "https://mp.weixin.qq.com/s/CiUGkKNKYsQyVPtsRv6z4Q"
  },
  {
    carousel_src: "https://lz12code.oss-cn-beijing.aliyuncs.com/myblog/da46bf2f-284f-4ebe-8158-98fb3a6c7e6a.jpg",
    carousel_id: "4",
    carousel_caption: "做个有良知的人",
    carousel_href: "https://mp.weixin.qq.com/s/CiUGkKNKYsQyVPtsRv6z4Q"
  }
];
// 文章列表
var article_array = [
  {
    article_id: "1",
    article_class: "博客全站导航",
    article_class_url: "https://www.cnblogs.com/songzhixue/",
    article_detail_url: "https://www.cnblogs.com/songzhixue/p/10717975.html",
    article_title: "GIT版本控制工具",
    article_release_time: "2020-05-30 14-22-09",
    article_author: "Lz12Code",
    article_focus_url:
      "http://images-1253193383.cos.ap-beijing.myqcloud.com/0bff613caa7d54275711ab7832afe02e.png",
    article_content:
      "Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。",
    article_views: "9999",
    article_comments: "8888",
    article_tags: [
      {
        tag_id: "1",
        tag: "Go",
        tag_class_url: "https://github.com/Lz12Code/go-blog"
      },
      {
        tag_id: "2",
        tag: "Python",
        tag_class_url: "https://www.cnblogs.com/songzhixue/"
      },
      {
        tag_id: "3",
        tag: "Linux",
        tag_class_url: "https://www.cnblogs.com/songzhixue/p/11145760.html"
      }
    ]
  },
  {
    article_id: "2",
    article_class: "博客管理系统",
    article_class_url: "https://www.cnblogs.com/songzhixue/",
    article_detail_url: "https://www.cnblogs.com/songzhixue/p/10717975.html",
    article_title: "博客管理系统",
    article_release_time: "2020-05-30 14-22-09",
    article_author: "Lz12Code",
    article_focus_url:
      "http://images-1253193383.cos.ap-beijing.myqcloud.com/0bff613caa7d54275711ab7832afe02e.png",
    article_content:
      "Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一Git 是一个开源的分布式版本控制系统Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一，用于敏捷高效地处理任何或小或大的项目。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。",
    article_views: "9999",
    article_comments: "8888",
    article_tags: [
      {
        tag_id: "1",
        tag: "Go",
        tag_class_url: "https://github.com/Lz12Code/go-blog"
      },
      {
        tag_id: "2",
        tag: "Python",
        tag_class_url: "https://www.cnblogs.com/songzhixue/"
      },
      {
        tag_id: "3",
        tag: "Linux",
        tag_class_url: "https://www.cnblogs.com/songzhixue/p/11145760.html"
      }
    ]
  }
];
export default {
  name: "home",
  data() {
    return {
      carousel_array: carousel_array,
      article_array: article_array
    };
  }
};
</script>

<style scoped>
/*当前页面CSS样式*/
/* @import "../assets/static/css/background_image.css"; */
@import "../../assets/static/css/home.css";
</style>
