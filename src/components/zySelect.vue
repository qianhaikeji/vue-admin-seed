<!--
 * select组件
 * 
 * el-select 没法赋初值。如对于[{label:'选项一', value:'1'}]这种option，如果附一个初值1，则组件会显示1，而不是'选项一'。
 * 此组件包裹el-select。为了能让 select 初始化时，显示label的值，此组件将所有option转为为string类型(如['选项一', '选项二'])。label和value都直接用此string类型的option。
 * 此组件对外使用时，仍然支持object类型的option。所有的运算、转换，都在本组件内完成。
 * 自定义输入组件的原理，可参考：https://vuefe.cn/v2/guide/components.html#使用自定义事件的表单输入组件
 *
 * @date     2016-12-04
 * @author   曹宏涛<caohongtao@qianhaikeji.cn>
-->
<template>
  <div >
    <el-select ref="input" v-bind:value="simpleOptionSelected" v-on:input="updateValue" placeholder="请选择">
      <el-option v-for="item in simpleOptions" :label="item" :value="item"></el-option>
    </el-select>
  <div>
</template>

<script>
export default {
  props: ['value', 'options', 'asLabel', 'asValue'],
  computed: {
    // 将通过prop传入的对象 options 转为 纯字符串的形式。如[{label:'选项一', value:'1'}, ...] 转为 ['选项一', '选项二']
    simpleOptions: function () {
      return this.options.map(option => option[this.asLabel])
    },
    // model->view :  每当外部的model更新后，this.value会发生变化。此变化传递给simpleOptionSelected，最终导致内部的el-select更新，select的已选项发生变化。
    simpleOptionSelected: function () {
      let selectedItem = this.getOptionAsValue(this.value)
      return selectedItem && selectedItem[this.asLabel] || '请选择'
    }
  },
  methods: {
    //  view->model :  每当内部的el-select更新数据更新后，通过emit一个iuput事件，让外部的model更新。参数需要转化。
    updateValue: function (option) {
      if (option) {
        let selectedItem = this.getOptionAsLabel(option)
        this.$emit('input', selectedItem[this.asValue])
      }
    },
    getOptionAsLabel (label) {
      return this.options.find(option => option[this.asLabel] === label)
    },
    getOptionAsValue (value) {
      return this.options.find(option => option[this.asValue] === value)
    }
  }
}
</script>

<style scoped>
</style>
