<script setup lang="ts">
import { ref, watch } from 'vue'
// component
//import CodeEditor from '@/components/code/CodeEditor.vue'
import CodeEditor from '@/components/code_editor/CodeEditor.vue'
// store
import { useLangStore } from '@/stores/lang'

const props = defineProps<{
  id: string
  moved?: number
}>()

// 编程语言选择
const langStore = useLangStore()
const langIndex = ref(1)
const langList = ['C', 'C++', 'Python', 'Java']
watch(langIndex, () => {
  langStore.switchLang(langList[langIndex.value - 1])
})

//
const isDark = ref(false)
const fontSize = ref(16)
const tabLen = ref(4)
const editorTheme = ref("system")
watch(fontSize, () => {
  console.log(fontSize.value)
})

// 设置按钮
const settingVisible = ref(false)

// 控制台
const consoleVisible = ref(false)
</script>

<template>
  <div class="editor-card" v-if="!consoleVisible">
    <!-- 导航栏 -->
    <a-row :wrap="false" class="nav-bar">
      <a-col :span="10">
        <a-space>
          <p>语言选择: </p>
          <a-select v-model="langIndex" placeholder="请选择编程语言">
            <a-option :value="1">C</a-option>
            <a-option :value="2">C++</a-option>
            <a-option :value="3">Python</a-option>
            <a-option :value="4">Java</a-option>
          </a-select>
        </a-space>
      </a-col>

      <a-col :span="14">
        <div style="display: flex; justify-content: right;">
          <a-button-group type="primary">
            <!-- 撤销 -->
            <a-button>
              <template #icon>
                <icon-reply />
              </template>
            </a-button>

            <!-- 历史提交 -->
            <a-button>
              <template #icon>
                <icon-history />
              </template>
            </a-button>

            <!-- 重置 -->
            <a-button>
              <template #icon>
                <icon-refresh />
              </template>
            </a-button>

            <!-- 设置 -->
            <a-button @click="settingVisible=true">
              <template #icon>
                <icon-settings />
              </template>
            </a-button>
          </a-button-group>
        </div>
        
        <!-- 弹出框 -->
        <a-modal v-model:visible="settingVisible" hide-cancel :closable="false">
          <template #title>
            代码编辑器设置
          </template>
          <div style="display: flex; flex-direction: column; font-size: large;">
            <a-row style="align-items: center">
              <a-col :span="18">
                <p>编辑器主题</p>
              </a-col>
              <a-col :span="6">
                <a-select v-model="editorTheme" placeholder="选择编辑器主题">
                  <a-option :value="'system'">跟随系统</a-option>
                  <a-option :value="'vs'">vs light</a-option>
                  <a-option :value="'vs-dark'">vs dark</a-option>
                </a-select>
              </a-col>
            </a-row>
            
            <a-row style="align-items: center;">
              <a-col :span="18">
                <p>字体选择</p>
              </a-col>
              <a-col :span="6">
                <a-select placeholder="选择字体">
                  <a-option>字体1</a-option>
                  <a-option>字体2</a-option>
                </a-select>
              </a-col>
            </a-row>

            <a-row style="align-items: center">
              <a-col :span="18">
                <p>字体大小</p>
              </a-col>
              <a-col :span="6">
                <a-input-number
                  v-model="fontSize"
                  :default-value="16"
                  :precision="0"
                  :step="1"
                  :min="8"
                  :max="28"
                  placeholder="选择字号"
                >
                  <template #plus>
                    <icon-plus />
                  </template>
                  <template #minus>
                    <icon-minus />
                  </template>
                </a-input-number>
              </a-col>
            </a-row>

            <a-row style="align-items: center">
              <a-col :span="18">
                <p>Tab长度</p>
              </a-col>
              <a-col :span="6">
                <a-select v-model="tabLen" placeholder="选择Tab长度">
                  <a-option :value="4">4</a-option>
                  <a-option :value="2">2</a-option>
                </a-select>
              </a-col>
            </a-row>
          </div>
        </a-modal>
      </a-col>
    </a-row>

    <!-- 代码编辑区 -->
    <div class="code-editor-container">
      <CodeEditor
        :language="langStore.lang.toLowerCase()"
        :appearance="{ 
          isDark: isDark, 
          fontSize: fontSize!
        }"
      />
    </div>

    <!-- 控制台 -->
    <div>
      <div
        id="console"
        style="
          width: 100%;
          height: 200px;
          background-color: var(--color-fill-2);
          position: relative;
          overflow: hidden;
          line-height: 200px;
          text-align: center;
        "
        v-if="consoleVisible"
      />

      <a-row style="display: flex; align-items: center; height: 50px; background-color: antiquewhite;">
        <a-col :span="12">
          <div style="display: flex; justify-content: left;">
            <a-button type="primary" @click="consoleVisible=true">控制台</a-button>
          </div>
        </a-col>

        <a-col :span="12">
          <div style="display: flex; justify-content: right;">
            <a-button-group type="primary">
              <a-button>运行</a-button>
              <a-button>提交</a-button>
            </a-button-group>
          </div>
        </a-col>
      </a-row>

      <!-- 控制台弹出drawer -->
      <a-drawer
        popup-container="#console"
        placement="bottom"
        height="180px"
        :visible="consoleVisible"
        @ok="consoleVisible = false"
        @cancel="consoleVisible = false"
      >
        <template #title> Title </template>
        <div
          >You can customize modal body text by the current situation. This modal
          will be closed immediately once you press the OK button.</div
        >
      </a-drawer>
    </div>
  </div>

  <div v-else>
    <a-split
      direction="vertical"
      style="height: 1000px"
      min="0.4"
      max="0.8"
    >
      <template #first>
        <div style="height: 100%">
          <!-- 导航栏 -->
          <a-row :wrap="false" class="nav-bar">
            <a-col :span="10">
              <a-space>
                <p>语言选择: </p>
                <a-select v-model="langIndex" placeholder="请选择编程语言">
                  <a-option :value="1">C</a-option>
                  <a-option :value="2">C++</a-option>
                  <a-option :value="3">Python</a-option>
                  <a-option :value="4">Java</a-option>
                </a-select>
              </a-space>
            </a-col>

            <a-col :span="14">
              <div style="display: flex; justify-content: right;">
                <a-button-group type="primary">
                  <!-- 撤销 -->
                  <a-button>
                    <template #icon>
                      <icon-reply />
                    </template>
                  </a-button>

                  <!-- 历史提交 -->
                  <a-button>
                    <template #icon>
                      <icon-history />
                    </template>
                  </a-button>

                  <!-- 重置 -->
                  <a-button>
                    <template #icon>
                      <icon-refresh />
                    </template>
                  </a-button>

                  <!-- 设置 -->
                  <a-button @click="settingVisible=true">
                    <template #icon>
                      <icon-settings />
                    </template>
                  </a-button>
                </a-button-group>
              </div>
              
              <!-- 弹出框 -->
              <a-modal v-model:visible="settingVisible" hide-cancel :closable="false">
                <template #title>
                  代码编辑器设置
                </template>
                <div style="display: flex; flex-direction: column; font-size: large;">
                  <a-row style="align-items: center">
                    <a-col :span="18">
                      <p>编辑器主题</p>
                    </a-col>
                    <a-col :span="6">
                      <a-select v-model="editorTheme" placeholder="选择编辑器主题">
                        <a-option :value="'system'">跟随系统</a-option>
                        <a-option :value="'vs'">vs light</a-option>
                        <a-option :value="'vs-dark'">vs dark</a-option>
                      </a-select>
                    </a-col>
                  </a-row>
                  
                  <a-row style="align-items: center;">
                    <a-col :span="18">
                      <p>字体选择</p>
                    </a-col>
                    <a-col :span="6">
                      <a-select placeholder="选择字体">
                        <a-option>字体1</a-option>
                        <a-option>字体2</a-option>
                      </a-select>
                    </a-col>
                  </a-row>

                  <a-row style="align-items: center">
                    <a-col :span="18">
                      <p>字体大小</p>
                    </a-col>
                    <a-col :span="6">
                      <a-input-number
                        v-model="fontSize"
                        :default-value="16"
                        :precision="0"
                        :step="1"
                        :min="8"
                        :max="28"
                        placeholder="选择字号"
                      >
                        <template #plus>
                          <icon-plus />
                        </template>
                        <template #minus>
                          <icon-minus />
                        </template>
                      </a-input-number>
                    </a-col>
                  </a-row>

                  <a-row style="align-items: center">
                    <a-col :span="18">
                      <p>Tab长度</p>
                    </a-col>
                    <a-col :span="6">
                      <a-select v-model="tabLen" placeholder="选择Tab长度">
                        <a-option :value="4">4</a-option>
                        <a-option :value="2">2</a-option>
                      </a-select>
                    </a-col>
                  </a-row>
                </div>
              </a-modal>
            </a-col>
          </a-row>

          <!-- 代码编辑区 -->
          <div class="code-editor-container">
            <CodeEditor
              :language="langStore.lang.toLowerCase()"
              :appearance="{ 
                isDark: isDark, 
                fontSize: fontSize!
              }"
            />
          </div>
        </div>
      </template>

      <template #second>
        <!-- 控制台 -->
        <div>
          <div
            id="console"
            style="
              width: 100%;
              height: 200px;
              background-color: var(--color-fill-2);
              position: relative;
              overflow: hidden;
              line-height: 200px;
              text-align: center;
            "
          />

          <a-row style="display: flex; align-items: center; height: 50px; background-color: antiquewhite;">
            <a-col :span="12">
              <div style="display: flex; justify-content: left;">
                <a-button type="primary" @click="consoleVisible=true">控制台</a-button>
              </div>
            </a-col>

            <a-col :span="12">
              <div style="display: flex; justify-content: right;">
                <a-button-group type="primary">
                  <a-button>运行</a-button>
                  <a-button>提交</a-button>
                </a-button-group>
              </div>
            </a-col>
          </a-row>

          <!-- 控制台弹出drawer -->
          <a-drawer
            popup-container="#console"
            placement="bottom"
            height="180px"
            :visible="consoleVisible"
            @ok="consoleVisible = false"
            @cancel="consoleVisible = false"
          >
            <template #title> Title </template>
            <div
              >You can customize modal body text by the current situation. This modal
              will be closed immediately once you press the OK button.</div
            >
          </a-drawer>
        </div>
      </template>
    </a-split>
  </div>
</template>

<style scoped>
.editor-card {
  display: flex;
  flex-direction: column;

  padding: 16px 16px;

  /* 16*2 */
  height: calc(100% - 32px);

  background-color: aquamarine;
}
.nav-bar {
  margin-bottom: 16px;
}
.code-editor-container {
  /* 16*2 + 16 + 160 */
  height: calc(100% - 48px - 50px);

  /* background-color: antiquewhite; */
}
</style>
