import type { RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/index.vue')

const routeModuleList: Array<RouteRecordRaw> = [
  {
    path: '/apps',
    name: 'Apps',
    redirect: '/apps/index',
    component: Layout,
    meta: {
      title: 'Apps',
      icon: 'i-simple-icons:apps',
    },
    children: [
      {
        path: 'index',
        name: 'AppsPage',
        meta: {
          keepAlive: false,
        },
        component: () => import('@/views/apps/index.vue'),
      },
    ],
  },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   redirect: '/dashboard/index',
  //   component: Layout,
  //   meta: {
  //     title: '主控台',
  //     icon: 'i-simple-icons:atlassian',
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'DashboardPage',
  //       meta: {
  //         keepAlive: false,
  //       },
  //       component: () => import('@/views/dashboard/index.vue'),
  //     },
  //   ],
  // },
  // {
  //   path: '/message',
  //   name: 'Message',
  //   redirect: '/message/index',
  //   component: Layout,
  //   meta: {
  //     title: '图表',
  //     icon: 'i-simple-icons:soundcharts',
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'MessagePage',
  //       meta: {
  //         keepAlive: false,
  //       },
  //       component: () => import('@/views/message/index.vue'),
  //     },
  //   ],
  // },
  // {
  //   path: '/example',
  //   name: 'Example',
  //   redirect: '/example/index',
  //   component: Layout,
  //   meta: {
  //     title: '示例',
  //     icon: 'i-material-symbols:award-star',
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'ExamplePage',
  //       meta: {
  //         keepAlive: false,
  //       },
  //       component: () => import('@/views/example/index.vue'),
  //     },
  //   ],
  // },
  {
    path: '/mine',
    name: 'Mine',
    redirect: '/mine/index',
    component: Layout,
    meta: {
      title: 'Mine',
      icon: 'i-simple-icons:docsify',
    },
    children: [
      {
        path: 'index',
        name: 'MyPage',
        meta: {
          keepAlive: false,
          hiddenHeader: true,
        },
        component: () => import('@/views/mine/index.vue'),
      },
    ],
  },

  // mine innerPage
  {
    path: '/editUserInfo',
    name: 'EditUserInfo',
    meta: {
      title: '编辑个人信息',
      innerPage: true,
    },
    component: () => import('@/views/mine/EditUserInfo.vue'),
  },
  {
    path: '/editNickname',
    name: 'EditNickname',
    meta: {
      title: '修改昵称(该页面已缓存)',
      innerPage: true,
      keepAlive: true,
    },
    component: () => import('@/views/mine/EditNickname.vue'),
  },
  {
    path: '/editSign',
    name: 'EditSign',
    meta: {
      title: '修改签名',
      innerPage: true,
    },
    component: () => import('@/views/mine/EditSign.vue'),
  },
  {
    path: '/accountSetting',
    name: 'AccountSetting',
    meta: {
      title: '账号与安全',
      innerPage: true,
    },
    component: () => import('@/views/mine/AccountSetting.vue'),
  },
  {
    path: '/changePassword',
    name: 'ChangePassword',
    meta: {
      title: '修改登录密码',
      innerPage: true,
    },
    component: () => import('@/views/mine/ChangePassword.vue'),
  },
  {
    path: '/themeSetting',
    name: 'ThemeSetting',
    meta: {
      title: '主题设置',
      innerPage: true,
    },
    component: () => import('@/views/mine/ThemeSetting.vue'),
  },
]

export default routeModuleList
