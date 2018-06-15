import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./import-' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/list',
      component: _import('home/index'),
      desc: '首页',
      children: [
        {
          path: '/list',
          name: 'list',
          desc: '列表',
          component: _import('content/list')
        },
        {
          path: '/details/:id',
          name: 'details',
          desc: '详情',
          component: _import('content/details')
        }
      ]
    },
    {
      path: '/eidtor',
      name: 'eidtor',
      redirect: '/eidtor/list',
      component: _import('eidtor/index'),
      desc: '后台',
      children: [
        {
          path: '/eidtor/list',
          name: 'list',
          desc: '列表',
          component: _import('eidtor/list'),
          meta: {
            title: '数据列表'
          }
        },
        {
          path: '/eidtor/insert/:id',
          name: 'insert',
          desc: '添加数据',
          component: _import('eidtor/insert'),
          meta: {
            title: '添加数据'
          }
        }
      ]
    }
  ]
})
