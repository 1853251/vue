import {createRouter, createWebHistory} from 'vue-router'
import Layout from "../layout/Layout";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store/index'
const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    meta: {title: '登录账号',roles:['admin','user'],hide:false,requireAuth: true},
    component: () => import('views/login/Login')
  },
  {
    path: '/register',
    name: 'register',
    meta: {title: '注册账号',roles:'user',hide:false,requireAuth: true},
    component: () => import('views/register/Register')
  },
  {
    path: '/resetPass',
    name: 'resetPass',
    meta: {title: '找回密码',roles:['admin','user'],hide:false,requireAuth: true},
    component: () => import('views/reset/resetPSW')
  },
  {
    path:'/main',
    redirect: '/home',
    icon:'el-icon-s-home',
    meta:{title:'工作台',roles:['admin','user'],hide:false, requireAuth:true},
    component:Layout,
    children:[
      {
        path:'/home',
        name: "工作台",
        icon: "el-icon-s-home",
        meta: {title: "工作台", roles:'admin',hide:false,requireAuth: true},
        component: () => import('@/views/Home.vue')
      }
    ],
  },
  {
    path: '/user',
    component:Layout,
    name:'用户管理',
    icon:'el-icon-s-custom',
    meta:{title:"用户管理",roles:'admin',hide:false,requireAuth: true},
    children: [
      {
        path: '/tenantManager',
        name:'租客管理',
        icon:'el-icon-s-shop',
        component:() => import('@/views/user/tenantManager'),
        meta:{title:"租客管理",roles:'admin',hide:false,requireAuth: true},
      },
      {
        path: '/landlordManager',
        name:'房东管理',
        icon:'el-icon-user-solid',
        component:() => import('@/views/user/landlordManager'),
        meta:{title:"房东管理",roles:'admin',hide:false,requireAuth: true},
      },
    ]
  },
  {
    path: '/room',
    component:Layout,
    name:'房源管理',
    icon:'el-icon-office-building',
    meta:{title:"房源管理",roles:'admin',hide:false,requireAuth: true},
    children: [
      {
        path: '/roomManager',
        name:'房源管理',
        icon:'el-icon-office-building',
        component:() => import('@/views/room/roomManager'),
        meta:{title:"房源管理",roles:'admin',hide:false,requireAuth: true},
      }
    ]
  },
  {
    path: '/message1',
    component:Layout,
    name:'管理员消息管理',
    icon:'el-icon-message',
    meta:{title:"消息管理",roles:'admin',hide:false,requireAuth: true},
    children: [
      {
        path: '/inbox1',
        name:'管理员收件箱',
        icon:'el-icon-message',
        component:() => import('@/views/message/inbox'),
        meta:{title:"收件箱",roles:'admin',hide:false,requireAuth: true},
      },
      {
        path: '/outbox1',
        name:'管理员发件箱',
        icon:'el-icon-s-promotion',
        component:() => import('@/views/message/outbox'),
        meta:{title:"发件箱",roles:'admin',hide:false,requireAuth: true},
      },
    ]
  },
  {
    path: '/account2',
    component:Layout,
    name:'用户账号管理',
    icon:'el-icon-s-tools',
    meta:{title:"账号管理",roles:'user',hide:false,requireAuth: true},
    children: [
      {
        path: '/account2/accountManager2',
        name:'用户账号管理',
        icon:'el-icon-s-tools',
        component:() => import('@/secviews/account/accountManager'),
        meta:{title:"账号管理",roles:'user',hide:false,requireAuth: true},
      }
    ]
  },
  {
    path: '/message2',
    component:Layout,
    name:'用户消息管理',
    icon:'el-icon-message',
    meta:{title:"消息管理",roles:'users',hide:false,requireAuth: true},
    children: [
      {
        path: '/inbox2',
        name:'用户收件箱',
        icon:'el-icon-message',
        component:() => import('@/secviews/message/inbox'),
        meta:{title:"收件箱",roles:'user',hide:false,requireAuth: true},
      },
      {
        path: '/outbox2',
        name:'用户发件箱',
        icon:'el-icon-s-promotion',
        component:() => import('@/secviews/message/outbox'),
        meta:{title:"发件箱",roles:'user',hide:false,requireAuth: true},
      },
    ]
  },
  {
    path: '/myCollection',
    component:Layout,
    name:'我的收藏',
    icon:'el-icon-shopping-cart-2',
    meta:{title:"我的收藏",roles:'user',hide:false,requireAuth: true},
    children: [
      {
        path: '/myCollection',
        name:'我的收藏',
        icon:'el-icon-shopping-cart-2',
        component:() => import('@/secviews/myCollection/myCollection'),
        meta:{title:"我的收藏",roles:'user',hide:false,requireAuth: true},
      }
    ]
  },
  {
    path: '/myOrder',
    component:Layout,
    name:'我的订单',
    icon:'el-icon-notebook-2',
    meta:{title:"我的订单",roles:'user',hide:false,requireAuth: true},
    children: [
      {
        path: '/myOrder',
        name:'我的订单',
        icon:'el-icon-notebook-2',
        component:() => import('@/secviews/myOrder/myOrder'),
        meta:{title:"我的订单",roles:'user',hide:false,requireAuth: true},
      },
      {
        path: 'show/:id',
        icon:'el-icon-s-order',
        name: '订单详情',
        component: () => import(/* webpackChunkName: "order" */ '@/secviews/myOrder/show'),
        meta: { title: '订单详情',roles:'user',hide:true },
      }
    ]
  },
  {
    path: '/uploadListing',
    component:Layout,
    name:'上传房源',
    icon:'el-icon-upload2',
    meta:{title:"上传房源",roles:'user',hide:false,requireAuth: true},
    children: [
      {
        path: '/uploadListing',
        name:'上传房源',
        icon:'el-icon-upload2',
        component:() => import('@/secviews/uploadListing/uploadListing'),
        meta:{title:"上传房源",roles:'user',hide:false,requireAuth: true},
      },
      {
        path: '/singleRoomApply',
        name:'单间上传',
        icon:'el-icon-upload2',
        component:() => import('@/secviews/uploadListing/singleRoomApply'),
        meta:{title:"单间上传",roles:'user',hide:true,requireAuth: true},
      },
      {
        path: '/hotelSubmit',
        name:'单间确认',
        icon:'el-icon-finished',
        component:() => import('@/secviews/uploadListing/singleRoomSubmit'),
        meta:{title:"单间确认",roles:'user',hide:true,requireAuth: true},
      },
      {
        path: '/hotelMultiApply',
        name:'套件上传',
        icon:'el-icon-upload2',
        component:() => import('@/secviews/uploadListing/multiRoomApply'),
        meta:{title:"套件上传",roles:'user',hide:true,requireAuth: true},
      },
      {
        path: '/hotelMultiSubmit',
        name:'套件确认',
        icon:'el-icon-finished',
        component:() => import('@/secviews/uploadListing/multiRoomSubmit'),
        meta:{title:"套件确认",roles:'user',hide:true,requireAuth: true},
      }


    ]
  },
  {
    path: '/verified',
    component:Layout,
    name:'实名认证',
    icon:'el-icon-user',
    meta:{title:"实名认证",roles:'user',hide:false,requireAuth: true},
    children: [
      {
        path: '/verified',
        name:'实名认证',
        icon:'el-icon-user',
        component:() => import('@/secviews/verified/verified'),
        meta:{title:"实名认证",roles:'user',hide:false,requireAuth: true},
      }
    ]
  },
  {
    path: '/viewListing',
    component:Layout,
    name:'查看房源',
    icon:'el-icon-search',
    meta:{title:"查看房源",roles:'user',hide:false,requireAuth: true},
    children: [
      {
        path: '/viewListing',
        name:'查看房源',
        icon:'el-icon-search',
        component:() => import('@/secviews/viewListing/viewListing'),
        meta:{title:"查看房源",roles:'user',hide:false,requireAuth: true},
      },
      {
        path: '/singleRoom',
        name:'房源详情',
        icon:'el-icon-search',
        component:() => import('@/secviews/viewListing/singleRoom'),
        meta:{title:"房源详情",roles:'user',hide:true,requireAuth: true},
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
