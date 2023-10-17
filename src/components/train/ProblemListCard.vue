<template>
  <div>
    <a-card :style="{ width: '100%' }" title="题目列表">
      <ul>
        <li v-for="(part, partIndex) in data" :key="partIndex">
          <h2>{{ part.title }}</h2>
          <ul>
            <li v-for="(chapter, chapterIndex) in part.chapters" :key="chapterIndex">
              <h3>{{ chapter.title }}</h3>
              <ul>
                <li v-for="(section, sectionIndex) in chapter.sections" :key="sectionIndex">
                  <a-button :type="section.buttonType" class="left-align" long>
                    <span>{{ section }}</span>
                  </a-button>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </a-card>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    // 示例数据，多级列表
    const data = reactive([
      {
        title: '基础篇',
        chapters: [
          {
            title: '第一部分 C++语言',
            sections: ['C++语言入门', '顺序结构程序设计']
          },
          {
            title: '第二部分 基础算法',
            sections: ['高精度计算', '数据排序']
          }
        ]
      },
      {
        title: '高级篇',
        chapters: [
          {
            title: '第三部分 数据结构',
            sections: ['数组', '链表', '树']
          },
          {
            title: '第四部分 算法',
            sections: ['排序算法', '查找算法']
          }
        ]
      }
    ])

    return {
      data
    }
  }
}
</script>

<style scoped>
.left-align {
  text-align: left;
}

</style>