<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <el-row>-->
<!--      <el-button>默认按钮</el-button>-->
<!--      <el-button type="primary">主要按钮</el-button>-->
<!--      <el-button type="success">成功按钮</el-button>-->
<!--      <el-button type="info">信息按钮</el-button>-->
<!--      <el-button type="warning">警告按钮</el-button>-->
<!--      <el-button type="danger">危险按钮</el-button>-->
<!--    </el-row>-->

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less">

hetm,body,h3,p{
  margin:0;
  padding:0;
}
</style>
