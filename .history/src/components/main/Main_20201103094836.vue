<template>
  <div>
    <div class="s">
      <el-card>
        <el-row>
          <el-col>
            <el-card class="box-card">
              <ve-line :data="chartData"></ve-line>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-card shadow="always">
              <ve-radar :data="chartData1"></ve-radar>
             
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="always">
              <ve-pie :data="chartData2"></ve-pie>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="always">
              <ve-histogram :data="chartData3"> </ve-histogram>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import veLine from "v-charts/lib/line";
import veRadar from "v-charts/lib/radar";
import vePie from "v-charts/lib/pie";
import veHistogram from "v-charts/lib/histogram";
// import { veLine, veRadar, vePie, veHistogram } from 'v-charts';
export default {
  name: "",
  props: {},
  data() {
    return {
      chartData: {
        columns: [],
        rows: [],
      },
      chartData1: {
        columns: [
          "name",
          "delelopmer",
          "marketing",
          "ministration",
          "sales",
          "techology",
        ],
        rows: [],
      },
      chartData2: {
        columns: ["name", "data"],
        rows: [],
      },
      chartData3: {
        columns: ["date", "expected", "actual"],
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
          this.chartData.columns = Object.keys(res.data[0])
          this.chartData3.columns = Object.keys(res.data[0])
          this.chartData.rows = res.data;
          this.chartData3.rows = res.data;
        }
        if (url === "radarChat") {
          this.chartData1.rows = res.data;
        }
        if (url === "ringChat") {
          this.chartData2.rows = res.data;
        }
        if (url === "homeData") {
          this.chartData3.rows = res.data;
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
  margin: 7px 31px;
}
.biankuang {
  position: absolute;
  width: 100%;
}
</style>