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
        path: '/submission/mine',
        meta: { title: '提交记录', requiredAuth: AuthEnum.USER },
        component: () => import('@/views/SubmissionMineView.vue')
      },
      {
        path: '/problem/manage',
        meta: { title: '题目管理', requiredAuth: AuthEnum.USER },
        component: () => import('@/views/ProblemManageView.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/BasicLayout.vue'),
    children: [
      {
        path: '/problem/:id(\\d+)',
        meta: { title: '浏览题目' },
        component: () => import('@/views/ProblemView.vue'),
        props: (route) => ({ id: route.params.id })
      },
      {
        path: '/problem/add',
        meta: { title: '创建题目', requiredAuth: AuthEnum.USER },
        component: () => import('@/views/ProblemEditView.vue'),
        props: () => ({ type: 'add' })
      },
      {
        path: '/problem/edit/:id(\\d+)',
        meta: { title: '编辑题目', requiredAuth: AuthEnum.USER },
        component: () => import('@/views/ProblemEditView.vue'),
        props: (route) => ({ type: 'edit', id: route.params.id })
      },
      {
        path: '/submission/:id(\\d+)',
        meta: { title: '提交详情', requiredAuth: AuthEnum.USER },
        component: () => import('@/views/SubmissionView.vue'),
        props: (route) => ({ id: route.params.id })
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
