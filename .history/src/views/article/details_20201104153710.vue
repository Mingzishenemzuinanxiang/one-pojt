<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          >标题:</el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content bg-purple"></div
        ></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
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
    details(){
        return JSON.parse(localStorage.getItem('details'))
    }
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