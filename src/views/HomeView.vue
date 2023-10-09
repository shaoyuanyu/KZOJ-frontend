<script setup lang="ts">
import WelcomeCard from '@/components/home/WelcomeCard.vue'
import NoticeCard from '@/components/home/NoticeCard.vue'
import UserRankCard from '@/components/home/UserRankCard.vue'
</script>

<template>
  <div>
    <a-row class="grid" :gutter="5">
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
  </div>
</template>

<style scoped>
.grid .arco-col {
  height: 625px;
  /*line-height: 48px;*/
  color: var(--color-white);
  text-align: center;
}
</style>
