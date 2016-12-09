/**
 * 路由定义
 *
 * @date     2016-11-27
 * @author   曹宏涛<caohongtao@qianhaikeji.cn>
 */
import VueRouter from 'vue-router'

import Header from './views/layout/header'
import Body from './views/layout/body'
import Footer from './views/layout/footer'

import HomePage from './views/homePage'

import Category from './views/category'

import Good from './views/good/good'
import GoodType from './views/good/goodType'
import GoodBrandList from './views/good/goodBrand/list'

import Show from './views/show'

import OrderList from './views/order/orderList'
import OrderProfile from './views/order/orderProfile'
import ReturnOrderList from './views/order/returnOrderList'

import BaseConfig from './views/system/baseConfig'
import Admin from './views/system/admin'
import Role from './views/system/role'

import PromotionCoupon from './views/promotion/coupon'
import PromotionJointBuy from './views/promotion/jointBuy'
import PromotionSale from './views/promotion/sale'
import PromotionPoint from './views/promotion/point'

const routers = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        body: Body,
        footer: Footer
      },
      children: [
        {
          path: '',
          name: '首页',
          component: HomePage
        },
        {
          path: 'good',
          name: '商品列表',
          component: Good
        },
        {
          path: 'goodType',
          name: '商品类型列表',
          component: GoodType
        },
        {
          path: 'goodBrand',
          name: '商品品牌列表',
          component: GoodBrandList
        },
        {
          path: 'order',
          name: '订单列表',
          component: OrderList
        },
        {
          path: 'order/:rid',
          name: '订单详情',
          component: OrderProfile
        },
        {
          path: 'return_order',
          name: '退货单列表',
          component: ReturnOrderList
        },
        {
          path: 'return_order/:orderId',
          name: '退货单详情',
          component: null
        },
        {
          path: 'system/baseConfig',
          name: '系统管理-基本配置',
          component: BaseConfig
        },
        {
          path: 'system/admin',
          name: '系统管理-管理员列表',
          component: Admin
        },
        {
          path: 'system/role',
          name: '系统管理-权限管理',
          component: Role
        },
        {
          path: 'show',
          name: '动态列表',
          component: Show
        },
        {
          path: 'promotion/jointBuy',
          name: '促销管理-同购管理',
          component: PromotionJointBuy
        },
        {
          path: 'promotion/sale',
          name: '促销管理-销售管理',
          component: PromotionSale
        },
        {
          path: 'promotion/point',
          name: '促销管理-积分管理',
          component: PromotionPoint
        },
        {
          path: 'promotion/coupon',
          name: '促销管理-优惠券',
          component: PromotionCoupon
        },
        {
          path: 'category/:type',
          name: '分类列表',
          component: Category
        }
      ]
    }
  ]
})

export default routers
