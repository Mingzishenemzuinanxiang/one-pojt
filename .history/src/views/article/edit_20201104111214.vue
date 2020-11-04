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
        <el-row :gutter="10">
          <el-col :span="4" :offset="0">
            <el-form-item label="作者" prop="author">
              <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="0">
            <el-form-item label="类目" prop="category">
              <el-input v-model="ruleForm.category"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="0">
            <el-form-item label="来源" prop="source">
              <el-input v-model="ruleForm.source"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="0">
            <el-form-item label="重要性" prop="star">
              <el-input v-model="ruleForm.star"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="0">
            <el-form-item label="发表时间">
              <el-input v-model="ruleForm.date"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="发表时间">
          <mavon-editor v-model="ruleForm.text" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm"
            >发布文章</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
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
        title: [],
        abstract: [],
      },
    };
  },
  components: {
    //注册组件
  },
  methods: {

      submitForm(){
          
      }
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