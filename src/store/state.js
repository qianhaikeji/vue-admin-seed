/*
1.用作所有的“列表页”和“详情页”切换时的场景。使用vue的动态组件及keep-alive特性。保证进入详情页后，列表页的状态不丢失。
2.add 和 modify 由列表页 GO_TO_PROFILE 触发。触发后传入 profileInParam，作为详情页的初始数据。
3.list 由详情页的 BACK_TO_LIST 触发。触发后传出 profileOutParam，若详情页更新成功了，列表页可用来更新自己对应的视图。
*/
export const listAndProfile = {
  currentMode: 'list', // add(新增) modify(修改) list(返回列表)
  profileInParam: {},
  profileOutParam: {}
}
