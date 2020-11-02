<template>
  <div class="bian">
    <el-container>
      <el-main>
        <el-form ref="form" :model="form" label-width="80px"  :rules="rules">
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="form.username"
              suffix-icon="el-icon-user"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="form.password"
              suffix-icon="el-icon-key"
              type="password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="pass">
            <el-input
              v-model="form.pass"
              suffix-icon="el-icon-key"
              type="password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="info" @click="reg">提交</el-button>
            <el-button @click="go">返回上一页</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "register",
  props: {},
  data() {
    
    return {
      form: {
        username: "",
        password: "",
        pass: "",
      },
      rules: {
        password: [
          {
            required: true,
            trigger: "blur",
            validator: validatePass,
            min: 6,
            max: 12,
          },
        ],
      },
    };
  },
  components: {
    //注册组件
  },
  methods: {
    reg() {
      this.$refs.form.validate((v, o) => {
        if (v) {
          this.$post("user/register", this.form)
            .then((res) => {
              if (res.code !== 200) {
                this.$message.error(res.message);
              } else {
                this.$message.success(res.message);
                setTimeout(() => {
                  this.go();
                }, 1000);
              }
            })
            .catch();
        }
      });
    },
    go(url = "login") {
      this.$router.push({
        name: url,
      });
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
.reg-form {
  width: 26em;
  height: 16em;
  margin: 2em 0 2em 2em;
}
el-header {
  height: 0;
}
</style>