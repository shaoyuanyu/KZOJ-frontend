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

    <!-- <code-editor
      :language="langStore.lang.toLowerCase()"
      :editor-font-size="16"
      editor-theme="vs-dark"
      :style="{ height: 'calc(100vh - 157px)' }"
      :resized="moved"
    /> -->
    <div style="height: calc(100% - 32px)">
      <CodeEditor :language="langStore.lang.toLowerCase()" />
    </div>
  </div>
</template>

<style scoped>
.right {
  display: flex;
  flex-direction: column;

  height: calc(100% - 32px);

  /* background-color: aquamarine; */
  padding-bottom: 16px;
}
.nav-bar {
  margin-bottom: 16px
}
</style>
