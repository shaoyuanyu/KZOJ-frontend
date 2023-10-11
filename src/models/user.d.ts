import type AuthEnum from '@/common/access/authEnum'

export interface User {
  // ID
  id: string

  // 用户名
  userName: string

  // 头像URL
  avatarUrl: string

  // 邮箱
  email: string

  // 权限
  auth: AuthEnum | number
}

export interface UserLoginSuccess {
  user: User
  token: string
}
