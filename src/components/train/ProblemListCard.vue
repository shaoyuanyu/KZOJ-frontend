<template>
  <div>
    <a-card :style="{ width: '100%' }" title="题目列表">
      <a-tree
        :data="treeData"
        :default-expanded-keys='all'
        :default-selected-keys="[]"
        :size='large'
        class="custom-tree"
      />
    </a-card>
  </div>
</template>

<script>
import { ref } from 'vue';
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  //示例数据
  setup() {

    const treeData = [
      {
        title: '基础篇',
        key: '0-0',
        children: [
          {
            title: '第一部分 C++语言',
            key: '0-0-0',
            children: [
              {
                title: 'C++语言入门',
                style: {
                  backgroundColor: "#3491FA", 
                }
              },
              {
                title: '顺序结构程序设计',
                style: {
                  backgroundColor: "#3491FA", 
                }
              }
            ]
          },
          {
            title: '第二部分 基础算法',
            key: '0-0-1',
            children: [
              {
                title: '高精度计算',
                style: {
                  backgroundColor: "#3491FA",
                }
              },
              {
                title: '数据排序',
                style: {
                  backgroundColor: "#3491FA",
                }
              }
            ]
          },
        ],
      },
      {
        title: '高级篇',
        key: '0-1',
          children: [
            {
              title: '第三部分 数据结构',
              key: '0-0-2',
              children: [
                {
                  title: '数组',
                  style: {
                    backgroundColor: "#3491FA",
                  }
                },
                {
                  title: '链表',
                  style: {
                    backgroundColor: "#3491FA",
                  }
                }
              ]
            },
            {
              title: '第四部分 算法',
              key: '0-0-3',
              children: [
                {
                  title: '排序算法',
                  style: {
                    backgroundColor: "#3491FA", 
                  }
                },
                {
                  title: '查找算法',
                  style: {
                    backgroundColor: "#3491FA", // 设置背景颜色
                  }
                }
              ]
            },
          ],
      },
    ];

    const size = ref('large');

    return {
      treeData,
      size,
    }
  }
}
</script>

<style scoped>
.custom-tree .ant-tree-treenode.level-2 {
  /* 第三级元素样式 */
  background-color: blue; /* 背景颜色 */
  border: 1px solid red; /* 边框属性 */
}
</style>