<template>
  <div class="s">
    <el-cart>
    <ve-line :data="chartData"></ve-line>

    </el-cart>
  </div>
</template>

<script>
import VeLine from "v-charts/lib/line";

export default {
  name: "",
  props: {},
  data() {
    return {
      chartData: {
        columns: ["date", "expected", "actual"],
        rows: [],
      },
    };
  },
  components: {
    VeLine,
    //注册组件
  },
  methods: {
    getData() {
      this.$get("homeChat").then((res) => {
        console.log(res);
        if (res.code === 0) {
          this.chartData.rows = res.data;
        }
      });
    },
    //内部方法
  },
  mounted() {
    this.getData();
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