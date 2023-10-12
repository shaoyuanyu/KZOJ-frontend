<template>
  <div class="card">
    <h2>题目列表</h2>
    <a-table :columns="columns" :data="data" />
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const columns = [
      {
        title: '编号',
        dataIndex: 'key',
      },
      {
        title: '标题',
        dataIndex: 'tilte',
      },
      {
        title: '权限',
        dataIndex: 'authority',
      },
      {
        title: '分类',
        dataIndex: 'classify',
      },
      {
        title: '题目数',
        dataIndex: 'nums',
      },
      {
        title: '作者',
        dataIndex: 'author',
      },
    ];
    const data = reactive([{
      key: '001',
      title: 'Hello World',
      authority: '公开',
      classify: '数据结构',
      nums: 5,
      author: '王',
    }]);

    return {
      columns,
      data
    }
  },
}
</script>