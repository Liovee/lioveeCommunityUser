<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>意见反馈</el-breadcrumb-item>
      <el-breadcrumb-item>意见反馈</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
        <div>
          <textarea cols="30" rows="10" placeholder="请输入建议内容"></textarea>
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
        <el-button type="primary">提交</el-button>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
        userlist:[],
        
    };
  },
  methods:{
      
  },
  mounted() {
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