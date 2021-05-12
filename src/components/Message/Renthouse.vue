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
        <el-form-item label="地址">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="月租">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="欲租时长">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input></el-input>
        </el-form-item>
        <!-- 底部区域 -->
        <input type="file" name="test" @change="popFileName" id="file" />
        <el-button class="punlishB" type="primary" @click="publish"
          >上传照片</el-button
        >
        <div>
        <el-button type="primary" @click="addDialogVisible = false"
          >发布</el-button
        >
        </div>
      </el-form>

      
    </el-card>
    <el-card>
      <div>我的租房信息</div>
      <div @click="isShow = !isShow"> 房间号 出租状态 租房者 租房者电话</div>
      <el-table :data="userList" border stripe v-if="true">
        <el-table-column type="index"> </el-table-column>
        <el-table-column label="房间地址址" prop="homeAddress">
        </el-table-column>
        <el-table-column label="意向人名字" prop="phoneNum"> </el-table-column>
        <el-table-column label="意向人电话" prop="remain"> </el-table-column>
        <!-- <el-table-column label="状态">
          <template slot-scope="scope"> -->
        <!-- {{ scope.row }}
            <el-switch
              v-model="scope.row.mg_state"
              @change="userStateChange(scope.row)"
            >
            </el-switch>
          </template>
        </el-table-column> -->
        <el-table-column label="操作（只有一个确定按钮 点击确定 拿到租金用户扣除租金跟押金 用户扣除租金跟押金）" width="180px">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click="handleModified(scope.$index)"
            ></el-button>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow:false,
      userlist: [],
      addDialogVisible: false,
    };
  },
  methods:{
    getFileName(path) {
      var pos1 = path.lastIndexOf("/");
      var pos2 = path.lastIndexOf("\\");
      var pos = Math.max(pos1, pos2);
      if (pos < 0) return path;
      else return path.substring(pos + 1);
    },
    popFileName() {
      var selectedFile = document.getElementById("file").files[0];
      var reader = new FileReader();
      reader.readAsText(selectedFile); 
      reader.onload = function () {
      };
      // var path = document.getElementById("file").value;
      // this.file_path = path
      
    },
  }
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