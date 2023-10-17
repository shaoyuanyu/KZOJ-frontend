<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs, watch } from 'vue'
import { useDebounceFn, useResizeObserver, useStorage } from '@vueuse/core'
// Import monaco
// https://github.com/vitejs/vite/discussions/1791
import * as monaco from 'monaco-editor'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import JSONWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import CSSWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import HTMLWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import TSWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
// utils
import { StorageName, initialEditorValue, lightTheme, darkTheme } from "./utils"
// models
import type { Appearance } from "./models/appearance"

const props = defineProps<{
  language: string
  appearance: Appearance
}>()

const emit = defineEmits<(e: 'change', payload: typeof editorValue.value) => void>()

self.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (label === 'json') return new JSONWorker()

    if (label === 'css' || label === 'scss' || label === 'less') return new CSSWorker()

    if (label === 'html' || label === 'handlebars' || label === 'razor') return new HTMLWorker()

    if (label === 'typescript' || label === 'javascript') return new TSWorker()

    return new EditorWorker()
  }
}

const container = ref<HTMLDivElement | null>(null)

let editor: monaco.editor.IStandaloneCodeEditor

const { language, appearance } = toRefs(props)

const editorState = useStorage<Record<string, any>>(StorageName.EDITOR_STATE, {})
const editorValue = useStorage<Record<string, any>>(StorageName.EDITOR_VALUE, initialEditorValue)

onMounted(() => {
  editor = monaco.editor.create(container.value!, {
    language: language.value,
    theme: appearance.value.isDark ? darkTheme : lightTheme,
    fontSize: appearance.value.fontSize
  })

  emit('change', editorValue.value)

  editor.onDidChangeModelContent(
    useDebounceFn(() => {
      if (editorValue.value[language.value] !== editor.getValue()!) {
        editorValue.value[language.value] = editor.getValue()!
        emit('change', editorValue.value)
      }
    }, 500)
  )

  // Set values from storage on load
  if (editorValue.value[language.value]) {
    editor.setValue(editorValue.value[language.value])
    editor.restoreViewState(editorState.value[language.value])
  }
})

watch(language, (currentTab, prevTab) => {
  monaco.editor.setModelLanguage(editor.getModel()!, currentTab)

  editorState.value[prevTab] = editor.saveViewState()

  if (editorValue.value[currentTab]) editor.setValue(editorValue.value[currentTab])
  else editor.setValue('')

  if (editorState.value[currentTab]) {
    editor.restoreViewState(editorState.value[currentTab]!)
    editor.focus()
  }
})

watch(appearance, (appearance) => {
  editor.updateOptions({
    theme: appearance.isDark ? darkTheme : lightTheme,
    fontSize: appearance.fontSize
  })
})

const editorObserver = useResizeObserver(container, () => {
  editor.layout()
})

onUnmounted(() => {
  editor?.dispose()
  editorObserver.stop()
})
</script>

<template>
  <div ref="container" style="height: calc(100% - 2.5rem)" />
</template>
