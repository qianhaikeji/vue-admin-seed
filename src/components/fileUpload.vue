<!--
 * 文件上传组件
 *
 * @date     2016-11-30
 * @author   曹宏涛<caohongtao@qianhaikeji.cn>
-->
<template>
  <el-upload :action="uploadUrl" type="drag" :multiple="false" :on-success="onSuccess" :show-upload-list="false" class="file-upload">
    <div v-show="previewUrl" class="preview" :style="{'background-image': 'url('+ previewUrl +')'}"></div>
    <i :class="iconClass" class="upload-icon"></i>
    <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
  </el-upload>
</template>

<script>
import config from '../config'
export default {
  props: ['previewUrl', 'icon'],
  data () {
    return {
      uploadUrl: config.server + '/upload/image'
    }
  },
  computed: {
    iconClass: function () {
      let defaultIcon = 'el-icon-upload'

      let iconClass = {}
      if (this.icon) {
        iconClass[this.icon] = true
      } else {
        iconClass[defaultIcon] = true
      }
      return iconClass
    }
  },
  methods: {
    onSuccess: function (file) {
      this.$emit('uploaded', file)
    }
  }
}
</script>

<style>
.file-upload {
  width: 100% !important;
  height: 200px;
}
.file-upload .el-dragger {
  width: 100% !important;
  height: 100%;
}
.file-upload .preview {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.file-upload .upload-icon {
  font-size: 67px;
  color: #99a9bf;
  margin: 60px 0 20px;
  line-height: 50px;
}
</style>
