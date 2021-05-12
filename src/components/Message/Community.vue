<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>信息查询</el-breadcrumb-item>
      <el-breadcrumb-item>社区信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div class="title">通知消息</div>
      <div class="message">
        <div class="avatar">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <div class="detail">
          <div>管理员名称</div>
          <div>content信息 sadfafadfada</div>
        </div>
        <div>
          <div>相关文件</div>
          <div>文件名</div>
          <el-button type="primary">下载</el-button>
        </div>
      </div>
    </el-card>
    
    <el-card>
      <div class="title">租房</div>
      <div class="message">
        <div class="avatar">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <div>用户名称</div>
        &nbsp;&nbsp;&nbsp;
        <div>地址</div>
        &nbsp;&nbsp;&nbsp;
        <div>月租</div>
        &nbsp;&nbsp;&nbsp;
        <div>电话号码(用户点击意向了解才会显示租房者电话号码)</div>
        &nbsp;&nbsp;&nbsp;
        <div>租房时间/月</div>
        &nbsp;&nbsp;&nbsp;
         <div>查看房子图片</div>
        <div>
          <el-button type="primary" @click="changeW">{{ want }}</el-button>
        </div>
      </div>
    </el-card>
    <el-card>
      <div class="title">帮助请求</div>
      <div class="message">
        <div class="avatar">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <div>用户名称</div>
        &nbsp;&nbsp;&nbsp;
        <div>地址(用户点击提供帮助才会显示租房者地址)</div>
        &nbsp;&nbsp;&nbsp;
        <div>请求具体内容</div>
        &nbsp;&nbsp;&nbsp;
        <div>电话号码(用户点击提供帮助才会显示租房者电话号码)</div>
        &nbsp;&nbsp;&nbsp;
        <div>请求约定时间</div>
        &nbsp;&nbsp;&nbsp;
        <div>
          <el-button type="primary" @click="changeW">提供帮助</el-button>
        </div>
      </div>
    </el-card>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>这是一段信息</span>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="toMakesure"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible:false,
      want: "意向了解",
    };
  },
  methods: {
    changeW() {
      if (this.want === "确认租房") {
        this.dialogVisible = true
      }
      this.want = "确认租房";
    },
    toMakesure(){
      this.want="已租房",
      this.dialogVisible = false
    }
  },
};
</script>
<style scoped>
.el-input {
  min-height: 300px;
}
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
.detail {
  width: 300px;
}
</style>