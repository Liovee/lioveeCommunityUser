<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>信息查询</el-breadcrumb-item>
      <el-breadcrumb-item>企业招聘</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      
        <!-- 内容主体区域 -->
        <el-form :model="addForm" ref="addFormRef" label-width="70px">
          <el-form-item label="联系人">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="房间号">
            <el-input></el-input>
          </el-form-item>
          <!-- 底部区域 -->
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addDialogVisible = false"
            >确 定</el-button
          >
        </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userlist: [],
      addDialogVisible: false,
      addForm: {
        name: "",
        phone: "",
        address: "",
      },
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