<script setup lang="ts">
import { provide, ref } from 'vue'

import { use } from 'echarts/core'
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import VChart, { THEME_KEY } from 'vue-echarts'

//provide(THEME_KEY, 'dark');

const commitStatistics = ref({
  commit: [220, 182, 191, 234, 290, 330, 310],
  accept: [15, 23, 20, 15, 19, 33, 41]
})

use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
])

const option = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['提交量', '通过量']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  color: [
    '#84DAFF', '#25F145'
  ],
  series: [
    {
      name: '提交量',
      type: 'line',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: commitStatistics.value.commit
    },
    {
      name: '通过量',
      type: 'line',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: commitStatistics.value.accept
    },
    
  ]
})
</script>

<template>
  <div class="statistics-card">
    <h1 style="color: blueviolet">提交统计</h1>

    <v-chart
      class="chart"
      :option="option"
      autoresize
    />

  </div>
</template>

<style scoped>
.statistics-card {
  width: 100%;
  height: calc(100% - 20px);

  padding: 10px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  border-radius: 10px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.chart {
  width: 95%;
  height: 100%;
}
</style>
