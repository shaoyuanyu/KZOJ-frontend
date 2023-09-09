<script lang="ts" setup>
import { type CSSProperties, ref, watch } from 'vue'

const props = defineProps<{
  text?: string
  style?: CSSProperties
}>()

const emits = defineEmits<{
  (e: 'update:text', t: string): void
}>()

const text = ref(props.text || '')

watch(
  () => props.text,
  (t) => (text.value = t || '')
)

watch(text, () => emits('update:text', text.value))

const toolbars = {
  bold: true,
  italic: true,
  header: true,
  underline: true,
  strikethrough: true,
  mark: true,
  superscript: true,
  subscript: true,
  quote: true,
  ol: true,
  ul: true,
  code: true,
  table: true,
  undo: true,
  redo: true,
  subfield: true,
  preview: true
}
</script>

<template>
  <div id="markdown-editor">
    <mavon-editor
      v-model="text"
      :autofocus="false"
      :style="props.style"
      :toolbars="toolbars"
      @change="emits('update:text', text)"
    />
  </div>
</template>

<style scoped>
#markdown-editor {
  z-index: 0;
  width: 100%;
}
</style>
