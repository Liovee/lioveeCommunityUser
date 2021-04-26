<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>信息发布</el-breadcrumb-item>
      <el-breadcrumb-item>企业招聘</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
         <el-button  type="primary">添加文件</el-button>
         <el-button class="punlishB" type="primary">发布</el-button>
    </el-card>
  </div>
</template>
<script>
export default {
    data(){
        return{
            input:""
        }
        }
};
</script>
<style scoped>
.el-input{
    min-height:300px;
}
.el-input__inner{
    height:200px !important;
}
.punlishB{
    margin-left:1200px;
}
.el-button{
   /* margin-left:1200px;*/
    margin-top:20px;
}
</style>