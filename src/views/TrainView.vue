<template>
  <div>
    <!-- 导入 SearchCard 组件 -->
    <SearchCard />
    <div style="margin-top: 5px"></div>
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
  }
}
</script>
