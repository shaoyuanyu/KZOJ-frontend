import { AuthEnum } from '@/common/access/authEnum'
import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    requiredAuth?: AuthEnum
  }
}

const routes: RouteRecordRaw[] = []

export default routes
