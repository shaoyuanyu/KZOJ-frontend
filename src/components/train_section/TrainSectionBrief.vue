<script setup lang="ts">
import { defineProps } from 'vue';
  
const props = defineProps({
    data: {
    type: Object,
    required: true
    }
});
</script>

<template>
    <div :style="{ display: 'flex' }">
      <a-card :style="{ width: '30%' , marginTop: '5px' }">
        <div style="display: flex; justify-content: space-between; padding: 16px;">
          <span style="text-align: left;">训练编号</span>
          <span style="text-align: right;">{{ data.id }}</span>
        </div>
  
        <div style="display: flex; justify-content: space-between; padding: 16px;">
          <span>训练权限</span>
          <a-tag color="red">{{ data.auth }}</a-tag>
        </div>
  
        <div style="display: flex; justify-content: space-between; padding: 16px;">
          <span>训练分类</span>
          <a-tag color="green">{{ data.categoryName }}</a-tag>
        </div>
  
        <div style="display: flex; justify-content: space-between; padding: 16px;">
          <span style="text-align: left;">总题数</span>
          <span style="text-align: right;">{{ data.num }}</span>
        </div>
  
        <div style="display: flex; justify-content: space-between; padding: 16px;">
          <span style="text-align: left;">作者</span>
          <span style="text-align: right;">{{ data.author }}</span>
        </div>
  
        <div style="display: flex; justify-content: space-between; padding: 16px;">
          <span style="text-align: left;">最近更新</span>
          <span style="text-align: right;">{{ data.gmtModified }}</span>
        </div>
  
      </a-card>
  
      <div :style="{ width: '5px' }"></div>
  
      <a-card :style="{ width: '70%' , marginTop: '5px' }">
        <h3> 训练简介 </h3>
        <div> {{ data.brief }} </div>
      </a-card>
    </div>
</template>