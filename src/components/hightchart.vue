<template>
  <div class="container"></div>
</template>
<script>
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import Highcharts3D from "highcharts/highcharts-3d";
import cylinder from 'highcharts/modules/cylinder'

import funnel3d from 'highcharts/modules/funnel3d'
import pyramid3d from 'highcharts/modules/pyramid3d'

HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
cylinder(Highcharts);

funnel3d(Highcharts);
pyramid3d(Highcharts)


export default {
  props: ['options'],
  name: 'hightchart',
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
        // 找到类名container的DOM元素
    //   console.log(this.$el);
      this.chart = new Highcharts.Chart(this.$el, this.options);
    },
  }
}
</script>
<style lang="less" scoped>
.container {
  width: 60vw;
  height: 400px;
}
</style>