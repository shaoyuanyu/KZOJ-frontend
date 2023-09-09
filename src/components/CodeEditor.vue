<script lang="ts" setup>
import { java } from '@codemirror/lang-java'
import { oneDark } from '@codemirror/theme-one-dark'
import { type CSSProperties, ref, watch } from 'vue'
import { Codemirror } from 'vue-codemirror'

const props = defineProps<{
  code?: string
  disabled?: boolean
  style?: CSSProperties
}>()

const emits = defineEmits<{
  (e: 'update:code', c: string): void
}>()

const code = ref(props.code || '')

watch(
  () => props.code,
  (c) => (code.value = c || '')
)

watch(code, () => emits('update:code', code.value))

const extensions = [oneDark, java()]
</script>

<template>
  <div id="code-editor">
    <codemirror
      id="cm"
      v-model="code"
      :disabled="disabled"
      :extensions="extensions"
      :style="props.style"
      :tab-size="4"
    />
  </div>
</template>

<style scoped>
#code-editor {
  width: 100%;
}

:deep(#cm .cm-editor) {
  border-radius: 2px;
  outline: none;
}

:deep(#cm .cm-scroller) {
  border-radius: 2px;
}

:deep(#cm .cm-scroller::-webkit-scrollbar) {
  display: none;
}
</style>
