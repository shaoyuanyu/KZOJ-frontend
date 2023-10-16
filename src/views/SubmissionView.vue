<script lang="ts" setup>
import { querySubmissionVOById } from '@/api/submission'
import { AuthEnum } from '@/common/access/authEnum'
import CaseJudgeResultCard from '@/components/CaseJudgeResultCard.vue'
//import CodeEditor from '@/components/CodeEditor.vue'
import { langInfo, submissionStatusInfo } from '@/models/enumInfo'
import type { Submission } from '@/models/submission'
import { useUserStore } from '@/stores/user'
import { onMounted, ref } from 'vue'

const props = defineProps<{ id: string }>()

const userStore = useUserStore()

const submission = ref({} as Submission)
onMounted(() => {
  querySubmissionVOById(props.id).then((resp) => {
    submission.value = resp.data.data
  })
})
</script>

<template>
  <div id="submission">
    <a-card class="card" title="提交详情">
      <!-- 提交状态 -->
      <template #extra>
        <a-tag
          v-if="submission.status"
          :color="submissionStatusInfo[submission.status].color"
          size="large"
        >
          {{ submissionStatusInfo[submission.status].description }}
        </a-tag>
      </template>
      <!-- 提交记录相关信息 -->
      <a-descriptions :column="2" size="large">
        <a-descriptions-item label="提交者">
          <a-row :wrap="false" align="center">
            <a-col flex="36px">
              <a-avatar>
                <img
                  v-if="submission.user?.avatarUrl"
                  :src="submission.user?.avatarUrl"
                  alt=""
                  style="object-fit: cover"
                />
                <icon-user v-else />
              </a-avatar>
            </a-col>
            <a-col style="margin-left: 8px">
              {{ submission.user?.userName }}
            </a-col>
          </a-row>
        </a-descriptions-item>
        <a-descriptions-item label="题目">
          <a-link v-if="submission.problem?.id" :href="'/problem/' + submission.problem?.id">
            {{ submission.problem?.title }}
          </a-link>
          <a-typography-text v-else type="secondary">题目已删除</a-typography-text>
        </a-descriptions-item>
        <a-descriptions-item label="提交时间">
          {{ submission.createTime }}
        </a-descriptions-item>
        <a-descriptions-item label="提交 ID">
          {{ submission.id }}
        </a-descriptions-item>
        <a-descriptions-item label="编程语言">
          {{ langInfo[submission.lang] }}
        </a-descriptions-item>
        <a-descriptions-item label="代码长度">
          {{ submission.codeLength }} Bytes
        </a-descriptions-item>
      </a-descriptions>
      <!-- 用例评测结果 -->
      <a-grid :col-gap="16" :cols="5" :row-gap="16">
        <a-grid-item v-for="(caseJudgeResult, index) in submission.caseJudgeResults" :key="index">
          <case-judge-result-card :case-judge-result="caseJudgeResult" :index="index" />
        </a-grid-item>
      </a-grid>
      <!-- 代码 -->
      <a-collapse
        v-if="userStore.user?.id === submission.user?.id || userStore.user?.auth === AuthEnum.ADMIN"
        style="margin-top: 16px"
      >
        <a-collapse-item :key="1" header="查看提交源代码">
          <!-- <code-editor :code="submission.code" disabled /> -->
          <!-- <CodeEditor /> -->
        </a-collapse-item>
      </a-collapse>
    </a-card>
  </div>
</template>

<style scoped>
#submission {
  width: 70vw;
  min-width: 1000px;
  margin: 16px auto;
}

#submission .card {
  padding: 16px;
}

:deep(.arco-link) {
  color: var(--color-text-1);
}

:deep(.arco-avatar-circle) {
  overflow: hidden;
}
</style>
