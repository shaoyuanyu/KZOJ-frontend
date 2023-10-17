<script setup lang="ts">
import { ref, watch } from 'vue'
// component
//import CodeEditor from '@/components/code/CodeEditor.vue'
import CodeEditor from '@/components/code_editor/CodeEditor.vue'
// api
import { doSubmit, queryStatusById } from '@/api/submission'
// models
import type { SubmissionAdd } from '@/models/submission'
// store
import { useLangStore } from '@/stores/lang'

const props = defineProps<{
  id: string
  moved?: number
}>()

const langStore = useLangStore()
const langIndex = ref(1)
const langList = ['C', 'C++', 'Python', 'Java']
watch(langIndex, () => {
  langStore.switchLang(langList[langIndex.value - 1])
})

const isDark = ref(true)
const fontSize = ref(16)
watch(fontSize, () => {
  console.log(fontSize.value)
})

/**
 * 提交相关
 */
const submissionAdd = ref<SubmissionAdd>({ problemId: props.id } as SubmissionAdd)
const submitButtonText = ref('提交')
const submitButtonLoading = ref(false)

const startPollingSubmission = (id: string) => {
  /*
  if (submitButtonLoading.value) {
    return
  }
  submitButtonLoading.value = true
  const polling = setInterval(() => {
    queryStatusById(id).then((resp) => {
      const submission = resp.data.data
      const status = submission.status
      if (status === 0) {
        submitButtonText.value = '队列中'
      } else if (status === 1) {
        submitButtonText.value = '运行中'
      } else {
        clearInterval(polling)
        submitButtonText.value = '提交'
        submitButtonLoading.value = false
        router.push('/submission/' + id)
      }
    })
  }, 3000)
  */
}

const onSubmitCode = () => {
  console.log(fontSize.value)
  /*
  doSubmit(submissionAdd.value).then((resp) => {
    Notification.success({
      title: '提交成功',
      content: '评测需要一段时间, 请耐心等待',
      position: 'bottomRight'
    })
    startPollingSubmission(resp.data.data.id)
  })
  */
}
</script>

<template>
  <div class="right">
    <a-row :wrap="false" class="nav-bar">
      <a-col :span="6">
        <a-input-number
          v-model="fontSize"
          :default-value="16"
          :precision="0"
          :step="1"
          :min="8"
          :max="28"
          :style="{ width: '80px' }"
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

      <a-col :span="10" />

      <a-col :span="8"></a-col>
    </a-row>

    <a-row :wrap="false" class="nav-bar">
      <a-col :span="10">
        <a-select v-model="langIndex" placeholder="请选择编程语言">
          <a-option :value="1">C</a-option>
          <a-option :value="2">C++</a-option>
          <a-option :value="3">Python</a-option>
          <a-option :value="4">Java</a-option>
        </a-select>
      </a-col>

      <a-col :span="6" />

      <a-col :span="8">
        <a-button :loading="submitButtonLoading" long type="primary" @click="onSubmitCode">
          {{ submitButtonText }}
        </a-button>
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
