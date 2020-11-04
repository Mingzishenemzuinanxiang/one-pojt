<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
        <el-row>
        <el-col :span="6">
            今日发布：
        </el-col>
        <el-col :span="6">
            原创：
        </el-col>
        <el-col :span="6">
            新留言：
        </el-col>
        <el-col :span="6">
            新消息：
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"></el-col>
        <el-col :span="12"></el-col>
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

      getData(){
          this.$get('article/allArticle').then(res=>{
              console.log(res);
          })
      }
    //内部方法
  },
  mounted() {
      this.getData()
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