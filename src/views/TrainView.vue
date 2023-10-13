<template>
  <div>
    <!-- 导入 SearchCard 组件 -->
    <SearchCard />

    <div style="margin-top: 20px"></div>

    <!-- 导入 ProblemListCard 组件 -->
    <ProblemListCard />
  </div>
</template>

<script>
import SearchCard from '@/components/train/SearchCard.vue'
import ProblemListCard from '@/components/train/ProblemListCard.vue'

export default {
  name: 'TrainView',
  components: {
    SearchCard,
    ProblemListCard
  },
  data() {
    return {
      // 需要从后端拿数据
      // 测试数据
      problems: [
        {
          id: 1,
          title: '题目标题 1',
          permission: 'public',
          category: 'data-structures',
          numProblems: 5,
          author: 'John Doe'
        }
      ]
    }
  }
}
</script>
