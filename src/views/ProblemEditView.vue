<script lang="ts" setup>
import { addProblem, editProblem, queryMyProblemById } from '@/api/problem'
import CodeEditor from '@/components/code_editor/CodeEditor.vue'
import MarkdownEditor from '@/components/MarkdownEditor.vue'
import type { JudgeConfig, Problem } from '@/models/problem'
import { Message } from '@arco-design/web-vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  type: 'add' | 'edit'
  id?: string
}>()

const router = useRouter()

/**
 * 题目信息
 */
const form = ref({
  judgeConfig: {} as JudgeConfig,
  judgeCases: [{ in: '', out: '' }]
} as Problem)
onMounted(() => {
  if (props.type === 'add') {
    form.value.content =
      '## 题目描述\n\n请输入题目描述\n\n### 输入格式\n\n题目输入格式\n\n### 输出格式\n\n题目输出格式' +
      '\n\n### 题目样例\n\n#### 输入 #1\n\n```\n```\n\n#### 输出 #1\n\n```\n```'
  } else {
    queryMyProblemById(props.id as string).then((resp) => {
      form.value = resp.data.data
    })
  }
})

/**
 * 标签
 */
const tagsInfo = [
  {
    label: '难度',
    options: ['简单', '中等', '困难']
  },
  {
    label: '数据结构',
    options: ['数组', '栈', '队列', '树', '图']
  },
  {
    label: '算法',
    options: ['二分', '贪心', '动态规划', '深度优先搜索', '广度优先搜索']
  }
]

/**
 * 评测用例
 */
const onJudgeCaseDelete = (index: number) => {
  if (form.value.judgeCases.length === 1) {
    Message.error('需要保留至少一个评测用例')
    return
  }
  form.value.judgeCases.splice(index, 1)
}

/**
 * 按钮提交
 */
const onSubmit = () => {
  let validation = true

  form.value.judgeCases.forEach((judgeCase, index) => {
    if (!judgeCase.in || !judgeCase.out) {
      Message.error(`评测用例 #${index + 1} 未填写完成`)
      validation = false
    }
  })

  if (!validation) {
    return
  }
  const submitMethod = props.type === 'add' ? addProblem : editProblem
  submitMethod(form.value).then(() => {
    router.back()
  })
}
</script>

<template>
  <div id="problem-edit">
    <!-- 快捷跳转 -->
    <a-affix :offsetTop="80" style="position: fixed; right: 1vw">
      <a-anchor>
        <a-anchor-link href="#title">题目名称</a-anchor-link>
        <a-anchor-link href="#content">题目描述</a-anchor-link>
        <a-anchor-link href="#remark">备注</a-anchor-link>
        <a-anchor-link href="#tag">标签</a-anchor-link>
        <a-anchor-link href="#judgeConfig">评测配置</a-anchor-link>
        <a-anchor-link href="#judgeCases">评测用例</a-anchor-link>
        <a-anchor-link href="#refAnswer">参考答案</a-anchor-link>
      </a-anchor>
    </a-affix>

    <a-card :title="props.type === 'add' ? '创建题目' : '编辑题目'" class="card">
      <a-form :model="form" layout="vertical" size="large">
        <!-- 题目名称 -->
        <a-form-item id="title" field="title" label="题目名称">
          <a-input
            v-model="form.title"
            :max-length="20"
            placeholder="请输入题目名称"
            show-word-limit
          />
        </a-form-item>
        <!-- 题目描述 -->
        <a-form-item id="content" field="content" label="题目描述">
          <markdown-editor
            :style="{ minHeight: '300px' }"
            :text="form.content"
            @update:text="(t) => (form.content = t)"
          />
        </a-form-item>
        <!-- 备注 -->
        <a-form-item id="remark" field="remark" label="备注">
          <a-textarea
            v-model="form.remark"
            :max-length="500"
            auto-size
            placeholder="请输入备注 (可选)"
            show-word-limit
          />
        </a-form-item>
        <!-- 标签 -->
        <a-form-item id="tag" field="tag" label="标签">
          <a-select
            v-model="form.tags"
            :max-tag-count="5"
            allow-create
            multiple
            placeholder="请选择题目标签"
            popup-container="body"
          >
            <a-optgroup v-for="tagInfo in tagsInfo" :key="tagInfo.label" :label="tagInfo.label">
              <a-option v-for="tag in tagInfo.options" :key="tag">{{ tag }}</a-option>
            </a-optgroup>
          </a-select>
        </a-form-item>
        <!-- 评测配置 -->
        <a-form-item id="judgeConfig" field="judgeConfig" label="评测配置">
          <a-row :gutter="16" :wrap="false" style="width: 50%">
            <a-col flex="auto">
              <a-input-number
                v-model="form.judgeConfig.timeLimit"
                hide-button
                placeholder="时间限制"
              >
                <template #prefix>
                  <icon-schedule />
                </template>
                <template #append>ms</template>
              </a-input-number>
            </a-col>
            <a-col flex="auto">
              <a-input-number
                v-model="form.judgeConfig.memoryLimit"
                hide-button
                placeholder="内存限制"
              >
                <template #prefix>
                  <icon-storage />
                </template>
                <template #append>MB</template>
              </a-input-number>
            </a-col>
          </a-row>
        </a-form-item>
        <!-- 评测用例 -->
        <a-form-item id="judgeCases" field="judgeCases" label="评测用例">
          <template #label>
            评测用例
            <a-button
              size="small"
              status="success"
              style="margin-left: 8px"
              type="text"
              @click="form.judgeCases.push({ in: '', out: '' })"
            >
              <template #icon>
                <icon-plus />
              </template>
              添加用例
            </a-button>
          </template>
          <a-space direction="vertical" fill style="width: 100%">
            <a-card
              v-for="(judgeCase, index) in form.judgeCases"
              :key="index"
              :title="'用例编号 #' + (index + 1)"
            >
              <template #extra>
                <a-button status="danger" type="text" @click="onJudgeCaseDelete(index)">
                  <template #icon>
                    <icon-delete />
                  </template>
                  移除
                </a-button>
              </template>
              <a-textarea
                v-model="judgeCase.in"
                :max-length="500"
                auto-size
                placeholder="用例输入"
                show-word-limit
              />
              <a-textarea
                v-model="judgeCase.out"
                :max-length="500"
                auto-size
                placeholder="用例输出"
                show-word-limit
                style="margin-top: 8px"
              />
            </a-card>
          </a-space>
        </a-form-item>
        <!-- 参考答案 -->
        <a-form-item id="refAnswer" field="refAnswer" label="参考答案">
          <!-- <code-editor
            :code="form.refAnswer"
            :style="{ minHeight: '300px' }"
            @update:code="(c) => (form.refAnswer = c)"
          /> -->
          <!-- <CodeEditor language="c" /> -->
        </a-form-item>
        <!-- 按钮 -->
        <a-row justify="end">
          <a-button
            size="large"
            style="width: 120px; margin-right: 16px"
            @click="router.push('/problem/manage')"
          >
            取消
          </a-button>
          <a-button size="large" style="width: 120px" type="primary" @click="onSubmit">
            {{ props.type === 'add' ? '创建' : '更新' }}
          </a-button>
        </a-row>
      </a-form>
    </a-card>
  </div>
</template>

<style scoped>
#problem-edit .card {
  width: 70vw;
  min-width: 1000px;
  margin: 16px auto;
  padding: 16px;
}
</style>
