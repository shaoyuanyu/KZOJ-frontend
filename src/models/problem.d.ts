import type { User } from '@/models/user'

export interface Problem {
  // ID
  id: string

  // 创建者
  creator: User

  // 题目名称
  title: string

  // 题目描述
  content: string[]

  // 备注
  remark: string

  // 标签
  tags: string[]

  // 提交数
  submitCount: number

  // 通过数
  acceptedCount: number

  // 评测配置
  judgeConfig: JudgeConfig[]

  // 评测用例
  judgeCases: JudgeCase[]

  // 样例
  exampleCases: ExampleCase[]

  // 参考答案
  refAnswer: string

  // 创建时间
  createTime: string

  // 难度等级
  difficultLevel: string

  // 题目来源
	source: string

  // 输入描述
	inputDiscription: string

  // 输出描述
	outputDiscription: string
}

export interface JudgeConfig {
  // 语言
  language: string

  // 时间限制 (ms)
  timeLimit: number

  // 内存限制 (MB)
  memoryLimit: number
}

export interface JudgeCase {
  // 用例输入
  caseIn: string

  // 用例输出
  caseOut: string
}

export interface ExampleCase {
  // 用例输入
  caseIn: string

  // 用例输出
  caseOut: string
}

export interface ProblemQuery {
  // 当前页码
  current: number

  // 页面大小
  size: number

  // 排序字段
  sortBy: string

  // 是否正序
  sortOrderASC: boolean

  // ID
  id: string

  // 创建者 ID
  creatorId?: string

  // 题目名称
  title: string

  // 标签
  tag: string
}
