<template>
  <el-form ref="form" :model="adminform" label-width="80px" class="admin-new-form">
    <el-form-item label="分类帐号">
      <el-input v-model="adminform.email"></el-input>
    </el-form-item>

    <el-form-item label="手机">
     <el-input v-model="adminform.phone"></el-input> 
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="adminform.password"></el-input>
    </el-form-item>

    <el-form-item label="姓名">
      <el-input v-model="adminform.username"></el-input>
    </el-form-item>

    <el-form-item label="角色" v-model="adminform.roleId">
      <el-col :span="6">
        <el-select  placeholder="1">
          <el-option value="2"></el-option>
          <el-option value="3"></el-option>
        </el-select>
      </el-col>
    </el-form-item>

    <el-row type="flex" justify="space-around" class="operations">
      <el-col :span="8"><el-button type="primary" @click="createAdmin(adminform)" class="width-full">立即创建</el-button></el-col>
      <el-col :span="6"><el-button @click="backToList" class="width-full">取消</el-button></el-col>
    </el-row>
  </el-form>
</template>

<script>
import dataservice from 'services/dataService'
export default {
  data () {
    return {
      adminform: {
        email: '',
        username: '',
        phone: '',
        password: '',
        roleId: ''
      }
    }
  },
  methods: {
    createAdmin: function (adminform) {
      let admin = Object.assign({}, adminform)

      dataservice.postAdmin(admin).then(data => {
        this.$notify({
          title: '成功',
          message: `添加管理员《${data.body.title}》成功`,
          type: 'success'
        })
        this.backToList(data.body)
      })
    },
    backToList: function (adminAdded) {
      this.$store.commit('BACK_TO_LIST', {
        mode: 'list',
        profileOutParam: adminAdded
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin-new-form {
  width: 30%;
  margin-top: 20px;
}
</style>
