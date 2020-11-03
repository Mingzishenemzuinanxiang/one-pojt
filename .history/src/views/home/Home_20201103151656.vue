<template>
  <div class="y">
    <el-card class="box-card">
        <navlists></navlists>
    </el-card>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <mainlist></mainlist>
    </el-card>
      <filterlist></filterlist>
    
  </div>
</template>

<script>
import navlists from "@/components/nav/nav.vue";
import mainlist from "@/components/main/Main";
import filterlist from "@/components/main/Filter";

export default {
  name: "home",
  props: {},
  data() {
    return {};
  },
  components: {
    navlists,
    mainlist,
    filterlist,
    //注册组件
  },
  methods: {
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
