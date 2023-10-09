<script setup lang="ts">
import WelcomeCard from '@/components/home/WelcomeCard.vue'
</script>

<template>
  <div>

    <a-row class="grid">
      <a-col :span="12">
        <WelcomeCard />
      </a-col>

      <a-col :span="12">
        <div>24 - 100%</div>
      </a-col>
    </a-row>

  </div>
</template>

<style scoped>
.grid .arco-col {
  height: 300px;
  /*line-height: 48px;*/
  color: var(--color-white);
  text-align: center;
}
.grid .arco-col:nth-child(2n) {
  /*background-color: rgba(var(--arcoblue-6), 0.9);*/
}
.grid .arco-col:nth-child(2n + 1) {
  /* background-color: var(--color-primary-light-4); */
}
</style>
