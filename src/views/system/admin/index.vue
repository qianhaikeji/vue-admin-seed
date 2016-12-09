<!-- 使用vue的动态组件及keep-alive特性。保证进入详情页后，列表页的状态不丢失。-->
<template>
  <div>
    <keep-alive>
      <component :is="currentView">
        <!-- 组件在 vm.currentview 变化时改变！ -->
      </component>
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import adminList from './adminList'
import adminNew from './adminNew'
export default {
  data () {
    return {
      currentview: 'list'
    }
  },
  computed: {
    ...mapState({
      currentView: state => {
        return state.listAndProfile.currentMode === 'list' ? 'list' : 'edit'
      }
    })
  },
  components: {
    list: adminList,
    edit: adminNew
  },
  methods: {
  },
  mounted () {
    this.$store.commit('INIT_LIST_AND_PROFILE')
  }
}
</script>

<style scoped>
</style>
