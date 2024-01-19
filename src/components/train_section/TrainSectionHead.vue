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
        <a-card :style="{ width: '100%' }">
        <h2 :style="{ textAlign: 'center' }">{{ data.title }}</h2>
        <a-progress :percent="data.progress" :style="{width:'100%'}" :steps="data.num" :stroke-width="10"/>
        </a-card>
    </div>
</template>