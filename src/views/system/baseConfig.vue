<template>
<div class="system-base">
  <h2 class="">联系方式</h2>
  <div class="system-base-input">
    <el-input type="text" placeholder="400-3941-229">
      <template slot="prepend" v-model="settings.hotline">客服电话:</template>
    </el-input>
    <el-input type="text">
      <template slot="prepend" v-model="settings.corpEmail">公司邮箱:</template>
    </el-input>
    <el-input type="text">
      <template slot="prepend" v-model="settings.corpAddress">公司地址:</template>
    </el-input>
  </div>
  <div class="align-left">
    <el-button type="primary" @click="updateSettings" size="large">确定</el-button>
  </div>
</div>
</template>

<script>
import dataservice from 'services/dataService'
export default {
  components: {
  },
  data () {
    return {
      settings: {}
    }
  },
  computed: {
  },
  methods: {
    getSettings: function () {
      dataservice.getSettings().then(settings => {
        this.settings = settings.body
      })
    },
    updateSettings: function () {
      dataservice.modifySettings(this.settings).then(settings => {
        this.$notify({
          title: '成功',
          message: '修改设置成功',
          type: 'success'
        })
      })
    }
  },
  mounted: function () {
    this.getSettings()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.system-base h2 {
  font-size:18px;
  border-bottom:1px solid #ddd;
  width:80%;
  padding-bottom:10px;
}
.system-base-input .el-input{
  width:600px;
  margin-top:20px;
}
.system-base .el-button {
  margin-top: 40px;
}
</style>
