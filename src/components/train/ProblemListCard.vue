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
      />
    </a-card>
  </div>
</template>

<script>
import { ref } from 'vue';
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import WelcomeCard from '@/components/home/WelcomeCard.vue'

export default {
  //示例数据
  setup() {
    const router = useRouter()

    const colors = [
      '#E57373',  // 淡红色
      '#FFB74D',  // 橙黄色
      '#FF9800',  // 橙色
      '#FFD54F',  // 金黄色
      '#AED581',  // 淡绿色
      '#4CAF50',  // 绿色
      '#26C6DA',  // 青色
      '#2196F3',  // 蓝色
      '#1976D2',  // 深蓝色
      '#9C27B0',  // 紫色
      '#E91E63',  // 粉红紫色
      '#E91E63',  // 洋红色
      '#B0BEC5'   // 灰色
    ];


    const treeData = [
      {
        title: '基础篇',
        children: [
          {
            title: '第一部分 C++语言',
            children: [
              {
                title: 'C++语言入门',
                style: {
                  backgroundColor: colors[1], 
                }
              },
              {
                title: '顺序结构程序设计',
                style: {
                  backgroundColor: colors[2], 
                }
              }
            ]
          },
          {
            title: '第二部分 基础算法',
            children: [
              {
                title: '高精度计算',
                style: {
                  backgroundColor: colors[3], 
                }
              },
              {
                title: '数据排序',
                style: {
                  backgroundColor: colors[4], 
                }
              }
            ]
          },
        ],
      },
      {
        title: '高级篇',
          children: [
            {
              title: '第三部分 数据结构',
              key: '0-0-2',
              children: [
                {
                  title: '数组',
                  style: {
                    backgroundColor: colors[5], 
                  }
                },
                {
                  title: '链表',
                  style: {
                    backgroundColor: colors[6], 
                  }
                }
              ]
            },
            {
              title: '第四部分 算法',
              children: [
                {
                  title: '排序算法',
                  style: {
                    backgroundColor: colors[7], 
                  }
                },
                {
                  title: '查找算法',
                  style: {
                    backgroundColor: colors[8], 
                  }
                }
              ]
            },
          ],
      },
    ];
    
    const size = ref('large');

     // 点击树节点时触发路由跳转
     const handleNodeClick = (node) => {
      if (node.key) {
        // 获取节点的 key，可以根据 key 决定路由路径
        const routePath = '/';
        router.push(routePath);
      }
    };

    return {
      treeData,
      size,
      colors,
      handleNodeClick,
    }
  }
}
</script>

<style scoped>

</style>