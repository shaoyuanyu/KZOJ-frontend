import type { Problem, ProblemQuery } from '@/models/problem'
import type { RespObj, RespPage, RespStr } from '@/models/response'
import $axios from '@/utils/axios'

export function addProblem(problem: Problem) {
  return $axios.post<RespStr>('/problem', problem)
}

export function deleteProblemById(id: string) {
  return $axios.delete<RespStr>('/problem/' + id)
}

export function editProblem(problem: Problem) {
  return $axios.put<RespStr>('/problem', problem)
}

export function queryProblemVOById(id: string) {
  return $axios.get<RespObj<Problem>>('/problem/' + id)
}

export function queryRecordVOWithPagination(problemQuery: ProblemQuery) {
  return $axios.get<RespPage<Problem>>('/problem/page', { params: problemQuery })
}

export function queryMyProblemById(id: string) {
  return $axios.get<RespObj<Problem>>('/problem/mine/' + id)
}
