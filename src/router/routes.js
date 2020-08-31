import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [{
  path: '/',
  redirect: {
    name: 'index'
  },
  component: layoutHeaderAside,
  children: [
    // -------------------------------------------------------------
    // 刷新页面 必须保留
    {
      path: 'refresh',
      name: 'refresh',
      hidden: true,
      component: _import('system/function/refresh')
    },
    // -------------------------------------------------------------
    // 页面重定向 必须保留
    {
      path: 'redirect/:route*',
      name: 'redirect',
      hidden: true,
      component: _import('system/function/redirect')
    },
    // -------------------------------------------------------------
    // -------------------------------------------------------------
    // -------------------------------------------------------------
    // -------------------------------------------------------------
    // -------------------------------------------------------------
    // -------------------------------------------------------------
    {
      path: 'index',
      name: 'index',
      meta: {
        auth: true
      },
      component: _import('system/index')
    },
    // -------------------------------------------------------------
    {
      path: 'project',
      name: 'project',
      meta: {
        title: '项目管理',
        auth: true
      },
      component: _import('resource/project')
    },
    // -------------------------------------------------------------
    // 编辑个人账户
    {
      path: 'account',
      name: 'account',
      meta: {
        title: '个人中心',
        auth: true
      },
      component: _import('account')
    }, {
      path: 'account/edit',
      name: 'account-edit',
      hidden: true,
      component: _import('account/edit.vue')
    }, {
      path: 'project/:projectId/product',
      name: 'project-product',
      hidden: true,
      meta: {
        title: '产品管理',
        auth: true
      },
      component: _import('resource/project/pages/product')
    }, {
      path: 'product/:productId/design',
      name: 'product-design',
      hidden: true,
      meta: {
        title: '产品设计',
        auth: true
      },
      component: _import('resource/project/pages/design')
    }, {
      path: 'product/:productId/detail',
      name: 'product-detail',
      hidden: true,
      meta: {
        title: '产品详情',
        auth: true
      },
      component: _import('resource/project/pages/product/detail')
    }, {
      path: 'project/:projectId/device',
      name: 'project-device',
      hidden: true,
      meta: {
        title: '设备管理',
        auth: true
      },
      component: _import('resource/project/pages/device')
    },
    // -=====================================================================
    {
      path: 'schedule',
      name: 'schedule',
      hidden: true,
      meta: {
        title: '调度任务',
        auth: true
      },
      component: _import('resource/schedule/pages/index')
    }, {
      path: 'cloudfunc',
      name: 'cloudfunc',
      hidden: true,
      meta: {
        title: '云端函数',
        auth: true
      },
      component: _import('resource/cloudfunc/pages/index')
    }, {
      path: 'rewriter',
      name: 'rewriter',
      hidden: true,
      meta: {
        title: '分发引擎',
        auth: true
      },
      component: _import('resource/rewriter_engine/pages/index')
    }, {
      path: 'product',
      name: 'product',
      hidden: true,
      meta: {
        title: '产品管理',
        auth: true
      },
      component: _import('resource/product/pages/index')
    }, {
      path: 'device',
      name: 'device',
      hidden: true,
      meta: {
        title: '设备管理',
        auth: true
      },
      component: _import('resource/device/pages/index')
    }
  ]
}]

/**
 * 在主框架之外显示
 */
const frameOut = [{ // 登录
  path: '/login',
  name: 'login',
  component: _import('system/login')
}]

/**
 * 错误页面
 */
const errorPage = [{
  path: '*',
  name: '404',
  component: _import('system/error/404')
}]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
