<template>
  <div>
    <el-card class="box-card">
      <el-col :span="8">
    <el-card shadow="always">
      总是显示
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="always">
      总是显示
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="always">
      总是显示
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="always">
      总是显示
    </el-card>
  </el-col>

      <!-- <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div> -->
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
          if (res.code===0) {
            this.CounterData = res.data
          }
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
