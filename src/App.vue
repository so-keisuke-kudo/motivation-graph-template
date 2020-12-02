<template>
  <div>
    <LineChart :chart="chart" />
  </div>
</template>

<script>
import LineChart from './components/Chart.vue';
import json from '../source/chart.json';

export default {
  name: 'App',
  components: {
    LineChart
  },
  data() {
    return {
      chart: json
    }
  }
}
</script>
