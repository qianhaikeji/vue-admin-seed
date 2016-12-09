<!-- 
 * @author miracle_dan<denghan@qianhaikeji.cn> 
-->
<template>
  <div class="profile-return"><el-button @click="backToList" type="primary">返回列表</el-button></div>
</template>

<script>
export default {
  props: ['outParams'],
  methods: {
    backToList: function () {
      this.$store.commit('BACK_TO_LIST', {
        mode: 'list',
        profileOutParam: this.outParams
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-return {
  padding-bottom: 5px;
  border-bottom: 1px solid #f0f0f0;
}
</style>
