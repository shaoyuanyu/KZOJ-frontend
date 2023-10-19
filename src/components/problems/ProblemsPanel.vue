<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import type { TableColumnData } from '@arco-design/web-vue'
// api
import { deleteProblemById, queryRecordVOWithPagination } from '@/api/problem'
import { queryProblemPreviews } from '@/api/problemPreviews'
// models
import type { Problem, ProblemQuery } from '@/models/problem'
import type { ProblemPreview, ProblemPreviewsQuery } from '@/models/problemPreviews'
// stores
import { useUserStore } from '@/stores/user'


const props = defineProps<{
  type: 'all' | 'mine'
  title: string
}>()


const router = useRouter()
const userStore = useUserStore()

const tableData = ref<Problem[]>([])
const totalData = ref(0)

/**
 * 表格列配置
 */
const columns = ref<TableColumnData[]>([
  {
    title: '题号',
    dataIndex: 'id',
    width: 60
  },
  {
    title: '题目标题',
    dataIndex: 'title'
  },
  {
    title: '标签',
    slotName: 'tags',
    width: 250,
    ellipsis: true
  },
  {
    title: '通过率',
    slotName: 'acceptedRate',
    width: 100
  },
  {
    title: '提交数',
    dataIndex: 'submitCount',
    width: 100,
    sortable: {
      sortDirections: ['descend', 'ascend'],
      sorter: true
    }
  },
  {
    title: '通过数',
    dataIndex: 'acceptedCount',
    width: 100,
    sortable: {
      sortDirections: ['descend', 'ascend'],
      sorter: true
    }
  },
  {
    title: '出题时间',
    dataIndex: 'createTime',
    slotName: 'createTime',
    width: 120,
    sortable: {
      sortDirections: ['descend', 'ascend'],
      sorter: true
    }
  }
])

/**
 * 搜索相关
 */
const searchParam = ref<ProblemQuery>({
  current: 1,
  size: 20,
  sortBy: '',
  sortOrderASC: false,
  id: '',
  creatorId: '',
  title: '',
  tag: ''
})

const filterParam = ref({
  id: '',
  title: '',
  tag: ''
})

const onFilterParamChange = () => {
  searchParam.value.id = filterParam.value.id
  searchParam.value.title = filterParam.value.title
  searchParam.value.tag = filterParam.value.tag
}

const onSorterChange = (dataIndex: string, direction: string) => {
  if (!direction) {
    searchParam.value.sortBy = ''
    return
  }
  searchParam.value.sortBy = dataIndex
  searchParam.value.sortOrderASC = direction === 'ascend'
}

const onSearch = () => {
  // queryRecordVOWithPagination(searchParam.value).then((resp) => {
  //   tableData.value = resp.data.data.records
  //   totalData.value = resp.data.data.total
  // })
  var p: ProblemPreviewsQuery = {
    sortedBy: "id",
    orderASC: "true",
    rangeStart: 1,
    rangeEnd: 20
  }
  queryProblemPreviews(p).then((res) => {
    console.log(res.data)
  })
}

/**
 * 操作相关
 */
const onEdit = (id: string) => {
  router.push({
    path: '/problem/edit/' + id,
    params: { id: id }
  })
}

const onDelete = (id: string) => {
  deleteProblemById(id).then(() => {
    onSearch()
  })
}

onMounted(() => {
  if (props.type === 'mine') {
    columns.value.push({
      title: '操作',
      slotName: 'operation',
      width: 100,
      align: 'center'
    })
    searchParam.value.creatorId = userStore.user.id
  } else {
    onSearch()
  }
})

watch(searchParam.value, () => onSearch())
</script>

<template>
  <div id="problems-panel">
    <a-card :title="props.title" style="padding: 16px">
      <template v-if="props.type === 'mine'" #extra>
        <a-button status="success" type="outline" @click="router.push('/problem/add')">
          <template #icon>
            <icon-plus />
          </template>
          创建题目
        </a-button>
      </template>

      <!-- 搜索筛选 -->
      <a-row :gutter="16" style="margin-bottom: 16px">
        <a-col flex="2">
          <a-input v-model="filterParam.id" placeholder="查询题号">
            <template #prepend>题号</template>
          </a-input>
        </a-col>
        <a-col flex="2">
          <a-input v-model="filterParam.title" placeholder="筛选题目名称">
            <template #prepend>题目</template>
          </a-input>
        </a-col>
        <a-col flex="2">
          <a-input v-model="filterParam.tag" placeholder="筛选题目标签">
            <template #prepend>标签</template>
          </a-input>
        </a-col>
        <a-col flex="1">
          <a-button long type="primary" @click="onFilterParamChange">
            搜索
            <template #icon>
              <icon-search />
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
        @cell-click="(record) => router.push('/problem/' + record.id)"
        @page-size-change="(pageSize) => (searchParam.size = pageSize)"
        @sorter-change="onSorterChange"
      >
        <template #tags="{ record }">
          <a-space v-if="record.tags">
            <a-tag v-for="tag in record.tags" :key="tag" color="blue" size="small">
              {{ tag }}
            </a-tag>
          </a-space>
          <a-typography-text v-else type="secondary">暂无标签</a-typography-text>
        </template>
        <template #acceptedRate="{ record }">
          <span v-if="record.submitCount !== 0">
            {{ ((record.acceptedCount / record.submitCount) * 100).toFixed(1) }}%
          </span>
          <a-typography-text v-else type="secondary">暂无数据</a-typography-text>
        </template>
        <template #createTime="{ record }">
          {{ record.createTime.slice(0, 10) }}
        </template>
        <template #operation="{ record }">
          <a-space>
            <a-button status="success" @click="onEdit(record.id)">
              <template #icon>
                <icon-edit />
              </template>
            </a-button>
            <a-popconfirm content="确定要删除这个题目吗?" type="warning" @ok="onDelete(record.id)">
              <a-button status="danger">
                <template #icon>
                  <icon-delete />
                </template>
              </a-button>
            </a-popconfirm>
          </a-space>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<style scoped>
:deep(tbody .arco-table-tr) {
  cursor: pointer;
}
</style>
