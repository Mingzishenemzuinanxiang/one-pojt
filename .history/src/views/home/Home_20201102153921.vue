<template>
  <div class="y">
    <navlists></navlists>
    <main-data></main-data>
  </div>
</template>

<script>
import navlists from '@/components/nav/nav.vue'
import mainData from '@/components/nav/Main.vue'
export default {
  name: "home",
  props: {},
  data() {
    return {
     
    };
  },
  components: {
    navlists,
    mainData,
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

.y{
  height: 80%;
  width: 81%;
}
</style>
