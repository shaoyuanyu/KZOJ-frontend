export interface ProblemPreview {
	id: str
	title: str
	createTime: str
	tags: str[]
	submitCount: int
	acceptedCount: int
}

// 题目队列查询
export interface ProblemPreviewsQuery {
    // 排序依据
    sortedBy: str
    // 是否正序
    orderASC: bool

    // 序列始终
    rangeStart: int
    rangeEnd: int

    // 题目列表
    problemPreviewList: ProblemPreview[]
}
