<template>
  <div class="coupon-list">
    <el-row class="coupon-list-top-bar">
      <el-col :span="4"><el-input placeholder="请输入用户名称:"></el-input></el-col>
      <el-col :span="2" :offset="1"><el-button type="primary" @click="fetchByCond()">查询</el-button></el-col>
      <el-col :span="3" :offset="1"><el-button type="primary" @click="addAdmin">新建管理员</el-button></el-col>
    </el-row>
    <el-table :data="admin" v-loading="loading" stripe border class="coupon-list-table">
      <el-table-column prop="username" label="名称" width="200"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
      <el-table-column prop="phone" label="联系方式" width=""></el-table-column>
      <el-table-column inline-template label="操作">
        <div>
          <el-button size="mini" type="info">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteConfirm($index, row)">删除</el-button>
        </div>
      </el-table-column>
    </el-table>
    <pagination ref="pagination" :fetch-data="fetchAdmin" v-on:fetched="AdminFetched"></pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dataservice from '../../../services/dataService'
import pagination from '../../../components/pagination'
export default {
  components: {
    pagination
  },
  data () {
    return {
      loading: false,
      admin: []
    }
  },
  computed: {
    ...mapState({
      currentMode: state => state.listAndProfile.currentMode
    })
  },
  methods: {
    fetchAdmin: function (pageParams) {
      let queryParams = Object.assign({}, this.queryCond, pageParams)
      this.loading = true
      return dataservice.getAdminList(queryParams)
    },
    AdminFetched: function (admin) {
      this.admin = admin
      this.loading = false
    },
    fetchByCond: function () {
      this.$refs.pagination.reset()
    },
    deleteConfirm (index, row) {
      this.$confirm(`确认删除管理员 ${row.username} ?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteAdmin(index, row)
      }).catch(() => {
          // Do nothing
      })
    },
    addAdmin: function (row) {
      this.$store.commit('GO_TO_PROFILE', {
        mode: 'add',
        profileInParam: {}
      })
    },
    adminAdded: function (data) {
      this.admin.splice(0, 0, Object.assign({}, data))
    }
  },
  watch: {
    'currentMode': function (newVal, oldVal) {
      if (newVal === 'list' && oldVal === 'add') {
        // 说明从“新增页”返回“列表页”。
        this.adminAdded(this.$store.state.listAndProfile.profileOutParam)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coupon-list-top-bar .el-button {
  width: 100%;
}
.coupon-list-table{
  margin-top: 20px;
  width:100%;
}
.el-pagination {
  margin-top: 20px;
}
</style>
