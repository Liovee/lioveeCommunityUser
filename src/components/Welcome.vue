<template>
    <div>
        <h3>欢迎访问Liovee小区系统</h3>
        <el-calendar v-model="value">
</el-calendar>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>
