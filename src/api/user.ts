import type { RespObj, RespStr } from '@/models/response'
import type { User, UserLoginSuccess } from '@/models/user'
import $axios from '@/utils/axios'

// 发送验证码
// /user/code
export function sendVerificationCode(phone: string) {
  return $axios.post<RespStr>('/user/code', { phone })
}

// 验证码登录
// /user/login/byCode
export function loginByCode(phone: string, code: string) {
  return $axios.post<RespObj<UserLoginSuccess>>('/user/login/byCode', { phone, code })
}

// 获取账号信息
// /user/queryAccount
export function queryMyAccount() {
  return $axios.get<RespObj<User>>('/user/queryAccount')
}

// 更新账号信息
// /user/updateAccount
export function updateAccountInfo(user: User) {
  return $axios.post<RespStr>('/user/updateAccount', user)
}

// 更新头像
// /user/updateAvatar
export function updateAccountAvatar(file: File) {
  const formData = new FormData()
  formData.append('file', file)
  return $axios.put<RespStr>('/user/updateAvatar', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    transformRequest: [() => formData]
  })
}

// 通过id查询账号
// /user/account/
export function queryAccountById(id: string) {
  return $axios.get<RespObj<User>>('/user/account/' + id)
}
