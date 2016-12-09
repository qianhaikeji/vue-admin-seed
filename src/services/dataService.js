/**
 * 公共模块，请注意书写规范。
 * 1.在最下方导出你所需要的函数。不同模块之间请用空行分隔，并在初始位置写注释标明归属于哪个模块（如动态，统计，规则）。
 * 2.函数定义的顺序请与模块导出时一致，方便管理。不同函数之间请保留一个空行。
 * 3.函数命名以此规则命名：操作类型(get，add，modify，delete) + 路由(如‘stats/user’则拼为‘StatsUser’)。
 *    get方法获取的是列表，则最末尾添加List。比如获取单条动态为”getShow”，获取动态列表则为“getShowList”
 *
 * @date     2016-11-27
 * @author   曹宏涛<caohongtao@qianhaikeji.cn>
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import config from '../config'
import { Notification } from 'element-ui'

Vue.use(VueResource)
Vue.http.options.root = config.server
Vue.http.interceptors.push((request, next) => {
  // continue to next interceptor
  next((response) => {
    // modify response
    if (response.status === 400) {
      Notification.error({
        title: '错误',
        message: response.body.message
      })
    }
  })
})

function getSku (skuId) {
  return Vue.resource('skus/' + skuId).get()
}

function modifySku (skuId, sku) {
  return Vue.resource('skus/' + skuId).update(sku)
}

function modifySkuAlbums (skuId, albums) {
  return Vue.resource(`skus/${skuId}/albums`).update(albums)
}

function deleteSkuAlbum (skuId, albumId) {
  return Vue.resource(`skus/${skuId}/albums/${albumId}`).remove()
}

function getSkuBrandList (params) {
  return Vue.resource('sku/brands').get(params)
}

function addSkuBrand (params) {
  return Vue.resource('sku/brands').save(params)
}

function deleteSkuBrand (params) {
  return Vue.resource('sku/brands/' + params.id).remove()
}

function addGood (good) {
  return Vue.resource('goods').save(good)
}

function getGoodList (params) {
  return Vue.resource('goods').get(params)
}

function addGoodsType (goodsType) {
  return Vue.resource('goodsTypes').save(goodsType)
}

function deleteGoodsType ({id}) {
  return Vue.resource('goodsTypes/' + id).remove()
}

function getGoodsTypeList () {
  return Vue.resource('goodsTypes').get()
}

function addGoodsTypeAttr (typeId, attr) {
  return Vue.resource(`goodsTypes/${typeId}/attrs`).save(attr)
}

function modifyGoodsTypeAttr (typeId, attrId, attr) {
  return Vue.resource(`goodsTypes/${typeId}/attrs/${attrId}`).update(attr)
}

function deleteGoodsTypeAttr (typeId, attrId) {
  return Vue.resource(`goodsTypes/${typeId}/attrs/${attrId}`).remove()
}

function getGoodsTypeAttrList (typeId, params) {
  return Vue.resource(`goodsTypes/${typeId}/attrs`).get(params)
}

function modifyGoodsExtends (goodId, extendsInfo) {
  return Vue.resource(`goods/${goodId}/extends`).update(extendsInfo)
}

function getReturnOrdersList (params) {
  return Vue.resource('returnOrders').get(params)
}

function addCategory (category) {
  return Vue.resource(`categorys`).save(category)
}

function deleteCategory (id) {
  return Vue.resource(`categorys/${id}`).remove()
}

function modifyCategory (id, category) {
  return Vue.resource(`categorys/${id}`).update(category)
}

function getCategoryList (type, parentId) {
  return Vue.resource(`categorys`).get(Object.assign({}, {type: type, parentId: parentId}))
}

function getShowList (params) {
  return Vue.resource('showes').get(params)
}

function getShow (id) {
  return Vue.resource('showes/' + id).get()
}

function addShow (show) {
  return Vue.resource('showes').save(show)
}

function modifyShow (id, show) {
  return Vue.resource('showes/' + id).update(show)
}

function deleteShow (id) {
  return Vue.resource('showes/' + id).remove()
}

function deleteShowAlbum () {

}

function getSkuCommentList (skuId, params) {
  return Vue.resource(`skus/${skuId}/comments`).get(params)
}

function getShowCommentList (params) {
  params = Object.assign({}, {type: 1}, params)
  return Vue.resource('comments').get(params)
}

function addShowComment () {

}

function deleteComment (id) {
  return Vue.resource(`comments/${id}`).remove()
}

function getSettings () {
  return Vue.resource('settings').get()
}

function modifySettings (settings) {
  return Vue.resource('settings').update(settings)
}

function getAdminList (params) {
  return Vue.resource('admin/users').get(params)
}

function postAdmin (admin) {
  return Vue.resource('admin/users').save(admin)
}

function deleteAdmin ({id}) {
  return Vue.resource('admin/users/' + id).remove()
}

function getPermList (params) {
  return Vue.resource('admin/roles/1/perms').get(params)
}

function getStatsUser () {
  return Vue.resource('stats/user').get()
}

function getStatsShow () {
  return Vue.resource('stats/show').get()
}

function getStatsSaleGoods () {
  return Vue.resource('stats/sale/goods').get()
}

function getStatsSaleDesign () {
  return Vue.resource('stats/sale/design').get()
}

function getRuleJointBuyList () {
  return Vue.resource('rule/jointBuy').get()
}

function addRuleJointBuy (rule) {
  return Vue.resource('rule/jointBuy').save(rule)
}

function deleteRuleJointBuy (rule) {
  return Vue.resource('rule/jointBuy/' + rule.id).remove()
}

function getRuleSale () {
  return Vue.resource('rule/sale').get()
}

function modifyRuleSale (rule) {
  return Vue.resource('rule/sale').update(rule)
}

function getRulePoint () {
  return Vue.resource('rule/point').get()
}

function modifyRulePoint (rule) {
  return Vue.resource('rule/point').update(rule)
}

function postCoupon (coupon) {
  return Vue.resource('coupons').save(coupon)
}

function getCouponList (params) {
  return Vue.resource('coupons').get(params)
}

export default {
  // sku
  getSku,
  modifySku,
  modifySkuAlbums,
  deleteSkuAlbum,
  getSkuBrandList,
  addSkuBrand,
  deleteSkuBrand,

  // 系统
  getSettings,
  modifySettings,
  getAdminList,
  postAdmin,
  deleteAdmin,
  getPermList,

  // 商品
  addGood,
  getGoodList,
  addGoodsType,
  deleteGoodsType,
  getGoodsTypeList,
  addGoodsTypeAttr,
  modifyGoodsTypeAttr,
  deleteGoodsTypeAttr,
  getGoodsTypeAttrList,
  modifyGoodsExtends,

  // 订单
  getReturnOrdersList,

  // 分类
  addCategory,
  deleteCategory,
  modifyCategory,
  getCategoryList,

  // 动态
  getShowList,
  getShow,
  addShow,
  modifyShow,
  deleteShow,
  deleteShowAlbum,

  // 评论
  getSkuCommentList,
  getShowCommentList,
  addShowComment,
  deleteComment,

  // 统计
  getStatsUser,
  getStatsShow,
  getStatsSaleGoods,
  getStatsSaleDesign,

  // 规则
  getRuleJointBuyList,
  addRuleJointBuy,
  deleteRuleJointBuy,
  getRuleSale,
  modifyRuleSale,
  getRulePoint,
  modifyRulePoint,

  // 优惠券
  postCoupon,
  getCouponList
}
