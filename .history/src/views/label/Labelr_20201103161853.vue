<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <el-tabs v-model="activeName" @tab-click="handclick">
        <el-tab-pane :label="unread" name="first">
          <template>
            <el-table :data="unreadData">
              <el-table-column prop="title"> </el-table-column>
              <el-table-column prop="date"> </el-table-column>
              <el-table-column prop="id"> </el-table-column>
              <el-table-column prop="status">
                <template slot-scope="{ row }">
                  <el-button v-if="row.status === 1" @click="dian(row,'dian')"
                    >未读</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button @click="wholer">全部已读</el-button>
            </div>
          </template>
        </el-tab-pane>
        <el-tab-pane :label="read" name="second"
          ><template>  
             <el-table :data="readData">
              <el-table-column prop="title"> </el-table-column>
              <el-table-column prop="date"> </el-table-column>
              <el-table-column prop="id"> </el-table-column>
              <el-table-column prop="status">
                <template slot-scope="{ row }">
                  <el-button v-if="row.is_del === 0" @click="dian(row,'del')"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button @click="wholer">全部删除</el-button>
            </div>
          </template>
        </el-tab-pane>
        <el-tab-pane :label="recycle" name="third"
          ><template>  <el-table :data="readData">
              <el-table-column prop="title"> </el-table-column>
              <el-table-column prop="date"> </el-table-column>
              <el-table-column prop="id"> </el-table-column>
              <el-table-column prop="status">
                <template slot-scope="{ row }">
                  <el-button v-if="row.is_del === 0" @click="dian(row,'recovery')"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button @click="wholer">全部恢复</el-button>
            </div> </template></el-tab-pane
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
      readData: [],
      unreadData: [],
      deldData: [],
      lists: [
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
    handclick(tab, event) {
      console.log(tab.name);
      switch (tab.name) {
        case "first":
          return this.unreadData;
          break;
        case "second":
          return this.readData;
          break;
        case "third":
          break;

        default:
          break;
      }
    },

    wholer() {},
    dian(row,fun) {
      switch (fun) {
        case "dian":
              this.unreadData.splice(row, 1);
              this.readData.push(row);
          break;
        case "del":
              this.unreadData.splice(row, 1);
              this.readData.push(row);
          break;
        case "recovery":
              this.unreadData.splice(row, 1);
              this.readData.push(row);
          break;
      
        default:
          break;
      }
      this.infonum();
    },

    infonum() {
      let unnum = this.unreadData.filter((item) => {
        return item.status === 1;
      }).length;
      let unnum1 = this.readData.filter((item) => {
        return item.is_del === 1;
      }).length;
      this.unread = `未读消息(${unnum})`;
      this.read = `已读消息(${this.lists.length - unnum})`;
      this.recycle = `回收站(${unnum1})`;
    },
    //内部方法
  },
  mounted() {
    this.unreadData = JSON.parse(JSON.stringify(this.lists));
    this.infonum();
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