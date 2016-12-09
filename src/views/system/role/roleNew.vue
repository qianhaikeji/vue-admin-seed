<template>
  <div>
  <el-button @click="backToList" type="primary" class="back-button">返回列表</el-button>
    <el-form ref="form" :model="form" label-width="80px" class="role-new-form">
      <el-form-item label="角色名称">
        <el-col :span="6">
         <el-input placeholder="财务人员" v-model="form.role"></el-input>   
       </el-col>
     </el-form-item>
     <el-form-item label="角色描述">
      <el-col :span="10">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="拥有权限" label-width="80px" inline=true>
   </el-form-item>
   <el-form-item>
    <el-button type="primary" size="large">确认</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        role: '',
        description: ''
      }
    }
  },
  methods: {
    backToList: function (roleAdded) {
      this.$store.commit('BACK_TO_LIST', {
        mode: 'list',
        profileOutParam: roleAdded
      })
    }
  }
}
</script>

<style scoped>
 .back-button {
  margin:0 0 20px 10px;
 } 
 .role-new-top-label {
  display:block;
 }
 el-checkbox {
  width:20%;
 }
</style>