<!--循环数组取出所有数据-->
    <div v-for="(item,index) in SurveyList" :key="item.id">
      <!-- 根据type判断每个问题是单选还是多选还是其他 -->
      <!--单选判断-->
      <div v-if="'radio'===item.type">
        <!--问题序号用index+1-->
        <p>{{index + 1}}、{{item.problem}}</p>

        <el-radio-group v-model="radio" v-for="(value,key) in item.options" :key="key">
          <!--绑定chenge事件获取选中值-->
          <el-radio :label="value" @change="ChangeData">{{key + 1}}、{{value}}</el-radio>
        </el-radio-group>
      </div>
    </div>