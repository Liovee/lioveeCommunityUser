<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>信息查询</el-breadcrumb-item>
      <el-breadcrumb-item>企业招聘</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div class="title">企业招聘</div>
      <div class="message">
        <div class="avatar">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <div class="detail">
          <div>管理员名称</div>
          <div>公司名称</div>
          <div>content信息 sadfafadfada</div>
        </div>
        <div>
          <div>相关文件</div>
          <div>文件名</div>
          <el-button type="primary">下载</el-button>
        </div>
      </div>
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
.title {
  margin: 0 auto;
  width: 100%;
  margin-bottom: 15px;
}
.message {
  width: 500px;
  display: flex;
}
.avatar {
  height: 100%;
}
</style>