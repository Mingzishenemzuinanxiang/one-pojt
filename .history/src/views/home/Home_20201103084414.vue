<template>
  <div class="y">
    <el-card class="box-card">
        <navlists></navlists>
    </el-card>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
            <mainlist></mainlist>
    </el-card>
    
    <el-card shadow="always" :body-style="{ padding: '20px' }">
            
    </el-card>
    
  </div>
</template>

<script>
import navlists from "@/components/nav/nav.vue";
import mainlist from "@/components/main/Main";
import mainlist from "@/components/main/Filter";

export default {
  name: "home",
  props: {},
  data() {
    return {};
  },
  components: {
    navlists,
    mainlist,
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
.y {
  height: 80%;
  width: 81%;
}
</style>
