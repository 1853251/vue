import {createRouter, createWebHistory} from 'vue-router'
import Layout from "../layout/Layout";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store/index'
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/login',
    name: 'login',
    meta: {title: '登录账号',requireAuth: true},
    component: () => import('views/login/Login')
  },
  {
    path: '/register',
    name: 'register',
    meta: {title: '注册账号',requireAuth: true},
    component: () => import('views/register/Register')
  },
  {
    path: '/resetPass',
    name: 'resetPass',
    meta: {title: '找回密码',requireAuth: true},
    component: () => import('views/reset/resetPSW')
  },
  {
    path:'/main',
    redirect: '/home',
    icon:'el-icon-s-home',
    meta:{title:'工作台', requireAuth:true},
    component:Layout,
    children:[
      {
        path:'/home',
        name: "工作台",
        icon: "el-icon-s-home",
        meta: {title: "工作台", requireAuth: true},
        component: () => import('@/views/Home.vue')
      }
    ],
  },
  {
    path: '/user',
    component:Layout,
    name:'用户管理',
    icon:'el-icon-s-custom',
    meta:{title:"用户管理",requireAuth: true},
    children: [
      {
        path: '/tenantManager',
        name:'租客管理',
        icon:'el-icon-s-shop',
        component:() => import('@/views/user/tenantManager'),
        meta:{title:"租客管理",requireAuth: true},
      },
      {
        path: '/landlordManager',
        name:'房东管理',
        icon:'el-icon-user-solid',
        component:() => import('@/views/user/landlordManager'),
        meta:{title:"房东管理",requireAuth: true},
      },
    ]
  },
  {
    path: '/room',
    component:Layout,
    name:'房源管理',
    icon:'el-icon-office-building',
    meta:{title:"房源管理",requireAuth: true},
    children: [
      {
        path: '/roomManager',
        name:'房源管理',
        icon:'el-icon-office-building',
        component:() => import('@/views/room/roomManager'),
        meta:{title:"房源管理",requireAuth: true},
      }
    ]
  },
  {
    path: '/comment',
    component:Layout,
    name:'评价管理',
    icon:'el-icon-document-checked',
    meta:{title:"评价管理",requireAuth: true},
    children: [
      {
        path: '/commentManager',
        name:'评价管理',
        icon:'el-icon-document-checked',
        component:() => import('@/views/comment/commentManager'),
        meta:{title:"评价管理",requireAuth: true},
      }
    ]
  },
  {
    path: '/message',
    component:Layout,
    name:'消息管理',
    icon:'el-icon-chat-dot-round',
    meta:{title:"消息管理",requireAuth: true},
    children: [
      {
        path: '/messageManager',
        name:'消息管理',
        icon:'el-icon-chat-dot-round',
        component:() => import('@/views/message/messageManager'),
        meta:{title:"消息管理",requireAuth: true},
      }
    ]
  }
]
const router = createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
})

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 600, showSpinner: false })

// 设置title
router.beforeEach((to, from, next) => {
  // 启动进度条
  NProgress.start()

  // 设置头部
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = "测试中心"
  }
  if(to.path === '/login' || to.path === '/register'){
    store.commit('setToken','')
    store.commit('setUserName','')
    next()
  }else{
    next()
  }
})

router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})


export default router