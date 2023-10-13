<script setup lang="ts">
import { ref } from 'vue'

const newProblemList = ref([
  { id: 'P2553', title: '题目3', updateTime: '2023/10/9' },
  { id: 'P2552', title: '题目2', updateTime: '2023/10/9' },
  { id: 'P2551', title: '题目1', updateTime: '2023/10/9' }
])
</script>

<template>
  <div class="user-rank-card">
    <h1 style="color: blueviolet">题库更新</h1>

    <a-row class="ranking-table" :gutter="5">
      <a-col :span="4">题目ID</a-col>
      <a-col :span="12">标题</a-col>
      <a-col :span="8">更新时间</a-col>
    </a-row>

    <a-row
      class="ranking-table"
      :gutter="5"
      v-for="(problemItem, key) in newProblemList"
      :key="key"
    >
      <a-col :span="4">{{ problemItem.id }}</a-col>
      <a-col :span="12">{{ problemItem.title }}</a-col>
      <a-col :span="8">{{ problemItem.updateTime }}</a-col>
    </a-row>
  </div>
</template>

<style scoped>
.user-rank-card {
  width: 100%;
  height: calc(100% - 20px);

  padding: 10px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  border-radius: 10px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.ranking-table {
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;

  color: black;
}
</style>
