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
        <el-row>
          <el-col :span="4" :offset="0">
            <el-form-item label="作者" prop="author">
              <el-input v-model="ruleForm.author"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="0">
            <el-form-item label="类目" prop="category">
              <el-select v-model="ruleForm.category" placeholder="请选择类目">
                <el-option
                  v-for="item in selectData"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="0">
            <el-form-item label="来源" prop="source">
              <el-select v-model="ruleForm.source" placeholder="请选择来源">
                <el-option
                  v-for="item in selectData1"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="0">
            <el-form-item label="重要性" prop="star">
              <el-rate v-model="ruleForm.star" :colors="colors"> </el-rate>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="0">
            <el-form-item label="发表时间">
              <el-date-picker
                v-model="ruleForm.date"
                type="datetime"
                placeholder="选择日期时间"
                default-time="12:00:00"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="发表时间">
          <mavon-editor v-model="ruleForm.text" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">发布文章</el-button>
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
        colors:"rgb(255, 153, 0)",
      selectData: [
        { name: "Go" },
        { name: "C" },
        { name: "C#" },
        { name: "C++" },
        { name: "Php" },
        { name: "Node.js" },
        { name: "JavaScript" },
        { name: "Java" },
        { name: "Python" },
        { name: "Vue" },
      ],
      selectData1: [
        { name: "作者专栏" },
        { name: "其他网站抓取" },
        { name: "百度" },
        { name: "谷歌" },
      ],
      ruleForm: {},
      rules: {
        title: [{ required: true, message: "请输入文章标题", trigger: "blur" }],
        abstract: [{ required: true, message: "请输入摘要", trigger: "blur" }],
        author: [{ required: true, message: "请输入作者", trigger: "blur" }],
        category: [{ required: true, message: "请输入类目", trigger: "blur" }],
        source: [{ required: true, message: "请输入来源", trigger: "blur" }],
        star: [{ required: true, message: "请输入重要性", trigger: "blur" }],
        // date:[{required:true,message:"请输入",trigger:"blur"}],
        text: [{ required: true, message: "请输入文本内容", trigger: "blur" }],
      },
    };
  },
  components: {
    //注册组件
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate((v,i)=>{
        console.log('v :>> ', v);
        console.log('i :>> ', i);
      })
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
</style>