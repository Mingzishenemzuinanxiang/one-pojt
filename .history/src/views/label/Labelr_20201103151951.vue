<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="unread" name="first">
          <template>
            <el-table :data="unreadData">
              <el-table-column prop="title"> </el-table-column>
              <el-table-column prop="date"> </el-table-column>
              <el-table-column prop="id"> </el-table-column>
              <el-table-column prop="status">
                <template slot-scope="{ row }">
                  <el-button v-if="row.status === 1" @click="dian(row)"
                    >未读</el-button
                  >
                  <span v-else>已读</span>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button @click="wholer">全部已读</el-button>
            </div>
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
      unreadData: [
        {
          title:
            "[系统通知]由于近日游客大量增多，本服务器将于今晚进行维护，届时不能登录游戏，王羲之。。。",
          date: "2020-11-03 14:40:18",
          status: 1,
          is_del: 0,
          id: 1,
        },
        {
          title:
            "[系统通知]由于近日游客大量增多，本服务器将于今晚进行维护，届时不能登录游戏，王羲之。。。",
          date: "2020-11-03 14:40:18",
          status: 1,
          is_del: 0,
          id: 5,
        },
        {
          title:
            "[系统通知]由于近日游客大量增多，本服务器将于今晚进行维护，届时不能登录游戏，王羲之。。。",
          date: "2020-11-03 14:40:18",
          status: 1,
          is_del: 0,
          id: 4,
        },
        {
          title:
            "[系统通知]由于近日游客大量增多，本服务器将于今晚进行维护，届时不能登录游戏，王羲之。。。",
          date: "2020-11-03 14:40:18",
          status: 1,
          is_del: 0,
          id: 3,
        },
        {
          title:
            "[系统通知]由于近日游客大量增多，本服务器将于今晚进行维护，届时不能登录游戏，王羲之。。。",
          date: "2020-11-03 14:40:18",
          status: 1,
          is_del: 0,
          id: 2,
        },
      ],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    wholer() {},
    dian(row) {
      this.unreadData.map((item) => {
        if (item === row) {
          item.status = 0;
        }
      });
    },
    
    infonum() {
      let unnum = this.unreadData.filter((item)=>{
          return item.status===1
      }).length
      this.unread=`未读消息(${unnum})` 
    },
    //内部方法
  },
  mounted() {
    this.infonum()
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