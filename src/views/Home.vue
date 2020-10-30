<template>
  <div>
    <div>
      <banner></banner>
      <mains></mains>
    </div>
  </div>
</template>

<script>
import banner from "@/components/banner/Banner";
import mains from "../components/main/Main";

export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    //注册组件
    banner,
    mains,
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
</style>
