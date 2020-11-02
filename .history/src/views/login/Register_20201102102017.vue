<template>
  <div class="bian">
    <el-container>
      <el-main>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
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
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.password !== "") {
          this.$refs.form.validateField("password");
        }
        callback();
      }
    };
    let validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不能为空"));
      } else {
        let va = new RegExp([一 - 龥]);
        va ? callback(new Error("用户名不能是中文")) : callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
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
            // trigger: "blur",
            validator: validatePass,
          },
          {
            min: 6,
            max: 12,
            message: "密码长度为6-12位",
          },
        ],
        username: [
          {
            required: true,
            // trigger: "blur",
            validator: validateUsername,
          },
          {
            min: 4,
            max: 8,
            message: "用户名长度为4-8位",
          },
        ],
        pass: [
          {
            required: true,
            // trigger: "blur",
            validator: validatePass2,
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