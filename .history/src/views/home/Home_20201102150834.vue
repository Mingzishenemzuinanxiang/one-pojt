<template>
  <div class="y">
    <div class="y1">
      <el-col :span="4">
          <el-card class="bar-blue">
            <div class="grid-content bg-purple" style="text-align: center">
               <countTo startVal='0' :endVal='CounterData.messages' :duration='3000'></countTo>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card class="bar-c">
            <div class="grid-content bg-purple" style="text-align: center">
              {{ CounterData.purchases }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card class="bar-red">
            <div class="grid-content bg-purple" style="text-align: center">
              {{ CounterData.shopping }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card class="bar-gre">
            <div class="grid-content bg-purple" style="text-align: center">
              {{ CounterData.visits }}
            </div>
          </el-card>
        </el-col>
    </div>
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
.y1{
    display: flex;
    justify-content: space-around;
}
.y{
  height: 80%;
  width: 81%;
}
.bar-gre{
  background: greenyellow;
}
.bar-red{
  background: red;
}
.bar-c{
  background: rgb(211, 39, 211);
}

.bar-blue{
  background: rgb(39, 211, 182);
}
</style>
