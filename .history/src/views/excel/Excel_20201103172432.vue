<template>
  <div>
    <el-table :data="tabalLists" style="width: 100%" >
      <el-table-column fixed prop="NAME" label="名称" >
      </el-table-column>
      <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" >
      </el-table-column>
      <el-table-column prop="ORI_PRICE" label="原价" >
      </el-table-column>
      <el-table-column prop="PRESENT_PRICE" label="现价" >
      </el-table-column>
     
      <el-table-column align="right" width="200">
        <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "excel",
  props: {},
  data() {
    return {
      tabalLists: [],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    getData() {
      this.$get("tableData?limit=10&&page=1").then((res) => {
        console.log(res);
         if (res.code===0) {
           this.tabalLists = res.data
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