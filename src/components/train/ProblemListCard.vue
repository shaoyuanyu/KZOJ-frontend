<script lang="ts">
import { reactive } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const show = ref(true)
    const columns = [
      {
        // 对应 private Long id; "主键id"
        title: '编号',
        dataIndex: 'id',
      },
      {
        // 对应private String title; "训练题单标题"
        title: '标题',
        dataIndex: 'title',
      },
      {
        // 对应private String auth; "训练题单权限类型：Public、Private"
        title: '权限',
        dataIndex: 'auth',
      },
      {
        // 对应private String name; "训练题单专用分类名字"
        title: '分类',
        dataIndex: 'categoryName',
      },
      {
        // 暂时未找到对应
        title: '进度',
        dataIndex: 'progress',
      },
      {
        title: '题目数',
        dataIndex: 'num',
      },
      {
        title: '作者',
        dataIndex: 'author',
      },
      {
        title: '最近更新',
        dataIndex: 'gmtModified',
      },
    ];
    const data = reactive([
      {
        id: 1000,
        title: '入门',
        auth: 'Private',
        categoryName: 'C++基础',
        progress: 0,
        num: 3,
        author: 'root',
        gmtModified: '2024-01-01'
      },
      {
        id: 1001,
        title: '顺序结构',
        auth: 'Private',
        categoryName: 'C++基础',
        progress: 0,
        num: 28,
        author: 'root',
        gmtModified: '2024-01-02'
      },
      {
        id: 1002,
        title: '选择结构',
        auth: 'Private',
        categoryName: 'C++基础',
        progress: 0,
        num: 22,
        author: 'root',
        gmtModified: '2024-01-03'
      }
    ]);
    
    const handleRowClick = (record: any, ev: Event) => {
      const routePath = '/train/trainsection'; 
      router.push({ path: routePath, query: { id: record.id } });
    };
    
    return {
      columns,
      data,
      show,
      handleRowClick,
    }
  },
}
</script>

<template>
  <a-table :data="data" @row-click="handleRowClick">
    <template #columns>
      <a-table-column title="编号" data-index="id"></a-table-column>
      <a-table-column title="题单" data-index="title"></a-table-column>
      <a-table-column title="权限" data-index="auth">
        <template #cell="{ record }">
          <a-tag color="red">{{ record.auth }}</a-tag>
        </template>
      </a-table-column>
      <a-table-column title="分类" data-index="categoryName">
        <template #cell="{ record }">
          <a-tag bordered color="green">{{ record.categoryName }}</a-tag>
        </template>
      </a-table-column>
      <a-table-column title="进度" data-index="progress">
        <template #cell="{ record }">
          <a-progress :animation="true" :show-text="false">{{ record.progress }}</a-progress>
        </template>
      </a-table-column>
      <a-table-column title="题目数" data-index="num"></a-table-column>
      <a-table-column title="作者" data-index="author"></a-table-column>
      <a-table-column title="最近更新" data-index="gmtModified"></a-table-column>
    </template>
  </a-table>
</template>