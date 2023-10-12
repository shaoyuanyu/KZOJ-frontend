<template>
    <div class="card">
      <h1>全部比赛</h1>
      <a-list>
        <a-list-item v-for="idx in 4" :key="idx">
          <a-list-item-meta
            title="Beijing Bytedance Technology Co., Ltd."
          >
            <template #description>
              <div>
                <icon-calendar /> 2023-09-03 00:18:35 <icon-schedule /> 3小时
              </div>
            </template>
            <template #avatar>
              <a-avatar shape="square">
                <img
                  alt="avatar"
                  src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                />
              </a-avatar>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
  </template>
  

<script>
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';

export default {
  jsx: true // 启用JSX语法扩展
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