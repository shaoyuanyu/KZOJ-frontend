<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
    data: {
    type: Object,
    required: true
    }
});

// 上方传入的data中包含主键ID
// 可以通过主键向数据库索要相关数据
// 形成下方的题目列表
const problemData = ref([
  {
    problemID: '001',
    title: '测试',
    difficulty: '入门',
    tag: null,
    ACPassRate: 0.6
  },
  {
    problemID: 'P1002',
    title: '输出第二个整数',
    difficulty: '入门',
    tag: null,
    ACPassRate: 0.6
  },
  {
    problemID: 'P1000',
    title: 'Hello, World!',
    difficulty: '入门',
    tag: null,
    ACPassRate: 0.3
  },
  {
    problemID: 'P1001',
    title: '地球人口承载力估计',
    difficulty: '入门',
    tag: '优选',
    ACPassRate: 0.5
  },
]);

const handleRowClick = (record: any, ev: Event) => {
  router.push({ path: `/problem/${record.problemID}` });
};

</script>

<template>
    <a-table :data="problemData" @row-click="handleRowClick" :style="{ marginTop: '5px', cursor: 'pointer' }">
      <template #columns>
        <a-table-column title="题目ID" data-index="problemID" align="center"></a-table-column>
        <a-table-column title="标题" data-index="title" align="center"></a-table-column>
        <a-table-column title="难度" data-index="difficulty" align="center">
          <template #cell="{ record }">
            <a-tag color="red">{{ record.difficulty }}</a-tag>
          </template>
        </a-table-column>
        <a-table-column title="标签" data-index="tag" align="center">
          <template #cell="{ record }">
            <a-tag v-if="record.tag != null" color="red">{{ record.tag }}</a-tag>
          </template>
        </a-table-column>
        <a-table-column title="AC通过率" data-index="ACPassRate" align="center">
          <template #cell="{ record }">
            <a-progress :percent="record.ACPassRate">{{ record.ACPassRate }}</a-progress>
          </template>
        </a-table-column>
      </template>
    </a-table>
</template>