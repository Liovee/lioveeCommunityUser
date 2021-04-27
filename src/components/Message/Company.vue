<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>信息查询</el-breadcrumb-item>
      <el-breadcrumb-item>企业招聘</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
        <div class="title">通知消息</div>
         <div>管理员发布的消息的集合 包含发布人 公司名称 时间 具体内容 </div>
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
.title{
  margin: 0 auto;
}
</style>