<script lang="ts" setup>
import { queryProblemVOById } from '@/api/problem'
import { doSubmit, queryStatusById } from '@/api/submission'
import CodeEditor from '@/components/CodeEditor.vue'
import MarkdownViewer from '@/components/MarkdownViewer.vue'
import SubmissionsPanel from '@/components/submission_record/SubmissionsPanel.vue'
import type { JudgeConfig, Problem } from '@/models/problem'
import type { SubmissionAdd } from '@/models/submission'
import type { DescData } from '@arco-design/web-vue'
import { Notification } from '@arco-design/web-vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{ id: string }>()

const router = useRouter()

const size = ref(0.5)
const problem = ref({ judgeConfig: {} as JudgeConfig } as Problem)
const basicInfo = ref<DescData[]>([])
const submissionAdd = ref<SubmissionAdd>({ problemId: props.id } as SubmissionAdd)

onMounted(() => {
  /*
  queryProblemVOById(props.id).then((resp) => {
    const p = resp.data.data
    document.title = p.title
    problem.value = p
    problem.value.content = `# ${p.title}\n` + p.content
    basicInfo.value = [
      { label: '时间限制', value: `${p.judgeConfig.timeLimit} ms` },
      { label: '内存限制', value: `${p.judgeConfig.memoryLimit} MB` },
      { label: '提交次数', value: `${p.submitCount}` },
      { label: '通过次数', value: `${p.acceptedCount}` },
      {
        label: '通过率',
        value:
          p.submitCount === 0
            ? '暂无数据'
            : `${((p.acceptedCount / p.submitCount) * 100).toFixed(1)} %`
      }
    ]
  })
  */
  console.log(props.id)
  queryProblemVOById(props.id).then((res) => {
    console.log(res.data)
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
        <a-tabs animation default-active-key="1" lazy-load size="large">
          <a-tab-pane key="1" title="浏览题目">
            <markdown-viewer :text="problem.content" />
            <a-descriptions
              :column="5"
              :data="basicInfo"
              layout="inline-vertical"
              style="margin: 0 32px 16px"
            />
            <a-collapse :bordered="false">
              <a-collapse-item key="1" header="题目标签">
                <a-space>
                  <a-tag v-for="tag in problem.tags" :key="tag" color="arcoblue" size="large">
                    {{ tag }}
                  </a-tag>
                </a-space>
              </a-collapse-item>
              <a-collapse-item key="2" header="参考答案">
                <code-editor :code="problem.refAnswer" disabled />
              </a-collapse-item>
            </a-collapse>
          </a-tab-pane>
          <a-tab-pane key="2" disabled title="评论" />
          <a-tab-pane key="3" title="提交记录">
            <submissions-panel :problem-id="props.id" style="margin: 16px" type="problem" />
          </a-tab-pane>
        </a-tabs>
      </template>
      <template #second>
        <div class="right">
          <a-row :wrap="false" style="margin-bottom: 16px">
            <a-col flex="200px">
              <a-select v-model="submissionAdd.lang" placeholder="请选择编程语言">
                <a-option :value="1" disabled>C</a-option>
                <a-option :value="2" disabled>C++</a-option>
                <a-option :value="3">Java</a-option>
                <a-option :value="4" disabled>Python</a-option>
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
