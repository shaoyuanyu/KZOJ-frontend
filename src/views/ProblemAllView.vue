<script lang="ts" setup>
import ProblemsPanel from '@/components/ProblemsPanel.vue'
</script>

<template>
  <div id="problem-all">
    <problems-panel class="panel" title="题库" type="all" />
  </div>
</template>

<style scoped>
#problem-all .panel {
  width: 70vw;
  min-width: 1000px;
  margin: 16px auto;
}
</style>
