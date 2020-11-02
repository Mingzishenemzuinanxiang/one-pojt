<template>
  <div class="y">
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="flex">
            <h1>欢迎{{username}}来到管理系统</h1>
        </div>
        <div class="flex">
          <span>{{ say }}</span>
          <span style="color: red">亲爱的 &nbsp;{{ username }}</span>
          <span>上次登录时间:{{time}}</span>
        </div>
       
        <!-- <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown> -->
        </el-header>
      <el-container class="h100">
          <el-aside width="200px">
          <el-menu>
            <el-menu-item
              class="el-menu-vertical-demo"
              v-for="(item, index) in lists"
              :key="index"
              @click="go(item)"
              :class="{'color1':i===item.name}"
              ><i :class="item.ico"> </i>{{ item.name }}</el-menu-item>
            <el-menu-item @click="del" ><i class="el-icon-switch-button"> </i>退出系统</el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import nav from '@/components/nav/nav';

export default {
  name: "",
  props: {},
  data() {
    return {
      lists: [
        { name: "首页", ico: "el-icon-s-platform", go: "", check: false },
        { name: "已发布", ico: "el-icon-s-order", go: "", check: false },
        { name: "统计", ico: "el-icon-s-marketing", go: "", check: false },
        { name: "发表文章", ico: "el-icon-edit-outline", go: "", check: false },
        { name: "标签页", ico: "el-icon-s-grid", go: "", check: false },
        { name: "导出excel", ico: "el-icon-printer", go: "", check: false },
      ],
      i:""
    };
  },
  components: {
    //  nav
    //注册组件
  },
  methods: {
    del() {
      this.$confirm("确定退出登录吗？", "退出登录")
        .then((res) => {
          this.$get("user/logout").then((res) => {
            console.log(res);
            if (res.code === 0) {
              this.$message.success(res.message);
              localStorage.removeItem("user");
              setTimeout(() => {
                this.$router.push({ name: "login" });
              }, 1000);
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    go(item) {
      this.i = item.name
      if (!item.go) return;
      this.$router.push({ name: url });
    },
    //内部方法
  },
  mounted() {
    //生命周期--已加载
  },
  computed: {
    username() {
      let user = localStorage.getItem("user");
      if (user) {
        user = JSON.parse(user);
        return user[0].username;
      }
    },
    time(){
      let user = localStorage.getItem("user");
      if (user) {
        user = JSON.parse(user);
        return user[0].date;
      }
    },
    say() {
      let user = localStorage.getItem("user");
      if (user) {
        let time = new Date();
        let h = time.getHours();
        if (h >= 0 && h < 6) {
          return "该睡觉了";
        }
        if (h >= 6 && h < 12) {
          return "早上好";
        }
        if (h >= 12 && h < 14) {
          return "中午好";
        }
        if (h >= 14 && h <= 18) {
          return "下午好";
        }
        if (h >= 19 && h <= 23) {
          return "晚上好";
        }
      }
    },
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
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.color1{
  background-image: repeating-linear-gradient(45deg, black, transparent 100px);
}
</style>