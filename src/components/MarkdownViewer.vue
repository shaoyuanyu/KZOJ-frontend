<script lang="ts" setup>
import { computed, type CSSProperties } from 'vue'

const props = defineProps<{
  text: string
  style?: CSSProperties
}>()

const text = computed(() => props.text || '')
</script>

<template>
  <div id="markdown-viewer">
    <mavon-editor
      v-model="text"
      :style="props.style"
      :subfield="false"
      :toolbarsFlag="false"
      editable="false"
      boxShadowStyle="none"
      defaultOpen="preview"
      previewBackground="#fff"
    />
  </div>
</template>

<style scoped>
#markdown-viewer {
  z-index: 0;
  width: 100%;
}
</style>
