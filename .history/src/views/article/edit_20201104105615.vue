<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="abstract">
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>
        <el-row :gutter="20">
            <el-col :span="5" :offset="0"></el-col>
            <el-col :span="5" :offset="0"></el-col>
            <el-col :span="5" :offset="0"></el-col>
            <el-col :span="5" :offset="0"></el-col>
            <el-col :span="5" :offset="0"></el-col>
        </el-row>
        
        

      </el-form>
      <!-- card body -->
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      ruleForm: {},
      rules: {
          title:[],
          abstract:[],
      },
    };
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