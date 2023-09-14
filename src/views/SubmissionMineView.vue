<script lang="ts" setup>
import SubmissionsPanel from '@/components/SubmissionsPanel.vue'
</script>

<template>
  <div id="submission">
    <a-card class="card" title="我的提交记录">
      <submissions-panel type="mine" />
    </a-card>
  </div>
</template>

<style scoped>
#submission {
  width: 70vw;
  min-width: 1000px;
  margin: 16px auto;
}

#submission .card {
  padding: 16px;
}
</style>
