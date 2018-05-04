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
    }
  ]
})
