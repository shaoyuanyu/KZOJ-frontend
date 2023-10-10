<script lang="ts" setup>
import { queryRecordVOWithPagination } from '@/api/submission'
import { langInfo, submissionStatusInfo } from '@/models/enumInfo'
import type { Submission, SubmissionQuery } from '@/models/submission'
import { useUserStore } from '@/stores/user'
import type { TableColumnData } from '@arco-design/web-vue'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  type: 'all' | 'mine' | 'user' | 'problem'
  userId?: string
  problemId?: string
}>()

const router = useRouter()
const userStore = useUserStore()

const tableData = ref<Submission[]>([])
const totalData = ref(0)

/**
 * 表格列配置
 */
const columns = ref<TableColumnData[]>([
  {
    title: '提交者',
    slotName: 'user',
    width: 250
  },
  {
    title: '评测状态',
    slotName: 'status',
    width: 200,
    align: 'center'
  },
  {
    title: '编程语言',
    slotName: 'lang',
    width: 150
  }
])

/**
 * 搜索相关
 */
const searchParam = ref<SubmissionQuery>({
  current: 1,
  size: 20
} as SubmissionQuery)

const filterParam = ref({
  id: '',
  problemId: '',
  lang: null as unknown as number,
  status: null as unknown as number
})

const onFilterParamChange = () => {
  searchParam.value.id = filterParam.value.id
  searchParam.value.problemId = filterParam.value.problemId
  searchParam.value.lang = filterParam.value.lang
  searchParam.value.status = filterParam.value.status
}

const onSearch = () => {
  queryRecordVOWithPagination(searchParam.value).then((resp) => {
    tableData.value = resp.data.data.records
    totalData.value = resp.data.data.total
  })
}

onMounted(() => {
  if (props.type !== 'problem') {
    columns.value.splice(0, 0, {
      title: '提交编号',
      dataIndex: 'id',
      width: 200
    })
    columns.value.splice(3, 0, {
      title: '题目',
      slotName: 'problem'
    })
  }

  if (props.type === 'mine') {
    searchParam.value.userId = userStore.user.id
  } else if (props.type === 'user') {
    searchParam.value.userId = props.userId as string
  } else if (props.type === 'problem') {
    searchParam.value.problemId = props.problemId as string
    columns.value.filter((column) => column.title !== '题目')
  }
})
watch(searchParam.value, () => onSearch())
</script>

<template>
  <div id="submissions-panel">
    <!-- 搜索筛选 -->
    <a-row :gutter="16" style="margin-bottom: 16px">
      <a-col v-if="props.type === 'mine'" flex="2">
        <a-input v-model="filterParam.problemId" allow-clear placeholder="根据题号筛选">
          <template #prepend>题号</template>
        </a-input>
      </a-col>
      <a-col flex="2">
        <a-select v-model="filterParam.lang" allow-clear placeholder="筛选编程语言">
          <a-option :value="1">C</a-option>
          <a-option :value="2">C++</a-option>
          <a-option :value="3">Java</a-option>
          <a-option :value="4">Python</a-option>
        </a-select>
      </a-col>
      <a-col flex="2">
        <a-select v-model="filterParam.status" allow-clear placeholder="筛选编程语言">
          <a-option :value="2">Accepted</a-option>
          <a-option :value="3">Unaccepted</a-option>
          <a-option :value="4">Compile Error</a-option>
          <a-option :value="-1">Unknown Error</a-option>
        </a-select>
      </a-col>
      <a-col flex="1">
        <a-button long type="primary" @click="onFilterParamChange">
          筛选
          <template #icon>
            <icon-filter />
          </template>
        </a-button>
      </a-col>
    </a-row>
    <!-- 表格 -->
    <a-table
      :columns="columns"
      :data="tableData"
      :pagination="{
        current: searchParam.current,
        pageSize: searchParam.size,
        total: totalData,
        pageSizeOptions: [20, 50, 100],
        showPageSize: true
      }"
      @pageChange="(page) => (searchParam.current = page)"
      @cell-click="(record) => router.push('/submission/' + record.id)"
      @page-size-change="(pageSize) => (searchParam.size = pageSize)"
    >
      <template #user="{ record }">
        <a-comment :author="record.user.username" :content="record.createTime">
          <template #avatar>
            <a-avatar>
              <img
                v-if="record.user.avatarUrl"
                :src="record.user.avatarUrl"
                alt=""
                style="object-fit: cover"
              />
              <icon-user v-else />
            </a-avatar>
          </template>
        </a-comment>
      </template>
      <template #status="{ record }">
        <a-tag :color="submissionStatusInfo[record.status].color" bordered>
          {{ submissionStatusInfo[record.status].description }}
        </a-tag>
      </template>
      <template #problem="{ record }">
        <a-link v-if="record.problem?.id" :href="'/problem/' + record.problem?.id">
          {{ record.problem?.title }}
        </a-link>
        <a-typography-text v-else type="secondary">题目已删除</a-typography-text>
      </template>
      <template #lang="{ record }">
        {{ langInfo[record.lang] }}
      </template>
    </a-table>
  </div>
</template>

<style scoped>
:deep(tbody .arco-table-tr) {
  cursor: pointer;
}

:deep(.arco-link) {
  color: var(--color-text-1);
}
</style>
