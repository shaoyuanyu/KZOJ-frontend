<template>
    <div class="card">
      <h2>题目列表</h2>
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>标题</th>
            <th>权限</th>
            <th>分类</th>
            <th>题目数</th>
            <th>作者</th>
          </tr>
        </thead>
        <tbody>
          <!-- 在这里使用 v-for 指令遍历题目数据，并为每个题目生成一行 -->
          <tr>
            <td>1</td>
            <td>题目标题 1</td>
            <td>公开</td>
            <td>数据结构</td>
            <td>5</td>
            <td>John Doe</td>
          </tr>
          <!-- 添加更多题目行 -->
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProblemListCard',
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
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ffffff;
    padding: 10px;
    text-align: left;
  }
  </style>
  