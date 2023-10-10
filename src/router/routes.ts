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
    name: 'nav' /*导航栏*/,
    redirect: '/home',
    component: () => import('@/layouts/BasicLayout.vue'),
    children: [
      {
        path: '/home',
        meta: { title: '主页' },
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/problems/all',
        meta: { title: '题库' },
        component: () => import('@/views/ProblemAllView.vue')
      },
      {
        path: '/train',
        meta: { title: '训练' },
        component: () => import('@/views/NotFoundView.vue')
      },
      {
        path: '/competition',
        meta: { title: '比赛' },
        component: () => import('@/views/NotFoundView.vue')
      },
      {
        path: '/submission/record',
        meta: { title: '提交记录' /*requiredAuth: AuthEnum.USER*/ },
        component: () => import('@/views/SubmissionRecordView.vue')
      },
      {
        path: '/ranking',
        meta: { title: '排名' },
        component: () => import('@/views/NotFoundView.vue')
      },
      {
        path: '/problems/manage',
        meta: { title: '题目管理' /*requiredAuth: AuthEnum.USER*/ },
        component: () => import('@/views/ProblemManageView.vue')
      },
      {
        path: '/about',
        meta: { title: '关于' },
        component: () => import('@/views/AboutView.vue')
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
        path: '/problem/test',
        meta: { title: '浏览题目-test' },
        component: () => import('@/views/ProblemView.vue'),
        props: () => ({ id: 0 })
      },
      {
        path: '/problem/add',
        meta: { title: '创建题目' /*requiredAuth: AuthEnum.USER*/ },
        component: () => import('@/views/ProblemEditView.vue'),
        props: () => ({ type: 'add' })
      },
      {
        path: '/problem/edit/:id(\\d+)',
        meta: { title: '编辑题目' /*requiredAuth: AuthEnum.USER*/ },
        component: () => import('@/views/ProblemEditView.vue'),
        props: (route) => ({ type: 'edit', id: route.params.id })
      },
      {
        path: '/submission/:id(\\d+)',
        meta: { title: '提交详情' /*requiredAuth: AuthEnum.USER*/ },
        component: () => import('@/views/SubmissionView.vue'),
        props: (route) => ({ id: route.params.id })
      },
      {
        path: '/submission/test',
        meta: { title: '提交详情-test' },
        component: () => import('@/views/SubmissionView.vue'),
        props: () => ({ id: 0 })
      }
    ]
  },
  {
    path: '/login',
    meta: { title: '登录' },
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/',
    component: () => import('@/layouts/BasicLayout.vue'),
    children: [
      {
        path: '/404',
        meta: { title: 'Error' },
        component: () => import('@/views/NotFoundView.vue')
      }
    ]
  }
]

export default routes
