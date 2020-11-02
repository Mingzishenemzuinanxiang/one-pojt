<template>
  <div class="bian">
    <div class="login-form">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="用户名" prop="name">
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
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="form.code" clearable></el-input>
          <div v-html="img" @click="getDataImg('captcha')" class="catecp"></div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">登录</el-button>
          <el-button type="info" @click="reg">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {},
  data() {
    let validateUsername = (rule, value, callback)=>{
        if (!value) {
          callback(new Error("请输入用户名"))
        } else {
          callback();
        }
    }
    return {
      form: {
        username: "",
        password: "",
        code: "",
      },
      img: "",
      rules: {
        name: [
          { required: true, message: "请输入登录用户名", trigger: "blur",validator: validateUsername},
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
        ],
        code: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {
    //注册组件
  },
  methods: {
    save() {
      this.$refs.form.validate((valid, obj) => {
        if (valid) {
          this.$post("user/login", this.form).then((res) => {
            console.log(res);
            if (res.code !== 200) {
              this.$message.error(res.message);
            } else {
              localStorage.setItem("user", JSON.stringify(res.data));
              this.$message.success(res.message);
              setTimeout(() => {
                this.$router.push({
                  name: "home",
                });
              },1000);
            }
          });
        }
      });
    },
    reg() {
      this.$router.push({
        name: "register",
      });
    },

    getDataImg() {
      this.$get("captcha")
        .then((res) => {
          this.img = res;
        })
        .catch();
    },
    //内部方法
  },
  mounted() {
    this.getDataImg();
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
.login-form {
  width: 26em;
  height: 16em;
  margin: 2em 0 2em 2em;
}
.catecp {
  position: absolute;
  right: 0;
  top: -0.5em;
}
</style>