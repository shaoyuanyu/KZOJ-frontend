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

const columns = ref([
  { title: '用户', dataIndex: 'nickname'},
  { title: '年级', dataIndex: 'grade', filterable: { filters: [{ text: '= 2019', value: '2019',}, { text: '> 2020', value: '2020', }], filter: (value: string, record: { grade: string }) => record.grade === value, multiple: true} },
  { title: '姓名', dataIndex: 'realname'},
  { title: 'AC总数', dataIndex: 'ACcount'},
  { title: 'P1002', dataIndex: 'problem1'}, // 这里的这个索引有待商讨
  { title: 'P1000', dataIndex: 'problem2'},
  { title: 'P1001', dataIndex: 'problem3'},
  // 添加更多列数据...
]);

const rankData = ref([
  {
    nickname: 'wsh',
    grade: '2019',
    realname: '王书豪',
    ACcount:'3',
    problem1: 'AC',
    problem2: 'AC',
    problem3: 'AC',
  },
  {
    nickname: 'shw',
    grade: '2019',
    realname: '书豪王',
    ACcount:'3',
    problem1: 'AC',
    problem2: 'AC',
    problem3: 'AC',
  },
  {
    nickname: 'hws',
    grade: '2019',
    realname: '豪王书',
    ACcount:'3',
    problem1: 'AC',
    problem2: 'AC',
    problem3: 'AC',
  },
]);

</script>

<template>
    <a-table :data="rankData" :style="{ marginTop: '5px' }" :filter-icon-align-left="false">
      <template #columns>
        <a-table-column align="center" v-for="(column, index) in columns" :key="index" :title="column.title" :data-index="column.dataIndex"></a-table-column>
      </template>
    </a-table>
</template>