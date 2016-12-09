<template>
  <div class="role-list">
    <el-row class="role-list-top-bar">
      <el-col :span="4"><el-input placeholder="请输入角色名称"></el-input></el-col>
      <el-col :span="1" :offset="1"><el-button type="primary" @click="fetchByCond()">查询</el-button></el-col>
      <el-col :span="4" :offset="1"><el-button type="primary" @click="addRole">添加角色</el-button></el-col>
    </el-row>
    <el-table :data="role" v-loading="loading" stripe border class="role-list-table">
      <el-table-column prop="name" label="角色名称" width="300"></el-table-column>
      <el-table-column inline-template label="操作">
        <div>
          <el-button size="mini" type="info">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteConfirm($index, row)">删除</el-button>
        </div>
      </el-table-column>
    </el-table>
    <pagination ref="pagination" :fetch-data="fetchPerm" v-on:fetched="PermFetched" class="admin-role-pagination"></pagination>
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
      role: []
    }
  },
  computed: {
    ...mapState({
      currentMode: state => state.listAndProfile.currentMode
    })
  },
  methods: {
    fetchPerm: function (pageParams) {
      let queryParams = Object.assign({}, this.queryCond, pageParams)
      this.loading = true
      return dataservice.getPermList(queryParams)
    },
    PermFetched: function (role) {
      this.role = role
      this.loading = false
    },
    fetchByCond: function () {
      this.$refs.pagination.reset()
    },
    addRole: function (row) {
      this.$store.commit('GO_TO_PROFILE', {
        mode: 'add',
        profileInParam: {}
      })
    },
    RoleAdded: function (data) {
      this.admin.splice(0, 0, Object.assign({}, data))
    }
  },
  watch: {
    'currentMode': function (newVal, oldVal) {
      if (newVal === 'list' && oldVal === 'add') {
        // 说明从"新建页"返回"列表页"。
        this.RoldAdded(this.$store.state.listAndProfile.profileOutParam)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.role-list {
  color: #42b983;
}
.role-list-table {
  width:50%;
  margin-top:20px;
}
.admin-role-pagination {
  width:50%;
}
</style>
