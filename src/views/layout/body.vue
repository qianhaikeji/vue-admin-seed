<template>
  <div class="zy-content">
      <div class="zy-side-nav">
        <el-menu router class="el-menu-vertical-demo">
          <el-submenu v-for="nav in navs" :index="nav.title">
            <template slot="title">{{ nav.title }}</template>
            <el-menu-item v-for="subnav in nav.subnavs" :index="subnav.router">{{ subnav.title }}</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>

      <div class="zy-main">
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        {
          title: '系统管理',
          subnavs: [
            {title: '基本配置', router: '/system/baseConfig'},
            {title: '管理员列表', router: '/system/admin'},
            {title: '权限管理', router: '/system/role'},
            {title: '协议管理', router: '/'}
          ]
        }
      ]
    }
  }
}
</script>

<style>
.zy-content {
  min-height: 500px;
}
.zy-side-nav {
  position: fixed;
  top: 40px;
  left: 0;
  bottom: 0;
  width: 200px;
  background: #eff2f7;
  overflow: scroll;
}
.zy-side-nav .el-menu {
  width: 100%;
}
.zy-main {
  margin-top: 40px;
  margin-left: 200px;
  padding: 20px;
}
</style>
