<script setup lang="ts">
import WelcomeCard from '@/components/home/WelcomeCard.vue'
import NoticeCard from '@/components/home/NoticeCard.vue'
import UserRankCard from '@/components/home/UserRankCard.vue'
import StatisticsCard from '@/components/home/StatisticsCard.vue'
import NewProblemCard from '@/components/home/NewProblemCard.vue'
</script>

<template>
  <div class="home-view">
    <a-row class="grid" :gutter="20">
      <a-col :span="12">
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          "
        >
          <div style="width: 100%; height: 300px; margin-bottom: 10px"><WelcomeCard /></div>
          <div style="width: 100%; height: 290px"><NoticeCard /></div>
        </div>
      </a-col>

      <a-col :span="12">
        <div style="width: 100%; height: 600px"><UserRankCard /></div>
      </a-col>
    </a-row>

    <a-row class="grid" :gutter="20">
      <a-col :span="12">
        <div style="width: 100%; height: 400px"><StatisticsCard /></div>
      </a-col>

      <a-col :span="12">
        <div style="width: 100%; height: 400px"><NewProblemCard /></div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.home-view {
  margin: 5px 5px;
}

.grid .arco-col {
  margin-bottom: 10px;
  /*line-height: 48px;*/
  color: var(--color-white);
  text-align: center;
}
</style>
