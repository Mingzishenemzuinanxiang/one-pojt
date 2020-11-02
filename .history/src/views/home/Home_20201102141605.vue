<template>
  <div>
   <el-card class="box-card">
   <el-row :gutter="20">
        <el-col :span="6"  class="toubu"><div class="grid-content bg-purple" >{{CounterData.messages}}</div></el-col>
        <el-col :span="6" class="toubu"><div class="grid-content bg-purple">{{CounterData.purchases}}</div></el-col>
        <el-col :span="6" class="toubu"><div class="grid-content bg-purple">{{CounterData.shopping}}</div></el-col>
        <el-col :span="6" class="toubu"><div class="grid-content bg-purple">{{CounterData.visits}}</div></el-col>
      </el-row>
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
        messages:0,
        purchases:0,
        shopping:0,
        visits:0,
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
          if (res.code === 0&&url==='homeData') {
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
// .toubu{
//   width: 100px;
//   height: 50px;
//   background: rosybrown;
// }
</style>
