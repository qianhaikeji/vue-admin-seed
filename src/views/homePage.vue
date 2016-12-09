<!--
 * 主页
 *
 * @date     2016-12-04
 * @author   曹宏涛<caohongtao@qianhaikeji.cn>
-->
<template>
  <div class="home-page">
    <el-card class="box-card">
      <div slot="header">
        <span>订单统计</span>
      </div>
      <el-row class="table">
        <template v-for="(v, k) in statsUser">
          <el-col :span="6" class="grid-content">{{ k }}</el-col>
          <el-col :span="6" class="grid-content">{{ v }}</el-col>
        </template>
      </el-row>
    </el-card>

    <el-card class="box-card">
      <div slot="header">
        <span>动态统计</span>
      </div>
      <el-row class="table">
        <template v-for="(v, k) in statsShow">
          <el-col :span="6" class="grid-content">{{ k }}</el-col>
          <el-col :span="6" class="grid-content">{{ v }}</el-col>
        </template>
      </el-row>
    </el-card>

    <el-card class="box-card">
      <div slot="header">
        <span>会员统计</span>
      </div>
      <el-row class="table">
        <template v-for="(v, k) in statsSaleGoods">
          <el-col :span="6" class="grid-content">{{ k }}</el-col>
          <el-col :span="6" class="grid-content">{{ v }}</el-col>
        </template>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import dataservice from 'services/dataService'

export default {
  data () {
    return {
      stats: {
        user: {},
        show: {},
        saleGoods: {},
        saleDesign: {}
      }
    }
  },
  computed: {
    // TODO: 根据this.stats填充。
    statsUser: function () {
      return {
        '待付款订单': 0,
        '待确认订单': 0,
        '待发货订单': 0,
        '待收货订单': 0,
        '待退货订单': 0
      }
    },
    statsShow: function () {
      return {
        '待审核动态': 0,
        '申请精选': 0
      }
    },
    statsSaleGoods: function () {
      return {
        '今日会员数': 0,
        '今日订单': 0
      }
    },
    statsSaleDesign: function () {
      return {
        '待付款订单': 0,
        '待确认订单': 0,
        '待发货订单': 0,
        '待收货订单': 0,
        '待退货订单': 0
      }
    }
  },
  methods: {
    getStats: function () {
      dataservice.getStatsUser().then(stats => {
        this.stats.user = stats.body
      })
      dataservice.getStatsShow().then(stats => {
        this.stats.show = stats.body
      })
      dataservice.getStatsSaleGoods().then(stats => {
        this.stats.saleGoods = stats.body
      })
      dataservice.getStatsSaleDesign().then(stats => {
        this.stats.saleDesign = stats.body
      })
    }
  },
  mounted: function () {
    this.getStats()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
  width: 650px;
}
.home-page .el-card {
  margin-bottom: 20px;
}
.home-page .grid-content {
  border: solid black;
  border-width: 0px 1px 1px 0px;
  padding: 10px;
}
.home-page .table{
  border: solid black;
  border-width: 1px 0px 0px 1px;
}
</style>
