import type { Problem, ProblemQuery } from '@/models/problem'
import type { RespObj, RespPage, RespStr } from '@/models/response'
import $axios from '@/utils/axios'

// 新建题目
// /problem/add
export function addProblem(problem: Problem) {
  return $axios.post<RespStr>('/problem/add', problem)
}

// 根据id删除题目
// /problem/delete/{id}
export function deleteProblemById(id: string) {
  return $axios.delete<RespStr>('/problem/delete' + id)
}

// 编辑题目
// /problem/edit
export function editProblem(problem: Problem) {
  return $axios.put<RespStr>('/problem/edit', problem)
}

//
// /problem/{id}
export function queryProblemVOById(id: string) {
  //return $axios.get<RespObj<Problem>>('/problem/' + id)
  return $axios.get<Problem>('/problem/getProblem/' + id)
}

//
// /problem/page
export function queryRecordVOWithPagination(problemQuery: ProblemQuery) {
  return $axios.get<RespPage<Problem>>('/problem/page', { params: problemQuery })
}

//
// /problem/mine/{id}
export function queryMyProblemById(id: string) {
  return $axios.get<RespObj<Problem>>('/problem/mine/' + id)
}
