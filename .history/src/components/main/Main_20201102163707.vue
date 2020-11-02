<template>
  <div class="s">
    <el-cart>
      <ve-line :data="chartData"></ve-line>
    </el-cart>
    <!-- <el-cart> -->
    <!-- <ve-radar :data="chartData1"></ve-radar> -->
    <!-- </el-cart> -->
    <!-- <el-cart>
    <ve-pie :data="chartData2"></ve-pie>
    </el-cart>
    <el-cart>
    <ve-histogram :data="chartData3"></ve-histogram>
    </el-cart> -->
  </div>
</template>

<script>
import  veLine from 'v-charts/lib/ve-line';
// import { veLine, veRadar, vePie, veHistogram } from 'v-charts';
// import { veLine, veRadar, vePie, veHistogram } from 'v-charts';
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
        console.log(res);
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
      });
    },
    //内部方法
  },
  mounted() {
    this.getData("homeChat");
    this.getData("radarChat");
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