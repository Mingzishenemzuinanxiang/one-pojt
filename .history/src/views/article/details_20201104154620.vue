<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          >标题:</el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">{{data.title}}
          </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          >文章摘要:</el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          >{{data.abstract}}
        </el-col>
      </el-row>
      <el-row :gutter="10" style="heigth:300px">
        <el-col :span="4" :offset="0">
            作者：{{data.author}}</el-col>
        <el-col :span="4" :offset="0">类目：{{data.category}}</el-col>
        <el-col :span="4" :offset="0">来源：{{data.source}}</el-col>
        <el-col :span="4" :offset="0">星级：{{data.star}} 星</el-col>
        <el-col :span="4" :offset="0">添加时间：{{data.date}}</el-col>
      </el-row>
        <span>文章内容:</span>
       <div v-html="data.text" ></div>
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
    data(){
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