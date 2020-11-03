<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="unread" name="first">
          <template>
            <el-table :data="unreadData" >
              <el-table-column prop="title"  >
              </el-table-column>
              <el-table-column prop="date"  >
              </el-table-column>
              <el-table-column prop="status" > 
                <template slot-scope="{row}">
                  <el-button @click="dian('row')" v-if="row.status===1">未读</el-button>
                  <span  v-else>已读</span>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-tab-pane>
        <el-tab-pane :label="read" name="second"
          ><template> event </template>
        </el-tab-pane>
        <el-tab-pane :label="recycle" name="third"
          ><template> 回收站 </template></el-tab-pane
        >
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { parseDate } from "@/utils/common.js";

export default {
  name: "labelr",
  props: {},
  data() {
    return {
      activeName: "first",
      unread: `未读消息`,
      read: `已读消息`,
      recycle: `回收站`,
      unreadData: [],
      mes: {
        title:
          "[系统通知]由于近日游客大量增多，本服务器将于今晚进行维护，届时不能登录游戏，王羲之。。。",
        date: parseDate(new Date()),
        status: 0,
      },
    };
  },
  components: {
    //注册组件
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

    getData() {
      for (let index = 0; index < 5; index++) {
        this.unreadData.push(this.mes);
      }
    },
    //内部方法
  },
  mounted() {
    this.getData()
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