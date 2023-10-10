import type AuthEnum from '@/common/access/authEnum'

export interface User {
  // ID
  id: string

  // 用户名
  username: string

  // 头像URL
  avatarUrl: string

  // 手机
  phone: string

  // 邮箱
  email: string

  // 权限
  auth: AuthEnum | number
}

export interface UserLoginSuccess {
  user: User
  token: string
}
