<script setup lang='ts'>
import { ref } from 'vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css'
import { useRouter } from 'vue-router';
const router = useRouter();
// 比赛需要的相关数据
// id 主键
// title 比赛标题
// start_time	开始时间
// duration	比赛时长（s）
// visible	boolean		是否可见

// 创建一个响应式引用来存储比赛数据
// 需要从数据库获取
const competitions = ref([
  {
    id: 1,
    title: 'W-J(普及组)测试-3',
    start_time: '2024-01-13 09:00:00',
    duration: 3600,
    visible: true
  },
  {
    id: 2,
    title: 'W-J(普及组)测试-2',
    start_time: '2024-01-7 08:3-:00',
    duration: 3600,
    visible: true
  }
]);

//TODO:跳转以及跳转界面
const handleRowClick = (record: any, ev: Event) => {
  const routePath = '/train/trainsection'; 
  router.push({ path: routePath, query: { id: record.id } });
};
</script>

<template>
  <div :style="{ display: 'flex' }">
    <a-card :style="{ width: '100%' }" title="全部比赛">
      <a-list>
        <a-list-item v-for="competition in competitions" :key="competition.id" @click="handleRowClick">
          <a-list-item-meta
            :title="competition.title"
            :description="'开始时间: ' + competition.start_time + '持续时间' + competition.duration"
          >
            <template #avatar>
              <a-avatar shape="square">
                <img
                  alt="avatar"
                  src="../../public/material/Competition.jpg"
                />
              </a-avatar>
            </template>
            <template #description>
              <div>
                <icon-calendar />
                开始时间: {{competition.start_time}}&nbsp;&nbsp;&nbsp;&nbsp; <!--这里用来添加宽度 可删除-->
                <icon-schedule />
                持续时间: {{competition.duration}}
              </div>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<style scoped>

</style>
