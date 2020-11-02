<template>
  <div class="s">
   
      <ve-line :data="chartData"></ve-line>
   
    <!-- <el-cart> -->
    <ve-radar :data="chartData1"></ve-radar>
    <!-- </el-cart> -->
    <ve-pie :data="chartData2"></ve-pie>
    <!-- <ve-histogram :data="chartData3"></ve-histogram> -->
  </div>
</template>

<script>
import  veLine from 'v-charts/lib/line';
import  veRadar from 'v-charts/lib/radar';
import  vePie from 'v-charts/lib/pie';
import  veHistogram from 'v-charts/lib/histogram';
// import { veLine, veRadar, vePie, veHistogram } from 'v-charts';
export default {
  name: "",
  props: {},
  data() {
    return {
      chartData: {
        columns: ["date", "expected", "actual"],
        rows: [],
      },
      chartData1: {
        columns: [
          "delelopmer",
          "marketing",
          "ministration",
          "name",
          "sales",
          "techology",
        ],
        rows: [],
      },
      chartData2: {
        columns: [
          "delelopmer",
          "marketing",
          "ministration",
          "name",
          "sales",
          "techology",
        ],
        rows: [],
      },
    };
  },
  components: {
    veLine,
    veRadar,
    vePie,
    veHistogram,
    //注册组件
  },
  methods: {
    getData(url) {
      this.$get(url).then((res) => {
        if (res.code !== 0) {
          this.$message.error("参数错误");
          return;
        }
        if (url === "homeChat") {
          this.chartData.rows = res.data;
        }
        if (url === "radarChat") {
          this.chartData1.rows = res.data;
        }
        if (url === "ringChat") {
        console.log(res);

          this.chartData2.rows = res.data;
        }
      });
    },
    //内部方法
  },
  mounted() {
    this.getData("homeChat");
    this.getData("radarChat");
    this.getData("ringChat");
    //生命周期--已加载
  },
  computed: {
    //计算数学
  },
  watch: {
    //数据监听
  },
  filters: {
    //过滤器
  },
};
</script>

<style lang='scss' scoped>
.s {
  background: #ffff;
  margin-top: 18px;
}
</style>