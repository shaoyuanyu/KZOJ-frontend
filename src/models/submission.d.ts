import type { Problem } from '@/models/problem'
import type { User } from '@/models/user'

export interface Submission {
  // ID
  id: string

  // 用户记录
  user: User

  // 题目记录
  problem: Problem

  // 编程语言
  lang: number

  // 提交代码
  code: string

  // 代码长度
  codeLength: number

  // 提交状态
  status: number

  // 用例评测结果
  caseJudgeResults: CaseJudgeResult[]

  // 提交时间
  createTime: string
}

export interface CaseJudgeResult {
  // 评测状态
  js: number

  // 执行用时 (ms)
  et: number

  // 消耗内存 (MB)
  cm: number

  // 用例输入
  ci: string

  // 期望输出
  eo: string

  // 实际输出
  ao: string

  // 报错信息
  em: string
}

export interface SubmissionAdd {
  // 题目 ID
  problemId: string

  // 编程语言
  lang: number

  // 提交代码
  code: string
}

export interface SubmissionQuery {
  // 当前页码
  current: number

  // 页面大小
  size: number

  // ID
  id: string

  // 用户 ID
  userId: string

  // 题目 ID
  problemId: string

  // 编程语言
  lang: number

  // 提交状态
  status: number
}
