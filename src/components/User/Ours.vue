<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>个人信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div>姓名 性别 年龄 家庭住址 电话号码 身份证号</div>
      <div class="marginB">
        <el-row :gutter="20">
          <el-col :span="12"
            ><div class="grid-content bg-purple">姓名:</div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple">性别:</div></el-col
          >
        </el-row>
      </div>
      <div class="marginB">
        <el-row :gutter="20">
          <el-col :span="12"
            ><div class="grid-content bg-purple">电话号码:</div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple">身份证号:</div></el-col
          >
        </el-row>
      </div>
      <div class="marginB">
        <el-row :gutter="20">
          <el-col :span="12"
            ><div class="grid-content bg-purple">年龄:</div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple">家庭住址:</div></el-col
          >
        </el-row>
      </div>
       <div class="marginB">
        <el-row :gutter="20">
          <el-col :span="12"
            ><div class="grid-content bg-purple">余额:</div></el-col
          >
          
        </el-row>
      </div>
      <el-button @click="addDialogVisible = true" type="primary"
        >修改</el-button
      >
    </el-card>
    <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="50%">
      <!-- 内容主体区域 -->
      <el-form
        :model="addForm"
        :rules="addFormRules"
        ref="addFormRef"
        label-width="70px"
      >
        <el-form-item label="姓名" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="password">
          <el-radio v-model="addForm.radio" label="1">boy</el-radio>
          <el-radio v-model="addForm.radio" label="2">girl</el-radio>
        </el-form-item>
        <el-form-item label="电话号码" >
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" >
          <el-input v-model="addForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="年龄" >
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="家庭住址">
          <el-input></el-input>
        </el-form-item>
        <!-- 底部区域 -->
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addDialogVisible = false"
            >确 定</el-button
          >
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addDialogVisible: false,
      addForm: {
        username: "",
        password: "",
        email: "",
        mobile: "",
        radio:"1"
      },
      addFormRules: {
        username: [
          {
            min: 3,
            max: 10,
            message: "用户名在3~10个字符之间",
            trigger: "blur",
          },
        ],
        password: [
          {
            min: 8,
            max: 12,
            message: "用户名在8~12个字符之间",
            trigger: "blur",
          },
        ]
      },
    };
  },
};
</script>
<style scoped>
.marginB {
  margin-bottom: 50px;
}
.el-form-item__label{
    width:85px !important;
}
</style>