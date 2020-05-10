<template>
  <div>
    <h1>问卷调查</h1>
    <!--循环数组取出所有数据-->
    <div v-for="(item,index) in SurveyList" :key="item.id">
      <!-- 根据type判断每个问题是单选还是多选还是其他 -->
      <!--单选判断-->
      <div v-if="'radio'===item.type">
        <!--问题序号用index+1-->
        <p>{{index + 1}}、{{item.problem}}</p>

        <el-radio-group v-model="item.radio" v-for="(value,key) in item.options" :key="key">
          <!--绑定chenge事件获取选中值-->
          <el-radio :label="key+1" @change="ChangeData(item.problem,key+1)">{{key + 1}}、{{value}}</el-radio>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
var SurveyList = [
  {
    id: 1,
    radio: this.radio1,
    problem: "本次分享内容和计划主题是否相符",
    type: "radio",
    options: ["完全相符", "部分相符", "小部分相符", "完全不相符"]
  },
  {
    id: 2,
    radio: this.radio2,
    problem: "本次分享内容的层次是否易于学习和理解",
    type: "radio",
    options: ["太过理论和深奥", "理论实践相结合，刚刚好", "太浅显"]
  },
  {
    id: 3,
    radio: this.radio3,
    problem: "知识分享培训希望多久一次",
    type: "select",
    options: ["一周", "两周", "三周", "一个月"]
  },
  {
    id: 4,
    radio: this.radio4,
    problem: "您愿意在什么时间段参加技术分享",
    type: "select",
    options: ["工作日上午", "工作日下午", "任何时间"]
  }
];
export default {
  name: "survey",
  data() {                                           
    return {
      radio1: "",
      radio2: "",
      radio3: "",
      radio4: "",
      SurveyList: SurveyList
    };
  },
  methods: {
    ChangeData(a, b) {
      console.log(a);
      console.log(b);
    }
  }
};
</script>

<style scoped>
</style>
