<script lang="ts" setup>
import { Notification } from '@arco-design/web-vue'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
// components
import ProblemDisplay from '@/components/problem/ProblemDisplay.vue'
import CodeEditor from '@/components/CodeEditor.vue'
// api
import { queryProblemVOById } from '@/api/problem'
import { doSubmit, queryStatusById } from '@/api/submission'
// models
import type { Problem } from '@/models/problem'
import type { SubmissionAdd } from '@/models/submission'
// store
import { useLangStore } from '@/stores/lang'

// Props
const props = defineProps<{ id: string }>()

const router = useRouter()

const langStore = useLangStore()
const langIndex = ref(1)
const langList = ['C', 'C++', 'Python', 'Java']
watch(langIndex, () => {
  langStore.switchLang(langList[langIndex.value-1])
})

const size = ref(0.5)
const problem = ref<Problem>({
  id: '',
  creator: { id: '', userName: '', avatarUrl: '', email: '', auth: -1 },
  title: '',
  content: [''],
  remark: '',
  tags: [''],
  submitCount: 0,
  acceptedCount: 0,
  judgeConfig: [{ language: '', timeLimit: 0.0, memoryLimit: 0.0 }],
  judgeCases: [{ caseIn: '', caseOut: '' }],
  exampleCases: [{ caseIn: '', caseOut: '' }],
  refAnswer: '',
  createTime: '',

  difficultLevel: '',
  source: '',
  inputDiscription: '',
  outputDiscription: ''
})
const submissionAdd = ref<SubmissionAdd>({ problemId: props.id } as SubmissionAdd)

onMounted(() => {
  queryProblemVOById(props.id).then((res) => {
    problem.value = res.data
    console.log(problem.value)
  })
})

/**
 * 提交相关
 */
const submitButtonText = ref('提交')
const submitButtonLoading = ref(false)

const startPollingSubmission = (id: string) => {
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
}

const onSubmitCode = () => {
  doSubmit(submissionAdd.value).then((resp) => {
    Notification.success({
      title: '提交成功',
      content: '评测需要一段时间, 请耐心等待',
      position: 'bottomRight'
    })
    startPollingSubmission(resp.data.data.id)
  })
}
</script>

<template>
  <div id="problem">
    <a-split v-model:size="size" :max="0.7" :min="0.3" class="box">
      <template #first>
        <ProblemDisplay :problem="problem" :language="langStore.lang" />
      </template>

      <template #second>

        <div class="right">

          <a-row :wrap="false" style="margin-bottom: 16px">

            <a-col flex="200px">
              <a-select v-model="langIndex" placeholder="请选择编程语言">
                <a-option :value="1">C</a-option>
                <a-option :value="2">C++</a-option>
                <a-option :value="3">Python</a-option>
                <a-option :value="4">Java</a-option>
              </a-select>
            </a-col>

            <a-col flex="auto" />

            <a-col flex="150px">
              <a-button :loading="submitButtonLoading" long type="primary" @click="onSubmitCode">
                {{ submitButtonText }}
              </a-button>
            </a-col>

          </a-row>

          <code-editor
            :code="submissionAdd.code"
            :style="{ height: 'calc(100vh - 157px)' }"
            @update:code="(c) => (submissionAdd.code = c)"
          />
        
        </div>

      </template>
    </a-split>
  </div>
</template>

<style scoped>
/* 修改伸缩杆背景颜色 */
:deep(.arco-split-trigger-icon-wrapper) {
  background-color: var(--color-fill-2);
}

/* 修改伸缩杆宽度 */
:deep(.arco-split-trigger-icon) {
  margin: -1px;
}

/* 修改分割面板样式 */
:deep(.arco-split-pane) {
  border-radius: 6px;
  background-color: #fff;
}

/* 修改标签栏间距 */
:deep(.arco-tabs-content) {
  padding: 0;
}

/* 修改标签面板高度 */
:deep(.arco-tabs-pane) {
  overflow-y: auto;
  height: calc(100vh - 121px);
}

/* 修改背景 */
#problem {
  flex: 1;
  padding: 8px;
  background-color: var(--color-fill-2);
}

/* 修改分割框高度 */
#problem .box {
  height: calc(100vh - 77px);
}

/* 修改分割框内边距 */
#problem .box .right {
  padding: 16px;
}
</style>
