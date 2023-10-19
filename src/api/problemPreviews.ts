import $axios from '@/utils/axios'

import type { ProblemPreviewsQuery } from '@/models/problemPreviews'

export function queryProblemPreviews() {
    return $axios.get('/getPreviews', )
}