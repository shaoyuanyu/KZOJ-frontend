<script setup lang="ts"></script>

<template>
  <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
    <a-card hoverable :style="{ width: '560px' }">
      <template #cover>
        <img src="/kz_logo.png" />
      </template>

      <a-card-meta title="KZOJ">
        <template #description>
          <a href="https://github.com/shaoyuanyu/KZOJ-frontend">KZOJ</a> <br />
          forked from
          <a href="https://github.com/DXMY-Fs/MOJ-frontend">MOJ</a>
        </template>
      </a-card-meta>
    </a-card>
    
  </div>
</template>
