<script lang="ts" setup>
import { ref } from 'vue'
import SubmissionsPanel from '@/components/submission_record/SubmissionsPanel.vue'

const mode = ref(false)
</script>

<template>
  <div id="submission">
    <a-card class="card" title="我的提交记录">
      <span>
        全部 <a-switch v-model="mode" type="line" /> 我的
      </span>
      <br /><br />

      <div v-if="mode">
        <submissions-panel type="mine" />
      </div>
      <div v-else>
        <submissions-panel type="all" />
      </div>
      
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
