import $axios from '@/utils/axios'

import type { ProblemPreview, ProblemPreviewsQuery } from '@/models/problemPreviews'

// 获取题目预览队列
export function queryProblemPreviews(problemPreviewsQuery: ProblemPreviewsQuery) {
    return $axios.post<ProblemPreview[]>('/problem/getPreviews', problemPreviewsQuery)
}
