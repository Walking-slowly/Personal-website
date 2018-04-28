import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import list from '@/components/list/listPage'
import sss from '@/components/sss/sssPage'

//详情
import details from '@/components/details/detailsPage'

//编辑
import ueditor from '@/components/ueditor/ueditorPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/list',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:'/list',
          name:list,
          component:list
        },
        {
          path:'/sss',
          name:sss,
          component:sss
        },
        {
          path:'/details',
          name:details,
          component:details
        }
      ]
      
    },
    {
      path:'/ueditor',
      name:ueditor,
      component:ueditor
    }
    
  ]
})
