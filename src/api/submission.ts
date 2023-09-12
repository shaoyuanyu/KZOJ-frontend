import type { RespObj, RespPage } from '@/models/response'
import type { Submission, SubmissionAdd, SubmissionQuery } from '@/models/submission'
import $axios from '@/utils/axios'

export function doSubmit(submissionAdd: SubmissionAdd) {
  return $axios.post<RespObj<Submission>>('/submission', submissionAdd)
}

export function querySubmissionVOById(id: string) {
  return $axios.get<RespObj<Submission>>('/submission/' + id)
}

export function queryRecordVOWithPagination(submissionQuery: SubmissionQuery) {
  return $axios.get<RespPage<Submission>>('/submission/page', { params: submissionQuery })
}

export function queryStatusById(id: string) {
  return $axios.get<RespObj<Submission>>('/submission/status/' + id)
}
