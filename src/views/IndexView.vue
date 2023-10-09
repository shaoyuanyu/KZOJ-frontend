<template>
  <div class="container">
    <!-- 欢迎卡片 -->
    <a-card hoverable class="welcome-card">
      <div class="welcome-text">欢迎来到KZOJ</div>
      <template #cover>
        <div class="card-background">
          <img src="/kz_logo.png" style="width: 400px; margin: 0 auto;" />
        </div>
      </template>
    </a-card>

    <!-- 过题榜单卡片 -->
    <a-card hoverable class="weekly-ranking-card">
      <div class="weekly-ranking-text">最近一周过题榜单</div>
      
    </a-card>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.welcome-card {
  flex: 1; /* 左侧卡片占据一部分空间 */
  margin-right: 20px; /* 添加右侧间距 */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.weekly-ranking-card {
  flex: 1; /* 右侧卡片占据一部分空间 */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.welcome-text {
  color: #87cfeb;
  font-size: 24px;
  margin-top: 0px;
}

.weekly-ranking-text {
  color: #87cfeb;
  font-size: 24px;
  margin-top: 0px; 
}

.card-background {
  text-align: center;
  padding: 20px;
}
</style>

