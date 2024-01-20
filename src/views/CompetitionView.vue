<script setup lang='ts'>
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'
</script>

<template>
  <div :style="{ display: 'flex' }">
    <a-card :style="{ width: '100%' }" title="全部比赛">
      <a-list>
        <a-list-item v-for="idx in 4" :key="idx">
          <a-list-item-meta title="周测">
            <template #description>
              <div><icon-calendar /> 2023-09-03 00:18:35 <icon-schedule /> 3小时</div>
            </template>
            <template #avatar>
              <a-avatar shape="square">
                <img
                  alt="avatar"
                  src="material/Competition.jpg"
                />
              </a-avatar>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

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
