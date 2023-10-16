<template>
  <div class="card">
    <h2>题目列表</h2>
    <a-table :columns="columns" :data="data" />
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const columns = [
      {
        title: '编号',
        dataIndex: 'key'
      },
      {
        title: '标题',
        dataIndex: 'tilte'
      },
      {
        title: '权限',
        dataIndex: 'authority'
      },
      {
        title: '分类',
        dataIndex: 'classify'
      },
      {
        title: '题目数',
        dataIndex: 'nums'
      },
      {
        title: '作者',
        dataIndex: 'author'
      }
    ]
    //来一段测试数据
    const data = reactive([
      {
        key: '001',
        title: 'Hello World',
        authority: '公开',
        classify: '数据结构',
        nums: 5,
        author: '王'
      }
    ])

    return {
      columns,
      data
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
</style>
