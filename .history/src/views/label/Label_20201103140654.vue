<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="unread" name="first">未读消息</el-tab-pane>
        <el-tab-pane :label="read" name="second">已读消息</el-tab-pane>
        <el-tab-pane :label="recycle" name="third">回收站</el-tab-pane>
        
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
        activeName: 'first'
        ,unread:`未读消息`
        ,read:`已读消息`,
        recycle:`回收站`
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