export interface RespStr {
  code: number
  data: string
  message: string
}

export interface RespObj<T> {
  code: number
  data: T
  message: string
}

export interface RespList<T> {
  code: number
  data: T[]
  message: string
}

export interface RespPage<T> {
  code: number
  data: {
    records: T[]
    current: number
    size: number
    total: number
    pages: number
  }
  message: string
}
