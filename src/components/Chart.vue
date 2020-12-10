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
  data() {
    return {
      memos: []
    }
  },
  mounted() {
    const {motivations, memos} = this.format(this.chart);
    if (motivations.length === 0 || motivations.length !== memos.length) {
      throw Error('JSON format is invalid');
    }
    this.chart.datasets[0].data = motivations;
    this.memos = memos;
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
                label: (item) => `モチベーション: ${item.value} %`,
                footer: (item) => this.memos[item[0].label],
              }
            }
          }
        }
    )
  },
  methods: {
    format: function(json) {
      const base = json.datasets[0]?.data ?? [];
      const motivations = [];
      const memos = [];
      base.forEach((d) => {
        motivations.push(d.motivation);
        memos.push(d.memo);
      });

      return { motivations, memos };
    }
  },
}
</script>
