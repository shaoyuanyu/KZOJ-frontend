import { AuthEnum } from '@/common/access/authEnum'
import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    requiredAuth?: AuthEnum
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'nav',
    redirect: '/index',
    component: () => import('@/layouts/BasicLayout.vue'),
    children: [
      {
        path: '/index',
        meta: { title: '主页' },
        component: () => import('@/views/IndexView.vue')
      },
      {
        path: '/problem/all',
        meta: { title: '题库' },
        component: () => import('@/views/ProblemAllView.vue')
      },
      {
        path: '/problem/manage',
        meta: { title: '题目管理', requiredAuth: AuthEnum.USER },
        component: () => import('@/views/ProblemManageView.vue')
      }
    ]
  },
  {
    path: '/login',
    meta: { title: '登录' },
    component: () => import('@/views/LoginView.vue')
  }
]

export default routes
