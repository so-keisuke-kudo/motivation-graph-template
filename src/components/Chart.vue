<template>
  <div id="contents">
    <canvas ref="chart"></canvas>
  </div>
</template>
<script>
import {Chart} from 'chart.js';

export default {
  name: 'Chart',
  props: {
    chart: {
      type: Object,
      required: true
    }
  },
  mounted() {
    new Chart(
        this.$refs.chart,
        {
          type: 'line',
          data: this.chart,
          options: {
            scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: '年齢'
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'モチベーション'
                },
                ticks: {
                  suggestedMin: -100,
                  suggestedMax: 100,
                }
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              mode: 'index',
              displayColors: false,
              callbacks: {
                title: (item) => `${item[0].label} 歳`,
                label: (item) => `モチベーション: ${item.value} %`
              }
            }
          }
        }
    )
  }
}
</script>
