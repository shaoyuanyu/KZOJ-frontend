<script setup lang="ts">
import { ref, watch } from 'vue'
// component
//import CodeEditor from '@/components/code/CodeEditor.vue'
import CodeEditor from '@/components/code_editor/CodeEditor.vue'
// store
import { useLangStore } from '@/stores/lang'

const props = defineProps<{
  id: string
  moved?: number
}>()

// 编程语言选择
const langStore = useLangStore()
const langIndex = ref(1)
const langList = ['C', 'C++', 'Python', 'Java']
watch(langIndex, () => {
  langStore.switchLang(langList[langIndex.value - 1])
})

//
const isDark = ref(true)
const fontSize = ref(16)
const tabLen = ref(4)
const editorTheme = ref("system")
watch(fontSize, () => {
  console.log(fontSize.value)
})

// 设置按钮
const settingVisible = ref(false)
</script>

<template>
  <div class="right">

    <a-row :wrap="false" class="nav-bar">
      <a-col :span="10">
        <a-select v-model="langIndex" placeholder="请选择编程语言">
          <a-option :value="1">C</a-option>
          <a-option :value="2">C++</a-option>
          <a-option :value="3">Python</a-option>
          <a-option :value="4">Java</a-option>
        </a-select>
      </a-col>

      <a-col :span="6">
        <div style="display: flex; justify-content: center;">
          <a-button @click="settingVisible=true" shape="circle">
            <template #icon>
              <icon-settings />
            </template>
          </a-button>
        </div>
        
        <a-modal v-model:visible="settingVisible" hide-cancel :closable="false">
          <template #title>
            代码编辑器设置
          </template>
          <div style="display: flex; flex-direction: column; font-size: large;">
            <a-row style="align-items: center">
              <a-col :span="18">
                <p>编辑器主题: </p>
              </a-col>
              <a-col :span="6">
                <a-select v-model="editorTheme" placeholder="选择编辑器主题">
                  <a-option :value="'system'">跟随系统</a-option>
                  <a-option :value="'vs'">vs light</a-option>
                  <a-option :value="'vs-dark'">vs dark</a-option>
                </a-select>
              </a-col>
            </a-row>
            
            <a-row style="align-items: center;">
              <a-col :span="18">
                <p>字体选择: </p>
              </a-col>
              <a-col :span="6">
                <a-select placeholder="选择字体">
                  <a-option>字体1</a-option>
                  <a-option>字体2</a-option>
                </a-select>
              </a-col>
            </a-row>

            <a-row style="align-items: center">
              <a-col :span="18">
                <p>字体大小: </p>
              </a-col>
              <a-col :span="6">
                <a-input-number
                  v-model="fontSize"
                  :default-value="16"
                  :precision="0"
                  :step="1"
                  :min="8"
                  :max="28"
                  placeholder="选择字号"
                >
                  <template #plus>
                    <icon-plus />
                  </template>
                  <template #minus>
                    <icon-minus />
                  </template>
                </a-input-number>
              </a-col>
            </a-row>

            <a-row style="align-items: center">
              <a-col :span="18">
                <p>Tab长度: </p>
              </a-col>
              <a-col :span="6">
                <a-select v-model="tabLen" placeholder="选择Tab长度">
                  <a-option :value="4">4</a-option>
                  <a-option :value="2">2</a-option>
                </a-select>
              </a-col>
            </a-row>
          </div>
        </a-modal>
      </a-col>
    </a-row>

    <div class="code-editor-container">
      <CodeEditor
        :language="langStore.lang.toLowerCase()"
        :appearance="{ 
          isDark: isDark, 
          fontSize: fontSize!
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.right {
  display: flex;
  flex-direction: column;

  padding: 16px 16px;

  /* 16*2 */
  height: calc(100% - 32px);

  /* background-color: aquamarine; */
}
.nav-bar {
  margin-bottom: 16px;
}
.code-editor-container {
  /* 16*2 + 16 */
  height: calc(100% - 48px);

  /* background-color: antiquewhite; */
}
</style>
