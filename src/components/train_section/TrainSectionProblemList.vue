<script setup lang="ts">
import { ref } from 'vue'

const problemData = ref([
  {
    problemID: '1',
    title: '问题1',
    difficulty: '简单',
    tag: '标签1',
    ACPassRate: '80%'
  },
  {
    problemID: '2',
    title: '问题2',
    difficulty: '中等',
    tag: '标签2',
    ACPassRate: '60%'
  },
]);

const props = defineProps({
    data: {
    type: Object,
    required: true
    }
});

</script>

<template>
    <a-table :data="problemData">
      <template #columns>
        <a-table-column title="题目ID" data-index="problemID"></a-table-column>
        <a-table-column title="标题" data-index="title"></a-table-column>
        <a-table-column title="难度" data-index="difficulty"></a-table-column>
        <a-table-column title="标签" data-index="tag"></a-table-column>
        <a-table-column title="AC通过率" data-index="ACPassRate"></a-table-column>
      </template>
    </a-table>
</template>