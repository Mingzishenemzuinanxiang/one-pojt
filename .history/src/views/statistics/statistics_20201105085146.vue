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
        <el-col :span="12">
          <ve-pie :data="chartData"></ve-pie>
        </el-col>
        <el-col :span="12">
          <ve-pie :data="chartData1" :settings="chartSettings"></ve-pie>
        </el-col>
      </el-row>
      <el-row>
     <ve-waterfall :data="chartData2"></ve-waterfall>
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
    this.chartSettings = {
      roseType: "radius",
    };
    return {
      info: {
        tadaynum: 0,
        yuanchuang: 0,
        newliuyan: 0,
        newmessage: 0,
      },
      //统计1
      chartData: {
        columns: [],
        rows: [],
      },
      chartData1: {
        columns: [],
        rows: [],
      },
      chartData2: {
        columns: [],
        rows: [],
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
      //发布
      this.info.tadaynum = this.list.filter((item) => {
        return item.date.includes(t);
      }).length;
      //原创
      this.info.yuanchuang = this.list.filter((item) => {
        return item.source.includes("作者专栏");
      }).length;
    },

    statistics() {
        const res = new Map();
        let row = this.chartData.rows;
        this.chartData.columns = ["语言", "数量"];
        this.list.map((item, index) => {
           row.push({ "语言": item.category, "数量": 1, "name": item.category });
        });
        let lists =  row.filter((a) => !res.has(a.name) && res.set(a.name, 1));
        lists.map((item)=>{
            item.数量 = this.list.filter((i)=>{
                return item.name=== i.category
            }).length
        })
        this.chartData.rows = lists


         let row1 = this.chartData1.rows;
        this.chartData1.columns = ["语言", "数量"];
        this.chartData2.columns = ["语言", "数量"];
        this.list.map((item, index) => {
           row.push({ "语言": item.source, "数量": 1, "name": item.source });
        });
        let lists1 =  row.filter((a) => !res.has(a.name) && res.set(a.name, 1));
        lists1.map((item)=>{
            item.数量 = this.list.filter((i)=>{
                return item.name=== i.source
            }).length
        })
        this.chartData1.rows = JSON.parse(JSON.stringify(lists1))
        this.chartData2.rows = JSON.parse(JSON.stringify(lists1))
    },

    getData() {
      this.$get("article/allArticle").then((res) => {
        if (res.code === 200) {
          this.list = res.data;
          this.infoNum();
          this.statistics();
            // console.log("this.list :>> ", this.list);
        }
      });
    },
    //内部方法
  },
  mounted() {
    this.getData();
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