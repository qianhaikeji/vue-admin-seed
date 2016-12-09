<template>
  <div id="app">
    <shell/>
  </div>
</template>

<script>
import shell from './views/layout/shell'
export default {
  components: {
    shell
  }
}
</script>

<style>
* {
  -webkit-text-size-adjust:none;
  padding:0px;
  margin:0px;
  font-family: "PingHei","Helvetica Neue","Helvetica","STHeitiSC-Light","Arial","Microsoft YaHei",sans-serif;
  outline:none;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  box-shadow: none;
  -webkit-box-shadow:none;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: white;
}

li {
  list-style: none;
}

.text-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.cursor-pointer {
  cursor: pointer;
}

.width-full {
  width: 100% !important;
}

.align-center {
  text-align: center;
}

.list-table {
  margin-top: 20px;
  width: 100%;
}

.el-pagination {
  margin-top: 20px;
}

/* profile page css
-------------------------*/
.profile-tab {
  margin-top: 20px;
  width: 100%;
}
</style>