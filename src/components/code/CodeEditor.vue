<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import * as monaco from 'monaco-editor'

const props = defineProps<{
  editorContent?: string
  language: string
  editorFontSize: number
  editorTheme: string
  resized?: number
}>()

const content = ref<string>()

//const container = ref<HTMLInputElement | null>(null)
//const editorWidth = ref<number>()
//const editorHeight = ref<number>()
function resizeEditor(): void {
  /*
  var containerSize = container.value!.getBoundingClientRect()
  editorWidth.value = containerSize.width
  editorHeight.value = containerSize.height
  */

  if (monacoEditor.value != null) {
    monacoEditor.value.layout()
  }

  console.log('resize')
}
// 监听似乎没有效果
watch(props, () => {
  resizeEditor()
})

const editor = ref<HTMLInputElement | null>(null)
const monacoEditor = ref<monaco.editor.IStandaloneCodeEditor | null>(null)

onMounted(() => {
  window.addEventListener('resize', resizeEditor)
  // window.onresize = () => {
  //   resizeEditor()
  // }

  // 初始化
  content.value = props.editorContent ? props.editorContent : ''

  monacoEditor.value = monaco.editor.create(editor.value!, {
    value: content.value,
    language: props.language,
    fontSize: props.editorFontSize
  })

  //resizeEditor()

  /*
  monaco.editor.defineTheme("test-theme", {
    base: "vs",
    colors: {},
    inherit: true,
    rules: [{
      token: ""
    }],
  })
  */

  //monaco.editor.setTheme(props.editorTheme)
  monaco.editor.setTheme('vs-dark')
})

onBeforeUnmount(() => {
  monacoEditor.value!.dispose()
})
</script>

<template>
  <div ref="container" style="width: 100%; height: 100%; background-color: aqua">
    <div ref="editor" style="width: 100%; height: 100%" />
  </div>
</template>

<style scoped></style>
