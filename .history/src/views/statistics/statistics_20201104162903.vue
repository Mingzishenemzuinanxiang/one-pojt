<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <el-row>
        <el-col :span="6"> 今日发布：{{ info.tadaynum }} </el-col>
        <el-col :span="6"> 原创：{{ info.yuanchuang }} </el-col>
        <el-col :span="6"> 新留言：{{ info.newliuyan }} </el-col>
        <el-col :span="6"> 新消息：{{ info.newmessage }} </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"></el-col>
        <el-col :span="12"></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { toTime } from "@/utils/common.js";

export default {
  name: "",
  props: {},
  data() {
    return {
      info: {
        tadaynum: 0,
        yuanchuang: 0,
        newliuyan: 0,
        newmessage: 0,
      },

      list: [],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    infoNum() {
      let t = toTime(new Date(), "YYYY-MM-DD");
      console.log(this.list);
    //   this.list.filter((item) => {
    //     return item.date.includes(t);
    //   });
     
    },
    getData() {
      this.$get("article/allArticle").then((res) => {
        if(res.code===200){
            this.list = res.data;
            console.log(this.list);
        }
      });
    },
    //内部方法
  },
  mounted() {
    this.getData();
    this.infoNum();
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