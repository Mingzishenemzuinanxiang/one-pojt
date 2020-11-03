<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="unread" name="first">
          <template> 未读消息 </template>
        </el-tab-pane>
        <el-tab-pane :label="read" name="second"
          ><template> 
            event
             </template>
          </el-tab-pane>
        <el-tab-pane :label="recycle" name="third"
          ><template>
          回收站
          </template
        ></el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
// import { parseDate } from "@/utils/common.js";

export default {
  name: "labelr",
  props: {},
  data() {
    return {
      activeName: "first",
      unread: `未读消息`,
      read: `已读消息`,
      recycle: `回收站`,
      // ,unreadData:[],
      // mes:{
      //     title:"[系统通知]由于近日游客大量增多，本服务器将于今晚进行维护，届时不能登录游戏，王羲之。。。",
      //     date:parseDate(new Date()),
      //     status:1
      // }
    };
  },
  components: {
    //注册组件
  },
  methods: {
    handleClick(tab,event){
       console.log(tab, event);
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