<template>
  <div :style="{ display: 'flex', flexDirection: 'column', width: '100%' }">
    <a-card :style="{ width: '100%' }">
      <!-- 搜索栏和标题的容器 -->
      <div :style="{ display: 'flex', alignItems: 'center', marginBottom: '0px' }">
        <h2 :style="{ marginRight: '30px' }">搜索训练</h2>
        <div class="search-container">
          <a-input-search :style="{ width: '320px' }" placeholder="输入关键词" search-button />
        </div>
      </div>
      <div>
        <h3>训练权限</h3>
        <a-space>
          <a-button type="primary">全部</a-button>
          <a-button>公开训练</a-button>
          <a-button>私有训练</a-button>
        </a-space>
      </div>
      <div>
        <h3>训练分类</h3>
        <a-button>高级数据结构</a-button>
        <a-button>高级算法</a-button>
        <a-button>高级数学及其他</a-button>
        <a-button>图论算法</a-button>
        <a-button>高级动态规划</a-button>
        <a-button>CSP-J</a-button>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'SearchCard'
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
