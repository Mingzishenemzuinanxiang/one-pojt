<template>
  <div>
   <el-card class="box-card">
   <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple">11</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">22</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">33</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">44</div></el-col>
      </el-row>
    </el-card>
   
      <!-- <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div> -->
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
      CounterData: null,
    };
  },
  components: {
    //注册组件
  },
  methods: {
    getGetData(url) {
      if (url) {
        this.$get(url).then((res) => {
          if (res.code === 0) {
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
