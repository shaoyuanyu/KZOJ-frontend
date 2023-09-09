import type { RespObj, RespStr } from '@/models/response'
import type { User, UserLoginSuccess } from '@/models/user'
import $axios from '@/utils/axios'

export function sendVerificationCode(phone: string) {
  return $axios.post<RespStr>('/user/code', { phone })
}

export function loginByCode(phone: string, code: string) {
  return $axios.post<RespObj<UserLoginSuccess>>('/user/login/byCode', { phone, code })
}

export function queryMyAccount() {
  return $axios.get<RespObj<User>>('/user/account/mine')
}

export function updateAccountInfo(user: User) {
  return $axios.post<RespStr>('/user/account', user)
}

export function updateAccountAvatar(file: File) {
  const formData = new FormData()
  formData.append('file', file)
  return $axios.put<RespStr>('/user/account/avatar', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    transformRequest: [() => formData]
  })
}

export function queryAccountById(id: string) {
  return $axios.get<RespObj<User>>('/user/account/' + id)
}
