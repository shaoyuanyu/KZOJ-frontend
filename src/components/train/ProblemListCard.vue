<template>
  <div>
    <a-card :style="{ width: '100%' }" title="题目列表">
      <a-tree
        :data="treeData"
        :default-expanded-keys='all'
        :default-selected-keys="[]"
        :size='large'
        :show-line="true"
        class="custom-tree"
        @select="handleNodeSelect"
      />
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const colors = [
  '#E57373',
  '#FFB74D',
  '#FF9800',
  '#FFD54F',
  '#AED581',
  '#4CAF50',
  '#26C6DA',
  '#2196F3',
  '#1976D2',
  '#9C27B0',
  '#E91E63',
  '#E91E63',
  '#B0BEC5'
];

const treeData = [
  {
    title: '基础篇',
    disabled: true,
    children: [
      {
        title: '第一部分 C++语言',
        disabled: true,
        children: [
          {
            title: 'C++语言入门',
            style: {
              backgroundColor: '#e0e0e0',
            }
          },
          {
            title: '顺序结构程序设计',
            style: {
              backgroundColor: '#e0e0e0',
            }
          }
        ]
      },
      {
        title: '第二部分 基础算法',
        disabled: true,
        children: [
          {
            title: '高精度计算',
            style: {
              backgroundColor: '#e0e0e0',
            }
          },
          {
            title: '数据排序',
            style: {
              backgroundColor: '#e0e0e0',
            }
          }
        ]
      },
    ],
  },
  {
    title: '高级篇',
    disabled: true,
    children: [
      {
        title: '第三部分 数据结构',
        disabled: true,
        children: [
          {
            title: '数组',
            style: {
              backgroundColor: '#e0e0e0',
            }
          },
          {
            title: '链表',
            style: {
              backgroundColor: '#e0e0e0',
            }
          }
        ]
      },
      {
        title: '第四部分 算法',
        disabled: true,
        children: [
          {
            title: '排序算法',
            style: {
              backgroundColor: '#e0e0e0',
            }
          },
          {
            title: '查找算法',
            style: {
              backgroundColor: '#e0e0e0',
            }
          }
        ]
      },
    ],
  },
];


const router = useRouter();

const handleNodeSelect = (selectedKeys: string[] | number[], info: { selected?: boolean; selectedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event }) => {
  const { selectedNodes, node, e } = info;
  // 处理点击事件，例如，导航到相关页面
  if (selectedKeys.length > 0) {
    const routePath = '/'; // 设置合适的路径
    router.push(routePath);
  }

};
</script>

<style scoped>

</style>