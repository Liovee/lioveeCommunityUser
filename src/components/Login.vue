<template>
  <div class="main">
    <div class="login_container">
      <div class="login_box">
        <!--登录表单区域-->
        <div>请登录！</div>
        <el-form
          ref="loginFormRef"
          :rules="loginFormRules"
          class="login_form"
          label-width="0px"
          :model="loginForm"
        >
          <!--用户名 -->
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              prefix-icon="el-icon-user-solid"
            ></el-input>
          </el-form-item>
          <!--密码 -->
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              prefix-icon="el-icon-s-goods"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="login" type="primary">登录</el-button>
            <el-button @click="resetLogin" type="primary">重置</el-button>
            <!-- <el-button @click="VLogin" type="primary">游客登陆</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在3-10个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在6-12个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLogin: function () {
      this.$refs.loginFormRef.resetFields();
    },
    login: function () {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) {
          return false;
        }
        const { data: res } = await axios.post("login", this.loginForm);
        if (res.meta.status !== 200) {
          return this.$message.error("登陆失败");
        }
        this.$message.success("登陆成功");

        window.sessionStorage.setItem("token", res.data.token);
        this.$router.push("/home")
        //    console.log(data)
        // axios.post('/login',this.loginForm)
        // .then(function(resolve){
        //     console.log(resolve)
        // })
        // .then(function(reject){
        //     console.log(reject)
        // })
      });
    },
    VLogin: function () {
      this.$router.push('/About')
    }
  }
}
</script>
<style scoped>
.main {
  background-image: url(../assets/intro-bg.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_container {
  height: 360px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
}
.login_box {
  width: 400px;
  height: 280px;
  background-color: #fff;
  border-radius: 3px;
  opacity: 0.8;
}
.login_form {
  margin-top: 40px;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>

