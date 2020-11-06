<template>
  <div class="y">
    <el-container>
      <el-header style="font-size: 12px" class="header">
        <div>
          <h1>欢迎{{ username }}来到管理系统</h1>
        </div>
        <div>
          <span>{{ say }}</span>
          <span style="color: red">亲爱的 &nbsp;{{ username }}</span>
          <span>上次登录时间:{{ time }}</span>
        </div>
      </el-header>
      <el-container class="h100">
        <el-aside width="132px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            active-text-color="#ffffff"
          >
            <el-menu-item
              class="el-menu-vertical-demo"
              v-for="(item, index) in lists"
              :default-active="$router.name"
              :key="index"
              @click="go(item)"
              :class="{ color1: $router.name === item.name }"
              ><i :class="item.ico"> </i>{{ item.name }}</el-menu-item
            >
            <el-menu-item @click="del"
              ><i class="el-icon-switch-button"> </i>退出系统</el-menu-item
            >
          </el-menu>
        </el-aside>
        <el-container>
          <el-main class="main-back">
            <router-view></router-view>
          </el-main>
          <el-footer class="foter"
            >本系统由专业会计有限公司&copy;进行维护及使用</el-footer
          >
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { toTime } from '@/utils/common.js';

export default {
  name: "",
  props: {},
  data() {
    return {
      lists: [
        { name: "首页", ico: "el-icon-s-platform", go: "home", check: true },
        { name: "已发布", ico: "el-icon-s-order", go: "lists", check: false },
        { name: "统计", ico: "el-icon-s-marketing", go: "statistics", check: false },
        { name: "发表文章", ico: "el-icon-edit-outline", go: "article", check: false },
        { name: "标签页", ico: "el-icon-s-grid", go: "label", check: false },
        { name: "上传", ico: "el-icon-upload2", go: "uploads", check: false },
        { name: "导出excel", ico: "el-icon-printer", go: "excel", check: false },
      ],
      i: "",
      // timeone:parseDate(new Date())
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
            if (res.code === 0) {
              this.$message.success(res.message);
              localStorage.removeItem("user");
              localStorage.removeItem("title");
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
      // this.additem(item);
      if (!item.go) return;

      if (localStorage.getItem('edit')) {
        localStorage.removeItem('edit')
      }
      this.$router.push({ name: item.go });
      
      
    },

    additem(item) {
      // this.i = item.name;
      // localStorage.setItem("title", this.i);
    },
    //内部方法
  },

  mounted() {

    console.log(this.$route);
    // this.i = localStorage.getItem("title")
    //   ? localStorage.getItem("title")
    //   : "首页";
    // this.go(this.i);
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
    time() {
      let user = localStorage.getItem("user");
      if (user) {
        user = JSON.parse(user);
        return toTime(user[0].data);
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
.el-container {
  height: 100%;
}

.el-aside {
  color: #333;
}
.color1 {
  background-image: repeating-linear-gradient(45deg, black, transparent 100px);
}
.header {
  justify-content: space-between;
  display: flex;
}
.main-back {
  background: #eae0e0;
}
.foter {
  height: 0 !important;
  font-size: 10px;
  text-align: center;
}
</style>