<template>
  <div class="y">
    <el-container class="h100" style="border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"> </i>导航一
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
            <el-menu-item @click="del"><i class="el-icon-switch-button"> </i>退出系统</el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <span>{{ say }}</span>
           
          <span style="color:red">{{ username }}</span>
          <el-dropdown>
           <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <el-main>
          这里是主体
          <router-view></router-view>  
        </el-main>
        <el-footer>
          这里是底部
        </el-footer>
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
    return {};
  },
  components: {
    //  nav
    //注册组件
  },
  methods: {
    del(){
      this.$confirm("确定退出登录吗？",'退出登录',).then(res=>{
        this.$get('user/logout').then(res=>{
            console.log(res)
            if(res.code===0){
                this.$message.success(res.message);
                localStorage.removeItem('user')
                setTimeout(()=>{
                    this.$router.push({name:"login"})
                },1000)
            }
        })
      }).catch(err=>{
        console.log(err)
      })
    }
    //内部方法
  },
  mounted() {
    //生命周期--已加载
  },
  computed: {
    username() {
     let user = localStorage.getItem("user");
      if (user) {
        user = JSON.parse(user)
        return user[0].username
      }
    },
    say() {
      let user = localStorage.getItem("user");
      if (user) {
        let time = new Date();
        let h = time.getHours()
        if (h>=0 && h<6) {
          return "该睡觉了"
        }
        if (h>=6 && h<12) {
          return "早上好"
        }
        if (h>=12 && h<14) {
          return "中午好"
        }
        if (h>=14 && h<=18) {
          return "下午好"
        }
        if (h>=19 && h<=23) {
          return "晚上好"
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

</style>