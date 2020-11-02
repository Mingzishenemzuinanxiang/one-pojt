<template>
  <div>
    <el-card class="box-card">
      <el-col :span="4">
          <el-card style="background: rebeccapurple">
            <div class="grid-content bg-purple" style="text-align: center">
              {{ CounterData.messages }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card style="background: rebeccapurple">
            <div class="grid-content bg-purple" style="text-align: center">
              {{ CounterData.purchases }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card style="background: rebeccapurple">
            <div class="grid-content bg-purple" style="text-align: center">
              {{ CounterData.shopping }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card style="background: rebeccapurple">
            <div class="grid-content bg-purple" style="text-align: center">
              {{ CounterData.visits }}
            </div>
          </el-card>
        </el-col>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
      CounterData: {
        messages: 0,
        purchases: 0,
        shopping: 0,
        visits: 0,
      },
    };
  },
  components: {
    //注册组件
  },
  methods: {
    getGetData(url) {
      if (url) {
        this.$get(url).then((res) => {
          console.log(res);
          if (res.code === 0 && url === "homeData") {
            this.CounterData = res.data;
          }
        });
      } else {
      }
    },
    //内部方法
  },
  mounted() {
    this.getGetData("homeData");

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
</style>
