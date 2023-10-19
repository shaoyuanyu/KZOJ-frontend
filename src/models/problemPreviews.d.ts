// 题目预览
export interface ProblemPreview {
	id: str
	title: str
	createTime: str
	tags: str[]
	submitCount: int
	acceptedCount: int
}

// 题目预览队列查询
export interface ProblemPreviewsQuery {
    // 排序依据
    sortedBy: str
    // 是否正序
    //orderASC: bool
    orderASC: str

    // 序列始终
    rangeStart: int
    rangeEnd: int
}
