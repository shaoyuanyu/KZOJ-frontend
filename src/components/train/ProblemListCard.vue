<template>
  <div>
    <a-card :style="{ width: '100%' }">
      <a-tree
        :data="treeData"
        :default-expand-all="true"
        :show-line="true"
        class="custom-tree"
        @select="handleNodeSelect"
      />
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

interface TreeNodeData {
  title: string;
  disabled: boolean;
  children?: TreeNodeData[];
  style?: object;
};

const treeData = [
  {
    title: '基础篇',
    selectable: false,
    children: [
      {
        title: '第一部分 C++语言',
        selectable: false,
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
        selectable: false,
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
    selectable: false,
    children: [
      {
        title: '第三部分 数据结构',
        selectable: false,
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
        selectable: false,
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

const handleNodeSelect = (
  selectedKeys: (string | number)[],
  data: { selected?: boolean; selectedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event }
) => {
  if (selectedKeys.length > 0) {
    const routePath = '/train/trainsection'; 
    router.push(routePath);
  }
};
</script>

<style scoped>

</style>