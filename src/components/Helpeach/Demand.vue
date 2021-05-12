<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>请求帮助</el-breadcrumb-item>
      <el-breadcrumb-item>请求帮助</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div>
        <textarea
          cols="30"
          rows="10"
          placeholder="请输入请求帮助具体内容"
        ></textarea>
      </div>
      <div>
        <el-tag>卫生</el-tag>
        <el-tag>绿化</el-tag>
        <el-tag>治安</el-tag>
        <el-tag>文化</el-tag>
        <el-tag>医疗</el-tag>
        <el-tag>社交</el-tag>
        <el-tag>民主</el-tag>
        <el-tag>教育</el-tag>
        <el-tag>生活</el-tag>
      </div>
      <div>
        <el-button
          type="primary"
          @click="drawer = true"
          style="margin-left: 16px"
          >指定委托人</el-button
        >
        <el-button type="primary">提交</el-button>
      </div>
      <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
        <el-input placeholder="根据名字的模糊查询" clearable>
        </el-input>
        <div>
          用户名 性别 年龄 <el-checkbox v-model="checked">选择</el-checkbox>
        </div>
      </el-drawer>
    </el-card>
    <el-card>
      <div>我请求的帮助</div>
      <div>约定时间 请求时间  帮助人名字 帮助人电话<el-button type="primary">添加评价</el-button></div>
    </el-card>
    <el-card>
      <div>我给予的帮助</div>
       <div>约定时间 请求人名字 请求人电话 请求人的评价</div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      userlist: [],
      checked: false
    };
  },
};
</script>
<style scoped>
.el-input__inner {
  height: 200px !important;
}
.punlishB {
  margin-left: 1200px;
}
.el-button {
  /* margin-left:1200px;*/
  margin-top: 20px;
}
</style>