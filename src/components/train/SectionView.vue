<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { defineComponent } from 'vue';
import TrainSectionHead from '../train_section/TrainSectionHead.vue';
import TrainSectionBrief from '../train_section/TrainSectionBrief.vue';
import TrainSectionProblemList from '../train_section/TrainSectionProblemList.vue';
import TrainSectionRank from '../train_section/TrainSectionRank.vue';

const route = useRoute();
const id = ref(route.query.id);

// 上面传入了训练主键id
// 可以根据主键id查询数据库得到下列数据
// 并建立下列数组
const data = {
  id: 1000,
  title: '入门',
  progress: 0.3,
  auth: 'Private',
  categoryName: 'C++基础',
  num: 3,
  author: 'root',
  gmtModified: '2024-01-01',
  brief: '这是有关c++的入门测试。'
};

// 创建一个响应式引用来跟踪当前选中的菜单项
const selectedKey = ref('0');

// 在handleClick方法中更新selectedKey
const handleClick = (key: string) => {
  selectedKey.value = key;
};

// 使用toRefs将ref转换为可以在模板中直接访问的对象
const state = toRefs({ selectedKey });

</script>

<template>
  <!-- 标题卡片，注意需要传入参数 -->
  <TrainSectionHead :data="data" />

  <div :style="{ display: 'flex' }">
    <a-card :style="{ width: '100%', marginTop: '5px' }">
      <div class="menu">
        <a-menu mode="horizontal" :selected-keys="[state.selectedKey.value]" @menu-item-click="handleClick">
          <a-menu-item key="0"><icon-home />训练简介</a-menu-item>
          <a-menu-item key="1"><icon-list />题目列表</a-menu-item>
          <a-menu-item key="2"><icon-ordered-list />记录榜单</a-menu-item>
        </a-menu>
      </div>
    </a-card>
  </div>

  <!-- 使用v-if和v-else-if指令动态显示不同的组件 -->
  <TrainSectionBrief v-if="state.selectedKey.value === '0'" :data="data" />
  <TrainSectionProblemList v-else-if="state.selectedKey.value === '1'" :data="data" />
  <TrainSectionRank v-else-if="state.selectedKey.value === '2'" :data="data" />
</template>