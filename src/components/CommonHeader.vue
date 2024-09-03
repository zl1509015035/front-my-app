<template>

  <div class="header-container">
    <!--    左-->
    <div class="l-content">
      <el-button icon="el-icon-menu" size="mini"></el-button>
      <!-- 面包屑 -->
      <span class="text">首页</span>
    </div>

    <!--    右-->
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="../assets/images/user.png" alt="">
        </span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>

</template>


<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  //横轴
  justify-content: space-between;
  //纵轴
  align-items: center;

  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }

  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}


</style>