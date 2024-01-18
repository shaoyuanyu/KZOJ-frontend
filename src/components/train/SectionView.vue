<template>
    <div :style="{ display: 'flex' }">
        <a-card :style="{ width: '100%' }">
            <!-- 卡片标题为训练标题（selectedKeys） -->
            <h2>{{ trainingTitle }}</h2>
            <!-- 进度条数据在此 -->
            <a-progress :percent="progress" :style="{width:'100%'}" />
        </a-card>
    </div>

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

    <div :style="{ display: 'flex' }">
        <a-card :style="{ width: '30%' , marginTop: '5px' }">
            <div style="display: flex; justify-content: space-between; padding: 16px;">
                <span style="text-align: left;">训练编号</span>
                <span style="text-align: right;">1000</span>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 16px;">
                <span>训练权限</span>
                <a-tag color="red">私有训练</a-tag>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 16px;">
                <span>训练分类</span>
                <a-tag color="green">C++分类</a-tag>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 16px;">
                <span style="text-align: left;">总题数</span>
                <span style="text-align: right;">3</span>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 16px;">
                <span style="text-align: left;">作者</span>
                <span style="text-align: right;">root</span>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 16px;">
                <span style="text-align: left;">最近更新</span>
                <span style="text-align: right;">2023-09-25 17:59</span>
            </div>

        </a-card>


        <a-card :style="{ width: '70%' , marginTop: '5px' }">
            <h3> 训练简介 </h3>
            <div> 这是有关C++的训练 </div>
        </a-card>
    </div>

</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// 标题
const trainingTitle = computed(() => route.query.title);

// 进度条数据
const progress = 0.33;
</script>

<style scoped>
.menu {
  box-sizing: border-box;
  width: 100%;
  background-color: var(--color-neutral-2);
}
</style>