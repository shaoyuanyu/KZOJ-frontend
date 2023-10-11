<template>
    <div class="card">
      <h2>搜索训练</h2>
      <input type="text" placeholder="搜索训练">
      <div>
        <label for="permissions">训练权限:</label>
        <select id="permissions">
          <option value="public">公开训练</option>
          <option value="private">私有训练</option>
          <!-- 后期添加 -->
        </select>
      </div>
      <div>
        <label for="categories">训练分类:</label>
        <select id="categories">
          <option value="data-structures">数据结构</option>
          <option value="advanced-algorithms">高级算法</option>
          <!-- 后期添加 -->
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchCard',
  };
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
  