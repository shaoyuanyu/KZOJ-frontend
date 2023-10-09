<script setup lang="ts">
import { ref } from 'vue'

const rankList = ref([
  { key: '1', userName: '王书豪', score: 100 },
  { key: '2', userName: '书豪王', score: 90 },
  { key: '3', userName: '豪王书', score: 80 }
])
</script>

<template>
  <div class="user-rank-card">
    <h1 style="color: blueviolet">排行榜</h1>

    <a-row class="ranking-table" :gutter="5">
      <a-col :span="4">排名</a-col>
      <a-col :span="12">用户名</a-col>
      <a-col :span="8">分数</a-col>
    </a-row>

    <a-row class="ranking-table" :gutter="5" v-for="(rankItem, key) in rankList" :key="key">
      <a-col :span="4">{{ rankItem.key }}</a-col>
      <a-col :span="12">
        <a-avatar :size="28">{{ rankItem.userName[0] }}</a-avatar>
        {{ rankItem.userName }}
      </a-col>
      <a-col :span="8">{{ rankItem.score }}</a-col>
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
