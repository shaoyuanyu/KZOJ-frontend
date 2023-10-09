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
          <WelcomeCard style="height: 290px; margin-bottom: 5px" />
          <NoticeCard style="height: 290px" />
        </div>
      </a-col>

      <a-col :span="12">
        <UserRankCard style="height: 605px" />
      </a-col>
    </a-row>

    <a-row class="grid" :gutter="20">
      <a-col :span="12">
        <StatisticsCard style="height: 600px" />
      </a-col>

      <a-col :span="12">
        <NewProblemCard style="height: 600px" />
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.home-view {
  margin: 5px 5px;
}

.grid .arco-col {
  height: 625px;
  margin-bottom: 20px;
  /*line-height: 48px;*/
  color: var(--color-white);
  text-align: center;
}
</style>
