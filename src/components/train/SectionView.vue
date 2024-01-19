<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { defineComponent } from 'vue';
import TrainSectionHead from '../train_section/TrainSectionHead.vue';
import TrainSectionBrief from '../train_section/TrainSectionBrief.vue';

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
}
</script>

<template>
  <!-- 标题卡片，注意需要传入参数 -->
  <TrainSectionHead :data="data" />

  <div :style="{ display: 'flex' }">
    <a-card :style="{ width: '100%', marginTop: '5px' }">
      <div class="menu">
        <a-menu mode="horizontal" :default-selected-keys="['0']">
        <a-menu-item key="0"><icon-home />训练简介</a-menu-item>
        <a-menu-item key="1"><icon-list />题目列表</a-menu-item>
        <a-menu-item key="2"><icon-ordered-list />记录榜单</a-menu-item>
        </a-menu>
      </div>
    </a-card>
  </div>

  <!-- 下方卡片，注意需要传入参数 -->
  <TrainSectionBrief :data="data" />

</template>