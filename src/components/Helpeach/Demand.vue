<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>请求对接</el-breadcrumb-item>
      <el-breadcrumb-item>对接查看</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
        <el-table :data="userlist" border stripe>
        <el-table-column type="index"> </el-table-column>
        <el-table-column label="请求人" prop="username"> </el-table-column>
        <el-table-column label="请求电话号码" prop="email"> </el-table-column>
        <el-table-column label="帮扶者" prop="mobile"> </el-table-column>
        <el-table-column label="帮扶电话号码" prop="username"> </el-table-column>
        <el-table-column label="帮扶类型" prop="username"> </el-table-column>
        <el-table-column label="状态" prop="username"> </el-table-column>
        </el-table>
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