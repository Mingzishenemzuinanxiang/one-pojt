<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        >
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {},
  data() {
    return {
      CounterData:null
    };
  },
  components: {
    //注册组件
  },
  methods: {
    getGetData(url){
      if (url) {
        this.$get(url).then(res=>{
          console.log(res);
        })
      } else {
        
      }
    }
    //内部方法
  },
  mounted() {
    this.getGetData('homeData')

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
