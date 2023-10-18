<template>
    <div :style="{ display: 'flex' }">
        <a-card :style="{ width: '100%' }">
            <h2> 入门 </h2>
            <a-progress :percent="0.3333" :style="{width:'100%'}" />
        </a-card>
    </div>

    <div :style="{ display: 'flex' }">
        <a-card :style="{ width: '100%' }">
            <div class="menu-demo">
                <a-menu mode="horizontal" :default-selected-keys="['1']">
                    <a-menu-item key="0" :style="{ padding: 0, marginRight: '0px' }" disabled>
                        <div
                            :style="{
                                width: '80px',
                                height: '30px',
                                borderRadius: '2px',
                                background: 'var(--color-fill-3)',
                                cursor: 'text',
                            }"
                        />
                </a-menu-item>
                <a-menu-item key="1"><icon-home />训练简介</a-menu-item>
                <a-menu-item key="2"><icon-list />题目列表</a-menu-item>
                <a-menu-item key="3"><icon-ordered-list />记录榜单</a-menu-item>
                </a-menu>
            </div>
        </a-card>
    </div>

    <div :style="{ display: 'flex' }">
        <a-card :style="{ width: '30%' }">
            <div style="display: flex; justify-content: space-between; padding: 16px;">
                <span style="text-align: left;">训练编号</span>
                <span style="text-align: right;">1000</span>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 16px;">
                <span>训练权限</span>
                <a-tag color="red">私有训练</a-tag>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 16px;">
                <span>训练分类</span>
                <a-tag color="green">C++分类</a-tag>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 16px;">
                <span style="text-align: left;">总题数</span>
                <span style="text-align: right;">3</span>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 16px;">
                <span style="text-align: left;">作者</span>
                <span style="text-align: right;">root</span>
            </div>

            <div style="display: flex; justify-content: space-between; padding: 16px;">
                <span style="text-align: left;">最近更新</span>
                <span style="text-align: right;">2023-09-25 17:59</span>
            </div>

        </a-card>


        <a-card :style="{ width: '70%' }">
            <h3> 训练简介 </h3>
            <div> 这是有关C++的训练 </div>
        </a-card>
    </div>

</template>

<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  background-color: var(--color-neutral-2);
}
</style>