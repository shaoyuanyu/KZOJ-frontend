<script lang="ts" setup>
// import CodeEditor from '@/components/CodeEditor.vue'
import { judgeStatusInfo } from '@/models/enumInfo'
import type { CaseJudgeResult } from '@/models/submission'
import { ref } from 'vue'

const props = defineProps<{
  caseJudgeResult: CaseJudgeResult
  index: number
}>()

const waVisible = ref(false)
const emVisible = ref(false)
</script>

<template>
  <div id="case-judge-result-card">
    <!-- 答案错误详情 -->
    <a-modal v-model:visible="waVisible" hide-cancel simple title="答案错误">
      <a-form-item label="用例输入">
        <a-textarea :default-value="props.caseJudgeResult.ci" auto-size readonly />
      </a-form-item>
      <a-form-item label="期望输出">
        <a-textarea :default-value="props.caseJudgeResult.eo" auto-size readonly />
      </a-form-item>
      <a-form-item label="实际输出">
        <a-textarea :default-value="props.caseJudgeResult.ao" auto-size readonly />
      </a-form-item>
    </a-modal>

    <!-- 错误信息详情 -->
    <a-modal v-model:visible="emVisible" hide-cancel simple title="错误信息" width="70vw">
      <!-- <code-editor :code="props.caseJudgeResult.em" disabled /> -->
    </a-modal>

    <a-card :title="`评测用例 #${props.index + 1}`" hoverable>
      <template #extra>
        <a-tag :color="judgeStatusInfo[props.caseJudgeResult.js].color">
          {{ judgeStatusInfo[props.caseJudgeResult.js].description }}
        </a-tag>
      </template>

      <a-space direction="vertical" fill>
        <!-- 错误信息 -->
        <div v-if="[5, 6, 7].indexOf(props.caseJudgeResult.js) > -1">
          <a-tag :color="judgeStatusInfo[props.caseJudgeResult.js].color" class="tag" size="large">
            {{ props.caseJudgeResult.em }}
          </a-tag>
        </div>

        <!-- 答案错误 -->
        <div v-if="props.caseJudgeResult.js === 2">
          <a-tag :color="judgeStatusInfo[props.caseJudgeResult.js].color" class="tag" size="large">
            Wrong Answer
          </a-tag>
        </div>
        <div v-if="props.caseJudgeResult.js === 2">
          <a-button long @click="waVisible = true">More details</a-button>
        </div>

        <!--编译错误-->
        <div v-if="props.caseJudgeResult.js === 3">
          <a-tag :color="judgeStatusInfo[props.caseJudgeResult.js].color" class="tag" size="large">
            Compile Error
          </a-tag>
        </div>
        <div v-if="props.caseJudgeResult.js === 3">
          <a-button long @click="emVisible = true">More details</a-button>
        </div>

        <!-- 运行时异常 -->
        <div v-if="props.caseJudgeResult.js === 4">
          <a-tag :color="judgeStatusInfo[props.caseJudgeResult.js].color" class="tag" size="large">
            Runtime Error
          </a-tag>
        </div>
        <div v-if="props.caseJudgeResult.js === 4">
          <a-button long @click="emVisible = true">More details</a-button>
        </div>

        <!-- 输出超限 -->
        <div v-if="props.caseJudgeResult.js === 7">
          <a-tag class="tag" size="large">Please check code</a-tag>
        </div>

        <!-- 未知错误 -->
        <div v-if="props.caseJudgeResult.js === -1">
          <a-tag :color="judgeStatusInfo[props.caseJudgeResult.js].color" class="tag" size="large">
            Unknown Error
          </a-tag>
        </div>
        <div v-if="props.caseJudgeResult.js === -1">
          <a-tag class="tag" size="large">Please try again later</a-tag>
        </div>

        <!-- 执行用时 -->
        <div v-if="props.caseJudgeResult.js === 1 || props.caseJudgeResult.js === 5">
          <a-input :default-value="`${props.caseJudgeResult.et}`" long readonly>
            <template #prefix>
              <icon-schedule />
            </template>
            <template #append>
              <div style="width: 1.5em; text-align: center">ms</div>
            </template>
          </a-input>
        </div>

        <!-- 消耗内存 -->
        <div v-if="props.caseJudgeResult.js === 1 || props.caseJudgeResult.js === 6">
          <a-input :default-value="`${props.caseJudgeResult.cm}`" long readonly>
            <template #prefix>
              <icon-storage />
            </template>
            <template #append>
              <div style="width: 1.5em; text-align: center">MB</div>
            </template>
          </a-input>
        </div>
      </a-space>
    </a-card>
  </div>
</template>

<style scoped>
:deep(.arco-card-body) {
  height: 72px;
  padding: 12px;
}

#case-judge-result-card .tag {
  font-size: 12px;
  display: flex;
  justify-content: center;
}
</style>
