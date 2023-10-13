import type { RespObj, RespPage } from '@/models/response'
import type { Submission, SubmissionAdd, SubmissionQuery } from '@/models/submission'
import $axios from '@/utils/axios'

// 提交
// /submission/submit
export function doSubmit(submissionAdd: SubmissionAdd) {
  return $axios.post<RespObj<Submission>>('/submission/submit', submissionAdd)
}

//
// /submission/{id}
export function querySubmissionVOById(id: string) {
  return $axios.get<RespObj<Submission>>('/submission/' + id)
}

//
// /submission/page
export function queryRecordVOWithPagination(submissionQuery: SubmissionQuery) {
  return $axios.get<RespPage<Submission>>('/submission/page', { params: submissionQuery })
}

// 根据id查询提交状态
// /submission/status/{id}
export function queryStatusById(id: string) {
  return $axios.get<RespObj<Submission>>('/submission/status/' + id)
}
