<script setup lang="ts">
import { ref } from 'vue'

const images = ref([
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp'
])
</script>

<template>
  <div class="welcome-card">
    <a-carousel
      :style="{
        width: '600px',
        height: '240px'
      }"
      :default-current="2"
      :auto-play="true"
    >
      <a-carousel-item v-for="(image, key) in images" :key="key">
        <img :src="image" />
      </a-carousel-item>
    </a-carousel>

    <h1 style="color: blueviolet">欢迎访问KZOJ</h1>
  </div>
</template>

<style scoped>
.welcome-card {
  width: 100%;
  height: 100%;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
}
</style>
