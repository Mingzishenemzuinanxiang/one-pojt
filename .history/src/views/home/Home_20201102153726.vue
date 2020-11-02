<template>
  <div class="y">
    <nav></nav>
  </div>
</template>

<script>
import nav from '@/components/nav/nav'
export default {
  name: "home",
  props: {},
  data() {
    return {
     
    };
  },
  components: {
    nav
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
