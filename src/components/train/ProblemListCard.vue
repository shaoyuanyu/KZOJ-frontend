<script lang="ts">
import { reactive } from 'vue';
import { h } from 'vue';

export default {
  setup() {
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
      }
    ]);

    return {
      columns,
      data
    }
  },
}
</script>

<template>
  <a-table :columns="columns" :data="data">
    <template #auth="{ record }">
      <a-tag>{{ record.auth }}</a-tag>
    </template>
  </a-table>
</template>