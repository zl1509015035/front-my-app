<template>

  <el-row>
    <!--    左侧-->
    <el-col :span="8">
      <!--  个人信息模块    -->
      <el-card class="box-card">
        <div class="user">
          <img src="../assets/images/user.png" alt="">
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2021-07-19</span></p>
          <p>上次登录地点:<span>武汉</span></p>
        </div>

      </el-card>


      <!--  购买列表信息      -->

      <el-card>
        <el-table
            :data="tableData"
            style="width: 100%">

<!--          <el-table-column prop="name" label="品牌"></el-table-column>-->
<!--          <el-table-column prop="todayBuy" label="今日购买"></el-table-column>-->
<!--          <el-table-column prop="monthBuy" label="本月购买"></el-table-column>-->
<!--          <el-table-column prop="totalBuy" label="总购买"></el-table-column>-->

          <el-table-column v-for="(val,key) in tableLabel" :prop="key" :label="val"/>


        </el-table>
      </el-card>
    </el-col>
    <!--    右侧-->
    <el-col :span="16">
      <div class="grid-content bg-purple-light"></div>
    </el-col>

  </el-row>


</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: 'vivo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '苹果',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '小米',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '三星',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '魅族',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        }
      ],
      tableLabel:{
        name:'品牌',
        todayBuy:'今日购买',
        monthBuy:'本月购买',
        totalBuy:'总购买'
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    }
  }
}

</script>

<style lang="less" scoped>
.user {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;

  img {
    margin-right: 40px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .userInfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }

    .access {
      color: #999999;
    }
  }
}

.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;

    span {
      color: #666666;
      margin-left: 60px;
    }
  }
}

</style>